const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log(process.env.NODE_ENV);

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        index: ['./src/index.ts'],
    },
    output: {
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                },
                exclude: resolve('node_modules'),
            },
        ],
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        contentBase: './dist', //本地环境是基于那个文件夹
        compress: false, //是否启用压缩
        stats: 'errors-only', //启动时控制台打印的信息 只关注错误信息
        host: 'localhost',
        port: 8089,
        open: true,
    },
    plugins: [
        //配置webpack 插件
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist'],
        }),
        new HtmlWebpackPlugin({
            template: './src/template/inde.html',
        }),
    ],
};
