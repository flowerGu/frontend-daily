/* 
 ���ύ submit(function(){})ֻ�ǰ󶨣�Ҫ�ٵ���submit()
http://blog.csdn.net/yaoyuan_difang/article/details/38582697    //����������ͼƬ�ϴ�
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
  if(file.size/1024/1024>=5){//   �����ļ���С    
    console.log('����5M')
  }
  if(file){
    var oReader=new FileReader();
    oReader.onload = function(e) {
      var base64 = oReader.result;
      document.getElementById('img').setAttribute('src', base64);//Ԥ��ͼƬ��Ч��     
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


