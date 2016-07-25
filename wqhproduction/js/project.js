$(".zoom").css("display","block");
// $(".btn_zoom a").addClass("li_a");
$(".project").addClass("menu_li");
$(".project_ul").css("display","block");

var navi = window.navigator.userAgent;
if(navi.indexOf("MSIE9.0")>0&&!window.innerWidth){
    var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    paginationClickable: true,
    loop: true,
    autoplayDisableOnInteraction: false,
    autoplay :3000,
    moveStartThreshold: 100
  });
}
else{
    var swiper = new Swiper('.swiper-container', {
    effect : 'fade',
    fade: {
      crossFade: true,
    },
    pagination: '.swiper-pagination',
    paginationClickable: '.swiper-pagination',
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    loop:true
    });
}

$(window).resize(function(){
    var $w=$(".swiper-slide").width();
    // var $h=$(".swiper-slide").height();
    var $h=$w/1.17;
    // var $zoomH=$h*1.19;
    // alert($w);
    // alert($h);
    $(".swiper-slide").css("height",$h);
    // $(".zoom_show").css("height",$zoomH);
    var $zoomF=$h+10;
    $(".zoom_info").css("top",$zoomF);
});
//手机端触发不了resize
var $w=$(".swiper-slide").width();
// var $h=$(".swiper-slide").height();
var $h=$w/1.17;
// var $zoomH=$h*1.19;
// alert($w);
// alert($h);
$(".swiper-slide").css("height",$h);
// $(".zoom_show").css("height",$zoomH);
var $zoomF=$h+10;
$(".zoom_info").css("top",$zoomF);

$(".swiper-container").css("height",$h);