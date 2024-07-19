---
title: Nuxt
icon: nuxt
date: 2024-07-14
description: Nuxt
---


## 目录

```
├── .nuxt                  nuxt dev 创建的应用程序
├── .output                nuxt build 创建的生产文件
├── assets                 构建工具处理的资源
├── components             组件
├── composables            组合式函数
├── layouts                布局
├── middleware             中间件
├── pages                  页面
├── plugins                插件
├── public                 静态资源
├── server                 服务器
├── utils                  工具函数
├── .env                   环境变量
├── app.vue                主文件
├── app.config.ts          应用配置
├── nuxt.config.ts         脚手架配置
├── package.json           依赖管理
└── tsconfig.json          TS 配置
```

## 布局

### NuxtLayout

显示 `layouts` 中的布局。

::: tabs#NuxtLayout

@tab <Vue /> app.vue

```vue
<!-- 默认显示 `layouts/default.vue` 布局 -->
<NuxtLayout />

<!-- 自定义显示 `layouts/custom.vue` 布局 -->
<NuxtLayout name="custom" />
```

:::

## 页面

### NuxtPage

显示 `pages` 中的页面。

::: tabs#NuxtPage

@tab <Vue /> layouts/default.vue

```vue
<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>
```

:::

### definePageMeta

定义页面的 meta 数据。

::: tabs#definePageMeta

@tab <Vue /> pages/login.vue

```vue
<script setup lang="ts">
  definePageMeta({
    isHideHeader: true
  })
</script>
```

@tab <Vue /> layouts/default.vue

```vue
<template>
  <Header v-if="!$route.meta.isHideHeader" />
  <NuxtPage />
  <Footer />
</template>
```

:::

## 请求

### useFetch

请求数据。

::: tabs#useFetch

@tab <Ts /> utils/request.ts

```ts
import type { UseFetchOptions } from "nuxt/app"

export default async function request<T>(
  url: string,
  options: UseFetchOptions<ResponseResult<T>>
): Promise<T> {
  // 设置请求头
  // options.headers = ...
  
  const { data, pending, error, refresh } = await useFetch(url, options)
  
  return data.value && data.value.code === 200
    ? data.value.data
    : Promise.reject(error.value || data.value!.message)
}
```

@tab <Ts /> api/index.ts

```ts
import type { UseFetchOptions } from "nuxt/app"
import request from "utils/request"

const baseURL = import.meta.env.VITE_BASE_URL

export const apiGet = <T>(
  url: string,
  options: UseFetchOptions<ResponseResult<T>> = {
    method: "GET",
    baseURL
  }
) => request(url, options)

export const apiPost = <T>(
  url: string,
  body: any,
  options: UseFetchOptions<ResponseResult<T>> = {
    method: "POST",
    body,
    baseURL
  }
) => request(url, options)
```

@tab <Vue /> *.vue

```vue
<script setup lang="ts">
  const categories = ref<Category[]>([])
  categories.value = await apiGet<Category[]>(url)
</script>
```

:::

## 服务

### defineEventHandler

注册 API 模拟数据。

::: tabs#defineEventHandler

@tab <Ts /> server/api/banners.ts

```ts
export default defineEventHandler(() => {
  return {
    code: 200,
    data: [
      { id: 1, imageUrl: "/images/banner1.jpg" },
      { id: 2, imageUrl: "/images/banner2.jpg" },
      { id: 3, imageUrl: "/images/banner3.jpg" }
    ],
    message: "ok",
    success: true
  }
})
```

@tab <Vue /> *.vue

```vue
<script setup lang="ts">
  const { data, error } = useFetch("/banners", { baseURL: "/api" })
</script>
```

:::
