
var wrap= document.getElementById("wrap");
var wolf= document.getElementById("wolf");
var img =wolf.getElementsByTagName("img");
var title =document.getElementById("title");
var score = document.getElementById("score");
var scroll = document.getElementById("scroll");
	var i=0,time,time1,time2,a,time3;
	var test = 0;
		
	
	//点击标题开始
	title.onclick=function(){
		scroll.scrollLeft=0;
		score.innerText=null;
		title.style.display="none";
		//随机出数的时间
		time1 =setInterval(clock,1100);
		//上下移动的时间
		time =setInterval(move,100);
		//滚动游戏时间
		time3 = setInterval(line,100);
	}
		
	//滚动时间轴条
	function line(){
		var z=scroll.scrollLeft++;
		if (scroll.scrollLeft==180) {
			clearInterval(time);
			clearInterval(time1);
			clearInterval(time3);
			for (var i = 0; i < img.length; i++) {
				img[i].style.display="none";
			}
			title.style.display ="block";
		}
	}
	function clock(){
	//随机出数0-8
		wolf.style.display="block";
		var num = Math.floor(Math.random()*9);
			switch(num){
				case 0:{wolf.style.top=158+"px";
						wolf.style.left=17+"px";
						break;
				}
				case 1:{wolf.style.top=116+"px";
						wolf.style.left=96+"px";
						break;
				}
				case 2:{wolf.style.top=142+"px";
						wolf.style.left=184+"px";
						break;
				}
				case 3:{wolf.style.top=222+"px";
						wolf.style.left=16+"px";
						break;
				}
				case 4:{wolf.style.top=192+"px";
						wolf.style.left=103+"px";
						break;
				}
				case 5:{wolf.style.top=212+"px";
						wolf.style.left=198+"px";
						break;
				}
				case 6:{wolf.style.top=294+"px";
						wolf.style.left=30+"px";
						break;
				}
				case 7:{wolf.style.top=273+"px";
						wolf.style.left=118+"px";
						break;
				}
				case 8:{wolf.style.top=296+"px";
						wolf.style.left=207+"px";
						break;
				}
			}	
	}
	//单个狼的运动
	var f=true;
	function move(){
		if (f) {
			if (i>0) {
				img[i-1].style.display="none";
			}
			img[i].style.display="block";
			i++;
			if (i==7) {
				f=false;
			}
		}else{
			i--;
			img[i].style.display="block";
			if (i<6) {
			img[i+1].style.display="none";
			}	
			if (i==0) {
				f=true;
			}
		}
		 a=i;
			//console.log(a);
			//点击狼的时候
			wolf.onclick=function(){
				test += 10;
				if (time2) {
					clearInterval(time2);
				}
				//clearInterval(time);
		 		//clearInterval(time1);
				//console.log(a);
		 		time2 =setTimeout(click,80);
		 			
		 		score.innerText=test;
		 	}
		 	img[7].style.display="none";
	}
	
	function click(){
		for (var i = 0; i < img.length; i++) {
			img[i].style.display="none";
			img[7].style.display="block";
		};
	}
