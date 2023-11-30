## 基本目录

```
├── app.js
├── app.json
├── pages
│   └── index
│       ├── index.js
│       ├── index.json
│       ├── index.wxml
│       └── index.wxss
├── project.config.json           工程配置
├── project.private.config.json   工程配置（不提交到仓库）
└── sitemap.json                  站点地图
```

## 全局配置

https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html

```json
/* app.json */
{
  "pages": [
    "pages/index/index",
    "pages/about/about"
  ],
  
  /* 全局页面窗口配置 */
  "window": {
    "navigationBarBackgroundColor": "#ff0000", // 导航栏背景颜色
    "navigationBarTextStyle": "white", // 导航栏标题颜色
    "navigationBarTitleText": "Weapp", //导航栏标题内容
    "navigationStyle": "default", // 导航栏样式（default | custom）
    "backgroundColor": "ff0000", // 窗口背景色（下拉窗口可见）
  },
  
  /* 全局页面底部导航栏配置 */
  "tabBar": {
    "color": "#000", // 文本颜色
    "selectedColor": "#ff0000", // 选中时的文本颜色
    "list": [
      // 至少两个
      {
        "pagePath": "pages/index/index", // 页面路径
        "text": "首页", // 按钮文本
        "iconPath": "static/tabbar/home.png", // 图片路径
        "selectedIconPath": "static/tabbar/home-selected.png" // 选中时的图片路径
      },
      {
        "pagePath": "pages/about/about",
        "text": "关于"
      }
    ]
  }
}
```

## 页面配置

https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html

会覆盖 `app.json` 中相同的配置项

## 页面生命周期

```js
// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
```
