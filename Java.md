# 变量

## 变量的声明

```java
class Test {
  public static void main(String[] args) {
    int age = 18;
    System.out.println(age);
  }
}
```

## 变量的类型

|   类型   |       声明位置        |     属于     |                            作用域                            |
| :------: | :-------------------: | :----------: | :----------------------------------------------------------: |
| 局部变量 |   方法或语句块内部    | 方法或语句块 |         从声明位置开始<br />到方法或语句块执行完消失         |
| 成员变量 |   类内部，方法外部    |     对象     | 对象创建，成员变量也随着创建<br />对象消失，成员变量也随着消失 |
| 静态变量 | 类内部，`static` 修饰 |      类      |      类被加载，静态变量有效<br />类被卸载，静态变量消失      |





# 基本数据类型

## 整型

| 类型  | 占用存储空间 |              数值范围               |
| :---: | :----------: | :---------------------------------: |
| byte  |   1个子节    |    -2^7^ ~ 2^7^ - 1(-128 ~  127)    |
| short |   2个子节    | -2^15^ ~ 2^15^ - 1(-32768 ~ 32767)  |
|  int  |   4个子节    | -2^31^ ~ 2^31^ - 1(约 -21亿 ~ 21亿) |
| long  |   8个子节    |         -21^63^ ~ 2^63^ - 1         |

> 声明 long 型变量，必须以 l 或 L 结尾

```java
class Test {
  public static void main(String[] args) {
    long l = 12345678987654321L;
    System.out.println(l);
  }
}
```

## 浮点型

|  类型  | 占用存储空间 |        数值范围        |
| :----: | :----------: | :--------------------: |
| float  |   4个子节    |  -3.403E38 ~ 3.403E38  |
| double |   8个子节    | -1.798E308 ~ 1.798E308 |

> 声明 float 型变量，必须以 f 或 F 结尾

```java
class Test {
  public static void main(String[] args) {
    float f = 1.02F;
    System.out.println(f);
  }
}
```

## 字符型

```java
class Test {
  public static void main(String[] args) {
    char c = 'A';
    System.out.println(c);
  }
}
```

## 布尔型

```java
class Test {
  public static void main(String[] args) {
    boolean b = true;
    System.out.println(b);
  }
}
```





# 数据类型的运算

## 自动类型提升

> 不同数值范围的变量运算时，提升为范围较大的类型：byte < short < int < long < float < double
>
> byte, short, char 相互运算时（包括同种类型，如 byte + byte），至少转为 int 类型

```java
public class Test {
  public static void main(String[] args) {
    byte b = 2;
    int i = 12;
    
    byte s = b + i; // 编译不通过
    
    int s = b + i; // 14
    float s = b + i; // 14.0
    
    char c = 'a';
    int s = i + c; // 109
  }
}
```

## 强制类型转换





# 运算符





# 条件语句





# 循环语句





# 数组





# 类和对象

