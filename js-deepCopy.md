1�������ַ������ͣ�ǳ�����Ƕ�ֵ�ĸ��ƣ����ڶ�����˵��ǳ�����ǶԶ����ַ�ĸ��ƣ���û �п����µ�ջ��Ҳ���Ǹ��ƵĽ������������ָ��ͬһ����ַ���޸�����һ����������ԣ�����һ�����������Ҳ��ı䣬��������ǿ����µ�ջ�����������Ӧ������ͬ�ĵ�ַ���޸�һ����������ԣ�����ı���һ����������ԡ����ʵ�ִ������£�
���Դ������������н����
##��һ�ַ�����ͨ���ݹ�������
		//��ƣ�Ҫ��ﵽ��ƾ���Ҫ�õݹ�
function deepCopy(o, c) {
    var c = c || {}
    for (var i in o) {
        if (typeof o[i] === 'object') {//Ҫ�������������
            if (o[i].constructor === Array) {//��������
                c[i] = []
            } else {//���Ƕ���
                c[i] = {}
            }
            deepCopy(o[i], c[i])
        } else {
            c[i] = o[i]
        }
    }
    return c
}
var result = {name: 'result'}
result = deepCopy(china, result)
console.dir(result)

##�ڶ��ַ�����ͨ��JSON�������
var test ={
	  	name:{
			xing:{ 
				 name:'lili',
				 age:'30'
				},
				ming:'33'
		},
		age :40,
		intend :['abc','aaa','123']
	 }
	  var result = JSON.parse(JSON.stringify(test))
	  result.age = 40
	  result.name.xing.first = '��'
	  result.friend.push('fdagldf;ghad')
	  console.dir(test)
	  console.dir(result)