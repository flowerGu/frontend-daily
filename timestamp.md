```js
var timestamp = Date.parse(new Date()); //精确到秒
var timestamp = new Date().valueOf(); //精确到毫秒
var timestamp = new Date().getTime(); //精确到毫秒
var timestamp = +new Date();//精确到毫秒

//获取当前时间的前一天/后一天的时间戳
var timestamp = +new Date() - 24*60*60*1000;
var timestamp = +new Date() + 24*60*60*1000;

//今日零点时间戳
var timestamp = new Date(new Date().toLocaleDateString()).getTime();

//今日最晚时间 23:59:59的时间戳
let timestamp = new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1;


//获取当前时间的n天后的时间戳
/**
 * @param {number} n 天数
 * @returns {Number} 返回值为时间毫秒值
 */
function toNextTimes(n){
    let timestamp = +new Date() + n * 86400000;
    return timestamp;
}

//本周第一天
/***
 *  @return {*} WeekFirstDay 返回本周第一天的时间
 */
function showWeekFirstDay(){
    let Nowdate=new Date();
    let WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);
    return WeekFirstDay;
}

//本周最后一天
/***
 *  @return {*} WeekLastDay 返回本周最后一天的时间
 */
function showWeekLastDay(){
    let Nowdate=new Date();
    let WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);
    let WeekLastDay=new Date((WeekFirstDay/1000+6*86400)*1000);
    return WeekLastDay;
}
//本月第一天
/***
 *  @return {*} MonthFirstDay 返回本月第一天的时间
 */
function showMonthFirstDay(){
    let Nowdate=new Date();
    let MonthFirstDay=new Date(Nowdate.getFullYear(),Nowdate.getMonth());
    return MonthFirstDay;
}

//本月最后一天
function showMonthLastDay(){
    let Nowdate=new Date();
    let MonthNextFirstDay=new Date(Nowdate.getFullYear(),Nowdate.getMonth()+1);
    let MonthLastDay=new Date(MonthNextFirstDay-86400000);
    return MonthLastDay;
}


```
