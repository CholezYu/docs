# HTML5

## 语义化标签

```html
<!-- 头部 -->
<header></header>

<!-- 导航 -->
<nav></nav>

<!-- 主体 -->
<main></main>

<!-- 分区 -->
<section></section>

<!-- 文章、博客、用户评论等 -->
<article></article>

<!-- 侧边栏 -->
<aside></aside>

<!-- 底部 -->
<footer></footer>
```

```html
<!-- 引用图片、插画、表格、代码段等 -->
<figure>
  <!-- 引用元素的标题 -->
  <figcaption></figcaption>
</figure>

<!-- 引用元素的标记文本 -->
<mark></mark>

<!-- 定义时间 -->
<time></time>

<!-- 进度条 -->
<progress value=""></progress>

<!-- 包含下拉列表的输入框 -->
<datalist>
  <option value=""></option>
</datalist>
```

## 表单元素

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

## 表单元素属性

- checked: 单选框或多选框默认被选中

- disabled: 单选框、多选框、文本框、密码框被禁用

- enabled: 单选框、多选框、文本框、密码框未被禁用

- selected: 下拉列表默认被选中

- placeholder: 输入框的提示信息，通过 `input::placeholder` 设置提示信息的样式

- autocomplete: 显示历史输入（必须设置 name 属性才会生效）

  - on: 开启（默认）

  - off: 关闭

- autofocus: 无属性值，自动获取输入框的焦点

- required: 无属性值，输入框不能为空

- readonly: 无属性值，输入框中的值是只读的，不能被修改

- multiple: 无属性值，可以选择多个 option

- `<input type="file" accept="image/*">`: 接受的图片格式

- `<input type="file" capture="camera">`: 调用相机权限

- `<input type="file" capture="photo">`: 调用相册权限

## 媒体标签

```html
<!-- 音频 -->
<audio src=""></audio>
```

- src: 音频路径（必要）

- controls: 无属性值，允许用户控制播放

- autoplay: 无属性值，自动播放

- muted: 无属性值，静音

- loop: 无属性值，循环播放



```html
<!-- 视频 -->
<video src=""></video>
```

- src: 视频路径（必要）

- controls: 无属性值，允许用户控制播放进度条

- autoplay: 无属性值，自动播放（Chrome 浏览器中静音时才生效）

- muted: 无属性值，静音

- loop: 无属性值，循环播放

- poster: 海报帧的路径，显示视频封面

- preload: 视频初始化加载模式

  - none: 视频不缓存

  - metadata: 提示尽管我们认为用户不需要查看该视频，不过抓取元数据（长度）还是合理的

  - auto: 用户需要这个视频优先加载





# 字体样式

## 字体风格 font-style

```css
/* 正常 */
{ font-style: normal; }

/* 斜体 */
{ font-style: italic; }
```

## 字体宽度 font-weight

```css
/* 正常 */
{ font-weight: normal; }

/* 加粗 */
{ font-weight: bold; }

/* 相对于继承的状态加粗 */
{ font-weight: bolder; }

/* 相对于继承的状态变细 */
{ font-weight: lighter; }

/* 细 */
{ font-weight: 300; }

/* 正常 */
{ font-weight: 500; }

/* 粗 */
{ font-weight: 600; }
```

## 字号大小 font-size

```css
{ font-size: 14px; }
```

## 字体系列 font-family

```css
{ font-family: "Microsoft YaHei", sans-serif, SimSun, SimHei; }
```

## 引用字体 @font-face

```css
@font-face {
  src: url("https://www.baidu.com");  /* 引入字体包 */
  font-family: myfont; /* 给引入的字体取名 */
}

p {
  font-family: myfont; /* 使用引入的字体 */
}
```

## 复合属性 font

font-style > font-weight > font-size/line-height > font-family

**必须设置 font-size 和 font-family**

```css
{ font: italic bold 14px/14px "Microsoft YaHei"; }
```

## 属性继承

- 所有 font 属性





# 文本样式

## 文本颜色 color

```css
/* 关键字 */
{ color: red; }

/* 十六进制 */
{ color: #ffc0cb; }

/* RGB */
{ color: rgb(255, 194, 204); }
```

## 行框高度 line-height

- line-height: 设置行框的高度

  - 给行内元素设置 line-height，就是设置该元素所在的行框高度

  - 给块元素设置 line-height，就是设置该元素内每一个行框的高度

- 如果 line-height 大于 font-size，就会把多出来的高度平分，并分别设置给文字上下作为间隙

```css
{ line-height: 24px; }
```

## 水平对齐 text-align

块元素中的文本的水平对齐方式

```css
/* 居中对齐 */
{ text-align: center; }

/* 居左对齐 */
{ text-align: left; }

/* 居右对齐 */
{ text-align: right; }

/* 两端对齐 */
{ text-align: justify; }
```

## 垂直对齐 vertical-align

元素在行框内部垂直方向的对齐方式

