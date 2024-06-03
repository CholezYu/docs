---
title: 树
icon: tree
date: 2024-06-03
description: 树
---

## 二叉树

树是一种非线性数据结构。如果一种树中每个节点最多只有两个子节点，那么我们将它称为 “二叉树”。二叉树的每个节点包含节点值、左子节点引用和右子节点引用。

二叉树的常用术语如图所示：

- 根节点：二叉树的顶层节点。

- 叶节点：没有子节点的节点，即度为 0。

- 边：连接两个节点的线段。

- 节点所在的层：根节点所在层为 1，向下递增。

- 节点的度：子节点的数量。

- 节点的深度：根节点到该节点的距离。

- 节点的高度：最远叶节点到该节点的距离。

> [!warning]
>
> 我们将 “深度” 和 “高度” 定义为 “经过的边的数量”，也有些说法是将其定义为 “经过的节点的数量”。在这种情况下，深度和高度都需要加 1。

![二叉树的常用术语](../.vuepress/public/image/binary_tree_terminology.png)

二叉树还有几个比较重要的特性：

- 二叉树第 n 层的最大节点数为：`2^(n - 1)`，例如第 3 层的最大节点数为 4。

- 高度为 m 的二叉树的最大节点总数为：`2^(n + 1) - 1`，例如高度为 2 的二叉树的最大节点总数为 7。

- 对于非空二叉树，如果叶节点（度为 0）数为 $n0$，度为 2 的非叶节点数为 $n2$，则满足关系：$n0$ = $n2$ + 1。

## 二叉树遍历

二叉树常见的遍历方式有前序遍历、中序遍历和后序遍历等，它们都属于**深度优先遍历**。就像是绕着整棵二叉树的外围走一圈，在每个节点都会遇到三个位置，分别对应前序遍历、中序遍历和后序遍历。

![二叉搜索树的前序、中序、后序遍历](../.vuepress/public/image/binary_tree_dfs.png)

深度优先遍历通常基于递归实现。通过代码分析，遍历开始后，先递归访问左子节点，如果左子节点为 null，再访问右子节点，如果右子节点不为 null，继续递归访问其左子节点；否则，执行结束，当前函数出栈。在上一层执行栈中，访问右子节点。

前序遍历、中序遍历和后序遍历的区别在于，它们的访问时机不同：前序遍历的访问时机是在递归处理左子节点之前；中序遍历的访问时机是在递归处理左子节点和访问上一层的右子节点之间，即递归处理左子节点的函数出栈后；后序遍历的访问时机是在递归处理右子节点之后，即递归处理右子节点的函数出栈后。

::: tabs#code

@tab TS

```ts
class Pair<T> {
  key: number
  val: T
  
  constructor(key: number, val: T) {
    this.key = key
    this.val = val
  }
}

class TreeNode<T> {
  pair: Pair<T>
  left: TreeNode<T> | null
  right: TreeNode<T> | null
  
  constructor(pair: Pair<T>) {
    this.pair = pair
    this.left = null
    this.right = null
  }
}

type NodeType = "root" | "left" | "right"

class BinaryTree<T> {
  root: TreeNode<T> | null
  
  constructor(root?: Pair<T>) {
    this.root = root ? new TreeNode(root) : null
  }
  
  /**
   * 前序遍历
   */
  preTraverse(callback: (node: TreeNode<T>, type: NodeType) => void) {
    recursion(this.root, "root")
    
    /**
     * 递归遍历节点
     * @param target - 目标节点
     * @param type - 节点类型（根节点、左子节点、右子节点）
     */
    function recursion(target: TreeNode<T> | null, type: NodeType) {
      if (!target) return
      // 1. 访问目标节点
      callback(target, type)
      // 2. 递归处理左子节点
      recursion(target.left, "left")
      // 3. 递归处理右子节点
      recursion(target.right, "right")
    }
  }
  
  /**
   * 中序遍历
   */
  syncTraverse(callback: (node: TreeNode<T>, type: NodeType) => void) {
    recursion(this.root, "root")
    
    /**
     * 递归遍历节点
     * @param target - 目标节点
     * @param type - 节点类型（根节点、左子节点、右子节点）
     */
    function recursion(target: TreeNode<T> | null, type: NodeType) {
      if (!target) return
      // 1. 递归处理左子节点
      recursion(target.left, "left")
      // 2. 访问目标节点
      callback(target, type)
      // 3. 递归处理右子节点
      recursion(target.right, "right")
    }
  }
  
  /**
   * 后序遍历
   */
  postTraverse(callback: (node: TreeNode<T>, type: NodeType) => void) {
    recursion(this.root, "root")
    
    /**
     * 递归遍历节点
     * @param target - 目标节点
     * @param type - 节点类型（根节点、左子节点、右子节点）
     */
    function recursion(target: TreeNode<T> | null, type: NodeType) {
      if (!target) return
      // 1. 递归处理左子节点
      recursion(target.left, "left")
      // 2. 递归处理右子节点
      recursion(target.right, "right")
      // 3. 访问目标节点
      callback(target, type)
    }
  }
}
```

:::

## 二叉搜索树

二叉搜索树是一种特殊的二叉树，它满足以下条件：

- 对于根节点，左子树中所有节点的值 < 根节点的值 < 右子树中所有节点的值。

