# Weixin

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

## 页面配置

https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html

```json
/* app.json */
{
  "pages": [
    "pages/index/index"
  ],
  
  /* 页面窗口配置 */
  "window": {
    "navigationBarBackgroundColor": "#ff0000", // 导航栏背景颜色
    "navigationBarTextStyle": "white", // 导航栏标题颜色
    "navigationBarTitleText": "Weapp", //导航栏标题内容
    "navigationStyle": "default", // 导航栏样式 (default | custom)
    "backgroundColor": "ff0000", // 窗口背景色 (下拉窗口可见)
  },
  
  "style": "v2",
  "rendererOptions": {
    "skyline": {
      "defaultDisplayBlock": true,
      "disableABTest": true,
      "sdkVersionBegin": "3.0.0",
      "sdkVersionEnd": "15.255.255"
    }
  },
  "componentFramework": "glass-easel",
  "sitemapLocation": "sitemap.json",
  "lazyCodeLoading": "requiredComponents"
}
```





# uni-app

