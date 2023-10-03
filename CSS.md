# 文本样式

## 文本装饰 text-decoration

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

## 内容溢出 overflow

```css
/* 显示溢出部分（默认） */
overflow: visible;

/* 隐藏溢出部分 */
overflow: hidden;

/* 始终显示滚动条 */
overflow: scroll;

/* 若有溢出部分则显示滚动条，否则不显示 */
overflow: auto;
```

## 文本阴影 text-shadow

offset-x > offset-y > blur-radius > color

```css
text-shadow: 1px 1px 2px black;
```

- offset-x: 水平方向的偏移量（必要），正数向右，负数向左

- offset-y: 垂直方向的偏移量（必要），正数向下，负数向上

- blur-radius: 模糊距离

- color: 阴影颜色

## 盒子阴影 box-shadow

```css
box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, .3);
```

- offset-x: 水平方向的偏移量（必要），正数向右，负数向左

- offset-y: 垂直方向的偏移量（必要），正数向下，负数向上

- blur-radius: 模糊距离

- spread-radius: 阴影大小

- color: 阴影颜色

- inset: 设置为内部阴影（默认为外部阴影）

## 空白处理 white-space

```css
/* 将连续的多个空格变成一个空格，文本溢出则换行（默认） */
white-space: normal;

/* 禁止文本换行 */
white-space: nowrap;

/* 保留空格 */
white-space: pre;
```

## 文本转换 text-transform

```css
/* 所有字母大写 */
text-transform: uppercase;

/* 所有字母小写 */
text-transform: lowercase;

/* 首字母大写 */
text-transform: capitalize;
```





# 背景样式

## 背景定位 background-position

```css
/* 位于左上角（默认） */
background-position: left top;

/* 水平坐标, 垂直坐标 */
background-position: 20px 50px;
```

## 背景填充 background-repeat

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

## 背景大小 background-size

```css
/* 数值 */
background-size: 300px 200px;

/* 等比例缩放到完全覆盖容器 */
background-size: cover;

/* 等比例缩放到与容器宽高相等 */
background-size: contain;
```

## 背景原点 background-origin

```css
/* 背景原点在内边距左上角（默认） */
background-origin: padding-box;

/* 背景原点在边框左上角 */
background-origin: border-box;

/* 背景原点在内容区左上角 */
background-origin: content-box;
```

## 背景裁剪 background-clip

```css
/* 背景图在边框以内（默认） */
background-clip: border-box;

/* 背景图在内边距以内 */
background-clip: padding-box;

/* 背景图在内容区以内 */
background-clip: content-box;
```





# 列表样式

## 标号类型 list-style-type

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

## 标号位置 list-style-position

```css
/* 标号在列表区域内（默认） */
list-style-position: inside;

/* 标号在列表区域外 */
list-style-position: outside;
```

## 标号图像 list-style-image

```css
list-style-image: url("http://baidu.baike.com");
```





# 文本居中

## 单行文本垂直居中

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

## 多行文本垂直居中

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





# 元素居中

## 块元素水平居中

给块元素设置宽度，并将水平方向的 margin 设置为 auto。

原理：浏览器会将 `margin-right` 设置为 auto，使 `margin-left` = `margin-right`。

```css
/* 设置宽度 */
width: 500px;

/* 使元素的左右外边距相等 */
margin: 0 auto;
```

## 元素水平垂直居中（定位）

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

## 元素水平垂直居中（弹性）

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
/* 文本在一行内显示 */
white-space: nowrap;

/* 隐藏溢出部分 */
overflow: hidden;

