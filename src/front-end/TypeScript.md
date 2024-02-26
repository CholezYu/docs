---
title: TypeScript
icon: typescript
date: 2024-02-26
---

## 常用类型

### 接口 Interface

**继承**。interface 可以继承，并可以扩展一些属性。

```ts
interface Person {
  name: string
  age: number
}

interface Student extends Person {
  sex: string
}

const student: Student = {
  name: "Minji",
  age: 18,
  sex: "female"
}
```

**索引签名**。如果后端返回的字段太多了，而我们只需要其中几个，那么就可以使用索引签名。

如下，Response 类型中只有 name 和 age 字段是必需的，其他字段就不再强校验了。

```ts
interface Response {
  name: string
  age: number
  [prop: string]: any // prop 可以为任意名称
}

const response: Response = {
  name: "Minji",
  age: 18,
  sex: "female",
  subject: "TypeScript"
}
```

**只读属性**。常用于函数类型。

```ts
interface Info {
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
interface This {
  nums: number[]
  append: (this: This, num: number) => void
}

const ctz = {
  nums: [1, 2, 3],
  append(this: This, num: number) {
    this.nums.push(num)
  }
}
```

### 类 Class

**类型约束**。对类进行约束，使该类的实例对象满足这个外部类型。

implements 后面可以是 interface，也可以是一个类。

> super 原理：调用父类的 prototype.constructor.call()。

```ts
interface Options {
  el: string | HTMLElement
}

interface VueCls {
  options: Options
  init: () => void
}

// implements 约束 Class
class Vue implements VueCls {
  options: Options
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

我们希望一个函数可以支持多种类型的数据，但是又不想使用 any，那么可以使用泛型来定义函数。

```ts
function request<T>(url: string, data: T) { }

interface Params {
  name: string
  age: number
}

request<Params>("127.0.0.1:8000", {
  name: "Minji",
  age: 18
})
```

### 接口泛型

如果类型需要在调用接口的时候传递，可以定义接口泛型。

```ts
interface Response<T = any> {
  code: number
  data: T
  message: string
}

interface User {
  id: number
  nickname: string
}

const response: Response<User> = {
  code: 200,
  data: {
    id: 10000,
    nickname: "Minji"
  },
  message: "success"
}

const error: Response<null> = {
  code: 5001,
  data: null,
  message: "Invalid token"
}
```

### 泛型约束

对泛型参数进行约束。

```ts
function fn<T extends object, K extends keyof T>() { }
```

### keyof & in

keyof：返回对象的 key 组成的联合类型。

in：（只能）遍历联合类型。

```ts
type User = { name: string, age: number }

type UserKey = keyof User // => "name" | "age"


type Custom<T extends object> = { readonly [K in keyof T]: T[K] }

type CustomUser = Custom<User> // => { readonly name: string, readonly age: number }
```

### infer

infer 就是推导泛型参数。并且 infer 声明只能出现在 extends 子语句中。

> 暂时没看懂。

## 泛型工具

### Partial

将对象中的**所有**属性变成可选的。

```ts
interface User {
  name: string
  age: number
  address: string
}

type PartialUser = Partial<User> // => { name?: string, age?: number, address?: string }
```

实现原理。

```ts
type CustomPartial<T> = {
  [P in keyof T]?: T[P]
}
```

### Required

将对象中的**所有**属性变成必选的。

```ts
interface User {
  name?: string
  age?: number
  address?: string
}

type RequiredUser = Required<User> // => { name: string, age: number, address: string }
```

实现原理。

```ts
type CustomRequired<T> = {
  [R in keyof T]-?: T[R]
}
```

### Record

约束对象的 key 和 value。

```ts
interface Status {
  type: "success" | "info" | "warning" | "danger"
  value: "待审核" | "已上架" | "已拒绝" | "已下架"
}

const STATUS: Record<string, Status> = {
  inReview: {
    type: "warning",
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
    type: "info",
    value: "已下架"
  }
}
```

实现原理。

> keyof any => string | number | symbol

```ts
type CustomRecord<K extends keyof any, T> = {
  [P in K]: T
}
```

### Pick

提取对象中的部分属性。与 Omit 相反。

```ts
interface User {
  name: string
  age: number
  address?: string
}

type PickUser = Pick<User, "name" | "age"> // => { name: string, age: number }
```

实现原理。

```ts
type CustomPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

### Omit

排除对象中的部分属性。与 Pick 相反。

```ts
interface User {
  name: string
  age: number
  address?: string
}

type OmitUser = Omit<User, "name"> // => { age: number, address?: string }
```

实现原理。先用 Exclude 排除不需要的属性，再用 Pick 提取剩下的属性。

```ts
type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
```

### Exclude

排除联合类型中的部分属性。

```ts
type E = Exclude<"a" | "b" | "c", "b"> // => "a" | "c"
```

