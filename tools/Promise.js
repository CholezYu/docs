/* 自定义 Promise */

const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"

/**
 * Promise 构造函数
 *   excutor: 执行器函数，同步执行
 */
function Promise(excutor) {
  // 将当前 Promise 对象保存起来
  const self = this
  self.status = PENDING // Promise 的状态
  self.data = undefined // Promise 的结果值
  self.callbacks = [] // 回调数组 { onResolved() {}, onRejected() {} }
  
  
  function resolve(value) {
    // 如果当前 Promise 状态不是 pending，直接结束
    if (self.status !== PENDING) return
    
    self.data = value
    self.status = RESOLVED
    // 如果有待执行的 callback，立即异步执行回调函数 onResolved
    if (self.callbacks.length > 0) {
      setTimeout(() => {
        // 将回调数组加入异步执行队列，并执行队列中所有成功的回调
        self.callbacks.forEach((item) => {
          item.onResolved(value)
        })
      })
    }
  }
  
  
  function reject(reason) {
    // 如果当前 Promise 状态不是 pending，直接结束
    if (self.status !== PENDING) return
    
    self.data = reason
    self.status = REJECTED
    // 如果有待执行的 callback，立即异步执行回调函数 onRejected
    if (self.callbacks.length > 0) {
      setTimeout(() => {
        // 将回调数组加入异步执行队列，并执行队列中所有失败的回调
        self.callbacks.forEach((item) => {
          item.onRejected(reason)
        })
      })
    }
  }
  
  // 立即同步执行 excutor
  try {
    excutor(resolve, reject)
  } catch (error) {
    // 如果执行器抛出异常，Promise 状态变为 rejected
    reject(error)
  }
}


Promise.prototype.then = function (onResolved, onRejected) {
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
          /**
           * result.then(
           *     value => resolve(value),  // 当 result 成功时，使 return 的 Promise 也成功
           *     reason => reject(reason)  // 当 result 失败时，使 return 的 Promise 也失败
           * )
           */
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
        handle(onResolved) // onResolved(self.data)
      })
    }
    else if (self.status === REJECTED) {
      // 立即异步执行失败的回调函数
      setTimeout(() => {
        handle(onRejected)
      })
    }
    else if (self.status === PENDING) {
      // 将成功与失败的回调函数封装成对象，添加到回调数组中
      self.callbacks.push({
        onResolved() {
          handle(onResolved)
        },
        onRejected() {
          handle(onRejected)
        }
      })
    }
  })
}


Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}


Promise.resolve = function (value) {
  /* 返回成功或失败的 Promise */
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      // value 是 Promise，返回的 Promise 结果就会成为 value(Promise) 的结果
      value.then(resolve, reject)
      /**
       * value.then(
       *   value => resolve(value),  // 当 result 成功时，使 return 的 Promise 也成功
       *   reason => reject(reason)  // 当 result 失败时，使 return 的 Promise 也失败
       * )
       */
    }
    else {
      // value 不是 Promise，返回的是成功的 Promise
      resolve(value)
    }
  })
}


Promise.reject = function (reason) {
  /* 返回失败的 Promise */
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}


Promise.all = function (promises) {
  const values = new Array(promises.length) // 保存所有成功的 value
  let resolvedCount = 0 // 保存成功的 Promise 的数量
  
  /* 返回一个新的 Promise */
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      // Promise.resolve(item) 将可能出现的非 Promise 的 item 封装为 Promise
      Promise.resolve(item).then(
        value => {
          resolvedCount++
          // 将成功的 value 保存到数组 values 中，且与 promises 中各 Promise 的顺序相同
          values[index] = value
          // 如果全部成功，将 return 的 Promise 变为成功
          if (resolvedCount === promises.length) {
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


Promise.race = function (promises) {
  /* 返回一个新的 Promise */
  return new Promise((resolve, reject) => {
    promises.forEach(item => {
      // Promise.resolve(item) 将可能出现的非 Promise 的 item 封装为 Promise
      Promise.resolve(item).then(
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
Promise.resolveDelay = function (value, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value instanceof Promise) {
        // value 是 Promise，返回的 Promise 结果就会成为 value(Promise) 的结果
        value.then(resolve, reject)
        /**
         * value.then(
         *   value => resolve(value),  // 当 result 成功时，使 return 的 Promise 也成功
         *   reason => reject(reason)  // 当 result 失败时，使 return 的 Promise 也失败
         * )
         */
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
Promise.rejectDelay = function (reason, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(reason)
    }, time)
  })
}
