```js 
  let xhr = new XMLHttpRequest()
                let fileName = 'file.xls' // 文件名称 
                xhr.open('GET', ApiUrl, true)
                xhr.responseType = 'arraybuffer'
                xhr.setRequestHeader('Authorization', `Bearer ${this.cookie.getItem('access_token')}`) // 请求头中的验证信息等（如果有）
                xhr.onload = function() {
                    console.log(xhr);
                    // let uint8 = new Uint8Array(this.response) // 提取uint8Array
                    // let resToString = decodeURIComponent(escape((String.fromCharCode(...uint8)))
                    //在接口做验证的时候，如果验证失败，接口返回json信息，但是由于设置了responseType='arraybuffer'，这时候this.response将不再是json字符串，而是ArrayBuffer对象，要处理它来将后台返回的信息展示出来。
                    if (this.status === 200) {
                      let type = xhr.getResponseHeader('Content-Type')

                      let blob = new Blob([this.response], {type: type})
                      if (typeof window.navigator.msSaveBlob !== 'undefined') {
                          window.navigator.msSaveBlob(blob, fileName)
                      } else {
                          let URL = window.URL || window.webkitURL
                          let objectUrl = URL.createObjectURL(blob)
                          if (fileName) {
                          var a = document.createElement('a')
                          // safari doesn't support this yet
                          if (typeof a.download === 'undefined') {
                              window.location = objectUrl
                          } else {
                              a.href = objectUrl
                              a.download = fileName
                              document.body.appendChild(a)
                              a.click()
                              a.remove()
                          }
                          } else {
                          window.location = objectUrl
                          }
                      }
                    }
                }
                xhr.send()
```
