// 通过 xhr 发送 Ajax 请求, 支持 get 和 post 请求
/**
 * 示例:
 * ajax({
 *   url: "/post",
 *   type: "post",
 *   data: { name: "xiaoming", age: 20 },
 *   headers: { "Content-Type": "application/json" },
 *   success(res) {
 *     console.log(res)
 *   }
 * })
 */
export default function ajax({ type = "get", url, data, dataType = "json", success, headers }) {
  const xhr = new XMLHttpRequest()
  
  url = type === "get"
    ? url + "?" + Object.keys(data).map(item => `${ item }=${ data[item] }`).join("&")
    : url
  
  xhr.open(type, url)
  
  if (type === "post") {
    Object.keys(headers).forEach(item =>
      xhr.setRequestHeader(item, headers[item])
    )
  }
  
  xhr.send(
    type === "get"
      ? null
      : dataType === "json"
        ? JSON.stringify(data)
        : Object.keys(data).map(item => `${ item }=${ data[item] }`).join("&")
  )
  
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      success(
        dataType === "json"
          ? JSON.parse(xhr.responseText)
          : xhr.responseText
      )
    }
  }
}
