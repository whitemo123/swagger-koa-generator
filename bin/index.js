#!/usr/bin/env node

// 命令行工具
const { program } = require('commander');
// 命令行交互
const inquirer = require('inquirer');
// 主要业务逻辑
const ActionClass = require('../action.js');

const path = require("path")

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
    const actionClass = new ActionClass(answers, path.join(__dirname, "../"));
    actionClass.generate();
  });

  //node .\bin\index.js g -ptest1 -wE:\testWorkspace -shttp://192.168.1.222:8081/doc.html
  program
  .command('g')
  .description('Create a new Project Without Input')
  .option('-p, --projectName <projectName>', 'project name')
  .option('-w, --workspace <workspace>', 'workspace path')
  .option('-s, --swaggerUrl <swaggerUrl>', 'swagger url')
  .action(async (params) => {
    // 执行逻辑
    const actionClass = new ActionClass({...params, needApi: true}, path.join(__dirname, "../"));
    actionClass.generate();
  });

// Parsing the command line arguments
program.parse(process.argv);
