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
	///////////////��һ����������$(this).attr('')�� || $(this).addClass('')
     if(isTrue){
          return false;
     }
     isTrue = true;
     ajax();
});