var class_name = new Array();
var class_grade = new Array();

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
 	//以下用于获取教师所教的班级，返回的是对应的年级class_grade和班级class_name
 	var formdata=new FormData();
 	var t_id=$("#id").val();
 	formdata.append("id",t_id);
 	var str1='<option value="" disabled selected>年级</option>';
 	var str2='<option value="" disabled selected>班级</option>';
 	$.ajax({
 		url:"/",
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
                	class_name[i]=result[i].class_name;
                	class_grade[i]=result[i].class_grade;
                	str1+='<option>'+class_grade+'</option>';
                	str2+='<option>'+class_name+'</option>';
                }
                $("#grade").append(str1);
                $("#class").append(str2);
            }
        }
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
    getStudentInfo();
}

//确认修改信息，上传修改后信息
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
                getStudentInfo();
                for (var i = 0; i < inputs.length; i++) {
                    inputs[i].disabled = true;
                }
            }else {
                alert("修改失败！");
            }
        }
    });
}

//提交试题部分
//选择题
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
//判断题
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
//获取所教班级的所有学生信息
function getAllstudents(){
	var form=new FormData();
	form.append("classgrade",class_grade);//数组
	form.append("classname",class_name);//数组
	var str='';
	$.ajax({
		url:"/",
		type:"POST",
		processData : false,
        contentType : false,
        data : form,
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
ducument.getElementById("slide5").onclick=getAllstudents();
//根据信息查询学生列表，如果classgrade或classname之一为空，就查询某个班名或某个年级的所有人
document.getElementById("search_student").onclick=function(){
	var classgrade=$("#grade").text();
	var classname=$("#class").text();
	if(classgrade=="年级"){classgrade="";}
	if(classname=="班级"){classname="";}
	if(classgrade==""&&classname==""){getAllstudents();}
	else{
		var form=new FormData();
		form.append("classgrade",classgrade);
		form.append("classname",classname);
		$.ajax({
			url:"/",
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
}