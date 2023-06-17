# React

## 01. 复习

1.  自定义属性

- html5 规定,元素的自定义属性要求使用`data-*`作为前缀
- 每一个 DOM 对象上 都有一个`dataset属性`,代表当前 DOM 的自定义属性组成的对象
- 我们只要对这个 dataset 对象增删改查,其实就是对元素的自定义属性进行增删改查
- 当使用`dataset对象`增删改查的时候不需要添加 `data-*` 前缀

2.  谈一谈响应状态码

- HTTP 响应状态代码（status）指示特定 HTTP 请求的状态。响应分为五类
- 1XX: 请求已经被服务端接收，继续处理中
- 2XX: 请求已经被服务器接收，并且处理完成
  200:请求成功
- 3XX: 需要后续操作才能完成请求
  301:永久重定向
  302:临时重定向
  304:读取缓存
- 4XX: 客户端错误（服务器无法执行）
  400:请求中出现语法错误
  403:拒绝访问
  404:找不到资源
- 5XX: 服务端错误
  500:服务器执行过程中出现了错误
  503:服务器因为各种原因停止运行，无法处理请求

3.  请求方式

- get: 查询数据
- post: 新增数据
- put: 修改数据
- delete: 删除数据
- options: 预检请求,在跨域的情况下,并且是复杂请求的情况下,浏览器首先会发送一个 options 请求,确认是否可以进行跨域

4.  get 和 post 的区别

- 作用分类:get 是用来查询数据的,post 是用来新增数据的
- 携带数据的位置:get 是在 url 中一起发送的,post 是在请求体中发送的
- 携带数据的大小:url 携带的数据有长度限制,post 携带的数据没有长度限制
- 是否缓存:get 是默认缓存的,post 没有缓存

5.  浏览器的缓存机制

- 缓存可以重用已获取的资源能够有效的提升网站与应用的性能
- 缓存分为两点：强制缓存和协商缓存

6.  强制缓存

- 强制浏览器使用当前缓存(没有发送请求的)
- 强制缓存的设置过程
  - 客户端请求的时候，需要携带 Cache-Control 请求头字段，值是 max-age=XXXX（秒数）
  - 服务端响应的时候，也可以携带 Cache-Contorl 的响应头字段，值是 max-age=XXXX（秒数）
  - 当下次再次请求的时候，判断自己是否符合强制缓存条件，如果符合，则直接读取缓存状态码还是 200，如果不符合，则会走协商缓存

7.  协商缓存

- 协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程。
- 协商缓存过程
  - 客户端第一次向服务端发起请求
  - 由服务器返回 Etag(文件的唯一标识) 和 Last-modified(文件的最后一次修改时间) 字段通过响应头方式返回
  - 客户端收到 Etag 和 Last-modified 之后收集起来
  - 客户端第二次向服务器发送请求携带缓存字段,把 Etag 改名为 If-None-Match ,把 Last-modified 改名为 If-Modified-Since,通过请求头的方式传递给服务端
  - 服务器先检查自己最新的 Etag 是否等于客户端传递过来的 If-None-Match 的值,如果相等,则再次判断自己最新的 Last-modified 和客户端传递过来的 If-Modified-Since 是否相等
  - 如果以上两个比较都相等,则直接响应 304 状态码,要求客户端读取缓存
  - 如果以上比较有一个不相等,则服务端返回最新的数据和最新的 Etag 和 Last-modified

8.  HTTP 协议

- 协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则
- HTTP 协议:超文本传输协议,是用于从万维网服务器传输超文本到本地浏览器的传送协议。是所有的 WWW 文件都必须遵守这个标准
- 客户端与服务端通信时传输的内容我们称之为报文
- HTTP 就是一个通信规则，这个规则规定了客户端发送给服务器的请求报文格式，也规定了服务器发送给客户端的响应报文格式

9.  HTTPS

- HTTP+加密+认证+完整性保护 = HTTPS。
- 加密:通信使用明文，内容可能被窃听,加密处理防止被窃听，http 没有加密机制，但是可以通过和 SSL 或者 TLS 组合使用进行加密 HTTP 的内容
- 认证:SSL 可以确认通信方，提供了一种叫做证书的手段，用于确认通信
- 完整性保护:SSL 可以提供完整性的保护,防止遭遇篡改

10. TCP 三次握手

- TCP 协议，在发送数据前，通信双方必须在彼此间建立一条连接,三次握手就是在建立连接时发送的 3 次数据包
- 三次握手的意义在于 确保通信双方都能确定对方的接收和发送能力都正常
- 过程
  1. 客户端向服务端发送一个 syn 字段(请求) 数据包,请求连接
  2. 服务端接收到客户端的 syn 数据包(服务端确认客户端发送能力正常),服务端向客户端发送 syn+ack(应答)数据包
  3. 客户端接收服务端的数据包(客户端确认服务端接收和发送都正常),客户端向服务端发送 ack 数据包
  4. 服务端接收 ack 数据包(确认客户端接收能力正常)

11. TCP 四次挥手

- TCP 的连接的拆除需要发送四个包，因此称为四次挥手
- TCP 是双向的，所以需要在两个方向分别关闭，每个方向的关闭又需要请求和确认，所以一共就 4 次。(在客户端请求断开时,服务端只能应答,并等到所有数据处理完毕,会再次发送断开请求)
- 过程
  - 客户端发送 Fin(释放连接)字段请求断开连接
  - 服务端发送 ack 字段应答断开请求
  - 服务端等数据全部处理完毕,发送 Fin 字段请求断开连接
  - 客户端发送 ack 字段应答断开请求

12. 什么是跨域

- 浏览器最安全的核心功能就是同源策略,所谓的同源策略就是请求的时候客户端和服务端双方的协议,端口号,域名保持一致
- 浏览器在请求的时候,违背了同源策略(客户端和服务端双方的协议,端口号,域名有一个不一致)就是跨域请求

13. 解决跨域的方式 1-JSONP

- 虽然同源策略限制了 ajax 的跨域请求,但是并没有限制 HTML 的跨域资源请求(img,link,script)
- 我们可以通过 script 标签的 src 属性进行跨域请求,并且携带一个回调函数的名字作为查询字符串数据
- 服务器返回一个 回调函数调用的字符串,并且把数据也封装在了函数调用字符串的内部作为实参
- 因为是 script 标签发送的请求,所以 script 标签接收到响应以后,就会执行这段代码,则预先封装的回调函数就会被调用,并且回调函数的形参就是后端传递过来的数据

14. 解决跨域的方式 2-CORS

- CORS:跨域资源共享
- CORS 跨域主要是由服务端和客户端(浏览器会主动参与,不需要开发人员参与)共同负责的
- 当浏览器发送 ajax 请求的时候,如果发现是跨域请求,浏览器会主动的在请求头中携带 Origin 字段(Origin 字段主要是为了说明当前请求的地址)
- 服务端接收到请求后,拿到请求头中 Origin 的值,判断当前的地址在不在白名单中
  - 如果在白名单,那就可以响应请求,并且携带一个`Access-Control-Allow-Origin`的字段作为响应头,值是当前的 Origin
  - 如果不在白名单,响应头中就不会携带`Access-Control-Allow-Origin`字段
