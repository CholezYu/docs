# Java

## JDK

JDK = JRE + 开发工具集

JRE = JVM + JavaSE 标准类库

## 数据类型的运算

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

## 运算符

## 条件语句

## 循环语句

## 数组

## 类和对象

