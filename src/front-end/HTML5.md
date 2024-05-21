---
title: HTML5
icon: html
lang: zh-CN
description: HTML5
---

## 语义化标签

### 布局标签

```html
<!-- 头部 -->
<header></header>

<!-- 导航 -->
<nav></nav>

<!-- 主体 -->
<main></main>

<!-- 分区 -->
<section></section>

<!-- 文章、评论等 -->
<article></article>

<!-- 侧边栏 -->
<aside></aside>

<!-- 底部 -->
<footer></footer>
```

### 其他标签

```html
<!-- 手机电量 -->
<meter max="100" min="0" low="20" high="80" value="90"></meter>

<!-- 进度条 -->
<progress max="100" value="30"></progress>

<!-- 搜索框 -->
<datalist>
  <option value=""></option>
</datalist>

<!-- 标记文本 -->
<mark></mark>
```

## 表单控件

### 表单标签

```html
<!-- 调色板 -->
<input type="color">

<!-- 日期控件(年/月/日) -->
<input type="date">

<!-- 日期控件(年/月) -->
<input type="month">

<!-- 日期控件(年/周) -->
<input type="week">

<!-- 时间控件(时/分) -->
<input type="time">

<!-- 文本框(按邮箱格式校验) -->
<input type="email">

<!-- 文本框(按 url 格式校验) -->
<input type="url">

<!-- 文本框(只能输入数字) -->
<input type="tel">

<!-- 搜索框(清除按钮) -->
<input type="search">

<!-- 文本框(加减按钮) -->
<input type="number">

<!-- 滚动条 -->
<input type="range">
```

### 表单属性

- autocomplete：显示历史输入（必须设置 name 属性才会生效）

  - on：开启（默认）

  - off：关闭

- autofocus：自动获取输入框的焦点（无属性值）

- required：输入框不能为空（无属性值）

- readonly：输入框中的值是只读的，不能被修改（无属性值）

- multiple：可以选择多个 option（无属性值）

- `<input type="file" accept="image/*">`：接受的图片格式

- `<input type="file" capture="camera">`：调用相机权限

- `<input type="file" capture="photo">`：调用相册权限

## 媒体标签

### 音频标签

```html
<!-- 音频 -->
<audio src=""></audio>
```

- src：音频路径（必要）

- controls：允许用户控制播放（无属性值）

- autoplay：自动播放（无属性值）

- muted：静音（无属性值）

- loop：循环播放（无属性值）

### 视频标签

```html
<!-- 视频 -->
<video src=""></video>
```

- src：视频路径（必要）

- controls：允许用户控制播放进度条（无属性值）

- autoplay：自动播放（无属性值，必须静音）

- muted：静音（无属性值）

- loop：循环播放（无属性值）

- poster：海报帧的路径，显示视频封面（值为图片地址）

- preload：视频预加载模式

  - none：不进行预加载

  - metadata：加载部分视频信息

  - auto：预加载
