// 拖拽绘制矩形
export default function dragFrame(element) {
  document.onmousedown = function (event) {
    const originX = event.clientX
    const originY = event.clientY
    
    document.onmousemove = function (event) {
      element.style = `
      display: block;
      width: ${ Math.abs(event.clientX - originX) }px;
      height: ${ Math.abs(event.clientY - originY) }px;
      left: ${ event.clientX >= originX ? originX : event.clientX }px;
      top: ${ event.clientY >= originY ? originY : event.clientY }px;
    `
      
      document.onmouseup = function () {
        element.style = `
        display: none;
        width: 0;
        height: 0;
        left: 0;
        top: 0;
      `
        
        document.onmousemove = null
      }
    }
  }
}
