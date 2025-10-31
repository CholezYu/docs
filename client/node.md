---
title: Node
icon: nodeJS
date: 2024-05-04
description: Node
---

## 包管理

### npm

- 安装包：`npm i [package]`

- 安装开发环境的包：`npm i [package] -D`

- 安装全局环境的包：`npm i [package] -g`

- 删除包：`npm un [package]`

- 发布包：`npm publish`

- 取消发布：`npm unpublish --force`

- 添加用户名和密码：`npm adduser`



- 查看 npm 配置：`npm config ls`

- 查看全局安装路径：`npm prefix -g`

- 查看全局缓存路径：`npm config get cache`

- 查看下载源：`npm get registry`

- 修改下载源：`npm config set registry https://registry.npmmirror.com`

### yarn

- 安装包：`yarn add [package]`

- 安装开发环境的包：`yarn add [package] --dev`

- 安装全局环境的包：`yarn global add [package]`

- 删除包：`yarn remove [package]`

- 使用 `node_modules`：`yarn config set nodeLinker node-modules`

## path

### path.resolve

解析绝对路径。

```ts
const path = require("node:path")

path.resolve(__dirname)               // 'F:\app\src'
path.resolve(__dirname, "./main.ts")  // 'F:\app\src\main.ts'
```

### path.join

拼接路径。

```ts
const path = require("node:path")

path.join("./src", "./js", "./index.js") // 'src\js\index.js'
```

### path.extname

获取文件的扩展名。

```ts
const path = require("node:path")

path.extname("./public/index.html") // '.html'
```

### path.parse

将路径字符串解析成一个包含路径信息的对象。

```ts
const path = require("node:path")

path.parse("/app/src/index.html")
/* 
  root: '/',           根目录
  dir: '/app/src',     文件所在目录
  base: 'index.html',  文件名.后缀名
  ext: '.html',        后缀名
  name: 'index'        文件名
*/
```

### path.format

将一个包含路径信息的对象解析成路径字符串。与 `path.parse()` 相反。

```ts
const path = require("node:path")

path.format({
  root: "/",
  dir: "/app/src",
  base: "index.html",
  ext: ".html",
  name: "index"
})
// '/app/src/index.html'
```

## fs

### fs.readFile

读取文件。

```ts
const { readFile } = require("node:fs")
const { readFileSync } = require("node:fs")

// 异步读取文件 callback
readFile("./file.txt", {
  encoding: "utf-8"
}, (error, data) => {
  // ...
})

// 异步读取文件 Promise
readFile("./file.txt", {
  encoding: "utf-8"
}).then(data => {
  // ...
})

// 异步读取文件 async / await
;(async () => {
  const data = await readFile("./file.txt", {
    encoding: "utf-8"
  })
})()

// 同步读取文件
const data = readFileSync("./file.txt", {
  encoding: "utf-8"
})
```

### fs.createReadStream

创建可读流（分段）读取文件。用于处理大文件。

```ts
const { createReadStream } = require("node:fs")

const readStream = createReadStream("./file.txt")

// 正在读取时触发
readStream.on("data", chunk => {
  // ...
})

// 读取完成时触发
readStream.on("end", () => {
  // ...
})
```

### fs.writeFile

写入文件，会替换原有的内容。

```ts
const { writeFile } = require("node:fs/promises")
const { writeFileSync } = require("node:fs")

// 异步写入文件
writeFile("./file.txt", "hello world")

// 同步写入文件
writeFileSync("./file.txt", "hello world", {
  flag: "a" /* append 追加内容，而不是替换 */
})
```

### fs.appendFile

写入文件，会向文件追加内容。若文件不存在，则创建该文件。

```ts
const { appendFile } = require("node:fs/promises")
const { appendFileSync } = require("node:fs")

// 异步写入文件
appendFile("./file.txt", "hello world")

// 同步写入文件
appendFileSync("./file.txt", "hello world")
```

### fs.createWriteStream

创建可写流（分段）写入文件。用于处理大文件。

```ts
const { createWriteStream } = require("node:fs")

const writeStream = createWriteStream("./file.txt")

writeStream.write(/* data */)
writeStream.end()

// 写入完成时触发
writeStream.on("finish", () => {
  // ...
})

// 写入失败时触发
writeStream.on("error", () => {
  // ...
})
```

