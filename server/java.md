---
title: Java
icon: java
date: 2026-10-28
description: Java
---

## 面向对象

### 封装

#### 访问修饰符

- private：只能在同一个类中访问。

- default（默认）：可以在同一个包中访问。

- protected：可以在同一个包或不同包的子类中访问，即不能在不同包的非子类中访问。

- public：可以在任何地方访问。

#### Getter & Setter

为了不让外部直接访问或修改类的属性，通常将其设置为私有属性，然后提供 Getter 和 Setter 方法用来访问或修改。

```python
class Person {
  private String name;
  private int age;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    if (age >= 0) this.age = age;
  }
}
```

### 继承

子类可以继承父类的属性和方法。在子类中使用 `super` 调用父类的方法。

```java
class Person {
  String name;
  int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  String getInfo() {
    return "name: " + name + ", " + "age: " + age;
  }
}

class Student extends Person {
  String sex;

  public Student(String name, int age, String sex) {
    super(name, age);
    this.sex = sex;
  }

  String getInfo() {
    return super.getInfo() + ", " + "sex: " + sex;
  }
}

Student student = new Student("Alice", 20, "male");
student.getInfo(); // => name: Alice, age: 20, sex: male
```

### 多态

同一个方法，通过不同的对象会表现出不同的行为。

```java
abstract class Animal {
  abstract void speak();
}

class Dog extends Animal {
  @Override
  void speak() {
    System.out.println("Woof!");
  }
}

class Cat extends Animal {
  @Override
  void speak() {
    System.out.println("Meow!");
  }
}

static void animalSpeak(Animal animal) {
  animal.speak();

  if (animal instanceof Dog) {
    Dog dog = (Dog) animal;
    // ...
  }
  if (animal instanceof Cat cat /* 模式变量 */) {
    // ...
  }
}

Dog dog = new Dog();
Cat cat = new Cat();
animalSpeak(dog); // Woof!
animalSpeak(cat); // Meow!
```

### final 关键字

修饰基本类型变量：**在初始化之后**，值不能被修改。

```java
final int n;
n = 10; // => 10
n = 20; // ❌ 报错：不能修改 final 变量的值
```

修饰引用类型变量：不能指向另一个对象，但是内部结构可以改变。

```java
final Person person = new Person();
person.age = 18; // ✅ 可以修改对象内容
person = new Person(); // ❌ 报错：不能指向新的对象
```

修饰方法：不能被重写。

```java
class Person {
  public final void getInfo() {} 
}

class Woman extends Person {
  @Override
  public void getInfo() {} // ❌ 报错：不能重写 final 方法
}
```

修饰类：不能被继承。

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
  public void speak() {
    System.out.println("Woof!");
  }
}
```

### 接口

接口（Interface）是一种比抽象类更加抽象的类型，它用来定义规范，实现类必须按照接口的要求进行实现。

**常量** 默认使用 `public static final` 修饰。

```java
interface USB {
  String VERSION = "2.0";
}
```

**抽象方法** 默认使用 `abstract` 修饰。

```java
interface USB {
  void connect();

  void disconnect();
}

class Computer {
  void run(USB usb) {
    usb.connect();
    usb.disconnect();
  }
}

// 使用 implements 关键字
class Printer implements USB {
  @Override
  public void connect() {
    System.out.println("printer connected...");
  }

  @Override
  public void disconnect() {
    System.out.println("printer disconnected...");
  }
}
Computer computer = new Computer();
computer.run(new Printer());

// 匿名实现类
computer.run(new USB() {
  @Override
  public void connect() {
    System.out.println("printer connected...");
  }

  @Override
  public void disconnect() {
    System.out.println("printer disconnected...");
  }
});
```

**静态方法** <Badge text="Java 8+" type="tip" /> 使用 `static` 修饰。只能通过接口调用，不能通过实现类或实例调用。

```java
interface USB {
  String VERSION = "2.0";

  static void showVersion() {
    System.out.println("USB interface version: " + VERSION);
  }
}

class Printer implements USB {}