```css
/* 默认基线对齐 */
{ vertical-align: baseline; }

/* 居中对齐 */
{ vertical-align: middle; }

/* 顶部对齐 */
{ vertical-align: top; }

/* 底部对齐 */
{ vertical-align: bottom; }
```

## 文本装饰 text-decoration

- text-decoration-line: 装饰线类型

  - none: 无装饰线

  - underline: 下划线

  - overline: 上划线

  - line-through: 删除线

- text-decoration-color: 装饰线颜色

- text-decoration-style: 装饰线风格

  - solid: 实线

  - double: 双实线

  - dashed: 虚线

  - dotted: 断续点

  - wavy: 波浪线

- text-decoration: 复合属性

  - decoration-line > decoration-color > decoration-style

## 首行缩进 text-indent

单位一般不使用 px，而是使用 em 设置缩进两个字号大小

```css
{ text-indent: 2em; }
```

## 字词间距 word-spacing

被空格隔开的字词间的距离，例如 "What a nice day today"，"今天 天气 真好"

```css
{ word-spacing: 5px; }
```

## 字符间距 letter-spacing

字符与字符间的距离

```css
{ letter-spacing: 2px; }
```

## 内容区溢出 overflow

元素内容溢出的状态

```css
/* 默认显示溢出部分 */
{ overflow: visible; }

/* 隐藏溢出部分 */
{ overflow: hidden; }

/* 始终显示滚动条 */
{ overflow: scroll; }

/* 若有溢出部分则显示滚动条，否则不显示 */
{ overflow: auto; }
```

## 显示与隐藏 display

不保留原来的位置，无法使用 JS 获取隐藏元素的宽高等样式

```css
/* 元素默认显示 */
{ display: block; }

/* 元素隐藏 */
{ display: none; }
```

## 元素可见性 visibility

保留原来的位置，可以使用 JS 获取不可见元素的宽高等样式

```css
/* 元素默认可见 */
{ visibility: visible; }

/* 元素不可见 */
{ visibility: hidden; }
```

## 不透明度 opacity

元素的不透明度

```css
/* 完全不透明 */
{ opacity: 1; }

/* 完全透明 */
{ opacity: 0; }
```

## 属性继承

- color

- line-height

- text-align

- text-indent

- word-spacing

- letter-spacing

- visibility





# 背景样式

## 背景颜色 background-color

```css
/* 默认透明 */
{ background-color: transparent; }

/* 半透明 */
{ background-color: rgba(83, 210, 235, .5); }
```

## 背景图像 background-image

一般不与 background-color 一起使用

```css
{ background-image: url("https://www.baidu.com"); }
```

## 背景定位 background-position

```css
/* 默认位于左上角 */
{ background-position: left top; }

/* X, Y */
{ background-position: 20px 50px; }
```

## 背景填充 background-repeat

```css
/* 默认填充整个页面 */
{ background-repeat: repeat; }

/* 横向填充 */
{ background-repeat: repeat-x; }

/* 纵向填充 */
{ background-repeat: repeat-y; }

/* 不填充 */
{ background-repeat: no-repeat; }
```

## 复合属性 background

background-image > background-position > background-repeat

```css
{ background: url("https://www.baidu.com") center center no-repeat; }
```





# 列表样式

## 标号类型 list-style-type

```css
/* 默认实心圆 */
{ list-style-type: disc; }

/* 无标记 */
{ list-style-type: none; }

/* 空心圆 */
{ list-style-type: circle; }

/* 实心方块 */
{ list-style-type: square; }
```

```css
/* 默认阿拉伯数字 */
{ list-style-type: decimal; }

/* 小写罗马数字 */
{ list-style-type: lower-roman; }

/* 大写罗马数字 */
{ list-style-type: upper-roman; }

/* 小写英文字母 */
{ list-style-type: lower-alpha; }

/* 大写英文字母 */
{ list-style-type: upper-alpha; }

/* 小写希腊字母 */
{ list-style-type: lower-Greek; }

/* 大写拉丁字母 */
{ list-style-type: upper-latin; }

/* 小写拉丁字母 */
{ list-style-type: lower-latin; }
```

## 标号位置 list-style-position

```css
/* 标号默认在列表区域内 */
{ list-style-position: inside; }

/* 标号在列表区域外 */
{ list-style-position: outside; }
```

## 标号图像 list-style-image

```css
{ list-style-image: url("https://www.baidu.com"); }
```

## 复合属性 list-style

list-style-type > list-style-position > list-style-image

```css
{ list-style: square inside url("https://www.baidu.com"); }
```





# 元素类型

## 块元素 block

### 常见的块元素

```html
<div> <h1> <p> <ul> <ol> <li> <dl> <dt> <dd> <br> <hr> <table> <form> <blockquote>
```

### 块元素的特点

- 独占一行

- 可以设置 width、height

- 默认宽度为父元素的100%

- 可以嵌套块元素和行内元素

  - p  h  dt 标签不能嵌套块元素


## 行内元素 inline

### 常见的行内元素

