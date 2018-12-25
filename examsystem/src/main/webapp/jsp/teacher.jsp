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
<body onload="getInfo()">
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
      <li><a id="slide5" class="waves-effect" href="#!"><i class="icon-pencil"></i>管理试题</a></li>
   		<li><a id="slide6" class="waves-effect" href="#!"><i class="icon-address-book"></i>查看学生信息</a></li>
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
        	      		<span class="card-title" name="examName">考试标题</span>
        	      		<p>开始时间：</p><p name="startTime">2018-09-01 22:08</p>
                    <p>结束时间：</p><p name="endTime">2018-09-01 22:08</p>
        	    	</div>
        	   		<div class="card-action blue-grey darken-1">
        	   		  	<a href="#" name="post_exam">发布考试</a>
        	   		  	<a href="#" name="delete_exam">移除考试</a>
        	   		</div>
        		</div>
        	</div>


        	<div class="col s12 m6 l4 hoverable">
              <div class="card">
                <div class="card-content white-text amber darken-4">
                    <span class="card-title" name="examName">考试标题</span>
                    <p>开始时间：</p><p name="startTime">2018-09-01 22:08</p>
                    <p>结束时间：</p><p name="endTime">2018-09-01 22:08</p>
                </div>
                <div class="card-action blue-grey darken-1">
                    <a href="#" name="post_exam">发布考试</a>
                    <a href="#" name="delete_exam">移除考试</a>
                </div>
            </div>
          </div>

      	</div>
      	<a class="waves-effect waves-light btn"  id="CreateExam"><i class="icon-plus left"></i>创建新的考试</a>
	</div>

	<!-- 已发布的考试 -->
  	<div class="container" id="oout3">
		<div class="row">
			<h4><i class="icon-files-empty"></i> 已发布的考试</h4>


        	<div class="col s12 m6 l4 hoverable">
              <div class="card">
                <div class="card-content white-text amber darken-4">
                    <span class="card-title" name="examName_">考试标题</span>
                    <p>开始时间：</p><p name="startTime_">2018-09-01 22:08</p>
                    <p>结束时间：</p><p name="endTime_">2018-09-01 22:08</p>
                </div>
                <div class="card-action blue-grey darken-1">
                    <a href="#" name="view_exam">查看考试</a>
                </div>
            </div>
          </div>


        	<div class="col s12 m6 l4 hoverable">
              <div class="card">
                <div class="card-content white-text amber darken-4">
                    <span class="card-title" name="examName_">考试标题</span>
                    <p>开始时间：</p><p name="startTime_">2018-09-01 22:08</p>
                    <p>结束时间：</p><p name="endTime_">2018-09-01 22:08</p>
                </div>
                <div class="card-action blue-grey darken-1">
                    <a href="#" name="view_exam">查看考试</a>
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

  <!-- 修改试题 -->
  <div class="container" id="oout5">
    <div class="row">
      <h4><i class="icon-pencil"> 修改试题</i></h4>
      <form class="s12">
        <div class="col s4"></div>
        <select class="browser-default col s3" id="section2">
          <option value="" disabled selected>章节</option>
          <option value="1">第一章</option>
          <option value="2">第二章</option>
          <option value="3">第三章</option>
          <option value="4">第四章</option>
          <option value="5">第五章</option>
          <option value="6">第六章</option>
          <option value="7">第七章</option>
          <option value="8">第八章</option>
          <option value="9">第九章</option>
          <option value="10">第十章</option>
          <option value="11">第十一章</option>
        </select>
        <div class="col s0.5"></div>
        <select class="browser-default col s3" id="question_type2">
          <option value="" disabled selected>题型</option>
          <option value="选择">选择</option>
          <option value="判断">判断</option>
        </select>
        <div class="col s0.5"></div>
        <button class="btn waves-effect waves-light col s1" type="button" id="search_question2">查询</button>
      </form>
      <br><br>
      <div class="s12">
        <ul class="collection" id="question_list2">
          <p class="col s2">试题id</p>
          <p class="col s5">题目</p>
          <p class="col s2">章节</p>
          <p class="col s2">题型</p>
          <p class="col s1">操作</p>
          <li>
            <p class="col s2" name="question_id2">343</p>
            <p class="col s5">关于数据库，以下说法正确的是哪一个A.数据库...</p>
            <p class="col s2">第一章</p>
            <p class="col s2" name="type2">判断</p>
            <p class="col s1"><a href="#!" name="question_edit">修改</a></p>
          </li>
          <li>
            <p class="col s2" name="question_id2">423</p>
            <p class="col s5">关于数据库，以下说法正确的是哪一个A.数据库...</p>
            <p class="col s2">第一章</p>
            <p class="col s2" name="type2">选择</p>
            <p class="col s1"><a href="#!" name="question_edit">修改</a></p>
          </li> 
          <li>
            <p class="col s2" name="question_id2">3424</p>
            <p class="col s5">关于数据库，以下说法正确的是哪一个A.数据库...</p>
            <p class="col s2">第一章</p>
            <p class="col s2" name="type2">选择</p>
            <p class="col s1"><a href="#!" name="question_edit">修改</a></p>
          </li> 
          <li>
            <p class="col s2" name="question_id2">34</p>
            <p class="col s5">关于数据库，以下说法正确的是哪一个A.数据库...</p>
            <p class="col s2">第一章</p>
            <p class="col s2" name="type2">选择</p>
            <p class="col s1"><a href="#!" name="question_edit">修改</a></p>
          </li>                                 
        </ul>
      </div>
    </div>
    <!-- 修改选择题 -->
    <div id="choose_detail2" class="modal bottom-sheet">
      <div class="modal-content">
          <form class="col s12">
            <div class="row" id="choose2">
              <h5 class="col s12 m2">题目ID：<h5 class="col s12 m10" id="choose_id2">题目id</h5></h5>
              <div class="input-field col s12">
                  <textarea id="choose_q2" class="materialize-textarea" placeholder="请输入选择题题目"></textarea> 
              </div>
              <div class="input-field col s12">
                <i class="prefix">A</i><input type="text" id="A2" placeholder="选项一">
                <i class="prefix">B</i><input type="text" id="B2" placeholder="选项二">
                <i class="prefix">C</i><input type="text" id="C2" placeholder="选项三">
                <i class="prefix">D</i><input type="text" id="D2" placeholder="选项四">
              </div>
              <div>
                <h4>正确答案：</h4>
                <input name="group1" type="radio" id="_A2"/>
                <label for="_A2" id="l_A2">A</label>
                <input name="group1" type="radio" id="_B2"/>
                <label for="_B2" id="l_B2">B</label>
                <input name="group1" type="radio" id="_C2"/>
                <label for="_C2" id="l_C2">C</label>
                <input name="group1" type="radio" id="_D2"/>
                <label for="_D2" id="l_D2">D</label>
              </div>
              <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-light btn" id="save_choose2">保存修改</a>
              </div>
            </div>
          </form>
      </div>      
    </div>
    <!-- 修改判断题 -->
    <div id="tf_detail2" class="modal bottom-sheet">
      <div class="modal-content">
          <form class="col s12">
            <div class="row" id="TF2">
              <h5 class="col s12 m2">题目ID：<h5 class="col s12 m10" id="tf_id2">1111</h5></h5>
              <div class="input-field col s12">
                  <textarea id="TorF2" class="materialize-textarea" placeholder="请输入判断题题目"></textarea> 
              </div>
              <div>
                <h4>正确答案：</h4>
                <input name="group2" type="radio" id="_T2" value="对"/>
                <label for="_T2" id="l_T2">True</label>
                <input name="group2" type="radio" id="_F2" value="错"/>
                <label for="_F2" id="l_F2">False</label>
              </div>
              <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-light btn" id="save_tf2">保存修改</a>
              </div>
            </div>
          </form>
      </div>      
    </div>
  </div>



	<!-- 本班学生信息 -->
	<div class="container" id="oout6">
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
    		    <button class="btn waves-effect waves-light col s1" type="button" id="search_student">查询</button>
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


  <!-- 创建考试 -->
  <div class="container" id="AddExam">
    <div class="row">
      <h4><i class="icon-pencil"> 创建考试</i></h4>
      <form class="s12 form1">
        <div class="col s12">
          <div class="col s1"></div>
          <div class="input-field inline col s3">
            <input id="exam_name" type="email" class="validate">
            <label for="exam_name">请输入考试标题</label>
          </div>
          <div class="col s2.5">
              设置考试日期：
              <div class="input-field inline"><input id="exam_date" type="date" min="2018-12-10 "></div>
          </div>
          <div class="col s5.5">
              设置考试时间：
              <div class="input-field inline"><input type="time" id="start_time"></div>
              至
              <div class="input-field inline"><input type="time" id="end_time"></div>
          </div>
        </div>

          <h4 style="text-align: center;">选择题</h4>
        <div class="col s12">
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div> 
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone" name="c_selected" style="margin: 10px 15px;">未选</div>
          <br/><br/><br/><br/>
        </div>        
        <h4 style="text-align: center;">判断题</h4>
        <div class="col s12">
          
          <div class="white-text col s2 stone stone1" name="tf_selected" style="margin: 10px 15px;">未选</div> 
          <div class="white-text col s2 stone stone1" name="tf_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone stone1" name="tf_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone stone1" name="tf_selected" style="margin: 10px 15px;">未选</div>
          <div class="white-text col s2 stone stone1" name="tf_selected" style="margin: 10px 15px;">未选</div>
        </div>

        <div class="aa col s12">
          <div class="col s1"></div>
          <button class="btn cyan darken-2 col s2 push-s2" type="button" id="empty_selected">清空</button>
          <div class="col s1"></div>
          <button class="btn cyan darken-2 col s2 push-s2" type="button" id="save_paper">保存试卷</button>
          <br><br>
        </div>
      </form>
      
      <div class="divider"></div>
      <div class="divider"></div>

      <form class="s12">
        <div class="col s4"></div>
        <select class="browser-default col s3" id="section">
          <option value="" disabled selected>章节</option>
          <option value="1">第一章</option>
          <option value="2">第二章</option>
          <option value="3">第三章</option>
          <option value="4">第四章</option>
          <option value="5">第五章</option>
          <option value="6">第六章</option>
          <option value="7">第七章</option>
          <option value="8">第八章</option>
          <option value="9">第九章</option>
          <option value="10">第十章</option>
          <option value="11">第十一章</option>
        </select>
        <div class="col s0.5"></div>
        <select class="browser-default col s3" id="question_type">
          <option value="" disabled selected>题型</option>
          <option value="选择">选择</option>
          <option value="判断">判断</option>
        </select>
        <div class="col s0.5"></div>
        <button class="btn waves-effect waves-light col s1" type="button" id="search_question">查询</button>
      </form>
      <div class=""></div>
      <div class=" col s12">
        <ul class="collection" id="question_list">
          <p class="col s2">试题id</p>
          <p class="col s5">题目</p>
          <p class="col s1">章节</p>
          <p class="col s2">题型</p>
          <p class="col s2">操作</p>
          <li>
            <p class="col s2" name="question_id">343</p>
            <p class="col s5">关于数据库，以下说法正确的是哪一个A.数据库...</p>
            <p class="col s1">第一章</p>
            <p class="col s2" name="type">判断</p>
            <p class="col s1"><a href="#!" name="detail">详情</a></p>
            <p class="col s1"><a href="#!" name="addtolist">添加</a></p>
          </li>
          <li>
            <p class="col s2" name="question_id">34233</p>
            <p class="col s5">关于数据库，以下说法正确的是哪一个A.数据库...</p>
            <p class="col s1">第一章</p>
            <p class="col s2" name="type">判断</p>
            <p class="col s1"><a href="#!" name="detail">详情</a></p>
            <p class="col s1"><a href="#!" name="addtolist">添加</a></p>
          </li>
          <li>
            <p class="col s2" name="question_id">423</p>
            <p class="col s5">关于数据库，以下说法正确的是哪一个A.数据库...</p>
            <p class="col s1">第一章</p>
            <p class="col s2" name="type">选择</p>
            <p class="col s1"><a href="#!" name="detail">详情</a></p>
            <p class="col s1"><a href="#!" name="addtolist">添加</a></p>
          </li> 
        </ul>
      </div>
    </div>
    <!-- 查看选择题 -->
    <div id="choose_detail" class="modal bottom-sheet">
      <div class="modal-content col s12">
        <div class="row" id="choose_content">
          <h5 class="col s12 m2">题目ID：<h5 class="col s12 m10" id="choose_id">题目id</h5></h5>
          <div class="input-field col s8">
              <textarea disabled id="choose_question" class="materialize-textarea"></textarea> 
          </div>
          <div class="input-field col s12">
            <p id="right_choose">选项一</p>
            <p id="B_choose">选项二</p>
            <p id="C_choose">选项三</p>
            <p id="D_choose">选项四</p>
          </div>
        </div>
      </div>      
    </div>
    <!-- 修改判断题 -->
    <div id="tf_detail" class="modal bottom-sheet">
      <div class="modal-content col s12">
        <div class="row" id="TF_content">
          <h5 class="col s12 m2">题目ID：<h5 class="col s12 m10" id="tf_id">1111</h5></h5>
          <div class="input-field col s12">
              <textarea disabled id="TorF_question" class="materialize-textarea"></textarea> 
          </div>
          <div>
            <h4>答案：</h4>
            <p id="tf_answer"></p>
          </div>
        </div>
      </div>      
    </div>
  </div>



  	<script src="../js/jquery.min.js"></script>
	<script src="../js/materialize.min.js"></script>
  	<script src="../js/teacher.js"></script>
</body>
</html>