USB.showVersion(); // ✅ 可以通过接口调用
Printer.showVersion(); // ❌ 不能通过实现类调用
new Printer().showVersion(); // ❌ 不能通过实现类的实例调用
```

**默认方法** <Badge text="Java 8+" type="tip" /> 使用 `default` 修饰。可以被实现类重写，也可以通过实现类的实例调用。

```java
interface USB {
  default void startTransfer() {
    System.out.println("starting USB transfer...");
  }
}

class Printer implements USB {
  @Override
  public void startTransfer() { // ✅ 可以进行重写
    System.out.println("starting Printer transfer...");
  }
}

Printer printer = new Printer();
printer.startTransfer(); // ✅ 可以通过实现类的实例调用
```

**私有方法** <Badge text="Java 9+" type="tip" /> 使用 `private` 修饰。只能在接口内部使用，不能被实现类重写或调用。

```java
interface USB {
  private void checkConnection() {
    System.out.println("checking USB connection...");
  }

  default void startTransfer() {
    checkConnection(); // ✅ 可以在接口内部调用
    System.out.println("starting USB transfer...");
  }
}

class Printer implements USB {
  @Override
  public void checkConnection() { // ❌ 不能进行重写
    System.out.println("checking Printer connection...");
  }
}

USB.checkConnection(); // ❌ 不能通过接口调用
Printer.checkConnection(); // ❌ 不能通过实现类调用
new Printer().checkConnection(); // ❌ 不能通过实现类的实例调用
```

### 内部类 <Badge text="不常用" type="note" />

内部类（Inner Class）是定义在另一个类内部的类。

**成员内部类** 可以访问外部类的成员。

```java
class Outer {
  String name = "outer name";

  class Inner {
    void print() {
      System.out.println(name);
    }
  }
}

Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
inner.print(); // outer name
```

**静态内部类** 相当于外部类的静态成员。只能访问外部类的静态成员。

```java
class Outer {
  static String name = "outer name";

  static class Inner {
    void print() {
      System.out.println(name);
    }
  }
}

Outer.Inner inner = new Outer.Inner();
inner.print(); // outer name
```

**局部内部类** 定义在方法、代码块中。作用范围仅限方法内部，不能使用访问修饰符。

```java
class Outer {
  String name = "outer name";

  void executeInner() {
    class Inner {
      public void print() {
        System.out.println(name);
      }
    }
    Inner inner = new Inner();
    inner.print();
  }
}

Outer outer = new Outer();
outer.executeInner(); // outer name
```

**匿名内部类** 常用于回调、事件监听、线程创建等场景。

```java
interface Inner {
  void print();
}

class Outer {
  String name = "outer name";

  void executeInner() {
    Inner inner = new Inner() {
      @Override
      public void print() {
        System.out.println(name);
      }
    };
    inner.print();
  }
}

Outer outer = new Outer();
outer.executeInner(); // outer name
```

### 枚举

枚举（Enum） 是一种特殊的类，用来定义常量。每个枚举值都是类的唯一实例对象。

```java
enum Status {
  SUCCESS("success"),
  WARNING("warning"),
  Error("error");

  private final String value;

  Status(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }
}

Arrays.toString(Status.values()); // => [SUCCESS, WARNING, Error]

Status.SUCCESS;             // => SUCCESS
Status.SUCCESS.toString();  // => SUCCESS
Status.SUCCESS.name();      // => SUCCESS
Status.SUCCESS.getValue();  // => success

Status.valueOf("WARNING");  // => WARNING

Status.Error.ordinal(); // => 2
```

枚举实现接口（支持多态）。

```java
interface Printer {
  void print();
}