```html
<span> <a> <strong> <em> <del> <ins> <q>
```

### 行内元素的特点

- 行内显示，不独占一行

- 不能设置 width、height

- 默认宽度为内容的宽度

- 行内元素只能嵌套行内元素

  - a 标签可以嵌套块元素，但是不能设置任何样式，只能提供跳转功能

  - a 标签不能嵌套 a 标签


## 行内块元素 inline-block

### 常见的行内块元素

```html
<input>  <textarea>  <td>
```

### 行内块元素的特点

- 不独占一行

- 可以设置 width、height

- 默认宽度为内容的宽度





# 盒子模型

## 内边距

- 块元素支持四个方向

- 行内非替换元素支持四个方向，但垂直方向不能撑开盒子大小

- 行内替换元素支持四个方向，且垂直方向可以撑开盒子大小

- 行内块元素支持四个方向

## 外边距

- 块元素支持四个方向

- 行内非替换元素仅支持 left right

- 行内替换元素支持四个方向

- 行内块元素支持四个方向

### 外边距重叠

如果两个兄弟元素分别设置了**下外边距**和**上外边距**，会发生**外边距重叠**，即取两者间的较大值作为两个元素的间距

### 外边距塌陷

在父子元素中，如果第一个子元素设置了**上外边距**，或最后一个子元素设置了**下外边距**，会发生**外边距塌陷**

解决方法:

- 给父元素设置(上/下)边框

- 给父元素设置(上/下)内边距

- 给父元素开启 BFC

  - HTML 元素默认开启 BFC

  - `float: left/right;`

  - `overflow: hidden/scroll/auto;`

  - `position: absolute/fixed;`

  - `display: inline-block;`


### 负外边距

- 负 margin-top: 元素上移，不会影响上面元素的位置(但是会覆盖上面的元素)，后面的元素会跟着移动

- 负 margin-bottom: 元素不动(高度不变)，下面的元素上移，并覆盖负 margin-bottom 元素

- 负 margin-left: 元素左移，不会响应左边元素的位置(但是会覆盖左边的元素)，后面的元素会跟着移动

- 负 margin-right: 元素不动(宽度不变)，右边的元素左移，并覆盖负 margin-right 元素

## 边框

- border-width: 边框宽度

  - px: 像素值

  - thin: 细

  - medium: 中

  - thick: 粗

- border-style: 边框风格

  - solid: 实线

  - double: 双实线

  - dashed: 虚线

  - dotted: 断续点

  - wavy: 波浪线

- border-color: 边框颜色





# 浮动

## 浮动元素的特点

- 浮动元素的 display 属性会变成 block，但是不会独占一行

- 浮动元素会脱离文档流，后面未浮动元素会向上移动

- 浮动元素所在的高度不会超过前面的兄弟元素

- 浮动元素会覆盖在未浮动元素上面

- 浮动元素不会覆盖文字，文字会环绕在浮动元素周围

## 脱离文档流的特点

- 块元素不再独占一行，宽高由内容区撑开

- 行内元素会变成块元素，可以设置宽高，由内容区撑开

## 高度塌陷

在浮动布局中，若没有设置父元素的高度，默认由子元素撑开，当子元素浮动后，将无法撑起父元素的高度

解决方法:

- 为父元素设置开启 BFC

- 在浮动元素后面添加空的块元素，并设置 `clear: both;`

- 在父元素内部添加伪元素，并设置

  ```css
  .clearfix::after {
    content: "";
      display: block;
      clear: both;
  }
  ```

## BFC

> 也称作 "块级格式上下文"

### 开启 BFC 的作用

- 解决父元素外边距塌陷问题

- 解决浮动导致的父元素高度塌陷问题

### 开启 BFC 的方式

> HTML 元素默认开启 BFC

- `float: left/right;`

- `position: absolute/fixed;`

- `overflow: hidden/scroll/auto;`

- `display: inline-block;`





# 定位

## 相对定位 relative

参照物为该元素的原始位置，不会脱离文档流，保留原来的位置，对布局不产生影响

```css
{ position: relative; }
```

## 绝对定位 absolute

参照物为包含块(最近的定位父元素)，会脱离文档流，不保留原来的位置，对布局产生影响

```css
{ position: absolute; }
```

## 固定定位 fixed

参照物为浏览器窗口，会脱离文档流，不保留原来的位置，对布局产生影响

```css
{ position: fixed; }
```

## 粘性定位 sticky

参照物为浏览器窗口，会根据滚动位置在相对定位和固定定位之间切换

**必须设置 top bottom left right 其中一个才会生效**

```css
{ position: sticky; }
```

## 层叠顺序 z-index

拥有更高堆叠顺序的元素会覆盖堆叠顺序较低的元素（父元素无法覆盖子元素）

`z-index: -1` < background < `z-index: 0` < `z-index: 1`





# 布局方式

## 单行文本垂直居中(行高)

将容器的 line-height 设置与 height 相等

