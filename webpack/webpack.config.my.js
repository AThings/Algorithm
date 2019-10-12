// webpack 是node写出来的
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin') // 类
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    devServer: { //开发服务器配置
        port: 3000,
        progress: true ,// 进度条
        contentBase: './fengjialue'
    },
    mode: 'development',// 模式 production development
    entry: './src/index.js', //入口
    output: {
        filename: 'bundle.js',  // 打包后文件名
        path: path.resolve(__dirname,'fengjialue')// 路径必须是绝对路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ],
    module:{ // 模块
        rules:[ // 规则
            // css-loader 解析 @import
            // style-loader 将css插入html
            // loader 希望单一
            // loader 有顺序 从右向左 从下到上
            { test: /\.css$/,use:[ MiniCssExtractPlugin.loader ,'css-loader','postcss-loader']},
            { test: /\.less$/,use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader',{
                loader:'less-loader'
            }]}
        ]
    }
}