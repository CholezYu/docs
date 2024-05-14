---
title: Dayjs
icon: date
date: 2024-05-12
---

## 常用日期

> [!tip]
>
> 我们把 “年”，“月”，“周”，“日” 称为一个时间单位。

### 今天

```ts
// 今天
dayjs().format("YYYY-MM-DD") // => '2024-05-12'

// 现在
dayjs().format("YYYY-MM-DD HH:mm:ss") // => '2024-05-12 19:23:12'

// 今天的零点
dayjs().startOf("day").format("YYYY-MM-DD HH:mm:ss") // => '2024-05-12 00:00:00'

// 今天的最后一秒
dayjs().endOf("day").format("YYYY-MM-DD HH:mm:ss") // => '2024-05-12 23:59:59'
```

### 一个时间单位前

一天前。

```ts
// 一天前
dayjs().subtract(1, "day").format("YYYY-MM-DD") // => '2024-05-11'

// 一天前的零点
dayjs().subtract(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss") // => '2024-05-11 00:00:00'

// 一天前的最后一秒
dayjs().subtract(1, "day").endOf("day").format("YYYY-MM-DD HH:mm:ss") // => '2024-05-11 23:59:59'
```

一周前。

```ts
// 一周前
dayjs().subtract(1, "week").format("YYYY-MM-DD") // => '2024-05-05'

// 一周前的零点
dayjs().subtract(1, "week").startOf("day").format("YYYY-MM-DD HH:mm:ss") // => '2024-05-05 00:00:00'

// 一周前的最后一秒
dayjs().subtract(1, "week").endOf("day").format("YYYY-MM-DD HH:mm:ss") // => '2024-05-05 23:59:59'
```

一月前。

```ts
// 一月前
dayjs().subtract(1, "month").format("YYYY-MM-DD") // => '2024-04-12'

// 一月前的零点
dayjs().subtract(1, "month").startOf("day").format("YYYY-MM-DD HH:mm:ss") // => '2024-04-12 00:00:00'

// 一月前的最后一秒
dayjs().subtract(1, "month").endOf("day").format("YYYY-MM-DD HH:mm:ss") // => '2024-04-12 23:59:59'
```

一年前。

```ts
// 一年前
dayjs().subtract(1, "year").format("YYYY-MM-DD") // => '2023-05-12'

// 一年前的零点
dayjs().subtract(1, "year").startOf("day").format("YYYY-MM-DD HH:mm:ss") // => '2023-05-12 00:00:00'

// 一年前的最后一秒
dayjs().subtract(1, "year").endOf("day").format("YYYY-MM-DD HH:mm:ss") // => '2023-05-12 23:59:59'
```

### 一个时间单位的周期

本周。

> [!warning]
>
> dayjs 一周的开始时间默认是周期，所以这里需要进行本地化处理。

```ts
import dayjs from "dayjs"
import weekday from "dayjs/plugin/weekday"
import "dayjs/locale/zh-cn"

dayjs.extend(weekday)
dayjs.locale("zh-cn")

// 本周的第一天
dayjs().startOf("week").format("YYYY-MM-DD") // => '2024-05-06'

// 本周的最后一天
dayjs().endOf("week").format("YYYY-MM-DD") // => '2024-05-12'
```

上周。

> [!warning]
>
> dayjs 一周的开始时间默认是周期，所以这里需要进行本地化处理。

```ts
import dayjs from "dayjs"
import weekday from "dayjs/plugin/weekday"
import "dayjs/locale/zh-cn"

dayjs.extend(weekday)
dayjs.locale("zh-cn")

// 上周的第一天
dayjs().subtract(1, "week").startOf("week").format("YYYY-MM-DD") // => '2024-04-29'

// 上周的最后一天
dayjs().subtract(1, "week").endOf("week").format("YYYY-MM-DD") // => '2024-05-05'
```

本月。

```ts
// 本月的第一天
dayjs().startOf("month").format("YYYY-MM-DD") // => '2024-05-01'

// 本月的最后一天
dayjs().endOf("month").format("YYYY-MM-DD") // => '2024-05-31'
```

上个月。

```ts
// 上个月的第一天
dayjs().subtract(1, "month").startOf("month").format("YYYY-MM-DD") // => '2024-04-01'

// 上个月的最后一天
dayjs().subtract(1, "month").endOf("month").format("YYYY-MM-DD") // => '2024-04-30'
```

