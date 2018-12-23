<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Student</title>
	<link rel="stylesheet" href="../css/materialize.min.css">
	<link rel="stylesheet" href="../css/icomoon.css">
	<link rel="stylesheet" href="../css/student.css">
</head>
<body onload="getStudentInfo()">

	<!-- 导航栏 -->
    <div class="navbar-fixed">
	<nav>
    	<div class="nav-wrapper">
    		<a href="#" class="brand-logo">在线考试系统</a>
    			<ul class="right">
    				<li><button class="button-collapse waves-effect tooltipped" data-position="right" data-delay="50" data-tooltip="菜单"  data-activates="slide-out" id="menu"><i class="icon-menu"></i></button></li>
    				<li><a class="waves-effect" href="#">姓名</a></li>
    				<li><a class="waves-effect" href="#">学生</a></li>
    				<li><a class="waves-effect" href="#modal1">注销</a></li>
                    <li><a class="waves-effect tooltipped" data-position="left" data-delay="50" data-tooltip="修改密码" id="change"><i class="icon-key"></i></a></li>
    			</ul>
    	</div>
  	</nav>
    </div>
    <!-- 退出账号提示 -->
	<div id="modal1" class="modal l6">
    	<div class="modal-content">
      		<h6>你确定退出当前账号吗？</h6>
    	</div>
    	<div class="modal-footer">
      		<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat" id="logout">确定</a>
      		<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">取消</a>
    	</div>
  	</div>

    <!-- 修改密码 -->
    <div class="container" id="changePassword">
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6 push-s3">
                        <i class="icon-user prefix"></i>
                        <input id="oldpassword" type="password" class="validate">
                        <label for="oldpassword">原密码</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s6 push-s3">
                        <i class="icon-key prefix"></i>
                        <input id="newpassword" type="password" class="validate"  >
                        <label for="newpassword">新密码</label>
                    </div>
                </div>

                 <div class="row">
                    <div class="input-field col s6 push-s3">
                        <i class="icon-key prefix"></i>
                        <input id="newpassword2" type="password" class="validate"  >
                        <label for="newpassword2">确认新密码</label>
                    </div>
                </div>
                <div class="row">
                    <!-- <div></div> -->
                    <a href="#" class="col btn push-s3 s2" id="yes">确定</a>
                    <a href="#" class="col btn s2 push-s4" id="cancel">取消</a>
                </div>
            </form>
        </div>
    </div>

    <!-- 侧边导航栏-->
	<ul id="slide-out" class="side-nav">
    	<li>
    		<div class="userView">
      			<div class="background">
        			<img src="../images/t6.jpg">
      			</div>
      			<img class="circle" src="../images/t2.jpg">
      			<span id="Sname" class="white-text name">张三</span>
      			<span id="Semail" class="white-text email">jdandturk@sina.com</span>
    		</div>
    	</li>
    	<li><a id="college2" href="#!"><i class="icon-newspaper"></i>学院</a></li>
   		<li><a id="class2" href="#!"><i class="icon-users"></i>班级</a></li>
   		<li><div class="divider"></div></li>
   		<li><a class="subheader">其他选项</a></li>
   		<li><a id="slide1" class="waves-effect" href="#!" data-activates="slide-out2"><i class="icon-user"></i>基本信息</a></li>
   		<li><a id="slide2" class="waves-effect" href="#!"><i class="icon-alarm"></i>需完成考试</a></li>
   		<li><a id="slide3" class="waves-effect" href="#!"><i class="icon-history"></i>已完成考试</a></li>
  	</ul>
  	


	<!-- 页面内容 -->
  	<div class="container" id="oout1">
		<div class="row">
			<h4>基本信息</h4>
    		<form class="col s12">
    		  	<div class="row">
    		    	<div class="input-field col s3">
    		    		<i class="icon-price-tag prefix"></i>
    		      		<input disabled id="first_name" type="text" class="validate" value="糖好酸">
    		      		<label for="first_name">姓名</label>
    		    	</div>
    		    	<div class="input-field col s3">
    		    		<i class="prefix icon-star-full"></i>
    		    	  	<input disabled id="StudentNumber" type="text" class="validate" value="2016000000">
    		    	  	<label for="StudentNumber">学号</label>
    		    	</div>
    		    	<div class="input-field col s2">
    		    		<i class="prefix icon-man-woman"></i>
    		    	  	<input disabled id="sex" type="text" class="validate" value="女">
    		    	  	<label for="sex">性别</label>
    		    	</div>
    		  	</div>
    		  	<div class="row">
    		    	<div class="input-field col s5">
    		    		<i class="prefix icon-tree"></i>
    		    	  	<input disabled value="计算机科学与工程学院" id="college" type="text" class="validate">
    		    	  	<label for="college">学院</label>
    		    	</div>
    		    	<div class="input-field col s3">
    		    		<i class="prefix icon-profile"></i>
    		    	  	<input disabled value="2016级" id="grade" type="text" class="validate">
    		    	  	<label for="grade">年级</label>
    		    	</div>
    		    	<div class="input-field col s3">
    		    		<i class="prefix icon-address-book"></i>
    		    	  	<input disabled value="16网络工程" id="class" type="text" class="validate">
    		    	  	<label for="class">班级</label>
    		    	</div>
    		  	</div>
    		  	<div class="row">
    		    	<div class="input-field col s5">
    		    		<i class="prefix icon-home3"></i>
    		    	  	<input disabled id="address" type="text" class="validate" value="华南理工大学大学城校区C12-300">
    		    	  	<label for="address">住址</label>
    		    	</div>
                    <div class="input-field col s5">
                        <i class="prefix icon-reddit"></i>
                        <input disabled id="birthday" type="text" class="validate" value="1993.03">
                        <label for="birthday">出生年月</label>
                    </div>
    		  	</div>
    		  	<div class="row">
    		  		<div class="input-field col s5">
    		  			<i class="prefix icon-phone"></i>
    		    	  	<input disabled id="phoneNumbr" type="text" class="validate" value="13500055522">
    		    	  	<label for="phoneNumbr">电话号码</label>
    		    	</div>
    		    	<div class="input-field col s5">
    		    		<i class="prefix icon-envelop"></i>
    		    	  	<input disabled id="email" type="email" class="validate" value="1111111@qq.com">
    		    	  	<label for="email">邮箱</label>
    		    	</div>
    		  	</div>
    		  	
                <div class="row">
                    <div class="input-field col s4 offset-s5">
                        <a href="#" class="btn" id="changeInfo">修改信息</a>
                    </div>
                    <div class="input-field col s8 offset-s3">
                        <a href="#" class="btn" id="confirmChange">确定</a>
                        <a href="#" class="btn" id="cancelChange">取消</a>
                    </div>
                </div>
    		</form>
  		</div>
  	</div>

    <!-- 等待完成的考试 -->
	<div class="container" id="oout2">
		<div class="row">
			<h4><i class="icon-files-empty"></i>需完成考试</h4>

            <!-- dv1 -->
        	<!-- <div class="col s12 m6 l4 hoverable"> -->
                <!-- dv2 -->
        	  	<!-- <div class="card"> -->
                    <!-- dv3 -->
        	    	<!-- <div class="card-content white-text amber darken-4"> -->
        	      		<!-- <span class="card-title">考试标题</span> -->
        	      		<!-- <p>开始时间：</p><p name="startTime">2018-09-01 22:08</p> -->
                        <!-- <p>结束时间：</p><p name="endTime">2018-09-01 22:08</p> -->
        	    	<!-- </div> -->

                    <!-- dv4 -->
        	   		<!-- <div class="card-action blue-grey darken-1"> -->
        	   		  	<!-- <a href="#">进入考试</a> -->
        	   		<!-- </div> -->
        		<!-- </div> -->
        	<!-- </div> -->

            
        	

      	</div>
	</div>

    <!-- 已经完成的考试 -->
	<div class="container" id="oout3">
		<div class="row">
			<h4><i class="icon-file-text2"></i>已完成考试</h4>
                

        	

      	</div>
	</div>


	<script src="../js/jquery.min.js"></script>
	<script src="../js/materialize.min.js"></script>
  	<script src="../js/student.js"></script>
</body>
</html>