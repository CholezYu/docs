# Less

## 嵌套

使用 Less 提供的嵌套语法代替 CSS 层叠

```less
.container {
  width: 200px;
  height: 200px;
  background-color: blue;

  &:hover /* & => container */ {
    background-color: orange;
  }

  .inner {
    width: 100px;
    height: 100px;
    background-color: red;
  }
}
```

## 变量

Less 可以定义变量

```less
@w: 10px;
@h: @w + 10px;

.box {
  width: @width;
  height: @height;
}
```

插值语法

```less
@my-selector: .container;
@my-url: "1.png";

@{my-selector} {
  width: 100px;
  height: 100px;
  background: url("./img/@{my-url}");
}
```

加法运算，算术运算符在加法运算之前会进行单位转换

```less
@a: 100;
@b: 20px;

.box {
  width: @a + @b; /* 120px */
  height: 200px;
}
```

减法运算，算术运算符在减法运算之前会进行单位转换

```less
@a: 100;
@b: 20px;

.box {
  width: @a - @b; /* 80px */
  height: 200px;
}
```

乘法运算

```less
@a: 100;
@b: 20px;

.box {
  width: @a * @b; /* 2000px */
  height: 200px;
}
```

除法运算

```less
@a: 100;
@b: 20px;

.box {
  width: (@a / @b); /* 5px */
  height: 100px;
}
```

## 混入

混入可以将一组定义属性运用在选择器中

```less
.common() {
  border: 1px solid red;
}

.box {
  width: 100px;
  height: 100px;
  .common();
}
```

携带参数的混入

```less
.common(@w, @h, @c: red /* 默认参数 */) {
  width: @w;
  height: @h;
  color: @c;
}

.box1 {
  .common(100px, 200px, blue);
}

.box2 {
  .common(200px, 300px);
}
```

访问其他作用域中的混入函数

```less
.container {
  .common() {
    color: red;
  }
}

.box {
  .container .common();
}
```

模式匹配，可以根据传递不同的参数更改 mixin 函数

```less
.common(@_) {
  width: 100px;
  height: 100px;
}

.common(b) {
  background-color: blue;
}

.common(r) {
  background-color: red;
}

.box1 {
  .common(r);
}

.box2 {
  .common(b);
}
```

重载，可以根据传递参数的个数更改 mixin 函数

```less
.common(@a, @b) {
  width: @a;
  height: @b;
  background-color: red;
}

.common(@a, @b, @c) {
  width: @a;
  height: @b;
  background-color: @c;
}

.box1 {
  .common(100px, 100px);
}

.box2 {
  .common(200px, 200px, blue);
}
```

## 守卫

类似于 if...else 判断

```less
.common(@num) when (@num>=100) and (@num<=200) /* 与 */ {
  width: 150px;
  height: 150px;
  background-color: blue;
}

.common(@num) when (@num<100), (@num>200) /* 或 */ {
  width: 200px;
  height: 200px;
  background-color: red;
}

.box1 {
  .common(120);
}

.box2 {
  .common(210);
}
```

## 函数

Less 提供了预定义函数

```less
@flag: boolean(5 > 3);

.box1 {
  width: if((@flag) 100px, 200px); /* 100px */
  height: 300px;
}

@a: 200px;
@b: 3;

.box2 {
  width: ceil((@a / @b)); /* 67px */
  height: floor((@a / @b)); /* 66px */
}
```

## 导入

```less
@import url("https://necolas.github.io/normalize.css/8.0.1/normalize.css");
```

