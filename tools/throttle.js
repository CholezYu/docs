/**
 * 节流
 *   减少事件的触发频率
 *   未使用节流：鼠标移动或连续点击时，会频繁触发事件
 *   使用节流：开启定时器，在计时结束后才能触发事件
 */

/* 时间戳实现 */
export default function throttle(callback, delay) {
  
  let startTime = new Date().getTime()
  
  return function () {
    let endTime = new Date().getTime()
    
    if (endTime - startTime > delay /* 保护时间 */) {
      callback()
      
      startTime = endTime
    }
  }
}

/* 定时器实现 */
/*function throttle(callback, delay) {
  let timer = null
  
  return function () {
    if (!timer) {
      callback()
      
      timer = setTimeout(() => {
        timer = null
      }, delay /!* 保护时间 *!/)
    }
  }
}*/