- 客户端会根据响应头中的`Access-Control-Allow-Origin`字段是否存在,考虑是否放行
- 如果在跨域请求的时候需要携带 cookie 一起发送,则需要前端人员配合(了解)

15. 解决跨域的方式 3-代理服务器

- 开发环境下-正向代理
  - 浏览器向服务器发送请求,浏览器有同源策略,会有跨域问题,但是服务器请求服务器是没有同源策略规定的
  - 无论是哪一个脚手架中,都是使用 devServer 启动的项目
  - devServer 一旦开启 proxy 代理,就是使用"node-http-proxy"这个包让 devServer 拥有的代理功能
  - 我们就可以对 devServer 进行代理的配置,代理我们客户端向服务端发请求,属于正向代理
- 生产环境下-反向代理
  - 我们一般会在我们的项目部署的服务器上搭建 nginx 代理服务器解决跨域问题
  - 这个 nginx 服务器代理的是前端项目部署的服务器向后台接口服务器发请求,所以属于反向代理

16. 代理服务器

- 代理服务器(proxy Server)的功能是代理网络用户去获取网络信息,是网络信息的中转站,也是个人网络和 Internet 服务器之间的代理机构
- 正向代理(代理的是客户端,对客户端负责)
  - 突破自身 ip 访问限制
  - 加速器
  - 缓存数据
  - 隐藏访问者(让服务器不知道真正访问者的身份)
- 反向代理(代理的是服务端,对服务端负责)
  - 负载均衡
  - 隐藏服务器的真实 ip

17. Promise

- 什么是 Promise:

  - 回调函数嵌套回调函数被称作回调地狱，代码层层嵌套,程序就会变得难以维护。代码臃肿，可读性差，耦合度过高。
  - Promise 的标准化，一定程度上解决了 JavaScript 的流程操作问题。Promise 对象是一个异步编程的解决方案，可以将异步操作以同步的流程表达出来, 避免了层层嵌套的回调函数(俗称'回调地狱')

- Promise 的使用:

  - Promise 是一个构造函数,使用的时候需要实例化,并且接受一个回调函数作为参数
  - 把异步代码放在 promise 的回调函数中处理(Promise 自身的回调函数是同步的,Promise 只是用来处理异步的)
  - Promise 的回调函数接受两个参数 resolve,reject . 这两个参数都是函数,将来调用 resolve 函数就会把 promise 实例的状态改为成功,调用 reject 函数就会把 promise 实例状态改为失败
  - promise 实例的状态只能由 pending 改为其他状态
  - resolve 和 reject 函数只能改变 promise 的状态,并不能中断当前函数的继续运行
  - resolve 和 reject 都接受一个参数,这个参数就是成功或失败的信息,将来会放在 promise 实例对象的某个属性上

- promise 实例
  promise 实例有两个属性

  - promiseState:代表的是当前 promise 实例的状态

    - pending:正在进行中(默认值,只有 Promise 构造函数的回调函数内部调用了 resolve 或 reject 才能改变)
    - fulfilled:成功状态
    - rejected:失败状态

  - promiseResult:promise 实例的值(一般是 Promise 成功或者失败后需要携带的值)
    - 默认是 undefined
    - 如果 resolve 或 reject 函数中传递了参数,则这个值就是他俩函数中的实参

- Promise 的 then 方法

  - then 方法是同步绑定的,但是 then 中的回调函数是异步的,需要等到调用 then 的 promise 实例状态发生改变
  - then 方法接收两个回调函数,分别处理成功 promise 实例和失败 promise 实例的逻辑
  - then 接收的两个回调函数接受两个参数,分别是成功 promise 的值和失败 promise 的值

- then 的返回值:

  1. then 默认返回一个成功状态的 promise 实例,值是回调函数的返回值
  2. 当 then 中的回调函数返回一个 promise 实例的时候,则 then 方法的返回值,和这个 promise 实例保持一致
  3. 当 then 中有报错但是没有被处理的时候,则 then 直接返回失败的 promsie 实例,值为错误信息
  4. 当 then 中返回失败的 promise 的时候,then 直接也是返回失败的 promise

- catch 方法:

  - 当调用 catch 方法的 promise 实例变为失败状态,则会执行 catch 中的回调函数
  - catch 的作用和 then 方法的第二个回调函数的作用一致
  - catch 方法的返回值和 then 方法的返回值规则保持一致

- finally 方法:

  - 无论调用 finally 方法的 promise 实例是成功还是失败,都能进入 finally 的回调函数中执行
  - finally 不接受 promise 实例的值
  - finally 的返回值
    - 默认穿透(finally 的返回值和调用 finally 的 promise 实例保持一致)
    - 当 finally 的回调函数返回一个失败的 promise 实例时,finally 的返回值和这个失败的 promise 实例保持一致
    - 当 finally 的回调函数中报错,则 finally 返回失败的 promise 实例,值为错误信息

- 值的穿透
  - 当 then 和 catch 和 finally 中如果没有处理当前 promise 实例状态的回调函数,则直接穿透

18. Promise 静态方法

- Promise.all 方法:

  - 接受一个数组(原则上是 iterable 类型)作为参数
  - all 方法默认返回 pending 状态的 promise 实例
  - 当所有的 promise 实例全部完成,返回 fulfilled 状态的实例,值为所有成功的值组成的数组
  - 当其中有一个 promise 实例执行失败,则 all 方法返回失败的 promise 实例,值是这个错误值

- Promise.allSettled 方法:

  - 接受一个数组(原则上是 iterable 类型)作为参数
  - allSettled 方法只是接受所有 promise 的结果,把每一个 promise 结果的值和状态组成一个对象,把对象按照书写顺序依次放入到数组中作为 allSettled 返回 promise 实例的值
  - allSettled 永远返回成功的状态

- Promise.race 方法:

  - 监听的 promise 实例中改变状态最快的那一个,无论是成功还是失败
  - race 的返回值和最快的这个实例保持一致

- Promise.any 方法:

  - 监听的 promise 实例中最快成功的那个
  - any 返回的 promise 实例和最快成功的保持一致
  - 如果所有的 promise 全部失败,则返回 rejected 状态的 promise 实例,值为新的错误:AggregateError: All promises were rejected

- Promise.resolve:

  - 默认返回一个成功的 promise 实例,值是 resolve 接受的实参,快速把一个值包装成 promise 实例
  - 如果 resolve 的参数是一个 promise 实例,则 resolve 的返回值和这个实例保持一致

- Promise.reject:

  - 默认返回一个失败的 promise 实例,值是 reject 接受的实参(无论这个实参是不是 promise 实例),快速把一个值包装成 promise 实例

## 02. React 基础

1.  什么是 React

- 用于动态构建用户界面的 JavaScript 库(只关注于视图)
- 采用组件化模式、声明式编码，提高开发效率及组件复用率
- 使用虚拟 DOM+优秀的 Diffing 算法，尽量减少与真实 DOM 的交互

