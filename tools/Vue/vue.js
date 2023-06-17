function Vue(options) {
  // Vue 实例上有一个 _data 对象, 访问 Vue 实例实际上都是访问 _data 对象
  this._data = options.data
  
  /* 数据代理 */
  for (let [k, v] of Object.entries(this._data)) {
    Object.defineProperty(this, k, {
      get() {
        return v
      },
      set(value) {
        v = value
      }
    })
  }
  
  // 将 _data 交给 observe 判断是否监听 (一定被监听)
  observe(this._data)
}

// 判断是否监听, 当数据为对象时, 监听它的属性
function observe(data) {
  if (Object.prototype.toString.call(data) !== "[object Object]") return
  
  // 符合条件 (是对象), 创建一个观察者
  new Observer(data)
}

/******************************************* 观察者 *******************************************/
class Observer {
  constructor(data /* 经过判断, data 是对象 */) {
    for (const [k, v] of Object.entries(data)) {
      // 将对象属性 (obj >> prop) 交给 observe 判断是否监听
      observe(v)
      
      // 还需判断当对象属性是数组时, 数组元素是否为对象
      if (Array.isArray(v)) {
        v.forEach(item => {
          // 将数组元素 (obj >> arr >> item) 交给 observe 判断是否监听
          observe(item)
        })
      }
      
      // 当所有判断完成 (data 使用完了), 最后对 data 对象的属性进行数据劫持
      this.defineReactive(data, k, v)
    }
  }
  
  /* 数据劫持 */
  defineReactive(data, key, value) {
    Object.defineProperty(data, key, {
      get() { /* 监听数据的获取 */
        console.log(`${ key } 被访问`)
        return value
      },
      set(newValue) { /* 监听数据的改变 */
        console.log(`${ key } 被修改, 修改后是 ${ newValue }`)
        value = newValue
      }
    })
  }
}


const app = new Vue({
  data: {
    name: "xiaoming",
    age: 18,
    girls: [
      { girlName: "lili", girlAge: 15 },
      { girlName: "lisa", girlAge: 25 },
      { girlName: "timi", girlAge: 23 }
    ]
  }
})

console.log("app", app)
