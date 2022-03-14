
### 全局安装 typescript tslint

`npm install typescript tslint -g`

> tsc --init 初始化 typescript 配置

### 配置 webpack 

`npm install webpack webpack-cli webpack-dev-server -D` 安装为开发依赖

`npm install ts-loader -D`

`npm install cross-env -D`

> 使用 `cross-env 在 package.json 中将 开发环境变量传入webpack.config.js 并判断是否适用 source-map`

`cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js`

### 安装 webpack 插件

`npm install clean-webpack-plugin html-webpack-plugin -D`
