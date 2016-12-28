function ajax(){
     $.ajax({
          sucess:function(){
               isTrue = false;
          },
          error : function(){
               isTrue = false;
          }
     })
}
var isTrue = false;
$('#button').click(function(){
     if(isTrue){///////////////另一个方法，（$(this).attr('')） || $(this).addClass('')
          return false;
     }
     isTrue = true;
     ajax();
});