实现原理。

> never 在联合类型中会被排除。

```ts
type CustomExclude<T, U> = T extends U ? never : T

type CE = CustomExclude<"a" | "b" | "c", "a" | "c"> // => never | 'b' | never => 'b'
```

### ReturnType

获取函数类型的返回值。

```ts
const fn = () => [1, 2, 3, true]

type ReturnFn = ReturnType<typeof fn> // (number | boolean)[]
```

实现原理。

```ts
type CustomReturnType<F extends Function> = F extends (...args: any[]) => infer Res ? Res : never
```

## 配置文件 tsconfig

```json
{
  "compilerOptions": {
    /* https://aka.ms/tsconfig */
    
    /* Projects */
    "incremental": true,                  /* TS 在初次编译时会创建缓存文件, 再次编译会读取这个缓存文件 */
    "tsBuildInfoFile": "./.tsbuildinfo",  /* 缓存文件的存储位置 */
    "diagnostics": true,                  /* 打印诊断信息 */
    
    /* Language and Environment */
    "target": "es2016",                   /* 目标语言的版本 */
    "lib": [],                            /* TS 需要引用的声明文件, ES5 默认引用 DOM、ES5、ScriptHost */
    "jsx": "preserve",                    /* JSX 解析器 */
    "jsxFactory": "",                     /* JSX 语法的解析器 'React.createElement' or 'h' */
    
    /* Modules */
    "module": "commonjs",                 /* 生成代码的模板标准 */
    "rootDir": "./",                      /* 根目录 */
    "moduleResolution": "node",           /* 模块解析策略, TS 默认使用 node 解析策略, 即相对的方式导入 */
    "baseUrl": "./",                      /* 基本路径, 默认为当前目录 */
    "typeRoots": [],                      /* node_modules 的声明文件, 默认为 '/node_modules/@types' */
    "types": [],                          /* 加载的声明文件包 */
    "paths": {                            /* 路径映射 */
      "@/*": ["./src/*"]
    },
    
    /* JavaScript Support */
    "allowJs": false,                     /* 允许编译 JS, JSX 文件 */
    "checkJs": false,                     /* 允许在 JS 文件中报错, 通常与 allowJs 一起使用 */
    
    /* Emit */
    "declaration": false,                 /* 自动生成声明文件 */
    "declarationDir": "./types",          /* 声明文件存放目录 */
    "declarationMap": true,               /* 为声明文件生成 sourceMap */
    "emitDeclarationOnly": false,         /* 只生成声明文件, 不生成 JS 文件 */
    "sourceMap": true,                    /* 生成目标文件的 sourceMap 文件 */
    "inlineSourceMap": true,              /* 生成目标文件的 inline sourceMap */
    "outDir": "./",                       /* 输出目录 */
    "removeComments": true,               /* 删除注释 */
    "noEmit": false,                      /* 编译后不生成任何 JS 文件 */
    "noEmitOnError": true,                /* 发生错误时不输出任何文件 */
    "downlevelIteration": true,           /* 如果目标源是 ES3/ES5, 那么遍历器会有降级的实现 */
    
    /* Type Checking */
    "strict": true,                       /* 开启所有严格的类型检查 */
    "alwaysStrict": true,                 /* 在代码中注入 'use strict' */
    "noImplicitAny": true,                /* 不允许隐式的 'any' 类型 */
    "strictNullChecks": true,             /* 不允许把 'null' 和 'undefined' 赋值给其他类型的变量 */
    "strictFunctionTypes": true,          /* 不允许函数参数双向协变 */
    "strictBindCallApply": true,          /* 严格的 'bind', 'call', 'apply' 检查 */
    "strictPropertyInitialization": true, /* 类的实例属性必须初始化 */
    "noImplicitThis": true,               /* 不允许 'this' 有隐式的 'any' 类型 */
    "noUnusedLocals": true,               /* 检查声明了但未使用的局部变量（只提示不报错） */
    "noUnusedParameters": true,           /* 检查未使用的函数参数（只提示不报错） */
    "noFallthroughCasesInSwitch": true,   /* 防止 switch 语句贯穿（如果没有 break 语句后面不会执行） */
  },
  
  "include": [],                          /* 指定包含的编译列表 */
  "exclude": [],                          /* 指定排除的编译列表 */
  "files": [],                            /* 指定使用该配置的文件 */
}
```

## 声明文件 d.ts

在使用第三方库时，我们需要引用它的声明文件，才能获取对应的代码补全、接口提示等功能。

下面是一个 declare express 声明文件的例子。

```ts
declare module "express" {
  interface App {
    get(path: string, callback: (req: any, res: any) => void): void
    
    listen(port: number, callback?: () => void)
  }
  
  interface Express {
    (): App
  }
  
  const express: Express
  
  export default express
}
```
