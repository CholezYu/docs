import addEvent from "./addEvent"
import ajax from "./ajax"
import debounce from "./debounce"
import deepCopy from "./deepCopy"
import drag from "./drag"
import dragFrame from "./dragFrame"
import getStyle from "./getStyle"
import { hasClass, addClass, removeClass, toggleClass } from "./handleClass"
import isScrollBottom from "./isScrollBottom"
import move from "./move"
import throttle from "./throttle"
import toggleMenu from "./toggleMenu"
import { unRepeatByObjKey, unRepeatByIndexOf, unRepeatBySet } from "./unRepeat"

export default {
  addEvent, // 绑定二级事件, 兼容 IE8
  ajax, // 通过 xhr 发送 Ajax 请求, 支持 get 和 post 请求
  debounce, // 防抖
  deepCopy, // 递归深拷贝
  drag, // 拖拽
  dragFrame, // 拖拽绘制矩形
  getStyle, // 获取元素样式, 兼容 IE8
  handleClass: {
    hasClass, // 判断元素中是否含有某个 class 属性
    addClass, // 给元素添加 class 属性
    removeClass, // 移除元素中 class 属性
    toggleClass // 切换元素的 class 属性
  },
  isScrollBottom, // 判断滚动条是否滚动到底 (x, y)
  move, // 完成简单的移动动画效果
  throttle, // 节流
  toggleMenu, // 显示菜单栏折叠动画
  unRepeatByObjKey, // 利用对象键名不重复特性去重
  unRepeatByIndexOf, // 利用 indexOf 判断去重
  unRepeatBySet // 通过 set 去重
}
