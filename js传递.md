var m = {k:1}
function _a(m){
 m = {v:2};
 console.log(m)//{v:2}
}
_a(m)
console.log(m)//{k:1}

js 中的基本类型按值传递，对象类型按共享传递

`此传递为共享传递：（按对象传递，按对象共享传递）调用函数传参时，函数接收对象实参引用的副本，
  和按引用传递的不同在于：***在共享传递中对函数形参的赋值，不会影响实参的值***
 

 
var obj = {x : 1};
function foo(o) {
    o.x = 3;
}
foo(obj);
console.log(obj.x); // 3, 被修改了!


var obj = {x : 1};
obj.x = 100;
var o = obj;
o.x = 1;
obj.x; // 1, 被修改
o = true;
obj.x; // 1, 不会因o = true改变    对象并非按引用传递，通过o = true修改了o的值，不会影响obj