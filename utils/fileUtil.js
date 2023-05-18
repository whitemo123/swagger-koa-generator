import fs from "fs";
import path from "path";

/**
 * 创建文件
 * @param filename 文件路径
 */
export function createFile(filename) {
  fs.writeFileSync(filename, '');
}

/**
 * 文件是否存在
 * @param filename 文件路径
 */
export function fileExists(filename) {
  return fs.existsSync(filename);
}
