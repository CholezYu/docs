function axios({
  url = "",
  method = "get",
  headers = { "Content-Type": "application/json" },
  params = {},
  data = {},
  responseType = "json"
}) {
  return new Promise((resolve, reject) => {
    const config = { url, method, headers, params, data, responseType }
    
    // object to string
    const o2s = data => Object.entries(data).map(item => `${ item[0] }=${ item[1] }`).join("&")
    
    // headers to object
    const h2o = headers => headers.split("\r\n").slice(0, -1).reduce((prev, item) => {
      const [key, value] = item.split(": ")
      prev[key] = value
      return prev
    }, {})
    
    const xhr = new XMLHttpRequest()
    
    // url + params (object => string)
    if (Object.keys(params).length > 0) {
      const querystring = "?" + o2s(params)
      xhr.open(method, url + querystring)
    }
    else {
      xhr.open(method, url)
    }
    
    // set request headers
    for (let [key, value] of Object.entries(headers)) {
      xhr.setRequestHeader(key, value)
    }
    
    // "get" has no response body
    if (method === "get" || method === "delete") {
      xhr.send()
    }
    // "post" maybe have response body
    else if (method === "post" || method === "put") {
      const type = headers["Content-Type"] // 根据请求头 Content-Type 的类型, 设置不同类型的请求体
      
      if (type === "application/json") {
        xhr.send(JSON.stringify(data)) // 把请求体转为 json 格式
      }
      else if (type === "application/x-www-form-urlencoded") {
        xhr.send(o2s(data)) // 把请求体转为 querystring 格式
      }
    }
    
    xhr.onload = () => {
      const data = responseType === "json" ? JSON.parse(xhr.response) : xhr.responseText
      const headers = h2o(xhr.getAllResponseHeaders())
      const status = xhr.status
      const statusText = xhr.statusText
      const request = xhr
      
      if (status >= 200 && status < 300) {
        resolve({ config, data, headers, status, statusText, request })
      }
      else {
        reject(new Error("request error status is " + status))
      }
    }
  })
}
