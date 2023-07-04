// 封装 forEach
Array.prototype.$forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

// 封装 map
Array.prototype.$map = function (callback) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this))
  }
  return newArr
}

// 封装 filter
Array.prototype.$filter = function (callback) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// 封装 reduce
Array.prototype.$reduce = function (callback, initial) {
  for (let i = 0; i < this.length; i++) {
    initial = callback(initial, this[i], i, arr)
  }
  return initial
}
