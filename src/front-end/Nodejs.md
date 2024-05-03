---
title: Nodejs
icon: nodeJS
date: 2024-04-15
---

## 包管理

### npm

- 安装依赖：`npm i [package]`

- 生产依赖：`npm i [package] -S`

- 开发依赖：`npm i [package] -D`

- 全局依赖：`npm i [package] -g`

- 删除依赖：`npm un [package]`

- 发布包：`npm publish`

- 删除包：`npm unpublish --force`

- 添加用户名和密码：`npm adduser`



- 查看 npm 配置：`npm config ls`

- 查看 npm 包的全局安装路径：`npm prefix -g`

- 查看 npm 包的全局缓存路径：`npm config get cache`

- 查看下载源：`npm get registry`

- 修改下载源：`npm config set registry https://registry.npmmirror.com`

### yarn

- 生产依赖：`yarn add [package]`

- 开发依赖：`yarn add [package] --dev`

- 全局依赖：`yarn global add [package]`

- 删除依赖：`yarn remove [package]`

- 使用 `node_modules`：`yarn config set nodeLinker node-modules`

## process

### process.exit 

结束当前进程。

```js
console.log(1) // 1
console.log(2) // 2

process.exit()

console.log(3)
```

### process.nextTick

向 next tick 队列中添加一个任务，优先级会高于微任务。

```js
setTimeout(() => {
  console.log(1)
})

queueMicrotask(() => {
  console.log(2)
})

process.nextTick(() => {
  console.log(3)
})

console.log(4)

// 执行顺序: 4 3 2 1
```

## path

### path.resolve

生成绝对路径。

```js
const path = require("node:path")

path.resolve(__dirname)               // "E:/0215/index"
path.resolve(__dirname, "./file.txt") // "E:/0215/index/file.txt"
```

### path.join

拼接多个路径。

```js
const path = require("node:path")

path.join("./src", "./js", "./index.js") // src/js/index.js
```

### path.extname

获取文件的扩展名。

```js
const path = require("node:path")

path.extname("./public/index.html") // .html
```

## url

### url.parse

解析网络路径并返回相关信息 (旧版 API)。

```js
const url = require("node:url")

url.parse("http://localhost:1118/user?name=xiaoming&age=20", true)

/* 
  protocol: 'http:',       协议
  host: 'localhost:1118',  域名
  port: '1118',            端口号
  hostname: 'localhost',   端口名
  
  search: '?name=xiaoming&age=20',         查询参数
  query: { name: 'xiaoming', age: '20' },  查询参数对象
  
  pathname: '/user',                       无参路径
  path: '/user?name=xiaoming&age=20',      带参路径
  href: 'http://localhost:1118/user?name=xiaoming&age=20'  完整路径
*/
```

### new URL

解析网络路径并返回相关信息 (新版 API)。

```js
const { URL } = require("node:url")
const url = new URL("http://localhost:1118/user?name=xiaoming&age=20")

/*
  protocol: 'http:',       协议
  host: 'localhost:1118',  域名
  port: '1118',            端口号
  hostname: 'localhost',   端口名
  
  search: '?name=xiaoming&age=20',  查询参数
  searchParams: { 'name' => 'xiaoming', 'age' => '20' }     查询参数对象
  
  pathname: '/user',                无参路径
  origin: 'http://localhost:1118',  源路径
  href: 'http://localhost:1118/user?name=xiaoming&age=20',  完整路径
*/
```

## fs

### fs.readFileSync

同步读取文件，不推荐。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  const data = fs.readFileSync(path.resolve(__dirname, "./file.txt"), "utf-8")
}
catch {
  // ...
}
```

### fs.readFile

异步读取文件 (callback)，不推荐。

```js
const fs = require("node:fs")
const path = require("node:path")

fs.readFile(path.resolve(__dirname, "./file.txt"), "utf-8", (error, data) => {})
```

异步读取文件 (Promise)，推荐。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

fs.readFile(path.resolve(__dirname, "./file.txt"), "utf-8")
  .then(data => {})
  .catch(error => {})
```

异步读取文件 (async)，推荐。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

;(async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, "./file.txt"), "utf-8")
  }
  catch {
    // ...
  }
})()
```

### fs.writeFileSync

同步写入文件。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  fs.writeFileSync(path.resolve(__dirname, "./file.txt"), "hello world")
}
catch {
  // ...
}
```

### fs.writeFile

异步写入文件。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

