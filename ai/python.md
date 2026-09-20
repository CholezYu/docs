---
title: Python
icon: python
date: 2026-09-20
description: Python
---

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

> [!tip]
>
> 与 JS 用法相反，`["a", "b", "c"].join(", ")`。

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

## 列表

### .append

向列表尾部添加元素。

```python
ls = [2, 3, 4]

ls.push(5)
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

将元素按 Unicode 升序排列，可以指定比较函数进行排序。

```python
def compare(a, b):
    return a["age"] - b["age"]


ls = [
    { "name": "Alice", "age": 18 },
    { "name": "Bob", "age": 25 },
    { "name": "Charlie", "age": 16 }
]

ls.sort(key=cmp_to_key(compare))
ls  #  => [{'name': 'Alice', 'age': 18}, {'name': 'Bob', 'age': 25}, {'name': 'Charlie', 'age': 16}]
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
def func(a: int, b: int, *args: int, **kwargs: str | int):
    """ 参数说明
    Args:
        a (int): 位置参数
        b (int): 位置参数
        args (int): 可变位置参数
        kwargs (str | int): 可变关键字参数
    """

    args  # (3, 4, 5)
    kwargs  # {'name': 'Alice', 'age': 22}


func(1, 2, 3, 4, 5, name="Alice", age=22)
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
