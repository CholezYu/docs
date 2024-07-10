---
title: 数组与链表
icon: extend
date: 2024-05-24
description: 数组与链表
---

## 数组

数组是一种线性数据结构。数组元素被存储在连续的内存空间中，根据数组内存地址（首元素内存地址）和索引可以计算出元素的内存地址。**索引本质上是内存地址的偏移量**，也就是说通过**索引**可以直接访问数组元素，所以数组访问元素的效率非常高。

![数组定义与存储方式](../.vuepress/public/image/array_definition.png)

**数组的缺点**：

- 插入与删除效率低：当数组元素较多时，插入与删除操作需要移动大量元素。

- 如果插入元素后超出数组长度范围，会造成元素丢失；而删除元素会造成部分内存空间浪费。

- 数组的长度是不可变的，如果要扩容数组，需要建立一个更大的数组，把原数组元素依次复制到新数组。

- 数组的存储空间是连续的，当数组较大时，如果空间碎片较多，内存可能无法提供足够大的连续空间。

::: tabs#code

@tab TS

```ts
class ArrayList extends Array {
  array: number[]
  
  constructor(array: number[]) {
    super()
    this.array = array
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

:::

## 链表

链表是一种线性数据结构，链表的每个元素都是一个节点对象，各节点通过 “指针” 连接，指针指向下一个节点的内存地址，通过指针可以访问下一个节点。在链表中插入与删除节点非常方便，只需要改变指针的指向即可，所以链表插入与删除元素的效率非常高。链表的元素节点被分散存储在内存空间中，它们的内存地址无须连续，所以不用担心空间碎片的问题。

![链表定义与存储方式](../.vuepress/public/image/linkedlist_definition.png)

**链表的缺点**：

- 访问效率低：链表需要从头节点开始，向后遍历，直到找到目标节点。

- 占用内存大：链表除了需要存储节点值，还要存储节点指针。如果节点数据越多，指针的内存影响就越小。

::: tabs#code

@tab TS

```ts
class LinkedNode<T> {
  val: T
  next: LinkedNode<T> | null
  
  constructor(val: T) {
    this.val = val
    this.next = null
  }
}

class LinkedList<T> {
  head: LinkedNode<T> | null
  size: number
  
  constructor(val?: T) {
    this.head = null
    this.size = 0
    if (val) {
      this.append(val)
    }
  }
  
  /**
   * 向链表尾部添加节点
   * @param val - 节点值
   */
  append(val: T) {
    const node = new LinkedNode(val)
    if (!this.head) {
      this.head = node
    }
    else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }
  
  /**
   * 插入节点
   * @param index - 索引值
   * @param val - 节点值
   */
  insert(index: number, val: T) {
    if (index < 0 || index > this.size) throw new Error("out of range")
    
    const node = new LinkedNode(val)
    if (index === 0) {
      node.next = this.head
      this.head = node
    }
    else {
      let current = this.head
      let prev: LinkedNode<T> | null = null
      for (let i = 0; i < index; i++) {
        prev = current
        current = current!.next
      }
      prev!.next = node
      node.next = current
    }
    this.size++
  }
  
  /**
   * 查找对应索引的节点
   * @param index - 索引值
   */
  find(index: number) {
    if (index < 0 || index > this.size) throw new Error("out of range")
    
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current!.next
    }
    return current
  }
  
  /**
   * 修改对应索引的节点值
   * @param index - 索引值
   * @param val - 节点值
   */
  update(index: number, val: T) {
    const node = this.find(index)
    node!.val = val
  }
  
  /**
   * 移除对应索引的节点
   * @param index - 索引值
   */
  remove(index: number) {
    if (index < 0 || index >= this.size) throw new Error("out of range")
    
    let current = this.head
    let prev: LinkedNode<T> | null = null
    if (index === 0) {
      this.head = current!.next
      current = null
    }
    else {
      for (let i = 0; i < index; i++) {
        prev = current
        current = current!.next
      }
      prev!.next = current!.next
      current = null
    }
    this.size--
  }
  
  /**
   * 遍历链表
   */
  each(callback: (val: T, index: number) => void) {
    let current = this.head
    let index = 0
    callback(current!.val, index++)
    while (current!.next) {
      current = current!.next
      callback(current.val, index++)
    }
  }
}
```

:::

## 双向链表

双向链表每个元素节点都有两个指针，分别指向上一个节点和下一个节点。

::: tabs#code

@tab TS

```ts
class LinkedNode<T> {
  val: T
  prev: LinkedNode<T> | null
  next: LinkedNode<T> | null
  
  constructor(val: T) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class DoubleLinkedList<T> {
  head: LinkedNode<T> | null
  tail: LinkedNode<T> | null
  size: number
  
  constructor(val?: T) {
    this.head = null
    this.tail = null
    this.size = 0
    if (val) {
      this.append(val)
    }
  }
  
  /**
   * 向链表尾部添加节点
   * @param val - 节点值
   */
  append(val: T) {
    const node = new LinkedNode(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    }
    else {
      this.tail!.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.size++
  }
  
  /**
   * 插入节点
   * @param index - 索引值
   * @param val - 节点值
   */
  insert(index: number, val: T) {
    if (index < 0 || index > this.size) throw new Error("out of range")
    
    const node = new LinkedNode(val)
    if (this.size === 0) {
      this.head = node
      this.tail = node
    }
    else {
      if (index === 0) {
        this.head!.prev = node
        node.next = this.head
        this.head = node
      }
      else if (index === this.size) {
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
    this.size++
  }
  
  /**
   * 查找对应索引的节点
   * @param index - 索引值
   */
  find(index: number) {
    if (index < 0 || index > this.size) throw new Error("out of range")
    
    // 从前往后
    if (this.size / 2 > index) {
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current!.next
      }
      return current
    }
    // 从后往前
    else {
      let current = this.tail
      for (let i = this.size - 1; i > index; i--) {
        current = current!.prev
      }
      return current
    }
  }
  
  /**
   * 修改对应索引的节点值
   * @param index - 索引值
   * @param val - 节点值
   */
  update(index: number, val: T) {
    const node = this.find(index)
    node!.val = val
  }
  
  /**
   * 移除对应索引的节点
   * @param index - 索引值
   */
  remove(index: number) {
    if (index < 0 || index >= this.size) throw new Error("out of range")
    
    let current = this.head
    if (this.size === 1) {
      this.head = null
      this.tail = null
    }
    else {
      if (index === 0) {
        this.head!.next!.prev = null
        this.head = this.head!.next
      }
      else if (index === this.size - 1) {
        current = this.tail
        this.tail!.prev!.next = null
        this.tail = this.tail!.prev
      }
      else {
        for (let i = 0; i < index; i++) {
          current = current!.next
        }
        current!.prev!.next = current!.next
        current!.next!.prev = current!.prev
      }
    }
    this.size--
    return current!.val
  }
  
  /**
   * 遍历链表
   */
  each(callback: (val: T, index: number) => void) {
    let current = this.head
    let index = 0
    callback(current!.val, index++)
    while (current!.next) {
      current = current!.next
      callback(current.val, index++)
    }
  }
}
```

:::
