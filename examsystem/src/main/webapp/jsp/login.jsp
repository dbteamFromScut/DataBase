<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isELIgnored="false" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
    <link rel="stylesheet" type="text/css" href="../css/themes/default/easyui.css" />
    <link rel="stylesheet" type="text/css" href="../css/themes/icon.css" />
    <link rel="stylesheet" href="../css/index.css">
    <script type="text/javascript" src="../js/jquery.min.js"></script>
    <script type="text/javascript" src="../js/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="../js/locale/easyui-lang-zh_CN.js" ></script>
    <script src="../js/script1.js"></script>
</head>
<body>
<div id="eT" class="easyui-dialog" style="width:400px;height:280px;padding:10px 20px"
     closed="false" buttons="#login_btn">
    <form id="eTfm" method="post">
        <div class="fitem">
            <input id="userName" class="easyui-validatebox" name="username" style="width:200px;" placeholder="请输入用户名">
        </div>
        <div class="fitem">
            <input id="passWord" name="passWord" class="easyui-validatebox"  style="width:200px;" placeholder="请输入密码">
        </div>
        <div class="fitem">
            <span><input type="radio" name="type" id="student">学生</span>
            <span><input type="radio" name="type" id="teacher">老师</span>
            <span><input type="radio" name="type" id="manager">管理员</span>
        </div>
    </form>
</div>
<div id="login_btn">
    <a href="" class="easyui-linkbutton" onclick="login()" style="align-self: center">登录</a>
    <a href="/login" class="easyui-linkbutton" style="align-self: center">登录</a>

</div>

</body>

</html>