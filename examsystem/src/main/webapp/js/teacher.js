var today=new Date();
var year=today.getFullYear();
var month=today.getMonth()+1; 
var date=today.getDate();
var today=year+"-"+month+"-"+date;
// document.getElementById("exam_date").setAttribute("min",today);
// var a = document.getElementById("examDate");
// console.log(a);
// console.log(document.getElementById("grade"));
$('#exam_date').attr("min",today);
$('#examDate').val(today);

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
for (var i = 0; i < 6; i++) {
	var id1 = "slide" + (i+1);
	var id2 = "oout" + (i+1);
	slide[i] = document.getElementById(id1);
	slide[i].setAttribute("index",i);
	out[i] = document.getElementById(id2);
}
for (var i = 0; i < slide.length; i++) {
	slide[i].onclick = function() {
		for (var j = 0; j < out.length; j++) {
            out[j].style.display = "none";
        }
		cover.style.display = "none"; 
        document.getElementById("AddExam").style.display="none";
		out[this.getAttribute("index")].style.display = "block";
	}
}
document.getElementById("oout2").style.display = "block";


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
                window.location.href="/"
            }else {
                alert("注销失败！");
            }
        }
    });
}

//修改密码
out[6] = document.getElementById('changePassword');
document.getElementById('change').onclick = function(){
    for (var i = 0; i < out.length; i++) {
        out[i].style.display = "none";
    }
    cover.style.display = "none";
    document.getElementById("AddExam").style.display="none";
    out[6].style.display = "block";
}

function checkPassword(password){
    var flag = 1;
    if(password.length < 6){
        flag = 0;
    }else if(password.length > 20){
        flag = 0;
    }
    return flag;
}

