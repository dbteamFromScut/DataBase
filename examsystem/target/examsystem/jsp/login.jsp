<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<html>
<head>
	<meta charset="utf-8">
	<title>login</title>
	<link rel="stylesheet" href="../css/login.css"></head>
</head>
<body background="../images/background.png">
	<form action="" id="loginWindow">
		<div class="title"><p>学生考试管理系统</p></div>
		<div class="text_in"><input type="text" id="userName" class="input" placeholder="学号/职工号"><span class="img">&#xe971;</span></div>
		<div class="text_in"><input type="passWord" id="passWord" class="input" placeholder="密码"><span class="img">&#xe955;</span></div>
		<div class="radio" id="radio">
			<input type="radio" name="type" id="student">学生
			<input type="radio" name="type" id="teacher">老师
			<input type="radio" name="type" id="admin">管理员
		</div>
		<input name="" type="button" id="login" value="登陆"></input>
	</form>

	 <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
	<script src="../js/login.js"></script>
</body>
</html>