---
title: Ajax
icon: ajax
date: 2024-05-03
description: Ajax
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
  
  - 浏览器根据 render 树，重新布局和渲染，这个过程也叫作[重绘重排](/base/css.md#重绘重排)。
  
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

## Xhr

### 发送请求

readyState 状态码

- 0：XMLHttpRequest 实例化对象被创建；

- 1：调用 `open()` 初始化请求，可以通过 `setRequestHeader()` 设置请求头；

- 2：调用 `send()` 发送请求，响应被接收；

- 3：正在接收响应体中的数据；

- 4：Ajax 请求完成，响应报文全部被接收。

```ts
const request = (url: string) => {
  // 创建 xhr 对象
  const xhr = new XMLHttpRequest()
  
  // Get 请求
  xhr.open("get", url)
  // Post 请求
  xhr.open("post", url)
  
  // Post 请求需要设置该请求头，通过 JSON 传递数据
  xhr.setRequestHeader("Content-Type", "application/json")
  
  // Get 请求的请求体为空
  xhr.send()
  // Post 请求可以添加请求体
  xhr.send(JSON.stringify({
    // json data
  }))
  
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
}
```

### 监测上传进度

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
xhr.addEventListener("timeout", () => {
  // ...
})
```

### 中断请求

```ts
// 请求中断时触发
xhr.addEventListener("abort", () => {
  // ...
})

// 取消请求
xhr.abort()
```

### 请求异常

```ts
// 请求异常时触发
xhr.addEventListener("error", () => {
  // ...
})
```

### 上传文件

```ts
const request = (url: string) => {
  // 获取文件对象 `<input type="file" />`
  const file = document.getElementById("file")
  
  file.addEventListener("change", () => {
    const formData = new FormData()
    formData.append("file", file.files[0])
    
    const xhr = new XMLHttpRequest()
    xhr.open("post", url)
    // 浏览器会自动设置 form-data 请求头
    // xhr.setRequestHeader("Content-Type", "multipart/form-data")
    xhr.send(formData)
    
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        xhr.responseText
      }
    })
  })
}
```

## Fetch

### 发送请求

Promise 风格。

```ts
const request = (url: string) => {
  // Get 请求
  fetch(url)
    .then(response => response.json())
    .then(response => {
      response.data
    })
  
  // Post 请求
  fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // json data
    })
  })
}
```

async & await 风格。

```js
const request = async (url: string) => {
  const response = await (await fetch(url)).json()
  response.data
}
```

### 监测上传进度

```ts
const request = (url: string) => {
  fetch(url)
    .then(async response => {
      // 拷贝一份，用于计算上传进度
      const response = response.clone()
      
      // 流
      const reader = response.body.getReader()
      // 总字节
      const total = response.headers.get("Content-Length")
      // 记录完成的进度
      let loaded = 0
      
      while (true) {
        const { done, value } = await reader.read()
        if (done) {
          break
        }
        loaded += value.length
      }
      
      return response.json()
    })
    .then(response => {
      response.data
    })
}
```

### 取消请求

```ts
const request = (url: string) => {
  const controller = new AbortController()
  
  fetch(url, { signal: controller.signal })
  
  // 超过 3 秒, 取消请求
  setTimeout(() => {
    controller.abort()
  }, 3000)
  
  // 点击取消请求
  const stop = () => {
    controller && controller.abort()
  }
}
```

## Axios

### 发送请求

```ts
import axios from "axios"

const request = (url: string) => {
  // Get 请求
  axios.get(url)
  
  // Post 请求
  axios.post(url, {
    // json data
  })
}
```

### 拦截器

```ts
import axios from "axios"

// 创建实例
const instance = axios.create({
  baseURL: "/api",
  timeout: 3000
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    config.headers["Token"] = storage.get(STORAGE_KEY.TOKEN)
    return config
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    if (response.data.code === RESPONSE_CODE.SUCCESS) {
      return response.data.data
    }
    else {
      return Promise.reject(response.data)
    }
  },
  error => Promise.reject(error)
)
```

### 监测上传进度

``` ts
import axios, { type AxiosProgressEvent } from "axios"

const request = (url: string) => {
  axios.post(url, {
    // json data
  }, {
    onUploadProgress: (event: AxiosProgressEvent) => {
      event.loaded // 当前进度
      event.total // 总进度
    }
  })
}
```

### 上传文件

```ts
import axios, { type AxiosProgressEvent } from "axios"

