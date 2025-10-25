---
title: 查找算法
icon: search
date: 2025-10-26
description: 查找算法
---

## 线性查找

::: tabs#code

@tab Java

```java
public int linearSearch(int[] arr, int target) {
  for (int i = 0; i < arr.length; i++) {
    if (target == arr[i]) return i;
  }
  return 0;
}
```

:::

## 二分查找

> [!important]
>
> 必须是有序数组。

::: tabs#code

@tab Java

```java
public int binarySearch(int[] arr, int target) {
  int head = 0;
  int tail = arr.length - 1;
  while (head <= tail) {
    int mid = (head + tail) / 2;
    if (target == arr[mid]) return mid;
    else if (target > arr[mid]) head = mid + 1;
    else if (target < arr[mid]) tail = mid - 1;
  }
  return 0;
}
```

:::
