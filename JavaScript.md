# JavaScript

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
console.log(a) // undefined
var a = 100
console.log(a) // 100

// 等同于
var a
console.log(a) // undefined
a = 100
console.log(a) // 100
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

## 函数（ES6）

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

add(2, 5, 3) // 10
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
arr // [1, 2, 3]
```

rest 参数只能是最后一个参数。

```js
function fun(a, ...b, c) {} // SyntaxError: Rest parameter must be last formal parameter
```

### name 属性

函数的 name 属性返回该函数的函数名。

```js
function fun() {}
fun.name // "fun"
```

如果将一个匿名函数赋值给一个变量，在 ES5 中 name 的值为空字符串，而 ES6 中 name 的值为实际函数名。

```js
var fun = function() {}

// ES5
fun.name // ""

// ES6
fun.name // "fun"
```

如果将一个具名函数赋值给一个变量，ES5 和 ES6 中 name 的值都为这个具名函数原本的名字。

```js
let foo = function bar() {}

// ES5
foo.name // "bar"

// ES6
foo.name // "bar"
```

Function 构造函数返回的函数实例，name 的值为 anonymous。

```js
(new Function).name // "anonymous"
```

bind 返回的函数，name 的值会加上 bound 前缀。

```js
function fun() {}

fun.bind({}).name // "bound fun"

(function() {}).bind({}).name // "bound"
```

### 箭头函数

- 没有 this，而是继承上一层作用域的 this；

- 没有原型对象，不能使用 new 关键字，不可以作为构造函数；

- 没有 arguments 对象，而是使用 rest 参数代替；

- 不能使用 yield 命令，因此箭头函数不能作为 Generator 函数。

## 对象

### new 关键字

1. 创建一个空对象，作为将要返回的实例对象；

2. 将这个空对象的原型，指向构造函数的 prototype 属性；

3. 将这个空对象赋值给函数内部的 this；

4. 开始执行构造函数内部的代码。

如果构造函数内部返回一个对象，new 就会返回该对象；否则，new 会返回 this 指向的对象。

### in 关键字

`prop in obj`

判断一个属性是否在一个对象或其原型链上。

### instanceof 关键字

`obj instanceof constructor`

判断一个构造函数的原型对象是否在某个实例对象的原型链上。

### obj.hasOwnProperty

`obj.hasOwnProperty(prop)`

判断一个属性是否是对象自身的属性。

### obj.isPrototypeOf

`obj.isPrototypeOf(other)`

判断一个对象是否是另一个对象的原型（在其原型链上）。

### descriptor 描述符

- value: 属性值，默认为 undefined。

- writable: 是否可修改，默认为 false。

- enumerable: 是否可枚举，默认为 false。

- configurable: 是否可删除，默认为 false。

- get: getter 函数。

- set: setter 函数。

### Object.create

`Object.create(proto, [descriptor])`

创建一个对象，并指定它的原型对象。

```js
const obj = Object.create(null, {
	name: {
		value: "Bob",
		enumerable: true
	},
	sex: {
		value: "男"
	}
})

obj // { name: "Bob", sex: "男" }
```

### Object.defineProperty

`Object.defineProperty(obj, prop, descriptor)`

劫持对象的某个属性。

```js
const obj = { name: "Bob" }

Object.defineProperty(obj, "age", {
  value: 15,
  enumerable: true
})

obj // { name: "Bob", age: 15 }
```

### Object.defineProperties

`Object.defineProperties(obj, props: descriptor)`

劫持对象的多个属性。

```js
const obj = { name: "Bob" }

Object.defineProperties(obj, {
  "age": {
    value: 15,
    enumerable: true
  },
  "sex": {
    value: "男",
    enumerable: true
  }
})

obj // { name: "Bob", age: 15, sex: "男" }
```

### 继承

#### 组合继承

构造函数 + 原型链组合继承

```js
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.fun = function () {}

function Student(name, age) {
  // 继承构造函数
  Person.call(this, name, age)
}

// 继承原型链
Student.prototype = new Person()

// 修改原型对象的 constructor 属性
Student.prototype.constructor = Student
```

#### 类的继承

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class Student extends Person {
  constructor(name, age) {
    // 如果需要使用继承的属性或方法，必须调用 super 方法
    super(name, age)
  }
}
```

## 对象（ES6）

### Object.keys

`Object.keys(obj)`

遍历对象，返回对象属性名组成的数组。

```js
Object.keys({
  name: "xiaoming",
  age: 18
})
// ['name', 'age']
```

### Object.values

`Object.values(obj)`

遍历对象，返回对象属性值组成的数组。

```js
Object.values({
  name: "xiaoming",
  age: 18
})
// ['xiaoming', 18]
```

### Object.entries

`Object.entries(obj)`

