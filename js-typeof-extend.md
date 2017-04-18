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

hasownproperty 
arguments 对象并不是一个真正的Array。它类似于数组，但没有数组所特有的属性和方法，除了 length。例如，它没有 pop 方法。不过可以将其转换成数组： 
var args = Array.prototype.slice.call(arguments); [].slice.call(arguments);Array.from(arguments)//es6

