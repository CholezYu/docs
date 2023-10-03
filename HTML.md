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

- autocomplete: 显示历史输入（必须设置 name 属性才会生效）

  - on: 开启（默认）

  - off: 关闭

- autofocus: 自动获取输入框的焦点（无属性值）

- required: 输入框不能为空（无属性值）

- readonly: 输入框中的值是只读的，不能被修改（无属性值）

- multiple: 可以选择多个 option（无属性值）

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
