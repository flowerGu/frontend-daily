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
     if(isTrue){///////////////��һ����������$(this).attr('')�� || $(this).addClass('')
          return false;
     }
     isTrue = true;
     ajax();
});