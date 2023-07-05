// 封装 call
Function.prototype.$call = function (thisObj, ...args) {
  thisObj = Object(thisObj || window)
  
  thisObj.fnName = this
  thisObj.fnName(...args)
  delete thisObj.fnName
}

// 封装 apply
Function.prototype.$apply = function (thisObj, arg) {
  thisObj = Object(thisObj || window)
  
  thisObj.fnName = this
  thisObj.fnName(...arg)
  delete thisObj.fnName
}

// 封装 bind
Function.prototype.$bind = function (thisObj) {
  thisObj = Object(thisObj || window)
  
  thisObj.fnName = this
  return function (...args) {
    thisObj.fnName(...args)
    delete thisObj.fnName
  }
}
