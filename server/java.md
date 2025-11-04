---
title: Java
icon: java
date: 2025-11-04
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

int c = a + b; // => 20
float c = a + b; // => 20.0

char c = 'a';
int d = a + b + c; // => 117
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

Arrays.toString(arr); // => [1, 2, 3, 4, 5]
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

Arrays.deepToString(arr); // => [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
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
Arrays.fill(arr, 3); // => [3, 3, 3, 3, 3]
```

#### .sort

快速排序。

```java
int[] arr = { 34, 53, 3, 2, 65, 7, 34, 5, 76, 34, 67 };
Arrays.sort(arr); // => [2, 3, 5, 7, 34, 34, 34, 53, 65, 67, 76]
```

#### .binarySearch

二分查找。

```java
int[] arr = { 2, 14, 26, 32, 41, 45, 54, 66, 73, 79, 83, 96 };
Arrays.binarySearch(arr, 32); // => 3
Arrays.binarySearch(arr, 10); // => -2 (not found)
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
n = 10; // => 10
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

接口（Interface）是一种比抽象类更加抽象的类型，它用来定义规范，实现类必须按照接口的要求进行实现。

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

### 枚举

枚举（Enum） 是一种特殊的类，用来定义常量。每个枚举值都是此类的唯一实例对象。

```java
enum Season {
  SPRING("spring"),
  SUMMER("summer"),
  AUTUMN("autumn"),
  WINTER("winter");
  
  private final String name;
  
  Season(String name) {
    this.name = name;
  }
  
  public String getName() { return name; }
}

Arrays.toString(Season.values()); // => [SPRING, SUMMER, AUTUMN, WINTER]

Season.SPRING;             // => SPRING
Season.SPRING.toString();  // => SPRING
Season.SPRING.name();      // => SPRING
Season.SPRING.getName();   // => spring

Season.valueOf("SUMMER");  // => SUMMER

Season.WINTER.ordinal(); // => 3
```

枚举实现接口（支持多态）。

```java
interface Show {
  void show();
}

enum Season implements Show {
  SPRING {
    @Override
    public void show() { System.out.println("spring coming"); }
  },
  SUMMER {
    @Override
    public void show() { System.out.println("summer coming"); }
  },
  AUTUMN {
    @Override
    public void show() { System.out.println("autumn coming"); }
  },
  WINTER {
    @Override
    public void show() { System.out.println("winter coming"); }
  }
}
```

### 注解

注解（Annotation）是一种用于为代码添加说明、元数据的机制，它不会直接影响程序逻辑，但可以被编译器、运行时程序读取并执行特定操作。

常见的内置注解：

- `@Override`：检查方法是否正确重写父类方法。

- `@Deprecated`：标记方法或类为“过时”，不建议使用。

- `@SuppressWarnings`：忽略编译器警告。

- `@FunctionalInterface`：限定接口必须只有一个抽象方法。

元注解（为注解提供说明）：

- `@Retention`：注解的保留时间（SOURCE、CLASS、RUNTIME）。

- `@Target`：可以作用的位置（类、方法、字段等）。

- `@Documented`：是否写入 JavaDoc。

- `@Inherited`：子类是否继承父类注解。

## 多线程

### 创建线程

#### 继承 Thread 类

```java
class PrintThread extends Thread {
  @Override
  public void run() {/* 执行线程代码 */}
}

PrintThread thread = new PrintThread();
thread.start();
```

#### 实现 Runnable 接口 <Badge text="推荐" type="tip" />

> [!tip]
>
> 优点：避免单继承限制；可以共享同一个任务对象。

```java
class PrintTask implements Runnable {
  @Override
  public void run() {/* 执行线程代码 */}
}

PrintTask task = new PrintTask();
Thread thread = new Thread(task);
thread.start();
```

#### 实现 Callable 接口 <Badge text="Java 5+" type="tip" />

> [!tip]
>
> 优点：有返回值；可以抛出异常。适合需要处理结果的任务。

