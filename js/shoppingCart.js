//窗体加载时
$(function(){
	//1。获取加号按钮
	let addBtn=$(".addBtn");
	for(let i=0;i<addBtn.length;i++){
		addBtn[i].onclick=function(){
			//改数量
			let currNum=$(this).prev().html();
			currNum++;
			//赋值
			$(this).prev().html(currNum);
//			改小计
			let price=$(this).parent().prev().html().substring(1);
			// alert(price)
			let money=price*currNum;
			$(this).parent().next().next().find("span").html(money);
			//改总价
			totalMoney();
			totalNum();
			
		}
	}
	//2.获取减号按钮
	let reduseBtn=$(".reduseBtn");
	for(let i=0;i<reduseBtn.length;i++){
		reduseBtn[i].onclick=function(){
			let currNum=$(this).next().html();
			currNum--;
			
			if (currNum<0) {
				return;
			} else{
				$(this).next().html(currNum);
				//改小计
				let price=$(this).parent().prev().html().substring(1);
				let money=price*currNum;
				$(this).parent().next().next().find("span").html(money);
				//改总价
				totalMoney();
				totalNum();
				
			}
		}
	}
	
	
	//3.改数量改总金额
	function totalMoney(){
		//获取表格行
		let minNum=$(".minNum")

		 // console.log(minNum)
		let sum=0;
		for(let i=0;i<minNum.length;i++){
			sum+=parseInt($(minNum[i]).html());
			// console.log(sum)

		}
		// alert(sum)
		$("#totalPrice").html(sum);
	};
	
	//4.改数量
	function totalNum(){
		//获取表格行
		 let countspan=$(".countSpan");
		 let sum=0;
		 for(let i=0;i<countspan.length;i++){
		 	sum+=parseInt($(countspan[i]).html())
		 }
		 $("#totalCount").html(sum);
	};	
	
	
//	5删除操作
	let delBtn=$(".delId");	
	for(i=0;i<delBtn.length;i++){
//		if (delBtn.length==1) {
			$(delBtn[i]).click(function(){
				$(this).parents("#shopingCart").empty().html("此购物车没有商品").css({
					"color":"#999999",
					"text-align":"center",
					"line-height":"284px",
					"width":"1210px",
					"heigth":"284px"
				});
				let oA=$("<a href='index.html'>继续购物</a>");
				oA.css({
					"display":"block",
					"height":"73px",
					"background":"white",
					"margin":"0 auto",
					"line-height":"73px",
					"color":"#000",
					"text-align":"left",
					"padding-left":"130px",
					"border-top":"1px solid #f5f5f5"
				})	
				$("#shopingCart").append(oA);
			})
//		}else{
			$(delBtn[i]).click(function(){
				$(this).parents(".goodsInfo").empty();
//				var currPrice=$("#totalPrice").html();
//				var currCount=$("#totalCount").html();
//				var changePrice=currPrice-$(this).prev().find("span").html();
//				var changeCount=currCount-$(this).parent().find("#countSpan").html()
//				$("#totalPrice").html(changePrice);
//				$("#totalCount").html(changeCount);
			})
//		}
	}
});