fs.writeFile(path.resolve(__dirname, "./file.txt"), "hello world")
  .catch(error => {})
```

### fs.appendFileSync

同步追加内容，若文件不存在，则创建该文件。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  fs.appendFileSync(path.resolve(__dirname, "./file.txt"), "hello world")
}
catch {
  // ...
}
```

### fs.appendFile

异步追加内容，若文件不存在，则创建该文件。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

fs.appendFile(path.resolve(__dirname, "./file.txt"), "hello world")
  .catch(error => {})
```

### fs.unlinkSync

同步删除文件。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  fs.unlinkSync(path.resolve(__dirname, "./file.txt"))
}
catch {
  // ...
}
```

### fs.unlink

异步删除文件。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

fs.unlink(path.resolve(__dirname, "./file.txt"))
  .catch(error => {})
```

### fs.copyFileSync

同步复制文件。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  fs.copyFileSync(
    path.resolve(__dirname, "./file.txt"),
    path.resolve(__dirname, "./docs.txt")
  )
}
catch {
  // ...
}
```

### fs.copyFile

异步复制文件。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

fs.copyFile(
  path.resolve(__dirname, "./file.txt"),
  path.resolve(__dirname, "./docs.txt")
).catch(error => {})
```

### fs.readdirSync

同步读取目录。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  const data = fs.readdirSync(path.resolve(__dirname, "./dir"))
}
catch {
  // ...
}
```

### fs.readdir

异步读取目录。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

fs.readdir(path.resolve(__dirname, "./dir"))
  .then(data => {})
  .catch(error => {})
```

### fs.mkdirSync

同步创建目录。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  fs.mkdirSync(path.resolve(__dirname, "./dir/src"), {
    recursive: true /* 执行递归创建 */
  })
}
catch {
  // ...
}
```

### fs.mkdir

异步创建目录。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

fs.mkdir(path.resolve(__dirname, "./dir/src"), {
  recursive: true /* 执行递归创建 */
}).catch(error => {})
```

### fs.rmdirSync

同步删除目录。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  fs.rmdirSync(path.resolve(__dirname, "./dir"))
}
catch {
  // ...
}
```

### fs.rmdir

异步删除目录。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

fs.rmdir(path.resolve(__dirname, "./dir"))
  .catch(error => {})
```

### fs.rmSync

同步删除文件/目录。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  fs.rmSync(path.resolve(__dirname, "./file.txt"), {
    recursive: true, /* 执行递归删除 */
    force: true /* 忽略路径导致的异常 */
  })
}
catch {
  // ...
}
```

### fs.rm

异步删除文件/目录。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

fs.rm(path.resolve(__dirname, "./dir"), {
  recursive: true, /* 执行递归删除 */
  force: true /* 忽略路径导致的异常 */
}).catch(error => {})
```

### fs.renameSync

同步重命名文件/目录。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  fs.renameSync(
    path.resolve(__dirname, "./file.txt"),
    path.resolve(__dirname, "./file.md")
  )
}
catch {
  // ...
}
```

### fs.rename

异步重命名文件/目录。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

fs.rename(
  path.resolve(__dirname, "./dir"),
  path.resolve(__dirname, "./src")
).catch(error => {})
```

### fs.statSync

同步判断是否为文件/目录。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  const data = fs.statSync(path.resolve(__dirname, "./file.txt"))
  data.isFile()
}
catch {
  // ...
}
```

### fs.stat

异步判断是否为文件/目录。

```js
const fs = require("node:fs/promises")
const path = require("node:path")

fs.stat(path.resolve(__dirname, "./dir"))
  .then(data => data.isDirectory())
  .catch(error => {})
```

### fs.existsSync

同步判断文件/目录是否存在。

```js
const fs = require("node:fs")
const path = require("node:path")

try {
  const data = fs.existsSync(path.resolve(__dirname, "./file.txt"))
}
catch {
  // ...
}
```

### fs.exists

异步判断文件/目录是否存在，**已弃用**。

> "fs/promises" 模块中没有 exists 方法

## buffer

### Buffer.alloc

创建一个 buffer。

```js
const { Buffer } = require("node:buffer")

const buf = Buffer.alloc(5) // <Buffer 00 00 00 00 00>
```

创建一个 64k 文件。

```js
const fs = require("node:fs")
const { Buffer } = require("node:buffer")

const buf = Buffer.alloc(64 * 1024)
fs.writeFileSync("file", buf)
```

### Buffer.allocUnsafe

