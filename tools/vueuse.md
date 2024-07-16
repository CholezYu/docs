---
title: VueUse
icon: vueuse
description: VueUse
---

## useStorage

响应式操作 storage。它还有两个语法糖，`useLocalStorage` 和 `useSessionStorage`。

我们可以在 Pinia 中使用 `useLocalStorage`。

```ts
import { useLocalStorage } from "@vueuse/core"

// TOKEN
// 这里建议默认值为 null 而不是 ""
// 否则 storage 会设置一条值为 "" 的数据。如果是 null 的话，storage 不会设置任何数据
const userToken = useLocalStorage<string>(STORAGE_KEY.TOKEN, null)

// USER_INFO
const userInfo = useLocalStorage<UserInfo | null>(STORAGE_KEY.USER_INFO, null, {
  // 对象类型的 storage 需要自定义序列化
  serializer: {
    read: (v: string) => v ? JSON.parse(v) : null,
    write: (v: UserInfo | null) => JSON.stringify(v)
  },
  // 如果默认值为 null，需要使用下面这种写法
  // 但是测试发现使用上面的方式也行
  // serializer: StorageSerializers.object
})

// 登录
const userLogin = async (data: LoginParams) => {
  const response = await apiLogin(data)
  if (response.data.code === RESPONSE_CODE.LOGIN_ERROR) {
    userReset()
  }
  else {
    userToken.value = response.data.data.token // 自动设置 storage
    storage.set(STORAGE_KEY.USER_INFO, response.data.data) // 也可以手动设置 storage
  }
}

// 获取用户信息
const getUserInfo = async () => {
  const response = await apiUserInfo()
  if (response.data.code === RESPONSE_CODE.SUCCESS) {
    userInfo.value = response.data.data // 自动设置 storage
  }
}

// 登出
const userLogout = async () => {
  await apiLogout()
  userReset()
}

// 清空
const userReset = () => {
  userToken.value = null // 自动清除 storage
  userInfo.value = null // 自动清除 storage
}
```

之后在组件中使用 Pinia 时，就不需要再关注是否需要从 storage 中存取数据了。
