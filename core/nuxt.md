---
title: Nuxt
icon: nuxt
date: 2024-07-13
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
├── server                 服务器程序
├── utils                  工具函数
├── .env                   环境变量
├── app.vue                主文件
├── app.config.ts          响应式配置
├── nuxt.config.ts         脚手架配置
├── package.json           依赖管理
└── tsconfig.json          TS 配置
```

## 布局

### NuxtLayout

显示 `layouts` 中的布局。

在 `app.vue` 中显示 `layouts/default.vue` 布局。

```vue
<!-- app.vue -->
<template>
  <NuxtLayout />
</template>
```

也可以自定义布局文件的名称。

显示 `layouts/custom.vue` 布局。

```vue
<NuxtLayout name="custom" />
```

## 页面

### NuxtPage

显示 `pages` 中的页面。

它是对 `<RouterView>` 的封装。

```vue
<!-- layouts/default.vue -->
<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>
```

### definePageMeta

定义页面的 meta 数据。

::: tabs#definePageMeta

@tab <FontIcon icon="vue" /> pages/login.vue

```vue
<script setup lang="ts">
  definePageMeta({
    isHideHeader: true
  })
</script>
```

@tab <FontIcon icon="vue" /> layouts/default.vue

```vue
<template>
  <Header v-if="!$route.meta.isHideHeader" />
  <NuxtPage />
  <Footer />
</template>
```

:::

## 请求

```vue
<script setup lang="ts">
  const { data, pending, error, refresh } = await useFetch(url)
</script>
```
