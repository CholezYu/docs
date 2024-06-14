---
title: 栈与队列
icon: stack
date: 2024-05-24
description: 栈与队列
---

## 栈

栈是一种遵循后进先出（LIFO，Last In First Out）的线性数据结构。将元素添加到栈顶称为 “入栈”，移除栈顶元素称为 “出栈”。栈可以通过 “数组” 或 “链表” 来实现，然而数组和链表可以在任意位置添加或删除元素，但是栈遵循后进先出（或先进后出）的原则，所以**栈可以视为一种受限的数组或链表**。

![栈的先入后出规则](../.vuepress/public/image/stack_operations.png)

使用数组实现栈，可以将数组的尾部作为栈顶。入栈就是向数组尾部添加元素，出栈就是删除数组尾部的元素。

::: tabs#code

@tab TS

```ts
class Stack<T> {
  private readonly stack: T[]
  
  constructor(stack: T[] = []) {
    this.stack = stack
  }
  
  /**
   * 获取栈的值
   */
  get val() {
    return this.stack
  }
  
  /**
   * 获取栈的长度
   */
  get size() {
    return this.stack.length
  }
  
  /**
   * 入栈（向栈顶添加元素）
   * @param val - 入栈的元素
   */
  push(val: T) {
    this.stack.push(val)
  }
  
  /**
   * 出栈（移除栈顶元素）
   */
  pop() {
    return this.stack.pop()
  }
  
  /**
   * 访问栈顶元素
   */
  peek() {
    return this.stack[this.stack.length - 1]
  }
  
  /**
   * 遍历栈
   */
  each(callback: (val: T, index: number) => void) {
    for (let i = 0; i < this.stack.length; i++) {
      callback(this.stack[i], i)
    }
  }
}
```

:::

## 队列

队列是一种遵循先进先出（FIFO，First In First Out）的线性数据结构。向队尾添加元素称为 “入队”，移除队首元素称为 “出队”。队列也可以通过 “数组” 或 “链表” 来实现，所以**队列也可以视为一种受限的数组或链表**。

![队列的先入先出规则](../.vuepress/public/image/queue_operations.png)

使用数组实现队列，可以将数组的尾部作为队尾，将数组的头部作为队首。入队就是向数组尾部添加元素，出队就是移除数组头部的元素。

::: tabs#code

@tab TS

```ts
class Queue<T> {
  private readonly queue: T[]
  
  constructor(queue: T[] = []) {
    this.queue = queue
  }
  
  /**
   * 获取队列的值
   */
  get val() {
    return this.queue
  }
  
  /**
   * 获取队列的长度
   */
  get size() {
    return this.queue.length
  }
  
  /**
   * 入队（向队尾添加元素）
   * @param val - 入队的元素
   */
  enqueue(val: T) {
    this.queue.push(val)
  }
  
  /**
   * 出队（移除队首元素）
   */
  dequeue() {
    return this.queue.shift()
  }
  
  /**
   * 访问队首元素
   */
  front() {
    return this.queue[0]
  }
  
  /**
   * 遍历队列
   */
  each(callback: (val: T, index: number) => void) {
    for (let i = 0; i < this.queue.length; i++) {
      callback(this.queue[i], i)
    }
  }
}
```

:::

## 优先级队列

优先级队列在插入操作时，需要比较元素的优先级，而不是先进先出，其他操作与普通队列相同。

::: tabs#code

@tab TS

```ts
class QueueNode<T> {
  val: T
  priority: number
  
  constructor(val: T, priority: number) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue<T> extends Queue<QueueNode<T>> {
  constructor(node?: QueueNode<T>) {
    super()
    if (node && node.val && node.priority) {
      this.insert(node.val, node.priority)
    }
  }
  
  /**
   * 插入元素
   * @param val - 元素值
   * @param priority - 元素优先级
   */
  insert(val: T, priority: number) {
    const node = new QueueNode(val, priority)
    
    if (this.val.length === 0) {
      this.val.push(node)
    }
    else {
      // 标记节点的优先级是否最低
      let lowest = true
      for (let i = 0; i < this.val.length; i++) {
        if (node.priority < this.val[i].priority) {
          this.val.splice(i, 0, node)
          // 优先级不是最低
          lowest = false
          break
        }
      }
      if (lowest) {
        // 优先级最低，插入到最后
        this.val.push(node)
      }
    }
  }
}
```

:::
