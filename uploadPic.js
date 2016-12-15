/* 
 表单提交 submit(function(){})只是绑定，要再单独submit()
http://blog.csdn.net/yaoyuan_difang/article/details/38582697    //带进度条的图片上传
<form id="upImg" target='frameFile' enctype="multipart/form-data" encoding="multipart/form-data" method="post">
  <input type="file" id="headImg" name="headImage" />
  <input type="text" name="tokenid" id="tokenid"/>
  <input type="text" name="version" id="version"/>
</form>
<iframe id='frameFile' name='frameFile'></iframe> */
  /* 
   angular.module('myApp', []).controller('MyController',['$scope', '$parse', function($scope, $parse) {

      $scope.person = {
        name: "Ari Lerner"
      };
      $scope.age=13;
      $scope.$watch('expr', function(newVal, oldVal, scope) {
        if (newVal !== oldVal) {
          var parseFun = $parse(newVal);
          scope.parsedExpr = parseFun(scope);
        }
      });
    }]); */
    
document.getElementById('headImg').addEventListener('change',function(event){
 var file=this.files[0];
  console.log(file)
  if(file.size/1024/1024>=5){//   监听文件大小    
    console.log('大于5M')
  }
  if(file){
    var oReader=new FileReader();
    oReader.onload = function(e) {
      var base64 = oReader.result;
      document.getElementById('img').setAttribute('src', base64);//预览图片的效果     
    }
    oReader.readAsDataURL(file);
  }
})
    function changeImg(){
      var arr=document.cookie.split(';');
      var arr1=arr[0].split('=');
      $('#upImg').attr('action',url);
      console.log(arr1[1])
      $('#tokenid').val(arr1[1]);
      $('#version').val('3.2.2');
      $('#upImg').submit()
    }


