---
title: Lodash
icon: javascript
date: 2024-04-08
---

## uniqWith

合并数组对象并去重。可以根据对象的某个字段去重，也就是去除数组中重复字段值的对象。

```ts
import _ from "lodash"

type ForUniq = {
  id: number
  title: string
  [key: string]: any
}

const forUniq1: ForUniq[] = []
const forUniq2: ForUniq[] = []

// 合并 forUniq1 和 forUniq2，并去除重复 ID 的项，返回去重后的结果
const arr = _.uniqWith(
  [...forUniq1, ...forUniq2],
  (a, b) => a.id === b.id
)
```