- 任意节点的左、右子树也是二叉搜索树，同样满足上述条件。

> [!tip]
>
> 二叉搜索树与**二分查找**的原理相似，查找效率非常高。

::: tabs#code

@tab TS

```ts
class BinarySearchTree<T> extends BinaryTree<T> {
  constructor(root?: Pair<T>) {
    super(root)
  }
  
  /**
   * 插入节点
   * @param pair - 节点的值（键值对）
   */
  insert(pair: Pair<T>) {
    const node = new TreeNode(pair)
    // 根节点为 null，直接插入到根节点
    if (!this.root) {
      this.root = node
      return
    }
    recursion(node, this.root)
    
    /**
     * 递归比较节点
     * @param current - 当前节点
     * @param target - 目标节点
     */
    function recursion(current: TreeNode<T>, target: TreeNode<T>) {
      if (current.pair.key < target.pair.key) { // 目标节点更大，向左子树插入
        // 左子树为 null，直接插入
        if (!target.left) target.left = current
        // 左子树存在节点，继续比较
        else recursion(current, target.left)
      }
      else { // 目标节点小于插入的节点，向右子树插入
        // 右子树为 null，直接插入
        if (!target.right) target.right = current
        // 右子树存在节点，继续比较
        else recursion(current, target.right)
      }
    }
  }
  
  /**
   * 查找节点
   * @param target - 目标节点的 key
   */
  search(target: number) {
    return recursion(this.root, target)
    
    /**
     * 递归查找节点
     * @param current - 当前节点
     * @param target - 目标节点
     */
    function recursion(current: TreeNode<T> | null, target: number) {
      if (!current) return null
      if (current.pair.key > target) return recursion(current.left, target)
      if (current.pair.key < target) return recursion(current.right, target)
      if (current.pair.key === target) return current
    }
    
    /* 循环实现 */
    // let current = this.root
    // while (current) {
    //   if (current.pair.key > target) {
    //     current = current.left
    //     continue
    //   }
    //   if (current.pair.key < target) {
    //     current = current.right
    //     continue
    //   }
    //   if (current.pair.key === target) return current
    // }
    // return null
  }
  
  /**
   * 移除节点
   * @param target - 目标节点的 key
   */
  remove(target: number) {
    let type: "left" | "right" = "left"
    let parent: TreeNode<T> | null = null
    let current = this.root
    
    while (current && target !== current.pair.key) {
      type = target < current.pair.key ? "left" : "right"
      parent = current
      current = parent[type]
    }
    if (!current) return console.warn(`target: ${ target } is not found`)
    /* 找到目标节点 */
    
    // current => both (left & right)
    if (current.left && current.right) {
      // 查找后继节点，并用后继节点替换目标节点的位置
      const successor = getSuccessor(current, parent)
      if (!parent) { // 根节点（没有父节点）
        this.root = successor
      }
      else { // 非根节点
        parent[type] = successor
      }
      return
    }
    
    // current => only left | only right | none
    if (!parent) { // 根节点（没有父节点）
      this.root = current.left || current.right
    }
    else { // 非根节点
      parent[type] = current.left || current.right
    }
    
    /**
     * 查找后继节点
     * @description 也就是找 > 目标节点的下一个节点（右节点的最后一个左子节点）
     * @param target - 目标节点
     * @param parent - 目标节点的父节点
     */
    function getSuccessor(target: TreeNode<T>, parent: TreeNode<T> | null) {
      let successorParent = parent
      let successor = target
      let current = target.right
      
      while (current) {
        successorParent = successor
        successor = current
        current = current.left
      }
      // 将目标节点的左子节点赋值给后继节点的 left 指针
      successor.left = target.left
      // 如果后继节点不是目标节点的右子节点，可能是 target.right.left.left...
      // 也就是隔层替换目标节点
      // 需要改变后继节点的父节点的 left 指针和后继节点的 right 指针
      if (successor !== target.right) {
        // 将后继节点的右子节点（可能为 null，但不影响）赋值给它的父节点的 left 指针
        // 不需要考虑后继节点的左子节点，因为后继节点是最后一个左子节点
        successorParent!.left = successor.right
        // 将目标节点的右子节点赋值给后继节点的 right 指针
        successor.right = target.right
      }
      return successor
    }
  }
  
  /**
   * 最大值
   * @description 一直向右查找子节点
   */
  get max() {
    if (!this.root) return null
    let node = this.root
    while (node.right) {
      node = node.right
    }
    return node.pair
  }
  
  /**
   * 最小值
   * @description 一直向左查找子节点
   */
  get min() {
    if (!this.root) return null
    let node = this.root
    while (node.left) {
      node = node.left
    }
    return node.pair
  }
}
```

:::

## 平衡树

在理想情况下，二叉搜索树是平衡的，它的 **查找、插入、删除** 操作的效率是 $O$(log$n$)。如果插入连续的数据，会导致它们分布不均匀，最终可能会变成一个链表，那么它的查找效率就变成了 $O$($n$​)。我们将这种分布不均匀的树称为**非平衡树**。

常见的**平衡树**有：

- AVL 树。比较早期的方案，查找效率是 $O$(log$n$)，但是插入和删除效率不高。

- 红黑树。查找效率同样是 $O$(log$n$)，并且插入和删除效率高于 AVL 树，应用更加广泛。

## 红黑树
