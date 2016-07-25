var $link=$(".link");
var $menu_li=$(".menu_ul li");
var $submenu_a=$(".submenu a");
	// var bol=false;
	$link.click(function(e) {
	var e=$(this);
	if(e.next().css("display")=="none"){
		e.next().show();
		$menu_li.removeClass('menu_li');
		e.parent().addClass('menu_li');
		$(".sheji").removeClass('menu_b');
		$(".lianxi").removeClass('menu_b');
		//$submenu_a.removeClass('li_a');//取消上次留下的高亮
		// console.log(e.parent().siblings().children());
		e.parent().siblings().children().eq(1).hide();
		e.parent().siblings().children().eq(3).hide();
		e.parent().siblings().children().eq(5).hide();
		// e.parent().siblings().children().eq(1).removeClass('menu_li');
	}
	else{
		e.next().hide();
		$menu_li.removeClass('menu_li');
		// e.parent().removeClass('menu_li');
	}
	// $(".submenu").hide("slow");
	// e.next().show("slow");
	});
$submenu_a.click(function() {
	$submenu_a.removeClass('li_a');
	$(this).addClass('li_a');
});
$(".sheji").click(function(){
	$(".sheji").addClass('menu_b');
	$(".sheji").parent().removeClass('menu_li');
});
$(".lianxi").click(function(){
	$(".lianxi").addClass('menu_b');
	$(".lianxi").parent().removeClass('menu_li');
});