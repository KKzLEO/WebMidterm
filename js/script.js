var scrollVal = 0;

$(".nav-bar li").hover(function(){
    if(scrollVal > 0){
        $(this).append('<div class="hover-wrap-sm"></div>');
    }else{
        $(this).append('<div class="hover-wrap"></div>');
    }
},function(){
    $(".hover-wrap").remove();
    $(".hover-wrap-sm").remove();
});

$(function(){
    $(window).scroll(function () {
        if(scrollVal == 0){
            new WOW().init();
        }
        scrollVal = $(this).scrollTop();
        console.log(scrollVal);
        if(scrollVal > 0){
            $("header").addClass("padding-zero");
        }else{
            $("header").removeClass("padding-zero");
        }
    });
});
