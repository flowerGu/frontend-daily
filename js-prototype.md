##### jsԭ��
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
ͨ�����캯�����ɵ�ʵ����ӵ�еķ�������ָ��һ���������������������Խ�ʡ�ڴ�
                                    <input type="button" id="st" value="start"/>
                    <input type="button" id="stop" value="stop"/>
                    <input type="button" id="end" value="end"/>
                    </div> 
        <script>
            var operate=function(ops){
                this.dom=document.getElementById(ops.content);//��������
                this.init(ops.box);
            };
            operate.prototype={
                init:function(box){//��ʼ��-->�����ť
                    var that=this;//thisָ��oerate
                    $(box).children('input').on('click',function(){
                                                                    that[$(this).val()]();
                                                            })
                },
                start:function(){//��ʼ����
                    this.dom.innerHTML='start';
                },
                stop:function(){//ֹͣ����
                    this.dom.innerHTML='stop';
                },
                end:function(){//��������
                    this.dom.innerHTML='end';
                }
            }
            var obj=new operate({
                content:'car',
                btn:'#wrap'
            });//���÷�����ԭ��
            
        </script>

 ������һ�����������ʱ(�Ȳ�����������ԣ����û���ٲ���ԭ��),JavaScript �����ϱ���ԭ������ֱ���ҵ��������Ƶ�����Ϊֹ�������ҵ���ԭ�����Ķ��� - Ҳ���� Object.prototype - ������Ȼû���ҵ�ָ�������ԣ��ͻ᷵�� undefined,,,,���Ը�ֵ�κ����͵Ķ���ԭ���ϣ����ǲ��ܸ�ֵԭ�����͵�ֵ
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

foo.hasOwnProperty('bar'); // ���Ƿ��� false

// ʹ��{}����� hasOwnProperty������������Ϊ����Ϊfoo
{}.hasOwnProperty.call(foo, 'bar'); // true
    </body>
</html>
```