创建一个 buffer，可以快速创建，但是不安全。

```js
const { Buffer } = require("node:buffer")

const buf = Buffer.allocUnsafe(5) // <Buffer 00 00 00 00 00>
```

### Buffer.from

将字符串转换为 buffer。

```js
const { Buffer } = require("node:buffer")

const buf = Buffer.from("hello") // <Buffer 68 65 6c 6c 6f>
```

将 buffer 转换为字符串。

```js
const { Buffer } = require("node:buffer")

const buf = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f])
buf.toString() // "hello"
```

## stream

### stream.on("data")

当数据块 (chunk) 被读取时，触发事件。

```js
const fs = require("node:fs")

const stream = fs.createReadStream("./file")
stream.on("data", chunk => {})
```

### stream.on("end")

当数据块 (chunk) 读取完成时，触发事件。

```js
const fs = require("node:fs")

const stream = fs.createReadStream("./file")
stream.on("end", () => {})
```

## events

### emitter.on

监听自定义事件。

```js
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.on("myEvent", args => {})
```

### emitter.once

监听自定义事件，触发一次后移除监听器。

```js
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.once("myEvent", args => {})
```

### emitter.emit

触发事件监听器，并将附加参数传递给监听器回调。

```js
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.emit("myEvent", [...args])
```

### emitter.off

移除事件监听器。

```js
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

function aListener() {}
function bListener() {}

emitter.on("myEvent", aListener)
emitter.on("myEvent", bListener)

emitter.off("myEvent", bListener) // myEvent [aListener]
```

### emitter.listeners

获取监听器队列。

```js
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

function aListener() {}
function bListener() {}

emitter.on("myEvent", aListener)
emitter.on("myEvent", bListener)

emitter.listeners("myEvent") // myEvent [aListener, bListener]
```

### emitter.listenerCount

获取监听器数量。

```js
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.on("myEvent", () => {})
emitter.on("myEvent", () => {})

emitter.listenerCount("myEvent") // 2
```

### emitter.removeAllListeners

移除所有事件监听器。

```js
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.on("myEvent", () => {})
emitter.on("myEvent", () => {})

emitter.removeAllListeners() // myEvent []
```

### emitter.eventNames

获取自定义事件队列。

```js
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.on("aEvent", () => {})
emitter.on("bEvent", () => {})
emitter.on("cEvent", () => {})

emitter.eventNames() // ['aEvent', 'bEvent', 'cEvent']
```

## http

### http.createServer

创建服务器。

```js
const http = require("node:http")

const server = http.createServer((req, res) => {
  // ......
})

server.listen(3000)
```

### req.method

获取请求方法。

```js
const server = http.createServer((req, res) => {
  req.method // GET
})
```

### res.setHeader

设置响应头。

```js
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html;charset=utf-8")
})
```

### res.write

发送一块响应体，可以连续发送响应体数据块（chunk）。

```js
const server = http.createServer((req, res) => {
  res.write("<h2>Home</h2>")
})
```

### res.end

结束响应进程。

```js
const server = http.createServer((req, res) => {
  res.end()
})
```

## express

### app.get

```js
const express = require("express")
const app = express()

app.get("/home", (req, res) => {})

app.get("/user", (req, res) => {})

app.listen(1118, () => { /* 服务器启动后执行 */ })
```

### app.post

```js
const express = require("express")
const app = express()

app.post("/", (req, res) => {})

app.listen(1118)
```

### req.path

获取请求路径（不含查询参数）。

```js
app.get("/user", (req, res) => {
  req.path // /user
})
```

### req.url

获取请求路径（含查询参数）。

```js
app.get("/user", (req, res) => {
  req.url // /user?name=xiaoming
})
```

### req.query

获取 query 参数（对象）。

```js
app.get("/user", (req, res) => {
  req.query // { name: 'xiaoming' }
})
```

### req.params

获取 params 参数（对象）。

```js
app.get("/user/:name", (req, res) => {
  req.params // { name: 'xiaoming' }
})
```

### req.get

获取请求头中的数据。

```js
app.get("/user", (req, res) => {
  req.get("Accept") // text/html,application/xhtml+xml,application/xml ...
  req.get("User-Agent") // Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...
})
```

### req.cookies

获取请求头中的 Cookie，需要使用 `cookie-parser`。

```js
const cookieParser = require("cookie-parser")

app.use(cookieParser())

app.get("/get-cookie", (req, res) => {
  req.cookies // { username: 'admin', password: '123' }
})
```

