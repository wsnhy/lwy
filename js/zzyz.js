$(function(){
	//表单验证
	function checkForm(){
		$("#username").focus(function(){
			$(this).css("opacity",1)
		})
		$("#username").blur(function(){
			var str=this.value;
			if (str.includes("@")) {
				 var reg =/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				if (!reg.test(str)) {
					$(this).parent().html("输入正确邮箱号").css({
						"text-align":"left",
						color:"red",
						"font-size":"12px",
						"padding-top":"10px"
					});
				}
			}else{
				reg=/^1[3-9]\d{9}$/;
				if (!reg.test(str)) {
					$(this).parent().html("输入正确的手机号").css({
						"text-align":"left",
						color:"red",
						"font-size":"12px",
						"padding-top":"10px"
					});
				}
			}	
		});

		// 输入密码
		$("#userpass").focus(function(){
			$(this).css("opacity",1)
		})
		$("#userpass").blur(
			function(){
				var str=this.value;
				if (str.length<6||str.length>12) {
					$(this).parent().html("请输入6到12密码")
					.css(
					{
					"text-align":"left",
					color:"red",
					"font-size":"12px",
					"padding-top":"10px"
					})
				}
			}
		);

		// 验证再次输入的密码
		$("#repass").focus(function(){
			$(this).css("opacity",1)
		})
		$("#repass").blur(function(){
			var str=this.value;
			if (!(str==($("#userpass")[0].value))){
				$(this).parent().html("请重新输入前后密码不一致")
				.css(
					{
					"text-align":"left",
					color:"red",
					"font-size":"12px",
					"padding-top":"10px"
					})
			}
		})
		
		return true;
	};