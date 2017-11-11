## 计算相差多少个月
### (大年-小年-1)*12+12-小年月份+大年月份

##获取AddDayCount天后的日期
```js
function getDateStr(AddDayCount) { 
            var dd = new Date(); 
            dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
            var y = dd.getFullYear(); 
            var m = dd.getMonth()+1;//获取当前月份的日期
            var d = dd.getDate(); 
            return y+"-"+m+"-"+d; 
}
```


## h5 input[type=datetype-local]（获取的日期中带T,本地时间），与当前时间进行比较
### new Date()返回的是GMT时间

```js 
 var val = new Date($(this).val());     //所选时间
 var curDate = new Date().getTime();//当前时间
 var choose = val.getTime()+new Date().getTimezoneOffset()*60*1000(当前时间偏移的毫秒数);
 if(choose<curDate){
   alert('所选时间不能小于当前时间');
 }

```