### req.body

获取请求体中的数据，需要使用 `body-parser`。

```js
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/post", (req, res) => {
  req.body // { username: 'xiaoming', age: '25' }
})
```

### req.route

获取路由相关信息。

```js
app.get("/user", (req, res) => {
  req.route
})

/*
  path: '/user',
  stack: [
    Layer {
      handle: [Function (anonymous)],
      name: '<anonymous>',
      params: undefined,
      path: undefined,
      keys: [],
      regexp: /^\/?$/i,
      method: 'get'
    }
  ],
  methods: { get: true }
*/
```

### res.end

结束响应进程。用于不发送任何数据的情况下，快速结束响应。

```js
app.get("/", (req, res) => {
  res.end()
})
```

### res.send

发送响应体，并结束响应进程。

> `res.write` + `res.end`

```js
app.get("/", (req, res) => {
  res.send("<h2>Home</h2>")
})
```

### res.sendFile

发送文件（绝对路径），并结束响应进程。

> `fs.readFile` + `res.send`

```js
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"))
  // or
  res.sendFile("./index.html", { root: __dirname })
})
```

### res.json

发送 JSON 数据，并结束响应进程。

> `JSON.stringify` + `res.send`

```js
app.get("/", (req, res) => {
  res.json({ name: "xiaoming", age: 20 })
})
```

### res.redirect

重定向请求（跳转路径）。

```js
app.get("/", (req, res) => {
  res.redirect("/home")
})
```

### res.cookie

设置 Cookie，并将其携带在响应头中。

```js
app.get("set-cookie", (req, res) => {
  res.cookie("username", "admin")
})
```

### res.clearCookie

清除 Cookie。

```js
app.get("/del-cookie", (req, res) => {
  res.clearCookie("username")
})
```

### res.status

设置响应状态码。

```js
app.get("/", (req, res) => {
  res.status(404)
})
```

### res.sendStatus

发送响应状态码，并结束响应进程。

> `res.status` + `res.send`

```js
app.get("/", (req, res) => {
  res.sendStatus(404)
})
```

## 中间件

### 错误处理中间件

错误处理中间件需要提供四个参数，否则为常规中间件。

```js
app.use((err, req, res, next) => {
  // ...

  next()
})
```

### 自定义中间件

```js
// middleware.js

module.exports = function (options) {
  return function (req, res, next) {
    // ...
    
    next()
  }
}
```

```js
const middleware = require("./middleware.js")

app.use(middleware({ option1: "one", option2: "two" }))	
```

### 内置中间件

#### express.static

加载静态资源。

```js
const static = express.static

app.use(static("./static")) // 设置静态资源目录
```

#### express.Router

**一级路由**

```js
// router.js

const router = express.Router()

router.get("/home", (req, res) => {})

router.get("/user", (req, res) => {})

module.exports = router
```

```js
const router = require("./router.js")

app.use(router)
```

**二级路由**

```js
// routers/adminRouter.js

const adminRouter = express.Router()

adminRouter.get("/home", (req, res) => {})

adminRouter.get("/user", (req, res) => {})

module.exports = adminRouter
```

```js
const adminRouter = require("./routers/adminRouter.js")

app.use("/admin" /* 路由前缀 */, adminRouter)
```

### 第三方中间件

#### body-parser

解析请求体中的数据，并转换为对象。

```js
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

app.post("/post", (req, res) => {
  req.body // { username: 'xiaoming', age: '25' }
})
```

#### cookie-parser

解析请求头中的 Cookie。

```js
const cookieParser = require("cookie-parser")

app.use(cookieParser())

app.get("/get-cookie", (req, res) => {
  req.cookies // { username: 'admin', password: '123' }
})
```

#### express-session

处理 Session。

```js
const session = require("express-session")

app.use(session({ /* options */ }))

app.get("get-session", (req, res) => {
  req.session.username // admin
})
```

## 模板引擎

### 浏览器渲染

```js
const users = [
  { name: "小明", age: 20 },
  { name: "小红", age: 23 },
  { name: "小强", age: 21 }
]

const template = `
  <ul>
    <% users.forEach(item => { %>
    <li>姓名: <%= item.name %>, 年龄: <%= item.age %></li>
    <% }) %>
  </ul>
`

const html = ejs.render(template, { users })
```

### 服务器渲染