2.  react 的引入

- 在非脚手架的使用中,我们可以使用`react.js`和`react-dom.js`两个文件
  - `react.js`:React 的核心包,提供 React 的核心语法,提供了一个`React`对象
  - `react-dom.js`:React 操作 DOM 的包,提供 DOM 相关的语法,提供了`ReactDOM`对象
- 这两个文件分别分为了`development`和`production`两种模式
  - `development`是开发版本,提供了详细的报错信息,主要是在开发时使用
  - `production`是生产版本,没有提供详细的报错系统,主要在开发完成后上线使用

3.  什么是虚拟 DOM

- 本质就是 Object 类型的对象（一般对象）。
- 虚拟 DOM 比较“轻”，真实 DOM 比较“重”，虚拟 DOM 是 react 内部在用的，无需真实 DOM 身上那么多的属性
- 当数据更新以后,React 会对比新旧的虚拟 DOM,得到差异,最后把差异转为真实 DOM 更新出来
- 虚拟 DOM 早晚会被 react 转为真实 DOM，呈现在页面上。

```js
//自定义一个虚拟DOM案例:
const vDOM1 = {
  type: "div",
  props: {
    class: "outer"
  },
  children: [
    {
      type: "h2",
      props: {},
      children: ["React"]
    },
    {
      type: "p",
      props: {},
      children: ["hello"]
    }
  ]
}
```

4.  createRoot:

- 属于 ReactDOM 提供的一个方法
- 主要用来创建一个根容器对象,让 React 的组件或者虚拟 DOM 能在这个根容器中展示
- 接受一个参数是 DOM 元素,把这个 DOM 元素作为 React 控制的根容器

5.  render 方法:

- 根容器对象有一个 render 方法,主要用来把 render 方法接受的组件或者虚拟 DOM 渲染成真实 DOM,并放在根容器中
- 当我们首次调用 render 方法的时候,所有的虚拟 DOM 都会编译成真实 DOM,放在容器中
- 当我们再次调用 render 方法的时候,会使用 diffing 算法比较新的和旧的虚拟 DOM,并且只把更新的 DOM 在容器中进行更新

7.  创建虚拟 DOM 的方式 1-JS 方式

- React 提供了 createElement 方法,用来创建虚拟 DOM
- createElement 方法接受三个以上的参数
  - 参数 1:标签名
  - 参数 2:属性组成的对象
  - 参数 3....:当前元素的子节点

8.  创建虚拟 DOM 方式 2-JSX

- react 定义的一种类似于 XML 的 JS 扩展语法 JS + XML，并拥有 JavaScript 的全部功能，本质是 React.createElement(component,props, ...children)方法的语法糖
- 作用: 用来简化创建虚拟 DOM
- 使用:
  - 浏览器不能直接解析 JSX 代码, 需要 babel 转译为纯 JS 的代码才能运行
  - 只要用了 JSX，就要在 script 标签上加上 type="text/babel", 声明需要 babel 来处理

9. JSX 注意事项:
1. 定义虚拟 DOM 时，不要写引号
1. JSX 中要在标签内或者标签属性中混入 js 要插值语法`{}`，即：{xxxxx}

   - 插值中要么书写一个值,要么书写一个表达式返回一个值
   - 插值中书写的值类型要求：
     - string\number 直接转字符串
     - boolean\null\undefined\Symbol 转空字符串
     - array 直接去掉中括号和逗号转为字符串
     - object\Date\RegExp 不能作为插值的值

1. 指定样式的类名不要用 class，必须用 className,还有 for 属性要改为 htmlFor
1. 行内样式，要用 style={{}}的形式去编写，且像 font-size 这种属性，要转为 fontSize
1. 只能有一个根标签
1. 标签必须闭合
1. 标签首字母:

   - 若标签首字母小写：则将该标签转为 html 中同名元素，若 html 中无该元素，则报警告。
   - 若标签首字母大写：则 react 去渲染对应的组件，若没有定义过该组件，则报错该组件找不到。

1. 列表渲染

- 列表渲染:一般指的都是一个数组数据,需要依次的展示在虚拟 DOM 中
- 一般在插值语法中,使用数组的 map 方法对数组进行遍历,对数组的每个值进行 html 的包裹并返回
- 列表渲染需要给列表的每一个模板添加一个 key 属性,值是唯一的,一般选用数据的 id

11. 条件渲染

- 条件渲染:根据当前数据,决定展示什么样的模板???
- 在插值语法中使用三元来实现 模板的选择

## 03. diff 算法

1.  什么是 diff 算法

- 当数据发生变化时，react 会根据【新数据】生成【新的虚拟 DOM】, 随后 React 进行【新虚拟 DOM】与【旧虚拟 DOM】的 diff 比较
- React 通过比较这两棵虚拟 DOM 树的差异，决定是否需要修改 DOM 结构，以及如何修改。这种算法称作 Diff 算法。
- diff 算法是 React 提升渲染性能的一种优化算法,计算出虚拟 DOM 中真正变化的部分,并只针对该部分进行原生 DOM 操作

2.  React-diff 算法策略 1:

- 两棵树只对同一层级节点进行比较，只要该节点不存在了，那么该节点与其所有子节点会被完全删除,不在进行进一步比较。
- React diff 只考虑同层次的节点位置变换,若为跨层级的位置变化，则是创建节点和删除节点的操作。即在新位置上重新创建相同的节点，而删除原位置的节点。
- React 官方建议不要进行 DOM 节点的跨层级操作

3.  React-diff 算法策略 2:

- 同一类型的组件(元素)，按照原策略(tree diff)深层次比较 virtual DOM tree
- 不同类型的组件(元素)，那么 diff 算法会把要旧的组件(元素)带上内部所有的节点全部删除,把新的组件(元素)进行添加

4.  React-diff 算法策略 3:

- 对于处于同一层级的节点，React diff 提供了四种节点操作: 插入,移动,删除,更新
- 插入：新的元素不在原来的虚拟 DOM 中，而是全新的节点，则对 DOM 进行插入操作。
- 删除：元素已经在 DOM 中，但虚拟 DOM 更新后已经没有了，此时原来 DOM 节点就需要删除。
- 移动：元素已经存在于 DOM 中，并且集合更新时，元素并没有发生更新，只是位置发生改变
- 更新: 元素只是属性发生了改变,则只针对属性做了更新操作

5.  key 的机制

- 同层级中相同的节点，但由于位置顺序发生变化，导致需要进行繁杂低效的删除、创建操作，其实只要对这些节点进行位置移动即可。那么就需要引入 key 机制
- 当某个节点添加了同级节点中唯一的 key 属性，当它在当前层级的位置发生了变化后,react diff 算法通过新旧节点比较后，如果发现了 key 值相同的新旧节点，就会执行移动操作（然后依然按原策略深入节点内部的差异对比更新），而不会执行原策略的删除旧节点，创建新节点的操作。
- React 官方建议不要用遍历的 index 作为这种场景下的节点的 key 属性值,因为每一个元素对应的 index 的值会随着结构的改变而发生变化
- key 的注意事项
  1. key 必须在当前列表唯一
  2. key 必须具有稳定性