遍历对象，返回对象属性名与属性值组成的二维数组。

```js
Object.entries({
  name: "xiaoming",
  age: 18
})
// [['name', 'xiaoming'], ['age', 18]]
```

### Object.assign

`Object.assign(target, ...sources)`

合并对象，并返回。可用于浅拷贝。

```js
const obj = { a: 1 }

Object.assign({}, obj)

/* 等价于 */

{ ...obj }
```

### Object.freeze

`Object.freeze(obj)`

冻结对象属性。如果属性是对象或数组，可以改变其内部结构，必要时需要深冻结。

```js
const person = {
  name: "xiaoming",
  age: 18
}

Object.freeze(person)

person.age = 30
person // { name: 'xiaoming', age: 18 }
```

### Object.is

`Object.is(value1, value2)`

判断两个值是否相等，解决了 "==" 会自动转换数据类型、`NaN === NaN => false` 等问题。

```js
1 == "1" // true
Object.is(1, "1") // false

NaN === NaN // false
Object.is(NaN, NaN) // true
```

### Object.hasOwn

`Object.hasOwn(obj, prop)`

判断一个属性是否是对象自身的属性，与 `obj.hasOwnProperty(prop)` 相同。

```js
const person = {
  name: "xiaoming",
  age: 18
}

person.__proto__.foo = "bar"

person.hasOwnProperty("foo") // false
Object.hasOwn(person, "foo") // false
```

## 数组

### arr.push

`arr.push(value...)`

向数组尾部添加元素，返回新数组的长度。

```js
const arr = [2, 3, 4]

arr.push(5)

arr // [2, 3, 4, 5]
```

### arr.pop

`arr.pop()`

删除数组最后一个元素，返回被删除的元素。

```js
const arr = [1, 2, 3, 4, 5]

arr.pop()

arr // [1, 2, 3, 4]
```

### arr.unshift

`arr.unshift(value...)`

向数组首部添加元素，返回新数组的长度。

```js
const arr = [2, 3, 4]

arr.unshift(1)

arr // [1, 2, 3, 4]
```

### arr.shift

`arr.shift()`

删除数组第一个元素，返回被删除的元素。

```js
const arr = [1, 2, 3, 4, 5]

arr.shift()

arr // [2, 3, 4, 5]
```

### arr.splice

`arr.splice(startIndex, [count], [value...])`

删除元素 | 添加元素，返回被删除的元素。

```js
/* 删除元素 */

const arr = [2, 3, 4, 5, 6]

arr.splice(1, 2) // [3, 4]

arr // [2, 5, 6]
```

```js
/* 替换元素 */

const arr = [2, 3, 4, 5, 6]

arr.splice(1, 3, 7, 8, 9) // [3, 4, 5]

arr // [2, 7, 8, 9, 6]
```

```js
/* 添加元素 */

const arr = [2, 3, 4, 5, 6]

arr.splice(1, 0, 7, 8, 9) // []

arr // [2, 7, 8, 9, 3, 4, 5, 6]
```

### arr.sort

`arr.sort()`

将元素按 UTF-16 升序排列。可以传入比较函数进行排序。

```js
const arr = [
  { name: "张三", age: 18 },
  { name: "李四", age: 25 },
  { name: "王五", age: 16 }
]

arr.sort((a, b) => a.age - b.age)

arr // [{ name: "王五", age: 16 }, { name: "张三", age: 18 }, { name: "李四", age: 25 }]
```

### arr.reverse

`arr.reverse()`

反转数组中的元素。

```js
const arr = [1, 2, 3, 4, 5]

arr.reverse()

arr // [5, 4, 3, 2, 1]
```

### arr.slice

`arr.slice([startIndex], [endIndex])`

截取数组，返回被截取的部分。

```js
const arr = [2, 3, 4, 5, 6]

arr.slice(1, 3) // [3, 4]
arr.slice(0, arr.length) // [2, 3, 4, 5, 6]
arr.slice() // [2, 3, 4, 5, 6]
```

### arr.concat

`arr.concat(arr1, [arr2])`

合并数组，并返回。

```js
const arr = [2, 3, 4]

arr.concat([5, 6]) // [2, 3, 4, 5, 6]
```

### arr.join

`arr.join([separator])`

拆分数组，将被拆分的部分组成字符串，并返回。

```js
const arr = ["h", "e", "l", "l", "o"]

arr.join("") // "hello"
arr.join(" ") // "h e l l o"
arr.join("") === "" // false, 判断 arr 是否为空数组
```

### arr.indexOf

`arr.indexOf(item, [startIndex])`

查找元素，返回元素首次出现的索引。若不存在，则返回 -1。

```js
const arr = ['a', 'b', 'c', 'd', 'b']

arr.indexOf('b') // 1
arr.indexOf('b', 2) // 4
arr.indexOf('g') // -1
```

