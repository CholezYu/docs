# Bug 收集

## 立即监听时，响应式数据引用问题

### 问题描述

我的需求是监听 tab 栏的变化，去请求不同的列表。并且需要在初始阶段就请求一次列表，所以需要开启立即监听。

> 想省去 onMounted

但是开启立即监听后，出现了 `Cannot access 'searchForm' before initialization` 的报错。

这是因为在 watch hook 函数中引用了 searchForm 这个响应式数据，而该数据定义在 watch 后面，如果不开立即监听就没关系，一旦开启立即监听后，就会报错。

```ts
const tabName = ref("ON_SHELF")

watch(() => tabName.value, (value: string) => {
  switch (value) {
    case "ON_SHELF":
      getGoodsInfoList()
      break
    case "OFF_SHELF":
      // 请求下架列表
      break
    case "REJECTED":
      // 请求拒绝列表
      break
    case "IN_REVIEW":
      // 请求审核列表
      break
  }
}, {
  immediate: true
})

const searchForm = ref({})

async function getGoodsInfoList() {
  const response = await reqKSGoodsInfoList({
    ...searchForm.value // Cannot access 'searchForm' before initialization
  })
  
  if (response.data.code === 200) {
    goodsInfoList.value = response.data.data.list
  }
}
```

### 测试

这里将代码简化，做一个测试。响应式数据 a 定义在 watch 的下方，当在 watch hook 中引用该数据并开启立即监听时，出现了 `Cannot access 'a' before initialization` 的报错。

```ts
const forListen = ref()

watch(() => forListen.value, () => {
  console.log(a.value) // Cannot access 'a' before initialization
}, {
  immediate: true
})

const a = ref(1)
```

而将响应式数据 a 定义在 watch 的上方时，就不会出现这个报错，并打印了 a 的值。

```ts
const forListen = ref()

const a = ref(1)

watch(() => forListen.value, () => {
  console.log(a.value) // 1
}, {
  immediate: true
})
```

如果 a 是一个普通数据，而不是响应式数据。我们测试发现，即使将 a 定义在 watch 的下方，也没有出现报错，并且也打印了 a 的值。

```ts
const forListen = ref()

watch(() => forListen.value, () => {
  console.log(a) // 1
}, {
  immediate: true
})

const a = 1
```

### 结论

使用 watch 的立即监听时，不能在 watch hook 中引用定义在其之后的响应式数据（ref，reactive）；

但是可以引用定义在该 watch 之后的普通数据。

如果 watch 不开启立即监听，那么就可以引用定义在该 watch 之后的响应式数据和普通数据。