## 04. 组件

1.  不定义组件,直接使用封装函数的方式

- 识别性不高,一般组件的调用是使用大写的标签调用`<Title/>`,而函数需要使用`fn()`的方式
- 不具备组件拥有的功能(生命周期,状态等等功能)
- 开发者工具也不会识别

2.  函数式组件的定义

- 函数定义的组件被称作为函数式组件,组件名首字母要求大写,函数式组件内部需要返回一个虚拟 DOM
- 直接以标签的形式使用组件,单标签或者双标签都可以
- 当函数式组件被使用的时候发生了什么?
  1. 根据当前的标签名,找到对应的组件
  2. 调用当前定义组件的函数
  3. 拿到返回值-虚拟 DOM

```js
function Header() {
  return <h1>一级标题</h1>
}

;<Header />
```

3.  类式组件的定义:

- React 提供了一个 React.Component 类,这个类中提供了非常多了组件的功能
- 定义类式组件,使用 class 定义一个类,并继承了 React.Component 类
- 类式组件一定要定义 render 方法,render 方法会在类式组件被使用的时候执行,并返回当前组件的 虚拟 DOM
- 类式组件的执行过程
  1. 当类式组件被使用的时候,首先找到对应的 class 定义的类,然后实例化它,得到当前类式组件的实例化对象(组件实例化对象,也称组件实例)
  2. 调用当前实例化组件对象(组件实例)的 render 方法,得到虚拟 DOM
- render 方法中的 this 指向当前的组件实例

```js
class App extends React.Component {
  render() {
    console.log(this)
    return <div>App组件</div>
  }
}
```

4.  组件的状态

- 在组件中定义的响应式数据(数据改变,视图立马更新)被称作为状态
- 可以直接在类式组件内部给组件扩展一个 state 属性,值是一个对象,对象内部就是状态存放的位置
- 通过更新组件的 state 来更新对应的页面显示(重新渲染组件)，一句话就是说，用户的界面会随着状态的改变而改变。
- 当状态发生改变的时候,会调用当前所在组件的组件实例上的 render 方法,得到新的虚拟 DOM,然后让浏览器重新渲染
- state 只能在本组件中去初始化，并且 state 只能被本组件去修改和访问，不能被外部访问和修改，所以也可以说，state 是组件私有的。

```js
class App extends React.Component {
  render() {
    return <div></div>
  }
  //状态
  state = {
    appTitle: "今日天气"
  }
}
```

5.  修改组件状态:

- 修改组件状态不能直接拿到状态修改,这样没有响应式
- React 的组件实例提供了一个 setState()方法,专门用来响应式的修改状态
- setState 方法接受一个对象作为参数,对象内部就是重新设置的键值对,然后最后把 setState 中的对象和 state 对象进行合并
- 一般我们会把所有需要的数据都提前设置到了 state 中,尽量不要在 setState 中新增数据,而是修改数据
- setState 修改状态是异步的!!!!等当前同步代码执行完成,然后才会统一的去修改状态,重新渲染(所以我们不能直接在修改完成后立即去 state 中获取新的数据)
- 如果同时(同步范围下)执行多次 setState,则只重新渲染一次(因为重新渲染会有消耗,同时修改两次,react 可以合并成一次修改,一次重新渲染,提高性能)

6.  React 类式组件绑定事件:

- 直接给某个元素书写 onXxxx 的事件属性名,值是一个函数
- 当元素触发这个事件的时候,让事件函数自己调用,所以 React 事件函数的 this 指向的可能是 undefiend
- 事件函数的两个写法:
  1. 直接在事件属性名后边的插值中书写一个箭头函数(因为事件函数是默认调用,this 指向 undefined,所以写成箭头函数之后,就没有自己的 this,而是直接使用 render 函数的 this,可以拿到组件实例)
  2. 把事件函数放在组件实例上,事件函数仍然是一个箭头函数(也是为了确保 this 指向),然后在事件属性后的插值语法中通过 this.xxx 拿到事件函数即可

7.  组件的 props:

- props 主要用来做父子组件之间的通信
- 在父组件中给子组件标签中通过 属性的方式 向子组件内部传值
- 子组件在组件内部通过 组件实例 上 props 属性来访问父组件传递的值
- props 是只读属性,不允许在子组件中修改 props 的值!!!(react 是单向数据流)

8.  props 的批量传递:

- 我们可能会把一个对象的属性一个个的展开并传递到组件的内部,如果属性过多则可能会有些麻烦
- 我们有两种批量传递的方式
  1. 可以直接把这个对象整体通过 props 传递进去,子组件自行展开接收(`<MySelf item={item} />`)
  2. 可以使用 扩展运算符+插值 的语法把对象的属性一个个展开传递进去(`<MySelf {...item} />`)

9.  props 做子传父:

- 因为 props 是单向数据流,子组件不能直接修改父组件数据
- 并且 state 数据也是组件私有的,只能自己修改
- 父组件可以封装一个方法,专门修改自己的数据,然后把方法通过 props 的方式传递给子组件
- 子组件可以在需要的时候,调用父组件传递过来的方法,修改父组件的数据

10. 单向数据流:

- 什么是数据流?数据在组件之间的传递
- 什么是单向数据流?数据在某个组件被改动以后,只会影响一个方向的上的其他组件(react 的方向是从上到下)
- 单向数据流的定义:规范数据的流向,数据由外层组件向内层组件进行传递和更新

11. 收集表单数据-非受控表单

- 主要是通过给元素设置 ref,然后获取到真实 DOM 收集数据

12. 收集表单数据-受控表单

- 首先在状态中初始化所有的表单的数据
- 把数据通过 value 或者 checked 等属性强制绑定给表单元素
- 给表单元素绑定 onChange 事件,在事件函数中获取当前表单的最新内容或者最新状态(e.target),然后通过 setState 的方式在修改对应的状态
- 我们在最后收集表单数据的时候,直接拿状态中的数据即可

13. 高阶函数:

- 高阶函数：如果有一个函数 A，A 符合下面 2 个规则中的任何一个，那么 A 函数就是高阶函数
- 若 A 函数接收的参数是一个函数，那么 A 就可以称之为高阶函数；
- 若 A 函数调用的返回值依然是一个函数，那么 A 就可以称之为高阶函数
- 常见的高阶函数：数组相关的方法、Promise、setTimeout、等等

14. 函数的柯里化

- 通过函数调用继续返回函数的方式，实现多次接收参数，最后统一处理的编码形式

## 05. 生命周期

1. 什么是生命周期

- 组件从创建到死亡它会经历一些特定的阶段。
- React 组件中包含一系列钩子函数(生命周期回调函数), 会在特定的时刻调用。
- 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。

2. 生命周期初始化阶段(挂载阶段)

