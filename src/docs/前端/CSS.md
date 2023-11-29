---
title: CSS
icon: css
---

# CSS

## 选择器

### 伪类选择器

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

### 伪元素选择器

```css
/* 在元素内部的最前面插入内容（必须设置 content 属性） */
::before

/* 在元素内部的最后面插入内容（必须设置 content 属性） */
::after


/* 元素的首字母 */
::first-letter

/* 元素的首行 */
::first-line


/* 元素中被选中的部分 */
::selection
```

## 文本样式

### 文本装饰 text-decoration

```css
/* 无装饰线（默认） */
text-decoration-line: none;

/* 下划线 */
text-decoration-line: underline;

/* 上划线 */
text-decoration-line: overline;

/* 删除线 */
text-decoration-line: line-through;


/* 装饰线颜色 */
text-decoration-color: black;


/* 实线 */
text-decoration-style: solid;

/* 双实线 */
text-decoration-style: double;

/* 虚线 */
text-decoration-style: dashed;

/* 断续点 */
text-decoration-style: dotted;

/* 波浪线 */
text-decoration-style: wavy;


/* 复合属性 */
text-decoration: underline red solid;
```

### 文本阴影 text-shadow

offset-x > offset-y > blur-radius > color

```css
text-shadow: 1px 1px 2px black;
```

- offset-x: 水平方向的偏移量（必要），正数向右，负数向左

- offset-y: 垂直方向的偏移量（必要），正数向下，负数向上

- blur-radius: 模糊距离

- color: 阴影颜色

### 文本换行 white-space

```css
/* 将连续的多个空格变成一个空格，文本溢出则换行（默认） */
white-space: normal;

/* 禁止文本换行 */
white-space: nowrap;

/* 保留空格 */
white-space: pre;
```

### 文本转换 text-transform

```css
/* 所有字母大写 */
text-transform: uppercase;

/* 所有字母小写 */
text-transform: lowercase;

/* 首字母大写 */
text-transform: capitalize;
```

## 背景样式

### 背景定位 background-position

```css
/* 位于左上角（默认） */
background-position: left top;

/* 水平坐标, 垂直坐标 */
background-position: 20px 50px;
```

### 背景填充 background-repeat

```css
/* 填充整个页面（默认） */
background-repeat: repeat;

/* 横向填充 */
background-repeat: repeat-x;

/* 纵向填充 */
background-repeat: repeat-y;

/* 不填充 */
background-repeat: no-repeat;
```

### 背景大小 background-size

```css
/* 数值 */
background-size: 300px 200px;

/* 等比例缩放到完全覆盖容器 */
background-size: cover;

/* 等比例缩放到与容器宽高相等 */
background-size: contain;
```

### 背景原点 background-origin

```css
/* 背景原点在内边距左上角（默认） */
background-origin: padding-box;

/* 背景原点在边框左上角 */
background-origin: border-box;

/* 背景原点在内容区左上角 */
background-origin: content-box;
```

### 背景裁剪 background-clip

```css
/* 背景图在边框以内（默认） */
background-clip: border-box;

/* 背景图在内边距以内 */
background-clip: padding-box;

/* 背景图在内容区以内 */
background-clip: content-box;
```

## 列表样式

### 标号类型 list-style-type

无序列表

```css
/* 实心圆（默认） */
list-style-type: disc;

/* 无标记 */
list-style-type: none;

/* 空心圆 */
list-style-type: circle;

/* 实心方块 */
list-style-type: square;
```

有序列表

```css
/* 阿拉伯数字（默认） */
list-style-type: decimal;

/* 小写罗马数字 */
list-style-type: lower-roman;

/* 大写罗马数字 */
list-style-type: upper-roman;

/* 小写英文字母 */
list-style-type: lower-alpha;

/* 大写英文字母 */
list-style-type: upper-alpha;

/* 小写希腊字母 */
list-style-type: lower-Greek;

/* 大写拉丁字母 */
list-style-type: upper-latin;

/* 小写拉丁字母 */
list-style-type: lower-latin;
```

### 标号位置 list-style-position

```css
/* 标号在列表区域内（默认） */
list-style-position: inside;

/* 标号在列表区域外 */
list-style-position: outside;
```

### 标号图像 list-style-image

```css
list-style-image: url("http://baidu.baike.com");
```

