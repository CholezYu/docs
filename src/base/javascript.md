---
title: JavaScript
icon: javascript
date: 2024-05-11
description: JavaScript
---

## 布尔判定

在需要判断真假的情况下，如进行 `!value` 或 `if(value)` 运算时，会进行布尔判定。

- 判定为 false：`false` `null` `undefined` `0` `NaN` `""`

- 判定为 true：其余数据。

## 强制转换原理

### Number()

参数为基本类型，按基本转换规则转换。

参数为对象，调用 valueOf 方法（默认情况下返回对象本身）：

- 如果 valueOf 返回基本类型值，则对该值使用 Number 函数；

- 如果 valueOf 返回的是对象，则改为调用 toString 方法。

- 如果 toString 返回基本类型值，则对该值使用 Number 函数；

- 如果 toString 返回的是对象，则报错。

```js
Number({ a: 1 }) // => NaN

// 等同于

function _Number(value) {
  if (typeof value.valueOf() === "object") {
    if (typeof value.toString() === "object") {
      return new TypeError("Cannot convert object to primitive value")
    }
    else {
      return Number(value.toString())
    }
  }
  else {
    return Number(value.valueOf())
  }
}

_Number({ a: 1 }) // => NaN

// 转换过程：{ a: 1 } => [object Object] => NaN
```

重新定义 valueOf 与 toString 方法。

```js
Number({
  valueOf() {
    return 5
  }
}) // valueOf 返回基本类型值，直接返回 Number(5) => 5

Number({
  toString() {
    return "z"
  }
}) // valueOf 返回对象本身，改为调用 toString，返回 Number("z") => NaN

Number({
  valueOf() {
    return {}
  },
  toString() {
    return {}
  }
}) // valueOf 和 toString 都返回对象，报错
```

### String()

参数为基本类型，按基本转换规则转换。

参数为对象，调用 toString 方法：

- 如果 toString 返回基本类型值，则对该值使用 String 函数；

- 如果 toString 返回的是对象，则改为调用 valueOf 方法。

- 如果 valueOf 返回基本类型值，则对该值使用 String 函数；

- 如果 valueOf 返回的是对象，则报错。

```js
String({ a: 1 }) // => [object Object]

// 等同于
String({ a: 1 }.toString()) // => [object Object]
```

同样可以重新定义 valueOf 与 toString 方法。如果 valueOf 和 toString 都返回对象，则报错。

## 函数

### 执行上下文

执行一段 JS 代码时，会做一个预处理，我们称之为执行上下文。

每执行一段代码，都会创建一个执行上下文，所以 JS 创建了一个执行上下文栈 (stack) 用来存放执行上下文。

预处理包含：1. 开辟一个内存空间；2. 确定变量对象；3. 完成作用域链；4. 确定 this 指向。

#### 全局执行上下文

当程序开始解析时，将全局执行上下文 (window) 压入到执行上下文栈中，对全局变量进行预处理：

- var 声明的全局变量赋值为 undefined，作为 window 的属性；

- function 声明的全局函数，作为 window 的方法；

- this 指向 window。

页面关闭时，全局执行上下文从执行上下文栈中弹出。

#### 函数执行上下文

当执行函数时，会创建一个函数执行上下文，并压入到执行上下文栈中，对局部变量进行预处理：

- 将实参赋值给形参，作为函数执行上下文的属性；

- 将实参列表赋值给 arguments，作为函数执行上下文的属性；

- var 声明的局部变量赋值为 undefined，作为函数执行上下文的属性；

- function 声明的局部函数，作为函数执行上下文的方法；

- this 指向调用函数的对象。

函数执行完成时，函数执行上下文会从执行上下文栈中弹出。

### 变量提升

通过 var 声明的变量会提升到所在作用域的顶部，但是变量的赋值还在原来的位置。

```js
a // => undefined
var a = 100
a // => 100

// 等同于
var a
a // => undefined
a = 100
a // => 100
```

通过 function 声明的函数（包括函数体）会提升到所在作用域的顶部，在此之后都可以调用。

先执行函数声明提升，再执行变量声明提升，如果变量名与已声明的函数名相同，变量声明失效（不影响赋值）。

### 作用域链

作用域链在函数声明时产生，在函数调用时将当前函数的变量对象放到作用域链上，完成作用域链。

在局部作用域中访问变量时，从当前作用域的变量对象中沿作用域链向上访问。

### 闭包

#### 产生闭包的条件

- 一个函数嵌套在另一个函数中；

- 内部函数访问了外部函数中定义的变量；

- 每调用一次外部函数，就会产生一个闭包。

#### 闭包的生命周期

产生：外部函数执行完。

死亡：存放闭包的变量变成垃圾对象（赋值为 null）。

#### 常见的闭包

将内部函数作为外部函数的返回值。

```js
function fn1() {
  var a = 2
  function fn2() {
    return a++
	}
  return fn2
}

var f = fn1() // 调用外部函数，产生一个闭包，并赋值给一个变量存放该闭包
```

将内部函数作为实参传递给另一个函数，在外部函数中调用。

```js
function fn(a, time) {
  setTimeout(() => {
    alert(a)
  }, time)
}

fn("延时输出", 2000) // 调用外部函数，产生一个闭包
```

#### 闭包的作用

- 外部函数执行完后，自由变量仍会存在于闭包中，延长了生命周期。

- 通过闭包可以操作自由变量，该操作由内部函数决定。

## 函数（ES6+）

### rest 参数

ES6 引入了 rest 参数，用于获取函数的剩余参数，这样就不需要使用 arguments 对象了。

rest 参数匹配的变量是一个数组，该变量将剩余的参数放入这个数组中。

下面的代码中 add 函数是一个求和函数，利用 rest 参数可以向该函数传入任意数目的参数。