### fs.copyFile

复制文件。

```ts
const { copyFile } = require("node:fs/promises")
const { copyFileSync } = require("node:fs")

// 异步复制文件
copyFile("./file.txt", "./text.txt")

// 同步复制文件
copyFileSync("./file.txt", "./text.txt")
```

### fs.unlink

删除文件。

```ts
const { unlink } = require("node:fs/promises")
const { unlinkSync } = require("node:fs")

// 异步删除文件
unlink("./file.txt")

// 同步删除文件
unlinkSync("./file.txt")
```

### fs.readdir

读取目录。

```ts
const { readdir } = require("node:fs/promises")
const { readdirSync } = require("node:fs")

// 异步读取目录
readdir("./src").then(data => {
  // ...
})

// 同步读取目录
const data = readdirSync("./src")
```

### fs.mkdir

创建目录。

```ts
const { mkdir } = require("node:fs/promises")
const { mkdirSync } = require("node:fs")

// 异步创建目录
mkdir("./src/config", {
  recursive: true /* 多层级递归创建 */
})

// 同步创建目录
mkdirSync("./src/config", {
  recursive: true /* 多层级递归创建 */
})
```

### fs.rmdir

删除目录。

```ts
const { rmdir } = require("node:fs/promises")
const { rmdirSync } = require("node:fs")

// 异步删除目录
rmdir("./src", {
  recursive: true /* 多层级递归删除 */
})

// 同步删除目录
rmdirSync("./src", {
  recursive: true /* 多层级递归删除 */
})
```

### fs.rm

删除文件或目录。

```ts
const { rm } = require("node:fs/promises")
const { rmSync } = require("node:fs")

// 异步删除文件或目录
rm("./src", {
  recursive: true, /* 多层级递归删除 */
  force: true /* 忽略路径导致的异常 */
})

// 同步删除文件或目录
rmSync("./file.txt")
```

### fs.rename

重命名文件或目录。

```ts
const { rename } = require("node:fs/promises")
const { renameSync } = require("node:fs")

// 异步重命名文件或目录
rename("./src", "./lib")

// 同步重命名文件或目录
renameSync("./file.txt", "./file.md")
```

### fs.stat

判断是否为文件或目录。

```ts
const { stat } = require("node:fs/promises")
const { statSync } = require("node:fs")

// 异步判断是否为文件或目录
stat("./src").then(data => data.isDirectory())

// 同步判断是否为文件或目录
const data = statSync("./file.txt")
data.isFile()
```

### fs.exists

判断文件或目录是否存在。

```ts
const { existsSync } = require("node:fs")

// 异步判断文件或目录是否存在
// 已弃用，"fs/promises" 模块中没有 exists 方法

// 同步判断文件或目录是否存在
const data = existsSync("./file.txt")
```

## os

### os.platform

获取操作系统的平台。

```ts
const os = require("node:os")

os.platform() // win32
```

### os.type

获取操作系统的名称。

```ts
const os = require("node:os")

os.type() // Windows_NT
```

### os.release

获取操作系统的版本号。

```ts
const os = require("node:os")

os.release() // 10.0.22631
```

### os.version

获取操作系统的版本。

```ts
const os = require("node:os")

os.version() // Windows 11 Home China
```

### os.arch

获取操作系统的 CPU 架构。

```ts
const os = require("node:os")

os.arch() // x64
```

### os.cpus

获取 CPU 信息。

```ts
const os = require("node:os")

os.cups().length // 16
os.cups()
/*
  model: '13th Gen Intel(R) Core(TM) i7-13620H',
  speed: 2918,
  times: { user: 110250, nice: 0, sys: 213468, idle: 25279343, irq: 73421 }
*/
```

## process

> [!tip]
>
> process 是挂载到 globalThis 下的全局 API，不需要引入就可以直接使用。

### process.cwd

获取当前工作目录。与 `__dirname` 相同。

> [!warning]
>
> ESM 模式下使用 `__dirname` 会报错 "__dirname is not defined in ES module scope"。

```ts
process.cwd() // 'F:\app\src'
```

