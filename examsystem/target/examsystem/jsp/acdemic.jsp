<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Acdemic Dean</title>
	<link rel="stylesheet" href="../css/materialize.min.css">
	<link rel="stylesheet" href="../css/icomoon.css">
	<link rel="stylesheet" href="../css/acdemic.css">
  <script src="../js/student.js"></script>
</head>
<body onload="getAllList()">
	<!-- 导航栏 -->
	<nav>
    	<div class="nav-wrapper">
    		<a href="/acdemic" class="brand-logo">在线考试系统</a>
    			<ul class="right">
    				<li><button class="button-collapse waves-effect tooltipped" data-position="right" data-delay="50" data-tooltip="菜单"  data-activates="slide-out" id="menu"><i class="icon-menu"></i></button></li>
    				<li><a  class="waves-effect" href="#">姓名</a></li>
    				<li><a class="waves-effect" href="#">教务员</a></li>
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

  	<div id="cover">
  		<h1>Welcome</h1>
  	</div>

  <!-- 侧边导航栏-->
	<ul id="slide-out" class="side-nav">
    	<li>
    		<div class="userView">
      			<div class="background">
        			<img src="../images/t6.jpg">
      			</div>
      			<img class="circle" src="../images/dean.png">
      			<span class="white-text name">张三</span>
      			<span class="white-text email">jdandturk@sina.com</span>
    		</div>
    	</li>
    	<li><a href="#!"><i class="icon-newspaper"></i>计算机科学与工程学院</a></li>
   		<li><div class="divider"></div></li>
   		<li><a class="subheader">其他选项</a></li>
   		<li><a id="slide1" class="waves-effect" href="#!" data-activates="slide-out2"><i class="icon-user"></i>管理教师信息</a></li>
   		<li><a id="slide2" class="waves-effect" href="#!"><i class="icon-users"></i>管理学生信息</a></li>
  	</ul>


  <!-- 所有教师信息 -->
	<div class="container" id="oout1">
    <h5><i class="icon-address-book"> 导入新用户</i></h5>
    <form class="row">
      <div class="input-field col s2">
          <input id="new_t_name" type="text" class="validate" value="">
          <label for="new_t_name">姓名</label>
      </div>
      <div class="input-field col s1">       
          <input id="new_t_sex" type="text" class="validate" value="">
          <label for="new_t_sex">性别</label>
      </div>
      <div class="input-field col s2">
          <input id="new_t_id" type="text" class="validate" value="">
          <label for="new_t_id">教职工号</label>
      </div>
      <div class="input-field col s3">
          <input id="new_t_college" type="text" class="validate" value="">
          <label for="new_t_college">学院</label>
      </div>
      <button class="btn waves-effect waves-light col s2" type="button" id="addNewTeacher">添加新用户</button>
    </form>
    <form class="row">
      <h5><i class="icon-address-book col s3"> 导入Excel文件</i></h5>
      <input type="file" id="teacher_file" class="col s3">
      <div class="col s2"></div>
      <button class="btn waves-effect waves-light col s2" type="button" id="addNewTeacherFile">导入文件</button>
    </form>
    <br>
		<div class="row">
			<h4><i class="icon-users"> 系统中的教师信息</i></h4>
			<div class="s12">
			  <ul class="collection" id="allteacher">
      		<p class="col s2">姓名</p>
      		<p class="col s3">职工号</p>
      		<p class="col s2">性别</p>
      		<p class="col s3">学院</p>
      		<p class="col s2">操作</p>
      		<li>
      			<p class="col s2">大哥哥</p>
      			<p class="col s3" name="teacher_id">201630600000</p>
      			<p class="col s2">男</p>
      			<p class="col s3">计算机科学与工程学院</p>
      			<p class="col s2"><a href="#teacher_detail" name="teacher_edit">修改</a></p>
      		</li>
      		<li>
      			<p class="col s2">大哥哥</p>
      			<p class="col s3" name="teacher_id">201630603000</p>
      			<p class="col s2">男</p>
      			<p class="col s3">计算机科学与工程学院</p>
      			<p class="col s2"><a href="#teacher_detail" name="teacher_edit">修改</a></p>
      		</li>      			      			    			
    		</ul>
    	</div>
    </div>
    <!-- 修改老师信息 -->
    <div id="teacher_detail" class="modal bottom-sheet">
      <div class="modal-content">
          <form class="col s12">
            <a href="#!" class="modal-action modal-close waves-effect waves-light btn" id="default_teacher">初始化用户密码</a>
            <div class="row">
              <div class="input-field col s3">
                <i class="icon-price-tag prefix"></i>
                  <input id="t_name" type="text" class="validate" value="教师姓名">
                  <label for="t_name">姓名</label>
              </div>
              <div class="input-field col s3">
                <i class="prefix icon-star-full"></i>
                  <input disabled id="t_id" type="text" class="validate" value="201630600000">
                  <label for="t_id">教职工号</label>
              </div>
              <div class="input-field col s2">
                <i class="prefix icon-man-woman"></i>
                  <input id="t_sex" type="text" class="validate" value="女">
                  <label for="t_sex">性别</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s4">
                <i class="prefix icon-tree"></i>
                  <input value="计算机科学与工程学院" id="t_college" type="text" class="validate">
                  <label for="t_college">学院</label>
              </div>
              <div class="input-field col s3">
                <i class="prefix icon-profile"></i>
                  <input value="1980-08-11" id="t_birthday" type="text" class="validate">
                  <label for="t_birthday">生日</label>
              </div>                
            </div>
            <div class="row">
              <div class="input-field col s5">
                <i class="prefix icon-home3"></i>
                  <input id="t_address" type="text" class="validate" value="华南理工大学大学城校区C12-300">
                  <label for="t_address">住址</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s5">
                <i class="prefix icon-phone"></i>
                  <input id="t_phone" type="email" class="validate" value="13500055522">
                  <label for="t_phone">电话号码</label>
              </div>
              <div class="input-field col s5">
                <i class="prefix icon-envelop"></i>
                  <input id="t_email" type="email" class="validate" value="1111111@qq.com">
                  <label for="t_email">邮箱</label>
              </div>
            </div> 
            <div class="modal-footer">
              <a href="#!" class="modal-action modal-close waves-effect waves-light btn" id="save_teacher">保存修改</a>
            </div>           
        </form>
      </div>
    </div>
	</div>



  <!-- 所有学生信息 -->
  <div class="container" id="oout2">
    <h5><i class="icon-address-book"> 导入新用户</i></h5>
    <form>
      <div class="row">
        <div class="input-field col s1">
            <input id="new_s_name" type="text" class="validate" value="">
            <label for="new_s_name">姓名</label>
        </div>
        <div class="input-field col s1">       
            <input id="new_s_sex" type="text" class="validate" value="">
            <label for="new_s_sex">性别</label>
        </div>
        <div class="input-field col s2">
            <input id="new_s_id" type="text" class="validate" value="">
            <label for="new_s_id">学号</label>
        </div>
        <div class="input-field col s2">
            <input id="new_s_college" type="text" class="validate" value="">
            <label for="new_s_college">学院</label>
        </div>
        <div class="input-field col s1">
            <input value="" id="new_s_grade" type="text" class="validate">
            <label for="new_s_grade">年级</label>
        </div>
        <div class="input-field col s2">
            <input value="" id="new_s_class" type="text" class="validate">
            <label for="new_s_class">班级</label>
        </div>
        <button class="btn waves-effect waves-light col s2" type="button" id="addNewStudent">添加新用户</button>
      </div>
    </form>
    <form class="row">
      <h5><i class="icon-address-book col s4"> 导入Excel文件</i></h5>
      <input type="file" id="student_file" class="col s4">
      <div class="col s1"></div>
      <button class="btn waves-effect waves-light col s2" type="button" id="addNewStudentFile">导入文件</button>
    </form>
    <br>
    <div class="row">
      <h4><i class="icon-users"> 学生信息</i></h4>
      <form class="s12">
        <div class="col s4"></div>
        <select class="browser-default col s3" id="grade">
          <option value="" disabled selected>年级</option>
          <option value="1">2015级</option>
          <option value="2">2016级</option>
          <option value="3">2017级</option>
        </select>
        <div class="col s0.5"></div>
        <select class="browser-default col s3" id="class">
          <option value="" disabled selected>班级</option>
          <option value="1">计科1班</option>
          <option value="2">计科2班</option>
          <option value="3">网络工程</option>
          <option value="4">信息安全</option>
          <option value="5">计联计创</option>
        </select>
        <div class="col s0.5"></div>
        <button class="btn waves-effect waves-light col s1" type="button" id="search_student">查询</button>
      </form>
      <br><br>
      <div class="s12">
      <ul class="collection" id="student_list">
              <p class="col s2">姓名</p>
              <p class="col s2">学号</p>
              <p class="col s1">性别</p>
              <p class="col s1">年级</p>
              <p class="col s2">班级</p>
              <p class="col s3">学院</p>
              <p class="col s1">操作</p>
            <li>
              <p class="col s2">大哥哥</p>
              <p class="col s2" name="student_id">201630600000</p>
              <p class="col s1">男</p>
              <p class="col s1">2016级</p>
              <p class="col s2">网络工程班</p>
              <p class="col s3">计算机科学与工程学院</p>
              <p class="col s1"><a href="#student_detail" name="student_edit">修改</a></p>
            </li>
            <li>
              <p class="col s2">大哥哥</p>
              <p class="col s2" name="student_id">201630650000</p>
              <p class="col s1">男</p>
              <p class="col s1">2016级</p>
              <p class="col s2">网络工程班</p>
              <p class="col s3">计算机科学与工程学院</p>
              <p class="col s1"><a href="#student_detail" name="student_edit">修改</a></p>
            </li>                                 
        </ul>
      </div>
    </div>
    <!-- 修改学生信息-->
    <div id="student_detail" class="modal bottom-sheet">
      <div class="modal-content">
          <form class="col s12">
            <a href="#!" class="modal-action modal-close waves-effect waves-light btn" id="default_student">初始化用户密码</a>
            <div class="row">
              <div class="input-field col s3">
                <i class="icon-price-tag prefix"></i>
                  <input id="s_name" type="text" class="validate" value="糖好酸">
                  <label for="s_name">姓名</label>
              </div>
              <div class="input-field col s3">
                <i class="prefix icon-star-full"></i>
                  <input disabled id="s_id" type="text" class="validate" value="201630600000">
                  <label for="s_id">学号</label>
              </div>
              <div class="input-field col s2">
                <i class="prefix icon-man-woman"></i>
                  <input id="s_sex" type="text" class="validate" value="女">
                  <label for="s_sex">性别</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s5">
                <i class="prefix icon-tree"></i>
                  <input value="计算机科学与工程学院" id="s_college" type="text" class="validate">
                  <label for="s_college">学院</label>
              </div>
              <div class="input-field col s3">
                <i class="prefix icon-profile"></i>
                  <input value="2016级" id="s_grade" type="text" class="validate">
                  <label for="s_grade">年级</label>
              </div>
              <div class="input-field col s3">
                <i class="prefix icon-address-book"></i>
                  <input value="16网络工程" id="s_class" type="text" class="validate">
                  <label for="s_class">班级</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s5">
                <i class="prefix icon-home3"></i>
                  <input id="s_address" type="text" class="validate" value="华南理工大学大学城校区C12-300">
                  <label for="s_address">住址</label>
              </div>
                    <div class="input-field col s5">
                        <i class="prefix icon-reddit"></i>
                        <input id="s_birthday" type="text" class="validate" value="1993.03">
                        <label for="s_birthday">出生年月</label>
                    </div>
            </div>
            <div class="row">
              <div class="input-field col s5">
                <i class="prefix icon-phone"></i>
                  <input id="s_phone" type="text" class="validate" value="13500055522">
                  <label for="s_phone">电话号码</label>
              </div>
              <div class="input-field col s5">
                <i class="prefix icon-envelop"></i>
                  <input id="s_email" type="email" class="validate" value="1111111@qq.com">
                  <label for="s_email">邮箱</label>
              </div>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-action modal-close waves-effect waves-light btn" id="save_student">保存修改</a>
            </div>
          </form>
      </div>     
    </div>
  </div>







	<script src="../js/jquery.min.js"></script>
	<script src="../js/materialize.min.js"></script>
  	<script src="../js/acdemic.js"></script>
</body>
</html>