```js
function add(...values) {
  let sum = 0
  
  values.forEach(value => {
    sum += value
  })
  
  return sum
}

add(2, 5, 3) // => 10
```

下面是一个 rest 参数代替 arguments 变量的例子，比较发现，rest 参数的写法更简洁易读。

```js
// arguments 变量的写法
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort()
}

// rest 参数的写法
const sortNumbers = (...numbers) => numbers.sort()
```

下面是一个利用 rest 参数改写数组 push 方法的例子。

```js
function push(arr, ...items) {
  items.forEach(item => {
    arr.push(item)
  })
}

const arr = []
push(arr, 1, 2, 3)
arr // => [1, 2, 3]
```

rest 参数只能是最后一个参数。

```js
function fn(a, ...b, c) {} // SyntaxError: Rest parameter must be last formal parameter
```

### name 属性

函数的 name 属性返回该函数的函数名。

```js
function fn() {}
fn.name // => "fn"
```

如果将一个匿名函数赋值给一个变量，在 ES5 中 name 的值为空字符串，而 ES6 中 name 的值为实际函数名。

```js
var fn = function() {}

// ES5
fn.name // => ""

// ES6
fn.name // => "fn"
```

如果将一个具名函数赋值给一个变量，ES5 和 ES6 中 name 的值都为这个具名函数原本的名字。

```js
let foo = function bar() {}

// ES5
foo.name // => "bar"

// ES6
foo.name // => "bar"
```

Function 构造函数返回的函数实例，name 的值为 anonymous。

```js
(new Function).name // => "anonymous"
```

bind 返回的函数，name 的值会加上 bound 前缀。

```js
function fn() {}

fn.bind({}).name // => "bound fn"

(function() {}).bind({}).name // => "bound"
```

### 箭头函数

- 没有 this，而是继承上一层作用域的 this；

- 没有原型对象，不能使用 new 关键字，不可以作为构造函数；

- 没有 arguments 对象，而是使用 rest 参数代替；

- 不能使用 yield 命令，因此箭头函数不能作为 Generator 函数。

## 对象

### this 指向

| 函数调用方式       | 示例                                   | this 指向                       |
| ------------------ | -------------------------------------- | ------------------------------- |
| 直接调用           | `fn()` `window.fn()`                   | window                          |
| 通过对象调用       | `obj.fn()`                             | 调用它的对象                    |
| 通过 new 调用      | `new Fn()`                             | 实例对象                        |
| `call()` `apply()` | `fn.call(thisArg)` `fn.apply(thisArg)` | `call()` `apply()` 的第一个参数 |

### in 操作符

判断某个属性是否在一个对象及其原型（链）上。

```js
const obj = { a: 1 }
Object.prototype.b = 2

"a" in obj // => true
"b" in obj // => true
"c" in obj // => false
```

### new 关键字

1. 创建一个空对象，作为实例对象；

2. 将构造函数的 `prototype` 赋值给这个空对象的 `__proto__`；

3. 调用 `call()`，让构造函数的 this 指向这个空对象；

4. 执行构造函数内部的代码。

> [!warning]
>
> 如果构造函数内部返回一个对象，new 就会返回该对象；否则，new 会返回 this 指向的对象。

```js
function Person(name, age) {
  this.name = name
  this.age = age
}

const person = new Person("Minji", 20)

// 等同于
const person = {}
person.__proto__ = Person.prototype
Person.call(person, "Minji", 20)
```

### instanceof 关键字

判断一个对象的原型链中，是否存在某个构造函数。

> [!tip]
>
> 也就是判断一个对象是否是某个构造函数实例化的结果，或者这个对象对应的构造函数是否与某个构造函数存在继承关系。

```js
const obj = {}
const arr = []
function Fn() {}

obj instanceof Fn // => false
obj instanceof Function // => false
obj instanceof Object // => true
arr instanceof Array // => true
```

### .hasOwnProperty

判断一个对象**自身**是否存在某个属性。

```js
const obj = {}
obj.__proto__.foo = "bar"

obj.hasOwnProperty("foo") // => false，'foo' 是 obj 原型上的属性
```

### 属性描述符

- value：属性值

- writable：是否可修改

- enumerable：是否可枚举

- configurable：是否可被重新定义

- getter

- setter

### Object.create

创建一个对象，并指定它的原型。常用于创建一个**纯空**对象。

```js
const obj = {}
obj.__proto__ // <=> Object.prototype

// 创建一个纯 “空” 对象
const obj = Object.create(null)
Object.getPrototypeOf(obj) // => null
```

它也可以使用属性描述符创建对象。

```js
const person = Object.create(null, {
	name: { value: "Minji", enumerable: true },
	sex: { value: "female" }
})

person // => { name: "Minji", sex: "female" }
```

### Object.defineProperty

使用属性描述符为对象定义或修改一个属性。

```js
const person = { name: "Minji" }

Object.defineProperty(person, "age", {
  value: 20,
  enumerable: true
})

person // => { name: "Minji", age: 20 }
```

### Object.defineProperties

使用属性描述符为对象定义或修改多个属性。

```js
const person = { name: "Minji" }

Object.defineProperties(person, {
  age: { value: 20, enumerable: true },
  sex: { value: "female", enumerable: true }
})

person // => { name: "Minji", age: 20, sex: "female" }
```

### 继承

组合继承（构造函数继承 + 原型链继承）。

> [!note]
>
> 构造函数继承：调用 `call()` 改变父类的 this，让子类也能使用父类的属性。
>
> 原型链继承：调用 `Object.setPrototypeOf()` 指定子类原型对象的原型，确认原型链。

