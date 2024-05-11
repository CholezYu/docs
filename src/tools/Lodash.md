---
title: Lodash
icon: function
date: 2024-05-11
---

## 数组方法

### .compact

过滤数组中的非 “真” 元素（`false` `null` `0` `""`）。

```ts
import _ from "lodash"

_.compact([0, 1, false, 2, "", 3]) // => [1, 2, 3]
```

### .difference

**差异算法**。接受两个数组作为参数，返回包含 “差异” 元素的数组。或者说是数组的 “减法”。

```ts
import _ from "lodash"

_.difference([1, 3, 5, 7, 9], [3, 7]) // => [1, 5, 9]
```

### .differenceBy

`.differenceBy()` 可以接受一个迭代器作为参数。它可以是一个字符串，指定某个字段进行 “差异算法”；也可以是一个函数，进行 “差异算法” 之前做一些格式化操作。

```ts
import _ from "lodash"

const objects = [
  { id: 1, /* ... */ },
  { id: 2, /* ... */ },
  { id: 3, /* ... */ }
]

const target = [
  { id: 1, /* ... */ }
]

_.differenceBy(objects, target, "id") // => [{ id: 2 }, { id: 3 }]
// or
_.differenceBy(objects, target, value => value.id) // => [{ id: 2 }, { id: 3 }]

_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) // => [1.2]
```

### .differenceWith

`.differenceWith()` 可以接受一个比较函数作为参数。它允许自定义 “差异算法” 的条件。

```ts
import _ from "lodash"

const objects = [
  { id: 1, /* ... */ },
  { id: 2, /* ... */ },
  { id: 3, /* ... */ }
]

const target = [
  { id: 1, /* ... */ }
]

_.differenceWith(objects, target, (a, b) => a.id === b.id) // => [{ id: 2 }, { id: 3 }]

_.differenceWith(objects, target, _.isEqual) // => [{ id: 2 }, { id: 3 }]
```

## 对象方法

### .uniqWith

`.uniqWith()` 可以接受一个 “差异” 比较函数作为参数。它可以用于对象数组进行 “去重” 算法。

```ts
import _ from "lodash"

const arr1 = [
  { id: 1, text: "text1" },
  { id: 3, text: "text3" }
]

const arr2 = [
  { id: 2, text: "text2" },
  { id: 3, text: "text3" }
]

_.uniqWith([...arr1, ...arr1], (a, b) => a.id === b.id)
/* => [
  { id: 1, text: "text1" },
  { id: 2, text: "text2" },
  { id: 3, text: "text3" }
] */
```

## 字符串方法



## 函数方法
