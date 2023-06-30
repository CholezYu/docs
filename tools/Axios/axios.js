function axios({ method = "get", url, params = {}, data = {} }) {
  return new Promise((resolve, reject) => {
    method = method.toUpperCase()

    let queryString = ""
    Object.keys(params).forEach(key => {
      queryString += `${key}=${params[key]}&`
    })
    if (queryString) {
      queryString = queryString.substring(0, queryString.length - 1)
      url += "?" + queryString
    }

    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    if (method === "GET" || method === "DELETE") {
      /* 发送 query 参数 */ xhr.send()
    } else if (method === "POST" || method === "PUT") {
      /* 发送 JSON 参数 */ xhr.setRequestHeader(
        "Content-Type",
        "application/json;charset=utf-8"
      )
      xhr.send(JSON.stringify(data))
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return
      }
      // status [200, 300) 成功
      const { status, statusText } = xhr
      if (status >= 200 && status < 300) {
        // response: JSON 数据
        const response = {
          data: JSON.parse(xhr.response), // response: 响应体
          status,
          statusText
        }
        resolve(response)
      } else {
        reject(new Error("request error status is " + status))
      }
    }
  })
}

function Get() {
  axios({
    method: "get",
    url: "http://localhost:3000/posts",
    params: {
      test1: "test1",
      test2: "test2"
    }
  })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      alert(error.message)
    })
}

function Post() {
  axios({
    method: "post",
    url: "http://localhost:3000/posts",
    data: {
      id: 4,
      title: "CSS权威指南",
      author: "EricA.Meyer"
    }
  }).then(
    response => {
      console.log(response)
    },
    error => {
      alert(error)
    }
  )
}

function Put() {
  axios({
    method: "put",
    url: "http://localhost:3000/posts/4",
    data: {
      id: 4,
      title: "CSS揭秘",
      author: "Lea Verou"
    }
  }).then(
    response => {
      console.log(response)
    },
    error => {
      alert(error)
    }
  )
}

function Delete() {
  axios({
    method: "delete",
    url: "http://localhost:3000/posts/4"
  }).then(
    response => {
      console.log(response)
    },
    error => {
      alert(error)
    }
  )
}