### arr.lastIndexOf

`arr.lastIndexOf(item, [start])`

查找元素（反向），返回元素首次出现的索引。若不存在，则返回 -1。

```js
const arr = ['a', 'b', 'c', 'd', 'b']

arr.lastIndexOf('b') // 4
arr.lastIndexOf('b', -2) // 1
arr.lastIndexOf('g') // -1
```

### arr.forEach

`arr.forEach(callback(item, [index], [arr]))`

遍历数组。


```js
const arr = [4, 9, 16, 25]

arr.forEach(item => console.log(item)) // 4 9 16 25
```

### arr.filter

`arr.filter(callback(item, [index], [arr]))`

遍历数组，过滤出一个新数组。

```js
const arr = [4, 9, 16, 25]

const newArr = arr.filter(item => item > 12)

newArr // [16, 25]
```

### arr.map

`arr.map(callback(item, [index], [arr]))`

遍历数组，映射出一个新数组。


```js
const arr = [4, 9, 16, 25]

const newArr = arr.map(item => Math.sqrt(item))

newArr // [2, 3, 4, 5]
```

### arr.reduce

`arr.reduce(callback(prev, item, [index], [arr]), [initial])`

遍历数组，得到一个值。

```js
const arr = [4, 9, 16, 25]

const total = arr.reduce((prev, item) => prev + item, 1)

total // 55 (1 + 4 + 9 + 16 + 25)
```

## 数组（ES6）

### Array.of

`Array.of(value...)`

创建数组，相比于 `new Array()`，`Array.of()` 可以创建一个元素的数组。

```js
new Array(3) // [empty × 3]

Array.of(3) // [3]
```

### Array.from

`Array.from(arrLike, [mapFn(item)])`

将伪数组或可迭代对象转换为数组。

```js
Array.from(document.querySelectorAll("li"))
```

可以用于生成一个数字序列

```js
Array.from([1, 2, 3], value => value * 2) // [2, 4, 6]

Array.from({ length: 5 } /* [empty × 5] */, (value, index) => index + 3) // [3, 4, 5, 6, 7]
```

### arr.includes

`arr.includes(item, [index])`

判断数组中是否含有某元素。

```js
const arr = [1, 2, 3, 4, 5]

arr.includes(3) // true
arr.includes(9) // false
```

### arr.fill

`arr.fill(item, [startIndex], [endIndex])`

用某个元素填充数组。

```js
const arr = [1, 2, 3]

arr.fill("*")

arr // ["*", "*", "*"]
```

### arr.flat

`arr.flat([count])`

数组降维。

```js
const arr = [1, 2, 3, [4, 5, [6]]]

arr.flat(2) // [1, 2, 3, 4, 5, 6]
```

### arr.find

`arr.find(callback(item, [index, [arr]])`

遍历数组，返回符合条件的第一个元素。

```js
const arr = [1, 3, 5, 7, 9]

arr.find(item => item > 3) // 5
```

### arr.findIndex

`arr.findIndex(callback(item, [index], [array])`

遍历数组，返回符合条件的第一个元素的索引。

```js
const arr = [1, 3, 5, 7, 9]

arr.findIndex(item => item > 3) // 2
```

## 字符串

### str.indexOf

`str.indexOf(item, [startIndex])`

查找元素，返回元素首次出现的索引。若不存在，则返回 -1。

```js
let str = "hello world hello world"

str.indexOf("world") // 6
str.indexOf("world", 10) // 18
str.indexOf("woood") // -1
```

### str.lastIndexOf

`str.lastIndexOf(item, [startIndex])`

查找元素（反向），返回元素首次出现的索引。若不存在，则返回 -1。

```js
let str = "hello world hello world"

str.lastIndexOf("world") // 18
str.lastIndexOf("world", 10) // 6
str.indexOf("woood") // -1
```

### str.slice

`str.slice([startIndex, [endIndex]])`

截取字符串，返回被截取的部分。

```js
let str = "hello world"

str.slice() // "hello world"
str.slice(6) // "world"
str.slice(2, 5) // "llo"
str.slice(3, -1) // "lo worl"
```

### str.substring

`str.substring(startIndex, [endIndex])`

截取字符串，返回被截取的部分。若 startIndex 大于 endIndex，则交换顺序。

```js
let str = "hello world"

str.substring(1, 4) // "ell"
str.substring(6) // "world"
str.substring(-10, -5) // ""
```

### str.substr

`str.substr(startIndex, [count])`

截取字符串，返回被截取的部分。

> 不推荐使用

```js
let str = "hello world"

str.substr(6, 3) // "wor"
str.substr(3) // "lo world"
```

### str.toUpperCase

`str.toUpperCase()`

将字符串转为大写，并返回。

