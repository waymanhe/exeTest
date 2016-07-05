$("#cLeftImg>div").click(function(){
	var $i = $(this).index();
	$("#cRight>div").eq($i).css("display","block");
	$("#cRight>div").eq($i).siblings().css("display","none");
});