/* 判断元素中是否含有某个 class 属性 */
export function hasClass(element, classname) {
  let reg = new RegExp("\\b" + classname + "\\b")
  return reg.test(element.className)
}

/* 给元素添加 class 属性 */
export function addClass(element, classname) {
  if (!hasClass(element, classname)) {
    element.className += " " + classname
  }
}

/* 移除元素中 class 属性 */
export function removeClass(element, classname) {
  let reg = new RegExp(" " + "\\b" + classname + "\\b")
  element.className = element.className.replace(reg, "")
}

/* 切换元素的 class 属性 */
export function toggleClass(element, classname) {
  hasClass(element, classname)
    ? removeClass(element, classname)
    : addClass(element, classname)
}