> 原理: 给块元素设置 linet-height 就是设置该元素内部每个行框的高度

```html
<style>
  .box {
    height: 200px;
    line-height: 200px;
  }
</style>

<div class="box">
  <span>单行文本</span>
</div>
```

将容器内部的行内元素的 line-height 设置与容器的 height 相等

> 原理: 给行内元素设置 line-height 就是设置该元素所在的行框的高度

```html
<style>
  .box {
    height: 200px;
  }
  
  .box span {
    line-height: 200px;
  }
</style>

<div class="box">
  <span>单行文本</span>
</div>
```

## 多行文本垂直居中(行高)

将容器的 line-height 设置与 height 相等；

将容器内的行内元素转换为行内块元素，

并为其设置 line-height 与 `vertical-align: middle;`

```html
<style>
  .box {
    height: 500px;
    line-height: 500px;
  }

  .box .content {
    display: inline-block;
    line-height: 20px;
    vertical-align: middle;
  }
</style>

<div class="box">
  <span class="content">
    据央视《新闻联播》报道，当地时间2月21日中午.......
  </span>
</div>
```

## 块元素水平居中(外边距)

给块元素设置宽度，并将水平方向的 margin 设置为 auto

> 原理: 浏览器会将 margin-right 设置为 auto，使 margin-left = margin-right

```css
{
  /* 设置宽度 */
  width: 500px;

  /* 使元素的左右外边距相等 */
  margin: 0 auto;
}
```

## 元素水平垂直居中(定位)

```css
.outer {
  position: relative;
}

.inner {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
```

```css
.outer {
  position: relative;
}

.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## 元素水平垂直居中(弹性容器)

```css
.outer {
  display: flex;
  justify-content: center;
  align-items: center;
}
```





# 特殊样式

## 取消表单框的默认轮廓线

```css
input {
  outline: none;
}
```

## 禁止文本域默认可拖拽

```css
textarea {
  resize: none;
}
```

## 用省略号代替单行溢出文本

```css
{
  /* 文本在一行内显示 */
  white-space: nowrap;

  /* 隐藏溢出部分 */
  overflow: hidden;

  /* 用省略号代替溢出文本 */
  text-overflow: ellipsis;
}
```

## 用省略号代替多行溢出文本

```css
{
  /* 隐藏溢出部分 */
  overflow: hidden;
  
  /* 用省略号代替溢出文本 */
  text-overflow: ellipsis;
  
  /* 非汉字强制换行 */
  word-break: break-all;
  
  /* 设置为弹性容器 */
  display: -webkit-box;
  
  /* 弹性容器的排列方式: 垂直排列 */
  -webkit-box-orient: vertical;
  
  /* 控制多行文本的显示行数 */
  -webkit-line-clamp: 2;
}
```





# CSS3-选择器

## 伪类选择器

link > visited > hover > active

```css
/* 未访问过的链接 */
:link

/* 已访问过的链接 */
:visited

/* 鼠标悬停的链接 */
:hover

/* 鼠标点击的链接 */
:active
```



```css
/* 属性名 */
[name]

/* 属性等于值 */
[name="value"]

/* 属性以值开始 */
[name^="value"]

/* 属性以值结尾 */
[name$="value"]

/* 属性包含值 */
[name*="value"]
```



```css
/* 获取焦点的表单元素 */
:focus


/* 未被禁用的表单元素 */
:enabled

/* 被禁用的表单元素 */
:disabled

/* 被选中的表单元素 */
:checked
```



```css
/* <ul> 中的 <li>，且该元素是第一个子元素 */
ul li:first-child

/* <ul> 中的 <li>，且该元素是最后一个子元素 */
ul li:last-child

/* <ul> 中的 <li>，且该元素是第 n 个子元素 */
ul li:nth-child(n)


/* <ul> 中的第一个 <li> */
ul li:first-of-type

/* <ul> 中的最后一个 <li> */
ul li:last-of-type

/* <ul> 中的第 n 个 <li> */
ul li:nth-of-type(n)


/* <ul> 中的唯一一个 <li> */
ul li:only-child
```



```css
/* 偶数元素 */
:nth-child(even)
:nth-child(2n)

/* 奇数元素 */
:nth-child(odd)
:nth-child(2n+1)
```



```css
/* 不匹配的元素 */
:not(.active)

/* 没有后代节点元素的元素 */
:empty
```

## 伪元素选择器

```css
/* 在元素内部的最前面插入内容(必须设置 content 属性) */
::before

/* 在元素内部的最后面插入内容(必须设置 content 属性) */
::after


/* 元素的首字母 */
::first-letter

/* 元素的首行 */
::first-line


/* 元素中被选中的部分 */
::selection
```





# CSS3-文本样式

## 文本阴影 text-shadow

offset-x > offset-y > blur-radius > color

```css
{ text-shadow: 1px 1px 2px black; }
```

- offset-x: 水平方向的偏移量（必要），正数向右，负数向左

- offset-y: 垂直方向的偏移量（必要），正数向下，负数向上

- blur-radius: 模糊距离

- color: 阴影颜色

## 空白处理 white-space

```css
/* 将连续的多个空格变成一个空格，文本溢出则换行(默认) */
{ white-space: normal; }

