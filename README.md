# HTML

## H5 新特性有哪些

- 新增了新的语义化标签：

  - 例如 header、main、footer、nav、aside
  
  - 合理使用语义化标签，可以使 html 结构更清晰，便于团队开发和维护；有利于 SEO 搜索引擎优化。
  
  - 搜索引擎优化的作用就是提高网站在搜索引擎的排名。
  
    优化方式可以设置 meta 标签的 keword 和 description 属性，设置一些关键字和描述；
  
    使用标签的语义化，例如 img 标签的 alt 属性、title 标签、h 标签；
  
    还可以建立更多跳转到自己网站的链接，喂养爬虫；提高网站加载速度，让爬虫在一定时间内访问更多网页；
  
    或者使用服务端渲染。
  
- 还新增了一些表单元素：

  - 例如调色板、日历控件
  
  - 但是它们的样式不好控制，在项目中一般会使用一些 UI 组件库，例如 elementUI、Ant Design
  
- 比较常用的还有本地存储：

  - localStorage 持久化存储；sessionStorage 会话存储，浏览器关闭时会话结束，数据被清除
  
  - 可以使用 localStorage 做免登录。登录时将 token 永久存储在本地，使用 token 时优先从本地读取
  
- 还新增了音视频标签，以及流媒体播放技术。

- 还新增了 canvas，用来绘制图形，我在项目中使用过它的一个封装库 echarts，做大屏数据可视化。

- 还有 Web Worker：

  - 可以开启分线程，将大量计算工作交给分线程，优化性能。

  - 实例化一个 worker 对象，创建分线程执行一个 js 文件；
  
  - 主线程通过 `worker.postMessage` 向分线程发送数据，通过监听 `worker.onmessage` 事件接收数据；
  
  - 分线程也是通过 `self.postMessage` 向主线程发送数据，通过监听 `self.onmessage` 事件接收数据。

## src 和 href 的区别

- 资源类型与作用结果不同：

  - 请求 src 资源时会将其指向的资源下载并应用到文档中，替换当前元素。例如 script、img、iframe 标签

  - href 会指向网络资源所在位置，建立资源和文档之间的链接。例如 link 或 a 标签

- 浏览器解析方式不同：

  - 当浏览器解析到 src，会暂停其他资源的下载和处理，阻塞当前页面渲染。所以建议把 script 标签放在底部

  - 如果在文档中添加 href，浏览器会识别该文档为 css 文件，会并行下载资源并且不会停止对当前文档的处理

## 说说块元素和行内元素

- 块元素

  - 常见的块元素有 div、p、ul、table、form

  - 块元素独占一行，可以设置宽高和内外边距，且宽度默认为父元素的 100%；

  - 块元素可以嵌套块元素和行内元素，但是 p、h、dt标签不行

- 行内元素

  - 常见的行内元素有 span、a、strong、em

  - 行内元素不独占一行，不能设置宽高，可以设置水平方向的内外边距，宽度默认为内容的宽度

  - 行内元素只能嵌套行内元素，但是 a 标签可以嵌套除了 a 标签块元素和行内元素

- 行内块元素

  - 常见的行内块元素有 input、textarea

  - 行内块元素不独占一行，可以设置宽高和内外边距，宽度默认为内容的宽度

- 行内替换元素

  - img 是特殊的行内元素，可以设置宽高

## 谈谈 iframe

iframe 标签就是在一个页面中嵌套另一个页面

- 同源情况下

  - 父页面可以访问子页面的内容，可以通过 `iframe.contentWindow` 访问子页面的 window 属性；

  - 但是需要使用 onload 事件监听子页面加载完毕，才能操作子页面的元素
  
- 非同源情况下

  - 父页面和子页面都是通过 `postMessage` 方法发送数据，通过监听 `onmessage` 事件接收数据






# CSS

## C3 新特性有哪些

新增了属性名选择器、伪类选择器和伪元素选择器

圆角边框

不透明度

文本阴影和盒子阴影

2D 转换：平移、旋转、缩放

过渡和动画

媒体查询（@media 用来做响应式布局）

## 谈谈 BFC

BFC 称为块级格式化上下文。是一个独立的渲染区域，让处于 BFC 内部的元素与外部元素相互隔离，互不影响

开启 BFC 可以解决父元素外边距塌陷问题，和浮动导致的父元素高度塌陷问题

开启 BFC 的方式有：浮动、绝对定位或固定定位、设置 overflow、设置为行内块元素

## CSS 预处理器

CSS 预处理器有 Sass、Less 和 Stylus，它们为 CSS 添加了一些编程特性，让我们可以对 CSS 进行复用

我在项目中使用过 Sass 和 Less，主要就是用它的 CSS 代码嵌套，结构更清晰；

还可以定义变量，Sass 是使用 $，Less 是使用 @，可以定义一些主题颜色和字体大小；

还可以通过 @mixin 定义一些混入，例如用省略号代替多行文本溢出，它有点类似于函数，提高样式的可复用性；

还可以通过 @extend 实现继承

## 谈谈 Flex 布局

Flex 布局又称为弹性布局。弹性容器中存在主轴和侧轴，默认情况下，主轴水平向右，侧轴垂直向下

容器的属性：

