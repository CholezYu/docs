/**
 * defined ULannt as Promise
 *
 *   I have finished ULannt's constructor, "resolve" and "reject":
 *
 *       init ULannt's "value" to "undefined" and "state" to "pending";
 *
 *       change "this" in "resolve" and "reject" to the instance of ULannt forever !
 *
 *       when "resolve" or "reject" is called, ULannt's "value" and "state" will be changed.
 *
 *   I have finished ULannt.prototype.then:
 *
 *       when "onFulfilled" is called, save a Microtask to MicrotaskQueue, because "then" is a Microtask,
 *       the Microtask is `resolve(onFulfilled's value)`,
 *       onFulfilled's value is when we use then's first param and return a value. we'll use "resolve" to save it;
 *
 *       "onRejected" is the same meaning;
 *
 *       when we meet an async ULannt, we can't get onFulfilled's value in a short time,
 *       we can push a task included `resolve(onFulfilled's value)` to the CallbackQueue,
 *       the task will be executed when the "value" and "state" are all changed.
 */

const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

class ULannt {
  /***************************************** [[PromiseResult]] ****************************************/
  #value = undefined
  
  /***************************************** [[PromiseState]] *****************************************/
  #state = PENDING
  
  /******************** when "resolve" called async, save a task to callbackQueue *********************/
  #callbackQueue = []
  
  constructor(executor /* 执行器 */) {
    // 改变 resolve 和 reject 中的 this 永远指向 promise 实例
    executor(this.#resolve.bind(this), this.#reject.bind(this))
  }
  
  /**************************** PrivateMethod, only to be executor's param ****************************/
  #resolve(value) {
    if (this.#state !== PENDING) return
    
    // change [[PromiseResult]] to "fulfilled"
    this.#value = value
    
    // change [[PromiseState]]
    this.#state = FULFILLED
    
    queueMicrotask(() => {
      // call the async task in callbackQueue
      this.#callbackQueue.forEach(callback => {
        callback()
      })
    })
  }
  
  /**************************** PrivateMethod, only to be executor's param ****************************/
  #reject(error) {
    if (this.#state !== PENDING) return
    
    // change [[PromiseResult]] to "rejected"
    this.#value = error
    
    // change [[PromiseState]]
    this.#state = REJECTED
  }
  
  /********************************************** then ************************************************/
  then(onFulfilled, onRejected) {
    return new ULannt((resolve, reject) => {
      if (this.#state === PENDING) {
        // 异步, 将回调函数加入回调队列
        this.#callbackQueue.push(() => {
          resolve(onFulfilled(this.#value) /* .then(value => { return }) 的返回值 */)
        })
      }
      
      if (this.#state === FULFILLED) {
        queueMicrotask(() => {
          resolve(onFulfilled(this.#value))
        })
      }
      
      if (this.#state === REJECTED) {
        queueMicrotask(() => {
          reject(onRejected(this.#value))
        })
      }
    })
  }
}


/*********************************************** test *************************************************/
/**
 * const upromise = new ULannt((resolve, reject) => {
 *   setTimeout(() => {
 *     if (Date.now() % 2 === 1) {
 *       resolve("new Promise 的返回值")
 *     }
 *     else {
 *       reject("new Promise 的返回值")
 *     }
 *   }, 1000)
 * }).then(
 *   value => {
 *     console.log("读取数据1:", value)
 *     return "第一次 then 的返回值"
 *   },
 *   error => {
 *     console.log("读取数据1:", error)
 *     return "第一次 then 的返回值"
 *   }
 * ).then(
 *   value => {
 *     console.log("读取数据2:", value)
 *     return "第二次 then 的返回值"
 *   },
 *   error => {
 *     console.log("读取数据2:", error)
 *     return "第二次 then 的返回值"
 *   }
 * ).then(
 *   value => {
 *     console.log("读取数据3:", value)
 *   },
 *   error => {
 *     console.log("读取数据3:", error)
 *   }
 * )
 *
 * console.log(upromise)
 *
 * setTimeout(() => {
 *   console.log(upromise)
 * }, 1200)
 */
