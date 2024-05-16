---
title: 数据结构与算法-JavaScript
icon: keyboard
date: 2024-05-16
---

## 栈与队列

> [!tip]
>
> 栈和队列都是受限的线性数据结构。

### 栈 Stack

后进先出（LIFO，Last In First Out）。栈顶进，栈顶出。

```ts
class Stack<T> {
  values: T[]
  
  constructor() {
    this.values = []
  }
  
  // 向栈顶添加元素
  push(value: T) {
    this.values.push(value)
  }
  
  // 移除栈顶的元素
  pop() {
    return this.values.pop()
  }
  
  // 获取栈顶的元素
  peek() {
    return this.values[this.values.length - 1]
  }
  
  // 遍历栈
  forEach(callback: (value: T, index: number) => void) {
    for (let i = 0; i < this.values.length; i++) {
      callback(this.values[i], i)
    }
  }
}
```

### 队列 Queue

队列是一种受限的线性结构。

先进先出（FIFO，First In First Out）。队尾进，队首出。

```ts
class Queue<T> {
  values: T[]
  
  constructor() {
    this.values = []
  }
  
  // 向队尾添加元素
  enqueue(value: T) {
    this.values.push(value)
  }
  
  // 移除队首的元素
  dequeue() {
    return this.values.shift()
  }
  
  // 返回队首的元素
  front() {
    return this.values[0]
  }
  
  // 遍历队列
  forEach(callback: (value: T, index: number) => void) {
    for (let i = 0; i < this.values.length; i++) {
      callback(this.values[i], i)
    }
  }
}
```

### 优先级队列

优先级队列在插入操作时，需要比较元素的优先级，而不是先进先出，其他操作与普通队列相同。

```ts
interface QueueNodeType {
  value: T
  priority: number
}

class QueueNode<T> implements QueueNodeType<T> {
  value: T
  priority: number
  
  constructor(value: T, priority: number) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue<T> extends Queue<QueueNodeType<T>> {
  constructor() {
    super()
  }
  
  // 向队列插入元素
  enqueue(node: QueueNodeType<T>) {
    const { value, priority } = node
    const queueNode = new QueueNode(value, priority)
    
    if (this.values.length === 0) {
      this.values.push(queueNode)
    }
    else {
      // 标记节点的优先级是否最低
      let lowest = true
      for (let i = 0; i < this.values.length; i++) {
        if (queueNode.priority < this.values[i].priority) {
          this.values.splice(i, 0, queueNode)
          // 优先级不是最低
          lowest = false
          break
        }
      }
      if (lowest) {
        // 优先级最低，插入到最后
        this.values.push(queueNode)
      }
    }
  }
}
```

## 数组与链表

> [!tip]
>
> 数组和链表都是线性结构数据。

### 数组 Array

**数组的优点**：

- 访问效率高：数组元素存储在连续的内存空间中，访问效率非常高。数组的查找被称为 “线性查找”。

**数组的缺点**：

- 插入与删除效率低：当数组元素较多时，插入与删除操作需要移动大量元素。

- 如果插入元素后超出数组长度范围，会造成元素丢失；而删除元素会造成部分内存空间浪费。

- 数组的长度是不可变的，如果要扩容数组，需要建立一个更大的数组，把原数组元素依次复制到新数组。

- 数组的存储空间是连续的，当数组较大时，如果空间碎片较多，内存可能无法提供足够大的连续空间。

```ts
class ArrayList extends Array {
  value: number[]
  
  constructor(value: number[]) {
    super()
    this.value = value
  }
  
  // 冒泡排序
  bubbleSort() {
    // ...
  }
  
  // 选择排序
  selectionSort() {
    // ...
  }
  
  // 插入排序
  insertionSort() {
    // ...
  }
  
  // 快速排序
  quickSort() {
    // ...
  }
  
  // 希尔排序
  shellSort() {
    
  }
}
```

### 链表 Linked List

**链表的优点**：

- 插入与删除效率高：链表是通过指针连接各节点，插入与删除非常灵活，只需要改变指针的指向即可。

- 链表占用的是分散的内存空间，不需要担心空间碎片的问题。

**链表的缺点**：

- 访问效率低：链表需要从头节点开始，向后遍历，访问目标节点。

- 占用内存大：链表除了需要存储节点值，还要存储节点指针。如果节点数据越多，指针的内存影响就越小。

