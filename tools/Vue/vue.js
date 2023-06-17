function Vue(options) {
  this._data = options.data
  
  /* 数据代理 */
  for (let [k, v] of Object.entries(this._data)) {
    Object.defineProperty(this, k, {
      get() {
        console.log(`${ k } 被访问`)
        return v
      },
      set(value) {
        v = value
        console.log(`${ k } 被修改, 修改后是 ${ v }`)
      }
    })
  }
  
  observe(this._data)
}

function observe(data) {
  if (Object.prototype.toString.call(data) !== "[object Object]") return
  
  new Observer(data)
}

class Observer {
  constructor() {
  
  }
}


const app = new Vue({
  data: {
    name: "xiaoming",
    age: 18
  }
})

console.log("app", app)