```js
let str = "I love JavaScript"

str.toUpperCase() // "I LOVE JAVASCRIPT"
```

### str.toLowerCase

`str.toLowerCase()`

将字符串转为小写，并返回。

```js
let str = "I love JavaScript"

str.toLowerCase() // "i love javascript"
```

### str.trim

`str.trim()`

去除字符串两边的空格。

```js
let str = "   hello world   "

str.trim() // "hello world"
```

### str.split

`str.split([separator|regexp, [count]])`

拆分字符串，将被拆分的部分组成数组，并返回。

```js
let str = "hello world"

str.split() // ["hello world"]
str.split("") // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
str.split(" ") // ["hello", "world"]
```

```js
let str = "fdaf123fdsa12321fdas123fda"

str.split(/\d+/) // ["fdaf", "fdsa", "fdas", "fda"]
```

### str.search

`str.search(item|regexp)`

查找元素，返回元素（正则）首次出现（匹配）的索引。若不存在，则返回 -1。

```js
let str = "hello world 666"

str.search(/[0-9]+/g) // 12
```

### str.match

`str.match(regexp)`

返回匹配项组成的数组。若匹配不到，则返回 -1。

```js
let str = "1 hello 2 world 666"

str.match(/[0-9]+/g) // [1, 2, 666]
```

### str.replace

`str.replace(item|regexp, newItem|function)`

替换匹配到的元素。

```js
let str = "18-31-56"
 
// 当第一个参数是字符串时, 只替换第一个匹配项
str.replace("-", ":") // 18:31-56

// 第一个参数使用正则表达式全局匹配, 可以替换所有匹配项
str.replace(/-/g, ":") // 18:31:56


let str = "html and css"

str.replace(/html|css/g, value => value.toUpperCase()) // HTML and CSS
```

## 字符串（ES6）

### str.includes

`str.includes(item)`

判断字符串中是否含有某元素。

```js
let str = "hello world"

str.includes("world") // true
str.includes("yeah") // false
```

### str.startsWith

`str.startsWith(item, [index])`

判断字符串是否以某元素开始。

```js
let str = "abcdefg"

str.startsWith("ab") // true
```

### str.endsWith

`str.endsWith(item, [index])`

判断字符串是否以某元素结束。

```js
let str = "abcdefg"

str.endsWith("ef") // false
```

### str.repeat

`str.repeat(count)`

重复字符串，并返回。

```js
let str = "abc"

str.repeat(3) // "abcabcabc"
```

### str.padStart

`str.padStart(length, [item])`

当字符串不足某长度时，在首部填充元素，并返回。

```js
let str = "abc"

str.padStart(10, "*") // "*******abc"
```

### str.padEnd

`str.padEnd(length, [item])`

当字符串不足某长度时，在尾部填充元素，并返回。

```js
let str = "abc"

str.padEnd(10, "*") // "abc*******"
```

### str.trimStart

`str.trimStart()`

去除字符串首部的空格。

```js
let str = "   hello world   "

str.trimStart() // "hello world   "
```

### str.trimEnd

`str.trimEnd()`

去除字符串尾部的空格。

```js
let str = "   hello world   "

str.trimEnd() // "   hello world"
```

## Set & Map

### Set

#### 基本用法

Set 本身是一个构造函数，用来生成 Set 数据结构，它类似于数组，但是成员的值都是唯一的，没有重复

下面的代码通过 add 方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值

```js
const set = new Set()

const arr = [2, 3, 5, 4, 5, 2, 2]
arr.forEach(x => set.add(x))

set // Set(4) { 2, 3, 5, 4 }

for (let item of set) {
  console.log(item) // 2 3 5 4
}
```

Set 函数可以接受一个数组 (或具有 iterable 接口的其他数据结构) 作为参数，用来初始化

下面的代码中，例一和例二是 Set 函数接受数组作为参数，例三是接受类似数组的对象作为参数

```js
// 例一
const set = new Set([1, 2, 3, 4, 4])
[...set] // [1, 2, 3, 4]
```

```js
// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5])
items.size // 5
```

```js
// 例三
function divs() {
  return [...document.querySelectorAll("div")]
}

typeof divs() // object

const set = new Set(divs())
set.size // 2

// 类似于
divs().forEach(div => set.add(div))
set.size // 2
```

下面的代码展示了一种去除数组重复成员的方法

```js
// 去除数组的重复成员
[...new Set(array)]
```

向 Set 加入值时不会发生类型转换，所以 5 和 "5" 是两个不同的值。Set 内部判断两个值是否相同时使用的算法为 "Same-value equality"，它类似于严格相等运算符 "==="，主要的区别是 NaN 等于自身，而严格相等运算符认为 NaN 不等于自身

下面的代码向 Set 实例添加了两个 NaN，但实际上只能添加一个，这表明在 Set 内部，两个 NaN 是相等的