```js
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.fn = function () {
  // ...
}

function Student(name, age, sex) {
  // 继承构造函数
  // 此次调用，Person 中的 this 就是 Student 中的 this
  // 相当于往 Student 中的 this 上添加了 name 和 age 属性
  Person.call(this, name, age)
  this.sex = sex
}

// 继承原型链
// ES6+
Object.setPrototypeOf(Student.prototype, Person.prototype)

// 或（ES6 之后不推荐）
Student.prototype = Object.create(Person.prototype)
// 注意：使用这种方式继承原型链，会导致 `Student.prototype` 为空对象 {}
// `Student.prototype.constructor` 会指向 `Person.prototype.constructor`，也就是 Person
// 所以需要将 `Student.prototype.constructor` 改回 Student
Student.prototype.constructor = Student
```

ES6 Class 继承。

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class Student extends Person {
  constructor(name, age, sex) {
    // 如果需要使用父类的属性，必须调用 super 方法
    super(name, age)
    this.sex = sex
  }
}
```

## 对象（ES6+）

### Object.getPrototypeOf

获取一个对象的原型。

> [!warning]
>
> JS 不允许我们直接操作 `obj.__proto__`。

```js
const obj = {}

Object.getPrototypeOf(obj) // <=> Object.prototype

// 等同于
obj.__proto__
```

### Object.setPrototypeOf

给一个对象指定原型（对象或 null）。

> [!warning]
>
> JS 不允许我们直接操作 `obj.__proto__`。

```js
const obj = {}

Object.setPrototypeOf(obj, null)

// 等同于
obj.__proto__ = undefined // 这里注意！不是 null
```

### Object.keys

遍历对象，返回对象属性名组成的数组。

```js
Object.keys({ name: "Minji", age: 20 }) // => ['name', 'age']
```

### Object.values

遍历对象，返回对象属性值组成的数组。

```js
Object.values({ name: "Minji", age: 20 }) // => ['Minji', 20]
```

### Object.entries

遍历对象，返回对象属性名与属性值组成的二维数组。

```js
Object.entries({ name: "Minji", age: 20 }) // => [['name', 'Minji'], ['age', 20]]
```

### Object.assign

合并对象，并返回。可用于浅拷贝。

```js
const obj = { foo: 1 }

Object.assign({}, obj)

// 等同于
{ ...obj }
```

### Object.freeze

冻结对象属性。如果属性是对象或数组，可以改变其内部结构，必要时需要深冻结。

```js
const person = { name: "Minji", age: 20 }

Object.freeze(person)

person.age = 30
person // => { name: 'Minji', age: 20 }
```

### Object.is

判断两个值是否相等，解决了 "==" 会自动转换数据类型、`NaN === NaN => false` 等问题。

```js
1 == "1" // => true
Object.is(1, "1") // => false

NaN === NaN // => false
Object.is(NaN, NaN) // => true
```

### Object.hasOwn

判断一个属性是否是对象**自身**的属性，与 `.hasOwnProperty()` 相同。

```js
const person = { name: "Minji", age: 20 }

person.__proto__.foo = "bar"

person.hasOwnProperty("foo") // => false
Object.hasOwn(person, "foo") // => false
```

## 数组

### .push

向数组尾部添加元素，返回新数组的长度。

```js
const arr = [2, 3, 4]

arr.push(5, 6)

arr // => [2, 3, 4, 5, 6]
```

### .pop

删除数组最后一个元素，返回被删除的元素。

```js
const arr = [1, 2, 3, 4, 5]

arr.pop()

arr // => [1, 2, 3, 4]
```

### .unshift

向数组首部添加元素，返回新数组的长度。

```js
const arr = [2, 3, 4]

arr.unshift(1)

arr // => [1, 2, 3, 4]
```

### .shift

删除数组第一个元素，返回被删除的元素。

```js
const arr = [1, 2, 3, 4, 5]

arr.shift()

arr // => [2, 3, 4, 5]
```

### .splice

删除元素 | 插入元素，返回被删除的元素。

```js
/* 删除元素 */

const arr = [2, 3, 4, 5, 6]

arr.splice(1, 2) // [3, 4]

arr // => [2, 5, 6]
```

```js
/* 替换元素 */

const arr = [2, 3, 4, 5, 6]

arr.splice(1, 3, 7, 8, 9) // => [3, 4, 5]

arr // => [2, 7, 8, 9, 6]
```

```js
/* 插入元素 */

const arr = [2, 3, 4, 5, 6]

arr.splice(1, 0, 7, 8, 9) // => []

arr // => [2, 7, 8, 9, 3, 4, 5, 6]
```

### .sort

将元素按 UTF-16 升序排列。可以传入比较函数进行排序。

```js
const arr = [
  { name: "张三", age: 18 },
  { name: "李四", age: 25 },
  { name: "王五", age: 16 }
]

arr.sort((a, b) => a.age - b.age)

arr // => [{ name: "王五", age: 16 }, { name: "张三", age: 18 }, { name: "李四", age: 25 }]
```

### .reverse

反转数组中的元素。

```js
const arr = [1, 2, 3, 4, 5]

arr.reverse()

arr // => [5, 4, 3, 2, 1]
```

### .slice

截取数组，返回被截取的部分。

```js
const arr = [2, 3, 4, 5, 6]

arr.slice(1, 3) // => [3, 4]
arr.slice(0, arr.length) // => [2, 3, 4, 5, 6]
arr.slice() // => [2, 3, 4, 5, 6]
```

### .concat

合并数组，并返回。

```js
const arr = [2, 3, 4]

arr.concat([5, 6]) // => [2, 3, 4, 5, 6]
```

### .join

拆分数组，将被拆分的部分组成字符串，并返回。

```js
const arr = ["h", "e", "l", "l", "o"]

arr.join("") // => "hello"
arr.join(" ") // => "h e l l o"
arr.join("") === "" // => false, 判断 arr 是否为空数组
```

### .indexOf

查找元素，返回元素首次出现的索引。若不存在，则返回 -1。

```js
const arr = ['a', 'b', 'c', 'd', 'b']