/* 用省略号代替溢出文本 */
text-overflow: ellipsis;
```

## 用省略号代替多行溢出文本

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





# 选择器

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





# 滤镜

## 模糊滤镜 blur()

值越大，图像越模糊

```css
filter: blur(5px);
```

## 亮度滤镜 brightness()

值越大，图像越明亮。值为 0 时图像全黑，值为 1 时图像无变化

```css
filter: brightness(2);
```

## 阴影滤镜 drop-shadow()

与 box-shadow 属性相似，但是 `filter: drop-shadow()` 性能更好

```css
filter: drop-shadow(16px 16px 10px black);
```

- offset-x: 水平方向的偏移量（必要），正数向右，负数向左

- offset-y: 垂直方向的偏移量（必要），正数向下，负数向上

- blur-radius: 模糊距离

- color: 阴影颜色

## 透明滤镜 opacity()

与 opacity 属性相似，但是 `filter: opacity()` 性能更好

```css
filter: opacity(0.5);
```

## 复合属性 filter

```css
filter: blur(5px) brightness(2) drop-shadow(16px 16px 10px black) blur(5px);
```





# 渐变

## 线性渐变 linear-gradient()

```css
background: linear-gradient(to left, red, orange 30%, blue);
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
background: radial-gradient(circle at center, red 0, blue, green 100%);
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





# 变换

## 平移 translate()

```css
/* 相对于自身原点偏移 */
transform: translate(100px, 100px);

/* 水平偏移量 */
transform: translateX(50%);

/* 垂直偏移量 */
transform: translateY(50%);
```

## 旋转 rotate()

```css
/* 相对于自身中心旋转 */
transform: rotate(45deg);

/* 绕水平中心轴旋转, 度数为正, 上边缘向里旋转 */
transform: rotateX(45deg);

/* 绕垂直中心轴旋转, 度数为正, 右边缘向里旋转 */
transform: rotateY(45deg);
```

## 缩放 scale()

```css
/* 相对于自身中心缩放 */
transform: scale(2);

/* 水平方向缩放 0.5, 垂直方向缩放 1.5 */
transform: scale(0.5, 1.5);
```

## 复合属性 transform

```css
transform: translate(100px, 100px) rotate(45deg) scale(0.5, 0.5);
```

## 变换中心 transform-origin

设置旋转与缩放的中心点

```css
/* 默认相对于自身原点的偏移量为(50%, 50%) */
transform-origin: 50% 50%;

/* 以自身的左上角为旋转中心 */
transform-origin: left top;
```





# 过渡

## 过渡 transition

```css
/* 单个属性写法 */
transition: all 0.5s ease 0.2s;

/* 多个属性写法 */
transition: width 0.5s ease 0.2s, height 0.5s ease 0.2s;
```

- transition-property: 设置需要过渡的 CSS 属性

- transition-duration: 过渡执行时间

- transition-timing-function: 速度曲线函数

  - ease: 默认逐渐变慢

  - linear: 匀速

  - ease-in: 加速

  - ease-out: 减速

- transition-delay: 过渡延迟时间





# 动画

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
animation: move 2s linear 1s infinite alternate;
```

- animation-name: 动画名称

- animation-duration: 动画执行时间

- animation-timing-function: 速度曲线函数

- animation-delay: 动画延迟时间

- animation-iteration-count: 动画执行次数（infinite 无限次）

- animation-direction: 动画方向（alternate 来回播放）

- animation-play-state: 动画的播放和暂停

  - running: 播放动画

  - paused: 暂停动画

- animation-fill-mode: 动画开始和结束状态

  - none: 动画等待时和动画结束后，不会对元素的样式产生改变

  - forwards: 动画结束后，元素的样式为动画的最后一帧

  - backwards: 在动画等待时间内，元素的样式为动画的第一帧
  
  - both: 在动画等待时和动画结束后，元素的样式分别为动画第一帧和最后一帧





# 弹性布局

## 弹性容器样式

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

弹性元素的整体对齐方式

```css
/* item 从主轴头部开始排列 (默认) */
justify-content: flex-start;

/* item 居中对齐 */
justify-content: center;

/* item 从主轴尾部开始排列 */
justify-content: flex-end;

/* item 均匀排列, 首个 item 位于主轴开始位置, 末尾 item 位于主轴结束位置 */
justify-content: space-between;

/* item 均匀排列, 每个 item 周围分配相同的空间(拉手对齐) */
justify-content: space-around;

/* item 均匀排列, 每个 item 之间的间隔相同 */
justify-content: space-evenly;
```

### 侧轴对齐 align-items

单行弹性元素的排列方式

```css
/* item 未设置宽/高时, 默认在交叉轴方向上拉伸至撑满弹性容器 */
align-items: stretch;

/* item 从交叉轴起始位置开始排列 */
align-items: flex-start;

