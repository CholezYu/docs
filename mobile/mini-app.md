---
title: 微信小程序
icon: mini-app
date: 2024-07-18
description: 微信小程序
---

<script setup>
  import Json from "@source/components/Icons/Json.vue"
  import Ts from "@source/components/Icons/Ts.vue"
  import Js from "@source/components/Icons/Js.vue"
</script>
## 配置

### 全局配置

详见 [小程序配置 / 全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)。

::: tabs#app_config

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

::: tabs#image

@tab 属性

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

::: tabs#input

@tab 属性

- `type`：键盘类型：
  - `text`：文本键盘。

  - `number`：数字键盘。

- `password`：密码框。

@tab 事件

- `bindinput`：键盘输入时触发。`event.detail = { value, cursor, keyCode }`

- `bindfocus`：聚焦时触发。

- `bindblur`：失焦时触发。

- `bindconfirm`：点击 “完成” 按钮时触发。

:::

### swiper

**轮播图**。

::: tabs#swiper

@tab 属性

- `autoplay`：是否自动切换。

- `interval`：自动切换时间间隔。

- `circular`：是否开启无缝滚动。

- `indicator-dots`：是否显示面板指示点。

- `indicator-color`：指示点颜色。

- `indicator-active-color`：当前指示点颜色。

:::

### navigator

**导航**。

::: tabs#navigator

@tab 通用属性

- `open-type`：跳转方式：

  - `navigate`：跳转到非 tabbar 页面。保留当前页面，可返回上一页。

  - `redirect`：重定向到非 tabbar 页面。关闭当前页面，不能返回上一页。

  - `switchTab`：切换到 tabbar 页面。

  - `reLaunch`：重定向到任意页面。关闭所有页面，不能返回。

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

- `onLaunch` 小程序初始化。鉴权★

- `onShow` 小程序启动或切前台★

- `onHide` 小程序切后台★

### 页面生命周期

```js
// index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },
  
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },
  
  /**
   * 生命周期函数--监听页面滚动
   */
  onPageScroll: function () {
  
  },
  
  /**
   * 生命周期函数--监听页面尺寸变化
   */
  onResize: function () {
  
  },
  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },
  
  /**
   * 页面相关事件处理函数--监听页面上拉触底
   */
  onReachBottom: function () {
  
  },
  
  /**
   * 页面相关事件处理函数--用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
```

### 组件生命周期

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

## 小程序分包

小程序有体积的限制（2M），如果需要让小程序体积更大功能更多，就需要进行分包（20M）。分包只在使用时加载。

每个分包小程序必须有一个主包，主包中有启动页面、TabBar 页面以及一些公共资源。

普通分包：将需要分包的文件单独放入一个文件夹，在 `app.json` 的 subpackages 字段中声明分包结构。

普通分包可以使用主包中的公共资源，例如发送请求的函数、公共样式。

独立分包：和普通分包配置一样，需要再添加一个 independent 字段开启独立分包。

独立分包不能使用主包中的任何内容。

## 组件通信



## 登录流程

首先在 onLaunch 生命周期中进行登录鉴权，如果鉴权失败就跳转到登录页面。通过 `wx.login` 得到一个临时的授权码 code；然后把这个授权码发送给服务器获取
token；再携带 token 去向服务器请求用户数据。如果用户登录过就会得到用户数据，如果用户没有登录过就会随机生成一个用户名和头像。

## 支付流程

提交订单，将订单信息（商品数据、收件人信息等）发送给服务器，得到订单号；再将订单号发送给服务器，得到用于支付的参数（时间戳、ID、签名等）；然后调用 `wx.requestPayment`
传入支付参数，跳转到用户支付的页面；用户支付成功，跳转页面。

## 上线流程

将代码上传到微信平台；点击提交审核；审核通过就上线了。

## 同步最新版本

判断小程序版本是否支持更新机制；创建一个 updateManager 实例，通过这个实例监听检测版本更新事件，如果有新的版本，小程序就会自动在后台下载新版本，然后监听小程序新版本下载完成事件，下载完成后就会重启小程序。