arr.indexOf('b') // => 1
arr.indexOf('b', 2) // => 4
arr.indexOf('g') // => -1
```

### .lastIndexOf

查找元素（反向），返回元素首次出现的索引。若不存在，则返回 -1。

```js
const arr = ['a', 'b', 'c', 'd', 'b']

arr.lastIndexOf('b') // => 4
arr.lastIndexOf('b', -2) // => 1
arr.lastIndexOf('g') // => -1
```

### .forEach

遍历数组。

```js
const arr = [4, 9, 16, 25]

arr.forEach(item => item) // => 4 9 16 25
```

### .filter

遍历数组，过滤出一个新数组。

```js
const arr = [4, 9, 16, 25]

const newArr = arr.filter(item => item > 12)

newArr // => [16, 25]
```

### .map

遍历数组，映射出一个新数组。

```js
const arr = [4, 9, 16, 25]

const newArr = arr.map(item => Math.sqrt(item))

newArr // => [2, 3, 4, 5]
```

### .reduce

遍历数组，得到一个值。

```js
const arr = [4, 9, 16, 25]

const total = arr.reduce((prev, item) => prev + item, 1)

total // => 55 (1 + 4 + 9 + 16 + 25)
```

## 数组（ES6+）

### Array.of

创建数组，相比于 `new Array()`，`Array.of()` 可以创建**一个元素**的数组。

```js
new Array(3) // => [empty × 3]

Array.of(3) // => [3]
```

### Array.from

将伪数组或可迭代对象转换为数组。

```js
Array.from(document.querySelectorAll("li"))
```

可以用于生成一个数字序列。

```js
Array.from([1, 2, 3], value => value * 2) // => [2, 4, 6]

Array.from({ length: 5 } /* [empty × 5] */, (value, index) => index + 3) // => [3, 4, 5, 6, 7]
```

### .includes

判断数组中是否含有某元素。

```js
const arr = [1, 2, 3, 4, 5]

arr.includes(3) // => true
arr.includes(9) // => false
```

### .fill

填充数组。

```js
const arr = [1, 2, 3]

arr.fill("*")

arr // => ["*", "*", "*"]
```

### .flat

数组扁平化。

```js
const arr = [1, 2, 3, [4, 5, [6]]]

arr.flat(2) // => [1, 2, 3, 4, 5, 6]
```

### .find

遍历数组，返回符合条件的第一个元素。

```js
const arr = [1, 3, 5, 7, 9]

arr.find(item => item > 3) // => 5
```

### .findIndex

遍历数组，返回符合条件的第一个元素的索引。

```js
const arr = [1, 3, 5, 7, 9]

arr.findIndex(item => item > 3) // => 2
```

## 字符串

### .indexOf

查找元素，返回元素首次出现的索引。若不存在，则返回 -1。

```js
let str = "hello world hello world"

str.indexOf("world") // => 6
str.indexOf("world", 10) // => 18
str.indexOf("woood") // => -1
```

### .lastIndexOf

查找元素（反向），返回元素首次出现的索引。若不存在，则返回 -1。

```js
let str = "hello world hello world"

str.lastIndexOf("world") // => 18
str.lastIndexOf("world", 10) // => 6
str.indexOf("woood") // => -1
```

### .slice

截取字符串，返回被截取的部分。

```js
let str = "hello world"

str.slice() // => 'hello world'
str.slice(6) // => 'world'
str.slice(2, 5) // => 'llo'
str.slice(3, -1) // => 'lo worl'
```

### .substring

截取字符串，返回被截取的部分。若 startIndex 大于 endIndex，则交换顺序。

```js
let str = "hello world"

str.substring(1, 4) // => 'ell'
str.substring(6) // => 'world'
str.substring(-10, -5) // => ''
```

### .substr

截取字符串，返回被截取的部分。

> 不推荐使用。

```js
let str = "hello world"

str.substr(6, 3) // => 'wor'
str.substr(3) // => 'lo world'
```

### .toUpperCase

将字符串转为大写，并返回。

```js
let str = "I love JavaScript"

str.toUpperCase() // => 'I LOVE JAVASCRIPT'
```

### .toLowerCase

将字符串转为小写，并返回。

```js
let str = "I love JavaScript"

str.toLowerCase() // => 'i love javascript'
```

### .split

拆分字符串，将被拆分的部分组成数组，并返回。

```js
let str = "hello world"

str.split() // => ['hello world']
str.split("") // => ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
str.split(" ") // => ['hello', 'world']
```

```js
let str = "fdaf123fdsa12321fdas123fda"

str.split(/\d+/) // => ['fdaf', 'fdsa', 'fdas', 'fda']
```

### .search

查找元素，返回元素（正则）首次出现（匹配）的索引。若不存在，则返回 -1。

```js
let str = "hello world 666"

str.search(/[0-9]+/g) // => 12
```

### .match

返回匹配项组成的数组。若匹配不到，则返回 -1。

```js
let str = "1 hello 2 world 666"

str.match(/[0-9]+/g) // => [1, 2, 666]
```

### .replace

替换（第一个）匹配到的元素。

```js
let str = "18-31-56"
 
// 当第一个参数是字符串时, 只替换第一个匹配项
str.replace("-", ":") // => '18:31-56'

// 第一个参数使用正则表达式全局匹配, 可以替换所有匹配项
str.replace(/-/g, ":") // => '18:31:56'


let str = "html and css"

str.replace(/html|css/g, value => value.toUpperCase()) // => 'HTML and CSS'
```

## 字符串（ES6+）

### .includes

判断字符串中是否含有某元素。

```js
let str = "hello world"

str.includes("world") // => true
str.includes("yeah") // => false
```

### .repeat

重复字符串，并返回。

```js
let str = "abc"