```js
let set = new Set()
let a = NaN
let b = NaN
set.add(a)
set.add(b)
set // Set { NaN }
```

但是在 Set 内部，两个对象是不相等的

下面的代码表示，由于两个空对象不是严格相等，所以它们被视为两个值

```js
let set = new Set()

set.add({})
set.size // 1

set.add({})
set.size // 2
```

#### Set 实例的属性和操作方法

Set 结构的实例有以下属性

- Set.prototype.constructor: 构造函数，默认就是 Set 函数

- Set.prototype.size: 返回 Set 实例的成员总数

Set 实例的方法分为两大类：操作方法(用于操作数据) 和 遍历方法(用于遍历成员)。下面介绍 4 个操作方法

- add(value): 添加某个值，返回 Set 结构本身

- delete(value): 删除某个值，返回一个布尔值，表示删除是否成功

- has(value): 返回一个布尔值，表示参数是否为 Set 的成员

- clear(): 清除所有成员，没有返回值

上面这些属性和方法的实例如下

```js
const set = new Set()

set.add(1).add(2).add(2)

set.size // 2

set.has(1) // true
set.has(2) // true
set.has(3) // false

set.delete(1)
set // Set { 2 }
```

下面是一个对比，判断是否包含一个键，对象和 Set 结构的不同写法

```js
// 对象的写法
const properties = {
  'width': 1,
  'height': 1
}

if (properties['width']) {
  // ...
}
```

```js
// Set 的写法
const properties = new Set(['width', 'height'])

if (properties.has('height')) {
  // ...
}
```

Array.from 方法可以将 Set 结构转为数组

```js
const items = new Set([1, 2, 3, 4, 5])
const array = Array.from(items)
```

这样就可以提供一种去除数组重复元素的方法

```js
function dedupe(array) {
  return Array.from(new Set(array))
}

dedupe([1, 2, 2, 3]) // [1, 2, 3]
```

#### Set 实例的遍历方法

Set 结构的实例有 4 个遍历方法，可用于遍历成员

- keys(): 返回键名的遍历器

- values(): 返回键值的遍历器

- entries(): 返回键值对的遍历器

- forEach(): 使用回调函数遍历每个成员

Set 的遍历顺序就是插入顺序。使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用

##### keys()、values()、entries()

keys()、values()、entries() 返回的都是遍历器对象 (详见 Iterator)

由于 Set 结构没有键名，只有键值 (或者说键名和键值是同一个值)，所以 keys() 和 values() 的行为完全一致

```js
let set = new Set(['red', 'green', 'blue'])

for (let item of set.keys()) {
  console.log(item)
}

// 'red'
// 'green'
// 'blue'

for (let item of set.values()) {
  console.log(item)
}

// 'red'
// 'green'
// 'blue'
```

下面的代码中，entries() 返回的遍历器同时包括键名和键值，所以每次输出一个数组，其中为两个完全相同的元素

```js
let set = new Set(['red', 'green', 'blue'])

for (let item of set.entries()) {
  console.log(item)
}

// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```

Set 结构的实例默认可遍历，其默认遍历器生成函数就是它的 values() 方法

```js
Set.prototype[Symbol.iterator] === Set.prototype.values // true
```

这意味着，可以省略 values()，直接用 for...of 循环遍历 Set

```js
let set = new Set(['red', 'green', 'blue'])

for (let item of set) {
  console.log(item)
}

// 'red'
// 'green'
// 'blue'
```

##### forEach()

### WeakSet



### Map



### WeakMap

## Proxy

## Reflect

## Promise

### Promise 介绍

```js
new Promise((resolve, reject) => {
  if (true /* success */) {
    resolve(value)
  }
  else /* error */ {
    reject(error)
  }
}).then(
  value => { /* 成功的回调 */ },
  error => { /* 失败的回调 */ }
)
```

### Promise.prototype.then

`promise.then(value => {}, error => {})`

```js
promise.then(
  value => { /* 成功的回调 */ },
  error => { /* 失败的回调 */ }
)
```

### Promise.prototype.catch

`promise.catch(error => {})`

> 等同于 `promise.then(null, error => {})`

```js
promise.catch(
  error => { /* 失败的回调 */ }
)
```

### Promise.prototype.finally

`promise.finally(() => {})`

在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行回调函数。

```js
promise.finally(
  () => { /* promise 结束的回调 */ }
)
```

### Promise.resolve

`Promise.resolve(value)`

```js
/* 等同于 */
new Promise((resolve, reject) => {
  resolve(value)
})
```

### Promise.reject

`Promise.reject(error)`

```js
/* 等同于 */
new Promise((resolve, reject) => {
  reject(error)
})
```

### Promise.all

`Promise.all([p1, p2, p3])`

