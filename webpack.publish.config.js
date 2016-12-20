// 部署时候的配置文件
var webpack=require("webpack");
var path = require('path');
/*提取css的文件*/
var ExtractTextPlugin = require("extract-text-webpack-plugin");
/*自动创建html*/
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 入口文件
    //entry:[
    //    'webpack/hot/dev-server',
    //    'webpack-dev-server/client?http://localhost:8080',
    //    path.resolve(__dirname,'src/js/app.js')
    //],

    entry:{
        app:path.resolve(__dirname,'src/js/app.js'),
        vendors:['react','react-dom']
    },
    // 输出文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 输出文件的名称
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                // 处理jsx和es6文件的
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
                // 匹配到的文件夹目录不走这个babel-loader
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                // 处理css文件的
                // 同时使用两个加载器是用！相连接，多个加载器的执行顺序是从右往左执行
                test: /\.css$/, // Only .css files
                //loader: 'style!css' // Run both loaders
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                // 处理scss文件
                test: /\.scss$/,
                //loader: 'style!css!sass'
                /*css-loader和sass-loader必须用!连接在一起,不然抽取不了*/
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {
                // 处理图片的：在loader后面加上？号是配置一些属性，limit参数的单位是比特（bit）25000bit~3kb
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000&name=img/[name].[ext]'
            }
        ]
    },
    plugins: [
        // 分离第三方应用插件
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin("[name].css"),
        // 自动生成html的插件
        new HtmlWebpackPlugin({
            template: './src/template.html',
            htmlWebpackPlugin: {
                "files": {
                    "css": ["app.css"],
                    "js": ["bundle.js", "vendors.js"]
                }
            }
        }),
        // 定义默认环境的插件，性能优化
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            /*不用提示错误*/
            compress:{
                warnings:false
            }
        })
    ]

}









































































