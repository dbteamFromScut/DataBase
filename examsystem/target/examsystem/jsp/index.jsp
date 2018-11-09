<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>index</title>
	<link rel="stylesheet" type="text/css" href="../css/themes/default/easyui.css" />
	<link rel="stylesheet" type="text/css" href="../css/themes/icon.css" />
	<link rel="stylesheet" href="../css/index.css">
</head>
<body>
	<div id="login">
		<p><input type="text" id="userName" class="textbox"  style="width:220px;height:30px;" placeholder="请输入用户名"></p>
		<p><input type="password" id="passWord" class="textbox"  style="width:220px;height:30px;" placeholder="请输入密码"></p>
		<span><input type="radio" name="type" id="student">学生</span>
		<span><input type="radio" name="type" id="teacher">老师</span>
		<span><input type="radio" name="type" id="manager">管理员</span>
	</div>

	<div id="btn">
		<a href="#" class="easyui-linkbutton">登录</a>
	</div>
	<script type="text/javascript" src="../js/jquery.min.js"></script>
	<script type="text/javascript" src="../js/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="../js/locale/easyui-lang-zh_CN.js" ></script>
	<script src="../js/index.js"></script>
</body>
	
</html>