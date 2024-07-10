---
title: HTML5
icon: html
date: 2024-07-10
description: HTML5
---

## 语义化标签

### 布局标签

```html
<!-- 头部 -->
<header></header>

<!-- 导航 -->
<nav></nav>

<!-- 主体 -->
<main></main>

<!-- 分区 -->
<section></section>

<!-- 文章、评论等 -->
<article></article>

<!-- 侧边栏 -->
<aside></aside>

<!-- 底部 -->
<footer></footer>
```

### 其他标签

```html
<!-- 手机电量 -->
<meter max="100" min="0" low="20" high="80" value="90"></meter>

<!-- 进度条 -->
<progress max="100" value="30"></progress>

<!-- 搜索框 -->
<datalist>
  <option value=""></option>
</datalist>

<!-- 标记文本 -->
<mark></mark>
```

## 表单控件

### 表单标签

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

### 表单属性

- autocomplete：显示历史输入（必须设置 name 属性才会生效）

  - on：开启（默认）

  - off：关闭

- autofocus：自动获取输入框的焦点（无属性值）

- required：输入框不能为空（无属性值）

- readonly：输入框中的值是只读的，不能被修改（无属性值）

- multiple：可以选择多个 option（无属性值）

- `<input type="file" accept="image/*">`：接受的图片格式

- `<input type="file" capture="camera">`：调用相机权限

- `<input type="file" capture="photo">`：调用相册权限

## 媒体标签

### 音频标签

```html
<!-- 音频 -->
<audio src=""></audio>
```

- src：音频路径（必要）

- controls：允许用户控制播放（无属性值）

- autoplay：自动播放（无属性值）

- muted：静音（无属性值）

- loop：循环播放（无属性值）

### 视频标签

```html
<!-- 视频 -->
<video src=""></video>
```

- src：视频路径（必要）

- controls：允许用户控制播放进度条（无属性值）

- autoplay：自动播放（无属性值，必须静音）

- muted：静音（无属性值）

- loop：循环播放（无属性值）

- poster：海报帧的路径，显示视频封面（值为图片地址）

- preload：视频预加载模式

  - none：不进行预加载

  - metadata：加载部分视频信息

  - auto：预加载

## Web API

### DOM

操作 HTML 文档的结构、样式和内容。

