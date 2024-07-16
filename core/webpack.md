---
title: Webpack
icon: webpack
description: Webpack
---

## 基本配置

```js
/* webpack.config.js */

const path = require("node:path")

module.exports = {
  // 模式
  mode: "development", // or "production"
  
  // 入口
  entry: "./src/main.js",
  
  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", // 如果配置了代码分包, 需要改成 "[chunkhash].js", 避免冲突
    clean: true // 自动清空上次打包资源
  },
  
  // 预处理器
  module: {
    rules: []
  },
  
  // 插件
  plugins: [],
  
  // 其他配置
  stats: "errors-only" // 终端控制台只输出 error 信息
}
```

## 预处理器

### 处理样式资源

`npm i style-loader css-loader -D`

`npm i less-loader -D`

`npm i sass-loader -D`

```js
/* webpack.config.js */

module.exports = {
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

### 将 CSS 打包成单独文件

`npm i mini-css-extract-plugin -D`

Webpack 默认使用 JS 动态创建 style 标签来生成样式。我们可以将 CSS 打包成单独的文件，通过 link 标签加载。

```js
/* webpack.prod.js */

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"] // 不需要 style-loader
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/main.css"
    })
  ]
}
```

### 处理 CSS 兼容性

`npm i postcss-loader postcss postcss-preset-env -D`

```js
/* webpack.prod.js */

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
  plugins: [
    new CssMinimizerPlugin()
  ]
}
```

### 处理图片资源

在 Webpack4 中，我们通过 `url-loader` 和 `file-loader` 对图片资源进行处理，

而 Webpack5 已经内置了这两个 loader，我们只需要简单的配置就行了。

```js
/* webpack.config.js */

module.exports = {
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
          filename: "static/images/[hash:8][ext][query]", // 输出路径及打包后的图片名
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

## 插件

### 处理 HTML

`npm i html-webpack-plugin -D`

```js
/* webpack.config.js */

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  module: {
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html" // 指定源文件，打包生成一个 html 文件
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
  plugins: [
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, "src") // 出口
    })
  ]
}
```

### 添加版权

```js
/* webpack.config.js */

const webpack = require("webpack")

module.exports = {
  plugins: [
    new webpack.BannerPlugin("最终版权归 ** 所有")
  ]
}
```

### 压缩

`npm i terser-webpack-plugin -D`

```js
/* webpack.config.js */

const TerserWebpackPlugin = require("terser-webpack-plugin")

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()]
  }
}
```

## 高级优化

### 提升开发体验



### 提升打包速度



### 减小代码体积



### 优化代码性能

**代码分包**。Webpack 默认会把所有代码打包成一个 JS 文件，这样体积太大了，我们可以对代码进行分包减小打包体积。

```js
/* webpack.config.js */

module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        moment: {
          name: "moment",
          chunks: "all",
          test: /[\\/]node_modules[\\/]moment[\\/]/
        },
        common: {
          name: "common", // 公共依赖、重复依赖
          chunks: "all",
          minChunks: 2 // 引用次数大于 2 就会被分割出来
        }
      }
    }
  }
}
```

## 项目配置

### React



### Vue

`npm i webpack -D`

`npm i webpack-dev-server -D`

`npm i webpack-cli -D`

配置打包命令和启动服务器命令。

```json
/* package.json */

{
  "scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack"
  }
}
```

`npm i ts-loader -D`

`npm i typescript -D`

支持 TS。

```js
/* webpack.config.js */

const path = require("node:path")

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  }
}
```

`npm i vue-loader -D`

`npm i html-webpack-plugin -D`

支持 Vue。

```js
/* webpack.config.js */

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/] // 支持 <script lang="ts">
          }
        }
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new VueLoaderPlugin()
  ]
}
```

声明 shim.d.ts 文件，让 TS 识别 .vue 后缀。

```ts
/* shim.d.ts */

declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

代码分包。

```js
/* webpack.config.js */

module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: "common", // 公共依赖、重复依赖
          chunks: "all",
          minChunks: 2 // 引用次数大于 2 就会被分割出来
        }
      }
    }
  }
}
```

将 CSS 提取成单独的文件。

```js
/* webpack.config.js */

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"] // 不需要 style-loader
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
       filename: "static/css/main.css"
    })
  ]
}
```

## 原理分析

### Loader



### Plugins