str.repeat(3) // => 'abcabcabc'
```

### .replaceAll

替换所有匹配到的元素。

```js
let str = "18-31-56"
 
str.replaceAll("-", ":") // => '18:31:56'

// 等同于
str.replace(/-/g, ":") // => '18:31:56'
```

### .trim

去除字符串两边的空格，并返回。

```js
let str = "   hello world   "

str.trim() // => 'hello world'
```

### .trimStart

去除字符串首部的空格，并返回。

```js
let str = "   hello world   "

str.trimStart() // => 'hello world   '
```

### .trimEnd

去除字符串尾部的空格，并返回。

```js
let str = "   hello world   "

str.trimEnd() // => '   hello world'
```

### .startsWith

判断字符串是否以某元素开始。

```js
let str = "abcdefg"

str.startsWith("ab") // => true
```

### .endsWith

判断字符串是否以某元素结束。

```js
let str = "abcdefg"

str.endsWith("ef") // => false
```

### .padStart

当字符串不足某长度时，在首部填充元素，并返回。

```js
let str = "abc"

str.padStart(10, "*") // => '*******abc'
```

### .padEnd

当字符串不足某长度时，在尾部填充元素，并返回。

```js
let str = "abc"

str.padEnd(10, "*") // => 'abc*******'
```

## 正则

### 匹配规则

| 规则 | 描述                                     |
| ---- | ---------------------------------------- |
| `\d` | 匹配数字                                 |
| `\D` | 匹配非数字                               |
| `\s` | 匹配空白字符（空格、回车、换行、制表符） |
| `\S` | 匹配非空白字符                           |
| `\w` | 匹配单词字符（字母、数字、下划线）       |
| `\W` | 匹配非单词字符                           |
| `^`  | 匹配以某个字符开始                       |
| `$`  | 匹配以某个字符结束                       |

### 量词

| 量词    | 描述             |
| ------- | ---------------- |
| `{n}`   | 出现 n 次        |
| `{n,m}` | 出现 n~m 次      |
| `{n,}`  | 出现 >=n 次      |
| `*`     | 出现任意次数     |
| `?`     | 出现 0 次或 1 次 |
| `+`     | 出现 >=1 次      |

### 邮箱正则

```js
// ^[非空白字符 >=1 次]@[非空白字符非. >=1 次].[小写字母 1~2 次]$
const reg = /^\S+@[^\s.]+(\.[a-z]+){1,2}$/
```

## 正则（ES6+）



## Set & Map

### Set

set 常用于数组去重。

```js
const arr = [1, 2, 3, 4, 5, 5, 5, 5]

[...new Set(arr)] // => [1, 2, 3, 4, 5]
Array.from(new Set(arr)) // => [1, 2, 3, 4, 5]
```

向 set 中添加一个元素。

```js
const set = new Set()

set.add(1).add(2).add(2) // => Set(2) {1, 2}
```

删除 set 中的某个元素。

```js
const set = new Set([1, 2])

set.delete(1) // => true, 表示删除成功
set // => Set(1) {2}
```

判断 set 中是否存在某个元素。

```js
const set = new Set([1, 2])

set.has(1) // => true
set.has(2) // => true
set.has(3) // => false
```

### Map

map 与对象的区别就是，map 的 key 可以是任意类型（含引用类型）。

向 map 中添加一个元素。

```js
const map = new Map()

map.set([1, 2 ,3 ], "abc")
```

获取 map 中的元素。

```js
const map = new Map()

const fnKey = () => {}
map.set(fnKey, 1)

map.get(fnKey) // => 1
```

删除 map 中的某个元素。

```js
const map = new Map()

const objKey = { a: 1 }
const arrKey = [2]
map.set(objKey, "f")
map.set(arrKey, "b")

map // => Map(2) { { a: 1 } => "f", [2] => "b" }

map.delete(arrKey) // => true, 表示删除成功
map // => Map(1) { { a: 1 } => "f" }
```

判断 map 中是否存在某个元素。

```js
const map = new Map()

map.set(true, "a")
map.set(null, "b")

map.has(true) // => true
map.has(null) // => true
map.has("fz") // => false
```

### WeakMap

WeakMap 是弱引用，不会被计入垃圾回收策略，也不能进行遍历。并且，WeakMap 的 key 只能是引用类型。

当一个对象的引用次数降为 0，就会被垃圾回收机制回收。

```js
let ctx = { a: 1 } // 引用次数：1

let dpt = ctx // 引用次数：2

const map = new Map()
map.set(ctx, "f") // 引用次数：3

const weakmap = new WeakMap()
weakmap.set(ctx, "b") // 引用次数：3, 弱引用不会增加引用次数

ctx = null // 引用次数 -1
dpt = null // 引用次数 -1
map.clear() // 引用次数 - 1

weakmap // => WeakMap {}
```

### WeakSet

与 WeakMap 一样，WeakSet 也是弱引用，也不能进行遍历。同样，WeakSet 的元素也只能是引用类型。

## Proxy

对引用类型的操作（属性查找、赋值、枚举、函数调用）进行拦截和自定义，返回一个代理对象。

```js
const obj = { a: 1, b: 2 }

const objProxy = new Proxy(obj, {
  // 拦截取值操作
  get(target, p, receiver) {
  
  },
  
  // 拦截赋值操作
  set(target, p, value, receiver) {
  
  },
  
  // 拦截函数的调用
  apply(target, thisArg, argArray) {
  
  },
  
  // 拦截 in 操作符
  has(target, p) {
  
  },
  
  // 拦截 for...in
  ownKeys(target) {
  
  },
  
  // 拦截 new 操作符
  construct(target, argArray, newTarget) {
  
  },
  
  // 拦截 delete 操作符
  deleteProperty(target, p) {
  
  }
})
```

## Reflect

Reflect 是 ES6 推荐的操作对象的方法。

```js
const obj = { a: 1, b: 2 }

