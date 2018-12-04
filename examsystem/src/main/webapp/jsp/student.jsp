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
<body>

	<!-- 导航栏 -->
	<nav>
    	<div class="nav-wrapper">
    		<a href="#" class="brand-logo">Logo</a>
    			<ul class="right">
    				<li><button id="menu" data-activates="slide-out" class="button-collapse waves-effect"><i class="icon-menu"></i></button></li>
    				<li><a class="waves-effect" href="#">姓名</a></li>
    				<li><a class="waves-effect" href="#">学生</a></li>
    				<li><a class="waves-effect" href="#modal1">注销</a></li>
    			</ul>
    	</div>
  	</nav>

	<div id="modal1" class="modal l6">
    	<div class="modal-content">
      		<h6>你确定退出当前账号吗？</h6>
    	</div>
    	<div class="modal-footer">
      		<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat" id="logout">确定</a>
      		<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">取消</a>
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
      			<span class="white-text name">张三</span>
      			<span class="white-text email">jdandturk@sina.com</span>
    		</div>
    	</li>
    	<li><a href="#!"><i class="icon-newspaper"></i>学院</a></li>
   		<li><a href="#!"><i class="icon-users"></i>班级</a></li>
   		<li><div class="divider"></div></li>
   		<li><a class="subheader">其他选项</a></li>
   		<li><a id="slide1" class="waves-effect" href="#!" data-activates="slide-out2"><i class="icon-user"></i>基本信息</a></li>
   		<li><a id="slide2" class="waves-effect" href="#!"><i class="icon-alarm"></i>需完成考试</a></li>
   		<li><a id="slide3" class="waves-effect" href="#!"><i class="icon-history"></i>已完成考试</a></li>
  	</ul>
  	


	<!-- 页面内容 -->
  	<div class="container" id="oout1">
		<div class="row">
			<h4>基本信息</h3>
    		<form class="col s12">
    		  	<div class="row">
    		    	<div class="input-field col s3">
    		    		<i class="icon-price-tag prefix"></i>
    		      		<input id="first_name" type="text" class="validate" value="糖好酸">
    		      		<label for="first_name">姓名</label>
    		    	</div>
    		    	<div class="input-field col s3">
    		    		<i class="prefix icon-star-full"></i>
    		    	  	<input id="last_name" type="text" class="validate" value="201630600000">
    		    	  	<label for="last_name">学号</label>
    		    	</div>
    		    	<div class="input-field col s2">
    		    		<i class="prefix icon-man-woman"></i>
    		    	  	<input id="last_name" type="text" class="validate" value="女">
    		    	  	<label for="last_name">性别</label>
    		    	</div>
    		  	</div>
    		  	<div class="row">
    		    	<div class="input-field col s5">
    		    		<i class="prefix icon-tree"></i>
    		    	  	<input disabled value="计算机科学与工程学院" id="disabled" type="text" class="validate">
    		    	  	<label for="disabled">学院</label>
    		    	</div>
    		    	<div class="input-field col s3">
    		    		<i class="prefix icon-profile"></i>
    		    	  	<input disabled value="2016级" id="disabled" type="text" class="validate">
    		    	  	<label for="disabled">年级</label>
    		    	</div>
    		    	<div class="input-field col s3">
    		    		<i class="prefix icon-address-book"></i>
    		    	  	<input disabled value="16网络工程" id="disabled" type="text" class="validate">
    		    	  	<label for="disabled">班级</label>
    		    	</div>
    		  	</div>
    		  	<div class="row">
    		    	<div class="input-field col s5">
    		    		<i class="prefix icon-home3"></i>
    		    	  	<input id="address" type="text" class="validate" value="华南理工大学大学城校区C12-300">
    		    	  	<label for="address">住址</label>
    		    	</div>
    		  	</div>
    		  	<div class="row">
    		  		<div class="input-field col s5">
    		  			<i class="prefix icon-phone"></i>
    		    	  	<input id="email" type="email" class="validate" value="13500055522">
    		    	  	<label for="email">电话号码</label>
    		    	</div>
    		    	<div class="input-field col s5">
    		    		<i class="prefix icon-envelop"></i>
    		    	  	<input id="email" type="email" class="validate" value="1111111@qq.com">
    		    	  	<label for="email">邮箱</label>
    		    	</div>
    		  	</div>
    		  	<div class="row">
    		    	<div class="input-field col s4">
    		    		<i class="prefix icon-dice"></i>
    		    	  	<div id="last_name" type="text" class="validate chips"></div>
    		    	  	<label for="last_name">爱好</label>
    		    	</div>
    		  	</div>
    		</form>
  		</div>
  	</div>


	<div class="container" id="oout2">
		<div class="row">
			<h4><i class="icon-files-empty"></i>需完成考试</h4>


        	<div class="col s12 m6 l4 hoverable">
        	  	<div class="card">
        	    	<div class="card-content white-text amber darken-4">
        	      		<span class="card-title">考试标题</span>
        	      		<p>考试时间：</p>
        	      		<p>考试时长：</p>
        	    	</div>
        	   		<div class="card-action blue-grey darken-1">
        	   		  	<a href="#">进入考试</a>
        	   		</div>
        		</div>
        	</div>


        	<div class="col s12 m6 l4 hoverable">
        	  	<div class="card">
        	    	<div class="card-content white-text  amber darken-4">
        	      		<span class="card-title">考试标题</span>
        	      		<p>考试时间：</p>
        	      		<p>考试时长：</p>
        	    	</div>
        	   		<div class="card-action blue-grey darken-1">
        	   		  	<a href="#">进入考试</a>
        	   		</div>
        		</div>
        	</div>


        	<div class="col s12 m6 l4 hoverable">
        	  	<div class="card">
        	    	<div class="card-content white-text amber darken-4">
        	      		<span class="card-title">考试标题</span>
        	      		<p>考试时间：</p>
        	      		<p>考试时长：</p>
        	    	</div>
        	   		<div class="card-action blue-grey darken-1">
        	   		  	<a href="#">进入考试</a>
        	   		</div>
        		</div>
        	</div>
      	</div>
	</div>

	<div class="container" id="oout3">
		<div class="row">
			<h4><i class="icon-file-text2"></i>已完成考试</h4>


        	<div class="col s12 m6 l4 hoverable">
        	  	<div class="card">
        	    	<div class="card-content white-text cyan">
        	      		<span class="card-title">考试标题</span>
        	      		<p>考试时间：</p>
        	      		<p>考试时长：</p>
        	    	</div>
        	   		<div class="card-action blue-grey darken-1">
        	   		  	<a href="#">查看试卷</a>
        	   		</div>
        		</div>
        	</div>


      	</div>
	</div>
	<script src="../js/jquery.min.js"></script>
	<script src="../js/materialize.min.js"></script>
  	<script src="../js/student.js"></script>
</body>
</html>