```ts
interface LinkedNodeType<T> {
  value: T
  next: LinkedNodeType<T> | null
}

class LinkedNode<T> implements LinkedNodeType<T> {
  value: T
  next: LinkedNodeType<T> | null
  
  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class LinkedList<T> {
  head: LinkedNodeType<T> | null
  length: number
  
  constructor() {
    this.head = null
    this.length = 0
  }
  
  // 获取尾部节点
  getLastNode() {
    if (!this.head) return null
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current
  }
  
  // 向链表尾部添加节点
  append(value: T) {
    const lastNode = this.getLastNode()
    const node = new LinkedNode(value)
    if (!this.head) {
      this.head = node
    }
    else {
      lastNode!.next = node
    }
    this.length++
  }
  
  // 向链表指定位置插入节点
  insertAt(index: number, value: T) {
    if (index < 0 || index > this.length) throw new Error("Index out of range")
    
    const node = new LinkedNode(value)
    if (index === 0) {
      node.next = this.head
      this.head = node
    }
    else {
      let current = this.head
      let previous: LinkedNodeType<T> | null = null
      for (let i = 0; i < index; i++) {
        previous = current
        current = current!.next
      }
      previous!.next = node
      node.next = current
    }
    this.length++
  }
  
  // 获取对应索引的节点
  getNodeAt(index: number) {
    if (index < 0 || index > this.length) throw new Error("Index out of range")
    
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current!.next
    }
    return current
  }
  
  // 获取对应索引的节点数据
  getValueAt(index: number) {
    const node = this.getNodeAt(index)
    return node!.value
  }
  
  // 修改对应索引的节点数据
  setValueAt(index: number, value: T) {
    const node = this.getNodeAt(index)
    node!.value = value
  }
  
  // 移除对应索引的节点
  removeAt(index: number) {
    if (index < 0 || index >= this.length) throw new Error("Index out of range")
    
    let current = this.head
    let previous: LinkedNodeType<T> | null = null
    if (index === 0) {
      this.head = current!.next
      current = null
    }
    else {
      for (let i = 0; i < index; i++) {
        previous = current
        current = current!.next
      }
      previous!.next = current!.next
      current = null
    }
    this.length--
  }
  
  // 遍历链表
  forEach(callback: (value: T, index: number) => void) {
    let current = this.head
    let index = 0
    callback(current!.value, index++)
    while (current!.next) {
      current = current!.next
      callback(current.value, index++)
    }
  }
}
```

### 双向链表

相比于单向链表，双向链表相连的过程是双向的。既可以从头部遍历到尾部，也可以从尾部遍历到头部。

```ts
interface DoubleLinkedListNodeType<T> {
  value: T
  prev: DoubleLinkedListNodeType<T> | null
  next: DoubleLinkedListNodeType<T> | null
}

class DoubleLinkedListNode<T> implements DoubleLinkedListNodeType<T> {
  value: T
  prev: DoubleLinkedListNodeType<T> | null
  next: DoubleLinkedListNodeType<T> | null
  
  constructor(value: T) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoubleLinkedList<T> {
  head: DoubleLinkedListNodeType<T> | null
  tail: DoubleLinkedListNodeType<T> | null
  length: number
  
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  
  // 向链表尾部添加节点
  append(value: T) {
    const node = new DoubleLinkedListNode(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    }
    else {
      this.tail!.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
  }
  
  // 向链表指定位置插入节点
  insert(index: number, value: T) {
    if (index < 0 || index > this.length) throw new Error("Index out of range")
    
    const node = new DoubleLinkedListNode(value)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    }
    else {
      if (index === 0) {
        this.head!.prev = node
        node.next = this.head
        this.head = node
      }
      else if (index === this.length) {
        this.tail!.next = node
        node.prev = this.tail
        this.tail = node
      }
      else {
        let current = this.head
        for (let i = 0; i < index; i++) {
          current = current!.next
        }
        node.prev = current!.prev
        node.next = current
        current!.prev!.next = node
        current!.prev = node
      }
    }
    this.length++
  }
  
  // 获取对应索引的节点
  getNodeAt(index: number) {
    if (index < 0 || index > this.length) throw new Error("Index out of range")
    
    // 从前往后
    if (this.length / 2 > index) {
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current!.next
      }
      return current
    }
    // 从后往前
    else {
      let current = this.tail
      for (let i = this.length - 1; i > index; i--) {
        current = current!.prev
      }
      return current
    }
  }
  
  // 获取对应索引的节点数据
  getValueAt(index: number) {
    const node = this.getNodeAt(index)
    return node!.value
  }
  
  // 修改对应索引的节点数据
  setValueAt(index: number, value: T) {
    const node = this.getNodeAt(index)
    node!.value = value
  }
  
  // 移除对应索引的节点
  removeAt(index: number) {
    if (index < 0 || index >= this.length) throw new Error("Index out of range")
    
    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    else {
      if (index === 0) {
        this.head!.next!.prev = null
        this.head = this.head!.next
      }
      else if (index === this.length - 1) {
        current = this.tail
        this.tail!.prev!.next = null
        this.tail = this.tail!.prev
      }
      else {
        let current = this.head
        for (let i = 0; i < index; i++) {
          current = current!.next
        }
        current!.prev!.next = current!.next
        current!.next!.prev = current!.prev
      }
    }
    this.length--
    return 
  }
  
  // 遍历链表
  forEach(callback: (value: T, index: number) => void) {
    let current = this.head
    let index = 0
    callback(current!.value, index++)
    while (current!.next) {
      current = current!.next
      callback(current.value, index++)
    }
  }
}
```

## 哈希表 Hash Map

### 哈希表理论



### 自定义哈希表



## 树 Tree

### 二叉树



### 平衡树



### 红黑树



## 图 Graph

### 图的表示



### 自定义图



### 图的遍历



## 排序算法

### 冒泡排序

```ts
ArrayList.prototype.bubbleSort = function () {
  let flag = true
  for (let i = 0; i < this.value.length - 1; i++) {
    for (let j = 1; j < this.value.length - i; j++) {
      if (this.value[j - 1] > this.value[j]) {
        [this.value[j - 1], this.value[j]] = [this.value[j], this.value[j - 1]]
        flag = false
      }
    }
    if (flag) break
  }
}
```

### 选择排序



### 插入排序



### 快速排序



### 希尔排序