obj.a // => 1
Reflect.get(obj, "a") // => 1

Reflect.set(obj, "b", 3) // => true, 表示修改成功
obj // => { a: 1, b: 3 }
```

## Promise

### Promise.resolve

```js
Promise.resolve(value)

// 等同于
new Promise((resolve, reject) => {
  resolve(value)
})
```

### Promise.reject

```js
Promise.reject(error)

// 等同于
new Promise((resolve, reject) => {
  reject(error)
})
```

### Promise.all

当所有 Promise 都成功时，`Promise.all()` 才会成功，`.then()` 的值为这些 Promise 的值组成的数组；

只要有一个 Promise 失败，`Promise.all()` 就会失败，`.catch()` 的值为第一个失败的 Promise 的值。

```js
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)
const p4 = new Promise((resolve, reject) => {})

Promise.all([p1, p2]) // => Promise { <state>: 'fulfilled', <value>: [1, 2] }

Promise.all([p1, p2, p3]) // => Promise { <state>: 'rejected', <reason>: 3 }

Promise.all([p1, p2, p4]) // => Promise { <state>: 'pending' }
```

### Promise.allSettled

当所有 Promise **改变状态**时，`Promise.allSettled()` 就会成功；

只要有一个 Promise 为 pending 状态，`Promise.allSettled()` 会一直处于 pending 状态。

`.then()` 的值为包含 { 这些 Promise 的状态和值 } 组成的数组。

```js
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)

Promise.allSettled([p1, p2, p3])
/* => Promise { <state>: 'fulfilled', [
  { status: 'fulfilled', value: 1 },
  { status: 'fulfilled', value: 2 },
  { status: 'rejected', reason: 3 }
] } */
```

### Promise.any

当所有 Promise 都失败时，`Promise.any()` 才会失败；

只要有一个 Promise 成功，`Promise.any()` 就会成功。

### Promise.race

只要有一个 Promise 状态发生改变，`Promise.race()` 就会随之改变（状态和值与其保持一致）。

`.then()` 的值为率先改变状态的 Promise 的值。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 100)
})
const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)

Promise.race([p1, p2, p3]).then(value => value) // => 'fulfilled' 2
```

### then 的返回值

返回非 Promise 的任意值，`.then()` 返回的 Promise 状态为 fulfilled，值为 [value]。

```js
new Promise((resolve, reject) => {
  reject(1)
}).catch(
  error => {
    error // => 1
    return 2
  }
).then(
  value => value // => 2
)
```

返回一个 Promise，`.then()` 返回的 Promise 的状态和值与其保持一致。

```js
new Promise((resolve, reject) => {
  reject(1)
}).catch(
  error => {
    error // => 1
    return Promise.reject(2)
  }
).catch(
  error => error // => 2
)
```

抛出异常，`.then()` 返回的 Promise 状态为 rejected，值为 [error]。

```js
new Promise((resolve, reject) => {
  resolve(1)
}).then(
  value => {
    value  // => 1
    throw 2
  }
).catch(
  error => error  // => 2
)
```

### 异常穿透

在 Promise 链式调用中，如果 `.then()` 无法处理上一步的异常，会出现异常穿透，直到被 `.catch()` 捕获。

```js
new Promise((resolve, reject) => {
  reject(1)
}).then(
  () => 2 // 穿透
).then(
  () => 3 // 穿透
).then(
  () => {} // 穿透
).catch(
  error => { // 捕获
    error // 1
  }
)
```

### 中断 Promise 链

返回一个 pendding 状态的 Promise。

```js
new Promise((resolve, reject) => {
  reject(1)
}).catch(
  error => {
    return new Promise(() => {}) // 中断 Promise 链
  }
).then(
  value => {
    // 不执行
  }
)
```

### 异步任务

微任务：Promise、MutationObserver、queueMicrotask。

宏任务：定时器、DOM 事件、Ajax、setImmediate。

```js
setTimeout(() => {
  console.log(1)
})

queueMicrotask(() => {
  console.log(2)
})

Promise.resolve().then(() => {
  console.log(3)
})

console.log(4)

// 执行顺序: 4 2 3 1
```

## Iterator

### 基本使用

迭代器可以遍历可迭代对象。

> 可迭代对象：Array  Set  Map  String  NodeList  arguments

```ts
const set = new Set([1, 1, 2, 3])

const iterator = set[Symbol.iterator]()

iterator.next() // => { value: 1, done: false }
iterator.next() // => { value: 2, done: false }
iterator.next() // => { value: 3, done: false }
iterator.next() // => { value: undefined, done: true }
```

### 实现原理

实现一个遍历可迭代对象的函数。

> **数组**的解构和展开，底层原理就是通过迭代器实现的。

```ts
function iterate(iterable: any, callback: (current: any) => void) {
  const iterator = iterable[Symbol.iterator]()
  let current = { done: false }
  
  while (!current.done) {
    current = iterator.next()
    
    if (!current.done) {
      callback(current)
    }
  }
}

const set = new Set([1, 1, 2, 3])

iterate(set, current => {
  current // => { value: 1, done: false }  { value: 2, done: false }  { value: 3, done: false }
  current.value // => 1  2  3
})
```

### for...of

ES6 提供了 for...of 语法糖，不需要我们去实现迭代器的遍历函数。注意：只能用于可迭代对象。

```ts
const set = new Set([1, 1, 2, 3])

for (const value of set) {
  value // => 1  2  3
}
```

### 自定义可迭代对象

对象本身是不可迭代的，可以给它添加一个 `[Symbol.iterator]` 属性，让它变成可迭代对象。

