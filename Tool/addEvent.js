/* 绑定二级事件, 兼容IE8 */
export default function addEvent(element, eventname, callback) {
  element.addEventListener
    ? element.addEventListener(eventname, callback)
    : element.attachEvent("on" + eventname, callback) // IE8
}
