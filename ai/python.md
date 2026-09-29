---
title: Python
icon: python
date: 2026-09-29
description: Python
---

## 列表

### .append

向列表尾部添加元素。

```python
ls = [2, 3, 4]

ls.append(5)
ls  # => [2, 3, 4, 5]
```

### .extend

扩展列表，将一个可迭代对象中的元素添加到列表中。

```python
ls = [2, 3, 4]

ls.extend([5, 6])
ls  # => [2, 3, 4, 5, 6]
```

### .insert

在列表指定位置插入元素。

```python
ls = [2, 3, 4]

ls.insert(1, 5)
ls  # => [2, 5, 3, 4]
```

### .pop

删除列表指定位置的元素，默认删除最后一个元素，返回被删除的元素。

```python
ls = [2, 3, 4]

ls.pop(1)
ls  # => [2, 4]
```

### .remove

移除列表中首次匹配的元素。

```python
ls = [2, 3, 4]

ls.remove(2)
ls  # => [3, 4]
```

### .clear

清空列表。

```python
ls = [2, 3, 4]

ls.clear()
ls  # => []
```

### .reverse

反转列表中的元素。

```python
ls = [2, 3, 4]

ls.reverse()
ls  # => [4, 3, 2]
```

### .sort

将元素按 Unicode 升序排列，可以指定键函数（或比较函数）进行排序。

```python
ls = [{ "name": "Alice", "age": 18 }, { "name": "Bob", "age": 25 }, { "name": "Charlie", "age": 16 }]

ls.sort(key=lambda item: item["age"])
ls  # => [{'name': 'Charlie', 'age': 16}, {'name': 'Alice', 'age': 18}, {'name': 'Bob', 'age': 25}]

ls.sort(key=lambda item: item["age"], reverse=True)
ls  # => [{'name': 'Bob', 'age': 25}, {'name': 'Alice', 'age': 18}, {'name': 'Charlie', 'age': 16}]
```

## 元组

元组是不可变类型，只能访问元素，不能进行修改。

```python
t = (1, 2, 3, 4, 5)

t[2] = 6  # TypeError: 'tuple' object does not support item assignment
```

如果元组中的元素是可变类型，那么可以对其进行修改。

```python
t = ([1, 2, 3], [3, 2, 1])

t[1].sort()
t  # => ([1, 2, 3], [1, 2, 3])
```

## 字符串

### .split

拆分字符串，将被拆分的部分组成列表，并返回。

```python
s = "hello world"

s.split()  # => ['hello', 'world']
s.split("")  # ValueError: empty separator
s.split(" ")  # => ['hello', 'world']
```

### .join

拆分列表，将被拆分的部分组成字符串，并返回。

```python
s = ", "

s.join(["hello", "world"])  # => 'hello, world'
```

### .find

查找元素，返回元素首次出现的索引。若不存在，则返回 -1。

```python
s = "hello world hello world"

s.find("world")  # => 6
s.find("world", 10)  # => 18
s.find("woood")  # => -1
```

### .rfind

反向查找元素，返回元素首次出现的索引。若不存在，则返回 -1。

```python
s = "hello world hello world"

s.rfind("world")  # => 18
s.rfind("world", 2, 12)  # => 6
s.rfind("woood")  # => -1
```

### .replace

替换匹配的元素，并返回。

```python
s = "18-31-56"
 
# 默认替换所有匹配项
s.replace("-", ":")  # => '18:31:56'

# 指定替换的次数
s.replace("-", ":", 1)  # => '18:31-56'
```

### .strip

移除字符串两边的指定字符，并返回。

```python
s = "---hello world---"

s.strip("-")  # => 'hello world'
```

### .lstrip

移除字符串首部的指定字符，并返回。

```python
s = "---hello world---"

s.lstrip("-")  # => 'hello world---'
```

### .rstrip

移除字符串尾部的指定字符，并返回。

```python
s = "---hello world---"

s.rstrip("-")  # => '---hello world'
```

