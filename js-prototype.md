##### js原型
```html  
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
         <meta http-equiv="refresh" content="0;url=www.baidu.com" />
        <title></title>
        <style>
            #car {width:300px;height:300px;text-align: center;line-height: 300px;border: 1px solid #007399;}
        </style>
    </head>
    <body>
        <div id="car">
            
        </div>
                    <div id="wrap">
通过构造函数生成的实例所拥有的方法都是指向一个函数的索引，这样可以节省内存
                                    <input type="button" id="st" value="start"/>
                    <input type="button" id="stop" value="stop"/>
                    <input type="button" id="end" value="end"/>
                    </div> 
        <script>
            var operate=function(ops){
                this.dom=document.getElementById(ops.content);//操作对象
                this.init(ops.box);
            };
            operate.prototype={
                init:function(box){//初始化-->点击按钮
                    var that=this;//this指向oerate
                    $(box).children('input').on('click',function(){
                                                                    that[$(this).val()]();
                                                            })
                },
                start:function(){//开始功能
                    this.dom.innerHTML='start';
                },
                stop:function(){//停止功能
                    this.dom.innerHTML='stop';
                },
                end:function(){//结束功能
                    this.dom.innerHTML='end';
                }
            }
            var obj=new operate({
                content:'car',
                btn:'#wrap'
            });//调用方法的原型
            
        </script>

 当查找一个对象的属性时(先查找自身的属性，如果没有再查找原型),JavaScript 会向上遍历原型链，直到找到给定名称的属性为止，到查找到达原型链的顶部 - 也就是 Object.prototype - 但是仍然没有找到指定的属性，就会返回 undefined,,,,可以赋值任何类型的对象到原型上，但是不能赋值原子类型的值
function foo() { 
  var x = 20; 
  function bar() {
    alert(x);
  } 
  bar();
} 
Object.prototype.x = 10; 
foo(); //20



var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // 总是返回 false

// 使用{}对象的 hasOwnProperty，并将其上下为设置为foo
{}.hasOwnProperty.call(foo, 'bar'); // true
    </body>
</html>
```