`flex-direction` 设置主轴方向。

`flex-wrap` 设置是否换行。

`justify-content` 设置弹性元素在主轴的排列方式。

`align-items` 设置弹性元素在侧轴的排列方式。

`align-content` 设置换行的弹性元素在侧轴的排列方式。

弹性元素的属性：

`align-self` 设置弹性元素自身的排列方式。

`order` 设置弹性元素的排列顺序。

`flex-grow` 给弹性元素按比例分配富余空间，默认为 0。

`flex-shrink` 按比例压缩弹性元素，默认为 1。

`flex-basis` 设置弹性元素被压缩时最小的大小，默认为 auto。

`flex: 1` 是 `flex-grow: 1` `flex-shrink: 1` `flex-basis: 0` 的简写；

表示弹性元素会等比例分配富余空间或等比例压缩，且被压缩时最小的大小为 0。

## 如何让元素水平垂直居中

将容器设置为弹性容器，设置弹性元素在主轴和侧轴上居中；

给父元素设置相对定位，给子元素设置绝对定位，给子元素设置水平垂直偏移量为 50%，并且水平垂直平移 -50%





# JavaScript

## JS 的数据类型有哪些

- 基本数据类型有：

  - number、boolean、string、undefined、null、symbol、bigint
  
  - null 表示声明一个变量时，将要赋值为对象，暂时赋值为 null
  
  - undefined 表示访问对象的属性不存在，或声明变量未赋值

- 引用数据类型有：

  - function、object、array

## 如何判断 JS 的数据类型

- typeof：

  可以判断大部分数据类型，但是无法区分 null、对象、数组

- instanceof：

  判断构造函数的原型对象是否在实例对象的原型链上

- Object.prototype.toString.call：

  可以判断所有数据类型
  
- 封装一个方法：

  判断值是不是 null，判断类型是不是数组，然后返回 typeof 的类型判断

## 说说常见的数组方法

- 变更方法：

  - push、pop、unshift、shift、splice、reverse、sort

- 遍历方法：

  - forEach、filter、map、reduce、find、findIndex、every、some

- 其他方法：

  - slice、join、concat、indexOf、includes

## 作用域和作用域链

- 作用域：

  - 作用域是一个变量可以合法使用的区域。作用是为了隔离变量，避免变量重名产生的冲突

  - 作用域分为全局作用域、函数作用域、块级作用域

- 作用域链：

  - 作用域链是多个作用域形成的一条链。用于查找变量

  - 查找变量时，先在自身作用域查找，再沿着作用域链向外层查找，最终找到全局作用域，如果都找不到就会报错

## 说说对闭包的理解

- 闭包是什么：

  - 闭包是一个引用外部函数变量的 closure 对象，存在内部函数中，可以通过断点调试查看

- 产生闭包的条件有：

  - 函数嵌套、内部函数引用外部函数的变量、外部函数被调用

- 闭包的优点：

  - 闭包可以延长变量的生命周期，可以在函数外部操作函数内部的数据

- 闭包的缺点：

  - 闭包可能会导致内存泄漏。可以将内部函数变成垃圾对象被回收，由于闭包存在内部函数中，所以闭包也会被回收

- 闭包的生命周期：

  - 闭包是在外部函数被调用时产生的，在内部函数变成垃圾对象时死亡

## 谈谈 this 指向

- 普通函数：

  - 直接调用函数，this 指向 window，严格模式下为 undefined
  
  - 对象调用方法，this 指向该对象
  
  - new 关键字调用，this 指向实例对象
  
  - call、apply 调用，this 指向第一个参数
  
- 特殊函数：

  - 箭头函数中，this 指向函数声明所在的作用域
  
  - 事件函数中，this 指向绑定事件的 DOM 元素
  
  - 定时器回调，this 指向 window
  
  - 生命周期函数，this 指向组件实例对象

## 说说原型和原型链

- 原型：

  - 原型指的是两个原型属性，显示原型（原型对象）和隐式原型
  
  - 所有非箭头函数都有一个原型对象，这个原型对象上有一个 constructor 属性指向函数本身
  
  - 每个实例对象都有一个隐式原型，它指向对应构造函数的原型对象
  
- 原型链是什么：

  - 因为实例对象的隐式原型指向构造函数的原型对象，而这个原型对象上又有一个隐式原型；
  
  - 它可能会指向父类构造函数的原型对象；也可能会指向 Object 的原型对象。
  
  - 这些隐式原型的指向会形成一条链，最终指向 Object 的原型对象。我们把这条链称为原型链。
  
  - 因为 Object 的原型对象的隐式原型为 null，根据定义，null 没有原型对象，所以它是原型链的尽头
  
- 原型链的作用：

  - 原型链用于查找对象的属性和方法。查找时，先在对象自身上查找，再沿着原型链向上一级查找；
  
  - 最终找到 Object 的原型对象。如果在 Object 的原型对象上没有找到，就返回 undefined
  
  - 利用原型链可以实现继承；或者将实例对象的公共方法挂载到构造函数的原型对象上，例如 Vue 的事件总线

## 说说垃圾回收机制



## 事件循环★

