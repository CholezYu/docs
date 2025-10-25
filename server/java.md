---
title: Java
icon: java
date: 2025-10-26
description: Java
---

## 类型转换

### 自动类型提升

在表达式计算或者赋值过程中，较低精度的基本数据类型会自动转换为较高精度的数据类型。

提升顺序如下：

```arduino
byte → short → int → long → float → double
```

> [!important]
>
> byte、short、char 运算时自动提升为 int。

```java
byte a = 10;
byte b = 10;

byte c = a + b; // ❌ 编译失败：需要强制类型转换
byte c = (byte) (a + b); // ✅ 正确

int c = a + b; // 20
float c = a + b; // 20.0

char c = 'a';
int d = a + b + c; // 117
```

### 强制类型转换

把一个高精度类型的值赋给低精度类型变量时，必须使用强制类型转换。

```java
double d = 12;

int i = d; // ❌ 编译失败
int i = (int) d; // ✅ 将 double 类型强制转为 int 类型
```

## 数组

### 遍历数组

一维数组。

```java
int[] arr = { 1, 2, 3, 4, 5 };

// for 循环
for (int i = 0; i < arr.length; i++) {
  System.out.println(arr[i]);
}

// for-each 循环
for (int item : arr) {
  System.out.println(item);
}

Arrays.toString(arr); // [1, 2, 3, 4, 5]
```

二维数组。

```java
int[][] arr = { { 1, 2, 3 }, { 4, 5 }, { 6, 7, 8, 9 } };

// for 循环
for (int i = 0; i < arr.length; i++) {
  System.out.println(Arrays.toString(arr[i]));
  
  for (int j = 0; j < arr[i].length; j++) {
    System.out.println(arr[i][j]);
  }
}

// for-each 循环
for (int[] row : arr) {
  System.out.println(Arrays.toString(row));
  
  for (int item : row) {
    System.out.println(item);
  }
}

Arrays.deepToString(arr); // [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
```

使用 Stream <Badge text="Java 8+" type="tip" /> 遍历二维数组。

```java
Arrays.stream(arr).forEach(row -> {
  System.out.println(Arrays.toString(row));
  
  for (int item : row) {
    System.out.println(item);
  }
});
```

### Arrays 类

#### .equals

数组元素比较。

```java
int[] arr1 = { 1, 2, 3, 4, 5 };
int[] arr2 = { 1, 2, 3, 4, 5 };

arr1 == arr2; // false, 比较的是两个数组的地址值，所以不相等
Arrays.equals(arr1, arr2); // true, 依次比较两个数组的元素
```

#### .fill

数组填充。

```java
int[] arr = { 1, 2, 3, 4, 5 };
Arrays.fill(arr, 3); // [3, 3, 3, 3, 3]
```

#### .sort

快速排序。

```java
int[] arr = { 34, 53, 3, 2, 65, 7, 34, 5, 76, 34, 67 };
Arrays.sort(arr); // [2, 3, 5, 7, 34, 34, 34, 53, 65, 67, 76]
```

#### .binarySearch

二分查找。

```java
int[] arr = { 2, 14, 26, 32, 41, 45, 54, 66, 73, 79, 83, 96 };
Arrays.binarySearch(arr, 32); // 3
Arrays.binarySearch(arr, 10); // -2 not found
```

## 面向对象

### 重载和重写

重载。在同一个类中，方法名一样，但参数（类型/个数/顺序）不同。

```java
class MathUtil {
  int add(int a, int b) { return a + b; }
  double add(double a, double b) { return a + b; }
  int add(int a, int b, int c) { return a + b + c; }
}
```

重写。子类修改父类的方法实现，保持父类方法名与参数列表不变。

```java
class Animal {
  void speak() { System.out.println("animal speaking"); }
}

class Dog extends Animal {
  @Override
  void speak() { System.out.println("dog speaking"); }
}
```

### 封装性

使用权限修饰符来修饰类及类的内部成员。

- private：私有

- default：缺省

- protected：受保护

- public：公开

### 继承性

子类可以继承父类的属性和方法。

### 多态性

同一个方法，通过不同的对象表现出不同的行为。

```java
class Animal {
  void speak() { System.out.println("animal speaking"); }
}

class Dog extends Animal {
  @Override
  void speak() { System.out.println("dog speaking"); }
  
  void watch() { System.out.println("dog watching"); }
}

class Cat extends Animal {
  @Override
  void speak() { System.out.println("cat speaking"); }
  
  void sleep() { System.out.println("cat sleeping"); }
}

void adopt(Animal animal) {
  animal.speak();
  
  if (animal instanceof Dog) {
    Dog dog = (Dog)animal;
    dog.watch();
  }
  if (animal instanceof Cat cat /* 模式变量 */) {
    cat.sleep();
  }
}
```