```ts
const iterative = {
  max: 5,
  current: 0,
  [Symbol.iterator]() {
    return {
      max: this.max,
      current: this.current,
      next() {
        return this.current === this.max
          // iterate done
          ? {
            value: undefined,
            done: true
          }
          // iterating
          : {
            value: this.current++,
            done: false
          }
      }
    }
  }
}

for (const value of iterative) {
  value // => 0  1  2  3  4
}

[...iterative] // => [ 0, 1, 2, 3, 4 ]
```

## Generator

### 基本使用

生成器其实就是 Iterator 的语法糖，它可以简化对迭代器的操作。

```ts
function* generator() {
  yield Promise.resolve("first")
  yield "Generator"
  yield 123
  yield true
}

const iterator = generator()

iterator.next() // => { value: Promise { 'first' }, done: false }
iterator.next() // => { value: 'Generator', done: false }
iterator.next() // => { value: 123, done: false }
iterator.next() // => { value: true, done: false }
iterator.next() // => { value: undefined, done: true }
```

### 解决回调地狱

Generator 是早期解决回调地狱的方案，现在我们一般使用 async & await。

```ts
function f1() {
  setTimeout(() => {
    iterator.next("data1")
  }, 1000)
}

function f2() {
  setTimeout(() => {
    iterator.next("data2")
  }, 1000)
}

function f3() {
  setTimeout(() => {
    iterator.next("data3")
  }, 1000)
}

function* generator() {
  const r1 = yield f1() // => data1
  const r2 = yield f2() // => data2
  const r3 = yield f3() // => data3
}

const iterator = generator()

iterator.next()
```

## async & await

### async 函数

async 函数是 Promise 的语法糖。

```js
;(async () => {
  const result = 5
})()

// 等同于
Promise.resolve(5).then(value => {
  // ...
})
```

async 函数的返回值是一个 Promise 对象，且返回的 Promise 的结果由函数执行结果决定。

```js
;(async () => {
  try {
    console.log(1)
    console.log(2)
    throw 3
  }
  catch (error) {
    // ...
  }
})()

// 等同于
;(() => {
  return new Promise((resolve, reject) => {
    console.log(1)
    console.log(2)
    reject(3)
  }).catch(error => {
    // ...
  })
})()
```

### await 表达式

在 async 声明的异步函数中可以使用 await 关键字来调用异步函数。

> [!tip]
>
> ES2022 规范提出了 “顶层 await” 语法，浏览器在 ES2023 实现了 await 的顶层调用。
>
> 注意：nodejs 暂不支持！

```js
const result = await request()

// 等同于
request().then(value => {
  // ...
})
```

当我们使用 await 调用函数后，await 语句后面的所有代码会在 await 语句执行完之后加入到微任务队列。

```js
;(async () => {
  console.log(1)
  await console.log(2)
  console.log(3)
})()

console.log(4)

/* 等同于 */

;(() => {
  return new Promise(resolve => {
    console.log(1)
    console.log(2)
    resolve()
  }).then(
    () => console.log(3)
  )
})()

console.log(4)

// 执行顺序: 1 2 4 3
```

## Class



## DOM

