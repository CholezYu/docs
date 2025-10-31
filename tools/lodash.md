---
title: Lodash
icon: lodash
description: Lodash
---

## 数组方法

### 过滤假值

#### .compact

过滤数组中的非 “真” 元素（`false` `null` `0` `""`）。

```ts
import { compact } from "lodash"

compact([0, 1, false, 2, "", 3]) // => [1, 2, 3]
```

### 数组差异 / 数组减法

#### .difference

接受两个数组作为参数，返回包含差异元素的数组。或者说是数组的 “减法”。

```ts
import { difference } from "lodash"

difference([2, 1], [2, 3]) // => [1]
```

#### .differenceBy

可以接受一个迭代器作为参数。它可以是一个字符串，指定比较的属性进行差异比较；也可以是一个函数，在进行差异比较之前可以做一些格式化操作。

```ts
import { differenceBy } from "lodash"

const target = [
  { id: 1, /* props */ },
  { id: 2, /* props */ },
  { id: 3, /* props */ }
]

const values = [
  { id: 1, /* props */ },
  { id: 3, /* props */ }
]

differenceBy(target, values, "id") // => [{ id: 2, props }]

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) // => [1.2]
```

#### .differenceWith

可以接受一个比较函数作为参数，它允许自定义比较条件。

```ts
import { differenceWith, isEqual } from "lodash"

const target = [
  { id: 1, /* props */ },
  { id: 2, /* props */ },
  { id: 3, /* props */ }
]

const values = [
  { id: 1, /* props */ },
  { id: 3, /* props */ }
]

differenceWith(target, values, (a, b) => a.id === b.id) // => [{ id: 2, props }]

differenceWith(target, values, isEqual) // => [{ id: 2, props }]
```

### 数组交集

#### .intersection

接受两个数组作为参数，返回包含相同元素的数组。

```ts
import { intersection } from "lodash"

intersection([2, 1], [2, 3]) // => [2]
```

#### .intersectionBy

可以接受一个迭代器作为参数。它可以是一个字符串，指定比较的属性进行交集判断；也可以是一个函数，在进行交集判断之前可以做一些格式化操作。

```ts
import { intersectionBy } from "lodash"

const target = [
  { id: 1, /* props */ },
  { id: 2, /* props */ },
  { id: 3, /* props */ }
]

const values = [
  { id: 1, /* props */ },
  { id: 3, /* props */ }
]

intersectionBy(target, values, "id") // => [{ id: 1, props }, { id: 3, props }]

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor) // => [2.1]
```

#### .intersectionWith

可以接受一个比较函数作为参数，它允许自定义比较条件。

```ts
import { intersectionWith, isEqual } from "lodash"

const target = [
  { id: 1, /* props */ },
  { id: 2, /* props */ },
  { id: 3, /* props */ }
]

const values = [
  { id: 3, /* props */ },
  { id: 5, /* props */ }
]

intersectionWith(target, values, (a, b) => a.id === b.id) // => [{ id: 3, props }]

intersectionWith(target, values, isEqual) // => [{ id: 3, props }]
```

### 数组并集 / 合并去重

#### .union

接受两个数组作为参数，返回合并去重后的数组。

```ts
import { union } from "lodash"

union([2, 1], [2, 3]) // => [2, 1, 3]
```

#### .unionBy

可以接受一个迭代器作为参数。它可以是一个字符串，指定比较的属性进行合并去重；也可以是一个函数，在进行合并去重之前可以做一些格式化操作。

```ts
import { unionBy } from "lodash"

const target1 = [
  { id: 1, /* props */ },
  { id: 2, /* props */ },
  { id: 3, /* props */ }
]

const target2 = [
  { id: 3, /* props */ },
  { id: 5, /* props */ }
]

unionBy(target1, target2, "id") /* => [
  { id: 1, props },
  { id: 2, props },
  { id: 3, props },
  { id: 5, props }
] */

unionBy([2.1, 1.2], [2.3, 3.4], Math.floor) // => [2.1, 1.2, 3.4]
```

#### .unionWith

可以接受一个比较函数作为参数，它允许自定义比较条件。

```ts
import { unionWith, isEqual } from "lodash"

const target1 = [
  { id: 1, /* props */ },
  { id: 2, /* props */ },
  { id: 3, /* props */ }
]

const target2 = [
  { id: 3, /* props */ },
  { id: 5, /* props */ }
]

unionWith(target1, target2, (a, b) => a.id === b.id) /* => [
  { id: 1, props },
  { id: 2, props },
  { id: 3, props },
  { id: 5, props }
] */

unionWith(target1, target2, isEqual) /* => [
  { id: 1, props },
  { id: 2, props },
  { id: 3, props },
  { id: 5, props }
] */
```

### 数组去重

#### .uniq

接受一个数组作为参数，返回去重后的数组。与 `.union()` 相似。

```ts
import { uniq } from "lodash"

uniq([2, 1, 2, 3]) // => [2, 1, 3]
```

#### .uniqBy

可以接受一个迭代器作为参数。它可以是一个字符串，指定比较的属性进行去重；也可以是一个函数，在进行去重之前可以做一些格式化操作。

```ts
import { uniqBy } from "lodash"

const target = [
  { id: 1, /* props */ },
  { id: 2, /* props */ },
  { id: 2, /* props */ }
]

uniqBy(target, "id") // => [{ id: 1, props }, { id: 2, props }]

uniqBy([2.1, 1.2, 2.3], Math.floor) // => [2.1, 1.2]
```

#### .uniqWith

可以接受一个比较函数作为参数，它允许自定义比较条件。

```ts
import { uniqWith, isEqual } from "lodash"

const target1 = [
  { id: 1, /* props */ },
  { id: 3, /* props */ }
]

const target2 = [
  { id: 2, /* props */ },
  { id: 3, /* props */ }
]

uniqWith([...target1, ...target2], (a, b) => a.id === b.id) /* => [
  { id: 1, props },
  { id: 3, props },
  { id: 2, props }
] */

uniqWith([...target1, ...target2], isEqual) /* => [
  { id: 1, props },
  { id: 3, props },
  { id: 2, props }
] */
```