const request = (url: string, data: any) => {
  const formData = new FormData()
  formData.append("file", data.file)
  
  return axios.post(url, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: (event: AxiosProgressEvent) => {
      /* 监测上传进度 */
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

正向代理，**开发环境**跨域。前端配置代理服务器，它会向目标服务器请求资源再返回给客户端。

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

反向代理，**生产环境**跨域。后端配置 Nginx 服务。

```nginx
# nginx/conf/nginx.conf

server {
  listen       5000;
  server_name  localhost;
  
  location /api {
    root   /app/src/dist;
    index  index.html index.htm;
    proxy_pass http://107.172.103.215:3000;
  }
}
```

## 实时数据推送

### Server-Send Events

SSE（Server-Send Events）是一种用于实现服务器主动向客户端推送数据的技术，也被称为“事件流”。

利用其长连接特性，在客户端与服务器之间建立持久化的连接，服务器可以向客户端实时推送数据。

> [!warning]
>
> SSE 的不足：它是单工通讯，只能服务器向客服端推送数据；只能接受 Get 请求。

```ts
const sse = new EventSource(url, options)

sse.readyState // 连接状态：CONNECTING 正在连接，OPEN 已经连接，CLOSED 连接已关闭
sse.close() // 断开SSE连接，停止接收服务器发送的数据
sse.onopen // 监听服务器连接成功
sse.onerror // 监听服务器连接失败或接收数据错误
sse.onmessage // 监听服务器发送的数据（如果后端没有设置名称，默认为 message 事件）
```

```ts
/* Client */

const sse = new EventSource("http://127.0.0.1:3000/api")

// 监听默认的 message 事件
sse.addEventListener("message", (event: Event) => {
  event.data // 接收的数据
})

// 监听自定义的 stream 事件
sse.addEventListener("stream", (event: Event) => {
  event.data // 接收的数据
})
```

```ts
/* Server nodejs */

import express from "express"

const app = express()

app.get("/api", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream", // ！设置对应的请求头
    "Connection": "close"
  })
  
  const data = fs.readFileSync("./index.txt", "utf-8")
  const total = data.length
  let current = 0
  const timer = setInterval(() => {
    if (current > total) {
      return clearInterval(timer)
    }
    res.write(`event: stream\n`) // 自定义事件名称，前端需要使用 stream 事件监听数据
    res.write(`data: ${ arr[current] }\n\n`)
    current++
  }, 100)
})

app.listen(3000)
```

### WebSocket

WebSocket 是全双工通讯协议，服务器和客户端可以在任何时间向对方推送数据。

#### 简单案例

开启 WebSocket 实时接收数据。连接成功后还需要持续检测是否断线，如果断开连接，就会触发 close 事件，在 close 事件中进行重连。但是弱网、断网情况下，不会触发 close 事件，所以就需要使用心跳检测机制检测是否断线。

#### 心跳检测

客户端每隔一分钟向服务器发送一个特定的信号，比如 ping；服务器要立即返回一个信号，比如 pong。客户端需要检测在规定时间内（5 秒）是否收到信号，如果客户端收到了信号，说明连接没问题，开始下一次心跳检测；如果没有收到信号，说明连接有问题，需要重连。

#### 断线重连

设置最大重连次数，每隔一段时间重连一次，如果超过最大次数，就不重连了。

```ts
/* useSocket.ts */

class Socket {
  HEART_CHECK_TIME = 1000 // 心跳检测间隔时间
  HEART_CHECK_END_TIME = 5000 // 心跳检测接收服务器信号时间
  success = false // 心跳检测是否成功
  
  RECONNECT_TIME = 30000 // 断线重连间隔时间
  MAX_RECONNECT_COUNT = 5 // 最大重连次数
  reconnectCount = 0 // 当前重连次数
  reconnectId: NodeJS.Timeout | undefined
  
  url: string
  ws: WebSocket
  
  callbacks: { (data: any): void }[] = []
  
  constructor(url: string) {
    this.url = url
    this.ws = this.initSocket()
  }
  
  initSocket() {
    // 创建一个 WebSocket 实例
    const ws = new WebSocket(this.url)
    
    // WebSocket 连接成功
    ws.addEventListener("open", () => {
      this.ws.addEventListener("message", this.onPong) // 监听 pong 信号
      this.keepAlive() // 心跳检测
      this.reconnectCount = 0 // 重置重连次数
    })
    
    // WebSocket 断开连接
    ws.addEventListener("close", () => {
      this.reconnect() // 开始重连
    })
    
    // WebSocket 连接失败
    ws.addEventListener("error", (error) => {
      console.log("error", error)
    })
    
    ws.addEventListener("message", ({ data }) => {
      if (data === "pong") return
      this.callbacks.forEach(cb => cb(JSON.parse(data)))
    })
    
    return ws
  }
  
  // 接收消息
  onMessage(cb: { (data: any): void }) {
    this.callbacks.push(cb)
  }
  
  // 删除消息
  removeMessage(cb?: { (data: any): void }) {
    if (!cb) {
      this.callbacks = []
      return
    }
    
    this.callbacks = this.callbacks.filter(callback => callback !== cb)
  }
  
  // 监听 pong 信号
  onPong = ({ data }: MessageEvent) => {
    if (data === "pong") {
      this.success = true
    }
  }
  
  // 心跳检测
  keepAlive() {
    setTimeout(() => {
      // 向服务器发送 ping 信号
      this.ws.send("ping")
      
      // 在 5s 内检测是否接收到 pong 信号
      setTimeout(() => {
        if (this.success) {
          this.success = false
          this.keepAlive() // 开始下一次心跳检测
        }
        else {
          this.ws.close() // 关闭 WebSocket
          this.reconnect() // 开始重连
        }
      }, this.HEART_CHECK_END_TIME)
    }, this.HEART_CHECK_TIME)
  }
  
  // 断线重连
  reconnect() {
    // 超过次数限制，就不重连了
    if (this.reconnectCount >= this.MAX_RECONNECT_COUNT) return
    
    clearTimeout(this.reconnectId)
    this.reconnectId = setTimeout(() => {
      this.reconnectCount++
      this.ws = this.initSocket()
    }, this.RECONNECT_TIME)
  }
}

export default function useSocket(url: string) {
  return new Socket(url)
}
```

#### 虚拟列表

假如有一万条数据需要处理，如果每条数据都生成一个元素，那么就会造成页面卡死。

降采样策略：我们可以不用渲染全部数据，只渲染能看见的二十条数据，其他数据替换为一个空元素进行占位，这个空元素的大小与原本需要渲染的数据的大小相同。

设置渲染数据范围：我们需要知道这二十条数据在总数据列表中的开始索引和结束索引，那么这个空元素的高度就是开始索引乘数据的高度。

控制数据的变化：用平移来控制容器的滚动，每平移一条数据的高度，开始索引就加一，从而实现数据的滚动效果。

```vue
<script setup lang="ts">
  import { ref, computed, onBeforeUnmount } from "vue"
  import useSocket from "./useSocket.ts"
  
  interface Item {
    id: string
    date: string
    address: string
    number: number
  }
  
  const virtualList = ref<Item[]>([])
  
  const startIndex = ref(0)
  const endIndex = ref(20)
  
  const realList = computed(() => virtualList.value.slice(startIndex.value, endIndex.value))
  
  const socket = useSocket("ws://localhost:8000")
  
  socket.onMessage((data: Item[]) => {
    virtualList.value = [...virtualList.value, ...data]
    start()
  })
  
  const top = ref(0)
  
  let timer: NodeJS.Timeout
  let isMouseEnter = false
  
  const start = () => {
    if (virtualList.value.length <= 23 || isMouseEnter) return
    
    clearInterval(timer)
    timer = setInterval(() => {
      top.value -= 0.6
      
      startIndex.value = Math.abs(Math.ceil(top.value / 30))
      endIndex.value = startIndex.value + 20
    }, 1000 / 60)
  }
  
  onBeforeUnmount(() => {
    clearInterval(timer)
  })
  
  const onEnter = () => {
    isMouseEnter = true
    clearInterval(timer)
  }
  
  const onLeave = () => {
    isMouseEnter = false
    start()
  }
</script>

<template>
  <div>
    <h3>需求人数</h3>
    
    <div class="container">
      <header class="row">
        <div>日期</div>
        <div>地址</div>
        <div>人数</div>
      </header>
      
      <main class="main" @mouseenter="onEnter" @mouseleave="onLeave">
        <div :style="{ transform: `translateY(${ top }px)` }">
          <div :style="{ height: startIndex * 30 + 'px' }"></div>
          
          <div class="row" v-for="{ id, date, address, number } in realList" :key="id">
            <div>{{ date }}</div>
            <div>{{ address }}</div>
            <div>{{ number }}</div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
  .container .main {
    overflow: hidden;
  }
  
  .container .main .row {
    height: 30px;
  }
</style>
```
