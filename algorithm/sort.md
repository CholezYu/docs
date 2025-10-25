---
title: 排序算法
icon: sort
date: 2025-10-26
description: 排序算法
---

## 冒泡排序

::: tabs#code

@tab TS

```ts
function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = true
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        flag = false
      }
    }
    if (flag) break
  }
}
```

@tab Java

```java
static void bubbleSort(int[] arr) {
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
    if (flag) break;
  }
}
```

:::

## 选择排序



## 插入排序



## 快速排序



## 希尔排序