- 事件循环是浏览器用于调度异步任务的机制：

  - 浏览器主要的进程有：浏览器进程、网络进程、渲染进程。

  - 渲染进程中又包含了多个线程：GUI 渲染线程、JS 引擎线程、事件触发线程、计时线程、渲染主线程。

- 事件循环具体是什么？

  浏览器的渲染进程启动后，会开启一个渲染主线程，它会进入一个无限循环，每一次循环都会检查任务队列中是否有任务存在。如果有，就取出第一个任务执行，执行完进入下一次循环；如果没有，则进入休眠状态。其他线程可以随时向任务队列添加任务：比如说计时线程，计时器时间到了，往里面加任务；比如说交互线程，监听到了用户点击，往里面加任务。加任务的时候一定是把它加到任务队列的末尾，先来的先执行，后来的排队。在添加新任务时，如果主线程处于休眠状态，会将其唤醒，继续循环执行任务。这个过程叫做事件循环。

- 事件循环是实现异步的方式，那么异步又是什么？

  JS 运行在浏览器的渲染主线程中，而渲染主线程只有一个，所以 JS 是单线程执行的。这是为了保证页面渲染的可靠性和一致性，防止多个线程同时修改 DOM 引起的问题。而渲染主线程需要做很多工作，比如解析 HTML、解析 CSS、计算样式、布局、执行全局 JS 代码。而在代码执行的过程中，会遇到一些无法立即处理的任务，比如：计时器回调、网络请求完成后需要执行的任务、用户操作后需要执行的任务。如果使用同步的方式，让渲染主线程等待这些任务的执行，就会导致主线程长期处于阻塞状态，从而导致任务队列中很多其他任务无法被执行。这样一来，一方面会导致主线程白白地消耗时间，另一方面也会导致页面无法及时更新，给用户造成卡死现象。而渲染主线程承担着极其重要的工作，无论如何都不能阻塞，所以浏览器采用异步的方式来解决这个问题。当某些任务发生时，比如计时器、网络请求、事件监听，主线程会将任务交给其他线程去处理。当其他线程完成时，会将事先传递的回调函数包装成任务，加入到任务队列的末尾排队，等待主线程调度。在这种异步模式下，浏览器永不阻塞，从而最大程度地保证了单线程的流畅运行。

- JS 为什么会阻塞页面渲染？

  在浏览器中，GUI 线程负责解析 HTML、CSS 并进行页面的绘制，JS 引擎线程负责执行 JS 代码。由于 GUI 渲染和 JS 执行共享同一个渲染主线程，所以它们是互斥的。当 GUI 渲染线程准备渲染页面时，如果遇到需要执行 JS 的情况，会等待 JS 引擎线程执行完毕后再继续渲染。这期间，渲染主线程处于阻塞状态，页面渲染暂停。

- 任务队列的优先级：

  任务是没有优先级的，在任务队列中先进先出。但是任务队列是有优先级的。根据 W3C 最新解释：每个任务都有一个任务类型，同一个类型的任务必须在一个队列，不同类型的任务属于不同的队列。在一次事件循环中，浏览器可以根据实际情况从不同的队列中取出任务执行。浏览器必须准备一个微队列，微队列中的任务优先所有其他任务执行。随着浏览器复杂度急剧提升，W3C 不再使用宏队列的说法。在目前谷歌浏览器的实现中，至少包含了：延时队列，用于存放计时器的回调任务；交互队列，用于存放用户操作后产生的任务；网络队列，用于存放网络请求完成后产生的任务；微队列，也称为 vip 队列，优先级最高。在延时队列、交互队列、网络队列中，交互队列的优先级更高，因为浏览器认为用户的交互更加重要。

- JS 中的计时器能精确计时吗？

  不能，因为受事件循环的影响，计时器回调需要在任务队列中排队，而在它前面可能有其他任务正在排队，所以需要等待它前面的任务执行完再执行计时器回调，因此带来了偏差。而且，按照 W3C 标准，浏览器实现计时器时，如果嵌套层级超过 5 层，会带有 4 毫秒的最少时间，如果计时时间少于 4 毫秒时，会带来偏差。我们用的计时器函数例如 setTimeout 和 setInterval 其实最终调用的是操作系统的函数，而操作系统的计时函数本身就有少量偏差，并且不同操作系统，它的实现不一样，Windows 和 Mac 就不一样，谷歌浏览器实际上是针对 Windows 和 Mac 都做了不同的实现，调的是不同的函数，所以 JS 的计时器就携带了这些偏差。

- 总结★：

  单线程是异步产生的原因。事件循环是异步的实现方式。异步的实现可以解决主线程阻塞的问题，有了异步之后，线程永不阻塞。

## ES6 的常用语法有哪些

- 声明扩展，let 和 const

- 解构赋值

- 箭头函数

  - this 指向函数声明时所在的作用域，而不是函数体内的作用域。也就是会继承作用域链上一层的 this
  
  - 没有原型对象。也就是说，不能使用 new 关键字，不可以作为构造函数

  - 没有 arguments 对象，使用 rest 参数代替
  
  - 不能使用 yield 命令，因此箭头函数不能作为 Generator 函数

- 展开运算符

- 模块化