### process.exit 

结束进程。

```ts
process.exit()

// 进程结束时触发
process.on("exit", () => {
  // ...
})
```

### process.kill

杀死进程。

```ts
process.kill(process.pid /* 进程ID */)
```

### process.nextTick

向异步队列中添加一个任务，优先级高于微任务。

```ts
process.nextTick(() => {
  // ...
})
```

### process.platform

获取操作系统的平台。与 `os.platform()` 结果相同。

```ts
process.platform // win32
```

### process.arch

获取操作系统的 CPU 架构。与 `os.arch()` 结果相同。

```ts
process.arch // x64
```

## events

### emitter.on

监听自定义事件。

```ts
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.on("myEvent", (...args) => {
  // ...
})
```

### emitter.once

监听自定义事件，触发一次后移除监听器。

```ts
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.once("myEvent", (...args) => {
  // ...
})
```

### emitter.emit

触发事件监听器。

```ts
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.emit("myEvent", "arg1", "arg2")
```

### emitter.off

移除事件监听器。

```ts
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

const listenerA = () => {}
const listenerB = () => {}

emitter.on("myEvent", listenerA)
emitter.on("myEvent", listenerB)

emitter.off("myEvent", listenerB) // myEvent [listenerA]
```

### emitter.listeners

获取所有事件监听器。

```ts
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

const listenerA = () => {}
const listenerB = () => {}

emitter.on("myEvent", listenerA)
emitter.on("myEvent", listenerB)

emitter.listeners("myEvent") // myEvent [listenerA, listenerB]
```

### emitter.listenerCount

获取事件监听器数量。

```ts
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.on("myEvent", () => {})
emitter.on("myEvent", () => {})

emitter.listenerCount("myEvent") // 2
```

### emitter.removeAllListeners

移除所有事件监听器。

```ts
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.on("myEvent", () => {})
emitter.on("myEvent", () => {})

emitter.removeAllListeners() // myEvent []
```

### emitter.eventNames

获取所有自定义事件。

```ts
const EventEmitter = require("node:events")
const emitter = new EventEmitter()

emitter.on("eventA", () => {})
emitter.on("eventB", () => {})
emitter.on("eventC", () => {})

emitter.eventNames() // ['eventA', 'eventB', 'eventC']
```

## buffer

### Buffer.alloc

创建一个 buffer。

```ts
const { Buffer } = require("node:buffer")

const buffer = Buffer.alloc(5) // <Buffer 00 00 00 00 00>
```

创建一个 64k 文件。

```ts
const { writeFileSync } = require("node:fs")
const { Buffer } = require("node:buffer")

const buffer = Buffer.alloc(64 * 1024)
writeFileSync("./file.txt", buffer)
```

### Buffer.allocUnsafe

创建一个 buffer，可以快速创建，但是不安全。

```ts
const { Buffer } = require("node:buffer")

const buffer = Buffer.allocUnsafe(5) // <Buffer 00 00 00 00 00>
```

### Buffer.from

将字符串转换为 buffer。

```ts
const { Buffer } = require("node:buffer")

const buffer = Buffer.from("hello") // <Buffer 68 65 6c 6c 6f>
```

将 buffer 转换为字符串。

```ts
const { Buffer } = require("node:buffer")

const buffer = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f])
buffer.toString() // "hello"
```

## url

### url.parse

解析网络路径并返回相关信息 (旧版 API)。

```ts
const url = require("node:url")

url.parse("http://localhost:3000/user?name=xiaoming&age=20", true)
/*
  protocol: 'http:',       协议
  host: 'localhost:3000',  域名
  port: '3000',            端口号
  hostname: 'localhost',   端口名
  
  search: '?name=xiaoming&age=20',         查询参数
  query: { name: 'xiaoming', age: '20' },  查询参数对象
  
  pathname: '/user',                       无参路径
  path: '/user?name=xiaoming&age=20',      带参路径
  href: 'http://localhost:3000/user?name=xiaoming&age=20'  完整路径
*/
```

### new URL

解析网络路径并返回相关信息 (新版 API)。