enum Status implements Printer {
  SUCCESS {
    @Override
    public void print() {
      System.out.println("success");
    }
  },
  WARNING {
    @Override
    public void print() {
      System.out.println("warning");
    }
  },
  Error {
    @Override
    public void print() {
      System.out.println("error");
    }
  }
}
```

### 注解

注解（Annotation）是一种用于为代码添加说明、元数据的机制，它不会直接影响程序逻辑，但可以被编译器、运行时程序读取并执行特定操作。

- 常见的内置注解：

  - `@Override`：检查方法是否正确重写父类方法。

  - `@Deprecated`：标记方法或类为“过时”，不建议使用。

  - `@SuppressWarnings`：忽略编译器警告。

  - `@FunctionalInterface`：限定接口必须只有一个抽象方法。

- 元注解（为注解提供说明）：

  - `@Retention`：注解的保留时间（SOURCE、CLASS、RUNTIME）。

  - `@Target`：可以作用的位置（类、方法、字段等）。

  - `@Documented`：是否写入 JavaDoc。

  - `@Inherited`：子类是否继承父类注解。

## 异常

### 异常分类

- 编译时异常（受检异常）：

  - `FileNotFoundException`：文件未找到

  - `ClassNotFoundException`：类未找到

  - `IOException`：I/O 操作异常

  - `SQLException`：数据库操作异常

- 运行时异常（非受检异常）：

  - `NullPointerException`：空指针异常

  - `ArrayIndexOutOfBoundsException`：数组下标越界

  - `ClassCastException`：类型转换异常

  - `NumberFormatException`：数字格式异常

  - `ArithmeticException`：算术异常

> [!tip]
>
> 编译时异常是由**外部不确定因素**导致的，编译器强制要求处理；
>
> 运行时异常通常为**代码逻辑问题**导致的，一般不处理。

### 异常处理

- 捕获异常:

  - `try`：可能发生异常的代码块。

  - `catch`：匹配对应的异常类型并进行处理。

  - `finally`：无论是否发生异常，代码都会执行。

- 抛出异常:

  - `throw`：在方法体内部显式地抛出一个具体的异常对象。

  - `throws`：在方法签名上声明该方法可能抛出的异常类型，通知调用者必须处理这些异常。

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

避免单继承限制，并且可以共享同一个任务对象。

```java
class PrintTask implements Runnable {
  @Override
  public void run() {/* 执行线程代码 */}
}

PrintTask task = new PrintTask();
Thread thread = new Thread(task);

// 匿名实现类 + lambda 表达式
Thread thread = new Thread(() -> {/* 执行线程代码 */});

thread.start();
```

#### 实现 Callable 接口 <Badge text="Java 5+" type="tip" />

可以返回结果和抛出异常。适合需要处理结果的任务。

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

// 匿名实现类 + lambda 表达式
FutureTask<Integer> futureTask = new FutureTask<>(() -> {
  int sum = 0;
  for (int i = 0; i < 10; i++) sum += i;
  return sum;
});

Thread thread = new Thread(futureTask);
thread.start();

try {
  futureTask.get(); // 阻塞等待线程执行结果 => 45
} catch (Exception e) {
  e.printStackTrace();
}
```

#### 线程池 <Badge text="推荐" type="tip" />

进程池能自动管理进程的创建与释放，提高资源利用率。适合处理大量短任务。

```java
// 创建一个固定大小的线程池
ExecutorService executorService = Executors.newFixedThreadPool(10);

// 设置线程池中线程数的上限
((ThreadPoolExecutor) executorService).setMaximumPoolSize(50);

// 匿名实现类
executorService.submit(new Runnable() {
  @Override
  public void run() {/* 执行线程1代码 */}
});

// 匿名实现类 + lambda 表达式
executorService.submit(() -> {/* 执行线程2代码 */});

// 关闭线程池
executorService.shutdown();
```

### 生命周期

- NEW（新建状态）：线程对象已创建，但**还未调用** `start()`。

- RUNNABLE（可运行状态，**正在运行** 或 **等待运行**），调用 `start()` 后，进入可运行状态。

- BLOCKED（阻塞状态）：当线程尝试获取某个锁时，若该锁被其他线程占用，进入阻塞状态。

- WAITING（等待状态）：阻塞当前线程，无限期等待被其他线程唤醒。

- TIMED_WAITING（超时等待），超时后自动唤醒，或被其他线程提前唤醒。

- TERMINATED（终止状态），当线程的 `run()` 方法执行结束，或抛出异常时进入终止状态。

### 线程同步

多个线程同时访问共享数据时，可能会导致**线程安全问题**（数据不一致）。