只有 p1, p2, p3 都成功时，p 才会成功，

如果 p 成功，p 返回的 Promise 结果为 p1, p2, p3 返回的 Promise 的值组成的数组；



只要 p1, p2, p3 有一个失败，p 就会失败，

如果 p 失败，p 返回的 Promise 结果为 p1, p2, p3 中第一个失败返回的 Promise 的值。

```js
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)

Promise.all([p1, p2]).then(
  value => console.log(value), // [1, 2]
  error => console.log(error)
)

Promise.all([p1, p2, p3]).then(
  value => console.log(value),
  error => console.log(error) // 3
)
```

### Promise.allSettled

`Promise.allSettled([p1, p2, p3])`

无论 p1, p2, p3 成功还是失败，p 都会成功，

p 返回的 Promise 结果为包含 [p1, p2, p3 返回的 Promise 的状态和值] 的对象组成的数组。

```js
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)

Promise.all([p1, p2, p3]).then(
  value => console.log(value)
  /* [
    { status: "fulfilled", value: 1 },
    { status: "fulfilled", value: 2 },
    { status: "rejected", reason: 3 }
  ] */
)
```

### Promise.any

`Promise.any([p1, p2, p3])`

只有 p1, p2, p3 都失败时，p 才会失败；

只要 p1, p2, p3 有一个成功，p 就会成功。

### Promise.race

`Promise.race([p1, p2, p3])`

只要 p1, p2, p3 中有一个状态发生改变，p 的状态就随之改变，

p 返回的 Promise 为 p1, p2, p3 中率先改变状态的实例返回的 Promise。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 100)
})

const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)

Promise.race([p1, p2, p3]).then(
  value => console.log(value), // 2
  error => console.log(error)
)
```

### then 的返回值

返回非 Promise 的任意值，`.then()` 返回的 Promise 状态为 fulfilled，值为 [value]。

```js
new Promise((resolve, reject) => {
  reject(1)
}).catch(
  error => {
    console.log(error)  // 1
    return 2
  }
).then(
  value => console.log(value)  // 2
)
```

返回一个 Promise，则该 Promise 的状态和值就会作为 `.then()` 返回的 Promise 的状态和值。

```js
new Promise((resolve, reject) => {
  reject(1)
}).catch(
  error => {
    console.log(error) // 1
    return Promise.reject(2)
  }
).catch(
  error => console.log(error) // 2
)
```

抛出异常，`.then()` 返回的 Promise 状态为 rejected，值为 [error]。

```js
new Promise((resolve, reject) => {
  resolve(1)
}).then(
  value => {
    console.log(value)  // 1
    throw 2
  }
).catch(
  error => console.log(error)  // 2
)
```

### 异常穿透

在 Promise 链式调用中，如果 `.then()` 无法处理上一步的异常，会出现异常穿透，直到被 `.catch()` 捕获。

```js
new Promise((resolve, reject) => {
  reject(1)
}).then(
  value => { // 穿透
    console.log(value)
    return 2
  }
).then(
  value => { // 穿透
    console.log(value)
    return 3
  }
).then(
  value => { // 穿透
    console.log(value)
  }
).catch(
  error => { // 捕获
    console.log(error) // 1
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
    console.log(error)
    return new Promise(() => {}) // 中断 Promise 链
  }
).then(
  value => { // 不执行
    console.log(value)
  }
)
```

### 任务队列

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

## Generator

## async & await

### async 函数

async 函数是 Promise 的语法糖

```js
const fn = async () => 5

/* 等价于 */

const fn = () => Promise.resolve(5)
```



```js
const fn = async () => {
  console.log(1)
  console.log(2)
}

/* 等价于 */

const fn = () => {
  return new Promise(resolve => {
    console.log(1)
    console.log(2)
    
    resolve()
  })
}
```







async 函数的返回值是一个 Promise 对象，且返回的 Promise 的结果由函数执行结果决定

### await 表达式

在 async 声明的异步函数中可以使用 await 关键字来调用异步函数

```js
const fn = async () => {
  const result = await axios.get()
}
```

当我们使用 await 调用函数后，await 语句（函数）下面的所有代码会在 await 语句执行完之后放入微任务队列

```js
;(async () => {
  console.log(1)
  await console.log(2)
  console.log(3)
})()

console.log(4)

/* 等价于 */

;(() => {
  return new Promise(resolve => {
    console.log(1)
    console.log(2)
    
    resolve()
  }).then(
    () => {
      console.log(3)
    }
  )
})()

console.log(4)