/* 禁止文本换行 */
{ white-space: nowrap; }

/* 保留空格 */
{ white-space: pre; }
```

## 文本转换 text-transform

```css
/* 所有字母大写 */
{ text-transform: uppercase; }

/* 所有字母小写 */
{ text-transform: lowercase; }

/* 首字母大写 */
{ text-transform: capitalize; }
```





# CSS3-背景样式

## 背景大小 background-size

```css
/* 数值 */
{ background-size: 300px 200px; }

/* 等比例缩放到完全覆盖容器 */
{ background-size: cover; }

/* 等比例缩放到与容器宽高相等 */
{ background-size: contain; }
```

## 背景原点 background-origin

```css
/* 背景原点默认在内边距左上角 */
{ background-origin: padding-box; }

/* 背景原点在边框左上角 */
{ background-origin: border-box; }

/* 背景原点在内容区左上角 */
{ background-origin: content-box; }
```

## 背景裁剪 background-clip

```css
/* 背景图默认在边框以内 */
{ background-clip: border-box; }

/* 背景图在内边距以内 */
{ background-clip: padding-box; }

/* 背景图在内容区以内 */
{ background-clip: content-box; }
```





# CSS3-盒子模型

## 怪异盒子 box-sizing

```css
/* 标准盒子模型 */
{ box-sizing: content-box; }

/* 怪异盒子模型 */
{ box-sizing: border-box; }
```

## 圆角边框 border-radius

```css
/* 圆的半径大小 */
{ border-radius: 25px; }

/* 圆的半径相对于盒子宽高的百分比 */
{ border-radius: 50%; }

/* x: 左上 右上 右下 左下 / y: 左上 右上 右下 左下 */
{ border-radius: 5px 5px 5px 5px / 5px 5px 5px 5px; }
```

## 盒子阴影 box-shadow

```css
{ box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, .3); }
```

- offset-x: 水平方向的偏移量（必要），正数向右，负数向左

- offset-y: 垂直方向的偏移量（必要），正数向下，负数向上

- blur-radius: 模糊距离

- spread-radius: 阴影大小

- color: 阴影颜色

- inset: 设置为内部阴影（默认为外部阴影）

## 宽度计算 calc()

```css
/* 父元素的宽度 - 自身的宽度 */
{ width: calc(100% - 80px); }
```





# CSS3-滤镜

## 模糊滤镜 blur()

值越大，图像越模糊

```css
{ filter: blur(5px); }
```

## 亮度滤镜 brightness()

值越大，图像越明亮。值为 0 时图像全黑，值为 1 时图像无变化

```css
{ filter: brightness(2); }
```

## 阴影滤镜 drop-shadow()

与 box-shadow 属性相似，但是 `filter: drop-shadow()` 性能更好

```css
{ filter: drop-shadow(16px 16px 10px black); }
```

- offset-x: 水平方向的偏移量（必要），正数向右，负数向左

- offset-y: 垂直方向的偏移量（必要），正数向下，负数向上

- blur-radius: 模糊距离

- color: 阴影颜色

## 透明滤镜 opacity()

与 opacity 属性相似，但是 `filter: opacity()` 性能更好

```css
{ filter: opacity(0.5); }
```

## 复合属性 filter

```css
{ filter: blur(5px) brightness(2) drop-shadow(16px 16px 10px black) blur(5px); }
```





# CSS3-渐变

## 线性渐变 linear-gradient()

```css
{ background: linear-gradient(to left, red, orange 30%, blue); }
```

- direction: 渐变方向

  - to left: 从右到左

  - to right: 从左到右

  - to top: 从上到下

  - to bottom: 从下到上

  - deg: 角度

- color: 渐变颜色，可以设置每个颜色的渐变范围

## 放射渐变 radial-gradient()

```css
{ background: radial-gradient(circle at center, red 0, blue, green 100%); }
```

- shape: 渐变形状

  - ellipse: 默认椭圆

  - circle: 圆

- size: 渐变大小

  - closest-side

  - closest-corner

  - farthest-side

  - farthest-corner

- at position: 渐变中心

- color: 渐变颜色





# CSS3-变换

## 移动变换 translate()

```css
/* 相对于自身原点偏移 */
{ transform: translate(100px, 100px); }

/* 水平偏移量 */
{ transform: translateX(50%); }

/* 垂直偏移量 */
{ transform: translateY(50%); }
```

## 旋转变换 rotate()

```css
/* 相对于自身中心旋转 */
{ transform: rotate(45deg); }

/* 绕水平中心轴旋转, 度数为正, 上边缘向里旋转 */
{ transform: rotateX(45deg); }

/* 绕垂直中心轴旋转, 度数为正, 右边缘向里旋转 */
{ transform: rotateY(45deg); }
```

## 缩放变换 scale()

```css
/* 相对于自身中心缩放 */
{ transform: scale(2); }