线程同步可以解决线程安全问题，避免资源抢占。

#### synchronized 关键字

线程进入 `synchronized` 块时，它会“监视”这个对象。如果对象未被锁定，线程获得监视器控制权并执行代码，执行结束后释放监视器；如果对象已经被其他线程锁定，当前线程会被阻塞，直到监视器被释放。

`synchronized` 可以修饰同步代码块和同步方法：

- 修饰同步代码块：需要指定唯一对象作为同步监视器。

- 修饰同步方法：

  - 修饰**实例方法**，同步监视器默认为 `this`（当前对象实例）；

  - 修饰**静态方法**，同步监视器默认为 `[ClassName].class`（当前类的 Class 对象）。

实现 Runnable 接口创建线程，修饰同步代码块通常指定 `this` 作为同步监视器。

```java
class CountTask implements Runnable {
  private int count = 0;

  public synchronized void increment() {
    System.out.println(Thread.currentThread().getName() + ": " + count++);
  }

  @Override
  public void run() {
    while (count < 100) {
      // 同步代码块
      synchronized (this /* CountTask task */) {
        System.out.println(Thread.currentThread().getName() + ": " + count++);
      }

      // 同步方法
      increment();
    }
  }
}
```

继承 `Thread` 类创建线程，因为每个线程都是独立的实例，`this` 不是唯一的，若要实现多线程同步，需要修饰**静态方法**；修饰同步代码块需要指定 `[ClassName].class` 作为同步监视器。

```java
class CountThread extends Thread {
  private static int count = 0;

  public static synchronized void increment() {
    System.out.println(Thread.currentThread().getName() + ": " + count++);
  }

  @Override
  public void run() {
    while (count < 100) {
      // 同步代码块
      synchronized (CountThread.class) {
        System.out.println(Thread.currentThread().getName() + ": " + count++);
      }

      // 同步方法
      increment();
    }
  }
}
```

#### Lock 锁 <Badge text="Java 5+" type="tip" />

Java 5 之后，可以使用显示锁机制。

```java
class CountThread extends Thread {
  private static int count = 0;

  private static final ReentrantLock lock = new ReentrantLock();

  @Override
  public void run() {
    while (count < 100) {
      lock.lock(); // 获得锁
      try {
        System.out.println(Thread.currentThread().getName() + ": " + count++);
      } finally {
        lock.unlock(); // 一定要释放锁！
      }
    }
  }
}
```

### 线程通信

Java 提供了多种线程通信机制，其中基本通信机制方法有：

- `wait()` 让当前线程进入等待状态并释放锁。

- `notify()` 随机唤醒一个等待中的线程。

- `notifyAll()` 唤醒所有等待中的线程。

> [!caution]
>
> 以上方法只能在 **同步方法** 或 **同步代码块** 内调用，并且必须由同步监视器调用。

## 集合框架

### 列表 List

#### ArrayList <Badge text="常用" type="tip" />

适用于读取多、写入少的场景。

- 随机访问快 O(1)。

- 插入、删除慢 O(n)。

- 线程不安全。

> [!tip]
>
> `ArrayList` 和 `LinkedList` 的选择：**大部分情况下优先使用 `ArrayList`**，除非有频繁插入、删除需求。

常用方法：

```java
List<String> list = new ArrayList<>();

// 新增
list.add("apple");     // list => [apple]
list.add("orange");    // list => [apple, orange]
list.add(1, "banana"); // list => [apple, banana, orange]

// 修改
list.set(2, "lemon");  // list => [apple, banana, lemon]

// 查询
list.get(1);           // => banana

// 删除
list.remove("lemon");  // list => [apple, banana]
list.remove(0);        // list => [banana]
list.clear();          // list => []
```

遍历方式：

```java
List<String> list = new ArrayList<>(Arrays.asList("apple", "banana", "orange"));

// 迭代器
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
  String fruit = iterator.next();
  System.out.println(fruit);
}

// for...
for (int i = 0; i < list.size(); i++) {
  String fruit = list.get(i);
  System.out.println(fruit);
}

// 增强 for...
for (String fruit : list) {
  System.out.println(fruit);
}

// forEach (Java 8+) + lambda 表达式
list.forEach(fruit -> System.out.println(fruit));
// forEach (Java 8+) + 方法引用
list.forEach(System.out::println);

// stream (Java 8+)
Stream<String> stream = list.stream();
stream.forEach(System.out::println);
```