## 过渡动画

### 过渡 transition

```css
/* 单个属性写法 */
transition: all 0.5s ease 0.2s;

/* 多个属性写法 */
transition: width 0.5s ease 0.2s, height 0.5s ease 0.2s;
```

- transition-property: 设置需要过渡的 CSS 属性

- transition-duration: 过渡执行时间

- transition-timing-function: 速度曲线函数

  - ease: 逐渐变慢（默认）

  - linear: 匀速

  - ease-in: 加速

  - ease-out: 减速

  - ease-in-out: 先加速，再减速

- transition-delay: 过渡延迟时间

### 动画 animation

```css
animation: move 2s linear 1s infinite alternate;
```

- animation-name: 动画（关键帧）名称

- animation-duration: 动画执行时间

- animation-timing-function: 速度曲线函数

- animation-delay: 动画延迟时间

- animation-iteration-count: 动画执行次数

  - infinite: 无限次

- animation-direction: 动画方向

  - alternate: 来回播放

- animation-play-state: 动画的播放和暂停

  - running: 播放动画

  - paused: 暂停动画

- animation-fill-mode: 动画开始和结束状态

  - none: 动画等待时和动画结束后，不会对元素的样式产生改变

  - forwards: 动画结束后，元素的样式为动画的最后一帧

  - backwards: 在动画等待时间内，元素的样式为动画的第一帧

  - both: 在动画等待时和动画结束后，元素的样式分别为动画第一帧和最后一帧

## 弹性布局

### 主轴方向 flex-direction

```css
/* 水平向右 */
flex-direction: row;

/* 水平向左 */
flex-direction: row-reverse;

/* 垂直向下 */
flex-direction: column;

/* 垂直向上 */
flex-direction: column-reverse;
```

### 主轴对齐 justify-content

弹性元素在主轴的排列方式

```css
/* 弹性元素从主轴起始位置开始排列（默认） */
justify-content: flex-start;

/* 弹性元素居中对齐 */
justify-content: center;

/* 弹性元素从主轴结束位置开始排列 */
justify-content: flex-end;

/* 弹性元素均匀排列, 首个弹性元素位于主轴起始位置, 最后一个弹性元素位于主轴结束位置 */
justify-content: space-between;

/* 弹性元素均匀排列, 每个弹性元素周围分配相同的空间 */
justify-content: space-around;

/* 弹性元素均匀排列, 每个弹性元素之间的间隔相同 */
justify-content: space-evenly;
```

### 侧轴对齐 align-items

弹性元素在侧轴的排列方式

```css
/* 弹性元素未设置宽高时, 在侧轴方向上拉伸至撑满弹性容器（默认） */
align-items: stretch;

/* 弹性元素从侧轴起始位置开始排列 */
align-items: flex-start;

/* 弹性元素居中排列 */
align-items: center;

/* 弹性元素从侧轴结束位置开始排列 */
align-items: flex-end;

/* 弹性元素以基线对齐 */
align-items: baseline;
```

### 侧轴对齐 align-content

换行的弹性元素在侧轴的排列方式

```css
/* 弹性元素从侧轴起始位置开始排列（默认） */
align-content: flex-start;

/* 弹性元素居中排列 */
align-content: center;

/* 弹性元素从侧轴结束位置开始排列 */
align-content: flex-end;

/* 弹性元素均匀排列, 首个弹性元素位于侧轴起始位置, 最后一个弹性元素位于侧轴结束位置 */
align-content: space-between;

/* 弹性元素均匀排列, 每个弹性元素周围分配相同的空间 */
align-content: space-around;

/* 弹性元素均匀排列, 每个弹性元素之间的间隔相同 */
align-content: space-evenly;
```

### 换行排列 flex-wrap

```css
/* 不换行（默认） */
flex-wrap: nowrap;

/* 溢出换行 */
flex-wrap: wrap;

/* 换行并使侧轴反向 */
flex-wrap: wrap-reverse;
```

### 复合属性 flex-flow

```css
/* 主轴方向 换行排列 */
flex-flow: column wrap;

/* 等价于 */
flex-direction: column;
flex-wrap: wrap;
```

### 侧轴对齐 align-self

单个弹性元素在侧轴的排列方式

