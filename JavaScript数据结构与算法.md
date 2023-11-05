# 数据结构与算法

## 栈 Stack

栈是一种受限的线性结构。

后进先出（LIFO，Last In First Out）。栈顶进，栈顶出。

```js
function Stack() { 
  this.items = []
}
```

### stack.push

向栈顶添加元素

```js
Stack.prototype.push = function (item) {
  this.items.push(item)
}
```

### stack.pop

移除栈顶的元素

```js
Stack.prototype.pop = function () {
  return this.items.pop()
}
```

### stack.peek

返回栈顶的元素

```js
Stack.prototype.peek = function () {
  return this.items[this.items.length - 1]
}
```

### stack.isEmpty

判断栈是否为空

```js
Stack.prototype.isEmpty = function () {
  return this.items.length === 0
}
```

### stack.size

返回栈的元素个数

```js
Stack.prototype.size = function () {
  return this.items.length
}
```

### stack.toString

将栈转为字符串

```js
Stack.prototype.toString = function () {
  return this.items.reduce((prev, item) => prev + item + " ", "")
}
```

## 队列 Queue

队列是一种受限的线性结构。

先进先出（FIFO，First In First Out）。后端进，前端出。

```js
function Queue() {
  this.items = []
}
```

### queue.enqueue

向队列尾部插入元素

```js
Queue.prototype.enqueue = function (item) {
  this.items.push(item)
}
```

### queue.dequeue

移除队列的第一个元素

```js
Queue.prototype.dequeue = function () {
  return this.items.shift()
}
```

### quque.front

返回队列的第一个元素

```js
Queue.prototype.front = function () {
  return this.items[0]
}
```

### queue.isEmpty

判断队列是否为空

```js
Queue.prototype.isEmpty = function () {
  return this.items.length === 0
}
```

### queue.size

返回队列的元素个数

```js
Queue.prototype.size = function () {
  return this.items.length
}
```

### queue.toString

将队列转为字符串

```js
Queue.prototype.toString = function () {
  return this.items.reduce((prev, item) => prev + item + " ", "")
}
```

## 优先级队列

优先级队列的元素具有优先级。

```js
function Queue() {
  this.items = []
  
  function QueueItem(item, priority) {
    this.item = item
    this.priority = priority
  }
}
```

### queue.enqueue

在插入操作时，需要比较元素的优先级，而不是先进先出。其他操作与普通队列相同。

```js
Queue.prototype.enqueue = function (item, priority) {
  const queueItem = new QueueItem(item, priority)
  
  if (this.isEmpty()) {
    this.items.push(queueItem)
  }
  else {
    // 标记节点的优先级是否最低
    let lowest = true
    
    for (let i = 0; i < this.items.length; i++) {
      if (queueItem.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueItem)
        // 优先级不是最低
        lowest = false
        break
      }
    }
    
    if (lowest) {
      // 优先级最低，插入到最后
      this.items.push(queueItem)
    }
  }
}
```

## 链表 Linked List

链表在插入和删除数据时，比数组效率高；在访问数据时，比数组效率低，因为链表需要从头开始访问。

```js
function LinkedList() {
  this.head = null
  this.length = 0
  
  function Node(data) {
    this.data = data
    this.next = null
  }
}
```

### link.append

向链表尾部添加节点

```js
LinkedList.prototype.append = function (data) {
  const node = new Node(data)
  
  if (this.length === 0) {
    this.head = node
  }
  else {
    let current = this.head
    
    while (current.next) {
      current = current.next
    }
    
    current.next = node
  }
  
  this.length += 1
}
```

### link.insert

向链表指定位置插入节点

```js
LinkedList.prototype.insert = function (position, data) {
  if (position < 0 || position > this.length) return false
  
  const node = new Node(data)
  
  if (position === 0) {
    node.next = this.head
    this.head = node
  }
  else {
    let current = this.head
    let previous = null
    let index = 0
    
    while (index < position) {
      previous = current
      current = current.next
      index += 1
    }
    
    previous.next = node
    node.next = current
  }

  this.length += 1
}
```

### link.indexOf

查找对应节点数据的索引

```js
LinkedList.prototype.indexOf = function (data) {
  let current = this.head
  let index = 0
  
  while (current) {
    if (current.data === data) return index
    
    current = current.next
    index += 1
  }
  
  return -1
}
```

### link.get

返回对应索引的节点数据

```js
LinkedList.prototype.get = function (position) {
  if (position < 0 || position >= this.length) return null
  
  let current = this.head
  let index = 0
  
  while (index < position) {
    current = current.next
    index += 1
  }
  
  return current.data
}
```

### link.update

修改对应索引的节点数据

```js
LinkedList.prototype.update = function (position, data) {
  if (position < 0 || position >= this.length) return
  
  let current = this.head
  let index = 0
  
  while (index < position) {
    current = current.next
    index += 1					
  }
  
  current.data = data
}
```

### link.removeAt

移除对应索引的节点

```js
LinkedList.prototype.removeAt = function (position) {
  if (position < 0 || position >= this.length) return
  
  let current = this.head
  let previous = null
  let index = 0
  
  if (position === 0) {
    this.head = current.next
    current = null
  }
  else {
    while (index < position) {
      previous = current
      current = current.next
      index += 1
    }
    
    previous.next = current.next
    current = null
  }
  
  this.length -= 1
}
```

### link.remove

移除链表中的某个节点

```js
LinkedList.prototype.remove = function (data) {
  const position = this.indexOf(data)
  
  this.removeAt(position)
}
```

### link.isEmpty

判断链表是否为空

```js
LinkedList.prototype.isEmpty = function () {
  return this.length === 0
}
```

### link.size

返回链表的节点个数

```js
LinkedList.prototype.size = function () {
  return this.length
}
```

### link.toString

将链表转为字符串

```js
LinkedList.prototype.toString = function () {
  let current = this.head
  let result = current.data
  
  while (current.next) {
    current = current.next
    result += " " + current.data
  }
  
  return result
}
```

## 双向链表

相比于单向链表，双向链表相连的过程是双向的。既可以从头部遍历到尾部，也可以从尾部遍历到头部。

```js
function LinkedList() {
  this.head = null
  this.tail = null
  this.length = 0
  
  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}
```

### link.append

向链表尾部添加节点

```js
LinkedList.prototype.append = function (data) {
  const node = new Node(data)
  
  if (this.length === 0) {
    this.head = node
    this.tail = node
  }
  else {
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }
  
  this.length += 1
}
```

### link.insert

向链表指定位置插入节点

### link.indexOf

查找对应节点数据的索引

### link.get

返回对应索引的节点数据

### link.update

修改对应索引的节点数据

### link.removeAt

移除对应索引的节点

### link.remove

移除链表中的某个节点

### link.isEmpty

判断链表是否为空

### link.size

返回链表的节点个数

### link.forwardToString

将链表转为字符串（正向遍历链表）

```js
LinkedList.prototype.forwardToString = function () {
  let current = this.head
  let result = ""
  
  while (current) {
    result += current.data + " "
    current = current.next
  }
  
  return result
}
```

### link.reverseToString

将链表转为字符串（反向遍历链表）

```js
LinkedList.prototype.reverseToString = function () {
  let current = this.tail
  let result = ""
  
  while (current) {
    result += current.data + " "
    current = current.prev
  }
  
  return result
}
```

## 哈希表 Hash Table

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



## 排序搜索

### 简单排序



### 高级排序

