//压缩图片
        function canvasDataURL(path, obj, callback){
            var img = new Image();
            img.src = path;
            img.onload = function(){
                var that = this;
                // 默认按比例压缩
                var w = that.width,
                    h = that.height;
                //     scale = w / h;
                // w = obj.width || w;
                // h = (w / scale) || h;
                var quality = 0.92;  // 默认图片质量为0.92
                //生成canvas
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                // 创建属性节点
                var anw = document.createAttribute("width");
                anw.nodeValue = w;
                var anh = document.createAttribute("height");
                anh.nodeValue = h;

                canvas.setAttributeNode(anw);
                canvas.setAttributeNode(anh);
                //处理旋转问题
                if(Orientation && Orientation != 1){
                    switch(Orientation){
                        case 6:     // 旋转90度
                            anw.nodeValue = h;
                            anh.nodeValue = w;
                            canvas.setAttributeNode(anw);
                            canvas.setAttributeNode(anh);
                            ctx.rotate(Math.PI / 2);
                            ctx.drawImage(that, 0, -h, w, h);
                            break;
                        case 3:// 旋转180度
                            ctx.rotate(Math.PI);
                            ctx.clearRect(0, 0, w, h);
                            ctx.drawImage(that, -w, -h, w, h);
                            break;
                        case 8:     // 旋转-90度
                            canvas.width = h;
                            canvas.height = w;
                            ctx.rotate(3 * Math.PI / 2);
                            ctx.clearRect(0, 0, w, h);
                            ctx.drawImage(that, -w, 0, w, h);
                            break;
                    }
                }else{
                    ctx.drawImage(that, 0, 0, w, h);
                }
                
                // 图像质量
                if(obj.quality && obj.quality <= 1 && obj.quality > 0){
                    quality = obj.quality;
                }
                // quality值越小，所绘制出的图像越模糊
                var base64 = canvas.toDataURL('image/jpeg', quality);
                // 回调函数返回base64的值
                callback(base64);
            }
        }
        
        // 生成base64
        var convertImgToBase64 = function (name) {
            var result = ''
            var reader = new FileReader();
            var file = $("#" + name)[0].files[0];
            var imgUrlBase64;
            var size = 2*1024*1024;
            if (file) {
                imgUrlBase64 = reader.readAsDataURL(file);
                reader.onload = function (e) {
                    EXIF.getData(file, function(){ 
                        Orientation = EXIF.getTag(this, 'Orientation'); 
                    });
                    if (reader.result.length < size) {
                        uploadFile = file;
                        $('.img-wrap').html('<img src="'+e.target.result+'"/>')
                        
                    } else {
                        canvasDataURL(reader.result, {
                                quality: 0.5,
                                width: 3000
                            }, function(base64Codes){
                                console.log('压缩大小：', base64Codes.length)
                                if (size < base64Codes.length) {
                                    alert('上传失败，请上传不大于'+ AllowImgFileSize/1024/1024 +'M的图片！')
                                } else {
                                    uploadFile = dataURLtoFile(base64Codes, file.name);                                    
                                    $('.img-wrap').html('<img src="'+base64Codes+'"/>')    
                                }
                        })
                    }
                    
                }
            }
        }
        // 将base64转换为文件
        function dataURLtoFile(dataurl, filename) { 
            var arr = dataurl.split(','), 
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:mime});
        }
            $('#camera').on('click',function(){
                $('#imageUploadCamera').click()
            })
            $("#photo").on('click',function(){
                $('#imageUploadPhoto').click()
            })
            $('#imageUploadCamera').on('change',function(){             
                convertImgToBase64(source)
            })