[DOM - JavaScript 教程 - 网道 (wangdoc.com)](https://wangdoc.com/javascript/dom/)

### 获取 DOM

直接获取 DOM 元素。

```js
// 通过 ID 获取 DOM
document.getElementById()

// 通过标签名获取 DOM
document.getElementsByTagName()
element.getElementsByTagName()

// 通过类名获取 DOM
document.getElementsByClassName()
element.getElementsByClassName()

// 通过 CSS 选择器获取 DOM（推荐）
// 获取匹配到的第一个 DOM
document.querySelector()
element.querySelector()
// 获取所有匹配的 DOM
document.querySelectorAll()
element.querySelectorAll()
```

获取 “亲代” DOM 元素。

| API                              | 描述               |
| -------------------------------- | ------------------ |
| `element.parentElement`          | 获取父元素         |
| `element.parentNode`             | 获取父节点         |
| `element.offsetParent`           | 获取定位父元素     |
| `element.children`               | 获取（所有）子元素 |
| `element.childNodes`             | 获取（所有）子节点 |
| `element.firstElementChild`      | 获取第一个子元素   |
| `element.firstChild`             | 获取第一个子节点   |
| `element.lastElementChild`       | 获取最后一个子元素 |
| `element.lastChild`              | 获取最后一个子节点 |
| `element.previousElementSibling` | 获取上一个兄弟元素 |
| `element.previousSibling`        | 获取上一个兄弟节点 |
| `element.nextElementSilbing`     | 获取下一个兄弟元素 |
| `element.nextSibling`            | 获取下一个兄弟节点 |

一些特殊的 DOM 元素。

| API                        | 描述           |
| -------------------------- | -------------- |
| `document.documentElement` | 获取 html 元素 |
| `document.body`            | 获取 body 元素 |
| `document.head`            | 获取 head 元素 |

### 操作 DOM

创建 DOM 元素。

```js
// 创建一个 DOM 元素
document.createElement(element)

// 创建一个文本节点
document.createTextNode(textNode)
```

添加 DOM 元素。

```js
// 向 DOM 元素的末尾添加一个子元素
element.appendChild(childElement)

// 在一个子元素前面插入一个子元素
element.insertBefore(newChildElement, oldChildElement)
```

删除 DOM 元素。

```js
// 删除 DOM 元素
element.remove()

// 删除一个子元素
element.removeChild(childElement)
```

其他 DOM 操作。

```js
// 替换一个子元素
element.replaceChild(newChildElement, oldChildElement)

// 复制 DOM 元素
element.cloneNode()
// 复制 DOM 元素及其内容
element.cloneNode(true)
```

### DOM Style

```js
// 获取元素的行内样式
element.style["attr"]

// 设置元素的行内样式
element.style["attr"] = "value"

// 获取元素的实时样式，*不兼容 IE8*
getComputedStyle(element)["attr"]

// 获取元素的实时样式，*仅支持 IE8*
element.currentStyle["attr"]
```

### DOM className

```js
// 获取元素的类名
element.className

// 设置元素的类名
element.className = "className"

// 给元素添加一个类名
element.classList.add("className")

// 删除元素的类名
element.classList.remove("className")

// 判断元素是否具有该类名
element.classList.contains("className")

// 切换元素的类名
element.classList.toggle("className")
```

### DOM Attribute

```js
// 获取元素的属性
element.getAttribute("attr")

// 设置元素的属性
element.setAttribute("attr", "value")

// 移除元素的属性
element.removeAttribute("attr")

// 判断元素是否存在某个属性
element.hasAttribute("attr")
```

### DOM 尺寸和位置

#### DOM 尺寸

| API                                     | 用法                             |
| --------------------------------------- | -------------------------------- |
| `window.innerWidth`                     | 获取浏览器宽度（含滚动条）       |
| `window.innerHeight`                    | 获取浏览器高度（含滚动条）       |
| `document.documentElement.clientWidth`  | 获取浏览器宽度（不含滚动条）     |
| `document.documentElement.clientHeight` | 获取浏览器高度（不含滚动条）     |
| `element.clientWidth`                   | 获取元素宽度（不含边框和滚动条） |
| `element.clientHeight`                  | 获取元素高度（不含边框和滚动条） |
| `element.offsetWidth`                   | 获取元素宽度（含边框和滚动条）   |
| `element.offsetHeight`                  | 获取元素高度（含边框和滚动条）   |
| `element.scrollWidth`                   | 获取元素滚动区域的宽度           |
| `element.scrollHeight`                  | 获取元素滚动区域的高度           |
| `element.scrollTop`                     | 获取滚动条滚动过（到顶部）的距离 |
| `element.scrollLeft`                    | 获取滚动条滚动过（到左侧）的距离 |
| `element.clientLeft`                    | 获取元素左边框宽度               |
| `element.clientTop`                     | 获取元素上边框宽度               |

#### DOM 位置

| API                  | 用法                                 |
| -------------------- | ------------------------------------ |
| `element.offsetLeft` | 获取元素相对于定位父元素的水平偏移量 |
| `element.offsetTop`  | 获取元素相对于定位父元素的垂直偏移量 |
| `element.scrollLeft` | 获取元素水平滚动条滚动的距离         |
| `element.scrollTop`  | 获取元素垂直滚动条滚动的距离         |

#### getBoundingClientRect

获取元素的宽高及偏移量。

| 属性     | 描述                                  |
| -------- | ------------------------------------- |
| `width`  | 元素宽度 `content + padding + border` |
| `height` | 元素高度 `content + padding + border` |
| `x/left` | 元素相对于浏览器的水平偏移量          |
| `y/top`  | 元素相对于浏览器的垂直偏移量          |
| `right`  | `x/left + width`                      |
| `bottom` | `y/top + height`                      |

### DOM 事件

[事件参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/Events)

#### 事件类型

> 鼠标事件

| 事件名称     | 触发条件         |
| :----------- | ---------------- |
| `click`      | 鼠标点击         |
| `mousedown`  | 鼠标按下         |
| `mouseup`    | 鼠标松开         |
| `mousemove`  | 鼠标移动         |
| `mouseenter` | 鼠标移入         |
| `mouseleave` | 鼠标移出         |
| `mouseover`  | 鼠标移入（冒泡） |
| `mouseout`   | 鼠标移出（冒泡） |

> 键盘事件

| 事件名称  | 触发条件 |
| --------- | -------- |
| `keydown` | 键盘按下 |
| `keyup`   | 键盘松开 |

> 表单事件

| 事件名称 | 触发条件           |
| -------- | ------------------ |
| `input`  | 输入               |
| `focus`  | 获取焦点           |
| `blur`   | 失去焦点           |
| `change` | 内容改变且失去焦点 |
| `submit` | 提交表单           |

> 浏览器事件

| 事件名称 | 触发条件               |
| -------- | ---------------------- |
| `load`   | DOM 和资源加载完成之后 |
| `resize` | 浏览器窗口尺寸发生改变 |
| `scroll` | 滚动条滚动             |

> 事件属性

| 属性名称        | 描述                      |
| --------------- | ------------------------- |
| `event.clientX` | 鼠标相对于视口的 X 坐标   |
| `event.clientY` | 鼠标相对于视口的 Y 坐标   |
| `event.offsetX` | 鼠标相对于事件源的 X 坐标 |
| `event.offsetY` | 鼠标相对于事件源的 Y 坐标 |
| `event.pageX`   | 鼠标相对于页面的 X 坐标   |
| `event.pageY`   | 鼠标相对于页面的 Y 坐标   |

#### 事件传播

- 捕获阶段：

  - 事件从祖先元素向目标元素传播；

  - 捕获阶段触发事件：先触发祖先元素，再触发目标元素；

  - IE8 没有捕获阶段。

- 冒泡阶段：

  - 事件从目标元素向祖先元素传播；

  - 冒泡阶段触发事件：先触发目标元素，再触发祖先元素；

  - `addEventListener()` 默认在冒泡阶段触发事件，可设置参数在捕获阶段触发事件；

  - `attachEvent()` 默认在冒泡阶段触发事件。

- 阻止事件冒泡

  - `event.stopPropagation()`

  - `event.cancelBubble = true` IE8

- 阻止默认事件：

  - `event.preventDefault()`

  - `event.returnValue = false` IE8

  - `return false`

#### 事件委派

将多个元素的事件监听委托给祖先元素处理，当该元素中的事件被触发时，会一直冒泡到祖先元素。

祖先元素不会直接处理事件，而是通过 `event.target` 得到触发事件的元素，调用回调函数。

应用场景：

- 通过委派可以减少事件绑定的次数，提高了程序的性能；

- 添加新的子元素，会自动响应事件处理函数。