```java
class PrintCallable implements Callable<Integer> {
  @Override
  public Integer call() throws Exception {
    int sum = 0;
    for (int i = 0; i < 10; i++) sum += i;
    return sum;
  }
}

PrintCallable callable = new PrintCallable();
FutureTask<Integer> futureTask = new FutureTask<>(callable);
Thread thread = new Thread(futureTask);
thread.start();

try {
  futureTask.get(); // 阻塞等待线程执行结果
} catch (Exception e) {
  e.printStackTrace();
}
```

#### 线程池 <Badge text="推荐" type="tip" />

> [!tip]
>
> 优点：能够自动管理线程的创建和回收，提高资源利用率；可以控制最大并发数。适合处理大量短任务。

```java
// 创建一个固定大小的线程池
ExecutorService executorService = Executors.newFixedThreadPool(10);

// 设置线程池中线程数的上限
((ThreadPoolExecutor) executorService).setMaximumPoolSize(50);

executorService.submit(new Runnable() {
  @Override
  public void run() {
    // 线程1执行代码
  }
});

executorService.submit(new Runnable() {
  @Override
  public void run() {
    // 线程2执行代码
  }
});

// 关闭线程池
executorService.shutdown();
```

### 生命周期

- NEW（新建状态），线程对象已创建但 **还未调用** `start()`。

- RUNNABLE（可运行状态），调用 `start()` 后，进入可运行状态，实际上可能 **正在运行** 或 **等待 CPU 调度**。

- BLOCKED（阻塞状态），当线程尝试获取某个 **同步锁** 时，如果锁被别的线程占用，就进入 BLOCKED 状态。

- WAITING（等待状态），无限制等待被其他线程唤醒，比如：

  - `Object.wait()`

  - `Thread.join()`（等待目标线程执行完）

  - `LockSupport.park()`

- TIMED_WAITING（超时等待），与 WAITING 类似，但会在超时后自动唤醒，常见方法：

  - `Thread.sleep(ms)`

  - `Object.wait(ms)`

  - `Thread.join(ms)`

  - `LockSupport.parkNanos()`

  - `LockSupport.parkUntil()`

- TERMINATED（终止状态），当线程的 `run()` 方法执行结束或抛出异常时进入终止状态。

### 线程同步

多个线程同时访问共享数据时，可能会导致 **线程安全问题**（数据不一致）。

使用线程同步，可以解决线程安全问题，避免资源抢占。

#### synchronized 关键字

> [!tip]
>
> `synchronized` 本质上是基于 **对象锁**。每个对象都有一把隐式锁。当线程进入 `synchronized` 块时**获得锁**；退出时**释放锁**。其他线程必须等待锁释放才能进入。

同步方法：

- 修饰实例方法（锁住当前对象），同步监视器默认是 `this`。

- 修饰静态方法（锁住类对象），同步监视器默认是 `[ClassName].class`。

```java
class Counter {
  private /* static */ int count = 0;
  
  public /* static */ synchronized void increment() {
    count++;
  }
}
```

同步代码块：

- 实现 `Runnable` 接口创建线程，可以直接指定 `this` 作为同步监视器。

- 继承 `Thread` 类创建线程，`this` 可能不是唯一的，需要指定 `[ClassName].class` 作为同步监视器。

```java
class Counter {
  private int count = 0;
  
  public void increment() {
    synchronized (this /* Counter.class */) {
      count++;
    }
  }
}
```

#### Lock 锁 <Badge text="Java 5+" type="tip" />

Java 5 之后，可以使用显示锁机制。

```java
class Counter {
  private int count = 0;
  
  private static final ReentrantLock lock = new ReentrantLock();
  
  public void increment() {
    lock.lock(); // 获得锁
    try {
      count++;
    } finally {
      lock.unlock(); // 一定要释放锁！
    }
  }
}
```

### 线程通信

Java 提供了多种线程通信机制，其中基本通信机制方法有：

- `wait()` 让当前线程进入等待状态并释放锁。

- `notify()` 唤醒一个等待中的线程（随机）。

- `notifyAll()` 唤醒所有等待中的线程。

> [!important]
>
> 必须在 **同步方法或同步代码块** 内调用。

