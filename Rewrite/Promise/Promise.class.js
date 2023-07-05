/* 自定义 Promise */

const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"

class Promise {
  constructor(excutor) {
    const self = this  // 将当前 Promise 对象保存起来
    
    self.data = undefined
    self.status = PENDING
    self.callbacks = []
    
    
    function resolve(value) {
      if (self.status !== PENDING) return
      
      self.data = value
      self.status = RESOLVED
      
      if (self.callbacks.length > 0) { // 如果有待执行的 callback，立即异步执行回调函数 onResolved
        setTimeout(() => {
          // 将回调数组加入异步执行队列，并执行队列中所有成功的回调
          self.callbacks.forEach(callback => {
            callback.onResolved(value)
          })
        })
      }
    }
    
    
    function reject(reason) {
      if (self.status !== PENDING) return
      
      self.data = reason
      self.status = REJECTED
      
      if (self.callbacks.length > 0) { // 如果有待执行的 callback，立即异步执行回调函数 onRejected
        setTimeout(() => {
          // 将回调数组加入异步执行队列，并执行队列中所有失败的回调
          self.callbacks.forEach(callback => {
            callback.onRejected(reason)
          })
        })
      }
    }
    
    try {
      // 立即同步执行 excutor
      excutor(resolve, reject)
    } catch (error) {
      // 如果执行器抛出异常，Promise 状态变为 rejected
      reject(error)
    }
  }
  
  
  then(onResolved, onRejected) {
    const self = this
    
    /* 指定回调函数的默认值(必须是函数) */
    onResolved = typeof onResolved === "function" ? onResolved : value => value
    onRejected = typeof onRejected === "function" ? onRejected : reason => throw reason
    
    return new Promise((resolve, reject) => {
      function handle(callback) {
        /* onResolved 或 onRejected 方法的返回结果 */
        try {
          const result = callback(self.data)
          
          if (result instanceof Promise) {
            // 1. 返回 Promise，该 Promise 的结果就会成为 then() 返回的新 Promise 的结果
            result.then(resolve, reject)
          }
          else {
            // 2. 返回非 Promise，then() 返回的新 Promise 状态变为 resolved，value 为返回值(result)
            resolve(result)
          }
        } catch (error) {
          // 3. 抛出异常，then() 返回的新 Promise 状态变为 rejected，reason 为抛出的异常(error)
          reject(error)
        }
      }
      
      if (self.status === RESOLVED) {
        // 立即异步执行成功的回调函数
        setTimeout(() => {
          handle(onResolved)
        })
      }
      else if (self.status === REJECTED) {
        // 立即异步执行失败的回调函数
        setTimeout(() => {
          handle(onRejected)
        })
      }
      else if (self.status === PENDING) {
        // 将成功和失败的回调函数保存callbacks容器中缓存起来
        self.callbacks.push({
          onResolved(value) {
            handle(onResolved)
          },
          onRejected(reason) {
            handle(onRejected)
          }
        })
      }
    })
  }
  
  
  catch(onRejected) {
    return this.then(null, onRejected)
  }
  
  
  static resolve = function (value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        // value 是 Promise，返回的 Promise 结果就会成为 value(Promise) 的结果
        value.then(resolve, reject)
      }
      else {
        // value 不是 Promise，返回的是成功的 Promise
        resolve(value)
      }
    })
  }
  
  
  static reject = function (reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
  
  
  static all = function (promises) {
    const values = new Array(promises.length) // 保存所有成功的 value
    let resolvedCount = 0 // 保存成功的 Promise 的数量
    
    return new Promise((resolve, reject) => {
      promises.forEach((item, index) => {
        // Promise.resolve(item) 将可能出现的非 Promise 的 item 封装为 Promise
        Promise.resolve(item).then(
          value => {
            resolvedCount++
            values[index] = value // 将成功的 value 保存到数组 values 中，且与 promises 中各 Promise 的顺序相同
            
            if (resolvedCount === promises.length) {
              // 如果全部成功，将 return 的 Promise 变为成功
              resolve(values)
            }
          },
          reason => {
            // 只要有一个 Promise 失败，return 的新 Promise 就会失败
            reject(reason)
          }
        )
      })
    })
  }
  
  
  static race = function (promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(item => {
        Promise.resolve(item).then( // Promise.resolve(item) 将可能出现的非 Promise 的 item 封装为 Promise
          value => {
            resolve(value)
          },
          reason => {
            reject(reason)
          }
        )
      })
    })
  }
  
  /**
   * Promise 函数对象的 resolveDelay 方法
   *   value: 成功的值
   *   time: 延迟时间
   *   延迟返回一个成功的 Promise 对象
   */
  static resolveDelay = function (value, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value instanceof Promise) {
          // value 是 Promise，返回的 Promise 结果就会成为 value(Promise) 的结果
          value.then(resolve, reject)
        }
        else {
          // value 不是 Promise，返回的是成功的 Promise
          resolve(value)
        }
      }, time)
    })
  }
  
  /**
   * Promise 函数对象的 rejectDelay 方法
   *   reason: 失败的值
   *   time: 延迟时间
   *   延迟返回一个失败的 Promise 对象
   */
  static rejectDelay = function (reason, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(reason)
      }, time)
    })
  }
}
