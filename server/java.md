---
title: Java
icon: java
date: 2025-10-23
description: Java
---

## 类型转换

### 自动类型提升

容量小的类型与容量大的类型运算时，会提升为容量大的类型。

```java
public class Main {
  public static void main(String[] args) {
    byte b = 2;
    int i = 12;
    
    byte s = b + i; // 编译失败
    
    int s = b + i; // 14
    float s = b + i; // 14.0
    
    char c = 'a';
    int s = i + c; // 109
  }
}
```

### 强制类型转换

如果需要将容量大的类型转换为容量小的类型，需要使用强制类型转换。

```java
public static void main(String[] args) {
  double d = 12;
  
  int i = d; // 编译失败
  int i = (int) d; // 将 double 类型强制转为 int 类型
}
```

## 数组

### 遍历数组

for 循环

```java
int[][] arr = { { 1, 2, 3 }, { 4, 5 }, { 6, 7, 8, 9, 0 } };

for (int i = 0; i < arr.length; i++) {
  System.out.println(Arrays.toString(arr[i]));
  
  for (int j = 0; j < arr[i].length; j++) {
    System.out.println(arr[i][j]);
  }
}

Arrays.deepToString(arr); // [[1, 2, 3], [4, 5], [6, 7, 8, 9, 0]]
```

for each 循环

```java
int[][] arr = { { 1, 2, 3 }, { 4, 5 }, { 6, 7, 8, 9, 0 } };

for (int[] ints : arr) {
  System.out.println(Arrays.toString(ints));
  
  for (int anInt : ints) {
    System.out.println(anInt);
  }
}

Arrays.deepToString(arr); // [[1, 2, 3], [4, 5], [6, 7, 8, 9, 0]]
```

### 查找元素

线性查找（遍历），时间复杂度为 $O(n)$。

```java
int[] arr = { 14, 32, 73, 45, 54, 26, 79 };

int target = 45;

boolean flag = false;

for (int i = 0; i < arr.length; i++) {
  if (target == arr[i]) {
    System.out.println(i);
    flag = true;
    break;
  }
}

if (!flag) {
  System.out.println("not found");
}
```

二分查找（必须是有序数组），时间复杂度为 $O(log_2n)$。

```java
int[] arr = { 2, 14, 26, 32, 41, 45, 54, 66, 73, 79, 83, 96 };

int target = 54;

int head = 0;
int tail = arr.length - 1;

boolean flag = false;

while (head <= tail) {
  int mid = (head + tail) / 2;
  
  if (target == arr[mid]) {
    System.out.println(mid);
    flag = true;
    break;
  }
  else if (target > arr[mid]) {
    head = mid + 1;
  }
  else if (target < arr[mid]) {
    tail = mid - 1;
  }
}

if (!flag) {
  System.out.println("not found");
}
```

> Java 提供了 `Arrays.binarySearch(array, index)` 方法进行二分查找。

### 冒泡排序

```java
int[] arr = { 34, 54, 3, 2, 84, 65, 7, 19, 5, 76, 67 };

for (int i = 0; i < arr.length - 1; i++) {
  boolean flag = true;
  
  for (int j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      int temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      
      flag = false;
    }
  }
  
  if (flag) {
    break;
  }
}
```

### Arrays 类

`Arrays.equals` 比较数组元素是否相同。

```java
int[] arr1 = { 1, 2, 3, 4, 5 };
int[] arr2 = { 1, 2, 3, 4, 5 };

arr1 == arr2; // false 比较的是两个数组的地址值，所以不相等
Arrays.equals(arr1, arr2); // true 依次比较两个数组的元素
```

`Arrays.fill` 数组填充。

```java
int[] arr = { 1, 2, 3, 4, 5 };
Arrays.fill(arr, 3);
arr; // [3, 3, 3, 3, 3]
```

`Arrays.sort` 快速排序。

```java
int[] arr = { 34, 53, 3, 2, 65, 7, 34, 5, 76, 34, 67 };
Arrays.sort(arr);
arr; // [2, 3, 5, 7, 34, 34, 34, 53, 65, 67, 76]
```

`Arrays.binarySearch` 二分查找。

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

MathUtil m = new MathUtil();
m.add(3, 5);       // 调用第一个
m.add(1.2, 3.4);   // 调用第二个
m.add(1, 2, 3);    // 调用第三个
```

重写。子类修改父类的方法实现，保持父类方法名与参数列表不变。

```java
class Animal {
  void speak() {
    System.out.println("动物在叫");
  }
}

class Dog extends Animal {
  @Override
  void speak() {
    System.out.println("狗在汪汪叫");
  }
}

Animal a = new Dog();
a.speak();  // 狗在汪汪叫
```

### 封装性

使用权限修饰符来修饰类及类的内部成员。

- private：私有

- default：缺省

- protected：受保护

- public：公开

将内部成员设为私有，对外暴露 getter 和 setter 方法。这样，在其他类中只能通过这些方法来操作成员。

```java
public class Person {
  private String name;
  
  public String getName() {
    return name;
  }
  
  public void setName(String name) {
    this.name = name;
  }
}
```

### 继承性

子类可以继承父类的属性和方法。

### 多态性

同一个**方法**，通过不同的对象表现出不同的行为。多态必须满足**继承**和**重写**。

```java
class Animal {
  void speak() { System.out.println("动物在叫"); }
}

class Dog extends Animal {
  @Override
  void speak() { System.out.println("狗在汪汪叫"); }
  
  void watch() { System.out.println("狗在看家"); }
}

class Cat extends Animal {
  @Override
  void speak() { System.out.println("猫在喵喵叫"); }
  
  void sleep() { System.out.println("猫在睡觉"); }
}

class AnimalTest {
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
  
  public static void main(String[] args) {
    AnimalTest animalTest = new AnimalTest();
    animalTest.adopt(new Dog());
    animalTest.adopt(new Cat());
  }
}
```

### final 关键字

修饰变量。

> [!warning]
>
> 修饰基本类型变量：**在初始化之后**，值不能被修改；
>
> 修饰引用类型变量：不能指向另一个对象，但是内部结构可以改变。

```java
final int n;
n = 10; // 10
n = 20; // ❌ 报错：不能修改 final 变量的值

final Person person = new Person();
person.age = 18; // ✅ 可以修改对象内容
person = new Person(); // ❌ 报错：不能指向新的对象
```

修饰方法。

> [!warning]
>
> 方法不能被重写。

```java
class Person {
  public final void show() {} 
}

class Woman extends Parent {
  @Override
  public void show() {} // ❌ 报错：不能重写 final 方法
}
```

修饰类。

> [!warning]
>
> 类不能被继承。

```java
final class Animal {}

class Dog extends Animal {} // ❌ 报错：final 类不能被继承
```

定义常量。

> [!tip]
>
> 常用 `final` + `static` 定义常量。

```java
public static final double PI = 3.14159;
```
