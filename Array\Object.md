
## Object:
> Object.keys
> 将对象中的key添加到新数组中

> Object.assign将多个源对象复制到目标对象，当源对象的值发生变化时，目标对象的值不会变
> var m=Object.assgin(target,{name:'lili'},[123])
//https://juejin.im/entry/59ad2cacf265da248a7aa6cc?utm_source=gold_browser_extension
  
 ## Array: 
 > some 数组中有一个元素满足则返回true
 > every 全部满足才可以
 > filter查找数组中满足条件的元素
 > Array.from(new Set([1,1,5,2,3]) //数组去重 Array.from()方法Array从类数组或可迭代的对象创建一个新的实例
  
 ```js
 
 var arr = new Set();//Set中的元素只会出现一次
 arr.add(1);
 arr.add(2);
 arr.add(1);
 arr =[...arr];//arr=[1,2]
 
 ```
> getComputedStyle(a,null)获取a元素的style样式
> getComputedStyle(a,null).getPropertyValue('display')  获取a元素的display属性值
> a.getBoundingClientRect() 获取a元素的offsetTop,offsetLeft,width,height

## 多维数组转一维数组

```js
var re = [],arr = [1,[5,6,[7,[8,9,[[11,12],10]],]]]
re = arr.join(',').split(',')//方法一
function deepFor(arr){
	for(var i=0;i<arr.length;i++){
		if(Object.prototype.toString.call(arr[i]).slice(8,-1) == 'Array'){
			deepFor(arr[i])
        }else{
			re.push(arr[i])
		}
	}
deepFor(arr) //方法二


```
