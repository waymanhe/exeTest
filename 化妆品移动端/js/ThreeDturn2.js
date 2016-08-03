var ThreeDturn = {
	speed:500,
	bol:false,
	deg:0,
	index:1,
	m:1,
	aTransform:[],
    turn: function(wrap,succFn){
		wrap.style.webkitPerspective=wrap.offsetHeight/2+"px";
		var speed=this.speed;
		ThreeDturn.bol=false;
		ThreeDturn.succFn=succFn;
		this.index=1;
		var movedeg=0;
		var y=0;
		var main=document.createElement("div");	
		main.style.width="100%";
		main.style.height="100%";
		main.style.position="relative";
		main.style.webkitTransform ="rotatex(0deg) translatez("+wrap.offsetHeight/-2+"px)";
		main.style.webkitTransformStyle="preserve-3d";
	
		var cube=document.createElement("div");
		this.cube=cube;
		cube.style.webkitTransition="0s";
		cube.style.transition="0s";
		cube.style.width="100%";
		cube.style.height="100%";		
		cube.style.webkitTransform ="rotatex(0deg)";
		cube.style.webkitTransformStyle="preserve-3d";	
		var aTransform=["rotatex(0deg) translatez("+wrap.offsetHeight/2+"px)","rotatex(-90deg) translatez("+wrap.offsetHeight/2+"px)","rotatex(180deg) translatez("+wrap.offsetHeight/2+"px)","rotatex(90deg) translatez("+wrap.offsetHeight/2+"px)"];
		ThreeDturn.aTransform=aTransform;
		var n=wrap.children.length;
		for (var i = 0; i <n ; i++) {
			wrap.children[0].style.width="100%";
			wrap.children[0].style.height="100%";
			wrap.children[0].style.position="absolute";
			wrap.children[0].index=i+1;
			if (i==0) {wrap.children[0].style.webkitTransform =aTransform[0]}
			else if(i==1){wrap.children[0].style.webkitTransform =aTransform[1]}
			else if(i==n-1){wrap.children[0].style.webkitTransform =aTransform[3]}
			else{wrap.children[0].style.webkitTransform =aTransform[2]}		
			cube.appendChild(wrap.children[0]);
		};	
		main.appendChild(cube);
		wrap.appendChild(main);	
	
		function fnmove(){
			movedeg=Math.round((y-event.touches[0].screenY)/5)+ThreeDturn.deg;
			cube.style.webkitTransform ="rotatex("+movedeg+"deg)";				
			event.preventDefault();
		}
		wrap.addEventListener("touchstart", function (){	
			if(ThreeDturn.bol==true){this.removeEventListener("touchmove",fnmove,false);return}
			ThreeDturn.change();
			y=event.touches[0].screenY;
			if (event.touches.length==1){
				// alert(event.touches[0].screenX+","+event.touches[0].screenY);
				cube.style.transition="0s";		
				cube.style.webkitTransition="0s";
				this.addEventListener("touchmove",fnmove,false);
			}		
		}, false);
	
		wrap.addEventListener("touchend",function (){
			// alert(movedeg);		
			if(ThreeDturn.bol==true){return}			
			if (movedeg>20+ThreeDturn.deg) {							
				ThreeDturn.deg+=90;
				ThreeDturn.index++	
				if(ThreeDturn.index>cube.children.length){ThreeDturn.index=1;}
				ThreeDturn.up(succFn);	
				main.style.webkitTransform ="rotatex(0deg) translatez("+wrap.offsetHeight/-2+"px)";
			}
			else if(movedeg<-20+ThreeDturn.deg){
				ThreeDturn.index--
				ThreeDturn.deg-=90;
				if(ThreeDturn.index<1){ThreeDturn.index=cube.children.length}
				ThreeDturn.down(succFn);
				main.style.webkitTransform ="rotatex(0deg) translatez("+wrap.offsetHeight/-2+"px)";
			}else{			
				cube.style.transition=speed+"ms";
				cube.style.webkitTransition=speed+"ms";
				cube.style.webkitTransform ="rotatex("+ThreeDturn.deg+"deg)";
			}
//			alert(ThreeDturn.deg%360);
			if(ThreeDturn.deg%360==0){			
			ThreeDturn.deg=0;
			}
			movedeg=ThreeDturn.deg;
			
		},false);
    },
    down:function(succFn){
    	if(ThreeDturn.bol==true){return}
    	ThreeDturn.m--;
    	if(ThreeDturn.m<1){ThreeDturn.m=4;}
    	ThreeDturn.succFn=succFn;
		ThreeDturn.bol=true;		
		this.cube.style.transition=this.speed+"ms";
		this.cube.style.webkitTransition=this.speed+"ms";
		this.cube.style.webkitTransform ="rotatex("+ThreeDturn.deg+"deg)";
		setTimeout(function(obj){
			obj.cube.style.transition="0s";
			obj.cube.style.webkitTransition="0s";
			ThreeDturn.bol=false;
			ThreeDturn.change();
		},this.speed,this)
   },
   up:function(succFn){
   		if(ThreeDturn.bol==true){return}
   		ThreeDturn.m++;
   		if(ThreeDturn.m>4){ThreeDturn.m=1;}
   		ThreeDturn.succFn=succFn;
		ThreeDturn.bol=true;			
		this.cube.style.transition=this.speed+"ms";
		this.cube.style.webkitTransition=this.speed+"ms";
		this.cube.style.webkitTransform ="rotatex("+ThreeDturn.deg+"deg)";
		setTimeout(function(obj){
			obj.cube.style.transition="0s";
			obj.cube.style.webkitTransition="0s";
			ThreeDturn.bol=false;
			ThreeDturn.change();
		},this.speed,this)
  },
  change:function() {  		
  		var h=this.cube.offsetHeight/2;
  		ThreeDturn.aTransform=["rotateX(0deg) translateZ("+h+"px)","rotateX(-90deg) translateZ("+h+"px)","rotateX(180deg) translateZ("+h+"px)","rotatex(90deg) translatez("+h+"px)"]
		if(ThreeDturn.m==1){var j=2;var s=3;var x=1;var o=0}
		else if(ThreeDturn.m==2){var j=3;var s=0;var x=2;var o=1}
		else if(ThreeDturn.m==3){var j=0;var s=1;var x=3;var o=2}
		else{var j=1;var s=2;var x=0;var o=3}
		if(ThreeDturn.index==1){var last=this.cube.children.length-1;}else{var last=ThreeDturn.index-2;}		
		if(ThreeDturn.index==this.cube.children.length){var next=0;}else{var next=ThreeDturn.index;}
		for(var i=0;i<this.cube.children.length;i++){
			if(i==ThreeDturn.index-1){this.cube.children[i].style.webkitTransform =ThreeDturn.aTransform[o]}
			else if(i==next){this.cube.children[i].style.webkitTransform =ThreeDturn.aTransform[x]}
			else if(i==last){this.cube.children[i].style.webkitTransform =ThreeDturn.aTransform[s]}			
			else{this.cube.children[i].style.webkitTransform =ThreeDturn.aTransform[j]}		
		}
		ThreeDturn.succFn && ThreeDturn.succFn();
	}
}