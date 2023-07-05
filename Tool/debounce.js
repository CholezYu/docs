/**
 * 防抖
 *   减少请求次数, 节约请求资源
 *   未使用防抖: 在输入框中连续输入时, 每输入一个字符就会发送一次请求获取搜索列表
 *   使用防抖: 开启定时器, 在计时结束后没有输入再发送请求, 若在计时期间输入则重新计时
 */
export default function debounce(callback, delay) {
  let timer = null
  
  return function () {
    if (!timer) {
      callback()
    }
    
    clearTimeout(timer)
    
    timer = setTimeout(() => {
      timer = null
    }, delay /* 保护时间 */)
  }
}