#### LinkedList

适用于频繁插入、删除场景。

- 随机访问慢 O(n)。

- 插入、删除快 O(1)。

- 内存开销大。

- 可作为列表、栈、队列使用。

作为列表使用与 `ArrayList` 用法相同。

作为栈使用（先进后出）：

```java
LinkedList<String> stack = new LinkedList<>();

stack.addFirst("a"); // stack => [a]
stack.addFirst("b"); // stack => [b, a]
stack.removeFirst(); // stack => [a]
```

作为队列使用（先进先出）：

```java
LinkedList<String> queue = new LinkedList<>();

queue.addLast("a");  // queue => [a]
queue.addLast("b");  // queue => [a, b]
queue.removeFirst(); // queue => [b]
```

### 集合 Set <Badge text="常用" type="tip" />

#### HashSet

适用于去重、快速查询场景。

- 查询、插入、删除快 O(1)。

- 无序。

- 需要重写 `hashCode()` 和 `equals()`。

常用方法：

```java
Set<String> set = new HashSet<>();

// 新增
set.add("apple");    // set => [apple]
set.add("banana");   // set => [banana, apple]
set.add("apple");    // 不会添加重复元素

// 删除
set.remove("apple"); // set => [banana]
set.clear();         // set => []
```

遍历方式与 `ArrayList` 相同。

#### LinkedHashSet

适用于需要保持元素插入顺序并去重的场景。

- 查询、插入、删除快 O(1)。

- 保持插入顺序。

- 性能略低于 `HashSet`。

#### TreeSet

适用于需要有序集合的场景。

- 查询、插入、删除慢 O(log n)。

- 有序（自然排序或自定义排序）。

自然排序：

- 元素必须实现 `Comparable` 接口。

- `TreeSet` 调用元素的 `compareTo()` 方法进行比较。

- **注意**：如果 `compareTo()` 返回 0，则 `TreeSet` 认为元素相同，**不会重复添加**。这可能导致数据丢失。

- 适用于元素有明确的自然顺序（如数字、日期）场景。

```java
class Person implements Comparable<Person> {
  private String name;
  private int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  @Override
  public int compareTo(Person other) {
    return Integer.compare(this.age, other.age);
  }

  @Override
  public String toString() {
    return "{name='" + name + "', age=" + age + "}";
  }
}

TreeSet<Person> set = new TreeSet<>();

set.add(new Person("Alice", 20));   // set => [{name='Alice', age=20}]
set.add(new Person("Bob", 25));     // set => [{name='Alice', age=20}, {name='Bob', age=25}]
set.add(new Person("Charlie", 20)); // 已存在 age 相同的元素，不会重复添加
```

自定义排序：

- 创建 `TreeSet` 时传入一个 `Comparator` 实现。

- `TreeSet` 调用 `Comparator.compare()` 方法进行比较。

- 同样，如果 `compare()` 返回 0，则 `TreeSet` 认为元素相同，**不会重复添加**。

- 适用于需要多种复杂排序规则的场景。

```java
class Person {
  private String name;
  private int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public int getAge() {
    return age;
  }

  @Override
  public String toString() {
    return "{name='" + name + "', age=" + age + "}";
  }
}

// 自定义比较器，使用 `Integer.compare`
Comparator<Person> comparator = (p1, p2) -> Integer.compare(p1.getAge(), p2.getAge());

// 自定义比较器，使用 `Comparator.comparingInt`
Comparator<Person> comparator = Comparator.comparingInt(Person::getAge);

TreeSet<Person> set = new TreeSet<>(comparator);

set.add(new Person("Alice", 20));   // set => [{name='Alice', age=20}]
set.add(new Person("Bob", 25));     // set => [{name='Alice', age=20}, {name='Bob', age=25}]
set.add(new Person("Charlie", 20)); // 已存在 age 相同的元素，不会重复添加
```

