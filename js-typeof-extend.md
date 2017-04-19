#js
```
	navigator.userAgent.toLowerCase().indexOf('mobile');
	var a=[]; 
1> Object.prototype.toString.call(a)==>[Object Array]; 
	kind_a==kind_a.split(' ')[1]; 
	length=kind_a.length-1; 
	var kind=kind_a.substr(0,length);—->Array 
2> typeof(a)==>Object; 
3> a.constructor=Array; 
4> a instanceof Array 
5> Array.isArray([]) == true
6>伪数组 {0:'s','1':'t',length:2} 

转译双引号：new RegExp("\\d+","g") === /\d+/g
改变this的三个函数:call,apply(传数组),bind(传第一个参数)
判断属性在对象中是否存在：
```js
 var obj ={name:0}
 if(obj.name){//xxxxxx 当name为0时，此行为不会执行
   //do something
 }
 'name' in obj   vvvvvv             
 //in 对原型属性和自有属性都返回true
 //"hasownproperty" in obj  // true
 //obj.hasownproperty('hasownproperty') //false
 obj.hasownproperty('name') //true    
 obj.hasownproperty('toString') //false
 ```
var obj = {}
arguments 对象并不是一个真正的Array。它类似于数组，但没有数组所特有的属性和方法，除了 length。例如，它没有 pop 方法。不过可以将其转换成数组： 
```js
	var args = Array.prototype.slice.call(arguments); 
	[].slice.call(arguments);
	Array.from(arguments)//es6
	
	Object.keys(person)//将person中的key存入到数组中  output:['name']
	
	Object.isExtensible(person) //true
	Object.preventExtensions(person) //禁止修改对象
	//instanceof 查找一个对象在另一个对象的原型链上是否存在prototype属性
	//constructor 创建此对象的函数的引用
	//window.onload 必须等到页面内容包括图片加载完才能执行
	//-webkit-font-smoothing:antialiased;   mac字体清晰
```