- Promise：[谈谈 Promise](#谈谈 Promise)

- async 和 await

- Proxy，Vue3 的响应式原理就是基于 Proxy 实现的

## 谈谈 Promise

- Promise 是异步编程的一种解决方案，解决了异步回调地狱问题

- Promise 的状态：

  - Promise 有三种状态，pending、fulfilled、rejected；

  - Promise 的状态只能从 pending 变为 fulfilled 或者 rejected，一旦改变状态就会凝固；

  - 可以通过 resolve 或 reject 方法改变 Promise 的状态
  
  - Promise 实例对象的 then 和 catch 方法可以处理异步结果；

  - 我们一般使用 then 处理成功结果，使用 catch 处理失败结果。当然 then 也可以处理失败结果；

  - then 和 catch 都会返回一个新的 Promise 对象，所以我们可以进行链式调用；

- 异常穿透：

  - 在链式调用中，如果 then 方法无法处理上一步的异常结果，会出现异常穿透，直到被 catch 捕获

- then 的返回值：

  - 通常情况下，then 都会返回一个成功状态，且值为 undefined 的 Promise；

  - 如果我们 return 一个普通值，then 会返回一个成功状态，且值为这个普通值的 Promise；

  - 如果我们 return 一个 Promise，then 会返回这个 Promise，状态和值都和它保持一致；

  - 只有当 then 中的代码出错了，或者我们抛出一个错误，then 才会返回一个失败状态的 Promise

- 中断 Promise 链：

  - 我们可以返回一个 pending 状态的 Promise 来中断 Promise 链

- Promise 的静态方法：

  - Promise.all：当数组中的所有 Promise 都成功时，Promise.all 才会成功。可以用来处理并发请求

  - Promise.allSettled：不管成功或失败都能得到结果。也可以用来处理并发请求

  - Promise.race：返回第一个改变状态的 Promise

## 谈谈深拷贝和浅拷贝

- 深拷贝和浅拷贝都是复制对象方式

- 它们的区别是：

  - 如果原始对象中有一些属性的值是引用类型，那么浅拷贝会复制它的地址；
  
  - 而深拷贝会复制它的值，并且指向一个新的地址。
  
  - 修改浅拷贝对象中的引用类型属性，会改变原始对象中对应的属性；
  
  - 而深拷贝就不会有这个问题，它拷贝的对象和原始对象互不影响

- 在代码中实现：

  - 浅拷贝可以使用展开运算符、数组的 slice 方法或 Object.assign 实现；

  - 深拷贝的话，我一般会使用 lodash 的 cloneDeep 方法





# TypeScript

## JS 和 TS 的区别



## interface 和 type 的区别



## 泛型





# Network

## 谈谈 HTTP 协议

- HTTP 是超文本传输协议，是浏览器与服务器通信的协议。

- 协议通信的内容称为报文。浏览器发送给服务器的报文称为请求报文，服务器返回给浏览器的报文称为响应报文。

- 请求报文：

  - 由请求首行、请求头、空行、请求体组成。

  - 请求首行包括请求方式、请求地址、协议版本。

  - 请求头有：

    Accept: 浏览器可以接收的数据类型

    User-Agent: 浏览器类型

    Content-Type: 请求体的数据类型

    Referer: 请求来源地址

    Cookie

  - 空行用于分隔请求头和请求体。

  - 请求体为浏览器携带的数据。Get 请求的请求体为空，Post 请求将数据携带在请求体中发送请求。

- 响应报文：

  - 由响应首行、响应头、空行、响应体组成。
  
  - 响应首行包括协议版本、响应状态码、状态码信息。
  
  - 响应头有：
  
    Access-Control-Allow-Origin: 允许跨域的地址
  
    Content-Type: 响应体的数据类型
  
    Cache-Control: 强制缓存控制
  
    Etag / Last-Modifined: 协商缓存控制
  
  - 空行用于分隔响应头和响应体。
  
  - 响应体为服务器返回的数据。
  
- 响应状态码：

  - 1xx: 请求正在处理

  - 2xx: 请求处理成功

    200: 请求成功

  - 3xx: 请求重定向，需要进一步处理

    301: 永久重定向

    302: 临时重定向

    304: 重定向到浏览器缓存

  - 4xx: 浏览器错误

    400: 请求出现语法错误

    401: 未认证、未授权

    403: 拒绝访问

    404: 找不到资源

    407: token 失效

  - 5xx: 服务器错误

    500: 服务器内部错误

    503: 服务器由于各种原因停止运行，无法处理请求


## Get 和 Post 的区别

- 根据规范：Get 用于查询数据；Post 用于添加数据。

- Get 将数据携带在 url 中发送请求；Post 将数据携带在请求体中发送请求。

- Get 携带数据大小有限，因为 url 有长度限制；Post 携带数据大小没有限制。

- Get 有缓存；Post 没有。

## 强制缓存和协商缓存

- 缓存是什么？

  强制缓存和协商缓存是浏览器的两种缓存策略。合理设置缓存可以减少不必要的网络传输，提高网页加载速度。

- 强制缓存：

  浏览器第一次发送请求时，服务器会将强制缓存字段 Cache-Control 或 Expires 携带响应头中，它们分别表示缓存的有效时间和绝对过期时间。告诉浏览器将该资源缓存在本地。浏览器再次请求该资源时，会先检查本地缓存是否有效。如果有效，浏览器直接从缓存中获取资源，而不会向服务器发送请求；如果无效，则进行协商缓存。

- 协商缓存：

  强制缓存失败后，浏览器会携带缓存标识向服务器发送请求，服务器根据缓存标识决定是否使用缓存。当浏览器第一次发送请求时，服务器将协商缓存字段 Etag 和 Last-Modified 携带在响应头返回，分别表示文件唯一标识和资源最后修改时间。当浏览器再次请求该资源时，会将 If-None-Match 字段和 If-Modified-Since 字段携带在请求头中，它们的值分别为上次获取资源时的 Etag 和 Last-Modified 值。服务器收到请求后，会将 If-None-Match 与文件唯一标识进行比较，如果相等，说明请求的是同一资源；再将 If-Modified-Since 与资源最后修改时间进行比较，如果时间一致，说明资源未修改，服务器响应 304 状态码，浏览器会直接从缓存获取资源；如果时间不一致，说明资源已修改，服务器会响应 200 状态码，并返回新的资源，并在响应头携带新的强制缓存和协商缓存字段。

- `Cache-Control: nocache;` 表示不进行强制缓存，强制向服务器发送请求，可能会命中协商缓存。

- `Cache-Control: no-store;` 禁止所有缓存。

## 在浏览器地址栏按下回车发生了什么

- 首先解析 URL 是否合法，如果不合法，会使用搜索引擎搜索地址栏的内容。

- 然后判断是否进行强制缓存。

- 再进行 DNS 解析，将域名解析为 IP 地址。

  判断浏览器是否有 DNS 缓存；

  判断电脑是否有 DNS 缓存；

  判断路由器是否有 DNS 缓存；

  判断网络运营商是否有 DNS 缓存，这个是需要花钱买 DNS 解析服务的；

  去根域名服务器递归查询 DNS；

  最终返回 IP 地址。

- 再进行 TCP 三次握手，确保通信双方的收发能力正常。

  浏览器向服务器发送一个 SYN 请求数据包，确认浏览器的发送能力正常；

  服务器向浏览器发送 SYN 请求数据包和 ACK 应答数据包，确认服务器的收发能力正常；

  浏览器向服务器发送一个 ACK 应答数据包，确认浏览器的接收能力正常。

- 浏览器将数据以请求报文的形式发送给服务器。

- 服务器将数据以响应报文的形式返回给浏览器。

- 浏览器根据响应数据，解析并渲染页面：

  浏览器遇到 html，使用 html 解析器将 html 解析成 DOM 树；

  浏览器遇到 css，使用 css 解析器将 css 解析成 CSSOM 树；

  DOM 树和 CSSOM 树结合生成 render 树；

  浏览器根据 render 树，进行布局和渲染；

  如果浏览器遇到 js 代码，渲染主线程会处于阻塞状态，页面暂停渲染，等待 JS 引擎线程解析 js 代码；

  如果 js 修改了 DOM 元素，则重新构建 DOM 树；

  如果 js 修改了样式，则重新构建 CSSOM 树；

  DOM 树和 CSSOM 树重新结合生成 render 树；

  浏览器根据 render 树，重新布局和渲染，这个过程也叫作重绘重排；

  重绘不一定导致重排，但是重排一定会导致重绘；

  一般，元素的样式、尺寸、位置、布局的改变，或者元素的增加与删除，会引起重绘重排；

  我们可以使用平移代替偏移量，通过防抖节流控制事件的触发频率等方式，来减少重绘重排。

- 最后进行 TCP 四次挥手，彻底断开浏览器和服务器的连接。

  浏览器向服务器发送 FIN 数据包请求断开连接；

  服务器向浏览器发送 ACK 应答数据包表示收到并同意断开连接请求；

  服务器等待数据处理完毕，向浏览器发送 FIN 数据包请求断开连接；

  浏览器向服务器发送 ACK 应答数据包表示收到并同意断开连接请求。

## 谈谈 WebSocket



## 谈谈 Ajax

- Ajax 可以发送异步请求，进行局部页面刷新。

- 它的流程是：

  - 创建 xhr 对象；
  
  - 调用 open 方法，设置请求方法和请求地址；
  
  - 调用 send 方法，发送请求；
  
  - 通过 onreadystatechange 或 onload 事件监听请求发送完成。

## 跨域是什么

- 违背了同源策略，就会产生跨域。

- 同源策略指的是，请求时浏览器和服务器的协议、域名、端口必须保持一致。

- 跨域时，无法发送 Ajax 请求，无法操作 DOM，无法读取 Cookie、localStorage 和 IndexDB

- 解决跨域的方式有：

  - jsonp：

    虽然同源策略限制了 Ajax 的跨域请求，但是没有限制 script 标签的跨域请求。

    我们可以通过 script 标签的 src 属性进行跨域请求，设置请求地址并携带一个回调函数名作为参数；

    服务器需要返回一个字符串形式的函数调用，并将返回的数据作为回调函数的实参；

    script 标签在接收到响应后，就会执行这段代码，回调函数就会被调用，响应数据也会作为参数传递过来。

  - cors：

    cors 主要由后端设置一些响应头实现跨域。

    `Access-Control-Allow-Origin` 允许跨域的地址；

    `Access-Control-Allow-Methods` 允许跨域的方式；

    `Access-Control-Allow-Credentials` 是否允许跨域携带 Cookie

  - 服务器代理：

    Vue CLI 通过 devServer 配置 proxy 代理服务器；Vite 通过 server 配置 proxy 代理服务器。





# Webpack

## 谈谈 Webpack

- Webpack 用于将 JS 文件打包在一起，打包后的文件用于在浏览器中使用。

- Webpack 由五个核心配置组成：

  - entry：指定从哪个文件开始打包；
  
  - output：指定打包后的文件放到哪个目录；
  
  - loader：解析除 js、json 类型外的文件；
  
  - plugin：提供一些扩展功能；
  
  - mode：选择生产环境或开发环境，或者不使用任何默认优化选项。
  
- 常用的 loader：

  - 处理样式资源的有：style-loader、css-loader、sass-loader、less-loader；
  
  - 处理图片文件的有：url-loader、file-loader；
  
  - 处理 es6 的有：babel-loader；
  
  - 处理 vue 的有：vue-loader。
  
- 常用的 plugin：

  - BannerPlugin: 添加版权；
  
  - HtmlWebpackPlugin: 打包 HTML；
  
  - EslintWebpackPlugin: JS 语法检查；
  
  - TerserWebpackPlugin: 压缩 JS 文件。

## 谈谈 Webpack 优化



## Webpack 和 Vite 的区别

- 底层语言不同：

  vite 是基于 esbuild 构建的，而 esbuild 是用 go 语言编写的，因为 go 语言相对于 js 的执行速度快很多，所以 vite 比 webpack 更快。

- 启动方式不同：

  webpack 启动时会打包编译所有资源，所以速度很慢，但是全部打包好之后，就只需要渲染，所以渲染速度很快；而 vite 启动时只会做简单处理，基本不打包编译，所以速度非常快，但是渲染时会动态分析依赖然后打包编译，所以渲染速度较慢。

- 生态系统差距：

  webpack 的生态比较丰富，而 vite 作为新一代的打包工具，生态还不完善。 





# Vue

## 生命周期函数

- 初始化阶段：

  - Vue 或组件被实例化（new Vue），进入初始化阶段。

  - 初始化事件和生命周期，
  
  - `beforeCreate` 触发，此时无法通过实例访问 data methods computed watch 等数据，
  
  - 初始化数据注入和数据劫持，同时初始化 data methods computed watch 等数据，
  
  - `created` 触发，此时可以通过实例访问数据。

- 编译阶段：

  - 判断 Vue 是否配置 el 选项，
  
  - 如果没有 el 选项，则等待使用 `$mount` 提供 el 选项；
  
  - 存在 el 选项，再判断是否配置 template 选项。
  
  - 如果有 template 选项，则编译模板得到 render 函数，返回虚拟 DOM；
  
  - 如果没有 template 选项，则将 el 挂载容器的 outerHTML 作为模板进行编译。

- 挂载阶段：

  - 挂载之前，`beforeMount` 触发，此时视图呈现的是未被解析的模板。DOM 操作无效，
  
  - 将 Vue 实例挂载到 el 容器上，根据 render 函数返回的虚拟 DOM 生成真实 DOM，并替换 el 容器，
  
  - 挂载之后，`mounted` 触发，视图呈现的是编译后的 DOM。一般在这个阶段进行开启定时器、发送网络请求、订阅消息、监听自定义事件等操作。

- 更新阶段：

  - 当响应式数据发生改变的时候，进入更新阶段。
  
  - `beforeUpdate` 触发，此时数据已更新，视图还未更新，
  
  - 得到新的虚拟 DOM 并使用 patch 函数比较新旧虚拟 DOM 并更新真实 DOM，
  
  - `updated` 触发，此时数据和视图都完成更新。

- 销毁阶段：

  - 当 `$destroy` 被调用，或条件渲染组件或路由时，进入销毁阶段。
  
  - 实例销毁之前，`beforeDestroy` 触发，一般在这个阶段进行关闭定时器、取消订阅、移除自定义事件等操作，
  
  - 实例销毁，取消所有 watcher 订阅，与所有子组件实例断开连接，移除所有事件监听器，
  
  - 实例销毁之后，`destroyed` 触发。

## 组件间通信

- props - 父子组件通信。

- 自定义事件 - 父子组件通信。父组件通过 `$on` 监听事件，子组件通过 `$emit` 触发事件，并可以携带参数。

- 事件总线 - 任意组件通信。在 Vue 的原型对象上挂载一个对象，将所有事件监听都绑定给这个对象。

- `v-model` - 用于表单元素的双向绑定。

- `v-bind.sync` - 用于非表单元素的双向绑定。

- 作用域插槽 - 父子组件通信。父组件给子组件传递模板，子组件向父组件传递数据。

- 依赖注入 - 祖孙组件通信。祖先组件通过 provide 提供属性和方法，后代组件通过 inject 注入。

- 透传 - 祖孙组件通信。`$attrs` 和 `$listeners`，将属性和方法传递给内部组件。

- 发布订阅 - 任意组件通信。类似于事件总线，由一个订阅中心对象监听数据的改变，然后通知依赖更新。

- Vuex 或 Pinia

## Pinia 相对于 Vuex 的优点

- mutations 被弃用，操作更简单；

- TS 支持更友好；

- state 管理的数据是响应式的，可以直接修改；

- 支持组合式 API。

## Vue2 和 Vue3 的区别

- 用法方面：

  - Vue3 新增了组合式 API，以及 setup 语法糖，并配合 TS 使用。

  - Vue3 使用 v-model 代替 Vue2 的 `v-bind.sync` 实现多个数据的双向绑定。

    另外，Vue2 的 v-model 绑定的是 `value` 属性和 `input` 事件；

    而 Vue3 的 v-model 绑定的是 `modelValue` 属性和 `update:modelValue` 事件。

  - v-if 和 v-for 一起使用时，Vue2 是 v-for 优先级更高，Vue3 是 v-if 优先级更高。

  - Vue3 移除了 .native 修饰符，而未被 defineEmits 接收的事件会被视为原生事件。

  - Vue3 移除了 `$listeners`，透传的方法合并到了 `$attrs` 中，并且 `$attrs` 还会传递动态样式。

  - 生命周期钩子重命名，beforeDestroy 改为 beforeUnmount，destroyed 改为 unmounted

  - 由于 Vue3 没有了组件实例，所以不能使用事件总线。此外，`$on`，`$off`，`$once` 也被移除了。

  - 移除了 filter，使用 computed 代替。

  - 移除了 `$children`，使用 ref 获取子组件实例。

  - Vue3 还推荐使用新的状态管理库 Pinia，和新的构建工具 Vite。

- 原理方面：

  - Vue3 放弃了对 IE 的支持，所以在 nextTick 的实现上做了一些优化。

  - Vue3 使用 Proxy 实现响应式，解决了 Vue2 使用 defineProperty 的缺陷。

## ref 和 reactive 的区别

- ref 可以定义任意数据类型，reactive 只能定义对象或数组。

- 如果使用 ref 定义对象或数组，实际上内部是通过 reactive 实现的。

- ref 定义的数据需要通过 value 访问，reactive 定义的数据可以直接访问。

## 谈谈 Vue Router

- Vue Router 是用来实现 Vue 的单页面应用。

- 单页面应用的特点是：

  - 整个应用只有一个完整的页面，所有更新都是页面的局部渲染。

  - 任何路由跳转都不会刷新整个页面，而是局部刷新，但是会有历史记录。

- 路由的两种模式：

  - hash 模式：
  
    路径后面会拼接一个 "#"，缺点就是很丑。
  
    兼容性较好，可以兼容到 IE6
  
    原理是通过 `window.location.hash` 实现跳转，通过 `window.onhashchange` 监听 hash 路径的改变。
  
  - history 模式：
  
    与 hash 模式相比，好处就是没有很丑的 "#"
  
    兼容性较差，只能兼容到 IE10
  
    页面刷新时，可能会出现 404 问题。
  
    原理是通过 `window.history.pushState` 实现跳转，通过 `window.onpopstate` 监听 url 的改变。
  
- 提供了两个组件：`<router-link>` 是声明式导航；`<router-view>` 是用来渲染活跃的路由。

- 提供了两个对象：router 提供了一些方法，用来实现编程式导航；route 提供了当前路由的一些信息。

- 动态路由传参：query 参数和 params 参数。

- 导航守卫：

  - 导航被触发。
  
  - 如果是离开一个组件，调用组件内离开时守卫 `beforeRouteLeave`。
  
  - 如果不是，则调用全局前置守卫 `beforeEach`。
  
  - 如果是动态路由切换，调用组件内更新时守卫 `beforeRouteUpdate`。再调用全局解析守卫 `beforeResolve`。
  
  - 如果不是动态路由切换，调用路由独享守卫 `beforeEnter`。
  
  - 然后解析异步路由组件。
  
  - 调用组件内进入时守卫 `beforeRouteEnter`。
  
  - 调用全局解析守卫 `beforeResolve`。
  
  - 导航被确认。
  
  - 最后调用全局后置钩子 `afterEach`。
  
  - 触发 DOM 更新。
  
- 路由懒加载：

  路由懒加载使用的是异步组件按需加载。

  使用 import 动态引入，webpack 会把动态引入的资源单独打包成一个文件，需要使用的时候再按需加载。

## nextTick 的原理

- nextTick 是什么？

  nextTick 是用于异步执行回调函数的方法，会在下一次 DOM 更新循环结束之后执行回调函数。主要用于修改响应式数据后，需要等待 DOM 更新完成后执行某些操作。例如打开对话框触发表单校验规则需要等待表单元素渲染完毕，使用 Swiper 组件开启图片轮播时需要等待图片资源请求完成。由于 Vue 在数据更新后不会立即进行 DOM 的重新渲染，而是在下一次事件循环中进行批量更新，因此直接在数据修改后获取 DOM 可能会得到旧的结果或者报错。此时可以使用 nextTick 确保在 DOM 更新后执行回调。

- 原理：

  在 Vue2 和 Vue3 中，nextTick 的原理有所不同。在 Vue2.6 和 2.7 的源码中，先准备一个 callbacks 数组，用来存放回调函数。再定义一个 flushCallbacks 方法，用来遍历 callbacks 数组并执行回调函数。再定义一个 timerFunc 函数，用来将执行回调的方法 flushCallbacks 添加到异步队列。考虑到兼容性问题，timerFunc 函数内部依次使用了四种添加异步任务的方法，分别是 Promise、MutationObserver、setImmediate、setTimeout，只选择次序最高的一种。Promise 通过 then 方法将回调函数添加到微队列；MutationObserver 会监听 DOM 元素的变化，并在变化时将回调函数添加到微队列；setImmediate 和 setTimeout 都是将回调函数添加到宏队列，但是 setImmediate 用于 nodejs 环境。

- 调用方式：

  nextTick 有两种调用方式：回调函数形式和 Promise 形式。nextTick 会根据调用方式执行回调函数或返回一个 Promise。执行 nextTick 时，会将一个匿名函数添加到 callbacks 数组中。再执行 timerFunc，将 flushCallbacks 方法添加到异步队列。在这个匿名函数中，判断 nextTick 是否传入了回调函数。如果有的话，说明是回调函数形式的调用，就会执行这个回调函数；如果没有传入回调函数，说明是 Promise 形式的调用，就会返回一个 Promise，并执行 resolve，这样就会将 then 方法中的代码添加到异步队列。等浏览器执行完同步代码，就会开始执行异步队列中的任务。执行到 flushCallbacks 函数时，会遍历 callbacks 数组中的回调函数并执行。

- Vue3 的区别：

  Vue3 不再考虑兼容性问题，所以只会使用 Promise 的 then 方法将回调函数添加到异步队列。

## 双向数据绑定原理

- 什么是双向绑定？

  - `v-model` 主要用于表单元素的双向绑定，用来收集表单数据。对于不同的元素，它绑定的属性和事件不同。

- 实现原理：

  - 如果是输入框或文本域，绑定 `value` 属性和 `input` 事件；

  - 如果是单选框或多选框，绑定 `checked` 属性和 `change` 事件；

  - 如果是下拉列表，绑定 `value` 属性和 `change` 事件；

  - 如果是组件，Vue2 绑定 `value` 属性和 `input` 事件，

    Vue3 绑定 `modelValue` 属性和 `update:modelValue` 事件。

## Vue2 响应式原理★

- 响应式原理指的是：

  当响应式数据更新时，根据 render 函数返回的虚拟 DOM 树生成真实 DOM 元素，插入到页面，更新视图。

- 响应式原理的具体过程分为数据代理、数据劫持、页面解析渲染和更新触发响应式：

  - 数据代理：

    遍历 _data 中的数据，使用 defineProperty 给实例扩展一个同名属性，并通过 get 和 set 监听这些属性。它们实际都是操作 _data 中的数据，所以我们访问实例上的数据就是访问 _data 中的数据。同时代理的还有 props、methods、watch。

  - 数据劫持：

    遍历 _data 中的数据，然后调用 defineReactive 函数为每一个属性都创建一个 dep 对象，通过 defineProperty 对这些属性进行重写，并添加 getter 和 setter，此时 dep 对象会以闭包的形式保存在 getter 和 setter 中。

    当我们访问响应式数据时，就会触发 get 方法，它会返回数据的值，同时调用 dep 的 depend 方法，让 dep 和 watcher 相互收集依赖：在 dep 的 depend 方法中，会调用 watcher 的 addDep 方法将 dep 收集到 newDeps 数组中；在 addDep 方法中，又会调用 dep 的 addSub 方法将 watcher 收集到 subs 数组中。这就是一个相互收集依赖的过程。

    当我们修改响应式数据时，就会触发 set 方法，它会更新数据，同时调用 dep 的 notify 方法，遍历 dep 的 subs 数组中的 watcher，并按照 id 从小到大排列，然后依次执行每个 watcher 的 update 方法。在 update 方法中，判断 watcher 的类型，如果是计算 watcher，则不执行回调，后续会在 evaluate 方法中计算求值；如果是渲染 watcher 或侦听 watcher，则把 watcher 对象添加到一个调度队列中，然后通过 nextTick 将一个调度任务的方法 flushSchedulerQueue 添加到异步队列，等待异步执行。当执行这个调度任务的方法时，会从调度队列中依次取出每一个 watcher 对象执行它的 run 方法更新视图并重新收集依赖。

## Vue3 响应式原理★



## keep-alive 原理





# Project

## 页面白屏的原因

- 打包后的 JS 和 CSS 文件太大，导致浏览器加载时间变长，加载完成之后才进行页面渲染，从而导致白屏

- 解决：

  - 如果白屏时间不是很长，可以添加一个 loading 效果

  - 使用路由懒加载，分开打包文件，访问路由时才加载对应的文件

  - CDN 资源优化，把 vue 等第三方资源，改为通过 CDN 链接获取，在 index.html 插入相应的链接

  - 静态资源缓存：资源长期不会修改，使用强制缓存；资源随时变化，使用协商缓存

  - 服务端渲染：在服务端将渲染逻辑处理好，将处理好的 html 返回给前端