### 表 Map <Badge text="常用" type="tip" />

#### HashMap

通用键值对存储。

- 查询、插入、删除快 O(1)。

- 无序。

- 允许 null 键和 null 值。

- 线程不安全。

- Java 8+：链表长度 > 8 转红黑树。

HashMap 的工作原理：

1. 存储结构：Java 7 是数组 + 链表；Java 8+ 是数组 + 链表 + 红黑树。

2. 哈希冲突解决：链地址法（拉链法）。

3. 扩容机制：

     - 默认初始容量 16，负载因子 0.75。

     - 当元素个数 > 16 * 0.75 = 12 时，扩容为 32.

     - 扩容时重新计算哈希位置（Java 8+ 优化：只需要判断高位是 0 还是 1，无需重新 hash）。

4. 红黑树转换：

     - 链表长度 > 8 且数组长度 >= 64 时，链表转为红黑树（查询效率从 O(n) 提升到 O(log n)）。

     - 红黑树节点数 < 6 时，退化回链表。

常用方法：

```java
Map<String, Object> map = new HashMap<>();

// 新增/修改
map.put("name", "Alice"); // map => {name=Alice}
map.put("age", 20);       // map => {name=Alice, age=20}
map.put("name", "Bob");   // map => {name=Bob, age=20}

// 查询
map.get("name");          // => Bob

// 删除
map.remove("age");        // map => {name=Bob}
map.clear();              // map => {}
```

遍历方式：

```java
Map<String, Object> map = new HashMap<>(Map.of(
  "name", "Alice",
  "age", 20,
  "sex", "female"
));

// 遍历 key
for (String key : map.keySet()) {
  Object value = map.get(key);
  System.out.println(key + ": " + value);
}

// 遍历 value
for (Object value : map.values()) {
  System.out.println(value);
}

// 遍历 key & value
for (Map.Entry<String, Object> entry : map.entrySet()) {
  String key = entry.getKey();
  Object value = entry.getValue();
  System.out.println(key + ": " + value);
}
```

#### LinkedHashMap

适用于需要记录访问顺序或插入顺序的场景。

- 查询、插入、删除快 O(1)。

- 保持插入顺序或访问顺序。

- 可用于实现 LRU 缓存。

#### TreeMap

适用于需要按键排序或范围查询的场景。

- 查询、插入、删除慢 O(log n)。

- 有序（按键自然排序或自定义排序）。

- 支持范围查询（如 `subMap`）。

### 队列 Queue

#### ArrayDeque

适用于栈、队列操作。

- 双端队列。

- 无容量限制（自动扩容）。

- 性能优于 `LinkedList`。

#### PriorityQueue

适用于优先级调度、Top-K 问题。

- 有序（自然排序或自定义优先级排序）。

- 每次取出最小/最大元素。

### 集合工具类

#### Collections

```java
// 查询
Collections.binarySearch(List<? extends Comparable<? super T>> list, T key);

// 排序
Collections.sort(List<T> list);
Collections.sort(List<T> list, Comparator<? super T> comp);

// 反转
Collections.reverse(List<?> list);

// 随机排列
Collections.shuffle(List<?> list);

// 交换位置
Collections.swap(List<?> list, int i, int j);

// 填充
Collections.fill(List<? super T> list, T obj);

// 替换
Collections.replaceAll(List<T> list, T oldVal, T newVal);

// 复制
Collections.copy(List<? super T> dest, List<? extends T> src);

// 最大值/最小值
Collections.max(Collection<? extends T> coll);
Collections.max(Collection<? extends T> coll, Comparator<? super T> comp);
Collections.min(Collection<? extends T> coll);
Collections.min(Collection<? extends T> coll, Comparator<? super T> comp);

// 同步包装（线程安全）
Collections.synchronizedList(List<T> list);
Collections.synchronizedSet(Set<T> set);
Collections.synchronizedMap(Map<K, V> map);
Collections.synchronizedCollection(Collection<T> coll);

// 不可变集合 Java 9+ 推荐 List.of(), Set.of(), Map.of()
Collections.unmodifiableList(List<? extends T> list);
Collections.unmodifiableSet(Set<? extends T> set);
Collections.unmodifiableMap(Map<? extends K, ? extends V> map);
Collections.unmodifiableCollection(Collection<? extends T> coll);
```

