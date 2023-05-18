/**
 *  批量注册路由
 */
const requireDirectory = require("require-directory");
// 获取当前目录
const currentDir = process.cwd();
// router 是路由文件夹名称
const path = `${currentDir}/routes`;

class Init {
  static init(app) {
    requireDirectory(module, path, {
      visit: visitor,
    });
    function visitor(rot) {
      app.use(rot.routes(), rot.allowedMethods());
    }
  }
}
module.exports = {
  Init,
};