```css
/* 弹性元素未设置宽高时, 在侧轴方向上拉伸至撑满弹性容器（默认） */
align-self: stretch;

/* 弹性元素从侧轴起始位置开始排列 */
align-self: flex-start;

/* 弹性元素居中排列 */
align-self: center;

/* 弹性元素从侧轴结束位置开始排列 */
align-self: flex-end;

/* 弹性元素以基线对齐 */
align-self: baseline;
```

### 富余空间 flex-grow

给弹性元素按比例分配富余空间，默认为 0，表示不分配

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

按比例压缩弹性元素，默认为 1，表示等比例压缩

```css
/* 默认等比例压缩 */
flex-shrink: 1;

/* 不压缩 */
flex-shrink: 0;
```

### 基准宽度 flex-basis

弹性元素被压缩时的基准宽度，默认为 auto

```css
.container {
  display: flex;
  width: 500px;
}

.container div:nth-child(1) {
  width: 200px; /* 125px */
}

.container div:nth-child(2) {
  width: 200px; /* 250px */
  flex-basis: 400px;
}

.container div:nth-child(3) {
  width: 200px; /* 125px */
}
```

### 复合属性 flex

```css
/* 弹性元素等比例分配富余空间或等比例压缩，且被压缩时的基准宽度为 0 */
flex: 1;

/* 等价于 */
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0;
```

## 文本居中

### 单行文本垂直居中

将容器的 `line-height` 设置与 `height` 相等。

原理：给块元素设置 `line-height` 就是设置该元素内部每个行框的高度。

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

将容器内部的行内元素的 `line-height` 设置与容器的 `height` 相等。

原理：给行内元素设置 `line-height` 就是设置该元素所在的行框的高度。

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

### 多行文本垂直居中

将容器的 `line-height` 设置与 `height` 相等；

将容器内的行内元素转换为行内块元素，并为其设置 `line-height` 与 `vertical-align: middle;`

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

## 元素居中

### 块元素水平居中

给块元素设置宽度，并将水平方向的 margin 设置为 auto。

原理：浏览器会将 `margin-right` 设置为 auto，使 `margin-left` = `margin-right`。

```css
/* 设置宽度 */
width: 500px;

/* 使元素的左右外边距相等 */
margin: 0 auto;
```

### 元素水平垂直居中（定位）

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

### 元素水平垂直居中（弹性布局）

```css
.outer {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 文本溢出

### 单行文本溢出

```css
/* 文本在一行内显示 */
white-space: nowrap;

/* 隐藏溢出部分 */
overflow: hidden;

/* 用省略号代替溢出文本 */
text-overflow: ellipsis;
```

### 多行文本溢出

```css
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
```

## 响应式布局

### 媒体查询

```css
/* 在屏幕上, 并且最小宽度为 900px 时（屏幕宽度大于 900px）的样式 */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}
```

- type: 媒体类型

  - all: 用于所有设备

  - print: 用于打印机

  - screen: 用于屏幕

- feature: 媒体特性

  - width: 宽度

  - min-width: 最小宽度

  - max-width: 最大宽度

### 引入资源

```html
<!-- 在屏幕上, 并且最小宽度为 320px 时（屏幕宽度大于 320px）引入资源 -->
<link rel="stylesheet" href="./style.css" media="screen and (min-width: 320px)" />
```

### 移动端适配

```less
/* PC */
html {
  font-size: 50px;
}

@part: 10;

/* 320 iPhone 5 */
@media screen and (min-width: 320px) {
  html {
    font-size: 320px / @part;
  }
}

/* 375 iPhone 6/7/8 */
@media screen and (min-width: 375px) {
  html {
    font-size: 375px / @part;
  }
}

// ...

@media screen and (min-width: 750px) {
  html {
    font-size: 750px / @part;
  }
}
```

### 常用阈值

```css
/* 超小屏幕 */
@media screen and (max-width: 576px) {
  width: 100%;
}

/* 小屏幕 */
@media screen and (min-width: 576px) and (max-width: 768px) {
  width: 540px;
}

/* 中等屏幕 */
@media screen and (min-width: 768px) and (max-width: 992px) {
  width: 720px;
}

/* 大屏幕 */
@media screen and (min-width: 992px) and (max-width: 1200px) {
  width: 960px;
}

/* 超大屏幕 */
@media screen and (min-width: 1200px) {
  width: 1140px;
}
```
