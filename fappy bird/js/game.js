//获取对象
var wrap =document.getElementById("wrap");
var head =document.getElementById("head");
var start =document.getElementById("start");
var bird =document.getElementById("bird");
var point =document.getElementById("point");
var grass =document.getElementById("grass");
var end =document.getElementById("end");
var pipe1 =document.getElementById("pipe1");
var pipe2 =document.getElementById("pipe2");
var pipe3 =document.getElementById("pipe3");

//定义全局变量
var bdtime,bdnum=0,bdpT=210,birdtrue=true//小鸟运动时间;
var gstime;//草时间
var pipeLeftNum;
var pipesnumber=-1;
var pmtime;//运动时间
var score=0;
//按下start键
start.onclick=function(){
 	head.style.display="none";
 	point.style.display="block";
 	//小鸟自由下落时间
 	bdtime =setInterval(bd_down,40);
 	//草时间
 	gstime =setInterval(gs,10);
 	pipes(pipe1);
 	pipes(pipe2);
 	pipes(pipe3);
 	//控制每条水管运动
 	pmtime = setInterval(
 	 	function(){
 	 		pipemove(pipe1);
 	 		pipemove(pipe2);
 	 		pipemove(pipe3);
 	 	},10);
 	//左键控制小鸟
	  wrap.onclick=function(){
		 clearInterval(bdtime);
		 bdtime =setTimeout(bd_up,50);
	}
}
//草地运动
function gs(){
 	grass.scrollLeft++;
 	if (grass.scrollLeft==100) {
 		grass.scrollLeft =0;
 	}
}
//开始时候小鸟的运动 向下运动
function bd_down(){
 	//运动对翼
 	bdnum+=1;
 	if (bdnum==2) {
 		bdnum =0;
 	}
 	bird.children[0].src = "images/down_bird"+bdnum+".png";
 	//向下走
 	bdpT+=6;
 	if (bdpT>=400) {
 		bdpT=400;
 		clearInterval(bdtime);
 		clearInterval(gstime);
 		clearInterval(pmtime);
 		end.style.display="block";
 	}
  	bird.style.top=bdpT+"px";
  	// birdtounch();
}

//小鸟向上运动
function bd_up(){
	//运动对翼
	bdnum+=1;
 	if (bdnum==2) {
 		bdnum =0;
 	}
	bird.children[0].src = "images/up_bird"+bdnum+".png";
	//向上走
	bdpT-=70;
	bird.style.top=bdpT+"px";
 	bdtime = setInterval(bd_down,40);
	if (bdpT<=0) {
		bdpT=0;
		clearInterval(bdtime);
 		clearInterval(gstime);
 		clearInterval(pmtime);
   		end.style.display="block";
  	}
}
//水管
function pipes(pipe){
	pipe_1 =document.createElement("div");
	pipe_2 =document.createElement("div");
	pipe_1.className ="pipestyle";
	pipe_2.className ="pipestyle";
	pipesnumber++;
	pipe.appendChild(pipe_1);
	pipe.appendChild(pipe_2);
	if (pipesnumber>=3) {
		pipesnumber=0;
	};
	//生成上和下水管图
	//随机数
	 pipenum = Math.floor(Math.random()*65);
	//水管上
	for (var i = 0; i < pipenum; i++) {
		var pipemiddle= document.createElement("img");
		pipemiddle.src ="images/up_mod.png";
		pipemiddle.id="pipemiddle_up";
	 	pipe_1.appendChild(pipemiddle);
	}
	var pipe_up= document.createElement("img");
	 	pipe_up.src ="images/up_pipe.png";
	 	pipe_1.appendChild(pipe_up);
	//水管下
	var pipe_down= document.createElement("img");
	 	pipe_down.src ="images/down_pipe.png";
	 	pipe_down.id="pipemiddle_up";
	 	pipe_2.appendChild(pipe_down);
	for (var i = 0; i < (180-3*pipenum)/2; i++) {
		var pipemiddle= document.createElement("img");
		pipemiddle.src ="images/down_mod.png";
		pipemiddle.id="pipemiddle_up";
	 	pipe_2.appendChild(pipemiddle);
	}
	pipe_1.style.top="0px";
	pipe_2.style.top= (3*pipenum+60+120) +"px";
}
//移动水管
function pipemove(pipe){
	pipeLeftNum=pipe.offsetLeft;
	pipeLeftNum--;
	if (pipeLeftNum <= -62) {
		pipe.innerHTML="";
		pipeLeftNum =540;
		pipes(pipe);
	}
	pipe.style.left=pipeLeftNum+"px";
	//碰撞
	//小鸟的上下左右
	var L1 = bird.offsetLeft;
	var R1 = bird.offsetLeft+42;
	var T1 = bird.offsetTop;
	var B1 = bird.offsetTop+26;
	//每个上水管的四个值
	var L2 =pipe.offsetLeft;
	var R2 = L2 + 62;
	var T2 = 0;
	var B2 = pipe.children[0].offsetHeight;
	//判断分数
	if (L1 == R2) {
		if (true) {};
		score++;
		point.children[0].innerHTML = score;
		end.children[3].innerHTML =	score;
	};
	//测试碰撞上水管临界
	if (L1<R2 && R1>L2 && T1<B2 && B1>T2) {
 		clearInterval(bdtime);
 		clearInterval(gstime);
 		clearInterval(pmtime);
 		wrap.onclick=null;
 		end.style.display="block";
	}
	//每个下水管的四个值
	var L_2 =pipe.offsetLeft;
	var R_2 = L2 + 62;
	var T_2 = pipe.children[1].offsetTop;
	var B_2 = pipe.offsetHeight;
	//测试碰撞下水管临界
	if (L1<R_2 && R1>L_2 && T1<B_2 && B1>T_2) {
 		clearInterval(bdtime);
 		clearInterval(gstime);
 		clearInterval(pmtime);
 		wrap.onclick=null;
 		end.style.display="block";
	}
}
