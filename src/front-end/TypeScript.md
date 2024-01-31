---
title: TypeScript
icon: typescript
date: 2024-01-30
---

## 常用类型

### 接口 Interface

**继承**。interface 可以继承，并可以扩展一些属性。

```ts
interface SomeType {
  name: string
  age: number
}

interface AType extends SomeType {
  sex: string
}

const student: AType = {
  name: "Minji",
  age: 18,
  sex: "female"
}
```

**索引签名**。如果后端返回的字段太多了，而我们只需要其中几个，那么就可以使用索引签名。

如下，ResponseType 类型中只有 name 和 age 字段是必需的，其他字段就不再强校验了。

```ts
interface ResponseType {
  name: string
  age: number
  [prop: string]: any // prop 可以为任意名称
}

const response: ResponseType = {
  name: "Minji",
  age: 18,
  sex: "female",
  subject: "TypeScript"
}
```

**只读属性**。常用于函数类型。

```ts
interface SomeType {
  name: string
  age: number
  readonly id: number
  readonly fn: () => string
}
```

### 函数 Function

**函数重载**。根据参数的类型执行不同的函数。

```ts
const nums: string = [1, 2, 3]

// 重载
function fn(param: number): number[]
function fn(param: number[]): number[]
function fn(): number[]

// 实现
function fn(param?: number | number[]) {
  if (typeof param === "number") {
    return nums.filter(n => n === param)
  }
  else if (Array.isArray(param)) {
    nums.push(...param)
    return nums
  }
  else {
    return nums
  }
}
```

**定义 this 的类型**。必须在第一个参数定义 this 的类型，调用时忽略该参数。

```ts
interface OType {
  nums: number[]
  append: (this: OType, num: number) => void
}

const o = {
  nums: [1, 2, 3],
  append(this: OType, num: number) {
    this.nums.push(num)
  }
}
```

### 类 Class

**类型约束**。对类进行约束，使该类的实例对象满足这个外部类型。

implements 后面可以是 interface，也可以是一个类。

> super 原理：调用父类的 prototype.constructor.call()

```ts
interface OptionsType {
  el: string | HTMLElement
}

interface VueType {
  options: OptionsType
  init: () => void
}

// implements 约束 Class
class Vue implements VueType {
  options: OptionsType
  init(): void {
    // 初始化 ...
  }
}
```

**抽象类**。通过 abstract 定义的类称为抽象类，抽象类不能被实例化，只能被继承。

通过 abstract 定义的方法称为抽象方法，抽象方法只能进行描述，不能实现。

继承抽象类的类，称为派生类，派生类可以被实例化。在派生类中必须对抽象方法进行实现。

```ts
abstract class Vue {
  name: string
  abstract init(name: string): void
}

class VueComponent extends Vue {
  init(name: string) {
    // ...
  }
}
```

## 泛型

### 函数泛型

我们希望一个函数可以支持多种类型的数据，但是又不想使用 any，那么我们可以使用泛型来创建这样可复用的函数。

```ts
function fn<T, K>(a: T, b: K): void { }

fn<number, number>(1, 2)
fn<number, string>(1, "2")
```

封装一个 axios 函数
```ts
function axios<T>(url: string, data: T) { }

interface Data {
  name: string
  age: number
}

axios<Data>("127.0.0.1:8888", {
  name: "xiaoming",
  age: 18
})
```

### 接口泛型

如果类型需要在使用接口的时候传递，可以定义接口泛型

```ts
interface ResponseResult<T = any> {
  code: number
  data: T
  message: string
}

interface Info {
  id: number
  nickname: string
}

const response: ResponseResult<Info> = {
  code: 200,
  data: {
    id: 10000,
    nickname: "cholez"
  },
  message: "success"
}

const response: ResponseResult<any> = {
  code: 5001,
  data: null,
  message: "权限错误"
}
```

### 泛型约束

约束传递的泛型必须是数组

```ts
interface Person<T extends any[]> { }
```

## 工具类型

### Record

定义对象类型时，指定其 key 和 value 的类型。

```ts
interface Status {
  type: "success" | "info" | "warning" | "danger"
  value: "待审核" | "已上架" | "已拒绝" | "已下架"
}

const STATUS: Record<string, Status> = {
  inReview: {
    type: "info",
    value: "待审核"
  },
  onShelf: {
    type: "success",
    value: "已上架"
  },
  offShelf: {
    type: "danger",
    value: "已拒绝"
  },
  rejected: {
    type: "danger",
    value: "已下架"
  }
}
```

### Omit

根据原有类型，生成一个新的类型，并删除某些字段。

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
  createdAt: number
}

type TodoPreview = Omit<Todo, "description">

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770
}
```

继承父类型，并修改某字段。

```ts
interface GoodsInfoItem {
  // ...
  identity: number
  contacts: string
  skuList: null
}

// Interface GoodsInfoDetails incorrectly extends interface GoodsInfoItem.
// Types of property skuList are incompatible.
// Type object is not assignable to type null.
// error: skuList 类型不兼容
interface GoodsInfoDetails extends GoodsInfoItem {
  skuList: object
}

// 使用 Omit 工具类型删除并重新声明 skuList 类型，然后继承
interface GoodsInfoDetails extends Omit<GoodsInfoItem, "skuList"> {
  skuList: {
    skuId: number
    skuPrice: number
    skuStock: number
    specification: string
  }
}
```
