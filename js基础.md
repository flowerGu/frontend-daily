在function中遇到包含return语句的行（没有其他内容）时，会在return语句之后立即自动插入分号
```js
function foo1(){
    return {
    	bar: "hello"
    };
}

function foo2(){
    return
    {
    	bar: "hello"
    };
}
(function f(n){return ((n > 1) ? n * f(n-1) : n)})(x)//计算x的阶乘
```
