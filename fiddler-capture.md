##跨域：
* Filters——>use Filters勾选——>response header——>set response header勾选——>“Access-Control-Allow-Origin”——>  *	
##抓包：
###手机代理设置成pc的ip地址:
* Fiddler->tools->General (check,Enable,Automatically)勾选->HTTPS(全部复选框勾选)->Connections(Allow,Reuse,Reuse Act,Monitor，DefaultLAN勾选)设置好端口号
###修改响应数据：
* 1.将接口数据复制修改指定字段，bpu 接口地址 ，重新调用接口，点击fiddler面板中的接口，选择Inspector->choose Response-》将修改后的接口文档上传，-》run to completion

###修改请求数据：
* 1.选中接口并拖到composer中，修改request Body中的字段参数，执行execute
###修改图片：
* 找到指定图片，在AutoResponser中添加规则，上传新图片