#### Arrays

```java
// 转为 List
Arrays.asList(T... arr);

// 查询
Arrays.binarySearch(T[] arr, T key);

// 填充
Arrays.fill(T[] arr, Object value);

// 排序
Arrays.sort(T[] arr);
Arrays.sort(T[] arr, Comparator<? super T> comp);

// 比较
Arrays.equals(T[] arr, T[] arr);

// 转为字符串
Arrays.toString(T[] arr);
```

### 并发集合 <Badge text="Java 5+" type="tip" />

| 集合类                  | 特点               |
| ----------------------- | ------------------ |
| `CopyOnWriteArrayList`  | 线程安全、读写分离 |
| `ConcurrentHasMap`      | 线程安全、高性能   |
| `ConcurrentLinkedQueue` | 线程安全队列       |
| `BlockingQueue`         | 阻塞队列           |
| `ConcurrentSkipListMap` | 线程安全有序 Map   |

### 性能对比

| 集合            | 查询     | 插入     | 删除     | 空间 |
| :-------------- | :------- | :------- | :------- | :--- |
| `ArrayList`     | O(1)     | O(n)     | O(n)     | 小   |
| `LinkedList`    | O(n)     | O(1)     | O(1)     | 大   |
| `HashSet`       | O(1)     | O(1)     | O(1)     | 中   |
| `LinkedHashSet` | O(1)     | O(1)     | O(1)     | 中   |
| `TreeSet`       | O(log n) | O(log n) | O(log n) | 中   |
| `HashMap`       | O(1)     | O(1)     | O(1)     | 中   |
| `LinkedHashMap` | O(1)     | O(1)     | O(1)     | 中   |
| `TreeMap`       | O(log n) | O(log n) | O(log n) | 中   |

## IO 流

### 传统 IO（File 类）

文件操作：

```java
File file = new File("file.txt");

// 创建文件
file.createNewFile();

// 重命名文件
file.renameTo(new File("dest.txt"));

// 删除文件
file.delete();
```

查看文件信息：

```java
// 获取文件名称
file.getName();

// 获取文件大小（字节）
file.length();

// 获取绝对路径
file.getAbsolutePath();

// 获取最后修改时间
file.lastModified();

// 判断是否为文件
file.isFile();

// 判断是否为目录
file.isDirectory();

// 判断文件是否存在
file.exists();
```

遍历目录：

```java
File dir = new File(".");

// 获取所有文件及子目录的名称
String[] fileNames = dir.list();
for (String fileName : fileNames) {
  System.out.println(fileName);
}

// 获取所有文件及子目录的 File 对象
File[] files = dir.listFiles();
for (File file : files) {
  System.out.println(file.getName());
}
```

### 现代文件操作（NIO.2） <Badge text="Java 7+" type="tip" /> <Badge text="推荐" type="tip" />

文件操作：

```java
Path path = Paths.get("file.txt");
Path dest = Paths.get("dest.txt");

// 创建文件
Files.createFile(path);

// 复制文件
Files.copy(path, dest, StandardCopyOption.REPLACE_EXISTING);

// 移动文件
Files.move(path, dest, StandardCopyOption.REPLACE_EXISTING);

// 删除文件
Files.deleteIfExists(dest);
```

读写操作：

```java
Path path = Paths.get("file.txt");

// 写入内容
Files.write(path, "hello world".getBytes(StandardCharsets.UTF_8));

// 追加内容
Files.write(path, "hello java".getBytes(StandardCharsets.UTF_8), StandardOpenOption.APPEND);

// 读取内容
Files.readAllLines(path, StandardCharsets.UTF_8);
```

查看文件信息：

```java
Path path = Paths.get("file.txt");
BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);

// 获取文件大小（字节）
attrs.size();

// 获取创建时间
attrs.creationTime();

// 获取最后修改时间
attrs.lastModifiedTime();

// 判断是否为目录
attrs.isDirectory();

// 判断文件是否存在
Files.exists(path);

// 判断是否隐藏
Files.isHidden(path);
```

