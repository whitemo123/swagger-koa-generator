const fs = require("fs");
const path = require("path")

/**
 * 创建文件
 * @param filename 文件路径
 */
function createFile(filename) {
  fs.writeFileSync(filename, '');
}

/**
 * 文件是否存在
 * @param filename 文件路径
 */
function fileExists(filename) {
  return fs.existsSync(filename);
}

module.exports = {
  createFile,
  fileExists
}
