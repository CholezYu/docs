---
title: Ajax
icon: ajax
date: 2024-04-22
---

## TCP/IP

### 四层模型

- 网络接口层（物理层）/数据链路层

- 网络层

- 传输层

- 应用层（会话层，表示层，应用层）

### 三次握手

- 浏览器向服务器发送一个 SYN 请求数据包，确认浏览器的发送能力正常；

- 服务器向浏览器发送 SYN 请求数据包和 ACK 应答数据包，确认服务器的收发能力正常；

- 浏览器向服务器发送一个 ACK 应答数据包，确认浏览器的接收能力正常。

### 四次挥手

- 浏览器向服务器发送 FIN 数据包请求断开连接；

- 服务器向浏览器发送 ACK 应答数据包表示收到并同意断开连接请求；

- 服务器等待数据处理完毕，向浏览器发送 FIN 数据包请求断开连接；

- 浏览器向服务器发送 ACK 应答数据包表示收到并同意断开连接请求。

### 强制缓存、协商缓存

- 缓存是什么？

  强制缓存和协商缓存是浏览器的两种缓存策略。合理设置缓存可以减少不必要的网络传输，提高网页加载速度。

- 强制缓存：

  浏览器第一次发送请求时，服务器会将强制缓存字段 `Cache-Control` 或 `Expires` 携带响应头中，它们分别表示缓存的有效时间和绝对过期时间。告诉浏览器将该资源缓存在本地。浏览器再次请求该资源时，会先检查本地缓存是否有效。如果有效，浏览器直接从缓存中获取资源，而不会向服务器发送请求；如果无效，则进行协商缓存。

- 协商缓存：

  强制缓存失败后，浏览器会携带缓存标识向服务器发送请求，服务器根据缓存标识决定是否使用缓存。当浏览器第一次发送请求时，服务器将协商缓存字段 `Etag` 和 `Last-Modified` 携带在响应头返回，它们分别表示文件唯一标识和资源最后修改时间。当浏览器再次请求该资源时，会将 `If-None-Match` 字段和 `If-Modified-Since` 字段携带在请求头中，它们的值分别为上次获取资源时的 `Etag` 和 `Last-Modified` 值。服务器收到请求后，会将 `If-None-Match` 与文件唯一标识进行比较，如果相等，说明请求的是同一资源；再将 `If-Modified-Since` 与资源最后修改时间进行比较，如果时间一致，说明资源未修改，服务器响应 304 状态码，浏览器会直接从缓存获取资源；如果时间不一致，说明资源已修改，服务器会响应 200 状态码，并返回新的资源，并在响应头携带新的强制缓存和协商缓存字段。

- `Cache-Control: nocache` 表示不进行强制缓存，强制向服务器发送请求，可能会命中协商缓存。

- `Cache-Control: no-store` 禁止所有缓存。

### 在浏览器输入URL并按下回车发生了什么

- 首先解析 URL 是否合法，如果不合法，就会使用搜索引擎搜索 "URL" 的内容。

- 然后判断是否进行强制缓存。

- 再进行 DNS 解析，将域名解析为 IP 地址。

  - 判断浏览器是否有 DNS 缓存；

  - 判断电脑中是否有 DNS 缓存；

  - 判断路由器是否有 DNS 缓存；

  - 判断网络运营商是否有 DNS 缓存，这个是需要花钱买 DNS 解析服务的；

  - 去根域名服务器递归查询 DNS，最终返回 IP 地址。
  
- 再进行 TCP 三次握手，确保通信双方的收发能力正常。

- 浏览器将数据以请求报文的形式发送给服务器。

- 服务器将数据以响应报文的形式返回给浏览器。

