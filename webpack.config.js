const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 开发模式
    mode:'development',
    // 入口文件
    entry:'./src/index.js',
    // 出口文件
    output:{
        filename:'main.js',
        path: path.resolve(__dirname,'dist')
    },
    // 配置loader
    module: {
      rules: [
        {
          test: /\.css$/,
          // 配置每一个loader
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'px2rem-loader',
            // options here
            options: {
              remUni: 75, // 一个rem 75px 宽度   设计稿的 10分之一
              remPrecision: 8 // 精确小数点
            }
          }]
        }
      ]
    },
    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
        })
    ]
}