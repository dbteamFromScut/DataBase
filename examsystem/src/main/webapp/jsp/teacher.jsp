<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Teacher</title>
	<link rel="stylesheet" href="../css/materialize.min.css">
	<link rel="stylesheet" href="../css/icomoon.css">
	<link rel="stylesheet" href="../css/teacher.css">
	<script src="../js/teacher.js"></script>
</head>
<body onload="getTeacherInfo()">
	<!-- 导航栏 -->
	<nav>
    	<div class="nav-wrapper">
    		<a href="#" class="brand-logo">Logo</a>
    			<ul class="right">
    				<li><button class="button-collapse waves-effect tooltipped" data-position="right" data-delay="50" data-tooltip="菜单"  data-activates="slide-out" id="menu"><i class="icon-menu"></i></button></li>
    				<li><a class="waves-effect" href="#">姓名</a></li>
    				<li><a class="waves-effect" href="#">教师</a></li>
    				<li><a class="waves-effect" href="#modal1">注销</a></li>
    				<li><a class="waves-effect tooltipped" data-position="left" data-delay="50" data-tooltip="修改密码" id="change"><i class="icon-key"></i></a></li>
    			</ul>
    	</div>
  	</nav>
  	<!-- 注销确认 -->
  	<div id="modal1" class="modal l6">
    	<div class="modal-content">
      		<h6>你确定退出当前账号吗？</h6>
    	</div>
    	<div class="modal-footer">
      		<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat" id="logout">确定</a>
      		<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">取消</a>
    	</div>
  	</div>

  	<div id="cover">
  		<h1>Welcome</h1>
  	</div>

  	<!-- 修改密码 -->
    <div class="container" id="changePassword">
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6 push-s3">
                        <i class="icon-user prefix"></i>
                        <input id="oldpassword" type="text" class="validate">
                        <label for="oldpassword">原密码</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6 push-s3">
                        <i class="icon-key prefix"></i>
                        <input id="newpassword" type="tel" class="validate"  >
                        <label for="newpassword">新密码</label>
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
      			<img class="circle" src="../images/Teacher_female.png">
      			<span class="white-text name">张三</span>
      			<span class="white-text email">jdandturk@sina.com</span>
    		</div>
    	</li>
    	<li><a href="#!"><i class="icon-newspaper"></i>学院</a></li>
   		<li><a href="#!"><i class="icon-users"></i>班级</a></li>
   		<li><div class="divider"></div></li>
   		<li><a class="subheader">其他选项</a></li>
   		<li><a id="slide1" class="waves-effect" href="#!" data-activates="slide-out2"><i class="icon-user"></i>基本信息</a></li>
   		<li><a id="slide2" class="waves-effect" href="#!"><i class="icon-alarm"></i>创建/发布考试</a></li>
   		<li><a id="slide3" class="waves-effect" href="#!"><i class="icon-history"></i>已发布的考试</a></li>
   		<li><a id="slide4" class="waves-effect" href="#!"><i class="icon-plus"></i>添加题目</a></li>
   		<li><a id="slide5" class="waves-effect" href="#!"><i class="icon-address-book"></i>查看学生信息</a></li>
  	</ul>



  	<!-- 页面内容 -->
  	<!-- 基本信息 -->
  	<div class="container" id="oout1">
		<div class="row">
			<h4>基本信息</h4>
    		<form class="col s12">
    		  	<div class="row">
    		    	<div class="input-field col s3">
    		    		<i class="icon-price-tag prefix"></i>
    		      		<input disabled id="name" type="text" class="validate" value="教师姓名">
    		      		<label for="name">姓名</label>
    		    	</div>
    		    	<div class="input-field col s3">
    		    		<i class="prefix icon-star-full"></i>
    		    	  	<input disabled id="id" type="text" class="validate" value="201630600000">
    		    	  	<label for="id">教职工号</label>
    		    	</div>
    		    	<div class="input-field col s2">
    		    		<i class="prefix icon-man-woman"></i>
    		    	  	<input disabled id="sex" type="text" class="validate" value="女">
    		    	  	<label for="sex">性别</label>
    		    	</div>
    		  	</div>
    		  	<div class="row">
    		    	<div class="input-field col s4">
    		    		<i class="prefix icon-tree"></i>
    		    	  	<input disabled value="计算机科学与工程学院" id="college" type="text" class="validate">
    		    	  	<label for="college">学院</label>
    		    	</div>
    		    	<div class="input-field col s3">
    		    		<i class="prefix icon-profile"></i>
    		    	  	<input disabled value="1980-08-11" id="birthday" type="text" class="validate">
    		    	  	<label for="birthday">生日</label>
    		    	</div>    		       	
    		  	</div>
    		  	<div class="row">
    		    	<div class="input-field col s5">
    		    		<i class="prefix icon-home3"></i>
    		    	  	<input disabled id="address" type="text" class="validate" value="华南理工大学大学城校区C12-300">
    		    	  	<label for="address">住址</label>
    		    	</div>
    		  	</div>
    		  	<div class="row">
    		  		<div class="input-field col s5">
    		  			<i class="prefix icon-phone"></i>
    		    	  	<input disabled id="phone" type="email" class="validate" value="13500055522">
    		    	  	<label for="phone">电话号码</label>
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

  	<!-- 创建/发布考试 -->
  	<div class="container" id="oout2">
		<div class="row">
			<h4><i class="icon-files-empty"></i> 已创建的考试</h4>


        	<div class="col s12 m6 l4 hoverable">
        	  	<div class="card">
        	    	<div class="card-content white-text amber darken-4">
        	      		<span class="card-title">考试标题</span>
        	      		<p>考试时间：</p>
        	    	</div>
        	   		<div class="card-action blue-grey darken-1">
        	   		  	<a href="#">发布考试</a>
        	   		  	<a href="#">移除考试</a>
        	   		</div>
        		</div>
        	</div>


        	<div class="col s12 m6 l4 hoverable">
        	  	<div class="card">
        	    	<div class="card-content white-text  amber darken-4">
        	      		<span class="card-title">考试标题</span>
        	      		<p>考试时间：</p>
        	    	</div>
        	   		<div class="card-action blue-grey darken-1">
        	   		  	<a href="#">发布考试</a>
        	   		  	<a href="#">移除考试</a>
        	   		</div>
        		</div>
        	</div>


        	<div class="col s12 m6 l4 hoverable">
        	  	<div class="card">
        	    	<div class="card-content white-text amber darken-4">
        	      		<span class="card-title">考试标题</span>
        	      		<p>考试时间：</p>
        	    	</div>
        	   		<div class="card-action blue-grey darken-1">
        	   		  	<a href="#">发布考试</a>
        	   		  	<a href="#">移除考试</a>
        	   		</div>
        		</div>
        	</div>
      	</div>
      	<a class="waves-effect waves-light btn"><i class="icon-plus left"></i>创建新的考试</a>
	</div>

	<!-- 已发布的考试 -->
  	<div class="container" id="oout3">
		<div class="row">
			<h4><i class="icon-files-empty"></i> 已发布的考试</h4>


        	<div class="col s12 m6 l4 hoverable">
        	  	<div class="card">
        	    	<div class="card-content white-text amber darken-4">
        	      		<span class="card-title">考试标题</span>
        	      		<p>考试时间：</p>
        	    	</div>
        	   		<div class="card-action blue-grey darken-1">
        	   		  	<a href="#">查看考试</a>
        	   		</div>
        		</div>
        	</div>


        	<div class="col s12 m6 l4 hoverable">
        	  	<div class="card">
        	    	<div class="card-content white-text  amber darken-4">
        	      		<span class="card-title">考试标题</span>
        	      		<p>考试时间：</p>
        	    	</div>
        	   		<div class="card-action blue-grey darken-1">
        	   		  	<a href="#">查看考试</a>
        	   		</div>
        		</div>
        	</div>


        	<div class="col s12 m6 l4 hoverable">
        	  	<div class="card">
        	    	<div class="card-content white-text amber darken-4">
        	      		<span class="card-title">考试标题</span>
        	      		<p>考试时间：</p>
        	    	</div>
        	   		<div class="card-action blue-grey darken-1">
        	   		  	<a href="#">查看考试</a>
        	   		</div>
        		</div>
        	</div>
      	</div>
	</div>



	<!-- 扩充题库 -->
	<div class="container" id="oout4">
		<div class="row">
			<h4><i class="icon-file-text2"></i> 扩充题库</h4>
			<form class="card">
     			<div class="row" id="choose">
        			<div class="input-field col s8">
          				<textarea id="choose_q" class="materialize-textarea" placeholder="请输入选择题题目"></textarea>	
        			</div>
        			<div class="input-field col s6">
        				<i class="prefix">A</i><input type="text" id="A" placeholder="选项一">
        				<i class="prefix">B</i><input type="text" id="B" placeholder="选项二">
        				<i class="prefix">C</i><input type="text" id="C" placeholder="选项三">
        				<i class="prefix">D</i><input type="text" id="D" placeholder="选项四">
        			</div>
        			<div>
        				<h4>正确答案：</h4>
        				<input name="group1" type="radio" id="_A" value="A"/>
        				<label for="_A" id="l_A">A</label>
        				<input name="group1" type="radio" id="_B" value="B"/>
        				<label for="_B" id="l_B">B</label>
        				<input name="group1" type="radio" id="_C" value="C"/>
        				<label for="_C" id="l_C">C</label>
        				<input name="group1" type="radio" id="_D" value="D"/>
        				<label for="_D" id="l_D">D</label>
        			</div>
        			<a class="waves-effect waves-light btn" href="#import_choose"><i class="icon-quill"></i>提交选择题</a>
      			</div>
      			<div id="import_choose" class="modal l6">
    				<div class="modal-content">
      					<h6>确定提交这道题</h6>
    				</div>
    				<div class="modal-footer">
      					<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat" id="choose_confirm">确定</a>
      					<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">取消</a>
    				</div>
  				</div>
    		</form>

    		<form class="card">
     			<div class="row" id="TF">
        			<div class="input-field col s8">
          				<textarea id="TorF" class="materialize-textarea" placeholder="请输入判断题题目"></textarea>	
        			</div>
        			<div>
        				<h4>正确答案：</h4>
        				<input name="group2" type="radio" id="_T" value="T" />
        				<label for="_T" id="l_T">True</label>
        				<input name="group2" type="radio" id="_F" value="F" />
        				<label for="_F" id="l_F">False</label>
        			</div>
        			<a class="waves-effect waves-light btn" href="#import_tf"><i class="icon-quill"></i>提交判断题</a>
        			<br><br>
      			</div>
      			<div id="import_tf" class="modal l6">
    				<div class="modal-content">
      					<h6>确定提交这道题</h6>
    				</div>
    				<div class="modal-footer">
      					<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat" id="tf_confirm">确定</a>
      					<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">取消</a>
    				</div>
  				</div>
    		</form>

    		<form class="card">
    			<br><br>
    			<div class="col s12">
