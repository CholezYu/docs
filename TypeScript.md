# TypeScript

## 简单类型

### boolean

```ts
let bool: boolean = true

bool = false
```

### number

```ts
let num: number = 5

num = 0b1010
```

### string

```ts
let str: string = "hello"

str = "world"
```

### any

```ts
let foo: any = "abc"

foo = 1
foo = true
foo = undefined
```

### void

如果函数没有返回值，那么返回值的类型就是 void

```ts
function fun(): void {
  // ...
}

const fun = (): void => {
  // ...
}
```

## 复杂类型

### 函数类型

函数声明，推荐使用

```ts
function fun(a: number, b: number): number {
  return a + b
}
```

箭头函数，推荐使用

```ts
const fun = (a: number, b: number): number => a + b
```

类型别名

```ts
type fnType = (a: number, b: number) => number

const fun: fnType = (a, b) => a + b
```

### 数组类型

在元素类型后面加上 "[]"

```ts
const arr: number[] = [1, 2, 3]
```

数组泛型

```ts
const arr: Array<number> = [1, 2, 3]
```

### 对象类型

类型别名

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

接口

```ts
interface Person {
  name: string
  age: number
}

const person: Person = {
  name: "xiaoming",
  age: 18
}
```

### 类型别名

```ts
type ns = number | string
type todoListType = ns[]

let foo: ns = 1

const arr: todoListType = [1, "2"]
```

### 元组类型

元组是另一种数组类型，它可以确切地知道包含多少个元素，以及这些元素的类型

```ts
const tup: [number, string] = [1, "a"]

const tup: [string, number] = [1, "a"] // error
```

### 枚举类型

```ts
enum ResCode {
  OK = 100,
  NOT_FOUND = 404,
  PASSWORD_ERROR = 10001,
}

ResCode[OK] // 100
ResCode[NOT_FOUND] // 404
ResCode[PASSWORD_ERROR] // 10001

ResCode[100] // OK
ResCode[404] // NOT_FOUND
ResCode[10001] // PASSWORD_ERROR
```

### 联合类型

由多个类型组成的一个组合类型

```ts
let timer: number | null = null
timer = 1

const arr: (number | string)[] = [1, 2, "3"]

const arr: Array<number | boolean> = [true, 1]
```

### 交叉类型

合并两个类型，得到一个新类型

```ts
type PersonType = {
  name: string
  age: number
}

type StudentType = PersonType & { 
  subject: string
}
```

## 接口

### 定义

定义一个接口

```ts
interface Person {
  name: string
  age: number
}
```

### 继承

继承一个接口，并扩展一些属性

```ts
interface Student extends Person {
  subject: string
}

const student: Student = {
  name: "xiaoming",
  age: 18,
  subject: "TypeScript"
}
```

### 实现

TypeScript 可以用它来强制一个**类**去符合某种契约。用的很少

```ts
interface Clock {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements Clock {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) { }
}
```

## Type vs Interface

### 合并与继承

通过交叉类型创建一个 Type

```ts
type PersonType = {
  name: string
  age: number
}

type StudentType = PersonType & { 
  subject: string
}
```

通过继承创建一个 Interface

```ts
interface Person {
  name: string
  age: number
}

interface Stuednt extends Person {
  subject: string
}
```

### 可扩展性

类型创建后不能更改

```ts
type PersonType = {
  name: string
  age: number
}

type PersonType = {
  subject: string
}

// Error: Duplicate identifier 'PersonType'
```

向现有接口添加新字段

```ts
interface Person {
  name: string
  age: number
}

interface Person {
  subject: string
}
```

## 泛型

### 函数泛型

我们希望一个函数可以支持多种类型的数据，但是又不想使用 any，那么我们可以使用泛型来创建这样可复用的函数

```ts
function fun<T, K>(a: T, b: K): void { }

fun<number, number>(1, 2)
fun<number, string>(1, "2")
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

## 断言

```ts
const changeCount = event => {
  (event.target as HTMLInputElement).value
}
```
