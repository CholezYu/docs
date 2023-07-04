import { toggleClass } from "./handleClass"
import move from "./move"

/* 显示菜单栏折叠动画 */
export default function toggleMenu(element, classname) {
  // 在切换class属性值之前，获取元素的height值
  let begin = element.offsetHeight
  // 切换obj的显示
  toggleClass(element, classname)
  // 切换class属性值之后，获取元素的height
  let end = element.offsetHeight
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
