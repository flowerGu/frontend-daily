- 利用script标签的src实现跨域
- 将前端编写好的方法作为参数传到服务端，然后服务端在方法中添加参数，返回客户端
- 因为script标签的src属性，只支持*get*属性,不支持自定义请求头
- 由于**同源策略**的限制，无法共享不同域名的资源（同是指域名相同，协议相同，端口相同）

```js
function jsonp(opt){
    var script = document.createElement('script');
    var url = opt.url + '?callback=' + opt.callback.name;
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script); 
}

function hello(res){
    console.log(res.data);
}
jsonp({
    url : '',
    callback : hello 
});
```
