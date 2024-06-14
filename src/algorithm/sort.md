---
title: 排序算法
icon: sort
date: 2024-05-24
description: 排序算法
---

| 排序方式 | 时间复杂度（平均） | 时间复杂度（最坏） | 时间复杂度（最好） | 空间复杂度   | 稳定性 |
| -------- | ------------------ | ------------------ | ------------------ | ------------ | ------ |
| 插入排序 | $O(n^2)$           | $O(n^2)$           | $O(n)$             | $O(1)$       | 稳定   |
| 希尔排序 | $O(n^{1.3})$       | $O(n^2)$           | $O(n)$             | $O(1)$       | 不稳定 |
| 选择排序 | $O(n^2)$           | $O(n^2)$           | $O(n^2)$           | $O(1)$       | 不稳定 |
| 堆排序   | $O(nlog_2n)$       | $O(nlog_2n)$       | $O(nlog_2n)$       | $O(1)$       | 不稳定 |
| 冒泡排序 | $O(n^2)$           | $O(n^2)$           | $O(n)$             | $O(1)$       | 稳定   |
| 快速排序 | $O(nlog_2n)$       | $O(n^2)$           | $O(nlog_2n)$       | $O(nlog_2n)$ | 不稳定 |
| 归并排序 | $O(nlog_2n)$       | $O(nlog_2n)$       | $O(nlog_2n)$       | $O(n)$       | 稳定   |
|          |                    |                    |                    |              |        |
| 计数排序 | $O(n+k)$           | $O(n+k)$           | $O(n+k)$           | $O(n+k)$     | 稳定   |
| 桶排序   | $O(n+k)$           | $O(n^2)$           | $O(n)$             | $O(n+k)$     | 稳定   |
| 基数排序 | $O(n*k)$           | $O(n*k)$           | $O(n*k)$           | $O(n+k)$     | 稳定   |

## 冒泡排序

::: tabs#code

@tab TS

```ts
ArrayList.prototype.bubbleSort = function () {
  let flag = true
  for (let i = 0; i < this.val.length - 1; i++) {
    for (let j = 1; j < this.val.length - i; j++) {
      if (this.val[j - 1] > this.val[j]) {
        [this.val[j - 1], this.val[j]] = [this.val[j], this.val[j - 1]]
        flag = false
      }
    }
    if (flag) break
  }
}
```

@tab Java

```java
int[] arr = { 34, 54, 3, 2, 84, 65, 7, 19, 5, 76, 67 };

for (int i = 0; i < arr.length - 1; i++) {
  boolean flag = true;
  
  for (int j = 1; j < arr.length - i; j++) {
    if (arr[j - 1] > arr[j]) {
      int temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      
      flag = false;
    }
  }
  
  if (flag) {
    break;
  }
}
```

:::

## 选择排序



## 插入排序



## 快速排序



## 希尔排序

