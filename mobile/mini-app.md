---
title: 微信小程序
icon: mini-app
date: 2024-07-22
description: 微信小程序
---

## 配置

### 全局配置

详见 [小程序配置 / 全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)。

::: tabs

@tab <Json /> app.json

```json
{
  /* 页面路径 */
  "pages": [
    "pages/index/index",
    "pages/about/about"
  ],
  /* 全局页面窗口 */
  "window": {
    "navigationBarTitleText": "Mini App",
    // 导航栏标题
    "navigationBarTextStyle": "white",
    // 导航栏标题颜色 [black | white]
    "navigationBarBackgroundColor": "#ff0000",
    // 导航栏背景颜色
    "navigationStyle": "default",
    // 导航栏样式 [default | custom]
    "enablePullDownRefresh": true,
    // 开启下拉刷新
    "backgroundColor": "#ff0000",
    // 下拉窗口背景颜色
    "backgroundTextStyle": "dark"
    // 下拉 loading 样式 [dark | light]
  },
  /* 底部 Tab */
  "tabBar": {
    "color": "#000",
    // 文本颜色
    "selectedColor": "#ff0000",
    // 选中时的文本颜色
    "backgroundColor": "#fff",
    // 背景颜色
    "list": [
      // Tab 列表，最少 2 个，最多 5 个
      {
        "pagePath": "pages/index/index",
        // 页面路径
        "text": "Home",
        // 文本内容
        "iconPath": "static/home.png",
        // 图片路径 [81px * 81px, size < 40kb]
        "selectedIconPath": "static/home-s.png"
        // 选中时的图片路径
      },
      {
        "pagePath": "pages/about/about",
        "text": "About"
      }
    ]
  }
}
```

:::

### 页面配置

详见 [小程序配置 / 页面配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)。

会覆盖 `app.json` 中相同的配置项。

## 组件

### image

**图片**。默认尺寸为 320px * 240px。

::: tabs

@tab <Prop /> 属性

- `mode`：图片裁剪模式。

  - `scaleToFill`：（默认）不保持宽高比，图片会被拉伸到刚好填满容器。

  - `aspectFit`：保持宽高比，完全显示图片。容器可能有空白。

  - `aspectFill`：保持宽高比，不留空白。图片可能完全覆盖或者超出容器。

  - `widthFix`：保持宽高比，宽度不变，高度自适应。

  - `heightFix`：保持宽高比，高度不变，宽度自适应。

- `show-menu-by-longpress`：长按打开菜单（发送给朋友、收藏、保存图片）。

- `lazy-load`：图片懒加载。

:::

### input

**输入框**。

::: tabs

@tab <Prop /> 属性

- `type`：键盘类型。

  - `text`：文本键盘。

  - `number`：数字键盘。

- `password`：密码框。

- `confirm-type`：设置 “确定” 按钮显示的内容。

  - `done`：完成。

  - `go`：前往。

  - `next`：下一个。

  - `search`：搜索。

  - `send`：发送。

@tab <Event /> 事件

- `bindinput`：键盘输入时触发。`event.detail = { value, cursor, keyCode }`

- `bindfocus`：聚焦时触发。

- `bindblur`：失焦时触发。

- `bindconfirm`：点击 “完成” 按钮时触发。

:::

### swiper

**轮播图**。

::: tabs

@tab <Prop /> 属性

- `autoplay`：是否自动切换。

- `interval`：自动切换时间间隔。

- `circular`：是否开启无缝滚动。

- `indicator-dots`：是否显示面板指示点。

- `indicator-color`：指示点颜色。

- `indicator-active-color`：当前指示点颜色。

:::

### navigator

**导航**。

::: tabs

@tab <Prop /> 属性

- `open-type`：跳转方式。

  - `navigate`：跳转到非 tabbar 页面。保留当前页面，可返回上一页。

  - `redirect`：重定向到非 tabbar 页面。关闭当前页面，不能返回上一页。

  - `switchTab`：切换到 tabbar 页面。

  - `reLaunch`：重定向到任意页面。关闭所有页面，不能返回上一页。

  - `navigateBack`：返回上一页。关闭当前页面。

- `delta`：`navigateBack` 的回退层数。

:::

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

::: tabs

@tab <Js /> app.js

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

:::

### 页面生命周期

::: tabs

@tab <Js /> pages/*.js

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
   * 页面显示（Tab 切换）、或切入前台时触发
   */
  onShow() {
  
  },
  
  /**
   * 页面隐藏（Tab 切换）、或切入后台时触发
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

:::

### 组件生命周期

::: tabs

@tab <Js /> components/*.js

组件自身生命周期

- `created` 组件实例被创建时执行

- `attached` 组件实例进入页面节点树时执行

- `detached` 组件实例被从页面节点树移除时执行

- `ready` 组件在视图层布局完成后执行

- `moved` 组件实例被移动到节点树另一个位置时执行

组件所在页面生命周期

- `show` 组件所在页面显示时执行

- `hide` 组件所在页面隐藏时执行

- `resize` 组件所在页面尺寸变化时执行

:::

## 网络 API

### wx.request

**网络请求**。

```js
wx.request({
  url: "/api",
  method: "GET",
  data: { /* 请求参数 */ },
  header: { /* 请求头 */ },
  success: response => {
    /* 成功 */
    this.setData({ list: response.data.data })
  },
  fail: error => { /* 失败 */ },
  complete: () => { /* 完成 */ }
})
```

## 交互 API

### wx.showLoading

**加载状态**。

```js
wx.showLoading({
  title: "正在请求数据",
  mask: true
})

wx.request({
  // ...
  complete: () => {
    wx.hideLoading()
  }
})
```

### wx.showModal

**模态对话框**。

```js
const { confirm } = await wx.showModal({
  title: "提示",
  content: "是否删除？"
})

if (confirm) {
  // wx.request ...
}
```

### wx.showToast

**消息提示框**。

```js
wx.showToast({
  title: "删除成功",
  icon: "success",
  duration: 3000
})
```

## 缓存 API



## 路由 API



## 页面处理函数

::: tabs

@tab <Js /> pages/*.js

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

:::

## 小程序分包

小程序有体积的限制（2M），如果需要让小程序体积更大功能更多，就需要进行分包（20M）。分包只在使用时加载。

每个分包小程序必须有一个主包，主包中有启动页面、TabBar 页面以及一些公共资源。

普通分包：将需要分包的文件单独放入一个文件夹，在 `app.json` 的 subpackages 字段中声明分包结构。

普通分包可以使用主包中的公共资源，例如发送请求的函数、公共样式。

独立分包：和普通分包配置一样，需要再添加一个 independent 字段开启独立分包。

独立分包不能使用主包中的任何内容。

## 组件通信



## 登录流程

首先在 onLaunch 生命周期中进行登录鉴权，如果鉴权失败就跳转到登录页面。通过 `wx.login` 得到一个临时的授权码 code；然后把这个授权码发送给服务器获取 token；再携带 token 去向服务器请求用户数据。如果用户登录过就会得到用户数据，如果用户没有登录过就会随机生成一个用户名和头像。

## 支付流程

提交订单，将订单信息（商品数据、收件人信息等）发送给服务器，得到订单号；再将订单号发送给服务器，得到用于支付的参数（时间戳、ID、签名等）；然后调用 `wx.requestPayment` 传入支付参数，跳转到用户支付的页面；用户支付成功，跳转页面。

## 上线流程

将代码上传到微信平台；点击提交审核；审核通过就上线了。

## 更新流程

::: tabs

@tab <Js/> app.js

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

:::