/* 水平方向缩放 0.5, 垂直方向缩放 1.5 */
{ transform: scale(0.5, 1.5); }
```

## 复合属性 transform

```css
{ transform: translate(100px, 100px) rotate(45deg) scale(0.5, 0.5); }
```

## 变换中心 transform-origin

设置旋转与缩放的中心点

```css
/* 默认相对于自身原点的偏移量为(50%, 50%) */
{ transform-origin: 50% 50%; }

/* 以自身的左上角为旋转中心 */
{ transform-origin: left top; }
```





# CSS3-过渡

## 过渡 transition

```css
/* 单个属性写法 */
{ transition: all 0.5s ease 0.2s; }

/* 多个属性写法 */
{ transition: width 0.5s ease 0.2s, height 0.5s ease 0.2s; }
```

- transition-property: 设置需要过渡的 CSS 属性

  - width

  - height

  - background-color

  - all

- transition-duration: 过渡执行时间

- transition-timing-function: 速度曲线函数

  - ease: 默认逐渐变慢

  - linear: 匀速

  - ease-in: 加速

  - ease-out: 减速

- transition-delay: 过渡延迟时间





# CSS3-动画

## 关键帧 @keyframes

```css
@keyframes move {
  25% {
    transform: translate(800px, 0);
  }
  50% {
    transform: translate(800px, 400px);
  }
  75% {
    transform: translate(0px, 400px);
  }
}
```

## 动画 animation

```css
{ animation: move 2s linear 1s infinite alternate; }
```

- animation-name: 关键帧名称

- animation-duration: 动画执行时间

- animation-timing-function: 速度曲线函数

- animation-delay: 动画延迟时间

- animation-iteration-count: 动画的执行次数，infinite(无限次)

- animation-direction: alternate(来回播放)

- animation-play-state: 动画的播放和暂停

  - running: 播放动画

  - paused: 暂停动画

- animation-fill-mode: 动画开始和结束状态

  - none: 动画等待时和动画结束后，不会对元素的样式产生改变

  - forwards: 动画结束后，元素的样式为动画的最后一帧

  - backwards: 在动画等待时间内，元素的样式为动画的第一帧
  
  - both: 在动画等待时和动画结束后，元素的样式分别为动画第一帧和最后一帧





# CSS3-弹性布局

## 弹性容器样式

### 主轴方向 flex-direction

```css
/* 水平向右 */
{ flex-direction: row; }

/* 水平向左 */
{ flex-direction: row-reverse; }

/* 垂直向下 */
{ flex-direction: column; }

/* 垂直向上 */
{ flex-direction: column-reverse; }
```

### 主轴对齐 justify-content

弹性元素的整体对齐方式

```css
/* item 从主轴头部开始排列 (默认) */
{ justify-content: flex-start; }

/* item 居中对齐 */
{ justify-content: center; }

/* item 从主轴尾部开始排列 */
{ justify-content: flex-end; }

/* item 均匀排列, 首个 item 位于主轴开始位置, 末尾 item 位于主轴结束位置 */
{ justify-content: space-between; }

/* item 均匀排列, 每个 item 周围分配相同的空间(拉手对齐) */
{ justify-content: space-around; }

/* item 均匀排列, 每个 item 之间的间隔相同 */
{ justify-content: space-evenly; }
```

### 侧轴对齐 align-items

单行弹性元素的排列方式

```css
/* item 未设置宽/高时, 默认在交叉轴方向上拉伸至撑满弹性容器 */
{ align-items: stretch; }

/* item 从交叉轴起始位置开始排列 */
{ align-items: flex-start; }

/* item 居中排列 */
{ align-items: center; }

/* item 从交叉轴结束位置开始排列 */
{ align-items: flex-end; }

/* item 以基线对齐 */
{ align-items: baseline; }
```

### 侧轴对齐 align-content

多行弹性元素换行后(`flex-wrap: wrap;`)在容器中的整体排列方式

```css
/* item 默认从交叉轴起始位置开始排列 */
{ align-content: flex-start; }

/* item 居中排列 */
{ align-content: center; }

/* item 从交叉轴结束位置开始排列 */
{ align-content: flex-end; }

/* item 均匀排列, 首个 item 位于交叉轴开始位置, 末尾 item 位于交叉轴结束位置 */
{ align-content: space-between; }

/* item 均匀排列, 每个 item 周围分配相同的空间(拉手对齐) */
{ align-content: space-around; }

/* item 均匀排列, 每个 item 之间的间隔相同 */
{ align-content: space-evenly; }
```

### 换行排列 flex-wrap

换行之后，justify-content 和 align-items 都是控制弹性元素在当前行/列内排列

```css
/* 默认不换行 */
{ flex-wrap: nowrap; }

/* 溢出换行 */
{ flex-wrap: wrap; }