- 【生命周期】constructor():类中的构造器函数,最早执行(很少使用)
- 【生命周期】static getDerivedStateFromProps:(了解):主要是为了根据 props 得到一个派生的 state,函数返回的对象,最终会通过 setState 的方式合并到当前组件的 state 中
- 【!!生命周期】render():渲染,把模板渲染成虚拟 DOM(必须)
- 把虚拟 DOM 渲染成真实 DOM(不是生命周期函数)
- 【!!生命周期】componentDidMount():组件挂载完成,一般在这个位置进行初始化的操作(常用)

3. 生命周期更新阶段

- 当前组件得到一个新的 props,当前组件内的 state 通过 setState 修改了，或者当前组件被调用 forceUpdate 强制更新了，组件都会进入到更新阶段
- 父组件一旦更新，子组件必定跟着一起更新
- 【生命周期】static getDerivedStateFromProps:(了解)
- 【!!生命周期】shouldComponentUpdate():是一个阀门，控制进入更新状态的组件是否继续更新，一般设置给子组件(当父组件更新的状态和子组件没有关系的时候,可以控制子组件不更新),主要是为了性能优化使用,(forceUpdate 强制更新不会有这个控制)
- 【!!生命周期】render():重新渲染
- 【生命周期】getSnapshotBeforeUpdate():在新的虚拟 DOM 更新出来之后,真实 DOM 渲染之前执行,一般用来给旧的真实 DOM 拍一个快照(获取一些旧的样式),以供新的 DOM 使用(不常用)
- 更新真实 DOM
- 【!!生命周期】componentDidUpdate():当组件更新阶段完毕,会执行

4. 生命周期卸载阶段

- 当整个根容器被直接卸载(root.unmount 方法),组件被条件渲染的卸载,或者组件被路由切换的时候卸载,就会进入卸载阶段
- 【!!生命周期】componentWillUnmount():组件被卸载之前调用,一般这个方法中不会再去控制数据了,一般做的都是收尾工作(关闭定时器,取消订阅....)

## 06. react 的 Hooks

1.  纯函数：

- 一个函数,相同的输入永远得到相同的输出,我们把这个函数称作为纯函数,否则称作为不纯函数
- 纯函数优点
  1. 可预知的结果
  2. 可缓存
  3. 没有副作用(DOM 操作,网络请求,IO 操作)

2.  什么是 Hooks:

- React 认为组件只是一个容器,函数式组件在书写和性能上都会比类式组件要好很多,所以 react 希望组件都是函数式组件
- React 要求函数式组件最好写成纯函数,写成纯函数之后,就无法在组件内部执行很多操作,函数式组件就有局限性
- 所以在 16.8 版本之前,函数式组件主要就是为了提供静态 DOM 节点,没有别的功能
- 16.8 版本之后,React 推出了 Hooks 写法,它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
- react 的 Hooks 其实就是一些钩子函数,如果在函数式组件内部需要用到外部的功能或者需要用到副作用,就用钩子把外部的代码勾进来执行
- 所有的钩子函数统一命名 useXxxx(useState,useEffect,useRef,useContext)

3.  useState

- useState 可以让函数式组件像类式组件一样拥有 state 状态,并且状态更新后,函数式组件也会重新渲染
- 语法`const [xxx,setXXX] = useState(initData)`
  1. 解构出来的第一个值,是当前 state 的数据源,交给 UI 使用
  2. 解构出来的第二个值,是一个改变当前 state 的函数,并且函数一旦被调用就会驱动函数式组件重新渲染
  3. useState 的参数 initData,可以直接是一个初始值,也可以是一个函数(return 的值就是当前 state 的值)
- setXXX 的使用两种方式
  1. 直接把新值传递进去作为参数
  2. 参数是一个函数,函数接受当前 setXxx 对应的数据为参数,函数的返回值就是新设置的值
- 注意事项
  1. 当使用 setXxxx 修改完数据之后,并不能直接获取到新数据,而是在下一次渲染完成后才能拿到新数据(setXxxx 是异步的,会在异步队列中最后执行,然后重新渲染函数式组件)
  2. 每次重新渲染的时候,函数式组件会保存当前 state 的值,不会每次都重新初始化 state
  3. 如果连着多次执行 setXxxx,最后函数还是只重新渲染一次
  4. 如果执行 setXxxx 的时候,值并没有发生改变,则不会重新渲染

4.  useRef:

- useRef 返回一个 ref 对象
- 我们可以把这个对象设置给 某个被获取的 DOM 的 ref 属性上
- 当前被设置 ref 属性的 DOM 元素，就被保存在这个 ref 对象的 current 属性上
- 每次要获取一个元素，都要创建对应的 ref 对象

5.  useEffect:

- React 的 hooks 提供了 useEffect 来执行函数式组件内部的副作用代码
- 主要工作类似于类式组件中的生命周期函数
- 语法 `useEffect(()=>{return destoryFn},depArray)`
  - depArray:是一个数组,包含了当前 useEffect 的依赖项,可以存在一个或多个依赖项
    1. 如果没有书写第二个参数依赖项,只要组件发生更新 就会再次调用
    1. 如果依赖项为空,则当前的 useEffect 只会在初始化的时候执行
    1. 如果依赖项中有 state 数据,则除了初始化执行以外,只有依赖项的数据更新以后,才会执行当前的 useEffect
  - destoryFn:useEffect 回调函数可以返回一个函数
    1. destoryFn 是在下一次执行 useEffect 的回调函数时调用
    2. destoryFn 的目的是为了清除上一次 callback 产生的副作用
- useEffect 执行时机:
  - 对于 useEffect 的执行,React 是把它的回调函数放在了异步队列
  - 当主线程执行完毕,就会立马执行 useEffect 的回调函数
  - useEffect 的执行时机 1:当组件已经挂载完成以后(类似于 componentDidMount)才会执行(组件的初始化操作或者副作用,都要在这里完成)
    - 获取数据(ajax)
    - 事件监听或订阅
    - 操作或者改变 DOM
  - useEffect 的执行时机 2:当组件更新以后就会触发(类似于 componentDidUpdate)

6.  useContext:

- 共享状态钩子,主要给后代组件共享一些数据
- 共享的过程
  1. 首先在提供共享数据的组件中使用 React.createContext({}) 方法 创建一个上下文对象
  2. 上下文对象提供了一个组件<上下文对象.Provider>,这个组件的 value 属性的数据,会给所有组件内部的后代组件共享
  3. 在接收共享数据的组件中使用 useContext(xxxContext)钩子函数用来引入 某个祖辈组件的 xxxContext 对象共享的数据
- 如果共享的是一个函数,则可以让后代组件调用这个函数,修改共享组件共享的数据

7.  函数式组件接受 props 的方式:

- 直接通过函数的参数接受父组件传递的 props 对象

## 07.脚手架

1.  create-react-app 脚手架的安装

- 使用 `npx create-react-app 项目名称`:安装 react 脚手架
- 使用 `npm run start` 或者 `npm start` 启动项目

2.  vite 脚手架的创建

- 使用`npm create vite@latest`下载
  - 输入项目名称
  - 选择 react
  - 选择 JavaScript
- 进入项目 `npm i` 下载所有依赖包
- 进入项目 `npm run dev`启动项目

