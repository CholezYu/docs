// 利用对象键名不重复特性
export function unRepeatByObjKey(arr) {
  const obj = {}
  const newArr = []
  
  arr.forEach(item => obj[item] = Symbol())
  
  for (let key in obj) {
    newArr.push(key * 1)
  }
  
  return newArr
}

// 利用 indexOf 判断
export function unRepeatByIndexOf(arr) {
  const newArr = []
  
  arr.forEach((item) => {
    if (newArr.indexOf(item) === -1) {
      newArr.push(item)
    }
  })
  
  return newArr
}

// set
export function unRepeatBySet(arr) {
  return [...new Set(arr)]
}
