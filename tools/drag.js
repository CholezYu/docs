// 拖拽
export default function drag(element) {
  element.onmousedown = function (event) {
    const box_originX = this.offsetLeft // 盒子初始 X
    const box_originY = this.offsetTop // 盒子初始 Y
    
    const mouse_originX = event.clientX // 鼠标初始 X
    const mouse_originY = event.clientY // 鼠标初始 Y
    
    this.onmousemove = function (event) {
      const distanceX = event.clientX - mouse_originX // 鼠标移动的 X
      const distanceY = event.clientY - mouse_originY // 鼠标移动的 Y
      
      const targetX = box_originX + distanceX // 盒子目标 X
      const targetY = box_originY + distanceY // 盒子目标 Y
      
      element.style.left = targetX + "px"
      element.style.top = targetY + "px"
    }
    
    this.onmouseup = function () {
      this.onmousemove = null
    }
  }
}