### .upper

将字符串转为大写，并返回。

```python
s = "I love Python"

s.upper()  # => 'I LOVE PYTHON'
```

### .lower

将字符串转为小写，并返回。

```python
s = "I love Python"

s.lower()  # => 'i love python'
```

### .swapcase

将字符串大写转为小写，小写转为大写，并返回。

```python
s = "I love Python"

s.swapcase()  # => 'i LOVE pYTHON'
```

### .capitalize

将字符串首字符转为大写，其他字符转为小写，并返回。

```python
s = "I love Python"

s.capitalize()  # => 'I love python'
```

## 序列

### 切片

切片是针对序列（列表、元组、字符串）的一种高级操作，它可以截取序列的一部分，或者对序列进行浅拷贝、翻转等操作。

```python
ls = [1, 2, 3, 4, 5]

# 截取索引 2 到 4 之间的元素（不含 4）
ls[2:4]  # => [3, 4]

# 从索引 2 开始截取到最后
ls[2:]  # => [3, 4, 5]

# 从头开始截取到索引 4（不含 4）
ls[:4]  # => [1, 2, 3, 4]

# 全部截取（浅拷贝）
ls[:]  # => [1, 2, 3, 4, 5]

# 从索引 1 到 5（不含 5），每隔一个元素截取一个
ls[1:5:2]  # => [2, 4]

# 提取所有偶数索引的元素
ls[::2]  # => [1, 3, 5]

# 反向截取
ls[::-1]  # => [5, 4, 3, 2, 1]
```

还可以通过“切片赋值”进行增删改操作。

```python
ls = [1, 2, 3, 4, 5]

# 插入元素
ls[1:1] = [6, 7]
ls  # => [1, 6, 7, 2, 3, 4, 5]

# 替换元素
ls[1:3] = [6, 7]
ls  # => [1, 6, 7, 4, 5]

# 清空切片
ls[:] = []
ls  # => []

# 配合列表推导式
ls[:] = [-x for x in ls]
ls  # => [-1, -2, -3, -4, -5]
```

### 列表推导式

列表推导式以更简洁的方式生成列表。

```python
# for...in
squares = []
for x in range(5):
    squares.append(x**2)

# map
squares = list(map(lambda x: x**2, range(5)))

# 列表推导式
squares = [x**2 for x in range(5)]

squares  # => [0, 1, 4, 9, 16]
```

下面是带条件的列表推导式。

```python
# for...in
squares = []
for x in range(5):
    if x % 2 == 0:
        squares.append(x**2)

# filter & map
squares = list(filter(lambda x: x % 2 == 0, map(lambda x: x**2, range(5))))

# reduce
squares = reduce(lambda prev, x: [*prev, x**2] if x**2 % 2 == 0 else prev, range(5), [])

# 列表推导式
squares = [x**2 for x in range(5) if x % 2 == 0]

squares  # => [0, 4, 16]
```

## 集合

### .add

向集合中添加一个元素。

```python
s = { "2", "3", "4" }

s.add("5")
s  # => {'2', '4', '5', '3'}
```

### .update

将一个可迭代对象中的元素添加到集合中。

```python
s = { "2", "3", "4" }

s.update(["5", "6"])
s  # => {'3', '2', '6', '5', '4'}
```

### .remove

移除集合中的指定元素，不存在则报错。

```python
s = { "2", "3", "4" }

s.remove("5")  # KeyError: 5

s.remove("3")
s  # => {'2', '4'}
```

### .discard

移除集合中的指定元素，不存在不会报错。

```python
s = { "2", "3", "4" }

s.discard("5")  # 不会报错
s  # => {'3', '4', '2'}

s.discard("3")
s  # => {'2', '4'}
```

### .pop

随机删除集合中的一个元素，返回被删除的元素。

```python
s = { "2", "3", "4" }

r = s.pop()
r  # => '4'
s  # => {'2', '3'}
```

### .clear

清空集合。

