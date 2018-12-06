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
    }
  );
});


//控制左侧导航栏菜单的点击切换
var slide = new Array();
var out = new Array();
for (var i = 0; i < 3; i++) {
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
		out[this.getAttribute("index")].style.display = "block";
		document.getElementById("cover").style.display = "none";
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
out[3] = document.getElementById('changePassword');
document.getElementById('change').onclick = function(){
	for (var i = 0; i < out.length; i++) {
		out[i].style.display = "none";
	}
	document.getElementById("cover").style.display = "none";
	out[3].style.display = "block";
}
//确定修改密码
document.getElementById('yes').onclick = function() {
	//发送新的密码
	var form = new FormData();
	var oldPassword = document.getElementById('icon_prefix').value;
	var newPassword = document.getElementById('password').value;
	
	form.append("oldpassword",oldPassword);
	form.append("newpassword",newPassword);
	$.ajax({
		url : "/changePassword",
		type : "POST",
		data : form,
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
	document.getElementById('changePassword').style.display = "none";
}






//修改信息按钮
var inputs = document.getElementById('oout1').getElementsByTagName("input");


function init(json) {
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].value = json[inputs[i].id];
	}
}

//获取学生信息,返回一个json格式的数据，里面的各项信息按顺序排列
function getStudentInfo() {
	$.ajax({
		url : "/getInfo",
		type : "POST",
		processData : false,
        contentType : false,
        dataType : "json",
		success: function(data){
			if (data.code=="success"){
				init(data);
				for (var i = 0; i < inputs.length; i++) {
					inputs[i].disabled = true;
				}
			}else {
 				alert("获取信息失败！");
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
	var json = {};
	var form = new FormData();
	for (var i = 0; i < inputs.length; i++) {
		json[inputs[i].id] = inputs[i].value;
		form.append(inputs[i].id,inputs[i].value)
	}
	init(json);
	//发送请求附带数据json
	$.ajax({
		url : "/changeInfo",
		type : "POST",
		data : form,
		processData : false,
        contentType : false,
		success: function(result){
			if (result.code=="success"){
				alert("修改成功！")
				for (var i = 0; i < inputs.length; i++) {
					inputs[i].disabled = true;
				}
			}else {
 				alert("修改失败！");
			}
		}
	});
}
