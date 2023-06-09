// ejs
const ejs = require("ejs");
// http工具
const { get } = require("./utils/httpUtil.js");
// 文件函数
const { fileExists } = require("./utils/fileUtil.js");
const fs = require("fs-extra");

const beautify = require("js-beautify");

const { getResponse, groupArrByPath } = require("./utils/core.js");

class ActionClass {
  // 配置对象
  #option = {};
  // 模块数组
  #modules = [];
  // 当前路径
  #currentDir = "";
  /**
   * 初始化
   */
  constructor(data, currentDir) {
    if (!data.projectName) {
      throw new Error("please input your projectName");
    }
    if (!data.workspace) {
      throw new Error("please input your workspace");
    }
    if (fileExists(data.workspace + "/" + data.projectName)) {
      throw new Error(`${data.workspace}/${data.projectName} is exist`);
    }
    if (!data.swaggerUrl) {
      throw new Error("please input your swaggerUrl");
    }
    if (!currentDir) {
      throw new Error("currentDir is null");
    }
    // 处理swagger url
    data.swaggerUrl = data.swaggerUrl.replace("/doc.html", "");
    this.#option = data;
    this.#currentDir = currentDir;
  }

  /**
   * 获取模块信息
   */
  async #getModulesInfo() {
    this.#log("开始获取模块集合");
    try {
      const modulesInfo = await get(
        this.#option.swaggerUrl + "/v3/api-docs/swagger-config"
      );
      let modules = [];
      if (!modulesInfo.urls || modulesInfo.urls.length === 0) {
        throw new Error("modules为空");
      }
      modules = modulesInfo.urls.map((item) => item.name);
      this.#modules = modules;
      console.log(this.#modules);
      this.#log("完成获取模块集合");
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
   * 创建项目文件
   */
  async #createProjectFile() {
    this.#log("开始创建项目文件");
    // 创建项目结构
    await fs.copySync(
      `${this.#currentDir}templates`,
      `${this.#option.workspace}/${this.#option.projectName}`
    );
    // 生成app.js文件
    await this.#renderFile(
      `${this.#currentDir}static/app.ejs`,
      `${this.#option.workspace}/${this.#option.projectName}/app.js`,
      { needApi: this.#option.needApi }
    );
    this.#log("生成app.js完毕");
    this.#log("完成创建项目文件");
  }

  /**
   * 生成模块代码
   * @param {*} moduleName 模块名
   * @param {*} tagName 分类
   * @param {*} schemas 数据结构集合
   * @param {*} routes controller集合
   */
  async #generateModule(moduleName, tagName, schemas, routes) {
    return new Promise(async (resolve) => {
      await this.#renderFile(
        `${this.#currentDir}static/router.ejs`,
        `${this.#option.workspace}/${
          this.#option.projectName
        }/routes/${moduleName}/${tagName}.js`,
        { routes }
      );
      resolve(null);
    });
  }

  /**
   * 获取controller数据
   * @param {*} item
   * @returns
   */
  #getHttpData(item) {
    return {
      method: item.get
        ? "get"
        : item.post
        ? "post"
        : item.put
        ? "put"
        : "delete",
      data: item.get || item.post || item.put || item.delete,
    };
  }

  /**
   * 创建模块文件
   * @param {string} moduleName 模块名
   */
  async #createModule(moduleName) {
    this.#log("开始创建" + moduleName + "模块文件");
    // 创建文件夹
    await fs.mkdirsSync(`${this.#option.workspace}/${this.#option.projectName}/routes/${moduleName}`)
    return new Promise(async (resolve) => {
      try {
        const moduleInfo = await get(
          `${this.#option.swaggerUrl}/v3/api-docs/${moduleName}`
        );
        // === controller集合处理 ===
        let paths = moduleInfo.paths;
        let pathGroup = groupArrByPath(paths)
        for (let pathGroupKey in pathGroup) {
          paths = pathGroup[pathGroupKey]
          let schemas = moduleInfo.components.schemas;
          const routes = [];
          for (let i = 0; i < paths.length; i++) {
            const pathsItem = paths[i];
            const data = this.#getHttpData(pathsItem['item'])["data"];
            const key = pathsItem.url;
            let url = "";
            if (key.indexOf("{") != -1) {
              url = key.replace(/{([^}]+)}/g, ":$1");
            } else {
              url = key;
            }
            routes.push({
              url: url,
              method: this.#getHttpData(pathsItem['item'])["method"],
              summary: `${data["tags"][0]}${data["summary"]}`,
              res: getResponse(
                data?.responses["200"]?.content["*/*"]?.schema?.$ref || "",
                schemas
              ),
            });
          }
          await this.#generateModule(moduleName, pathGroupKey,  {}, routes);
        }
        // =========================
        this.#log("完成创建" + moduleName + "模块文件");
        resolve(null);
      } catch (e) {
        throw new Error(e);
      }
    });
  }

  /**
   * 创建模块文件
   */
  async #createModulesFile() {
    this.#log("开始创建模块文件");
    let promiseArr = this.#modules.map((item) => this.#createModule(item));
    return new Promise((resolve) => {
      Promise.all(promiseArr).then((e) => {
        this.#log("完成创建模块文件");
        resolve(null);
      });
    });
  }

  /**
   * 根据ejs模板生成文件
   * @param {string} templatePath 模板路径
   * @param {string} outPath 输出路径
   * @param {object} data 模板数据
   * @returns
   */
  #renderFile(templatePath, outPath, data) {
    return new Promise((resolve) => {
      ejs.renderFile(templatePath, data, (err, str) => {
        if (err) {
          throw new Error(err);
        }
        fs.createFileSync(outPath);
        const res = fs.writeFileSync(
          outPath,
          beautify.js(str, { indent_size: 2, space_in_empty_paren: true })
        );
        if (res) {
          throw new Error(res);
        }
        resolve(null);
      });
    });
  }

  /**
   * 日志输出
   * @param {string} title 日志内容
   */
  #log(title) {
    console.log("======== " + title + " ========");
  }

  /**
   * 生成代码
   */
  async generate() {
    // 获取模块信息
    await this.#getModulesInfo();
    // 生成项目大体文件
    await this.#createProjectFile();
    // 创建模块文件
    await this.#createModulesFile();
  }
}

module.exports = ActionClass;
