// 开发阶段的配置文件
var path = require('path');
//自动打开浏览器的插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    // 入口文件
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'src/js/app.js')
    ],

    //entry:path.resolve(__dirname,'src/js/app.js'),
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
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                // 处理css文件的
                // 同时使用两个加载器是用！相连接，多个加载器的执行顺序是从右往左执行
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
            {
                // 处理scss文件
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                // 处理图片的：在loader后面加上？号是配置一些属性，limit参数的单位是比特（bit）25000bit~3kb
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000&name=img/[name].[ext]'
            }



        ]
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8080' ,browser:"chrome"})
    ]

}




















































