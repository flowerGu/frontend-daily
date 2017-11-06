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
