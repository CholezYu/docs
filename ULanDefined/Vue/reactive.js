/* 数据响应式原理 */

let nowWatcher = null

function Vue(options) {
  // Vue 实例上有一个 _data 对象, 访问 Vue 实例实际上就是访问 _data 对象
  this._data = options.data
  
  /* 数据代理 */
  for (const key in this._data) {
    Object.defineProperty(this, key, {
      get() {
        return this._data[key]
      },
      set(value) {
        this._data[key] = value
      }
    })
  }
  
  // 将 _data 交给 observe 判断是否监听 (一定被监听)
  observe(this._data)
}

/* 判断是否监听, 当数据为对象时, 监听它的属性 */
function observe(data) {
  if (Object.prototype.toString.call(data) !== "[object Object]") return
  
  // 符合条件 (是对象), 创建一个发布者
  new Observer(data)
}

/******************************************* 发布者 *******************************************/
class Observer {
  constructor(data /* 经过判断, data 是对象 */) {
    for (const key in data) {
      // 将对象属性 (obj >> prop) 交给 observe 判断是否监听
      observe(data[key])
      
      // 还需判断当对象属性是数组时, 数组元素是否为对象
      if (Array.isArray(data[key])) {
        data[key].forEach(item => {
          // 将数组元素 (obj >> arr >> item) 交给 observe 判断是否监听
          observe(item)
        })
      }
      
      // 当所有判断完成 (data 使用完了), 最后对 data 对象的属性进行数据劫持
      this.defineReactive(data, key, data[key])
    }
  }
  
  /* 数据劫持 */
  defineReactive(data, key, value) {
    // 给每一个被劫持的数据都创建一个订阅中心, 用来收集当前数据的依赖项和通知所有依赖项进行更新
    const dep = new Dep()
    
    Object.defineProperty(data, key, {
      get() { /* 监听数据的获取 */
        console.log(`${ key } 被访问`)
        
        //因为获取数据的可能是watcher 也可能不是watcher,所以需要判断,只有watcher获取数据才会收集依赖
        if (nowWatcher) {
          // 调用订阅中心的 depend 方法, 收集订阅者
          dep.depend(nowWatcher)
        }
        
        return value
      },
      set(newValue) { /* 监听数据的改变 */
        if (newValue === value) return
        
        console.log(`${ key } 被修改, 修改后是 ${ newValue }`)
        
        value = newValue
        
        // 调用订阅中心的 notify 方法, 通知所有的订阅者更新
        dep.notify()
      }
    })
  }
}

/******************************************* 订阅中心 *******************************************/
class Dep {
  constructor() {
    // 定义一个数据, 专门用来收集依赖
    this.subs = []
  }
  
  // 订阅中心任务1: 收集依赖(订阅者)
  depend(Watcher) {
    console.log("收集依赖(订阅者)")
    this.subs.push(Watcher)
  }
  
  // 订阅中心任务2: 通知所有的依赖更新
  notify() {
    console.log("通知所有的依赖(订阅者)更新")
    // 遍历当前订阅中心的 subs 得到每一个 watcher, 调用 watcher 自身的 update 方法进行更新
    this.subs.forEach(watcher => {
      watcher.update()
    })
  }
}


/******************************************* 订阅者 *******************************************/
class Watcher {
  constructor(data, key) {
    this.data = data
    this.key = key
    
    // 马上就会获取数据了, 我们把当前的 watcher 保存在全局变量上, 方便在发布者的数据劫持中收集当前的 watcher
    nowWatcher = this
    
    // 调用 get 方法读取数据
    this.get()
    
    // 获取完数据就把 nowWatcher 保存的自己清除掉
    nowWatcher = null
  }
  
  // watcher功能1: 获取数据
  get() {
    console.log("watcher 中获取数据的 get 方法被调用")
    return this.data[this.key]
  }
  
  // watcher功能2: 重新获取数据
  update() {
    console.log("watcher 调用 update 方法重新获取最新的数据")
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

// 实例化一个 watcher (模拟组件内需要数据的 watcher)
document.onclick = function () {
  new Watcher(app, "name")
}
