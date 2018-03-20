$(window).on('scroll',function(){
    var top = $(this).scrollTop(),
        len = $('.items').length,
        cur = 0; 
    for(var i=0;i<len;i++){
        var o = $('.items').eq(i);
        if(o.length>0){
            var ot = o.offset().top-75;
            if(top<ot){
                cur = i-1;
                if(cur<0){
                    cur=0;
                }
                break;
            }else if(i==len-1){
                cur=len-1;
            }
        }
    }
    $('.static_nav li,.fixed ul li').removeClass('active');
    $('.static_nav li').eq(cur).addClass('active');
    $('.letter_tab_wrap.fixed ul li').eq(cur).addClass('active');
})