// 执行顺序: 1 2 4 3
```

## Class

## DOM

### 节点

|      | 节点类型（nodeType） | 节点名（nodeName） | 节点值（nodeValue） |
| :--: | :------------------: | :----------------: | :-----------------: |
| 元素 |          1           |     大写标签名     |        null         |
| 属性 |          2           |       属性名       |       属性值        |
| 文本 |          3           |       #text        |      文本内容       |
| 注释 |          8           |      #comment      |      注释内容       |

### 查询元素

| API                              | 用法               |
| -------------------------------- | ------------------ |
| `element.parentElement`          | 获取父元素         |
| `element.parentNode`             | 获取父节点         |
| `element.offsetParent`           | 获取定位父元素     |
| `element.children`               | 获取所有子元素     |
| `element.childNodes`             | 获取所有子节点     |
| `element.firstElementChild`      | 获取第一个子元素   |
| `element.firstChild`             | 获取第一个子节点   |
| `element.lastElementChild`       | 获取最后一个子元素 |
| `element.lastChild`              | 获取最后一个子节点 |
| `element.previousElementSibling` | 获取上一个兄弟元素 |
| `element.previousSibling`        | 获取上一个兄弟节点 |
| `element.nextElementSilbing`     | 获取下一个兄弟元素 |
| `element.nextSibling`            | 获取下一个兄弟节点 |

### 操作元素的样式

| API                                 | 用法                           |
| ----------------------------------- | ------------------------------ |
| `element.style.attr`                | 获取元素行内样式               |
| `element.style.attr = "value"`      | 设置元素行内样式               |
| `getComputedStyle(element)["attr"]` | 获取元素实时样式，*不兼容 IE8* |
| `element.currentStyle["attr"]`      | 获取元素实时样式，*仅支持 IE8* |

### 操作元素的属性

| API                                     | 用法                 |
| --------------------------------------- | -------------------- |
| `element.getAttribute("attr")`          | 获取元素属性         |
| `element.setAttribute("attr", "value")` | 设置元素属性         |
| `element.removeAttribute("attr")`       | 移除元素属性         |
| `element.hasAttribute("attr")`          | 判断元素是否有该属性 |

### 操作元素的类名

| API                                   | 用法                 |
| ------------------------------------- | -------------------- |
| `element.className`                   | 获取元素类名         |
| `element.className = "value"`         | 设置元素类名         |
| `element.classList.add("value")`      | 添加元素类名         |
| `element.classList.remove("value")`   | 删除元素类名         |
| `element.classList.contains("value")` | 判断元素是否有该类名 |
| `element.classList.toggle("value")`   | 切换元素类名         |

### 操作元素节点树

| API                                        | 用法                         |
| ------------------------------------------ | ---------------------------- |
| `document.createElement(element)`          | 创建一个元素                 |
| `document.createTextNode(textNode)`        | 创建一个文本节点             |
| `element.appendChild(child)`               | 添加一个子元素               |
| `element.remove()`                         | 删除一个元素                 |
| `element.removeChild(child)`               | 删除一个子元素               |
| `element.replaceChild(newChild, oldChild)` | 替换一个子元素               |
| `element.insertBefore(newChild, oldChild)` | 在一个子元素前插入一个子元素 |
| `element.cloneNode()`                      | 克隆一个元素                 |
| `element.cloneNode(true)`                  | 克隆一个元素及其内容         |

### 获取元素宽高

| API                                     | 用法                           |
| --------------------------------------- | ------------------------------ |
| `element.clientWidth`                   | 获取元素宽度（不含边框）       |
| `element.clientHeight`                  | 获取元素高度（不含边框）       |
| `element.offsetWidth`                   | 获取元素宽度（含边框）         |
| `element.offsetHeight`                  | 获取元素高度（含边框）         |
| `element.clientLeft`                    | 获取元素左边框宽度             |
| `element.clientTop`                     | 获取元素上边框宽度             |
| `window.innerWidth`                     | 获取浏览器宽度（包含滚动条）   |
| `window.innerHeight`                    | 获取浏览器高度（包含滚动条）   |
| `document.documentElement.offsetWidth`  | 获取浏览器宽度（不包含滚动条） |
| `document.documentElement.offsetHeight` | 获取浏览器高度（不包含滚动条） |
| `element.scrollWidth`                   | 获取元素滚动区域的宽度         |
| `element.scrollHeight`                  | 获取元素滚动区域的高度         |

### 获取元素偏移量

| API                  | 用法                                 |
| -------------------- | ------------------------------------ |
| `element.offsetLeft` | 获取元素相对于定位父元素的水平偏移量 |
| `element.offsetTop`  | 获取元素相对于定位父元素的垂直偏移量 |
| `element.scrollLeft` | 获取元素水平滚动条滚动的距离         |
| `element.scrollTop`  | 获取元素垂直滚动条滚动的距离         |

### 宽高偏移量函数

`element.getBoundingClientRect()`

获取元素的宽高及偏移量。

| 属性     | 描述                                  |
| -------- | ------------------------------------- |
| `width`  | 元素宽度 (content + padding + border) |
| `height` | 元素高度 (content + padding + border) |
| `x/left` | 元素相对于浏览器的水平偏移量          |
| `y/top`  | 元素相对于浏览器的垂直偏移量          |
| `right`  | x/left + width                        |
| `bottom` | y/top + height                        |

### 事件类型

#### 鼠标事件

| 事件名（属性）  | 触发条件（描述）          |
| :-------------- | ------------------------- |
| `onclick`       | 鼠标点击                  |
| `contextmenu`   | 右键点击                  |
| `dblclick`      | 鼠标双击                  |
| `onmousedown`   | 鼠标按下                  |
| `onmouseup`     | 鼠标松开                  |
| `onmousemove`   | 鼠标移动                  |
| `onmouseenter`  | 鼠标移入                  |
| `onmouseleave`  | 鼠标移出                  |
| `mouseover`     | 鼠标移入（含子元素）      |
| `onmouseout`    | 鼠标移出（含子元素）      |
| `event.clientX` | 鼠标相对于视口的 X 坐标   |
| `event.clientY` | 鼠标相对于视口的 Y 坐标   |
| `event.offsetX` | 鼠标相对于事件源的 X 坐标 |
| `event.offsetY` | 鼠标相对于事件源的 Y 坐标 |
| `event.pageX`   | 鼠标相对于页面的 X 坐标   |
| `event.pageY`   | 鼠标相对于页面的 Y 坐标   |

#### 键盘事件

| 事件名（属性）   | 触发条件（描述）          |
| ---------------- | ------------------------- |
| `onkeydown`      | 键盘按下                  |
| `onkeyup`        | 键盘松开                  |
| `onkeypress`     | 键盘按压                  |
| `event.keyCode`  | 按键的 ASCII 码，*已弃用* |
| `event.key`      | 按键别名                  |
| `event.altKey`   | Alt 键                    |
| `event.ctrlKey`  | Ctrl 键                   |
| `event.shiftKey` | Shift 键                  |

#### 滚轮事件

| 事件名（属性）     | 触发条件（描述）                                     |
| ------------------ | ---------------------------------------------------- |
| `onmousewheel`     | 滚轮滚动，*不支持 Firefox*                           |
| `DOMMouseScroll`   | 滚轮滚动，需要二级监听。*仅支持 Firefox*             |
| `event.wheelDelta` | 滚轮滚动的方向，正值向上，负值向下，*不支持 Firefox* |
| `event.detail`     | 滚轮滚动的方向，正值向下，负值向上，*仅支持 Firefox* |

#### 表单事件

| 事件名     | 触发条件           |
| ---------- | ------------------ |
| `oninput`  | 输入               |
| `onfocus`  | 获取焦点           |
| `onblur`   | 失去焦点           |
| `onchange` | 内容改变且失去焦点 |
| `onsubmit` | 提交表单           |

#### 浏览器事件

| 事件名     | 触发条件                   |
| ---------- | -------------------------- |
| `onload`   | DOM 结构和资源加载完成之后 |
| `onresize` | 浏览器窗口尺寸发生改变     |
| `onscroll` | 滚动条滚动                 |

#### 移动端事件

| 事件名         | 触发条件 |
| -------------- | -------- |
| `ontouchstart` | 触摸开始 |
| `ontouchmove`  | 正在触摸 |
| `ontouchend`   | 触摸结束 |

#### 其他事件

| 事件名            | 触发条件 |
| ----------------- | -------- |
| `ontransitionend` | 过渡结束 |
| `onanimationend`  | 动画结束 |

### 事件传播

- 捕获阶段: 

  - 事件从祖先元素向目标元素传播

  - 捕获阶段触发事件: 先触发祖先元素，再触发目标元素

  - IE8 没有捕获阶段

- 冒泡阶段: 

  - 事件从目标元素向祖先元素传播

  - 冒泡阶段触发事件: 先触发目标元素，再触发祖先元素

  - `addEventListener()` 默认在冒泡阶段触发事件，可设置参数在捕获阶段触发事件

  - `attachEvent()` 默认在冒泡阶段触发事件

- 阻止事件冒泡:

  - `event.stopPropagation()`

  - `event.cancelBubble = true` IE8

- 阻止默认事件: 

  - `event.preventDefault()`

  - `event.returnValue = false` IE8

  - `return false`

### 事件委派

将多个元素的事件监听委托给祖先元素处理，当该元素中的事件被触发时，会一直冒泡到祖先元素

祖先元素不会直接处理事件，而是通过 `event.target` 得到触发事件的元素，调用回调函数

应用场景: 

- 通过委派可以减少事件绑定的次数，提高了程序的性能

- 添加新的子元素，会自动响应事件处理函数
