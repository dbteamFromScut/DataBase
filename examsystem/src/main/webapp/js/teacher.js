var today=new Date();
var year=today.getFullYear();
var month=today.getMonth()+1; 
var date=today.getDate();
var today=year+"-"+month+"-"+date;
$("#exam_date").attr("min",today);
$("#exam_date").val(today);

$(document).ready(function(){
// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
 	$('.chips').material_chip();

 	 $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 400, // Transition in duration
      out_duration: 300, // Transition out duration
      starting_top: '20%', // Starting top style attribute
      ending_top: '25%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
       
        console.log(modal, trigger);
      },
      // complete: function() { alert('Closed'); } // Callback for Modal close
    });
});

//控制左侧导航栏菜单的点击切换
var slide = new Array();
var out = new Array();
var cover = document.getElementById("cover");
for (var i = 0; i < 5; i++) {
	var id1 = "slide" + (i+1);
	var id2 = "oout" + (i+1);
	slide[i] = document.getElementById(id1);
	slide[i].setAttribute("index",i);
	out[i] = document.getElementById(id2);
}
for (var i = 0; i < slide.length; i++) {
	slide[i].onclick = function() {
		for (var j = 0; j < out.length; j++) {
			console.log(j);
			out[j].style.display = "none";
		}
		cover.style.display = "none"; 
        document.getElementById("AddExam").style.display="none";
		out[this.getAttribute("index")].style.display = "block";
	}
}

//确定注销按钮
document.getElementById("logout").onclick = function(){
	//退出登录，跳转到登录界面
    $.ajax({
        url : "/logout",
        type : "POST",
        processData : false,
        contentType : false,
        success: function(result){
            if (result.code=="success"){
                alert("注销成功！")
                window.location.href = "/"
            }else {
                alert("注销失败！");
            }
        }
    });
}

//修改密码
out[5] = document.getElementById('changePassword');
document.getElementById('change').onclick = function(){
    for (var i = 0; i < out.length; i++) {
        out[i].style.display = "none";
    }
    cover.style.display = "none";
    document.getElementById("AddExam").style.display="none";
    out[5].style.display = "block";
}
//确定修改密码
document.getElementById('yes').onclick = function() {
    //发送新的密码
    var form1 = new FormData();
    var oldPassword = document.getElementById('oldpassword').value;
    var newPassword = document.getElementById('newpassword').value;
    form1.append("oldpassword",oldPassword);
    form1.append("newpassword",newPassword);
    $.ajax({
        url : "/changePassword",
        type : "POST",
        data : form1,
        processData : false,
        contentType : false,
        success: function(result){
            if (result.code=="success"){
                document.getElementById('changePassword').style.display = "none";
                alert("修改成功！")
            }else {
                alert("修改失败！");
            }
        }
    });
}
//取消修改
document.getElementById('cancel').onclick = function() {
    $(document.getElementById('changePassword')).fadeOut(500);
    $(cover).fadeIn(500);
}

function init(json) {
    $("#name").val(json.name);
    $("#id").val(json.id);
    $("#sex").val(json.sex);
    $("#college").val(json.college);
    $("#birthday").val(json.birthday);
    $("#address").val(json.address);
    $("#phone").val(json.phone);
    $("#email").val(json.email);
}
var inputs = document.getElementById('oout1').getElementsByTagName("input");

//获取老师的信息
function getTeacherInfo() {
    $.ajax({
        url : "/",
        type : "POST",
        processData : false,
        contentType : false,
        dataType : "json",
        success: function(data){
            if (data.code=="success")
            {
                init(data);
                for (var i = 0; i < inputs.length; i++) {
                    inputs[i].disabled = true;
                }
            }
        }
    });
}

//获取老师所教的班级
function getClasses(){
    //以下用于获取教师所教的班级，返回的是对应的年级class_grade和班级class_name
    var formdata=new FormData();
    var t_id=$("#id").val();
    formdata.append("id",t_id);
    var str1='<option value="" disabled selected>年级</option>';
    var str2='<option value="" disabled selected>班级</option>';
    $.ajax({
        url:"/getTeacherlass",
        type:"POST",
        processData : false,
        contentType : false,
        async : false,
        data:formdata,
        dataType:"json",
        success:function(result){
            if (result){
                $("#grade").empty();
                $("#class").empty();
                for(var i=0;i<result.length;i++){
                    str1+='<option>'+result[i].class_grade+'</option>';
                    str2+='<option>'+result[i].class_name+'</option>';
                }
                $("#grade").append(str1);
                $("#class").append(str2);
            }
        }
    });
}