//确定修改密码
document.getElementById('yes').onclick = function() {
    //发送新的密码
    var oldPassword = document.getElementById('oldpassword').value;
    var newPassword = document.getElementById('newpassword').value;
    var newPassword2 = document.getElementById('newpassword2').value;
    if(!newPassword || !oldPassword || !newPassword2){
        alert("密码不能为空！");
        return;
    }
    if(!(checkPassword(oldPassword) && checkPassword(newPassword) && checkPassword(newPassword2))){
        alert("密码位数需6-20位！");
        return;
    }
    if(newPassword != newPassword2){
        alert("两次密码不一致！");
        return;
    }
    if(oldPassword == newPassword){
        alert("新密码和原密码一样！");
        return;
    }
    var form1 = new FormData();
    form1.append("oldpassword",oldPassword);
    form1.append("newpassword",newPassword);
    $.ajax({
        url : "/teacher/changePassword",
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

    // 菜单栏个人信息设置
    // $("#Semail").innerText=json.email;
    // $("#Sname").innerText=json.first_name;
    // $("#college2").innerText= json.college;
    // $("#class2").innerText= json.class;
    document.getElementById("Temail").innerHTML = json.email;
    document.getElementById("college2").innerHTML = '<i class="icon-newspaper"></i>' +json.college;
    //导航栏加载名字
    document.getElementById("Tname1").innerHTML = json.name;
}
var inputs = document.getElementById('oout1').getElementsByTagName("input");

//获取老师的信息
function getTeacherInfo() {
    $.ajax({
        url : "/teacher/getInfo",
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
        url:"/teacher/getTeacherclass",
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
    getQuestionList2();
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
        url : "/teacher/changeInfo",
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
			url:"/teacher/submitChoose",
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
			url:"/teacher/submitTF",
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

document.getElementById("fill_confirm").onclick = function(){
    var question = document.getElementById("Aks").value;
    var type;
    var answer = document.getElementById("answer").value;
    if(document.getElementById('ask').checked == true)
        type = "问答";
    if(document.getElementById('fill').checked == true)
        type = "填空";
    if(!type){
        alert("请选择题目类型");
        return false;
    }
    if(!question){
        alert("请输入题目");
        return false;
    }
    if(type == "填空" && !answer){
        alert("填空题答案不能为空");
        return false;
    }
    var q = {
        "askOrfill" : type,
        "answer" : answer,
        "question" : question,
    };
    console.log("q");
    console.log(q);
    $.ajax({
        url : "teacher/submitAskAndFill",
        type : "POST",
        data : q,
        dataType : "json",
        processData : false,
        contentType : false,
        success : function(result){
            if(result.code == "success")
                alert("上传成功！");
        },
        error : function(){
            alert("上传失败！请重试！")
        }
    });
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
			url:"/teacher/submitFile",
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
	var classgrade=$("#grade option:selected").text();
	var classname=$("#class option:selected").text();
	console.log(classgrade);
	console.log(classname);
	if(classgrade=="年级"){classgrade="";}
	if(classname=="班级"){classname="";}	
	var form=new FormData();
	form.append("classgrade",classgrade);
	form.append("classname",classname);
	$.ajax({
		url:"/teacher/getSelectedStudents",
		type:"POST",
		data:form,
		processData : false,
    	contentType : false,
    	dataType : "json",
    	success:function(result){
    		if (result){
    			$("#student_list").empty();
    	        for(var i=0;i<result.length;i++){
    	        	str+='<li><p class="col s2">'+result[i].name+'</p><p class="col s2">'+result[i].id+'</p><p class="col s1">'+result[i].sex+'</p><p class="col s3">'+result[i].college+'</p><p class="col s2">'+result[i].grade+'</p><p class="col s2">'+result[i].classname+'</p></li>';
    	        }
    	        $("#student_list").append(str);
    	    }
    	}
	});
	
}

/* ----------------创建考试相关-------------------------- */
document.getElementById("CreateExam").onclick=function(){
    document.getElementById("oout2").style.display="none";
    //document.getElementById("AddExam").style.display="block";
    $("#AddExam").fadeIn(1000);
}

var choose_array=new Array();
var tf_array=new Array();
var c_selected=document.getElementsByName("c_selected");
var tf_selected=document.getElementsByName("tf_selected");
var choose_count= new Array();
var tf_count = new Array();
var detail=document.getElementsByName("detail");
var addtolist=document.getElementsByName("addtolist");
var type=document.getElementsByName("type");
var question_id=document.getElementsByName("question_id");
var the_chooses=document.getElementsByName("the_chooses");

for (var i = 0; i < 15; i++) {
    choose_count[i] = 0;
}
for (var i = 0; i < 5; i++) {
    tf_count[i] = 0;
}

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
                url:"/teacher/getTF",
                type:"POST",
                data:form,
                processData : false,
                contentType : false,
                dataType:"json",
                success:function(data){
                    if(data){
                        $("#TorF_question").val(data.question);
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
            //根据id返回题目、以及四个选项，其中返回的第一个选项answer1为正确答案
            $.ajax({
                url:"/teacher/getChoose",
                type:"POST",
                data:form,
                processData : false,
                contentType : false,
                dataType:"json",
                success:function(data){
                    if(data){
                        $("#choose_question").val(data.question);
                        $("#right_choose").val(data.answer1);
                        $("#B_choose").val(data.answer2);
                        $("#C_choose").val(data.answer3);
                        $("#D_choose").val(data.answer4);
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
                var flag = 1;
                for (var i = tf_count.length - 1; i >= 0; i--) {
                    if(tf_count[i] == 0){
                        flag = 0;
                        break;
                    }
                }
                if(flag){
                    alert("5道判断题已经选满");
                }else{
                    var index = 0;
                    for (var j = 0; j < tf_count.length; j++) {
                        if(tf_count[j] == 0){
                            index = j;
                            break;
                        }
                    }
                    $(tf_selected[index]).text(q_id);
                    $(tf_selected[index]).css("background-color","#ff8a80");
                    tf_array[index]=q_id;
                    tf_count[index] = 1;
                    console.log(tf_array);
                }
            }else{
                alert("这道题目已经添加到列表中了");
            }
        }
        if(thetype=="选择"){
            if($.inArray(q_id,choose_array)==-1){
                var flag = 1;
                for (var i = choose_count.length - 1; i >= 0; i--) {
                    if(choose_count[i] == 0){
                        flag = 0;
                        break;
                    }
                }
                if(flag){
                    alert("15道选择题已选满");
                }else{
                    var index;
                    for (var j = 0; j < choose_count.length; j++) {
                        if(choose_count[j] == 0){
                            index = j;
                            break;
                        }
                    }
                    $(c_selected[index]).text(q_id);
                    $(c_selected[index]).css("background-color","#ff8a80");
                    choose_array[index]=q_id;
                    choose_count[index] = 1;
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
//创建试卷页面的
function getQuestionList(){
  var section=$("#section option:selected").val();
  var question_type=$("#question_type option:selected").val();
  var form=new FormData();
  form.append("section",section);
  form.append("question_type",question_type);
  $.ajax({
    url:"/teacher/getQuestionList",
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
//修改试题页面的
function getQuestionList2(){
  var section=$("#section2").val();
  var question_type=$("#question_type2").val();
  var form=new FormData();
  form.append("section",section);
  form.append("question_type",question_type);
  $.ajax({
    url:"/teacher/getQuestionList2",
    type:"POST",
    data:form,
    processData : false,
    contentType : false,
    dataType : "json",
    success:function(result){
      if(result){
        str='<p class="col s2">试题id</p><p class="col s5">题目</p><p class="col s2">章节</p><p class="col s2">题型</p><p class="col s1">操作</p>';
        $("#question_list2").empty();
        for(var i=0;i<result.length;i++){
          str+='<p class="col s2" name="question_id2">'+result[i].id+'</p><p class="col s5">'+result[i].question.substr(0,20)+'...</p><p class="col s2">'+result[i].section+'</p><p class="col s2" name="type2">'+result[i].question_type+'</p><p class="col s1"><a href="#!" name="question_edit">修改</a></p></li>';
        }
        $("#question_list2").append(str);
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
document.getElementById("search_question2").onclick=function(){
    getQuestionList2();
}
document.getElementById("empty_selected").onclick=function(){
    if(confirm("确定清空已选题目吗？")==true){
        for (var i = 0; i < 15; i++) {
            choose_count[i] = 0;
        }
        for (var i = 0; i < 5; i++) {
            tf_count[i] = 0;
        }
        choose_array=[];
        tf_array=[];
        for(i=0;i<15;i++){
            $(c_selected[i]).text("未选");
            $(c_selected[i]).css("background-color","rgb(227,224,181)");
        }
        for(i=0;i<5;i++){
            $(tf_selected[i]).text("未选");
            $(tf_selected[i]).css("background-color","rgb(200,211,179)");
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
                url:"/teacher/savePaper",
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


//点击已选选择题目取消选择
console.log(c_selected);
function cancelSelected(){
    if(this.innerHTML != "未选"){
        if(confirm("确认移除这道题目吗") == true){
            this.innerHTML = "未选";
            this.style.backgroundColor = "rgb(227,224,181)";
            var index = this.getAttribute("index");
            choose_count[index] = 0;
            choose_array[index] = 0;
        }
    }
}
for (var i = 0; i < c_selected.length; i++) {
    c_selected[i].onclick = cancelSelected;
    c_selected[i].setAttribute("index",i);
}

function cancelTf(){
    if(this.innerHTML != "未选"){
        if(confirm("确认移除这道题目吗") == true){
            this.innerHTML = "未选";
            this.style.backgroundColor = "rgb(200,211,179)";
            var index = this.getAttribute("index");
            tf_count[index] = 0;
            tf_array[index] = 0;
            console.log(tf_array);
        }
    }
}
for (var i = 0; i < tf_selected.length; i++) {
    tf_selected[i].onclick = cancelTf;
    tf_selected[i].setAttribute("index",i);
}


/*--------------------修改试题页面---------------------*/
//弹出对应id的试题修改框，ajax根据id获取除id外的题目、选项、以及答案
var question_edit=document.getElementsByName("question_edit");
for (var i = 0; i < question_edit.length; i++) {
  question_edit[i].setAttribute("index",i);
}
for(var i=0;i<question_edit.length;i++){
  question_edit[i].onclick=function(){
    var j=this.getAttribute("index");
    var type=document.getElementsByName("type2");
    var question_id=document.getElementsByName("question_id2");
    var q_id=$(question_id[j]).text();
    type=$(type[j]).text();
    var form=new FormData();
    form.append("id",q_id);//题目ID
    if(type=="判断"){
      question_edit[j].setAttribute("href","#tf_detail2");
      $("#tf_id2").text(q_id);
      $.ajax({
        url:"/teacher/getTFinfo",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        dataType:"json",
        success:function(data){
          if(data){
            $("#TorF2").val(data.question);
            if(data.answer=="对"){
              $("#_T2").prop("checked",true);
            }
            else if(data.answer=="错"){
              $("#_F2").prop("checked",true);
            }
            else{
              alert("这道题目未设置答案！");
            }
          }else{
            alert("题目载入失败！");
          }
        }
      });
    }
    if(type=="选择"){
      question_edit[j].setAttribute("href","#choose_detail2");
      $("#choose_id2").text(q_id);
      //返回的answer为A/B/C/D
      $.ajax({
        url:"/teacher/getChooseinfo",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        dataType:"json",
        success:function(data){
          if(data){
            $("#choose_q2").val(data.question);
            $("#A2").val(data.A);
            $("#B2").val(data.B);
            $("#C2").val(data.C);
            $("#D2").val(data.D);
            if(data.answer=="A"){
              $("#_A2").prop("checked",true);
            }
            else if(data.answer=="B"){
              $("#_B2").prop("checked",true);
            }
            else if(data.answer=="C"){
              $("#_C2").prop("checked",true);
            }
            else if(data.answer=="D"){
              $("#_D2").prop("checked",true);
            }
            else{
              alert("这道题目未设置答案！");
            }
          }else{
            alert("题目载入失败！");
          }
        }
      });
    }   
  }
}
//保存判断题修改
document.getElementById("save_tf2").onclick=function(){
  if(confirm("确认保存修改")==true){
    var id=$("#tf_id2").text();
    var tf_question=$("#TorF2").val();
    var answer=$('#TF2 input:radio:checked').val();//值为“对”或“错”
    if(tf_question==""||answer==""){
      alert("保存失败！请提交完整的题目");
    }
    else{
      form=new FormData();
      form.append("question",tf_question);
      form.append("answer",answer);
      //根据ID保存信息
      $.ajax({
        url:"/teacher/saveTF",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        success:function(result){
          if(result.code=="success"){
            alert("题目保存成功！");
          }
          else{
            alert("保存失败！");
          }
        }
      });
    }
  } 
}
//保存选择题的修改
document.getElementById("save_choose2").onclick=function(){
  if(confirm("确认保存修改")==true){
    var id=$("#choose_id2").text();
    var choose_question=$("#choose_q2").val();
    var A=$("#A2").val();
    var B=$("#B2").val();
    var C=$("#C2").val();
    var D=$("#D2").val();
    var choose=$('#choose2 input:radio:checked').val();//值为A/B/C/D
    var answer="";
    if(choose=="A"){
      answer=A;
    }else if(choose=="B"){
      answer=B;
    }else if(choose=="C"){
      answer=C;
    }else if(choose=="D"){
      answer=D;
    }else{
      answer="";
    }
    if(choose_question==""||A==""||B==""||C==""||D==""||answer==""){
      alert("保存失败！请提交完整的题目");
    }
    else{
      form=new FormData();
      form.append("question",choose_question);
      form.append("A",A);
      form.append("B",B);
      form.append("C",C);
      form.append("D",D);
      form.append("answer",answer);
      //根据ID保存信息
      //返回题目、四个选项、正确的选项(完整)
      $.ajax({
        url:"/teacher/saveChoose",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        success:function(result){
          if(result.code=="success"){
            alert("题目保存成功！");
          }
          else{
            alert("保存失败！");
          }
        }
      });
    }
  } 
}