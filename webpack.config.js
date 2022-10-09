//引入nodeJs内置的path模块
const path = require('path');
module.exports = {
  // 模式
  mode: 'development', // 也可以使用 production，产品模式会对代码进行压缩
  // 入口
  entry: './src/index.ts', 
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // 出口
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, 'dist'),
    // 打包文件
    filename: 'index.js', 
    // 向外暴露的对象的名称
    // library: 'utils',
    // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
    libraryTarget: 'umd'
  },
}