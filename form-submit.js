// 提交并跳转
function submit_redirect(url, data, type){
  type = type === undefined? 'post':'get';
  var from = document.createElement("form");
  from.action = url;
  from.method = 'post';
  from.style.display = 'none';
  if(type === 'get'){
    //$.param(data) 会报错
    url += '?';
    for(var x in data){
      url += x + '=' + data[x] + '&';
    }

    from.action = url;
  }
  else{
    for (var x in data) {
      var opt = document.createElement("input");
      opt.name = x;
      opt.value = data[x];
      // alert(opt.name)
      from.appendChild(opt);
    }
  }
  document.body.appendChild(from);
  from.submit();
  return from;
}