今年。

```ts
// 今年的第一天
dayjs().startOf("year").format("YYYY-MM-DD") // => '2024-01-01'

// 今年的最后一天
dayjs().endOf("year").format("YYYY-MM-DD") // => '2024-12-31'
```

去年。

```ts
// 去年的第一天
dayjs().subtract(1, "year").startOf("year").format("YYYY-MM-DD") // => '2023-01-01'

// 去年的最后一天
dayjs().subtract(1, "year").endOf("year").format("YYYY-MM-DD") // => '2023-12-31'
```

## 封装通用函数

### unitOfTime

一个时间单位前、一个时间单位前的零点、一个时间单位前的最后一秒。

```ts
import dayjs from "dayjs"
import weekday from "dayjs/plugin/weekday"
import "dayjs/locale/zh-cn"

dayjs.extend(weekday)
dayjs.locale("zh-cn") // 本地化处理

type TimeOf = "n" | "s" | "e" // "now" "startOf" "endOf"
type UnitOf = "d" | "w" | "M" | "y" // "day" "week" "month" "year"

/**
 * 一个时间单位前
 *
 * @example 今天
 * unitOfTime() // => '2024-05-12'
 * @example 现在
 * unitOfTime(undefined, "n") // => '2024-05-12 19:23:12'
 * @example 今天的零点
 * unitOfTime(undefined, "s") // => '2024-05-12 00:00:00'
 * @example 今天的最后一秒
 * unitOfTime(undefined, "e") // => '2024-05-12 23:59:59'
 *
 * @example 昨天
 * unitOfTime("d") // => '2024-05-11'
 * @example 昨天的零点
 * unitOfTime("d", "s") // => '2024-05-11 00:00:00'
 * @example 昨天的最后一秒
 * unitOfTime("d", "e") // => '2024-05-11 23:59:59'
 */
function unitOfTime(unitOf?: UnitOf, timeOf?: TimeOf) {
  const i = unitOf ? 1 : 0
  if (timeOf === "n") return dayjs().subtract(i, unitOf).format("YYYY-MM-DD HH:mm:ss")
  if (timeOf === "s") return dayjs().subtract(i, unitOf).startOf("d").format("YYYY-MM-DD HH:mm:ss")
  if (timeOf === "e") return dayjs().subtract(i, unitOf).endOf("d").format("YYYY-MM-DD HH:mm:ss")
  return dayjs().subtract(1, unitOf).format("YYYY-MM-DD")
}
```

### unitOfCycle

一个时间单位的周期。[上周第一天，上周最后一天]、[去年第一天，去年最后一天]。。。

```ts
import dayjs from "dayjs"
import weekday from "dayjs/plugin/weekday"
import "dayjs/locale/zh-cn"

dayjs.extend(weekday)
dayjs.locale("zh-cn") // 本地化处理

type UnitOf = "d" | "w" | "M" | "y" // "day" "week" "month" "year"

/**
 * 一个时间单位的周期
 *
 * @example 今天
 * unitOfCycle(0, "d") // => ['2024-05-12', '2024-05-12']
 * @example 昨天
 * unitOfCycle(1, "d") // => ['2024-05-11', '2024-05-11']
 * @example 本周
 * unitOfCycle(0, "w") // => ['2024-05-06', '2024-05-12']
 * @example 上周
 * unitOfCycle(1, "w") // => ['2024-04-29', '2024-05-05']
 * @example 本月
 * unitOfCycle(0, "M") // => ['2024-05-01', '2024-05-31']
 * @example 上个月
 * unitOfCycle(1, "M") // => ['2024-04-01', '2024-04-30']
 * @example 今年
 * unitOfCycle(0, "y") // => ['2024-01-01', '2024-12-31']
 * @example 去年
 * unitOfCycle(1, "y") // => ['2023-01-01', '2023-12-31']
 */
function unitOfCycle(n: number, unitOf: UnitOf) {
  return [
    dayjs().subtract(n, unitOf).startOf(unitOf).format("YYYY-MM-DD"),
    dayjs().subtract(n, unitOf).endOf(unitOf).format("YYYY-MM-DD")
  ]
}
```
