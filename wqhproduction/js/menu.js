$(function  () {
	var $link=$(".link");
	var $menu_li=$(".menu_ul li");
	var $submenu_a=$(".submenu a");
	var $submenu = $(".submenu");
		// var bol=false;
		$link.click(function() {		
			// alert()
			var index = $(this).index(".link");
			if (index==0 || index==2) {
				$submenu.eq(index).slideToggle();
				$submenu.eq(index).parent().toggleClass("menu_li");
			};
			
		});

	$submenu_a.click(function() {
		$submenu_a.removeClass('li_a');

		$(this).addClass('li_a');	
	});
	// $(".sheji").click(function(){
	// 	$(".sheji").addClass('menu_b');

	// 	$(".sheji").parent().removeClass('menu_li');
	// });
	// $(".lianxi").click(function(){
	// 	$(".lianxi").addClass('menu_b');
	// 	$(".lianxi").parent().removeClass('menu_li');
	// });
})