遍历目录：

```java
Path dir = Paths.get(".");

// 遍历当前目录
Files.list(dir).forEach(System.out::println);

// 递归遍历所有子目录
Files.walk(dir)
  .filter(Files::isRegularFile) // 只保留文件
  .filter(p -> p.toString().endsWith(".java")) // 只保留 .java 文件
  .forEach(System.out::println);
```

### 字符流

操作文本文件。

```java
// 读取文件
try (FileReader reader = new FileReader("file.txt")) {
  char[] buffer = new char[1024]; // 设置缓冲区（通常用 1024 或 4096 字符），减少磁盘 I/O 次数
  int len;
  while ((len = reader.read(buffer)) != -1) {
    System.out.print(new String(buffer, 0, len));
  }
} catch (IOException e) {
  e.printStackTrace();
}

// 写入文件
try (FileWriter writer = new FileWriter("file.txt")) {
  writer.write("hello world");
} catch (IOException e) {
  e.printStackTrace();
}
```

使用缓冲字符流复制文本文件。

```java
try (
  BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
  BufferedWriter writer = new BufferedWriter(new FileWriter("dest.txt"))
) {
  String line;
  while ((line = reader.readLine()) != null) {
    writer.write(line);
    writer.newLine();
  }
  writer.flush(); // 刷新缓冲区，确保数据写入磁盘
} catch (IOException e) {
  e.printStackTrace();
}
```

### 字节流

操作非文本文件，如图片、PDF 等。

```java
// 读取文件
try (InputStream stream = new FileInputStream("file.txt")) {
  byte[] buffer = new byte[1024]; // 设置缓冲区（通常用 1024 或 4096 字节），减少磁盘 I/O 次数
  int len;
  while ((len = stream.read(buffer)) != -1) {
    System.out.print(new String(buffer, 0, len));
  }
} catch (IOException e) {
  e.printStackTrace();
}

// 写入文件
try (OutputStream stream = new FileOutputStream("file.txt")) {
  stream.write("hello world".getBytes(StandardCharsets.UTF_8));
} catch (IOException e) {
  e.printStackTrace();
}
```

使用转换流将字节流转换为指定编码的字符流，适合处理带有指定编码的文本文件。

```java
// 读取文件
try (
  InputStream stream = new FileInputStream("file.txt");
  InputStreamReader reader = new InputStreamReader(stream, StandardCharsets.UTF_8)
) {
  int byteData;
  while ((byteData = reader.read()) != -1) {
    System.out.print((char) byteData);
  }
} catch (IOException e) {
  e.printStackTrace();
}

// 写入文件
try (
  OutputStream stream = new FileOutputStream("file.txt");
  OutputStreamWriter writer = new OutputStreamWriter(stream, StandardCharsets.UTF_8)
) {
  writer.write("hello world");
} catch (IOException e) {
  e.printStackTrace();
}
```

使用缓冲字节流复制图片。

```java
try (
  BufferedInputStream bis = new BufferedInputStream(new FileInputStream("img.jpg"));
  BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("dest.jpg"))
) {
  byte[] buffer = new byte[1024]; // 1KB 缓冲
  int len;
  while ((len = bis.read(buffer)) != -1) {
    bos.write(buffer, 0, len);
  }
  bos.flush(); // 刷新缓冲区，确保数据写入磁盘
} catch (IOException e) {
  e.printStackTrace();
}
```

### 序列化 & 反序列化

```java
// 序列化
try (ObjectOutputStream writer = new ObjectOutputStream(new FileOutputStream("file.xxx"))) {
  writer.writeObject(new ArrayList<>(Arrays.asList("a", "b", "c")));
} catch (IOException e) {
  e.printStackTrace();
}

// 反序列化
try (ObjectInputStream reader = new ObjectInputStream(new FileInputStream("file.xxx"))) {
  ArrayList list = (ArrayList) reader.readObject();
} catch (IOException | ClassNotFoundException e) {
  e.printStackTrace();
}
