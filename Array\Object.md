
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
 > [].concat(...[1,[2,3,4,5],6]  //可将二维数组扁平化
 > [1,null,false,undefined].filter(Boolean) //过滤数组中的假值
  
 ```js
 //去重一
 var arr = new Set();//Set中的元素只会出现一次
 arr.add(1);
 arr.add(2);
 arr.add(1);
 arr =[...arr];//arr=[1,2]
 
 //去重二
 var maps = new Map();
 arr.filter(x=>!maps.has(x) && maps.set(x))

//Array.from 也可以写出.map的效果
var arr = [{name:'123',age:33},{name:'sa',age:23},{name:'aa',age:133}]
Array.from(arr,({name}) => name) == arr.map(({name}) => name)
 
 ```
> getComputedStyle(a,null)获取a元素的style样式
> getComputedStyle(a,null).getPropertyValue('display')  获取a元素的display属性值
> a.getBoundingClientRect() 获取a元素的offsetTop,offsetLeft,width,height

//求两个数组的交集
var one = [0,2,4,6,8,2,8],two = [2,4,6,6,5,8];
var dupli = [...new Set(one)].filter(x => two.includes(x))

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