3.  create-react-app 依赖包

- `@testing-library/jest-dom`:使用单元测试
- `@testing-library/react`:针对 react 语法提供的测试
- `@testing-library/user-event`:单元测中模拟用户行为场景的包
- `react`:react 核心包
- `react-dom`:react-dom 核心包
- `react-scripts`:代表当前脚手架的配置,启动的时候是通过 react-scripts 启动的
- `web-vitals`:项目性能测试的包

4.  create-react-app 的启动命令

- `start`:开发环境下打包文件,并在 webpack 中配置的 devServer 中启动项目供我们调试
- `build`:生产环境打包,用于将来部署上线
- `test`:执行对项目的测试
- `eject`:把当前脚手架的配置信息展示出来,不可逆的操作

5.  cli 脚手架目录介绍

- `public`:公共目录,内部不会被打包,而是直接复制给了打包好的目录

  - `favicon.ico`:浏览器标签页的小图标
  - `index.html`:项目的 html 文件
  - `logo192.png`:桌面图标 logo 192 格式
  - `logo512.png`:桌面图标 logo 512 格式
  - `manifest.json`:当前网页的缓存配置文件
  - `robots.txt`:当前项目的爬虫协议

- `src`:项目真正编码的目录,程序员的工作目录
  - `index.js`:项目的入口文件
  - `index.css`:全局样式
  - `App.js`:根组件
  - `App.test.js`:针对于的 App 组件的测试文件
  - `reportWebVitals.js`:性能测试的文件配置
    - CLS:页面的稳定性
    - FID:首次输入的延迟时间
    - FCP:首次绘制的时间
    - TTFB:从网页发送请求到第一次接受响应的时间
  - `setupTests.js`:整个单元测试的配置文件
- `.gitignore`:git 忽略文件
- `package-lock.json`:依赖包的缓存文件
- `package.json`:包管理文件
- `ReadME.md`:项目简介

6.  cli 脚手架的入口文件

```js
//引入react包 提供react对象
import React from "react"
//引入react-dom包 提供reactDOM对象
import ReactDOM from "react-dom/client"
//引入全局的css文件
import "./index.css"
//引入根App组件
import App from "./App"
//引入性能测试的配置
import reportWebVitals from "./reportWebVitals"

//创建一个根容器
const root = ReactDOM.createRoot(document.getElementById("root"))
//在根容器中渲染组件
/* 
    React.StrictMode:
      * react提供的内置组件,主要用来开启严格模式
      * 专门检查组件内部可能出现的问题,这个组件不会渲染任何UI
      * 检查的项目如下
        - 是否使用旧的生命周期函数
        - 使用旧的ref语法
        - .....

  */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//执行性能测试函数
reportWebVitals()
```

## 08.脚手架的一些配置

1.  css module

- 一般某个组件需要样式的话，会在当前组件的文件夹内创建一个 css 文件，并在当前组件内部通过 import 引入即可
- 但是组件将来都会被打包在一起，然后样式也会被打包在一起，统一引入，此时如果有同名的样式则可能会共享，可能共享就会出现样式问题
- 解决方案 css Module:
  1. 把当前组件对应的样式命名为 `xxx.module.css`(在将来这个 css 文件被打包的时候,就会把类名替换成一个对应的 在整个项目中不会重复的 一个字符串)
  2. 在组件内引入当前的 cssMoudle 文件,会暴露给我们一个 css 中类名改名前后的映射键值对 组成的对象
  3. 在使用某个类名的时候,已经不能使用我们命名的类名了,而是通过 cssModule 暴露的对象,拿到某个类型对应的新名字即可使用
- cssModule 保证了,只有引入当前 css Module 的组件才能使用当前样式

2.  在 vite 脚手架中使用 less

- vite 脚手架内部已经配置好 less 了
- 我们只需要使用`npm i less -D`安装 less 的包即可
- 以后可以直接使用以 less 为后缀的样式文件

3.  在 vite 中配置路径别名

- 在`vite.config.js`中进行配置

  ```js
  //....
  //引入path模块,用来寻找绝对路径
  import path from "path"

  export default defineConfig({
    //....
    //给内部的脚手架 配置解析
    resolve: {
      //路径别名的配置
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  })
  ```

- 在我们路径需要的时候,直接使用`@`即可代表 src 的绝对路径了

4.  在 vite 中配置代理解决跨域问题

- 在`vite.config.js`的`server`的配置项中配置`proxy`配置项来配置代理
- 我们可以配置多个代理,所以每一个代理都要起一个名字作为代理配置对象的 key
- 配置如下
  ```js
    //配置代理
    server: {
      proxy: {
        // /path是当前代理的前缀,将来要添加在请求上,用来查找使用哪一个代理
        "/path": {
          //目标地址
          target: "https://api.github.com/",
          //开启代理
          changeOrigin: true,
          //重写路径 删除代理前缀
          rewrite: (path) => path.replace(/^\/path/, ""),
        }
      },
    },
  ```
- 在请求的时候,不需要再写目标地址了,直接请求自己的当前的 devServer 服务器即可,如果自己的服务器没有资源,则服务器会走对应的代理去请求资源
- 为了写请求的时候区分走哪一个代理,我们要在所有的请求前书写一个 对应的代理的 key 作为请求地址的前缀

5.  项目中的拦截器配置

- 在项目中创建一个文件夹,内部可以放一些文件,代表一个个的 axios 实例及配置
- 配置 axios 第一步:引入 axios
- 配置 axios 第二步:创建 axios 实例(创建一个 axios 的副本)
- 配置 axios 第三步:配置拦截器
- 配置 axios 第四步:把当前的 axios 实例暴露出去

6.  项目中的 api 接口汇总文件

- 我们一般会在项目中创建一个 api 文件夹,并创建对应的文件
- 在文件中把所有的请求封装成一个个函数并暴露出去
- 函数内部接受参数并发送请求后 ,把请求的结果返回出去
- 未来在组件中可以直接调用当前的函数发送对应的请求

8.  拦截器的补充

    - 使用 axios 的时候,一般都会使用 axios.create()方法创建一个 axios 实例
    - 我们会给创建的 axios 实例添加请求和响应拦截器
    - 请求拦截器补充:
      - 请求拦截器可以设置多个,并且会按照书写倒序依次执行
      - 请求拦截器的失败处理函数主要是用来处理上一次执行的请求拦截器中的失败信息(给请求拦截器配置第三个配置对象中的属性 synchronous 值为 true,则代表当前拦截器的失败处理函数同步处理当前拦截器的错误)
    - 为什么拦截器的成功是返回一个值,而失败是返回一个失败的 promise 实例???
      - 因为 axios 的拦截器函数其实都是作为 axios 的 then 方法中执行的
      - then 中如果直接返回一个值,则默认是成功的 promise,值为返回的值
      - then 中想要返回一个失败的 promise,只能在 then 的回调函数中 return 一个失败的 promise

9.  在 cli 脚手架中使用 less

