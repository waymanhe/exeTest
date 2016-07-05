
var main = document.getElementById("main");
var cover =document.getElementById("cover");
var sImg =document.getElementById("start");
var watermelon =document.getElementById("wm").getElementsByTagName("img");
var menu = document.getElementById("menu");
var finish = document.getElementById("finish");
var basket = document.getElementById("basket");
var demandnum = document.getElementById("num");
var number = document.getElementById("number");
var btn =document.getElementById("btn");
var stime,tops=0,num =0,randomnum;
	//点击开始
	sImg.onclick = function(){
		stime = setInterval(startgame,5);
		//出一个随机数在大笨象话语到
		randomnum = Math.floor(Math.random()*9+1);
		demandnum.children[0].innerHTML = randomnum;
	}
	//开始界面运行移走
	function startgame(){
		tops-=5;
		if (tops== -cover.clientHeight) {
			clearInterval(stime);
		}
		cover.style.top=tops+"px";
	}
	//移动西瓜
	for (var i = 0; i < watermelon.length; i++) {
		//按下西瓜
		watermelon[i].onmousedown =function(e){
			var e = event||window.event;
			if (e && e.preventDefault) {
				e.preventDefault();
			}else {
				window.event.returnValue = false;
			}
			wX = e.clientX - this.offsetLeft;
			wY = e.clientY - this.offsetTop;
			self =this;
			//每按一次就记录一次
			//num++;

			//移动西瓜
			document.onmousemove =function(e){
				var e = event||window.event;
				var weX=e.clientX-wX;
				var weY=e.clientY-wY;
				if (weX<=0) {
					weX=0;
				}
				if (weX>=320) {
					weX=320;
				}
				if (weY<=0) {
					weX=0;
				}
				if (weY>=380) {
					weY=380;
				}
				
				self.style.top= weY+"px";
				self.style.left= weX+"px";
			}
		}
		watermelon[i].onmouseup=function(){
			var e = event||window.event;
			var weX=e.clientX-wX;
			var weY=e.clientY-wY;
			document.onmousemove=null;
			//在篮子里面就会消失
				if(weX>=150&&weY>=370){
					 num ++;
					 console.log(num);
					self.style.display="none";
					basket.src ="images/bascket_w"+num+".png";
					//每按一次西瓜就记住距第几次 并且显示在篮子度
					// if (num==0) {
					// 	number.src=null;
					// }else{
						number.src="images/"+num+".png";
					// }
				}
		}
	}
	//back返回界面
	menu.children[1].onclick =function(){
		
		stime = setInterval(endgame,5);
	}
	function endgame(){
		tops+=5;
		if (tops== 0) {
			clearInterval(stime);
		}
		cover.style.top=tops+"px";
	}
	//提交游戏
	menu.children[0].onclick =function(){
		//用dom方法生成一个新的done界面
		var done = document.createElement("img");
		done.src ="images/right-bg.png";
		var nextBtn = document.createElement("img");
		nextBtn.src ="images/bt_Next.png";
		nextBtn.id="btn";
		//判断是否够西瓜数
		if (num==randomnum) {
			finish.innerHTML =null;
			finish.appendChild(done);
			finish.appendChild(nextBtn);
			finish.style.display ="block";
		}else{
			finish.style.display ="block";
		}
		//点击
		nextBtn.onclick =function(){
			location = location
		}
		btn.onclick =function(){
			location = location
		}
	}