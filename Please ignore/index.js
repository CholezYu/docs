class ULannt {
  /**************************************** [[PromiseResult]] *****************************************/
  #value = ""
  
  /**************************************** [[PromiseState]] ******************************************/
  #state = "pending"
  
  
  constructor(executor /* 执行器 */) {
    // 让 resolve 和 reject 中的 this 永远指向 promise 实例
    executor(this.#resolve.bind(this), this.#reject.bind(this))
  }
  
  /**************************** PrivateMethod, only to be executor's param ****************************/
  #resolve(value) {
    if (this.#state !== "pending") return
    
    // change [[PromiseResult]] to "fulfilled"
    this.#value = value
    
    // change [[PromiseState]]
    this.#state = "fulfilled"
  }
  
  /**************************** PrivateMethod, only to be executor's param ****************************/
  #reject(error) {
    if (this.#state !== "pending") return
    
    // change [[PromiseResult]] to "rejected"
    this.#value = error
    
    // change [[PromiseState]]
    this.#state = "rejected"
  }
  
  /********************************************** then ************************************************/
  then(onFulfilled, onRejected) {
    if (this.#state === "fulfilled") {
      onFulfilled(this.#value)
    }
  }
}


const upromise = new ULannt((resolve, reject) => {
  resolve("ULannt")
})

upromise.then(
  value => {
    console.log(value)
  }
)

console.log(upromise)
