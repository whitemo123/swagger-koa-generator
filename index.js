// 命令行工具
import { program } from 'commander';
// 命令行交互
import inquirer from 'inquirer';
// 主要业务逻辑
import ActionClass from './action.js';

program
  .command('create')
  .description('Create a new Project')
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        // 项目名字(文件夹名称)
        type: 'input',
        name: 'projectName',
        message: 'Enter your projectName:'
      },
      {
        // 项目目录
        type: 'input',
        name: 'workspace',
        message: 'Enter your workspace(project dir):'
      },
      {
        // swagger地址
        type: 'input',
        name: 'swaggerUrl',
        message: 'Enter your project swagger url:'
      },
      {
        // 是否需要全局/api前缀
        type: 'confirm',
        name: 'needApi',
        message: 'Use global prefix(/api)?',
        default: true
      }
    ]);
    // 执行逻辑
    const actionClass = new ActionClass(answers);
    actionClass.generate();
  });

// Parsing the command line arguments
program.parse(process.argv);