- 浏览器根据响应数据，解析并渲染页面：

  - HTML 解析器会将 html 解析成 DOM 树；
  
  - CSS 解析器会将 css 解析成 CSSOM 树；
  
  - DOM 树和 CSSOM 树结合生成 render 树；
  
  - 浏览器根据 render 树，进行布局和渲染；
  
  - 如果遇到 js 代码，渲染主线程会处于阻塞状态，页面暂停渲染，等待 JS 引擎线程解析 js 代码；
  
  - 如果 js 修改了 DOM 元素，则重新构建 DOM 树；
  
  - 如果 js 修改了样式，则重新构建 CSSOM 树；
  
  - DOM 树和 CSSOM 树重新结合生成 render 树；
  
  - 浏览器根据 render 树，重新布局和渲染，这个过程也叫作[重绘重排](./CSS.md#重绘重排)。
  
- 最后进行 TCP 四次挥手，彻底断开浏览器和服务器的连接。

## HTTP

HTTP 是超文本传输协议，是浏览器与服务器通信的协议。

协议通信的内容称为报文。浏览器发送给服务器的报文称为请求报文，服务器返回给浏览器的报文称为响应报文。

### 请求报文

- 由请求首行、请求头、空行、请求体组成。

- 请求首行包括请求方式、请求地址、协议版本。

- 请求头：

  - `Accept`：浏览器可以接收的数据类型。

  - `User-Agent`：浏览器类型。

  - `Content-Type`：请求体的数据类型。

  - `Referer`：请求来源地址。

  - `Cookie`：可以携带数据发送给服务器。

- 空行用于分隔请求头和请求体。

- 请求体就是浏览器携带的数据。一般用于 Post 请求，Get 请求的请求体为空。

### 响应报文

- 由响应首行、响应头、空行、响应体组成。

- 响应首行包括协议版本、响应状态码、状态码信息。

- 响应头：

  - `Access-Control-Allow-Origin`：允许跨域的地址。

  - `Content-Type`：响应体的数据类型。

  - `Cache-Control`：强制缓存字段。

  - `Etag / Last-Modifined`：协商缓存字段。

- 空行用于分隔响应头和响应体。

- 响应体就是服务器返回的数据。

### 响应状态码

- 1xx：请求正在处理

- 2xx：请求处理成功

  - 200：请求成功

- 3xx：请求重定向，需要进一步处理

  - 301：永久重定向

  - 302：临时重定向

  - 304：重定向到浏览器缓存

- 4xx：客户端错误

  - 400：请求出现语法错误

  - 401：未认证、未授权

  - 403：拒绝访问

  - 404：找不到资源

  - 407：token 无效

- 5xx：服务器错误

  - 500：服务器执行过程中出现错误

  - 501：服务器内部错误
  
  - 502：服务器正在更新
  
  - 503：服务器停机维护或已超载，无法处理请求

### Get vs Post

- 根据规范：Get 用于查询数据；Post 用于添加数据；

- Get 将数据携带在 url 中发送请求；Post 将数据携带在请求体中发送请求；

- Get 携带数据大小有限，因为 url 有长度限制；Post 携带数据大小没有限制；

- Get 有缓存；Post 没有。

## Ajax

### 发送请求

readyState 状态码

- 0：XMLHttpRequest 实例化对象被创建；

- 1：调用 `open()` 初始化请求，可以使用 `setRequestHeader()` 设置请求头；

- 2：调用 `send()` 发送请求，响应被接收；

- 3：正在接收响应体中的数据；

- 4：Ajax 请求完成，响应报文全部被接收。

```ts
// 创建 xhr 对象
const xhr = new XMLHttpRequest()

// Get 请求
xhr.open("get", "http://127.0.0.1:3000/api")
// Post 请求
xhr.open("post", "http://127.0.0.1:3000/api")

// Post 请求需要设置该请求头，通过 JSON 传递数据
xhr.setRequestHeader("Content-Type", "application/json")

// Get 请求
xhr.send()
// Post 请求，可以添加请求体
xhr.send(JSON.stringify({ username: "admin", password: 498642 }))

// 监听请求状态码
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    xhr.responseText // JSON
  }
}) 

// or
xhr.addEventListener("load", () => {
  if (xhr.status === 200) {
    xhr.responseText
  }
})
```

### 监听上传进度

> [!warning]
>
> 只适用于 Post 请求。

```ts
xhr.addEventListener("progress", (event: ProgressEvent) => {
  event.loaded // 当前进度
  event.total // 总进度
})
```

### 设置超时时间

```ts
// 设置超时时间
xhr.timeout = 3000

// 请求超时时触发
xhr.addEventListener("timeout", () => {})
```

### 中断请求

```ts
// 请求中断时触发
xhr.addEventListener("abort", () => {})

// 取消请求
xhr.abort()
```

### 请求异常

```ts
// 请求异常时触发
xhr.addEventListener("error", () => {})
```

### 上传文件

```ts
// 获取文件对象 `<input id="file" type="file" />`
const file = document.querySelector("#file")!

file.addEventListener("change", () => {
  const formData = new FormData()
  formData.append("file", file.files[0])
  
  const xhr = new XMLHttpRequest()
  xhr.open("post", "http://127.0.0.1:3000/upload")
  // 浏览器会自动设置 form-data 请求头
  // xhr.setRequestHeader("Content-Type", "multipart/form-data")
  xhr.send(formData)
  
  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      xhr.responseText
    }
  })
})
```

## Fetch

### Get 请求

Promise 风格。

```ts
fetch("http://127.0.0.1:3000/api")
  .then(result => result.json())
  .then(result => {
    result.data
  })
```

async & await 风格。

```js
const request = async () => {
  const result = await (await fetch("http://127.0.0.1:3000/api")).json()
  result.data
}
```

### Post 请求

```ts
fetch("http://127.0.0.1:3000/api", {
  method: "post",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    // json data
  })
})
```

### 取消请求

```ts
const controller = new AbortController()

fetch("http://127.0.0.1:3000/api", {
  signal: controller.signal
})

// 超过 3 秒, 取消请求
setTimeout(() => {
  controller.abort()
}, 3000)

// 点击取消请求
element.onclick = () => {
  controller && controller.abort()
}
```

## Axios

### Get 请求

- 参数：

  - url：请求地址

  - config：请求配置

- 返回值：

  - data：响应体

  - headers：响应头

  - status：状态码

- 用法：`axios.get(url, [config])`

  ```ts
  axios.get("http://127.0.0.1:3000/api")
  ```

### Post 请求

- 参数：

  - url：请求地址

  - data：请求体

  - config：请求配置

- 返回值：

  - data：响应体

  - headers：响应头

  - status：状态码

- 用法：`axios.post(url, [data], [config])`

  ```ts
  axios.post("http://127.0.0.1:3000/api", {
    username: "admin",
    nickname: "超级管理员"
  })
  ```

### 请求配置

```ts
{
  url: "/api", // 请求地址

  method: "get", // 请求方法

  baseURL: "http://127.0.0.1:3000", // 基础路径, 与 url 拼接

  headers: {}, // 请求头

  params: {}, // 请求参数

  data: {}, // 请求体

  timeout: 1000, // 延迟时间

  responseType: "json" // 响应体数据类型
}
```

### 响应信息

```ts
{
  data: {}, // 响应体

  status: 200, // 响应状态码

  statusText: "OK", // 响应状态码信息

  headers: {}, // 响应头

  config: {}, // 请求时配置

  request: {} // 生成响应的请求 (xhr)
}
```

### 实例和拦截器

> 队列：[请求拦截器3，请求拦截器2，请求拦截器1，axios, 响应拦截器1，响应拦截器2，响应拦截器3]

```ts
// 创建实例
const instance = axios.create({
  baseURL: "/dev-api",
  timeout: 3000,
  headers: {}
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    config.headers["Authorization"] = store.state.user.token
    
    return config
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    if (response.data.code === 200) {
      return response.data.data
    }
    else {
      return Promise.reject(response.data)
    }
  },
  error => Promise.reject(error)
)
```

### 监听上传进度

```ts
import { axios, type AxiosProgressEvent } from "axios"

axios.post("http://127.0.0.1:3000/api", {
  username: "admin",
  nickname: "超级管理员"
}, {
  onUploadProgress: (event: AxiosProgressEvent) => {
    event.loaded // 当前进度
    event.total // 总进度
  }
})
```

### 上传文件

```ts
import { axios, type AxiosProgressEvent } from "axios"

const apiUpload = (data: any) => {
  const formData = new FormData()
  formData.append("file", data.file)
  
  return axios.post("http://127.0.0.1:3000/ipload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: (event: AxiosProgressEvent) => {
      /* 监听上传进度 */
    }
  })
}
```

## 跨域

### 同源策略

同源策略：发送请求时，浏览器和服务器的**协议、域名、端口**必须保持一致。

不同源的网站不能进行资源交互：

- 无法发送 Ajax 请求；

- 无法操作 DOM；

- 无法读取 Cookie、Storage、IndexedDB。

### JSONP

利用 `<script>` 标签的 src 属性不受同源策略限制的特性，进行跨域请求。

前端定义一个函数发送给后端，后端将要返回的数据注入到这个函数的参数里面，再返回给前端。

优点：没有兼容性问题。

缺点：只支持 Get 请求；可能会存在恶意代码。

### CORS

跨域资源共享。后端设置 `Access-Control-Allow-Origin` 响应头，也就是允许跨域的白名单。

优点：前端不需要任何操作；支持所有请求方式。

缺点：不支持 IE10 以下的浏览器。

```js
// 允许的 URL
res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8000")

// 允许的请求方式
res.setHeader("Access-Control-Allow-Methods", "*")

// 允许的请求头
res.setHeader("Access-Control-Allow-Headers", "Content-Type")
```

参考：[跨源资源共享（CORS） - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)

### Proxy

正向代理。前端配置代理服务器，它会向目标服务器请求资源再返回给客户端。

优点：服务器代理是开发环境下最好的跨域解决方案。

缺点：只适用于开发环境，生产环境下还需要配置 Nginx。

Vue-CLI

```js
/* vue.config.js */
const { defineConfig } = require("@vue/cli-service")

module.exports = defineConfig({
  devServer: {
    host: "127.0.0.1",
    port: 8000,
    proxy: {
      "/dev-api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/dev-api": ""
        }
      }
    }
  }
})
```

Vite

```ts
/* vite.config.ts */
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 8000,
    proxy: {
      "/dev-api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dev-api/, "")
      }
    }
  }
})
```

### Nginx

反向代理。