/* item 居中排列 */
align-items: center;

/* item 从交叉轴结束位置开始排列 */
align-items: flex-end;

/* item 以基线对齐 */
align-items: baseline;
```

### 侧轴对齐 align-content

多行弹性元素换行后(`flex-wrap: wrap;`)在容器中的整体排列方式

```css
/* item 默认从交叉轴起始位置开始排列 */
align-content: flex-start;

/* item 居中排列 */
align-content: center;

/* item 从交叉轴结束位置开始排列 */
align-content: flex-end;

/* item 均匀排列, 首个 item 位于交叉轴开始位置, 末尾 item 位于交叉轴结束位置 */
align-content: space-between;

/* item 均匀排列, 每个 item 周围分配相同的空间(拉手对齐) */
align-content: space-around;

/* item 均匀排列, 每个 item 之间的间隔相同 */
align-content: space-evenly;
```

### 换行排列 flex-wrap

换行之后，justify-content 和 align-items 都是控制弹性元素在当前行/列内排列

```css
/* 默认不换行 */
flex-wrap: nowrap;

/* 溢出换行 */
flex-wrap: wrap;

/* 换行并使交叉轴反向 */
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

## 弹性元素样式

### 侧轴对齐 align-self

单个弹性元素的排列方式，会覆盖 align-items

```css
/* item 未设置宽/高时, 默认在交叉轴方向上拉伸至撑满弹性容器 */
align-self: stretch;

/* item 从交叉轴起始位置开始排列 */
align-self: flex-start;

/* item 居中排列 */
align-self: center;

/* item 从交叉轴结束位置开始排列 */
align-self: flex-end;

/* item 以基线对齐 */
align-self: baseline;
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
flex-shrink: 1;

/* 不压缩 */
flex-shrink: 0;
```

### 初始大小 flex-basis

弹性元素的初始宽高，默认为 0，优先级高于 width/height

### 复合属性 flex

```css
/* 剩余分配 收缩规则 初始大小 */
flex: 1 1 100%;

/* 等价于 */
flex-grow: 1;
flex-shrink: 1;
flex-basis: 100%;

/* 省略 flex-shrink 和 flex-basis, 默认分别为 1 0% */
flex: 1;
```





# 网格布局

## 网格容器样式

### 列 grid-template-columns

```css
/* 分为两列，每列占比相等 */
grid-template-columns: 1fr 1fr;

/* 分为两列，占比为 1:2 */
grid-template-columns: 1fr 2fr;

/* 分为三列，第一列为 100px，其余两列按 1:2 占父元素剩余宽度 */
grid-template-columns: 100px 1fr 2fr;

/* 分为三列，每列占比相等, 1fr 被重复3次 */
grid-template-columns: repeat(3,1fr);
```

### 行 grid-template-rows

```css
/* 分为两行，每行占比相等 */
grid-template-columns: 1fr 1fr;

/* 分为两行，占比为 1:2 */
grid-template-columns: 1fr 2fr;

/* 分为三行，第一行为 100px，其余两行按 1:2 占父元素剩余宽度 */
grid-template-columns: 100px 1fr 2fr;

/* 分为三行，每行占比相等, 1fr 被重复3次 */
grid-template-columns: repeat(3,1fr);
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
grid-column: 1/5;

/* 从列的第 1 条网格线开始，跨越 3 列 */
grid-column: 1/span 3;
```

### 行位置 grid-row

grid-row-start 和 grid-row-end 的复合属性

### 复合属性 grid-area

grid-column 和 grid-row 的复合属性

```css
/* 从行的第 1 条网格线和列的第 2 条网格线开始，在行的第 3 条网格线和列的第 4 条网格线结束 */
grid-area: 1/2/3/4;
```

### 水平排列 justify-self

网格元素自身的水平排列方式

### 垂直排列 align-self

网格元素自身的垂直排列方式

### 复合属性 place-self

justify-self 和 align-self 的复合属性





# 鼠标样式

```css
/* 默认光标 */
cursor: default;

/* 指示链接 */
cursor: pointer;

/* 指示可移动 */
cursor: move;

/* 指示文本 */
cursor: text;

/* 指示禁止 */
cursor: not-allowed;
```

