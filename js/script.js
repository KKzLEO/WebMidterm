var scrollVal = 0;
var isReset = false;

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
    new WOW().init();
    $(".hidden").hide();
    $(window).scroll(function () {
        if(isReset){
            new WOW().init();
            isReset = false;
        }
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        scrollVal = $(this).scrollTop();
        if(scrollVal == 0){
            isReset = true;
        }
        
        if(scrollVal > 0){
            $("header").addClass("padding-zero");
        }else{
            $("header").removeClass("padding-zero");
        }
    });
});

$(".to-home").click(function(){
    window.location.href = './index.html';
});

$(".to-news").click(function(){
    window.location.href = './news.html';
});

$(".to-charts").click(function(){
    window.location.href = './charts.html';
});

$(".to-top10video").click(function(){
    window.location.href = './top10video.html';
});

$(".btn-nav-toggle").click(function(){
    $(".nav-bar-sm").toggle();
});