//大图片下载
        downloadImgByBlob(url) {
          var img = new Image()
          img.onload = function() {
            var canvas = document.createElement('canvas')
            canvas.width = img.width
            canvas.height = img.height
            var ctx = canvas.getContext('2d')
            // 将img中的内容画到画布上
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            // 将画布内容转换为Blob
            canvas.toBlob((blob) => {
                // blob转为同源url
                var blobUrl = window.URL.createObjectURL(blob)
                // 创建a链接
                var a = document.createElement('a')
                a.href = blobUrl
                a.download = ''
                // 触发a链接点击事件，浏览器开始下载文件
                a.click()
            })
          }
          img.src = url
          // 必须设置，否则canvas中的内容无法转换为blob
          img.setAttribute('crossOrigin', 'Anonymous')
        },
        //小图片下载
        downloadImgByBase64(url) {
          var img = new Image()
          img.onload = function() {
              var canvas = document.createElement('canvas')
              canvas.width = img.width
              canvas.height = img.height
              var ctx = canvas.getContext('2d')
              // 将img中的内容画到画布上
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
              // 将画布内容转换为base64
              var base64 = canvas.toDataURL()
              // 创建a链接
              var a = document.createElement('a')
              a.href = base64
              a.download = ''
              // 触发a链接点击事件，浏览器开始下载文件
              a.click()
          }
          img.setAttribute('crossOrigin', 'Anonymous')
          img.src = url + '?v='+ new Date().getTime()
          // 必须设置，否则canvas中的内容无法转换为base64
      },
