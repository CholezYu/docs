---
title: Java
icon: java
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

System.out.println(Arrays.deepToString(arr));
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

System.out.println(Arrays.deepToString(arr));
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

## 面向对象

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
