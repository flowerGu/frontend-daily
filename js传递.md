var m = {k:1}
function _a(m){
 m = {v:2};
 console.log(m)//{v:2}
}
_a(m)
console.log(m)//{k:1}

js �еĻ������Ͱ�ֵ���ݣ��������Ͱ�������

`�˴���Ϊ�����ݣ��������󴫵ݣ����������ݣ����ú�������ʱ���������ն���ʵ�����õĸ�����
  �Ͱ����ô��ݵĲ�ͬ���ڣ�***�ڹ������жԺ����βεĸ�ֵ������Ӱ��ʵ�ε�ֵ***
 

 
var obj = {x : 1};
function foo(o) {
    o.x = 3;
}
foo(obj);
console.log(obj.x); // 3, ���޸���!


var obj = {x : 1};
obj.x = 100;
var o = obj;
o.x = 1;
obj.x; // 1, ���޸�
o = true;
obj.x; // 1, ������o = true�ı�    ���󲢷ǰ����ô��ݣ�ͨ��o = true�޸���o��ֵ������Ӱ��obj



js ��������
var a =33;
function test(){
 console.log(a);//�ڴ��������У���������������˱������������������������򶥲���var a;   a������ȫ�ֱ������ʴ����Ϊundefined
 var a=1;
 
}