```js
const users = [
  { name: "小明", age: 20 },
  { name: "小红", age: 23 },
  { name: "小强", age: 21 }
]

app.set("view engin" /* 引入模板引擎 */, "ejs")
app.set("views" /* 模板文件所在目录 */, path.resolve(__dirname, "./views"))

app.get("/", (req, res) => {
  res.render("index.ejs", { users })
})
```

```ejs
<!-- index.ejs -->

<ul>
  <% users.forEach(item => { %>
  <li>姓名: <%= item.name %>, 年龄: <%= item.age %></li>
  <% }) %>
</ul>
```

## Cookie & Session

### Cookie

#### 设置 Cookie

会话期 Cookie：在会话结束之后被清除，关闭浏览器时结束会话。

```js
// 客户端
document.cookie = "username=admin"

// 服务器
app.get("set-cookie", (req, res) => {
  res.cookie("username", "admin", { httpOnly: true /* 设置为只能由服务器访问 */ })
})
```

持久性 Cookie：使用 expires 设置过期时间，不推荐。

```js
// 客户端
document.cookie = "username=admin; expires=Fri, 31 Dec 2023 23:59:59 GMT"

// 服务器
app.get("set-cookie", (req, res) => {
  res.cookie("username", "admin", { expires: new Date(2023, 11, 31) })
})
```

持久性 Cookie：使用 Max-Age 设置有效期（s）。

```js
// 客户端
document.cookie = "username=admin; Max-Age=3600"

// 服务器
app.get("set-cookie", (req, res) => {
  res.cookie("username", "admin", { maxAge: 1000 * 3600 })
})
```

#### 获取 Cookie

客户端：通过字符串和数组方法将 `document.cookie` 解析成对象。

服务器：需要使用 `cookie-parser`。

> 只能在设置 Cookie 的路由或子路由中获取

```js
// 客户端
const cookies = document.cookie.split(";").reduce((prev, cookie) => {
  const [key, value] = cookie.trim().split("=")
  return {
    ...prev,
    [key]: value
  }
}, {})

// 服务器
app.get("/get-cookie", (req, res) => {
  req.cookies
})
```

#### 删除 Cookie

客户端：将 Cookie 设置为已过期，浏览器会清除过期的 Cookie。

服务器：使用 express 的 `res.clearCookie` 方法。

```js
// 客户端
document.cookie = "username=admin; Max-Age=-1"

// 服务器
app.get("/del-cookie", (req, res) => {
  res.clearCookie("username")
})
```

### Session

我们发现当客户端向服务器发送请求时，总会携带 Cookie，这就导致我们不能在 Cookie 中存储较多数据，并且 Cookie 是存储在客户端的，安全性较低。

所以我们希望可以将数据存储在服务器中，并且这些数据都有唯一的 ID，客户端向服务器发送请求时，只需要携带这个 ID，服务器对其进行识别，就能访问对应的数据。

Session 是服务器中的一个对象，用于存储数据。每个 Session 都有一个 ID，我们将这个 Session ID 作为一个 Cookie name，服务器会将这个 Cookie 携带在响应头中发送给客户端，客户端收到后将其存储，之后每次向服务器发送请求时，只需要携带这个 Cookie，服务器就可以根据 ID 找到对应的 Session。

#### 配置 Session

- `name`：以 Session ID 命名的 Cookie, 默认值为 "connect.sid"

- `secret`：用于对 Session ID Cookie 进行加密的字符串, 也可以是包含多个加密字符串的数组

- `resave`：是否重新保存 Session

- `saveUninitialized`：是否保存未初始化的 Session

- `cookie`：Session ID Cookie 的配置对象
- `maxAge`：有效期
  
- `httpOnly`：是否只能由服务器访问

```js
const session = require("express-session")

app.use(
  session({
    name: "uuu",
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 3600,
      httpOnly: true
    }
  })
)
```

#### 设置 Session

Session 默认存储在内存中，服务器重启后会重置。

```js
app.get("/set-session", (req, res) => {
  req.session.username = "admin"
})
```

#### 获取 Session

Session 存储在服务器，只能由服务器访问。

```js
app.get("/get-session", (req, res) => {
  req.session.username // admin
})
```

#### 删除 Session

```js
app.get("/del-session", (req, res) => {
  req.session.destroy() // 删除所有 Session
})
```

## JWT

### 加密与解密

加密：`jwt.sign(payload, secretOrPrivateKey, [options, callback])`

解密：`jwt.verify(token, secretOrPublicKey, [options, callback])`