　　					<input type="file" id="input_file" class="col s3">
					<span class="col s2">(Excel文件)</span>
					<a class="waves-effect waves-light btn col s3" href="#import_file"><i class="icon-upload"></i>导入题目</a>
				</div>
				<br><br><br>
				<div id="import_file" class="modal l6">
    				<div class="modal-content">
      					<h6>确定提交这道题</h6>
    				</div>
    				<div class="modal-footer">
      					<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat" id="file_confirm">确定</a>
      					<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">取消</a>
    				</div>
  				</div>
    		</form>

      	</div>
	</div>

	<!-- 本班学生信息 -->
	<div class="container" id="oout5">
		<div class="row">
			<h4><i class="icon-users"> 学生信息</i></h4>
			<form class="s12">
    		    <div class="col s4"></div>
    		    <select class="browser-default col s3" id="grade">
    		      <option disabled selected>年级</option>
    		      
    		    </select>
    		    <div class="col s0.5"></div>
    		    <select class="browser-default col s3" id="class">
    		      <option disabled selected>班级</option>
    		      
    		    </select>
    		    <div class="col s0.5"></div>
    		    <button class="btn waves-effect waves-light col s1" type="submit" id="search_student">查询</button>
    		</form>
    		<br><br>
			<div class="s12">
			<ul class="collection" id="student_list">
      				<p class="col s2">姓名</p>
      				<p class="col s2">学号</p>
      				<p class="col s1">性别</p>
      				<p class="col s3">学院</p>
      				<p class="col s2">年级</p>
      				<p class="col s2">班级</p>
      			<li>
      				<p class="col s2">大哥哥</p>
      				<p class="col s2">201630600000</p>
      				<p class="col s1">男</p>
      				<p class="col s3">计算机科学与工程学院</p>
      				<p class="col s2">2016</p>
      				<p class="col s2">网络工程班</p>
      			</li>
      			<li>
      				<p class="col s2">大哥哥</p>
      				<p class="col s2">201630600000</p>
      				<p class="col s1">男</p>
      				<p class="col s3">计算机科学与工程学院</p>
      				<p class="col s2">2016</p>
      				<p class="col s2">网络工程班</p>
      			</li>
      			<li>
      				<p class="col s2">大哥哥</p>
      				<p class="col s2">201630600000</p>
      				<p class="col s1">男</p>
      				<p class="col s3">计算机科学与工程学院</p>
      				<p class="col s2">2016</p>
      				<p class="col s2">网络工程班</p>
      			</li>      			
    		</ul>
    		</div>

      	</div>
	</div>




  	<script src="../js/jquery.min.js"></script>
	<script src="../js/materialize.min.js"></script>
  	<script src="../js/teacher.js"></script>
</body>
</html>