```python
s = { "2", "3", "4" }

s.clear()
s  # => set()
```

### .intersection

计算两个集合的交集，并返回。

```python
s1 = { 1, 2, 3, 4 }
s2 = { 3, 4, 5, 6 }

s1.intersection(s2)  # => {3, 4}
s1 & s1  # => {3, 4}
```

### .union

计算两个集合的并集，并返回。

```python
s1 = { 1, 2, 3, 4 }
s2 = { 3, 4, 5, 6 }

s1.union(s2)  # => {1, 2, 3, 4, 5, 6}
s1 | s2  # => {1, 2, 3, 4, 5, 6}
```

### .difference

计算两个集合的差集，并返回。

```python
s1 = { 1, 2, 3, 4 }
s2 = { 3, 4, 5, 6 }

s1.difference(s2)  # => {1, 2}
s1 - s2  # => {1, 2}

s2.difference(s1)  # => {5, 6}
s2 - s1  # => {5, 6}
```

### .symmetric_difference

计算两个集合的对称差集，并返回。

```python
s1 = { 1, 2, 3, 4 }
s2 = { 3, 4, 5, 6 }

s1.symmetric_difference(s2)  # => {1, 2, 5, 6}
s1 ^ s2  # => {1, 2, 5, 6}
```

### .issubset

判断集合是否为另一个集合的子集。

```python
s1 = { 1, 2, 3 }
s2 = { 1, 2, 3, 4, 5 }

s1.issubset(s2)  # => True
s1 <= s2  # => True
```

### .issuperset

判断集合是否为另一个集合的超集（父集）。

```python
s1 = { 1, 2, 3, 4, 5 }
s2 = { 1, 2, 3 }

s1.issuperset(s2)  # => True
s1 >= s2  # => True
```

### .isdisjoint

判断两个集合是否**无**交集。

```python
s1 = { 1, 2, 3 }
s2 = { 4, 5, 6 }

s1.isdisjoint(s2)  # => True
```

## 字典

### .get

访问字典中的元素。

```python
person = { "name": "Alice", "age": 25 }

person.get("age")  # => 25
person.get("email")  # => None
person.get("email", "N/A")  # => 'N/A'，设置默认值
```

也可以通过“键”访问。

```python
person = { "name": "Alice", "age": 25 }

person["name"]  # => 'Alice'
person["email"]  # KeyError: 'email'
```

### .update

修改字典中元素的值，如果不存在则添加元素。

```python
person = { "name": "Alice", "age": 25 }

person.update({ "city": "California" })
person  # => {'name': 'Alice', 'age': 25, 'city': 'California'}

person.update(age=27)
person  # => {'name': 'Alice', 'age': 27, 'city': 'California'}
```

也可以通过“键”访问后直接修改或添加元素。

```python
person = { "name": "Alice", "age": 25 }

person["city"] = "California"
person  # => {'name': 'Alice', 'age': 25, 'city': 'California'}
```

### .pop

删除字典中的元素，返回被删除的元素。

```python
person = { "name": "Alice", "age": 25, "city": "California" }

age = person.pop("age")
age  # => 25
person  # => {'name': 'Alice', 'city': 'California'}
```

### .clear

清空字典。

```python
person = { "name": "Alice", "age": 25, "city": "California" }

person.clear()
person  # => None
```

## 函数

### 函数的参数

```python
def func(a: int, *args: int, name: str, **kwargs: str | int):
    """ 参数说明
    Args:
        a (int): 位置参数
        args (int): 可变位置参数
        name (str): 关键字参数
        kwargs (str | int): 可变关键字参数
    """

    a  # => 1
    args  # => (2, 3)
    name  # => 'Alice'
    kwargs  # => {'age': 22, 'sex': 'female'}


func(1, 2, 3, name="Alice", age=22, sex="female")
```

### 闭包

