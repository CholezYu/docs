// 冒泡排序
export function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
  }
}

// 选择排序
export function selectSort(arr) {
  let minIndex = null
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i
    for (let j = minIndex + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    ;[arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
}