function getInfo(){
    getTeacherInfo();
    getClasses();
    getAllstudents();
    getQuestionList();
}

document.getElementById('changeInfo').onclick = function() {
    this.parentNode.style.display = "none";
    document.getElementById('confirmChange').style.display = "inline-block";
    document.getElementById('cancelChange').style.display = "inline-block";
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }
    document.getElementById('name').disabled=true;
    document.getElementById('id').disabled=true;
    document.getElementById('sex').disabled=true;
    document.getElementById('college').disabled=true;
}

//取消修改信息，请求原信息写回页面
document.getElementById('cancelChange').onclick = function() {
    this.style.display = "none";
    document.getElementById('confirmChange').style.display = "none";
    document.getElementById('changeInfo').parentNode.style.display = "inline-block";
    //调用请求获取数据库信息
    getTeacherInfo();
}

//确认修改教师个人信息，上传修改后信息
document.getElementById("confirmChange").onclick = function() {
    var form = new FormData();
    for (var i = 0; i < inputs.length; i++) {
        form.append(inputs[i].id,inputs[i].value);
    }
    console.log(form);
    //发送请求附带数据json
    $.ajax({
        url : "/changeInfo",
        type : "POST",
        data : form,
        processData : false,
        contentType : false,
        success: function(result){
            if (result.code=="success"){
                getTeacherInfo();
                for (var i = 0; i < inputs.length; i++) {
                    inputs[i].disabled = true;
                }
            }else {
                alert("修改失败！");
            }
        }
    });
}

/*提交试题部分*/
//提交选择题
document.getElementById("choose_confirm").onclick=function(){
	var choose_q=$('#choose_q').val();
	var A=$('#A').val();
	var B=$('#B').val();
	var C=$('#C').val();
	var D=$('#D').val();
	var group1=document.getElementsByName("group1");
	if(choose_q==""||A==""||B==""||C==""||D==""){
		alert("题目不完整");
	}
	else if(!group1[0].checked&&!group1[1].checked&&!group1[2].checked&&!group1[3].checked){
		alert("请选择正确答案");
	}
	else{
		var form=new FormData();
		var answer=$('#choose input:radio:checked').val();
		form.append("choose_q",choose_q);
		form.append("A",A);
		form.append("B",B);
		form.append("C",C);
		form.append("D",D);
		form.append("answer",answer);
		$.ajax({
			type:"POST",
			url:"/",
			data:form,
			processData : false,
        	contentType : false,
        	success: function(result){
            	if (result.code=="success"){
            		alert("题目提交成功！");
            	    $('#choose_q').val("");
					$('#A').val("");
					$('#B').val("");
					$('#C').val("");
					$('#D').val("");
            	}else {
            	    alert("提交失败！");
            	}
        	}
		})
	}
}
//提交判断题
document.getElementById("tf_confirm").onclick=function(){
	var TorF=$('#TorF').val();
	var group2=document.getElementsByName("group2");
	if(TorF==""){
		alert("题目不完整");
	}
	else if(!group2[0].checked&&!group2[1].checked){
		alert("请选择正确答案");
	}
	else{
		var form=new FormData();
		var answer=$('#TF input:radio:checked').val();
		form.append("TorF",TorF);
		form.append("answer",answer);
		$.ajax({
			type:"POST",
			url:"",
			data:form,
			processData : false,
        	contentType : false,
        	success: function(result){
            	if (result.code=="success"){
            		alert("题目提交成功！");
            	    $('#TorF').val("");
            	}else {
            	    alert("提交失败！");
            	}
        	}
		})
	}
}
//导入Excel文件
document.getElementById("file_confirm").onclick=function(){
	var filename=$("#input_file").val();
	var point=filename.lastIndexOf(".");
	var filetype=filename.substr(point);
	if(filename==""){
		alert("未选择文件");
	}
	else if(filetype!=".xlsx"&&filetype!=".xls"){
		alert("请选择excel文件");
	}
	else{
		var form=new FormData();
		form.append("filename",filename);
		form.append("file",$("#input_file"[0].files[0]));
		$.ajax({
			url:"",
			type:'POST',
			data:form,
			processData : false,
        	contentType : false,
        	beforeSend:function(){
            	console.log("正在上传，请稍候");
        	},
        	success:function(result){
        		if (result.code=="success"){
            		alert("上传成功！");
            	}else {
            	    alert("上传失败！");
            	}
        	}
		});
	}
}