[闭包 | JavaScript](/client/javascript.md#闭包)

### 装饰器

装饰器是一个返回值为函数的高阶函数，可以增强被修饰函数的功能。

```python
def decorator(func):
    def wrapper(*args, **kwargs):
        func(*args, *kwargs.items())
    return wrapper


@decorator
def func(*args):
    print(args)

func(name="Alice", age=22)  # (('name', 'Alice'), ('age', 22))
```

下面是带参数的装饰器。

```python
def executor(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            func(*args * n, *kwargs.items())
        return wrapper
    return decorator


@executor(2)
def func(*args):
    print(args)

func("hello", name="Alice")  # => ('hello', 'hello', ('name', 'Alice'))
```

## 面向对象

### 构造方法

创建实例时，会自动执行构造方法。

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

### 实例属性

通过构造方法初始化的属性是实例属性。实例属性对于每个实例都是独立的。

```python
class Person:
    def __init__(self, name):
        self.name = name


p1 = Person("Alice")
p2 = Person("bob")

p1.name  # => 'Alice'
p2.name  # => 'Bob'
```

### 类属性

定义在类的内部，并且没有在构造法中初始化的属性是类属性。类属性是所有实例共享的。

```python
class Person:
    school = "MIT"


p1 = Person()
p2 = Person()

p1.school  # => 'MIT'
p2.school  # => 'MIT'
Person.school  # => 'MIT'

p1.school = "UCL"  # 实际并没有修改类属性，而是创建了一个新的实例属性'school'
p1.school  # => 'UCL'
p2.school  # => 'MIT'
Person.school  # => 'MIT'
```

### 实例方法

```python
class Person:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name


p = Person("Alice")
p.get_name()  # => 'Alice'

p.set_name("Bob")
p.get_name()  # => 'Bob'
```

### 类方法

使用 `@classmethod` 装饰器定义的方法是类方法。

类方法通常用于访问或修改类属性。

```python
class Person:
    count = 0

    def __init__(self):
        Person.count += 1

    @classmethod
    def get_count(cls):
        return cls.count


p1 = Person()
p2 = Person()

Person.get_count()  # => 2
```

### 静态方法

使用 `@staticmethod` 装饰器定义的方法是静态方法。

静态方法不需要实例化可以直接调用，通常用于开发工具集。

```python
class MathUtils:
    @staticmethod
    def add(a, b):
        return a + b

    @staticmethod
    def multiply(a, b):
        return a * b


MathUtils.add(3, 5)  # => 8
MathUtils.multiply(4, 6)  # => 24
```

### 属性方法

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        self._name = value

    @name.deleter
    def name(self):
        del self._name


p = Person("Alice")
p.name  # => 'Alice'

p.name = "Bob"
p.name  # => 'Bob'

del p.name
p.name  # AttributeError: 'Person' object has no attribute '_name'
```

### 继承

子类可以继承父类的属性和方法 。

在子类中使用 `super()` 调用父类的方法。

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        return { "name": self.name, "age": self.age }


class Student(Person):
    def __init__(self, name, age, sex):
        super().__init__(name, age)
        self.sex = sex

    def info(self):
        name, age = super().info().values()
        return { "name": name, "age": age, "sex": self.sex }


student = Student("Alice", 22, "female")
student.info()  # => {'name': 'Alice', 'age': 22, 'sex': 'female'}
```

### 多态

同一个方法，通过不同的对象表现出不同的行为。

```python
class Animal:
    def speak(self):
        pass


class Dog(Animal):
    def speak(self):
        print("Woof!")


class Cat(Animal):
    def speak(self):
        print("Meow!")


def animal_speak(animal: Animal):
    animal.speak()


dog = Dog()
cat = Cat()
animal_speak(dog)  # Woof!
animal_speak(cat)  # Meow!
```

### 抽象类

抽象类是一种不能被直接实例化的类，它可以被其他类继承，通常用于定义通用模板。

> [!important]
>
> 抽象方法只有声明，没有实现。子类必须实现所有抽象方法，除非子类也是抽象类。

```python
from abc import ABC, abstractmethod


class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass


class Dog(Animal):
    def speak(self):
        print("Woof!")


class Cat(Animal):
    def speak(self):
        print("Meow!")


animal = Animal()  # TypeError: Can't instantiate abstract class Animal without an implementation for abstract method 'speak'
dog = Dog()
cat = Cat()
dog.speak()  # Woof!
cat.speak()  # Meow!
```

## 进程

### 创建进程

#### 使用 Process 类

适用于简单的单发任务。

```python
def worker(process_name):
    print(f"Process: {process_name} (PID: {os.getpid()}, PPID: {os.getppid()}) start")
    time.sleep(1)
    print(f"Process: {process_name} (PID: {os.getpid()}, PPID: {os.getppid()}) end")


if __name__ == "__main__'":
    p = Process(target=worker, args=("print_task",))
    p.start()
    p.join()  # 阻塞主进程，等待子进程执行完成再执行主进程
```

使用 `daemon=True` 可以设置为守护进程。主进程执行完成时，守护进程会随之结束。常用于后台监控。

```python
def monitor():
    # 监控主进程任务，主进程任务执行完成后结束
    # ...
    pass


if __name__ == "__main__":
    p = Process(target=monitor, daemon=True)  # daemon=True 设置为守护进程
    p.start()
    # 主进程执行任务
    # ...
```

#### 继承 Process 类

适用于子进程需要维护复杂状态、内部变量或封装特定逻辑的场景。

```python
class PrintProcess(Process):
    def __init__(self, process_name):
        super().__init__()
        self.process_name = process_name

    def run(self):
        print(f"Process: {self.process_name} (PID: {os.getpid()}, PPID: {os.getppid()}) start")
        time.sleep(1)
        print(f"Process: {self.process_name} (PID: {os.getpid()}, PPID: {os.getppid()}) end")


if __name__ == "__main__":
    p = PrintProcess("print_task")
    p.start()
    p.join()
```

#### 进程池  ProcessPoolExecutor <Badge text="推荐" type="tip" />

进程池能自动管理进程的创建与释放，提高资源利用率。适合处理大量短任务。

```python
def square(n):
    return n * n


if __name__ == "__main__":
    # max_workers 通常为 CPU 核心数
    with ProcessPoolExecutor(max_workers=4) as executor:
        # 提交单个任务
        future = executor.submit(square, 10)
        # 阻塞获取结果
        future.result()  # => 100

        # 批量提交任务
        results = list(executor.map(square, [1, 2, 3, 4, 5]))
        results  # => [1, 4, 9, 16, 25]
```

#### 传统进程池 Pool

这是老版本 Python 常用的进程池，虽然限制更推荐 ProcessPoolExecutor，但在老项目中很常见。

```python
def square(n):
    return n * n


if __name__ == "__main__":
    # max_workers 通常为 CPU 核心数
    with Pool(processes=4) as pool:
        # 异步非阻塞提交
        result = pool.apply_async(square, args=(10,))
        result.get()  # => 100

        # 批量同步提交
        results = pool.map(square, [1, 2, 3, 4, 5])
        results  # => [1, 4, 9, 16, 25]
```

### 进程同步

#### 锁 Lock & RLock

确保同一时间只有一个进程能执行某段代码。

Lock 不可重入，适用于简单互斥场景。

```python
def worker(process_name, lock):
    with lock:
        print(f"Process {process_name} acquire lock")  # 获取锁
        time.sleep(1)
        print(f"Process {process_name} release lock")  # 释放锁


if __name__ == "__main__":
    lock = Lock()

    p = Process(target=worker, args=("print_task", lock))
    p.start()
    p.join()
```

RLock 可重入，适用于嵌套锁场景。

```python
def worker(process_name, rlock):
    with rlock:
        print(f"Process {process_name} acquire lock")  # 获取锁
        with rlock:
            print(f"Process {process_name} reacquire lock")  # 重新获取锁


if __name__ == "__main__":
    rlock = RLock()

    p = Process(target=worker, args=("print_task", rlock))
    p.start()
    p.join()
```

#### 信号量 Semaphore

允许指定数量的进程同时访问。

```python
def access_resource(process_name, sem):
    with sem:
        print(f"Process {process_name} access resources")
        time.sleep(1)


if __name__ == "__main__":
    sem = Semaphore(2)  # 最多2个进程同时访问

    processes = []
    for i in range(5):
        p = Process(target=access_resource, args=(i, sem))
        processes.append(p)
        p.start()

    for p in processes:
        p.join()
```

#### 事件 Event

```python
def waiter(process_name, event):
    print(f"Process {process_name} is waiting")
    event.wait()
    print(f"Process {process_name} is done")


def setter(event):
    time.sleep(2)
    print("event is set")
    event.set()


if __name__ == "__main__":
    event = Event()

    waiter_process = Process(target=waiter, args=("waiter_task", event))
    setter_process = Process(target=setter, args=(event,))

    waiter_process.start()
    setter_process.start()

    waiter_process.join()
    setter_process.join()
```

### 进程通信

#### 队列 Queue <Badge text="常用" type="tip" />

Queue 支持多写多读，内部自带锁，是进程安全的。

```python
def producer(q):
    for i in range(10):
        q.put(f"production-{i}")
        print(f"Produced production-{i}")
    q.put(None)  # 结束信号


def consumer(q):
    while True:
        production = q.get()
        if production is None: break
        print(f"Consumed {production}")


if __name__ == "__main__":
    q = Queue()

    producer_process = Process(target=producer, args=(q,))
    consumer_process = Process(target=consumer, args=(q,))

    producer_process.start()
    consumer_process.start()

    producer_process.join()
    consumer_process.join()
```

#### 管道 Pipe <Badge text="效率高" type="tip" />

Pipe 只用于两个进程之间的双向或单向通信。由于没有队列那么多的逻辑管理，它的速度比 Queue 快。

```python
def sender(connection):
    connection.send("hello world")
    connection.send([1, 2, 3])
    connection.close()


def receiver(connection):
    connection.recv()  # => 'hello world'
    connection.recv()  # => [1, 2, 3]


if __name__ == "__main__":
    parent_conn, child_conn = Pipe()

    sender_process = Process(target=sender, args=(child_conn,))
    receiver_process = Process(target=receiver, args=(parent_conn,))

    sender_process.start()
    receiver_process.start()

    sender_process.join()
    receiver_process.join()
```

#### 共享简单数据 Value & Array

适用于不需要复杂的队列，只是让两个进程共同读写一个数字或数组。它避开了序列化的开销，因此效率最高。

```python
def worker(num, arr):
    num.value = 3.14  # 修改共享的浮点数
    arr[:] = [-x for x in arr]  # 修改共享的数组


if __name__ == "__main__":
    num = Value('d', 0.0)  # 创建一个共享的浮点数
    arr = Array("i", range(5))  # 创建一个共享的数组

    p = Process(target=worker, args=(num, arr))
    p.start()
    p.join()

    num.value  # => 3.14
    arr[:]  # => [0, -1, -2, -3, -4]
```

#### 共享复杂数据 Manager

Manager 可以跨进程共享复杂的数据结构（列表、字典）。它会启动一个控制服务器进程来统一管理。

```python
def worker(shared_list, shared_dict):
    shared_list.extend([1, 2, 3])
    shared_dict["data"] = shared_list[:]
    shared_dict["status"] = "Success"


if __name__ == "__main__":
    with Manager() as manager:
        shared_list = manager.list()  # 创建一个共享的列表
        shared_dict = manager.dict()  # 创建一个共享的字典

        p = Process(target=worker, args=(shared_list, shared_dict))
        p.start()
        p.join()

        shared_list  # => [1, 2, 3]
        shared_dict  # => {'data': [1, 2, 3], 'status': 'Success'}
