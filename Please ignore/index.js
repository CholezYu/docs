class ULannt {
  constructor(executor /* 执行器 */) {
    executor()
  }
  
  resolve() {
  
  }
  
  reject() {
    
  }
}

const upromise = new ULannt((resolve, reject) => {
  console.log(123)
})