document.getElementById("search_student").onclick=function(){
    getAllstudents();
}

//学生,根据年级和班级返回result为指定的学生(name、id、sex、class_grade、class_name、college)的数组
//如果收到的classgrade、classname都=="",那么返回全部的学生，也要考虑其中之一为""的情况
function getAllstudents(){
    var str='<p class="col s2">姓名</p><p class="col s2">学号</p><p class="col s1">性别</p><p class="col s3">学院</p><p class="col s2">年级</p><p class="col s2">班级</p>';
	var classgrade=$("#grade").text();
	var classname=$("#class").text();
	if(classgrade=="年级"){classgrade="";}
	if(classname=="班级"){classname="";}	
	var form=new FormData();
	form.append("classgrade",classgrade);
	form.append("classname",classname);
	$.ajax({
		url:"/getSelectedStudents",
		type:"POST",
		data:form,
		processData : false,
    	contentType : false,
    	dataType : "json",
    	success:function(result){
    		if (result){
    			$("#student_list").empty();
    	        for(var i=0;i<result.length;i++){
    	        	str+='<li><p class="col s2">'+result[i].name+'</p><p class="col s2">'+result[i].id+'</p><p class="col s1">'+result[i].sex+'</p><p class="col s3">'+result[i].college+'</p><p class="col s2">'+result[i].grade+'</p><p class="col s2">'+result[i].class+'</p></li>';
    	        }
    	        $("#student_list").append(str);
    	    }
    	}
	});
	
}

/* 创建考试相关 */
document.getElementById("CreateExam").onclick=function(){
    document.getElementById("oout2").style.display="none";
    //document.getElementById("AddExam").style.display="block";
    $("#AddExam").fadeIn(1000);
}

var choose_array=new Array();
var tf_array=new Array();
var c_selected=document.getElementsByName("c_selected");
var tf_selected=document.getElementsByName("tf_selected");
var choose_count=0;
var tf_count=0;
var detail=document.getElementsByName("detail");
var addtolist=document.getElementsByName("addtolist");
var type=document.getElementsByName("type");
var question_id=document.getElementsByName("question_id");
var the_chooses=document.getElementsByName("the_chooses");

for (var i = 0; i < detail.length; i++) {
  detail[i].setAttribute("index",i);
}
for (var i = 0; i < addtolist.length; i++) {
  addtolist[i].setAttribute("index",i);
}
//弹出对应id的试题详情框
for(var i=0;i<detail.length;i++){
    detail[i].onclick=function(){
        var j=this.getAttribute("index");
        var q_id=$(question_id[j]).text();
        var thetype=$(type[j]).text();
        var form=new FormData();
        form.append("id",q_id);//题目ID
        if(thetype=="判断"){
            detail[j].setAttribute("href","#tf_detail");
            $("#tf_id").text(q_id);
            //根据题目id返回判断题的题目和对错(answer)
            $.ajax({
                url:"/",
                type:"POST",
                data:form,
                processData : false,
                contentType : false,
                dataType:"json",
                success:function(data){
                    if(data){
                        $("#TorF").val(data.question);
                        $("#tf_answer").text(data.answer);
                    }
                    else{
                        alert("题目信息载入失败！");
                    }
                }
            });
        }
        if(thetype=="选择"){
            detail[j].setAttribute("href","#choose_detail");
            $("#choose_id").text(q_id);
            //根据id返回题目、以及四个选项，其中返回的第一个选项为正确答案
            $.ajax({
                url:"/",
                type:"POST",
                data:form,
                processData : false,
                contentType : false,
                dataType:"json",
                success:function(data){
                    if(data){
                        $("#choose_q").val(data.question);
                        $("#right_choose").val(data.answer1);
                        $("#B").val(data.answer2);
                        $("#C").val(data.answer3);
                        $("#D").val(data.answer4);
                    }else{
                        alert("题目信息载入失败！");
                    }
                }
            });
        }
    }
}
//添加题目到待选列表
for(var i=0;i<addtolist.length;i++){
    addtolist[i].onclick=function(){
        var j=this.getAttribute("index");
        var q_id=$(question_id[j]).text();
        var thetype=$(type[j]).text();
        if(thetype=="判断"){
            if($.inArray(q_id,tf_array)==-1){
                if(tf_count==5){
                    alert("5道判断题已经选满");
                }else{
                    $(tf_selected[tf_count]).text(q_id);
                    $(tf_selected[tf_count]).css("background-color","#ff8a80");
                    tf_array[tf_count]=q_id;
                    tf_count+=1;
                }
            }else{
                alert("这道题目已经添加到列表中了");
            }
        }
        if(thetype=="选择"){
            if($.inArray(q_id,choose_array)==-1){
                if(choose_count==15){
                    alert("15道选择题已选满");
                }else{
                    $(c_selected[choose_count]).text(q_id);
                    $(c_selected[choose_count]).css("background-color","#ff8a80");
                    choose_array[choose_count]=q_id;
                    choose_count+=1;
                }
            }else{
                alert("这道题目已经添加到列表中了");
            }
        }
    }
}

