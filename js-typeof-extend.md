#js
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script>
                    navigator.userAgent.toLowerCase().indexOf('mobile');
					var a=[]; 

        </script>    
    </head>
    <body>
1> Object.prototype.toString.call(a)==>[Object Array]; 
	kind_a==kind_a.split(' ')[1]; 
	length=kind_a.length-1; 
	var kind=kind_a.substr(0,length);��->Array 
2> typeof(a)==>Object; 
3> a.constructor=Array; 
4> a instanceof Array 
5>α���� {0:'s','1':'t',length:2} 
hasownproperty 
arguments ���󲢲���һ��������Array�������������飬��û�����������е����Ժͷ��������� length�����磬��û�� pop �������������Խ���ת�������飺 
var args = Array.prototype.slice.call(arguments); [].slice.call(arguments);
	</body>
</html>