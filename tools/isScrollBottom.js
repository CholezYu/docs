/**
 * Chrome 的滚动条属性属于 body，通过 document.body.scrollTop 来获取
 * 其他浏览器的滚动条属性属于 html，通过 document.documentElement.scrollTop 来获取
 */

// 判断滚动条是否滚动到底
export default function isScrollBottom() {
  return {
    // 判断垂直滚动条是否滚动到底
    x: document.body.scrollHeight - document.body.scrollTop === document.body.clientHeight,
    // 判断水平滚动条是否滚动到底
    y: document.body.scrollWidth - document.body.scrollLeft === document.body.clientWidth
  }
}
