---
title: HTML5
icon: html
description: HTML5
---

## Canvas

```ts
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// 确定起点
ctx.moveTo(100, 100)

// 移动到新的位置
ctx.lineTo(200, 100)
ctx.lineTo(200, 200)

// 移动到起点
ctx.closePath()

// 设置填充颜色
ctx.fillStyle = "red"
// 填充
ctx.fill()

// 绘制
ctx.stroke()
```

```ts
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// 设置填充颜色为红色
ctx.fillStyle = "red"

// 在画布上绘制一个红色的矩形
ctx.fillRect(10, 10, 100, 100)
```

## Svg



## Web API

### DOM

操作 HTML 文档的结构、样式和内容。

[DOM API | JavaScript](/base/javascript.md#dom)

### Fetch

现代网络请求方式。

[Fetch API | Ajax](/core/ajax.md#fetch)

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

### FileReader

允许网页访问用户的文件系统，读取、预览文件内容。适用于文件上传、读取本地文件等功能。

```ts
document.getElementById("file").addEventListener("change", event => {
  const file = event.target.files[0]
  const reader = new FileReader()
  reader.addEventListener("load", event => {
    const result = event.target.result
  })
  // 读取文件内容
  reader.readAsText(file)
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
  const result = event.data
})

// 断开连接
socket.addEventListener("close", event => { /* 重新连接 */ })

// 连接失败
socket.addEventListener("error", event => { /* 检查网络 */ })
```

### Web Worker

允许在后台线程中运行 JavaScript 代码，不会阻塞主线程。适用于处理大量数据和执行复杂计算。

```ts
const worker = new Worker("worker.js")

// 向 Worker 发送消息
worker.postMessage({ sum: 0 })

// 接收 Worker 的消息
worker.addEventListener("message", event => {
  const { result, time } = event.data
})
```

Worker 文件。

```js
self.addEventListener("message", event => {
  let start = Date.now()
  let result = event.data.sum
  // 执行计算任务
  for (let i = 0; i < 100000000; i++) {
   result += i
  }
  // 向主线程发送消息
  self.postMessage({
    result,
    time: Date.now() - start
  })
})
```

### Service Worker

提供一种在后台处理网络请求、缓存资源和执行其他任务的能力。适用于构建离线 Web 应用和提高性能。

```ts
if (navigator.serviceWorker) {
  const registration = await navigator.serviceWorker.register("service-worker.js")
}
```

Service Worker 文件。

```js
const CACHE_NAME = 'my-site-cache-v1'
const urlsToCache = [
  "/",
  "/styles/main.css",
  "/script/main.js"
]

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache)))
    // 强制新的 Service Worker 生效
    .then(() => self.skipWaiting())
})

// 更新 Service Worker
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames
        // 通过清理旧缓存来确保新资源加载
        .filter(cacheName => cacheName.startsWith("my-site-cache-") && cacheName !== CACHE_NAME)
        .map(cacheName => caches.delete(cacheName))
    ))
  )
})

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      // 如果在缓存中找到匹配的请求，直接返回缓存的响应
      // 如果未在缓存中找到匹配的请求，则从网络请求
      .then(response => response ? response : fetch(event.request))
  )
})

// 处理推送通知
self.addEventListener("push", event => {
  const title = "Push Notification"
  const options = {
    body: event.data.text(),
    icon: "/images/icon.png",
    badge: "/images/badge.png"
  }
  
  event.waitUntil(self.registration.showNotification(title, options))
})
```

### Performance

提供对 Web 应用性能的访问和分析。

```ts
// 标记一个性能测量点
performance.mark("start")

// 进行一些（耗时）操作
for (let i = 0; i < 1000000; i++) { /* ... */ }

// 标记结束点
performance.mark("end")

// 测量从开始到结束的时间
performance.measure("custom_measure", "start", "end")

// 获取所有性能测量
const measures = performance.getEntriesByType("measure")
```

### RequestAnimationFrame

以更好的性能执行动画。适合用于实现高效和平滑的动画效果。

```ts
// 兼容处理
const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))

let animationId = null

const scrollToTop = () => {
  const cubic = (value: number) => Math.pow(value, 3)
  const easeInOutCubic = (value: number) => value < 0.5
    ? cubic(value * 2) / 2
    : 1 - cubic((1 - value) * 2) / 2
  
  const el = document.documentElement
  
  const beginTime = Date.now()
  const beginValue = el.scrollTop
  const animate = () => {
    const progress = (Date.now() - beginTime) / 500
    if (progress < 1) {
      el.scrollTop = beginValue * (1 - easeInOutCubic(progress))
      // `animate` 会在每一帧被调用，用于更新动画状态和绘制新的动画帧，然后请求下一帧
      animationId = rAF(animate)
    }
    else {
      el.scrollTop = 0
    }
  }
  // 开始动画
  animationId = rAF(animate)
}

const stopAnimation = () => {
  // 取消动画
  cancelAnimationFrame(animationId)
}
```

### Animations

直接控制 CSS 动画和 SVG 动画。提供更高的动画性能和控制。

```ts
// 创建一个动画
document.getElementById('animation').animate([
  { transform: "translateY(0px)" },
  { transform: "translateY(100px)" }
], {
  duration: 1000,
  easing: "ease-out"
})
```

### MutationObserver

监测 DOM 树中的更改。比传统的 DOM 事件监听更高效，适用于复杂的 DOM 操作。

```ts
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    console.log("Mutation observed: ", mutation)
  })
})

// 观察元素
observer.observe(document.getElementById("obElement"), {
  attributes: true,
  childList: true,
  subtree: true
})

// 停止观察
observer.disconnect()
```

### IntersectionObserver

监测一个元素相对于其祖先元素或顶级文档视口的可见性变化。适用于懒加载图片、无限滚动等。

```ts
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Element is in view: ", entry.target)
      // observer.unobserve(entry.target) // 停止观察
    }
  })
})

// 观察元素
observer.observe(document.getElementById("obElement"))
```

### Clipboard

读写剪贴板的内容。适用于实现复制、粘贴功能。

```ts
if (navigator.clipboard) {
  await navigator.clipboard.writeText("Hello World!")
}
// 兼容处理
else {
  const textarea = document.createElement("textarea")
  document.body.appendChild(textarea)
  textarea.value = "Hello World!"
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)
}
```

### IndexedDB

提供一个低级 API，用于客户端持久化存储大量结构化数据。适用于离线应用和复杂的数据存储需求。

> [!warning]
>
> 前端数据库安全性较低。

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

### RequestFullscreen

允许网页进入全屏模式。适用于视频播放、游戏等。

```ts
const screen = document.getElementById("screen")

// 进入全屏模式
if (screen.requestFullscreen) {
  screen.requestFullscreen()
}
else if (screen.webkitRequestFullscreen) { /* Safari */
  screen.webkitRequestFullscreen()
}
else if (screen.msRequestFullscreen) { /* IE11 */
  screen.msRequestFullscreen()
}

// 退出全屏模式
if (document.exitFullscreen) {
  document.exitFullscreen()
}
else if (document.webkitExitFullscreen) { /* Safari */
  document.webkitExitFullscreen()
}
else if (document.msExitFullscreen) { /* IE11 */
  document.msExitFullscreen()
}
```

### Screen Orientation <Badge text="实验性" type="info" />

获取和锁定屏幕方向。适用于需要特定方向显示的应用，如游戏和视频播放。

```ts
// 查询当前屏幕方向
screen.orientation.type // "landscape-primary"

// 锁定屏幕方向为横向
await screen.orientation.lock("landscape")

// 解锁方向
await screen.orientation.unlock()
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

### DeviceOrientation <Badge text="实验性" type="info" />

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

### Battery

提供设备电池状态的信息。适用于优化电池消耗的应用。

```ts
// 获取设备电池信息
const battery = navigator.getBattery()
/* BatteryManager {
  charging: true,
  chargingTime: 0,
  dischargingTime: Infinity,
  level: 1, // 电池电量（100%）
  onchargingchange: null,
  onchargingtimechange: null,
  ondischargingtimechange: null,
  onlevelchange: null
} */
```

### Notification

允许网页向用户发送桌面通知（需要得到用户的许可）。适用于消息提醒等。

> [!warning]
>
> 只支持 HTTPS 协议。

```ts
const showNotification = () => {
  // 显示通知
  const notification = new Notification("Hello!", {
    body: "This is a notification from your web app.",
    icon: "https://via.placeholder.com/48",
  })
}

// 检查用户是否已授权显示通知
if (Notification.permission === "granted") {
  showNotification()
}
else if (Notification.permission !== "denied") {
  // 请求用户授权显示通知
  const permission = await Notification.requestPermission()
  if (permission === "granted") {
    showNotification()
  }
}
```

### Vibrate

控制设备的振动功能。适用于游戏和通知。

```ts
// 使设备振动 1 秒
navigator.vibrate(1000)

// 振动模式：振动 200ms，停止 100ms，再振动 200ms
navigator.vibrate([200, 100, 200])

// 停止所有振动
navigator.vibrate(0)
```

### Bluetooth <Badge text="实验性" type="info" />

允许网页与蓝牙设备通信。适用于物联网（IoT）设备的连接和控制。

> [!warning]
>
> 只支持 HTTPS 协议。

```ts
// 请求连接蓝牙设备
const device = await navigator.bluetooth.requestDevice({ filters: [{ services: ["battery_service"] }] })

// 连接到设备的 GATT 服务器
const server = await device.gatt.connect()

// 获取电池服务
const service = await server.getPrimaryService("battery_service")

// 获取电池电量特征值
const characteristic = await service.getCharacteristic("battery_level")

// 读取电池电量
const value = await characteristic.readValue()
const batteryLevel = value.getUint8(0)

// 断开连接处理
device.addEventListener("gattserverdisconnected", () => { /* ... */ })
```

### USB <Badge text="实验性" type="info" />

允许网页与 USB 设备通信。适用于连接和控制 USB 外设。

```ts
// 请求连接 USB 设备
const device = await navigator.usb.requestDevice({ filters: [{ vendorId: 0x2341 }] })
device.productName // "Arduino Micro"
device.manufacturerName // "Arduino LLC"

// 连接到设备
await device.open()

// 选择配置和接口
if (device.configuration === null) {
  await device.selectConfiguration(1)
}
await device.claimInterface(0)

// 向设备发送数据
const dataToSend = new Uint8Array([0x01, 0x02, 0x03])
await device.transferOut(1, dataToSend)

// 从设备接收数据
const result = await device.transferIn(1, 64) // 接收 64 字节数据
const receivedData = new Uint8Array(result.data.buffer)

// 断开连接处理
device.addEventListener("disconnect", () => { /* ... */ })
```

### MediaDevices

访问用户的媒体输入设备，如相机和麦克风。适用于视频聊天、录音等。

```ts
let mediaStream

const start = async () => {
  // 获取用户的媒体流（摄像头、麦克风）
  mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  // 选择特定的设备
  // mediaStream = await navigator.mediaDevices.getUserMedia({
  //   video: { deviceId: "your-video-device-id" }, // 替换为实际的视频设备 ID
  //   audio: { deviceId: "your-audio-device-id" }  // 替换为实际的音频设备 ID
  // })
  
  // 将媒体流设置为视频和音频元素的源
  document.getElementById("video").srcObject = mediaStream
  document.getElementById("audio").srcObject = mediaStream
}

const show = async () => {
  // 列出所有可用的媒体设备
  const devices = await navigator.mediaDevices.enumerateDevices()
  devices.forEach(device => {
    console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`)
  })
}

const stop = () => {
  if (mediaStream) {
    // 停止所有媒体流轨道
    mediaStream.getTracks().forEach(track => track.stop())
    
    // 清空视频和音频元素的源
    document.getElementById("video").srcObject = null
    document.getElementById("audio").srcObject = null
  }
}
```

### RTCPeerConnection

实现实时媒体通信，如视频聊天和音频通话。支持点对点连接，减少延迟。

```ts
let localStream
let pc1
let pc2

const start = async () => {
  // 获取本地视频流
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  document.getElementById("localVideo").srcObject = localStream
}

const call = async () => {
  const configuration = {}
  // 建立两个对等连接
  pc1 = new RTCPeerConnection(configuration)
  pc2 = new RTCPeerConnection(configuration)
  
  // 交换 ICE 候选者
  pc1.onicecandidate = async event => {
    await pc2.addIceCandidate(event.candidate)
  }
  pc2.onicecandidate = async event => {
    await pc1.addIceCandidate(event.candidate)
  }
  
  // 处理接收到的远程流
  pc2.addEventListener("track", event => {
    // 将远程视频流显示在页面上
    document.getElementById("remoteVideo").srcObject = event.streams[0]
  })
  
  // 将本地视频流添加到 pc1 中
  localStream.getTracks().forEach(track => pc1.addTrack(track, localStream))
  
  // 创建一个 offer
  const offer = await pc1.createOffer()
  // 将 pc1 设置为本地描述
  await pc1.setLocalDescription(offer)
  // 将 pc1 设置为 pc2 的远程描述
  await pc2.setRemoteDescription(offer)
  
  // 创建一个 answer
  const answer = await pc2.createAnswer()
  // 将 pc2 设置为本地描述
  await pc2.setLocalDescription(answer)
  // 将 pc2 设置为 pc1 的远程描述
  await pc1.setRemoteDescription(answer)
}

// 挂断通话
const hangup = () => {
  pc1.close()
  pc2.close()
  pc1 = null
  pc2 = null
}
```

### SpeechRecognition <Badge text="实验性" type="info" />

将语音输入转换为文本。适用于语音控制和语音输入。

```ts
// 兼容处理
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

// 创建语音识别实例
const recognition = new SpeechRecognition()

// 设置识别的语言
recognition.lang = "zh-CN"

// 设置连续识别模式
recognition.continuous = true

// 设置中间结果
recognition.interimResults = true

recognition.addEventListener("result", event => {
  let interimTranscript = ""
  let finalTranscript = ""
  for (let i = 0; i < event.results.length; i++) {
    // 获取识别的文本
    const transcript = event.results[i][0].transcript
    if (event.results[i].isFinal) {
      finalTranscript += transcript
    }
    else {
      interimTranscript += transcript
    }
  }
})

// 开始语音识别
recognition.start()
```

### SpeechSynthesis <Badge text="实验性" type="info" />

将文本转换为语音输出。适用于语音助手和无障碍访问。

```ts
speechSynthesis.addEventListener("voiceschanged", () => {
  const voices = speechSynthesis.getVoices()
  document.getElementById("voiceSelect").innerHTML = ""
  voices.forEach(voice => {
    const option = document.createElement("option")
    option.textContent = `${voice.name} (${voice.lang})`
    option.value = voice.name
    document.getElementById("voiceSelect").appendChild(option)
  })
})

const speak = () => {
  const text = document.getElementById("text").value
  if (text.trim() === "") return
  
  // 创建语音合成实例
  const utterance = new SpeechSynthesisUtterance(text)
  const selectedVoiceName = voiceSelect.value
  // 列出所有可用的语音，并允许用户选择
  const voices = speechSynthesis.getVoices()
  const selectedVoice = voices.find(voice => voice.name === selectedVoiceName)
  utterance.voice = selectedVoice
  
  // 设置属性（可选）
  utterance.lang = selectedVoice.lang // 设置语言
  utterance.pitch = 1  // 设置语调
  utterance.rate = 1   // 设置语速
  utterance.volume = 1 // 设置音量
  
  // 开始朗读
  speechSynthesis.speak(utterance)
}

const stop = () => {
  // 停止朗读
  speechSynthesis.cancel()
}
```

### PaymentRequest

简化在线支付流程。提供统一的支付界面和支付方法。

```ts
// 创建支付请求
const request = new PaymentRequest([
  /* 支持的支付方式 */ {
    supportedMethods: "basic-card",
    data: {
      supportedNetworks: ["visa", "mastercard", "amex"],
      supportedTypes: ["debit", "credit"]
    }
  }
], /* 支付详情 */ {
  displayItems: [
    {
      label: 'Product 1',
      amount: { currency: "USD", value: "10.00" }
    },
    {
      label: 'Product 2',
      amount: { currency: "USD", value: "20.00" }
    }
  ],
  total: {
    label: "Total",
    amount: { currency: "USD", value: "30.00" }
  }
}, /* 支付选项 */ {
  requestPayerName: true,
  requestPayerEmail: true,
  requestPayerPhone: true
})

// 显示支付界面
const paymentResponse = await request.show()

// 处理支付响应
await paymentResponse.complete("success")
```

### AmbientLightSensor

访问设备的环境光传感器数据。适用于动态调整屏幕亮度和颜色。

```ts
if (window.AmbientLightSensor) {
  // 创建环境光传感器实例
  const sensor = new AmbientLightSensor()
  
  // 监听传感器数据
  sensor.addEventListener("reading", () => {
    const lightLevel = sensor.illuminance
    document.getElementById('light-level').textContent = `Current Light Level: ${lightLevel} lux`
    
    // 根据光照强度调整网页样式
    if (lightLevel < 50) {
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
    else {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  })
  
  // 开始传感器
  sensor.start()
}
```

### Connection

提供关于设备网络连接的信息，如速度和类型。适用于调整应用行为以适应网络状况。

```ts
// 获取网络连接信息
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
// 有效连接类型
let effectiveConnectionType = connection.effectiveType
// 传输速度
let downlinkSpeed = connection.downlink

// 监听网络状态变化事件
connection.addEventListener("change", () => {
  effectiveConnectionType = connection.effectiveType
})
```

### Gamepad

访问和使用游戏控制器的数据。适用于网页游戏开发。

```ts
// 监听游戏控制器连接事件
addEventListener("gamepadconnected", event => {
  const gamepad = event.gamepad
  const gamepadId = gamepad.id
})

// 检测游戏控制器按键状态
const checkGamepad = () => {
  const gamepads = navigator.getGamepads()
  if (gamepads[0]) {
    const firstButtonPressed = gamepads[0].buttons[0].pressed
  }
  requestAnimationFrame(checkGamepad)
}

checkGamepad()
```