### final 关键字

修饰基本类型变量，**在初始化之后**，值不能被修改。

```java
final int n;
n = 10; // 10
n = 20; // ❌ 报错：不能修改 final 变量的值
```

修饰引用类型变量，不能指向另一个对象，但是内部结构可以改变。

```java
final Person person = new Person();
person.age = 18; // ✅ 可以修改对象内容
person = new Person(); // ❌ 报错：不能指向新的对象
```

修饰方法，不能被重写。

```java
class Person {
  public final void show() {} 
}

class Woman extends Person {
  @Override
  public void show() {} // ❌ 报错：不能重写 final 方法
}
```

修饰类，不能被继承。

```java
final class Animal {}

class Dog extends Animal {} // ❌ 报错：final 类不能被继承
```

常用 `final` + `static` 定义常量。

```java
public static final double PI = 3.14159;
```

### 抽象类

抽象类（Abstract Class）是一种不能被直接实例化的类，它可以被其他类继承，通常用于定义通用模板。

> [!important]
>
> 抽象方法只有声明，没有实现。子类必须实现所有抽象方法，除非子类也是抽象类。

```java
abstract class Animal {
  // 抽象方法（没有方法体）
  public abstract void speak();
}

class Dog extends Animal {
  // 实现抽象方法
  @Override
  public void speak() { System.out.println(name + " says: Woof!"); }
}
```

### 接口

接口（Interface）是一种比抽象类更加抽象的类型，它用来定义一组规范（方法），实现这些接口的类必须按照接口的要求进行实现。

常量，默认使用 `public static final` 修饰。

```java
interface USB {
  String VERSION = "2.0";
}
```

抽象方法，默认使用 `abstract` 修饰。

```java
interface USB {
  void connect();
  
  void disconnect();
}

// implements 关键字实现接口
class Printer implements USB {
  @Override
  public void connect() { System.out.println("printer connected..."); }
  
  @Override
  public void disconnect() { System.out.println("printer disconnected..."); }
}
computer.run(new Printer());

// 匿名实现类实现接口
computer.run(new USB() {
  @Override
  public void connect() { System.out.println("printer connected..."); }
  
  @Override
  public void disconnect() { System.out.println("printer disconnected..."); }
});
```

静态方法 <Badge text="Java 8+" type="tip" /> ，使用 `static` 修饰。只能通过接口调用，不能通过实现类或对象调用。

```java
interface USB {
  static void showVersion() { System.out.println("USB interface version: " + VERSION); }
}

class Printer implements USB {}

USB.staticMethod(); // ✅ 可以修改对象内容
Printer.staticMethod(); // ❌ static 方法只能在其包含接口上调用
```

默认方法 <Badge text="Java 8+" type="tip" /> ，使用 `default` 修饰。实现类可以直接调用，也可以进行重写。

```java
interface USB {
  default void startTransfer() { System.out.println("starting data transfer..."); }
}
```

私有方法 <Badge text="Java 9+" type="tip" /> ，使用 `private` 修饰。只能在接口内部使用，不能被实现类调用或重写。

```java
interface USB {
  private void checkConnection() { System.out.println("checking USB connection..."); }
}
```

### 内部类 <Badge text="不常用" type="note" />

内部类（Inner Class）是定义在另一个类内部的类。

成员内部类。可以访问外部类的成员。

```java
class Outer {
  String name = "Outer";
  
  class Inner {
    void show() { System.out.println("outer name: " + name); }
  }
}

Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
```

静态内部类，相当外部类的静态成员。只能访问外部类的静态成员。

```java
class Outer {
  static String name = "Outer";
  
  static class Inner {
    void show() { System.out.println("outer static name: " + name); }
  }
}

Outer.Inner inner = new Outer.Inner();
```

局部内部类，定义在方法、代码块中。作用范围仅限方法内部，不能使用权限修饰符。

```java
class Outer {
  Comparable getInstance() {
    class Inner implements Comparator {
      @Override
      public int compareTo(Object o) { return 0; }
    }
    
    return new Inner();
  }
}
```

匿名内部类。常用于回调、事件监听、线程创建等场景。

```java
class Outer {
  Comparable getInstance() {
    return new Comparable() {
      @Override
      public int compareTo(Object o) { return 0; }
    };
  }
}
```