```ts
const { URL } = require("node:url")
const url = new URL("http://localhost:3000/user?name=xiaoming&age=20")

/*
  protocol: 'http:',       协议
  host: 'localhost:3000',  域名
  port: '3000',            端口号
  hostname: 'localhost',   端口名
  
  search: '?name=xiaoming&age=20',  查询参数
  searchParams: { 'name' => 'xiaoming', 'age' => '20' }     查询参数对象
  
  pathname: '/user',                无参路径
  origin: 'http://localhost:3000',  源路径
  href: 'http://localhost:3000/user?name=xiaoming&age=20',  完整路径
*/
```

## http

### http.createServer

创建服务器。

```ts
const { createServer } = require("node:http")

const server = createServer((req, res) => {
  // ......
})

server.listen(3000)
```

### req.method

获取请求方法。

```ts
const { createServer } = require("node:http")

const server = createServer((req, res) => {
  req.method // GET
})
```

### res.setHeader

设置响应头。

```ts
const { createServer } = require("node:http")

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "text/html;charset=utf-8")
})
```

### res.write

发送一块响应体，可以连续发送响应体数据块（chunk）。

```ts
const { createServer } = require("node:http")

const server = createServer((req, res) => {
  res.write("<h2>Home</h2>")
})
```

### res.end

结束响应进程。

```ts
const { createServer } = require("node:http")

const server = createServer((req, res) => {
  res.end()
})
```

## express

### app.get

```ts
const express = require("express")
const app = express()

app.get("/home", (req, res) => {})

app.get("/user", (req, res) => {})

app.listen(3000, () => { /* 服务器启动后执行 */ })
```

### app.post

```ts
const express = require("express")
const app = express()

app.post("/", (req, res) => {})

app.listen(3000)
```

### req.path

获取请求路径（不含查询参数）。

```ts
const express = require("express")
const app = express()

app.get("/user", (req, res) => {
  req.path // /user
})
```

### req.url

获取请求路径（含查询参数）。

```ts
const express = require("express")
const app = express()

app.get("/user", (req, res) => {
  req.url // /user?name=xiaoming
})
```

### req.query

获取 query 参数（对象）。

```ts
const express = require("express")
const app = express()

app.get("/user", (req, res) => {
  req.query // { name: 'xiaoming' }
})
```

### req.params

获取 params 参数（对象）。

```ts
const express = require("express")
const app = express()

app.get("/user/:name", (req, res) => {
  req.params // { name: 'xiaoming' }
})
```

### req.get

获取请求头中的数据。

```ts
const express = require("express")
const app = express()

app.get("/user", (req, res) => {
  req.get("Accept") // text/html,application/xhtml+xml,application/xml ...
  req.get("User-Agent") // Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...
})
```

### req.cookies

获取请求头中的 Cookie，需要使用 `cookie-parser`。

```ts
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

app.use(cookieParser())

app.get("/get-cookie", (req, res) => {
  req.cookies // { username: 'admin', password: '123' }
})
```

### req.body

获取请求体中的数据，需要使用 `body-parser`。

```ts
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/post", (req, res) => {
  req.body // { username: 'xiaoming', age: '25' }
})
```

### req.route

获取路由相关信息。

```ts
const express = require("express")
const app = express()

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

```ts
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.end()
})
```

### res.send

发送响应体，并结束响应进程。

> `res.write` + `res.end`

```ts
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("<h2>Home</h2>")
})
```

### res.sendFile

发送文件（绝对路径），并结束响应进程。

> `fs.readFile` + `res.send`

```ts
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"))
  // or
  res.sendFile("./index.html", { root: __dirname })
})
```

### res.json

发送 JSON 数据，并结束响应进程。

> `JSON.stringify` + `res.send`

```ts
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({ name: "xiaoming", age: 20 })
})
```

### res.redirect

重定向请求（跳转路径）。

```ts
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.redirect("/home")
})
```

### res.cookie

设置 Cookie，并将其携带在响应头中。

```ts
const express = require("express")
const app = express()

app.get("set-cookie", (req, res) => {
  res.cookie("username", "admin")
})
```

### res.clearCookie

清除 Cookie。

```ts
const express = require("express")
const app = express()