```js
const jwt = require("jsonwebtoken")

// 加密
const token = jwt.sign(data, "secret", {
  expiresIn: "1h"
})

// 解密
const decoded = jwt.verify(token, "secret")
```

**参考**：[jsonwebtoken - npm (npmjs.com)](https://www.npmjs.com/package/jsonwebtoken)

### 服务器签发

用户首次登录时，验证用户名密码，如果验证成功，由服务器签发 token，并返回给客户端。

```js
app.post("/login", (req, res) => {
  if (true /* 用户名密码正确 */) {
    const token = jwt.sign(data, "secret", { expiresIn: "7 days" })
    
    res.send({ status: 200, data: { token } })
  }
})
```

### 客户端携带

客户端接收到 token 后在本地存储，并在下次请求（登录或路由跳转）时携带。

```js
fetch("http://127.0.0.1:3000/user", {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${ token }` // Bearer 是一种身份验证方案
  }
})
```

### 服务器验证

```js
app.get("/user", (req, res) => {
  const token = req.get("Authorization").split(" ")[1]
  
  try {
    const decoded = jwt.verify(token, "secret")
  }
  
  catch {
    // token 失效
  }
})
```

## MongoDB

### 基本操作

- 进入 MongoDB 环境：`mongo`

- 查看所有数据库：`show dbs`

- 切换数据库：`use [db]`，如果数据库不存在，则创建该数据库

  > 创建的空数据库不会出现在数据库列表中，需要添加一些数据才会显示。
  
- 查看当前数据库：`db`

- 删除当前数据库：`db.dropDatabase()`



- 查看集合：`show collections`

- 创建集合：`db.createCollection(["col"])`

- 删除集合：`db.[col].drop()`



- 添加数据：`db.[col].insert({ [key]: [value] })`，如果集合不存在，则创建该集合

- 删除数据：`db.[col].remove({ [key]: [value] })`

- 更新数据：`db.[col].update({ [key]: [value] }, { $set: { [key]: [value] } })`

- 查询数据：`db.[col].find({ [key]: [value] })`

### 更新操作

- `db.[col].update({ age: 30 }, { $set: { retire: 0 } })`

  匹配**一条**符合 "age = 30" 的数据，将其 "retire" 字段的值更改为 0

- `db.[col].update({ age: 65 }, { $set: { retire: 1 } }, { multi: true })`

  匹配**所有**符合 "age = 65" 的数据，将其 "retire" 字段的值更改为 1

### 比较查询

- `db.[col].find({ age: { $eq: 19 } }, { age: 1, _id: 0 })`

  查找符合 "age = 19" 的数据，只显示 "age" 字段。默认会显示 "_id" 字段

- `db.[col].find({ age: { $gt: 20 } })`

  查找符合 "age > 20" 的数据

- `db.[col].find({ age: { $lt: 25 } })`

  查找符合 "age < 25" 的数据

- `$ne`  !=

- `$gte` >=

- `$lte` <=

### 逻辑查询

- `db.[col].find({ age: { $gt: 20, $lt: 25 } })`

  查找符合 "age > 20" && "age < 25" 的数据

- `db.[col].find({ $or: [{ age: { $lt: 18 } }, { age: { $gt: 36 } }] })`

  查找符合 "age < 18" || "age > 36" 的数据

### 排序查询

- `db.[col].find().sort({ [field]: 1 })` 正序查询

- `db.[col].find().sort({ [field]: -1 })` 倒序查询

### 其他查询

- `db.[col].find().skip(n)` 跳过 n 条数据，再开始查询

- `db.[col].find().limit(n)` 查询 n 条数据

- `db.[col].find().skip((n - 1) * perpage).limit(perpage)` 查询第 n 页数据

### 代码示例

```js
const mongoose = require("mongoose")

/* 连接数据库 */
mongoose.connect("mongodb://127.0.0.1:27017/easydb")

/* 创建骨架 */
const schema = mongoose.Schema({
  name: String,
  age: Number
})

/* 创建模型 */
const model = mongoose.model("users" /* ! 's' */, schema)

/* 添加数据 */
model.create({ name: "Even", age: 35 }) // 使用 mongoose 添加的数据都会有一个 "__v" 字段

/* 删除数据 */
model.deleteMany({ age: 35 })

/* 更新数据 */
model.updateMany({ age: 35 }, { $set: { retire: 0 } })

/* 查询数据 */
model.find({ age: { $gt: 20 } }, { name: 1, age: 1, _id: 0 })
```
