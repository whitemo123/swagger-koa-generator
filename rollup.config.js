const { terser } = require('rollup-plugin-terser')
const commonjs = require('@rollup/plugin-commonjs')

module.exports = {
  // 项目入口
  input: 'action.js',
  // 打包后的出口和设置
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: false,
    exports: 'default',
  },
  plugins: [commonjs(), terser()],
}
