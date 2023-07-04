// 递归深拷贝
export default function deepCopy(list) {
  // array or object ?
  let newList = Array.isArray(list) ? [] : {}
  for (let key in list) {
    // { key: {} } or { key: [] } or [[], []] or [{}, {}] ?
    newList[key] = typeof list[key] !== "object" ? list[key] : $deepCopy(list[key])
  }
  
  return newList
}
