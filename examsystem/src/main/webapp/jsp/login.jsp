<!DOCTYPE html>
<html lang="en">
<html>
<head>
	<meta charset="utf-8">
	<title>login</title>
	<link rel="stylesheet" href="../css/login.css"></head>
</head>
<body background="../images/background.png">
	<form action="" id="loginWindow" method="post">
		<div class="title"><p>学生考试管理系统</p></div>
		<div class="text_in"><input type="text" id="userName" class="input" placeholder="用户名"><span class="img">&#xe971;</span></div>
		<div class="text_in"><input type="text" id="passWord" class="input" placeholder="密码"><span class="img">&#xe955;</span></div>
		<div class="radio">
			<span><input type="radio" name="type" id="student">学生</span>
			<span><input type="radio" name="type" id="teacher">老师</span>
			<span><input type="radio" name="type" id="manager">管理员</span>
		</div>
		<button id="login" onclick="login()">登陆</button>
	</form>
	</script>
</body>
</html>