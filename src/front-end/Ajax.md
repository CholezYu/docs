---
title: Ajax
icon: ajax
---

## XMLHttpRequest

### 状态码

- readyState：请求状态码

  - 0：XMLHttpRequest 实例化对象被创建

  - 1：调用了 open()，可以使用 `setRequestHeader()` 设置请求头

  - 2：调用了 send()，响应头被接收

  - 3: 正在接收响应体中的部分数据

  - 4: Ajax 请求完成，响应报文被全部接收

- status：响应状态码

  - 200：请求成功

  - 301：永久重定向

  - 302：临时重定向

  - 304：读取缓存

  - 400：请求出现语法错误

  - 403：拒绝访问

  - 404：请求资源不存在

  - 500：服务器执行过程中出现错误

  - 501：服务器内部错误

  - 503：服务器由于各种原因停止运行，无法处理请求

### Get 请求

```js
// 创建 xhr 对象
const xhr = new XMLHttpRequest()

// 初始化请求
xhr.open("get", "http://127.0.0.1:8000/user")

// 发送请求
xhr.send()

// 监听请求状态码
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.responseText) // JSON
  }
}

// or
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.responseText)
  }
}
```

### Post 请求

```js
const xhr = new XMLHttpRequest()

xhr.open("post", "http://127.0.0.1:8000/user")

xhr.setRequestHeader("Content-Type", "application/json")

xhr.send(JSON.stringify({ name: "xiaoming", age: 20 }))

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.responseText)
  }
}
```

### 异常请求处理

```js
// 设置延迟时间
xhr.timeout = 3000

// 请求超时时触发
xhr.ontimeout = () => {}

// 请求取消时触发
xhr.onabort = () => {}

// 取消发送请求
xhr.abort()

// 网络异常时触发
xhr.onerror = () => {}
```

### 上传文件

```js
// 获取文件对象
const imgFile = fileEle.files[0]

// 创建 formdata 对象
const form = new FormData()

// 将文件对象添加到 formdata 对象中
form.append("img", imgFile)

// 将 formdata 对象发送给服务器
const xhr = new XMLHttpRequest()

xhr.open("post", "/file")

xhr.send(form)

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.responseText)
  }
}
```

## Fetch

### Get 请求

Promise 风格

```js
fetch("http://127.0.0.1:8000/user").then(
  result => {
    if (result.status >= 200 && result.status < 300) {
      return result.json()
    }
  }
).then(
  result => {
    console.log(result.data)
  }
)
```

async & await 风格

```js
const request = async () => {
  const result = await (await fetch("http://127.0.0.1:8000/user")).json()
  
  console.log(result.data)
}
```

### Post 请求

```js
fetch("http://127.0.0.1:8000/user", {
  method: "post",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({
    // json data
  })
})
```

### 取消请求

```js
const controller = new AbortController()

fetch("http://127.0.0.1:8000/user", {
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

  ```js
  axios.get("http://127.0.0.1:8000/user")
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

  ```js
  axios.post("http://127.0.0.1:8000/user", {
    username: "admin",
    nickname: "超级管理员"
  })
  ```

### 请求配置

```js
{
  url: "/user", // 请求地址

  method: "get", // 请求方法

  baseURL: "http://127.0.0.1:8000", // 基础路径, 与 url 拼接

  headers: {}, // 请求头

  params: {}, // 请求参数

  data: {}, // 请求体

  timeout: 1000, // 延迟时间

  responseType: "json", // 响应体数据类型
}
```

### 响应信息

```js
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

```js
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

## 跨域

### 同源策略

同源策略指的是：请求时浏览器和服务器的协议、域名、端口必须保持一致。

不同源的网站不能进行资源交互：

- 无法发送 Ajax 请求

- 无法操作 DOM

- 无法读取 Cookie、LocalStorage、IndexedDB

### Jsonp

使用：`<script>` 标签不受同源策略的影响，可以通过 src 属性携带执行代码发送跨域请求。

优点：没有兼容性问题。

缺点：只支持 Get 请求；可能会存在恶意代码。

### CORS

使用：跨域资源共享。由 **服务器** 设置一组响应头字段实现跨域。

优点：CORS 通信与同源的 Ajax 通信没有差别，代码完全一样，容易维护；支持所有类型的 HTTP 请求。

缺点：不支持 IE10 以下的浏览器；第一次发送非简单请求时会多一次请求；需要服务器配合。

```js
// 允许的 URL
res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8000")

// 允许的请求方式
res.setHeader("Access-Control-Allow-Methods", "*")

// 允许的请求头
res.setHeader("Access-Control-Allow-Headers", "Content-type")
```

参考：[跨源资源共享（CORS） - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)

### Proxy

使用：浏览器有跨域限制，但是服务器没有跨域问题。所以可以由代理服务器向目标服务器请求资源再返回给客户端。

优点：服务器代理是目前最好的跨域解决方案。

Vue-CLI

```js
/* vue.config.js */
const { defineConfig } = require("@vue/cli-service")

module.exports = defineConfig({
  devServer: {
    host: "127.0.0.1",
    port: 8888,
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
    port: 8888,
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
