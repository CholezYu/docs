/* 获取元素样式, 兼容IE8 */
function getStyle(element, attr) {
  return window.getComputedStyle
    ? getComputedStyle(element, null)[attr]
    : element.currentStyle[attr] // IE8
}

/* 判断元素中是否含有指定的 class 属性 */
function hasClass(element, classname) {
  var reg = new RegExp("\\b" + classname + "\\b")
  return reg.test(element.className)
}

/* 给元素添加 class 属性 */
function addClass(element, classname) {
  if (!hasClass(element, classname)) {
    element.className += " " + classname
  }
}

/* 移除元素中 class 属性 */
function removeClass(element, classname) {
  var reg = new RegExp(" " + "\\b" + classname + "\\b")
  element.className = element.className.replace(reg, "")
}

/* 切换元素的 class 属性 */
function toggleClass(element, classname) {
  hasClass(element, classname)
    ? removeClass(element, classname)
    : addClass(element, classname)
}

/* 显示菜单栏折叠动画 */
function toggleMenu(element, classname) {
  // 在切换class属性值之前，获取元素的height值
  var begin = element.offsetHeight
  // 切换obj的显示
  toggleClass(element, classname)
  // 切换class属性值之后，获取元素的height
  var end = element.offsetHeight
  // 动画效果就是将高度从begin向end过渡
  // 将元素的高度重置为begin，否则在切换class属性值之后height值将变为end
  element.style.height = begin + "px"
  // 执行动画，从begin向end过渡
  move(element, "height", end, 10, function () {
    // 动画执行完毕，内联样式没有意义
    // 删除内联样式
    element.style.height = ""
  })
}

/* 二级事件绑定, 兼容IE8 */
function addEvent(element, eventname, callback) {
  element.addEventListener
    ? element.addEventListener(eventname, callback)
    : element.attachEvent("on" + eventname, callback) // IE8
}
