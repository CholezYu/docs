// 完成简单的移动动画效果
export default function move(element, direction /* 方向 */, target /* 目标距离 */, callback) {
  let timer = setInterval(() => {
    let distance = parseInt(getComputedStyle(element)[direction])
    
    let speed = target > distance ? 1 : -1 // 正向 or 反向 ?
    
    if (distance === target) {
      clearInterval(timer)
      
      callback && callback()
    }
    else {
      distance += 5 * speed
      element.style[direction] = distance + "px"
    }
  }, 5)
}