- 我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 craco (一个对 create-react-app 进行自定义配置的社区解决方案)
- 使用 `yarn add @craco/craco -D`下载包
- 在`package.json`中修改配置项(原本项目是 react-scripts 启动，改为 craco 启动) `"start": "craco start",`
- 然后在项目根目录创建一个 craco.config.js 用于修改默认配置。
- 安装 craco 配置 less 的插件包 `yarn add craco-less -D `
- 在`craco.config.js`进行 less 配置

  ```js
  const CracoLessPlugin = require("craco-less")
  module.exports = {
    plugins: [{ plugin: CracoLessPlugin }]
  }
  ```

10. 在 cli 中配置路径别名

- 在`craco.config.js`中对内部的 webpack 进行额外的配置
  ```js
  //....
  const path = require("path")
  module.exports = {
    //....
    //给webpack增添配
    webpack: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  }
  ```
- 在我们路径需要的时候,直接使用`@`即可代表 src 的绝对路径了

11. 在 cli 中配置代理解决跨域问题

- 在`craco.config.js`中的`devServer`配置项中配置`proxy`配置项
- 配置如下:
  ```js
  devServer: {
    proxy: {
      "/path": {
        target: "https://api.github.com/",
        changeOrigin: true,
        pathRewrite: {
          // 路径重写
          "^/path": "",
        },
      },
    },
  },
  ```
- 使用方式和在 vite 使用一致

12. 路径别名的 vscode 提示

- 我们可以在项目根目录配置一个`jsconfig.json`文件
- 用来配置 vscode 对项目 JS 语法支持的文件,告诉编译器哪些文件需要被编译,以及如何编译。还可以实现与编辑器的集成改善快速导航和代码提示等体验

```js
  {
    "compilerOptions": {
      "baseUrl": "./",
      "paths": {
        "@/*": ["src/*"],
        "@comp/*": ["src/components/*"]
      }
    }
  }

```

## 09. React 路由

1.  基础配置

- 安装包:`npm i react-router-dom`
- 使用`react-router-dom`提供的`<BrowserRouter>`或者`<HashRouter>`组件对根组件进行包裹,即可在根组件内部使用 react 路由

2.  一级路由表的基础配置

- 在需要展示一级组件的位置使用`Routes`和`Route`组件对路由表进行配置
- Routes 组件，主要是为了提供路由规则的书写区域
- Route 组件，主要是书写每一个路由规则，path 属性是代表当前路由的地址，element 属性代表地址对应的组件
- ```jsx
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/center" element={<Center />} />
  </Routes>
  ```

3.  二级路由的配置

- 在某个一级路由的`<Route>`组件中配置二级路由规则
- ```jsx
  <Route path="/center" element={<Center />}>
    <Route path="/center/music" element={<Music />}></Route>
    <Route path="/center/news" element={<News />}></Route>
    <Route path="/center/game" element={<Game />}></Route>
  </Route>
  ```
- 在一级路由的组件中 需要展示二级路由的位置使用 `<Outlet/>`组件对二级路由组件位置进行占位

4.  默认路由的配置

- 使用 React 路由组件提供的`Navigate`组件进行重定向
- ` <Route path="/" element={<Navigate to="/center" />} ></Route>`

5.  任意路由

- 创建一个 `404` 组件 用来匹配任意路由
- `<Route path="/*" element={<NotFound />} ></Route>`

6.  默认子路由

- 当访问某个一级路由的时候,默认展示他的某个二级路由
- 在二级路由的配置区域,配置当前一级路由的默认子路由` <Route path="/center/" element={<Navigate to="/center/music" />}></Route>`

7.  模块化路由表

- 在项目中新建一个`routes/index.js`
- 使用数组表示路由表

```jsx
export const routes = [
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/center",
    element: <Center />,
    children: [
      {
        path: "/center/music",
        element: <Music />
      }
    ]
  }
]
```

- 在组件中遍历路由表得到路由规则

```jsx
<Routes>
  {routes.map(item => {
    return (
      <Route key={item.path} path={item.path} element={item.element}>
        {item.children
          ? item.children.map(item => {
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={item.element}
                ></Route>
              )
            })
          : ""}
      </Route>
    )
  })}
</Routes>
```

8.  useRoutes

- 用于根据路由表,动态创建 Routes 和 Route
- `const RoutesDOM = useRoutes(routes)`
- 然后把得到的组件交给组件使用

9.  声明式路由导航-Link 组件

- 直接使用`<Link/>`组件可以制作声明式路由导航
- Link 组件接受一个属性 to,值的点击当前 Link 组件跳转的地址
- Link 组件默认解析为 a 标签

10. 声明式路由导航-NavLink 组件

- 和 Link 组件类似,都是做声明式路由导航的
- NavLink 还可以接受一个 activeClassName 属性,值是`active`
- 当前路由和某一个 NavLink 组件的路径匹配的时候,则 active 类名生效

11. 编程式路由导航-useNavigate

- 有的时候,我们并不是一点击就导航跳转,而是需要判断或者其他操作之后再跳转
- useNavigate 提供了一个方法,方法内部可以直接传递路由地址,专门让我们进行编程式路由导航

12. 编程式路由导航-历史记录

- 使用 useNavigate 得到的 navigate 方法可以进行历史记录的操作
- navigate 方法的参数类似于 history 对象 go 方法的参数

13. 路由传参

- 在需要加载相同的组件，但是组件接收的数据却不同的时候，需要使用路由传参
- react 的路由传参分为：search 传参，params 传参，state 传参

14. 路由传参-search

- search 传参,需要在地址后边拼接查询字符串
- 在接收参数的组件中通过 useSearchParams 或者 useLocation 接受数据

15. 路由传参-params

- params 传参,需要在地址后边以地址的形式拼接数据,并且要在路由表中的地址上拼接 `/:xx`来接受对应的数据,如果某个数据是可选的则可以写`/:xx?`
- 在接收参数的组件中通过 useParams 的方式接受

16. 路由传参-state

- state 传参：在 navigate 方法可以接收两个参数，第一个参数是 to 的地址，第二个参数是一个配置对象
- 配置对象内部可以书写一个 state 属性，值是一个对象，代表传递给子组件的 state 参数
- 在接收参数的组件中通过 useLocation 的方式接收

17. 路由懒加载

- 组件懒加载：在页面打开的时候，把组件按需加载，而不是一次性的加载所有的组件
- 实现方式
  1. 在引入组件的时候，使用 React.lazy 方法，lazy 方法接收一个回调函数作为参数,lazy 方法调用只是返回一个临时的组件
  2. 一旦当前懒加载的组件被调用,就是执行这个 lazy 函数接受的回调函数
  3. 回调函数内部使用 ES6 提供的 import()动态引入的方法引入组件,并把结果返回
  4. 回调函数内部使用 import 引入组件后,会返回一个 promise 对象,react 可以通过判断这个 promise 对象的状态,决定展示当前新引入的组件还是 suspense 提供的临时组件
- 路由懒加载(路由组件懒加载):在使用 react-router 切换页面路由的时候,将路由组件进行懒加载
- 组件懒加载优点
  - 减少初始包的大小
  - 减少首屏加载时间