//试题,根据题目类型返回题目的id、除去选项外的题目(question)、section、question_type
//section由数字转换成中文（如“第一章”）返回
//同样要考虑section、question_type==""的情况
function getQuestionList(){
  var section=$("#section").val();
  var question_type=$("#question_type").val();
  var form=new FormData();
  form.append("section",section);
  form.append("question_type",question_type);
  $.ajax({
    url:"/getQuestionList",
    type:"POST",
    data:form,
    processData : false,
    contentType : false,
    dataType : "json",
    success:function(result){
      if(result){
        str='<p class="col s2">试题id</p><p class="col s5">题目</p><p class="col s1">章节</p><p class="col s2">题型</p><p class="col s2">操作</p>';
        $("#question_list").empty();
        for(var i=0;i<result.length;i++){
          str+='<p class="col s2" name="question_id">'+result[i].id+'</p><p class="col s5">'+result[i].question.substr(0,20)+'...</p><p class="col s1">'+result[i].section+'</p><p class="col s2" name="type">'+result[i].question_type+'</p><p class="col s1"><a href="#!" name="detail">详情</a></p><p class="col s1"><a href="#!" name="addtolist">添加</a></p></li>';
        }
        $("#question_list").append(str);
      }
      else{
        alert("列表载入失败！");
      }
    }
  });
}

document.getElementById("search_question").onclick=function(){
    getQuestionList();
}
document.getElementById("empty_selected").onclick=function(){
    if(confirm("确定清空已选题目吗？")==true){
        choose_count=0;
        tf_count=0;
        choose_array=[];
        tf_array=[];
        for(i=0;i<15;i++){
            $(c_selected[i]).text("未选");
            $(c_selected[i]).css("background-color","#4db6ac");
        }
        for(i=0;i<5;i++){
            $(tf_selected[i]).text("未选");
            $(tf_selected[i]).css("background-color","#4db6ac");
        }
    }
}
//保存试卷
document.getElementById("save_paper").onclick=function(){
    if(confirm("确定保存试卷吗？")==true){
        if($("#exam_date").val()==""||$("#exam_name").val()==""||$("#start_time").val()==""||$("#end_time").val()==""){
            alert("试卷标题/考试日期/时间未设置");
        }else if(choose_count<15||tf_count<5){
            alert("试卷题目数量不足(15道选择题+5道判断题)");
        }else if($("#start_time").val()>=$("#end_time").val){
            alert("考试时间设置不准确");
        }
        else{
            var date=$("#exam_date").val();
            var exam_name=$("#exam_name").val();
            var start_time=$("#start_time").val();
            var end_time=$("#end_time").val();
            var form=new FormData();
            form.append("date",date);
            form.append("exam_name",exam_name);
            form.append("start_time",start_time);
            form.append("end_time",end_time);
            form.append("choose_array",choose_array);//选择题id组成的数组
            form.append("tf_array",tf_array);//判断题id组成的数组
            //保存试卷，同时需生成一个独有的试卷id,已经将试卷标记为“未发布”
            $.ajax({
                url:"/",
                type:"POST",
                data:form,
                processData : false,
                contentType : false,
                success:function(result){
                    if(result.code=="success"){
                        alert("试卷保存成功！");
                    }else{
                        alert("保存失败！");
                    }
                }
            });
        }
    }
}
