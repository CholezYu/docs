// 冒泡排序
Array.prototype.$bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 1; j < this.length - i; j++) {
      if (this[j - 1] > this[j]) {
        ;[this[j - 1], this[j]] = [this[j], this[j - 1]]
      }
    }
  }
}

// 选择排序
Array.prototype.$selectSort = function () {
  let minIndex = null
  for (let i = 0; i < this.length - 1; i++) {
    minIndex = i
    for (let j = minIndex + 1; j < this.length; j++) {
      if (this[j] < this[minIndex]) {
        minIndex = j
      }
    }
    ;[this[minIndex], this[i]] = [this[i], this[minIndex]]
  }
}
