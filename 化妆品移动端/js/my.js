$(function(){
var aImg=["castle.png","castle_bg.png","blue_bg.png","logo_i.png","bg_two.jpg","bg_three.jpg","bg_four.jpg","bg_five.jpg","bg_six.jpg","bg_seven.jpg","bg_eight.jpg","arrow.png","award.png","bird.png","btn_bg_1.png","btn_bg_2.png","btn_bg_3.png","btn_bg_4.png","five_1_1.png","five_2_1.png","four_1_1.png","four_2_1.png","four_left.png","four_right.png","hand.png","ico_j1.png","ico_j2.png","ico_j3.png","logo.png","search.png","search_box.png","seven_1_1.png","seven_2_1.png","share_bg.png","six_1_1.png","six_2_1.png","six_3_1.png","six_left.png","six_right.png","slider_1.png","three_1_1.png","three_2_1.png","three_3_1.png","two_1_1.png","two_2_1.png","two_3_1.png","two_1_2.png","two_2_2.png","two_3_2.png"];

	var num=0;
	var loadw=$("#load div").width()
	for (var i=0;i<aImg.length;i++) {
		var img=new Image();
		img.src="image/"+aImg[i];
		
		img.onload=function(){
			num++;
			var pw=num/aImg.length*loadw;
			var p=parseInt(num/aImg.length*100)+"%";
			$("#load div div").width(pw);
			$("#load div p").text(p);
//			alert("")
			if(num==aImg.length){
				$("#load").hide()
				$("#wrap").show()
				start();				
			}
		}
			
		
	}

function start(){
	ThreeDturn.turn($("#cube").get(0),function(){
		var bol4=false;
		var bol6=false;
		if(ThreeDturn.index==1){
			$("#up").html('<ul><li><img src="image/slider_1.png" style="margin-top: 5px;"/></li><li>为你揭晓</li></ul>')
		}else{
			$("#up").html('<img src="image/slider_1.png"/>')
		}	
		
		if(ThreeDturn.index==3){
			$("#page_three .bird").show()
			setTimeout(function(){				
				$("#page_three .bird").removeClass("birdmove")
			},1000)
		}
		
		if(ThreeDturn.index==4 && !bol4){
			bol4=true;
			$("#page_four_move img").show()
			setTimeout(function(){
				$("#page_four_move").hide()
				$("#page_four_move img").removeClass("animated fadeInUp fadeInDown")
			},1000)
		}
		
		if(ThreeDturn.index==6 && !bol6){
			bol6=true;
			$("#page_six_move img").show()
			setTimeout(function(){
				$("#page_six_move").hide()
				$("#page_six_move img").removeClass("animated fadeInLeft fadeInRight")
			},1000)
		}
		
		if(ThreeDturn.index==7){
			$("#page_seven .seven_2img").show()
			setTimeout(function(){
				$("#page_seven .seven_2img").removeClass("animated fadeInLeft fadeInRight")
			},1000)
		}		
	});	
	
	page_one()
}

	
	function page_one(){
		$("#logo_i").css("left",-150);
		$("#logo_i").animate({left:"10%",});
		
		$("#blue_bg").css("left",150);
		$("#blue_bg").animate({left:0,});
		
		$("#award").css("display","none")
		$("#castle_bg").css("opacity",0)
		var castle=$("#castle");	
//		alert(castleTop);
		castle.css("top",-150)
		castle.animate({ top: "0px"},600,"linear",function(){
			$("#award").css("display","block")	
		});
		setTimeout(function(){
			$("#castle_bg").animate({opacity:1},800);		
		},400);			
	}
	
	
	$("#page_two_1").on("tap",function(){
		$(this).hide();		
	})
	$("#page_two .ico").on("tap",function(){	
		$("#page_two_2").css("background-color","rgba(0,0,0,0.5)")
		$("#page_two .two_2img").hide()
		var index=String($(this).index()+1);
		var str1="#page_two #two_con"+index;
		var str5="#page_two .two_1img"+index;
		var str2="#page_two #btn_bg"+index;	
		if(index==1){
			$(str2).addClass("showheight");
			$(str1).addClass("animated fadeInLeft");
		}else{
			$(str2).addClass("showwidth");
			$(str1).addClass("animated fadeInRight");
		}	
		same($(this),"#page_two",index,str1,str2,str5);
		
	})
	
	
	$("#page_three .ico").on("tap",function(){	
		var index=String($(this).index()+1);
		var str1="#page_three #three_con"+index;
		var str5="#page_three .three_1img"+index;
		var str2="#page_three #btn_bg"+index;	
		$(str2).addClass("showwidth");
		if(index==3){	
			$(str1).addClass("animated fadeInRight");				
		}else{
			$(str1).addClass("animated fadeInLeft");				
		}
		same($(this),"#page_three",index,str1,str2,str5);
	})
	
	$("#page_four .ico").on("tap",function(){	
		var index=String($(this).index()+1);
		var str1="#page_four #four_con"+index;
		var str5="#page_four .four_1img"+index;
		var str2="#page_four #btn_bg"+index;	
		$(str2).addClass("showwidth");
		if(index==2){	
			$(str1).addClass("animated fadeInRight");				
		}else{
			$(str1).addClass("animated fadeInLeft");				
		}
		same($(this),"#page_four",index,str1,str2,str5);
	})
	
	$("#page_five .ico").on("tap",function(){	
		var index=String($(this).index()+1);
		var str1="#page_five #five_con"+index;			
		var str5="#page_five .five_1img"+index;
		var str2="#page_five #btn_bg"+index;	
		$(str2).addClass("showwidth");
		if(index==2){	
			$(str1).addClass("animated fadeInRight");				
		}else{
			$(str1).addClass("animated fadeInLeft");				
		}
		same($(this),"#page_five",index,str1,str2,str5);
	})
	
	$("#page_six .ico").on("tap",function(){	
		var index=String($(this).index()+1);
		var str1="#page_six #six_con"+index;
		var str5="#page_six .six_1img"+index;
		var str2="#page_six #btn_bg"+index;			
		if(index==2){	
			$(str1).addClass("animated fadeInRight");		
		}else{
			$(str1).addClass("animated fadeInLeft");				
		}
		if(index==3){
			$(str2).addClass("showwidth");
		}else{
			$(str2).addClass("showheight");
		}
		same($(this),"#page_six",index,str1,str2,str5);
	})
	
	$("#page_seven .ico").on("tap",function(){	
		var index=String($(this).index()+1);
		var str1="#page_seven #seven_con"+index;			
		var str5="#page_seven .seven_1img"+index;
		var str2="#page_seven #btn_bg"+index;	
		$(str2).addClass("showwidth");
		if(index==1){	
			$(str1).addClass("animated fadeInRight");				
		}else{
			$(str1).addClass("animated fadeInLeft");				
		}
		same($(this),"#page_seven",index,str1,str2,str5);
	})
	
	$("#page_eight #share").on("tap",function(){	
		$("#page_eight .arrow").show();
	})
	
	function same(obj,page,index,str1,str2,str5){
		$(page+"_wrap").css("background-color","rgba(0,0,0,0.5)")	
		var str3=page+" .btn_head"+index;
		var str4=page+" .btn_txt"+index;	
		if(obj.attr("src")=="image/ico_j2.png"){		
			obj.attr("src","image/ico_j1.png");
			$(str1).hide()
			$(str2).hide()
				
			$(str3).css("opacity","1")
			$(str4).css("color","white")
//			$(str5).hide()
		}else{
			$(page+" .ico").attr("src","image/ico_j1.png");			
			$(page+" .btn_txt").css("color","white")
			$(page+" .btn_bg").hide()
			
			obj.attr("src","image/ico_j2.png");
			obj.removeClass("icoflash");				
			$(page+" .con").hide();		
			
			$(str1).show()			
			$(str2).show()
			$(str3).show()
			$(page+" .btn_head").css("opacity","1")
			$(str3).css("opacity","0")
			$(str4).show()
			$(str4).css("color","black")			
			$(str5).show()			
			$(str5).animate({opacity:1},800)						
			setTimeout(function(){
				$(str2).removeClass("showwidth showheight");
				$(str1).removeClass("animated fadeInLeft");
			},1000)			
		}		
		event.cancelBubble=true;
	}
})
