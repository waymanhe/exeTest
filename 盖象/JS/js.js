$(function(){
	// 头部图片按钮关闭
	$('.gxHeadBg>img').eq(1).click(function(event) {
		$('.gxHeadBg').css('display','none');
	});
	//头部nav点击样式
	$('.otherGoods>li').hover(function() {
		$(this).children('a').css('color', '#c20005');
	}, function() {
		$(this).children('a').css('color', '#4a4a4a');
	});
	//左侧导航栏与右侧的交互
	var $a = $('.allGoodsList>li');
	var $b = $('.allGoodsListTable>div');
	$a.hover(function() {
		var $num = $(this).index();
		$b.eq($num).css('display', 'block');
	}, function() {
		var $num = $(this).index();
		$b.eq($num).css('display', 'none');
	});
	$b.hover(function() {
		$(this).css('display', 'block');
	}, function() {
		$(this).css('display', 'none');
	});
	// 头部大图滚动
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    spaceBetween: 30,
	    centeredSlides: true,
	    autoplay: 2500,
	    autoplayDisableOnInteraction: false,
	    loop:true,
	    paginationBulletRender: function (index, className) {
	          return '<span class="' + className + '">' + (index + 1) + '</span>';}
	});
	//楼层logo大图滚动
	var swiperA = new Swiper('.swiper-container-b', {
	    nextButton: '.fo-scrollLogo-btnL',
	    prevButton: '.fo-scrollLogo-btnR',
	    paginationClickable: true,
	    spaceBetween: 30,
	    centeredSlides: true,
	    autoplay: 2500,
	    autoplayDisableOnInteraction: false,
	    loop:true,
	});
	//楼层里大图滚动
	var swiperA = new Swiper('.swiper-container-c', {
	    nextButton: '.fo-scrollImg-btnL',
	    prevButton: '.fo-scrollImg-btnR',
	    pagination: '.fo-scrollImg-ball',
	    paginationClickable: true,
	    spaceBetween: 300,
	    centeredSlides: true,
	    autoplay: 2500,
	    autoplayDisableOnInteraction: false,
	    loop:true
	});
	//点击floor1楼层导航选项红箭头
	$('.floor-one-navR>div').click(function(event) {
		var $x = $(this).index();
		$(this).css('color', '#c20005').siblings().css('color', '#555555');
		$(this).children('span').css('display', 'block').parent().siblings().children('span').css('display', 'none');
		$('.floor-content-oneR>div').eq($x).css('display', 'block').siblings().css('display', 'none');;
	});
	//点击floor2楼层导航选项红箭头
	$('.floor-two-navR>div').click(function(event) {
		var $x = $(this).index();
		$(this).css('color', '#c20005').siblings().css('color', '#555555');
		$(this).children('span').css('display', 'block').parent().siblings().children('span').css('display', 'none');
		$('.floor-content-twoR>div').eq($x).css('display', 'block').siblings().css('display', 'none');;
	});
	//点击floor3楼层导航选项红箭头
	$('.floor-three-navR>div').click(function(event) {
		var $x = $(this).index();
		$(this).css('color', '#c20005').siblings().css('color', '#555555');
		$(this).children('span').css('display', 'block').parent().siblings().children('span').css('display', 'none');
		$('.floor-content-threeR>div').eq($x).css('display', 'block').siblings().css('display', 'none');;
	});
	//点击floor4楼层导航选项红箭头
	$('.floor-four-navR>div').click(function(event) {
		var $x = $(this).index();
		$(this).css('color', '#c20005').siblings().css('color', '#555555');
		$(this).children('span').css('display', 'block').parent().siblings().children('span').css('display', 'none');
		$('.floor-content-fourR>div').eq($x).css('display', 'block').siblings().css('display', 'none');;
	});
	//点击floor5楼层导航选项红箭头
	$('.floor-five-navR>div').click(function(event) {
		var $x = $(this).index();
		$(this).css('color', '#c20005').siblings().css('color', '#555555');
		$(this).children('span').css('display', 'block').parent().siblings().children('span').css('display', 'none');
		$('.floor-content-fiveR>div').eq($x).css('display', 'block').siblings().css('display', 'none');;
	});
	//点击floor6楼层导航选项红箭头
	$('.floor-six-navR>div').click(function(event) {
		var $x = $(this).index();
		$(this).css('color', '#c20005').siblings().css('color', '#555555');
		$(this).children('span').css('display', 'block').parent().siblings().children('span').css('display', 'none');
		$('.floor-content-sixR>div').eq($x).css('display', 'block').siblings().css('display', 'none');;
	});
	//点击floor7楼层导航选项红箭头
	$('.floor-seven-navR>div').click(function(event) {
		var $x = $(this).index();
		$(this).css('color', '#c20005').siblings().css('color', '#555555');
		$(this).children('span').css('display', 'block').parent().siblings().children('span').css('display', 'none');
		$('.floor-content-sevenR>div').eq($x).css('display', 'block').siblings().css('display', 'none');;
	});
	//点击floor8楼层导航选项红箭头
	$('.floor-eight-navR>div').click(function(event) {
		var $x = $(this).index();
		$(this).css('color', '#c20005').siblings().css('color', '#555555');
		$(this).children('span').css('display', 'block').parent().siblings().children('span').css('display', 'none');
		$('.floor-content-eightR>div').eq($x).css('display', 'block').siblings().css('display', 'none');;
	});
	//点击floor9楼层导航选项红箭头
	$('.floor-nine-navR>div').click(function(event) {
		var $x = $(this).index();
		$(this).css('color', '#c20005').siblings().css('color', '#555555');
		$(this).children('span').css('display', 'block').parent().siblings().children('span').css('display', 'none');
		$('.floor-content-nineR>div').eq($x).css('display', 'block').siblings().css('display', 'none');;
	});
	//右侧栏点击返回最上
	$(".returnTop").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
 	});
	//左侧楼层显示
	setInterval(function(){
		if ($(document).scrollTop()>=1300&&$(document).scrollTop()<=5300) {
			$('.floorLblock').css('display', 'block');
		}else{
			$('.floorLblock').css('display', 'none');
		}
	},100);
	
	$('.floorLblock>div').hover(function() {
		$(this).children('p').css('display', 'block');
		$(this).click(function(event) {
			var $y= $(this).index();
			$('body,html').animate({ scrollTop: 1300+$y*450 }, 500);
		});
	}, function() {
		$(this).children('p').css('display','none');
	});
});