/* 换行并使交叉轴反向 */
{ flex-wrap: wrap-reverse; }
```

### 复合属性 flex-flow

```css
/* 主轴方向 换行排列 */
{ flex-flow: column wrap; }

/* 等价于 */
{
  flex-direction: column;
  flex-wrap: wrap;
}
```

## 弹性元素样式

### 侧轴对齐 align-self

单个弹性元素的排列方式，会覆盖 align-items

```css
/* item 未设置宽/高时, 默认在交叉轴方向上拉伸至撑满弹性容器 */
{ align-self: stretch; }

/* item 从交叉轴起始位置开始排列 */
{ align-self: flex-start; }

/* item 居中排列 */
{ align-self: center; }

/* item 从交叉轴结束位置开始排列 */
{ align-self: flex-end; }

/* item 以基线对齐 */
{ align-self: baseline; }
```

### 排列顺序 order

子元素在弹性容器中的排列顺序，数值越小越靠前

`order: -1` > `order: 0` > `order: 1`

### 剩余空间 flex-grow

将剩余空间按比例分配给弹性元素，默认为 0

```css
.outer {
  width: 300px;
}

.box1 {
  flex-grow: 1; /* 100px */
}

.box2 {
  flex-grow: 2; /* 200px */
}
```

### 收缩规则 flex-shrink

当弹性元素溢出容器时，元素被压缩的比例

```css
/* 默认等比例压缩 */
{ flex-shrink: 1; }

/* 不压缩 */
{ flex-shrink: 0; }
```

### 初始大小 flex-basis

弹性元素的初始宽高，默认为 0，优先级高于 width/height

### 复合属性 flex

```css
/* 剩余分配 收缩规则 初始大小 */
{ flex: 1 1 100%; }

/* 等价于 */
{
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
}

/* 省略 flex-shrink 和 flex-basis, 默认分别为 1 0% */
{ flex: 1; }
```





# CSS3-网格布局

## 网格容器样式

### 列 grid-template-columns

```css
/* 分为两列，每列占比相等 */
{ grid-template-columns: 1fr 1fr; }

/* 分为两列，占比为 1:2 */
{ grid-template-columns: 1fr 2fr; }

/* 分为三列，第一列为 100px，其余两列按 1:2 占父元素剩余宽度 */
{ grid-template-columns: 100px 1fr 2fr; }

/* 分为三列，每列占比相等, 1fr 被重复3次 */
{ grid-template-columns: repeat(3,1fr); }
```

### 行 grid-template-rows

```css
/* 分为两行，每行占比相等 */
{ grid-template-columns: 1fr 1fr; }

/* 分为两行，占比为 1:2 */
{ grid-template-columns: 1fr 2fr; }

/* 分为三行，第一行为 100px，其余两行按 1:2 占父元素剩余宽度 */
{ grid-template-columns: 100px 1fr 2fr; }

/* 分为三行，每行占比相等, 1fr 被重复3次 */
{ grid-template-columns: repeat(3,1fr); }
```

### 命名 grid-template-area

命名单元格，相同名称的单元格被划分为一个区域

### 行列间距 grid-gap



### 行间距 grid-row-gap



### 列间距 grid-column-gap



### 水平排列 justify-items

网格元素的水平排列方式

### 垂直排列 align-items

网格元素的垂直排列方式

### 复合属性 place-items

justify-items 和 align-items 的复合属性

### 水平排列 justify-content

网格元素整体的水平排列方式，同弹性容器的 justify-content

### 垂直排列 align-content

网格元素整体的垂直排列方式，同弹性容器的 align-content

### 复合属性 place-content

justify-content 和 align-content 的复合属性

## 网格元素样式

### 列位置 grid-column

grid-column-start 和 grid-column-end 的复合属性

```css
/* 从列的第 1 条网格线开始，在第 5 条网格线结束 */
{ grid-column: 1/5; }

/* 从列的第 1 条网格线开始，跨越 3 列 */
{ grid-column: 1/span 3; }
```

### 行位置 grid-row

grid-row-start 和 grid-row-end 的复合属性

### 复合属性 grid-area

grid-column 和 grid-row 的复合属性

```css
/* 从行的第 1 条网格线和列的第 2 条网格线开始，在行的第 3 条网格线和列的第 4 条网格线结束 */
{ grid-area: 1/2/3/4; }
```

### 水平排列 justify-self

网格元素自身的水平排列方式

### 垂直排列 align-self

网格元素自身的垂直排列方式

### 复合属性 place-self

justify-self 和 align-self 的复合属性





# CSS3-鼠标样式

鼠标悬停时显示

```css
/* 默认光标 */
{ cursor: default; }

/* 指示链接 */
{ cursor: pointer; }

/* 指示可移动 */
{ cursor: move; }

/* 指示文本 */
{ cursor: text; }