## 10. redux

1.  安装

- `npm i redux`

2.  创建 store 对象

- 创建一个文件`src/store/index`

```js
//1. 引入createStore方法创建一个 redux中心 store对象
import { createStore } from "redux"

//2. 引入即将创建的store对象的reducer
import countReducer from "./reducer"

// 3. 使用createStore方法创建一个store对象,并且引入当前store关联的reducer
//注意:第一次创建 store 并关联reducer的时候,就会调用一次reducer函数得到一个初始值
const store = createStore(countReducer)

console.log("store被执行了")

export default store
```

3.  初始化 reducer

- 创建 store 对象的时候,需要传入对应的 reducer
- reducer 是一个函数,创建 store 的时候,需要引入并调用函数,主要是为了得到一个初始值

```js
export default function CountRudecer(preState, action) {
  console.log("reducer执行了")
  return 1
}
```

4.  在组件中使用 store

- 在任意组件中引入 store 对象
- 使用`store.getState()`可以得到对应的 store 中的值

5.  使用多个 reducer

- 需要在 store 中使用 `combineReducers`方法
- 合并多个 reducer
  ```js
  const allReducers = combineReducers({
    count: countReducer,
    movie: movieReducer
  })
  ```
- 创建 store 的时候,使用合并后的 reducer:`const store = createStore(allReducers);`

6.  reducer 中处理数据的写法

- reducer 会接受 store 传递过来的上一次的值,和当前用户 dispatch 的 action 对象
- action 对象有 type 属性,代表当前的事件类型
- action 对象有 data 属性,代表当前要处理的数据
- 在 reducer 中,我们可以针对不同的 type 类型,作出回应,返回一个新值

```js
export default function CountRudecer(preState = 1, action) {
  console.log(preState, action)

  const { type, data } = action

  switch (type) {
    case "increment":
      return preState + data
    case "decrement":
      return preState - data
  }

  return preState
}
```

7.  action 的使用

- action 文件是为了把 redux 中的 action 对象模块化出来
- action 中把每一个 action 书写为一个函数,并把 action 对象 return 出来,方便传参

```js
export const decrementCount = (num = 1) => ({
  type: "decrement",
  data: num
})
```

8.  action 中的异步操作

- 因为我们在组件中只能 dispacth`action对象`,但是 action 函数内部如果书写了异步,则无法合理的 return 出`action对象`
- 我们在配置 store 的时候,安装`react-thunk`中间件,可以接受组件 dispatch 的函数

```js
import thunk from "redux-thunk"
const store = createStore(allReducers, applyMiddleware(thunk))
```

- 然后 redux-thunk 中间件就可以调用 dispatch 的函数,并传入一个新的 dispatch 方法,方便函数内部异步之后重新提交

```js
//异步action的写法
export const incrementWaitCount = num => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: "increment",
        data: num
      })
    }, 2000)
  }
}
```

## 11. redux-toolkit

1.  安装包

- `npm i @reduxjs/toolkit react-redux`

2.  配置 slice

- 在 store 的文件夹中创建一个 slice 文件夹,里边放入 slice 文件(每一组数据使用一个 slice 文件)
- slice 可以根据传入的配置对象自动创建 actions 和 reducer,我们暴露出来使用

```js
import { createSlice } from "@reduxjs/toolkit"

//使用toolkit暴露的createSlice方法,创建一个slice对象
const countSlice = createSlice({
  //因为将来在dispatch之后,要拿着type在所有文件的reducer中查找,所以为了防止多个文件的type重名,我们需要添加一个命名空间,防止重名
  name: "count",
  initialState: {
    count: 0,
    name: ""
  },
  reducers: {
    //reducers函数接受两个参数,第一个参数是当前的数据,第二个参数,是用户dispatch的值
    increment(state, payload) {
      console.log(state, payload)
    },
    decrement(state, payload) {
      console.log("decrement")
    }
  }
})

//当前的countSlice有一个actions对象,包含了slice自动为你创建的actions中方法
/* 
  //countSlice中根据配置默认生成actions的伪代码:
  countSlice.actions.increment = (data)=>{
    return {
      type:"count/increment",
      data:data
    }
  }

  countSlice.actions.decrement = (data)=>{
    return {
      type:"count/decrement",
      data:data
    }
  }
  */

//暴露slice帮我们创建的actions方法
export const { increment, decrement } = countSlice.actions

//slice会自动的根据我们传递的配置 创建reducer函数,放在slice对象的reducer上
/* 
    //countSlice中根据配置默认生成reducer的伪代码:
    countSlice.reducer = (preState = initialState,action)=>{
      const {type,data} = action;
      switch(type){
        case "count/increment":
          console.log(preState, action);
          break;
        case "count/decrement":
          console.log("decrement");
          break;
      }
      return preState
    }
  */

export default countSlice.reducer
```

3.  根据 slice 创建 store

```js
//引入configureStore用来创建一个store
import { configureStore } from "@reduxjs/toolkit"

//引入slice中暴露的reducer,辅助创建store
import countReducer from "./slice/countSlice"

//创建store 并配置对应的reducer
const store = configureStore({
  reducer: {
    count: countReducer
  }
})

export default store
```

4.  项目中使用 redux

- 在入口文件中使用 react-redux 暴露出来的 Provider 组件的 store 属性给组件内部提供 redux 中的 store 对象的支持

```jsx
import { Provider } from "react-redux"
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
```

5.  项目中拿取 redux 中的数据

- 使用 react-redux 提供的 useSelector 这个 Hook 拿 redux 中的数据
- useSelector 接受一个回调函数作为参数
- 回调函数接受当前 redux 中的数据作为参数
- 回调函数的返回值,就是当前要拿到的值(也就是 useSelector 返回的值)

```js
const count = useSelector(state => state.count.count)
```

6.  项目中提交事件

- 在组件中引入 redux 中的 slice 提供的 actions 函数
- 使用 react-redux 这个包提供的`useDispatch`方法得到一个 dispatch 方法
- 在组件中即可使用 dispatch 方法提交对应的 actions 函数

7.  redux-tookit 创建异步 actions

- 用 redux-toolkit 提供的 createAsyncThunk 方法,专门用来创建异步 action
- 参数 1 是当前 action 需要的 type 名称
- 参数 2 是异步 action 首次 dispatch 提交的函数
- 参数 2 的函数内部执行完异步操作之后,直接把结果 return 出去即可
- 在配置 slice 中使用`extraReducers`配置项,为某个异步的 action 配置 reduers
- 注意:我们已经通过其他方式书写一个 action 函数,不需要 reducers 配置项帮我们直接生成的时候,我们可以设置一个 extraReducers(给其他 actions 生成额外的 reducer)

```js
  extraReducers: {
    [loadMovie.fulfilled](state, { payload }) {
      console.log("异步action请求movie成功", state, payload);
      state.movieList = payload;
    },
    [loadMovie.pending](state, payload) {
      console.log("异步action请求movie正在进行");
    },
    [loadMovie.rejected](state, payload) {
      console.log("异步action请求movie失败");
    },
  },
```
