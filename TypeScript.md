# TypeScript

## 常用类型

### 类型别名

定义一个 Type。

```ts
type PersonType = {
  name: string
  age: number
}

const person: PersonType = {
  name: "xiaoming",
  age: 18
}
```

### 接口

定义一个 Interface。

```ts
interface PersonType {
  name: string
  age: number
}

const person: PersonType = {
  name: "xiaoming",
  age: 18
}
```

继承一个 Interface，并扩展一些属性。

```ts
interface StudentType extends PersonType {
  subject: string
}

const student: StudentType = {
  name: "xiaoming",
  age: 18,
  subject: "TypeScript"
}
```

### 元组类型

元组类似于数组类型，并且它可以确切地知道包含多少个元素，以及这些元素的类型。

```ts
const tup: [number, string] = [1, "a"]

const tup: [string, number] = [1, "a"] // error
```

### 枚举类型

```ts
enum ResponseCode {
  OK = 100,
  NOT_FOUND = 404,
  PASSWORD_ERROR = 10001,
}

ResponseCode[OK] // 100
ResponseCode[NOT_FOUND] // 404
ResponseCode[PASSWORD_ERROR] // 10001

ResponseCode[100] // OK
ResponseCode[404] // NOT_FOUND
ResponseCode[10001] // PASSWORD_ERROR
```

### 联合类型

由多个类型组成的一个组合类型。

```ts
let timer: number | null = null
timer = 1

const arr: (number | string)[] = [1, 2, "3"]

const arr: Array<number | boolean> = [true, 1]
```

### 交叉类型

合并两个类型，得到一个新类型。

```ts
type PersonType = {
  name: string
  age: number
}

type StudentType = PersonType & { 
  subject: string
}
```

## Type vs Interface

### 合并或继承

通过交叉类型合并一个 Type。

```ts
type PersonType = {
  name: string
  age: number
}

type StudentType = PersonType & { 
  subject: string
}
```

通过接口继承一个 Interface。

```ts
interface PersonType {
  name: string
  age: number
}

interface StudentType extends PersonType {
  subject: string
}
```

### 可扩展性

Type 定义后不能更改。

```ts
type PersonType = {
  name: string
  age: number
}

// Error: Duplicate identifier 'PersonType'
type PersonType = {
  subject: string
}
```

Interface 可以扩展新字段（并不是覆盖）。

```ts
interface PersonType {
  name: string
  age: number
}

interface PersonType {
  subject: string
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
interface Person<T> {
  name: string
  age: number
  subject: T
}

const person: Person<string> = {
  name: "xiaoming"
  age: 18
  subject: "Vue"
}

const person: Person<string[]> = {
  name: "xiaoming"
  age: 18
  subject: ["Vue", "React"]
}
```

### 泛型约束

约束传递的泛型必须是数组

```ts
interface Person<T extends any[]> { }
```

## 工具类型

### Omit

根据原有类型，生成一个新的类型，并删除了某些字段。

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
