/* 获取元素样式, 兼容IE8 */
export default function getStyle(element, attr) {
  return window.getComputedStyle
    ? getComputedStyle(element, null)[attr]
    : element.currentStyle[attr] // IE8
}