app.get("/del-cookie", (req, res) => {
  res.clearCookie("username")
})
```

### res.status

设置响应状态码。

```ts
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.status(404)
})
```

### res.sendStatus

发送响应状态码，并结束响应进程。

> `res.status` + `res.send`

```ts
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.sendStatus(404)
})
```

## 中间件

### 错误处理中间件

错误处理中间件需要提供四个参数，否则为常规中间件。

```ts
const express = require("express")
const app = express()

app.use((err, req, res, next) => {
  // ...

  next()
})
```

### 自定义中间件

```ts
// middleware.js
module.exports = function (options) {
  return function (req, res, next) {
    // ...
    next()
  }
}
```

```ts
const express = require("express")
const app = express()
const middleware = require("./middleware.js")

app.use(middleware({ option1: "one", option2: "two" }))	
```

### 内置中间件

#### express.static

加载静态资源。

```ts
const express = require("express")
const app = express()

const static = express.static

app.use(static("./static")) // 设置静态资源目录
```

#### express.Router

**一级路由**

```ts
// router.js
const express = require("express")

const router = express.Router()

router.get("/home", (req, res) => {})

router.get("/user", (req, res) => {})

module.exports = router
```

```ts
const express = require("express")
const app = express()
const router = require("./router.js")

app.use(router)
```

**二级路由**

```ts
// routers/adminRouter.js
const express = require("express")
const app = express()

const adminRouter = express.Router()

adminRouter.get("/home", (req, res) => {})

adminRouter.get("/user", (req, res) => {})

module.exports = adminRouter
```

```ts
const express = require("express")
const app = express()
const adminRouter = require("./routers/adminRouter.js")

app.use("/admin" /* 路由前缀 */, adminRouter)
```

### 第三方中间件

#### body-parser

解析请求体中的数据，并转换为对象。

```ts
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

app.post("/post", (req, res) => {
  req.body // { username: 'xiaoming', age: '25' }
})
```

#### cookie-parser

解析请求头中的 Cookie。

```ts

const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

app.use(cookieParser())

app.get("/get-cookie", (req, res) => {
  req.cookies // { username: 'admin', password: '123' }
})
```

#### express-session

处理 Session。

```ts
const express = require("express")
const app = express()
const session = require("express-session")

app.use(session({ /* options */ }))

app.get("get-session", (req, res) => {
  req.session.username // admin
})
```

## 模板引擎

### 浏览器渲染

```ts
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

```ts
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

```ts
// 客户端
document.cookie = "username=admin"

// 服务器
app.get("set-cookie", (req, res) => {
  res.cookie("username", "admin", { httpOnly: true /* 设置为只能由服务器访问 */ })
})
```

持久性 Cookie：使用 expires 设置过期时间，不推荐。

```ts
// 客户端
document.cookie = "username=admin; expires=Fri, 31 Dec 2023 23:59:59 GMT"

// 服务器
app.get("set-cookie", (req, res) => {
  res.cookie("username", "admin", { expires: new Date(2023, 11, 31) })
})
```

持久性 Cookie：使用 Max-Age 设置有效期（s）。

```ts
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

```ts
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

```ts
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

```ts
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

```ts
app.get("/set-session", (req, res) => {
  req.session.username = "admin"
})
```

#### 获取 Session

Session 存储在服务器，只能由服务器访问。

```ts
app.get("/get-session", (req, res) => {
  req.session.username // admin
})
```

#### 删除 Session

```ts
app.get("/del-session", (req, res) => {
  req.session.destroy() // 删除所有 Session
})
```

## JWT

### 加密与解密

加密：`jwt.sign(payload, secretOrPrivateKey, [options, callback])`

解密：`jwt.verify(token, secretOrPublicKey, [options, callback])`

```ts
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

```ts
app.post("/login", (req, res) => {
  if (true /* 用户名密码正确 */) {
    const token = jwt.sign(data, "secret", { expiresIn: "7 days" })
    
    res.send({ status: 200, data: { token } })
  }
})
```

### 客户端携带

客户端接收到 token 后在本地存储，并在下次请求（登录或路由跳转）时携带。

```ts
fetch("http://127.0.0.1:3000/user", {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${ token }` // Bearer 是一种身份验证方案
  }
})
```

### 服务器验证

```ts
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

```ts
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
