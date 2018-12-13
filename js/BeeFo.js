function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.slice(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.slice(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}


// 滑动选中图片显示
var arrimg = $(".beeFob1")[0].children;
	console.log(arrimg)
	//获取所有的p标签
	var arra =  $(".beeFob2")[0].children;
	console.log(arra)
	for(var i=0;i<arrimg.length;i++){
		arrimg[i].index = i;
		//点哪就调函数
		arrimg[i].onmouseover = func;
	}

	function func(){
		for(var j=0;j<arrimg.length;j++){
		   //若为class名,则改为
		  //arrSpan[j].className ="";
			arrimg[j].id ="";
			arra[j].style.display="none"
		}
		arrimg[this.index].id = "act";
		arra[this.index].style.display = "block";
	}



// 放大镜
// window.onload = function(){
// 	var arra =  $(".beeFob2")[0][1];
// 	arra.onmousemove = function(event){
// 		let evt = event || window.event;
// 		//1、数据
// 		let mirrorWidth = $("#mirrorBox").offsetWidth;
// 		let mirrorHeight = $("#mirrorBox").offsetHeight;
// 		let left1 = evt.pageX-this.offsetLeft-mirrorWidth/2;
// 		let top1 = evt.pageY-this.offsetTop-mirrorHeight/2;
		
// 		//2、边界
// 		if(left1<0){
// 			left1=0;
// 		}
// 		if(left1>this.offsetWidth-mirrorWidth){
// 			left1=this.offsetWidth-mirrorWidth
// 		}
		
// 		if(top1<0){
// 			top1=0;
// 		}
// 		if(top1>this.offsetHeight-mirrorHeight){
// 			top1=this.offsetHeight-mirrorHeight
// 		}
// 		console.log(1);
// 		//3、改变外观
// 		$("#mirrorBox").style.left = left1+"px";
// 		$("#mirrorBox").style.top = top1+"px";
// 		$("#showBox").style.backgroundPosition = (-1*left1)+"px "+(-1*top1)+"px";
// 	}
// }