/* 指示禁止 */
{ cursor: not-allowed; }
```





# Less

## 嵌套

使用 Less 提供的嵌套语法代替 CSS 层叠

```less
.container {
  width: 200px;
  height: 200px;
  background-color: blue;

  &:hover /* &: container */ {
    background-color: orange;
  }

  .inner {
    width: 100px;
    height: 100px;
    background-color: red;
  }
}
```

编译成 CSS:

```css
.container {
  width: 200px;
  height: 200px;
  background-color: blue;
}

.container:hover {
  background-color: orange;
}

.container .inner {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

## 变量

Less 可以定义变量

```less
@w: 10px;
@h: @w + 10px;

.box {
  width: @width;
  height: @height;
}
```

编译成 CSS:

```css
.box {
  width: 10px;
  height: 20px;
}
```

**插值语法**

```less
@my-selector: .container;
@my-url: "1.png";

@{my-selector} {
  width: 100px;
  height: 100px;
  background: url("./img/@{my-url}");
}
```

编译成 CSS:

```css
.container {
  width: 100px;
  height: 100px;
  background: url("https://www.baidu.com");
}
```

**加法运算**，算术运算符在加法运算之前会进行单位转换

```less
@a: 100;
@b: 20px;

.box {
  width: @a + @b;
  height: 200px;
}
```

编译成 CSS:

```css
.box {
  width: 120px;
  height: 200px;
}
```

**减法运算**，算术运算符在减法运算之前会进行单位转换

```less
@a: 100;
@b: 20px;

.box {
  width: @a - @b;
  height: 200px;
}
```

编译成 CSS:

```css
.box {
  width: 80px;
  height: 200px;
}
```

**乘法运算**

```less
@a: 100;
@b: 20px;

.box {
  width: @a * @b;
  height: 200px;
}
```

编译成 CSS:

```css
.box {
  width: 2000px;
  height: 200px;
}
```

**除法运算**

```less
@a: 100;
@b: 20px;

.box {
  width: (@a / @b);
  height: 100px;
}
```

编译成 CSS:

```css
.box {
  width: 5px;
  height: 100px;
}
```

## 混入

混入可以将一组定义属性运用在选择器中

```less
.common() {
  border: 1px solid red;
}

.box {
  width: 100px;
  height: 100px;
  .common();
}
```

编译成 CSS:

```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
```

**携带参数的混入**

```less
.common(@w, @h, @c: red /* 默认参数 */) {
  width: @w;
  height: @h;
  color: @c;
}

.box1 {
  .common(100px, 200px, blue);
}

.box2 {
  .common(200px, 300px);
}
```

编译成 CSS:

```css
.box1 {
  width: 100px;
  height: 200px;
  color: blue;
}

.box2 {
  width: 200px;
  height: 300px;
  color: red;
}
```

**访问其他作用域中的混入函数**

```less
.container {
  .common() {
    color: red;
  }
}

.box {
  .container .common();
}
```

编译成 CSS:

```css
.box {
  color: red;
}
```

**模式匹配**，可以根据传递不同的参数更改 mixin 函数

```less
.common(@_) {
  width: 100px;
  height: 100px;
}

.common(b) {
  background-color: blue;
}

.common(r) {
  background-color: red;
}

.box1 {
  .common(r);
}

.box2 {
  .common(b);
}
```

编译成 CSS:

```css
.box1 {
  width: 100px;
  height: 100px;
  background-color: red;
}

.box2 {
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

**重载**，可以根据传递参数的个数更改 mixin 函数

```less
.common(@a, @b) {
  width: @a;
  height: @b;
  background-color: red;
}

.common(@a, @b, @c) {
  width: @a;
  height: @b;
  background-color: @c;
}

.box1 {
  .common(100px, 100px);
}

.box2 {
  .common(200px, 200px, blue);
}
```

编译成 CSS:

```css
.box1 {
  width: 100px;
  height: 100px;
  background-color: red;
}

.box2 {
  width: 200px;
  height: 200px;
  background-color: blue;
}
```

## 守卫

类似于 if...else 判断

```less
.common(@num) when (@num<100), (@num>200) /* 或 */ {
  width: 200px;
  height: 200px;
  background-color: red;
}

.common(@num) when (@num>=100) and (@num<=200) /* 与 */ {
  width: 150px;
  height: 150px;
  background-color: blue;
}

.box1 {
  .common(120);
}

.box2 {
  .common(210);
}
```

编译成 CSS:

```css
.box1 {
  width: 150px;
  height: 150px;
  background-color: blue;
}

.box2 {
  width: 200px;
  height: 200px;
  background-color: red;
}
```

## 函数

Less 提供了预定义函数

```less
@flag: boolean(5 > 3);

.box1 {
  width: if((@flag) 100px, 200px);
  height: 300px;
}

@a: 200px;
@b: 3;

.box2 {
  width: ceil((@a / @b));
  height: floor((@a / @b));
}
```

编译成 CSS:

```css
.box1 {
  width: 100px;
  height: 300px;
}

.box2 {
  width: 67px;
  height: 66px;
}
```

## 导入

```less
@import url("https://meyerweb.com/eric/tools/css/reset/reset200802.css");
```
