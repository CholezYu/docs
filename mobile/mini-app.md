---
title: 微信小程序
icon: mini-app
date: 2024-07-24
description: 微信小程序
---

## 小程序配置

### 项目配置

详见 [设置 / 项目配置文件](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)。

```json
{
  "projectname": "mini-app",            // 项目名称
  "miniprogramRoot": "miniprogram/",    // 小程序源码目录
  "srcMiniprogramRoot": "miniprogram/", // 对应目录下的右键菜单快捷新建页面和组件文件
  "compileType": "miniprogram",         // 编译类型
  "libVersion": "3.4.10",               // 基础库版本
  "setting": {
    "coverView": true,                 // 使用工具渲染 CoverView
    "es6": true,                       // 将 ES6 编译为 ES5
    "postcss": true,                   // 上传代码时样式自动补全
    "minified": true,                  // 自动压缩脚本文件
    "enhance": true,                   // 开启增强编译
    "showShadowRootInWxmlPanel": true, // 开启调试器 WXML 面板展示 shadow-root
    "packNpmManually": true,           // 手动配置构建 npm 的路径
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",     // package.json 的路径
        "miniprogramNpmDistDir": "./miniprogram" // miniprogram_npm 的路径
      }
    ],
    "useCompilerPlugins": [ // 插件配置，仅支持 typescript less sass
      "sass"
    ],
    "babelSetting": {
      "ignore": [],         // 跳过 Babel 编译的文件或目录
      "outputPath": "",     // Babel 辅助函数的输出目录，默认为 @babel/runtime
      "disablePlugins": []
    }
  },
  "condition": {},
  "editorSetting": {
    "tabIndent": "insertSpaces",
    "tabSize": 2
  },
  "packOptions": {
    "ignore": [],
    "include": []
  }
}
```

### 全局配置

详见 [小程序配置 / 全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)。

```json
{
  /* 页面路径 */
  "pages": [
    "pages/index/index",
    "pages/about/about"
  ],
  /* 全局页面窗口 */
  "window": {
    "navigationBarTitleText": "Mini App",       // 导航栏标题
    "navigationBarTextStyle": "white",          // 导航栏标题颜色 [black | white]
    "navigationBarBackgroundColor": "#ff0000",  // 导航栏背景颜色
    "navigationStyle": "default",               // 导航栏样式 [default | custom]
    
    "enablePullDownRefresh": true,              // 开启下拉刷新
    "backgroundColor": "#ff0000",               // 下拉窗口背景颜色
    "backgroundTextStyle": "dark"               // 下拉 loading 样式 [dark | light]
  },
  /* 底部 Tab */
  "tabBar": {
    "color": "#000",             // 文本颜色
    "selectedColor": "#ff0000",  // 选中时的文本颜色
    "backgroundColor": "#fff",   // 背景颜色
    "list": [                    // Tab 列表，最少 2 个，最多 5 个
      {
        "pagePath": "pages/index/index",         // 页面路径
        "text": "Home",                          // 文本内容
        "iconPath": "static/home.png",           // 图片路径 [81px * 81px, size < 40kb]
        "selectedIconPath": "static/home-s.png"  // 选中时的图片路径
      },
      {
        "pagePath": "pages/about/about",
        "text": "About"
      }
    ]
  }
}
```

### 页面配置

详见 [小程序配置 / 页面配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)。

会覆盖 `app.json` 中相同的配置项。

## 组件

### image

**图片**。默认尺寸为 320px * 240px。

- `mode`：图片裁剪模式。

  - `scaleToFill`：（默认）不保持宽高比，图片会被拉伸到刚好填满容器。

  - `aspectFit`：保持宽高比，完全显示图片。容器可能有空白。

  - `aspectFill`：保持宽高比，不留空白。图片可能完全覆盖或者超出容器。

  - `widthFix`：保持宽高比，宽度不变，高度自适应。

  - `heightFix`：保持宽高比，高度不变，宽度自适应。

- `show-menu-by-longpress`：长按打开菜单（发送给朋友、收藏、保存图片）。

- `lazy-load`：图片懒加载。

### input

**输入框**。

- `type`：键盘类型。

  - `text`：文本键盘。

  - `number`：数字键盘。

- `password`：密码框。

- `bind:input`：键盘输入时触发。`event.detail = { value, cursor, keyCode }`

- `bind:focus`：聚焦时触发。

- `bind:blur`：失焦时触发。

- `bind:confirm`：点击 “完成” 按钮时触发。

### swiper

**轮播图**。

- `autoplay`：是否自动切换。

- `interval`：自动切换时间间隔。

- `circular`：是否开启无缝滚动。

- `indicator-dots`：是否显示面板指示点。

- `indicator-color`：指示点颜色。

- `indicator-active-color`：当前指示点颜色。

### navigator

**导航**。

- `open-type`：跳转方式。

  - `navigate`：跳转到非 tabbar 页面。保留当前页面，可返回上一页。

  - `redirect`：重定向到非 tabbar 页面。关闭当前页面，不能返回上一页。

  - `switchTab`：切换到 tabbar 页面。

  - `reLaunch`：重定向到任意页面。关闭所有页面，不能返回上一页。

  - `navigateBack`：返回上一页。关闭当前页面。

