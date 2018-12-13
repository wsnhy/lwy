<?php

header("Content-type:text/html;charset=utf-8");
$username=$_GET['user'];
//搭桥
$conn=mysql_connect("localhost","root","root");

//判断是否连接成功
if(!$conn){
	die("连接失败".mysql_error());
}else{
//选择数据库
	 mysql_select_db("student",$conn);

	//执行SQl语句
	 $sqlstr="select*from usertable where username='$username'";
	 $result= mysql_query($sqlstr,$conn);
	//关闭数据库
	mysql_close($conn);
	//响应
	if(mysql_num_rows($result)==0){
		echo "0";
	}else{
		echo "1";
	}

}

?>