[DOM API | JavaScript](/base/javascript.md#dom)

### Fetch

现代网络请求方式。

[Fetch API | Ajax](/core/ajax.md#fetch)

### Canvas

允许在 `<canvas>` 元素上绘制 2D 图形。包括绘制矩形、路径、文本、图像等。

```ts
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// 设置填充颜色为红色
ctx.fillStyle = "red"

// 在画布上绘制一个红色的矩形
ctx.fillRect(10, 10, 100, 100)
```

### Web Workers

允许在后台线程中运行 JavaScript 代码，不会阻塞主线程。适用于处理大量数据和执行复杂计算。

```ts
const worker = new Worker("worker.ts")

// 发送消息到 Worker 线程
worker.postMessage("Hello, Worker!")

// 接收 Worker 线程的消息
worker.addEventListener("message", event => {
  console.log(event.data)
})
```

### WebSocket

提供双向通信通道，用于实时数据传输。常用于聊天室、游戏等需要实时更新的应用。

```ts
const socket = new WebSocket("ws://localhost:8000")

// 连接成功
socket.addEventListener("open", event => { /* 初始化操作 */ })

// 接收消息
socket.addEventListener("message", event => {
  console.log(event.data)
})

// 断开连接
socket.addEventListener("close", event => { /* 重新连接 */ })

// 连接失败
socket.addEventListener("error", event => { /* 检查网络 */ })
```

### File

允许网页访问用户的文件系统，读取文件内容。适用于文件上传、读取本地文件等功能。

```ts
const file = document.getElementById("fileInput")

fileInput.addEventListener("change", event => {
  const file = event.target.files[0]
  const reader = new FileReader()
  reader.onload = event => {
    console.log(event.target.result)
  }
  // 读取文件内容为文本
  reader.readAsText(file)
})
```

### History

允许操作浏览器历史记录。包括 `popstate` 事件和 `pushState`、`replaceState` 方法。

> [!tip]
>
> Vue Router 的 History Mode 是基于此实现的。

```ts
// 监听浏览器历史记录改变
addEventListener("popstate", event => { /* ... */ })

// 向浏览器历史记录中添加一个新状态，实现无刷新跳转
// => router.push("/home")
history.pushState(null, null, "/home")

// 替换当前的历史记录状态
// => router.replace("/home")
history.replaceState(null, null, "/home")
```

### Clipboard

读写剪贴板的内容。适用于实现复制、粘贴功能。

```ts
const copyText = (text: string) => {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text)
  }
  // 兼容处理
  return new Promise<void>((resolve, reject) => {
    try {
      const textarea = document.createElement("textarea")
      document.body.appendChild(textarea)
      textarea.value = value
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      resolve()
    }
    catch (error) {
      reject(error)
    }
  })
}
```

### Service Workers

提供一种在后台处理网络请求、缓存资源和执行其他任务的能力。适用于构建离线 Web 应用和提高性能。

```ts
if ("serviceWorker" in navigator) {
  const registration = await navigator.serviceWorker.register("service-worker.ts")
  console.log(registration.scope)
}
```

### Mutation Observer

监测 DOM 树中的更改。比传统的 DOM 事件监听更高效，适用于复杂的 DOM 操作。

```ts
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    console.log("Mutation observed: ", mutation);
  })
})

// 配置观察选项
const config = { attributes: true, childList: true, subtree: true }

// 观察一个元素
observer.observe(document.getElementById("obElement"), config)
```

### Intersection Observer

监测一个元素相对于其祖先元素或顶级文档视口的可见性变化。适用于懒加载图片、无限滚动等。

```ts
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Element is in view: ", entry.target);
    }
  })
})

// 观察一个元素
observer.observe(document.getElementById("obElement"))
```

### Performance

提供对 Web 应用性能的访问和分析。包括 `Performance.now`、`Performance.mark`、`Performance.measure` 等。

```ts
// 标记一个性能测量点
performance.mark("start")

// 进行一些（耗时）操作
for (let i = 0; i < 1000000; i++) { /* ... */ }

// 标记结束点
performance.mark("end")

// 测量从开始到结束的时间
performance.measure("MyOperation", "start", "end")

// 获取所有性能测量
const measures = performance.getEntriesByType("measure")

console.log(measures)
```

### IndexedDB

提供一个低级 API，用于客户端持久化存储大量结构化数据。适用于离线应用和复杂的数据存储需求。

```ts
// 打开一个名为 "my-db" 的 IndexedDB 数据库
const request = indexedDB.open("my-db", 1)

// 数据库升级时的回调函数
request.addEventListener("upgradeneeded", event => {
  const db = event.target.result
  // 创建一个名为 "users" 的对象存储
  db.createObjectStore("users", { keyPath: "id" })
})

// 数据库打开成功时的回调函数
request.addEventListener("success", event => {
  const db = event.target.result
  const transaction = db.transaction(["users"], "readwrite")
  const store = transaction.objectStore("users")
  // 添加一个用户对象
  store.add({ id: 1, name: "John Doe" })
})
```

### RequestAnimationFrame

以更好的性能执行动画。适合用于实现高效和平滑的动画效果。

在下面这个例子中，`animate` 函数会在每一帧被调用，用于更新动画状态和绘制新的动画帧。

```ts
// 兼容处理
const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))

let animationId = null

const startAnimation = () => {
  const animate = () => {
    // 更新动画状态
    // 绘制动画帧
    // 请求下一帧
    animationId = rAF(animate)
  }
  // 开始动画
  animationId = rAF(animate)
}

const stopAnimation = () => {
  // 取消动画
  cancelAnimationFrame(animationId)
}
```

### Web Animations

直接控制 CSS 动画和 SVG 动画。提供更高的动画性能和控制。

```ts
// 创建一个动画
document.getElementById('animation').animate([
  { transform: "translateY(0px)" },
  { transform: "translateY(100px)" }
], {
  duration: 1000,
  iterations: Infinity
})
```

### Full Screen

允许网页进入全屏模式。适用于视频播放、游戏等。

```ts
// 进入全屏模式
document.getElementById("screen").requestFullscreen()
```

### Screen Orientation

获取和锁定屏幕方向。适用于需要特定方向显示的应用，如游戏和视频播放。

```ts
// 锁定屏幕方向为横向
await screen.orientation.lock("landscape")
console.log("屏幕已锁定")
```

### Geolocation

获取用户的地理位置（需要得到用户的许可）。适用于地图、定位等应用。

> [!warning]
>
> 只支持 HTTPS 和 File 协议。

```ts
navigator.geolocation.getCurrentPosition(position => {
  position /* GeolocationPosition {
    coords: {
      accuracy: 292
      altitude: null
      altitudeAccuracy: null
      heading: null
      latitude: 28.6778185
      longitude: 115.9601825
      speed: null
    },
    timestamp: 1720594636490
  } */
}, positionError => { /* error */ })
```

### Device Orientation <Badge text="实验性" type="info" />

获取设备的方向和运动信息。适用于增强现实（AR）、虚拟现实（VR）和游戏等。

> [!warning]
>
> 只支持带有陀螺仪的设备（手机、平板等移动设备）。
>
> Safari 和微信内部浏览器只支持 HTTPS 协议。

```ts
addEventListener("deviceorientation", event => {
  event /* DeviceOrientationEvent {
    alpha: 0, // Z 轴，设备围绕屏幕中心旋转的角度（指南针），[0, 360)
    beta: 0, // X 轴，设备向前或向后倾斜的角度，[-180, 180]
    gama: 0 // Y 轴，设备向左或向右翻转的角度，[-90, 90]
  } */
})
```

### Battery Status

提供设备电池状态的信息。适用于优化电池消耗的应用。

```ts
// 获取设备电池信息
const battery = navigator.getBattery()
/* BatteryManager {
  charging: true,
  chargingTime: 0,
  dischargingTime: Infinity,
  level: 1, // 电池电量
  onchargingchange: null,
  onchargingtimechange: null,
  ondischargingtimechange: null,
  onlevelchange: null
} */
```

### Notification

允许网页向用户发送桌面通知（需要得到用户的许可）。适用于消息提醒等。

```ts
// 请求显示通知的权限
const permission = Notification.requestPermission()

if (permission === "granted") {
  // 显示通知
  new Notification('Hello, world!')
}
```

### Vibration

控制设备的振动功能。适用于游戏和通知。

```ts
// 使设备振动 1 秒
navigator.vibrate(1000)
```

### Payment Request

简化在线支付流程。提供统一的支付界面和支付方法。

```ts
// 创建支付请求
const request = new PaymentRequest([{
  supportedMethods: "basic-card",
  data: {
    supportedNetworks: ["visa", "mastercard"]
  }
}], {
  total: {
    label: "Total",
    amount: { currency: "USD", value: "10.00" }
  }
})

// 显示支付请求界面
request.show().then(paymentResponse => paymentResponse.complete("success"))
```

### Speech Recognition

将语音输入转换为文本。适用于语音控制和语音输入。

```ts
// 创建一个语音识别实例
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()

recognition.addEventListener("result", event => {
  // 获取识别的文本
  const transcript = event.results[0][0].transcript
})

// 开始语音识别
recognition.start()
```

### Speech Synthesis

将文本转换为语音输出。适用于语音助手和无障碍访问。

```ts
// 创建一个语音合成实例
const utterance = new SpeechSynthesisUtterance("Hello, world!")

speechSynthesis.speak(utterance)
```

### MediaDevices

访问用户的媒体输入设备，如相机和麦克风。适用于视频聊天、录音等。

```ts
// 获取用户的媒体流
const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })

// 将媒体流设置为视频元素的源
document.querySelector("video").srcObject = stream
```

### WebRTC

实现实时媒体通信，如视频聊天和音频通话。支持点对点连接，减少延迟。

```ts
const peerConnection = new RTCPeerConnection()

// 获取本地媒体流
const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })

// 将本地视频流显示在页面上
document.getElementById("localVideo").srcObject = stream
// 将本地流添加到 peerConnection
stream.getTracks().forEach(track => peerConnection.addTrack(track, stream))

// 处理接收到的远程流
peerConnection.addEventListener("track", event => {
  document.getElementById("remoteVideo").srcObject = event.streams[0]
})

// 创建 offer 并设置本地描述
peerConnection.createOffer()
  .then(offer => peerConnection.setLocalDescription(offer))
  .then(() => {
    // 发送 offer 到另一端（这里假设通过某种信令机制）
    // signalingChannel.send(JSON.stringify({ offer: peerConnection.localDescription }))
  })

// 假设接收到另一端的 answer
// signalingChannel.addEventListener("message", event => {
//   const message = JSON.parse(event.data)
//   if (message.answer) {
//     peerConnection.setRemoteDescription(new RTCSessionDescription(message.answer))
//   }
// })
```

### Web Bluetooth

允许网页与蓝牙设备通信。适用于物联网（IoT）设备的连接和控制。

```ts
// 请求连接蓝牙设备
navigator.bluetooth.requestDevice({ filters: [{ services: ["battery_service"] }] })
  .then(device => {
    console.log(device.name)
    return device.gatt.connect()
  })
  .then(server => { /* ... */ })
```

### WebUSB

允许网页与USB设备通信。适用于连接和控制USB外设。

```ts
// 请求连接USB设备
navigator.usb.requestDevice({ filters: [{ vendorId: 0x1234 }] })
  .then(device => {
    console.log(device.productName)
    return device.open()
  })
  .then(device => { /* ... */ })
```

### Ambient Light

访问设备的环境光传感器数据。适用于动态调整屏幕亮度和颜色。

```ts
// 监听环境光变化事件
addEventListener("devicelight", event => {
  console.log(event.value)
})
```

### Network Information

提供关于设备网络连接的信息，如速度和类型。适用于调整应用行为以适应网络状况。

```ts
// 获取网络连接信息
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
console.log("Effective connection type: ", connection.effectiveType)
console.log("Downlink speed: ", connection.downlink)

// 监听网络状态变化事件
connection.addEventListener("change", () => {
  console.log("Network connection type changed to: ", connection.effectiveType)
})
```

### Gamepad

访问和使用游戏控制器的数据。适用于网页游戏开发。

```ts
// 监听游戏控制器连接事件
addEventListener("gamepadconnected", event => {
  const gamepad = event.gamepad
  console.log(gamepad.id)
})

// 检测游戏控制器按键状态
function checkGamepad() {
  const gamepads = navigator.getGamepads()
  if (gamepads[0]) {
    console.log("Button 0 pressed: ", gamepads[0].buttons[0].pressed)
  }
  requestAnimationFrame(checkGamepad)
}

checkGamepad()
```