- `delta`：`navigateBack` 的回退层数。

## 事件

### 事件类型

- `tap`：触摸（点击）事件。

- `touchstart`：触摸开始。

- `touchmove`：触摸后移动。

- `touchcancel`：触摸被打断（来电提醒，弹窗）。

- `touchend`：触摸结束。

### 事件冒泡

使用 bind 绑定的事件，会触发事件冒泡。如果想阻止事件冒泡，可以使用 catch 来绑定事件。

```html
<view bind:tap="bubbleFn">
  <view catch:tap="touchFn"></view>
</view>
```

### 自定义数据

使用 `data-` 绑定自定义数据。通过 `event.target.dataset` 获取。

或者使用 `mark:` 传递自定义数据。通过 `event.mark` 获取（含冒泡元素的 `mark` 数据）。

> [!warning]
>
> - `event.currentTarget`：绑定事件的元素。
>
> - `event.target`：触发事件的元素。

## 生命周期

### 应用生命周期

```js
App({
  /**
   * 小程序初始化完成时触发（冷启动）
   */
  onLaunch() {
  
  },
  
  /**
   * 小程序启动、或切入前台时触发
   */
  onShow(options) {
  
  },
  
  /**
   * 小程序切入后台时触发
   */
  onHide() {
  
  },
  
  /**
   * 小程序发生脚本错误、或 api 调用失败时触发
   */
  onError(msg) {
  
  }
})
```

### 页面生命周期

```js
Page({
  /**
   * 页面加载完成时触发（冷启动）
   */
  onLoad(options) {
  
  },
  
  /**
   * 页面初次渲染完成时触发
   */
  onReady() {
  
  },
  
  /**
   * 页面显示、或切入前台时触发
   */
  onShow() {
  
  },
  
  /**
   * 页面隐藏、或切入后台时触发
   */
  onHide() {
  
  },
  
  /**
   * 页面卸载时触发（重定向跳转）
   */
  onUnload() {
  
  }
})
```

### 页面处理函数

```js
Page({
  /**
   * 页面滚动时触发
   */
  onPageScroll() {
  
  },
  
  /**
   * 页面尺寸变化时触发
   */
  onResize() {
  
  },
  
  /**
   * 用于触发下拉刷新
   */
  onPullDownRefresh() {
  
  },
  
  /**
   * 用于触发上拉加载
   */
  onReachBottom() {
  
  },
  
  /**
   * 用户分享时触发
   */
  onShareAppMessage() {
  
  }
})
```

## 自定义组件

### 基本选项

```js
Component({
  // 配置项
  options: {
  
  },
  
  // 属性
  properties: {
  
  },
  
  // 组件的数据
  data: {
  
  },
  
  // 组件的方法
  methods: {
  
  }
})
```

### 组件注册

在 `app.json` 中注册就是全局组件；在 `pages/*.json` 中注册就是局部组件。

```json
{
  "usingComponents": {
    "custom-component": "/components/custom-component/custom-component"
  }
}
```

### 数据监听器

使用 setData 改变 data 中的数据时，会触发数据监听器。

```js
Component({
  data: {
    time: "2024-07-22",
    page: {
      current: 1,
      size: 10
    }
  },
  observers: {
    // 监听一个数据
    time(value) {
      wx.request({ /* ... */ })
    },
    // 监听多个数据
    "page.current, page.size"(current, size) {
      wx.request({ /* ... */ })
    },
    // 监听所有数据
    "**"() {
      wx.request({ /* ... */ })
    }
  }
})
```

### 组件通信

监听事件。

```html
<!-- vue: @update="updateFn" -->
<custom-component bind:update="updateFn" />
```

```js
Page({
  updateFn(event) {
    event.detail // 触发事件时携带的额外参数
  }
})
```

触发事件。

```js
Component({
  methods: {
    updateEmit() {
      // vue: emits("update", args)
      this.triggerEvent("update", this.data.args /* datail */, {} /* option */)
    }
  }
})
```

### 组件生命周期

组件自身的生命周期。

```js
Component({
  lifetimes: {
    /**
     * 组件实例创建完成时触发
     */
    created() {
    
    },
    /**
     * 组件实例挂载到页面时触发
     */
    attached() {
    
    },
    /**
     * 组件实例卸载时触发
     */
    detached() {
    
    },
    /**
     * 组件在视图层布局完成后触发
     */
    ready() {
    
    },
    /**
     * 组件被移动时触发
     */
    moved() {
    
    }
  }
})
```

组件所在页面的生命周期。

```js
Component({
  pageLifetimes: {
    /**
     * 组件所在页面显示、或切入前台时触发
     */
    show() {
    
    },
    /**
     * 组件所在页面隐藏、或切入后台时触发
     */
    hide() {
    
    },
    /**
     * 组件所在页面尺寸变化时触发
     */
    resize() {
    
    }
  }
})
```

### 冷启动顺序

