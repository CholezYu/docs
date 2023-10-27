# 基本使用

## 基本配置

`npx webpack` or `webpack`

```js
/* webpack.config.js */

const path = require("node:path")

module.exports = {
  // 入口
  entry: "./src/main.js",
  
  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/main.js",
    clean: true // 自动清空上次打包资源
  },
  
  // 加载器
  module: {
    rules: []
  },
  
  // 插件
  plugins: [],
  
  // 模式
  mode: "development" // or "production"
}
```

## Loader

### 处理样式资源

`npm i style-loader css-loader -D`

`npm i less-loader -D`

`npm i sass-loader -D`

```js
/* webpack.config.js */

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
```

### 处理图片资源

在 Webpack4 中，我们通过 `url-loader` 和 `file-loader` 对图片资源进行处理，

而 Webpack5 已经内置了这两个 loader，我们只需要简单的配置就行了。

```js
/* webpack.config.js */

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          // 优化
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于 10kb 的图片会被处理成 data URI (base64) 格式
          }
        },
        generator: {
          filename: "static/imgs/[hash:8][ext][query]", // 输出路径及打包后的图片名
        }
      }
    ]
  }
}
```

### 处理 Babel

`npm i babel-loader @babel/core @babel/preset-env -D`

`npm i @babel/preset-react -D`

`npm i @babel/preset-typescript -D`

```js
/* babel.config.js */

module.exports = {
  // 预设
  presets: [
    "@babel/preset-env", // 处理 JS
    "@babel/preset-react", // 处理 JSX
    "@babel/preset-typescript" // 处理 TS
  ]
}
```

```js
/* webpack.config.js */

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除 node_modules 代码不编译
        loader: "babel-loader"
      }
    ]
  }
}
```

### 提取 CSS 成单独文件

`npm i mini-css-extract-plugin -D`

将 CSS 打包成单独的文件，通过 link 标签加载。而不是创建一个 style 标签来生成样式

```js
/* webpack.prod.js */

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"] // 不需要 style-loader
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/main.css" // 指定输出文件名和目录
    })
  ]
}
```

### 处理 CSS 兼容性

`npm i postcss-loader postcss postcss-preset-env -D`

```js
/* webpack.prod.js */

// 获取处理样式的 loaders
const getStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env" // 能解决大多数样式兼容性问题
          ]
        }
      }
    },
    preProcessor
  ].filter(Boolean) // 筛选真值
}

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getStyleLoaders()
      },
      {
        test: /\.less$/,
        use: getStyleLoaders("less-loader")
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleLoaders("sass-loader")
      }
    ]
  }
}
```

```json
/* package.json */

{
  "browserslist": ["last 2 version", "> 1%", "not dead"] // 不兼容低版本浏览器
}
```

### 压缩 CSS

`npm i css-minimizer-webpack-plugin -D`

```js
/* webpack.prod.js */

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
  // ...
  plugins: [
    new CssMinimizerPlugin()
  ]
}
```

### 处理字体图标

http://xxpromise.gitee.io/webpack5-docs/base/font.html

### 处理音频视频

http://xxpromise.gitee.io/webpack5-docs/base/other.html

## Plugins

### 处理 HTML

`npm i html-webpack-plugin -D`

```js
/* webpack.config.js */

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  // ...
  module: {
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html") // 指定源文件，打包生成一个 html 文件
      })
    ]
  }
}
```

### 处理 Eslint

`npm i eslint-webpack-plugin eslint -D`

```js
/* .eslintrc.js */

module.exports = {
  // 继承其他规则
  extends: ["eslint:recommended"],
  // 环境变量
  env: {
    node: true, // 启用 node 中全局变量
    browser: true // 启用浏览器中全局变量
  },
  // 解析选项
  parserOptions: {
    ecmaVersion: 6, // ES 语法版本
    sourceType: "module" // ES 模块化
  },
  // 具体检查规则
  // 我们的规则会覆盖掉继承的规则，所以想要修改规则直接改就是了
  rules: {
    "no-var": "error", // 不能使用 var 定义变量
    "semi": "off" // 禁止使用分号
  }
  // ...
  // 其他规则详见：https://eslint.bootcss.com/docs/user-guide/configuring
}
```

```js
/* webpack.config.js */

const ESLintWebpackPlugin = require("eslint-webpack-plugin")

module.exports = {
  // ...
  plugins: [
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, "src") // 出口
    })
  ]
}
```

### 添加版权

```js
// webpack.config.js
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归 ** 所有')
  ]
}
```

### 压缩

`npm i terser-webpack-plugin -D`

```js
// webpack.congfig.js
const path = require('path')
const TerserWebpackPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()]
  }
}
```





# 高级优化

## 提升开发体验



## 提升打包速度



## 减少代码体积



## 优化代码性能





# 项目配置

## React



## Vue

### 处理 Vue

`npm install vue-loader@15 vue-template-compiler --save-dev` 指定 15 版本的 vue-loader

`npm install @vue/compiler-sfc --save-dev`

> `vue-loader` 解析 vue 文件
>
> `vue-template-compiler` 解析 `<template>` 模板
>
> `vue-compiler-sfc` 解析 `<template>` `<script>` `<style>` 模板

```js
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  }
}
```





# 原理分析

## Loader



## Plugins

