---
title: Java
icon: java
---

# Java

## JDK

JDK = JRE + 开发工具集

JRE = JVM + JavaSE 标准类库

## 类型转换

### 自动类型提升

容量小的类型与容量大的类型运算时，会提升为容量大的类型。

byte < short < int < long < float < double

byte, short, char 相互运算时（包括同种类型，如 byte + byte），至少转为 int 类型。

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

强制类型转换可能会导致精度丢失。	

```java
public static void main(String[] args) {
  double d = 12;
  
  int i = d; // 编译失败
  int i = (int) d; // 将 double 类型强制转为 int 类型
}
```

## 数组

### 定义数组

```java
// 静态初始化，数组元素已知
double[] arr = { 20.32, 43.21, 43.22 };

// 动态初始化，数组元素未知
String[] arr = new String[5];
```

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

二分查找（必须是有序数组），时间复杂度为 $O(log_2N)$。

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

### Arrays.equals

判断两个数组的元素是否依次相等。

```java
int[] a = { 1, 2, 3, 4, 5 };
int[] b = { 1, 2, 3, 4, 5 };
int[] c = { 1, 2, 3, 4, 6 };

Arrays.equals(a, b); // true
Arrays.equals(a, c); // false
```

### Arrays.toString

将数组转为字符串。

```java
int[] arr = { 1, 2, 3, 4, 5 };

Arrays.toString(arr); // [1, 2, 3, 4, 5]
```

### Arrays.fill

填充数组。

```java
int[] arr = { 1, 2, 3, 4, 5 };

Arrays.fill(arr, 10); // [10, 10, 10, 10, 10]
```

### Arrays.sort

快速排序。

```java
int[] arr = { 34, 54, 3, 2, 84, 65, 7, 19, 5, 76, 67 };

Arrays.sort(arr); // [2, 3, 5, 7, 19, 34, 54, 65, 67, 76, 84]
```

### Arrays.binarySearch

二分查找。

```java
int[] arr = { 54, 3, 84, 65, 7, 5, 76, 67 };

Arrays.binarySearch(arr, 3); // 1
```

## 类和对象