`app.onLaunch` > `app.onShow` > `component.created` > `component.attached` > `page.onLoad` > `page.onShow` > `component.ready` > `page.onReady`

### Behavious

类似 mixin。

详见 [自定义组件 / behaviors](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html)。

## 分包

### 分包介绍

分包可以让小程序容量更大、功能更多。分包在用户使用时按需加载，优化了小程序首次启动的下载时间。

每个使用分包的小程序必须有一个主包，主包中包含默认启动页面、TabBar 页面以及一些公共资源。

小程序启动时，默认会下载主包并启动主包内的页面，当用户进入分包内某个页面时，客户端会按需下载分包。

小程序分包大小由以下限制：

- 小程序所有分包大小不能超过 20M。

- 单个分包和主包大小不能超过 2M。

### 普通分包

将需要分包的文件单独放入一个文件夹，在 `app.json` 的 subPackages 字段中声明分包结构。

```json
{
  "subPackages": [
    {
      "root": "packages",      // 分包根目录
      "name": "normalPackage", // 分包别名
      "pages": [               // 分包页面路径
        "pages/shop/shop"
      ]
    }
  ]
}
```

> [!tip]
>
> 普通分包可以使用主包的公共资源，例如封装的请求方法、公共样式。

### 独立分包

独立分包不依赖主包和其他分包。我们可以将具有独立功能的页面配置到独立分包中。

配置 `subPackages.independent` 字段开启独立分包，其他配置与普通分包相同。

```json
{
  "subPackages": [
    {
      "root": "packages",
      "name": "indepPackage",
      "pages": [
        "pages/cart/cart"
      ],
      "independent": true // 开启独立分包
    }
  ]
}
```

> [!warning]
>
> 独立分包不能使用主包的任何内容，包括公共样式。

## 开放能力

### 用户信息

获取用户头像和昵称。

```html
<button open-type="chooseAvatar" 	bind:chooseavatar="chooseAvatar">
  <image src="{{avatar}}" />
</button>

<form bind:submit="onSubmit">
  <input type="nickname" name="nickname" />
  <button form-type="submit">set username</button>
</form>
```

```js
Page({
  data: {
    avatar: "/static/default-avatar.jpg",
    username: ""
  },
  
  chooseAvatar(event) {
    this.setData({
      avatar: event.detail.avatarUrl
    })
  },
  
  onSubmit(event) {
    this.setData({
      username: event.detail.value.nickname
    })
  }
})
```

### 转发分享

声明 `onShareAppMessage` 事件，否则转发功能不可用。

- 点击右上角三点转发。

- 自定义按钮转发。会触发 `onShareAppMessage` 事件。

```html
<button open-type="share">Share</button>
```

```js
Page({
  onShareAppMessage(event) {
    event /*
      通过右上角三点转发 {form: "menu", target: undefined}
      通过自定义按钮转发 {form: "button", target: {...}}
    */
    
    // 自定义分享封面
    return {
      title: "Share the shop!",    // 封面标题
      path: "/pages/shop/shop",    // 分享的页面，默认为当前页
      imageUrl: "/static/shop.png" // 封面图像
    }
  }
})
```

设置允许转发后，可以声明 `onShareTimeline` 事件，开启 “分享到朋友圈” 功能。

只能点击右上角三点分享到朋友圈。

```js
Page({
  onShareAppMessage(event) {
    // ...
  },
  
  onShareTimeline(event) {
    event // {from: "menu", target: undefined}
  }
})
```

### 手机号验证

将 `event.detail.code` 发送给后端，获得用户手机号。

```html
<!-- 手机号快速验证组件 -->
<button open-type="getPhoneNumber" bind:getphonenumber="getPhoneNumber" />

<!-- 手机号实时验证组件 -->
<button open-type="getRealtimePhoneNumber" bind:getrealtimephonenumber="getRealtimePhoneNumber" />
```

## 登录流程

通过 `wx.login` 得到一个临时授权码 code。将授权码发送给服务器获取 token，再携带 token 请求用户信息。

```js
Page({
  login() {
    wx.login({
      success: async ({ code }) => {
        const { token } = await apiLogin(code)
        wx.setStorageSync("TOKEN", token)
        
        const { userInfo } = await apiGetUserInfo()
        wx.setStorageSync("USER_INFO", userInfo)
      }
    })
  }
})
```

## 支付流程

提交订单，将订单信息（商品数据、收件人信息等）发送给服务器，得到订单号；再将订单号发送给服务器，得到用于支付的参数（时间戳、ID、签名等）；然后调用 `wx.requestPayment` 传入支付参数，跳转到用户支付的页面；用户支付成功，跳转页面。

## 更新机制

```js
App({
  onLaunch() {
    // 创建 updateManager 实例，用于管理更新
    const updateManager = wx.getUpdateManager()
    
    // 监听是否有新版本，如果有的话会主动触发下载
    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启应用？",
        success(res) {
          if (res.confirm) {
            // 强制小程序重启并使用新版本
            updateManager.applyUpdate()
          }
        }
      })
    })
  }
})
```
