---
title: WebGL
icon: webgl
lang: zh-CN
description: WebGL
---

## 简单使用

绘制一个红色矩形。

```js
const ctx = document.querySelector("#canvas")

const gl = ctx.getContext("webgl")

gl.clearColor(1.0, 0.0, 0.0, 1.0)

gl.clear(gl.COLOR_BUFFER_BIT)
```

- `gl.clearColor(r, g, b, a)` 清空 canvas 的颜色

- `gl.clear(buffer)` 清空缓存
- gl.COLOR_BUFFER_BIT：颜色缓存
  
- gl.DEPTH_BUFFER_BIT：清空深度缓冲区
  
- gl.STENCLI_BUFFER_BIT：清空模板缓冲区

## 着色器

### 顶点着色器

用来描述顶点（空间中的坐标）的特性，通过计算获取**位置**信息。

### 片元着色器

进行逐片元（像素）处理程序，通过计算获取**颜色**信息。

### 着色器源码

```js
// 顶点着色器源程序
const VERTEX_SHADER_SOURCE = `
  void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0); // 点的坐标 vec4(x, y, z, w)
    gl_PointSize = 30.0; // 点的大小
  }
`

// 片元着色器源程序
const FRAGMENT_SHADER_SOURCE = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 点的颜色 vec4(r, g, b, a)
  }
`
```

### 创建着色器

```js
function useShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE) {
  // 创建顶点着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  
  // 创建片元着色器
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  
  // 指定着色器的源程序
  gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE)
  gl.shaderSource(fragmentShader, FRAGMENT_SHADER_SOURCE)
  
  // 编译着色器
  gl.compileShader(vertexShader)
  gl.compileShader(fragmentShader)
  
  // 创建一个程序对象
  const program = gl.createProgram()
  
  // 关联着色器
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  
  // 关联程序对象
  gl.linkProgram(program)
  
  // 使用程序对象
  gl.useProgram(program)
  
  return program
}
```

### 绘制图形

```js
useShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

gl.drawArrays(gl.POINTS, 0, 1) // 点
gl.drawArrays(gl.LINES, 0, 2) // 线段
gl.drawArrays(gl.TRIANGLES, 0, 3) // 三角形
```

- `gl.drawArrays(mode, first, count)`

  - mode：绘制的图形

  - first：从哪个开始

  - count：使用几个顶点

### attribute 变量

```js
// attribute 变量只能用于顶点着色器源程序中
const VERTEX_SHADER_SOURCE = `
  attribute vec4 aPosition; // 默认为 vec4(x, y, z, w)
  void main() {
    gl_Position = aPosition;
    gl_PointSize = 30.0;
  }
`

// ...

const program = useShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

// 获取 attribute 变量
const aPosition = gl.getAttribLocation(program, "aPosition")

// 修改 attribute 变量
gl.vertexAttrib4f(aPosition, 0.5, 0.5, 0.0, 1.0)
```
