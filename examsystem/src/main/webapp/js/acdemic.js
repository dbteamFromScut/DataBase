function getAllList(){
  getStudentList();
  getTeacherList();
  getAllClass();
  getTeacherClass();
}

function getAllClass(){
  //result返回数据库中学生所在的所有年级class_grade和班级class_name
  var str1='<option value="" disabled selected>年级</option>';
  var str2='<option value="" disabled selected>班级</option>';
  $.ajax({
    url:"/acdemic/getAllClass",
    type:"POST",
    processData : false,
    contentType : false,
    dataType:"json",
    success:function(result){
      if(result){
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
//确定注销按钮
document.getElementById("logout").onclick = function(){
  //退出登录，跳转到登录界面
  console.log("d");
}

//控制左侧导航栏菜单的点击切换
var slide = new Array();
var out = new Array();
var cover = document.getElementById("cover");
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
      console.log(j);
      out[j].style.display = "none";
    }
    cover.style.display = "none"; 
    out[this.getAttribute("index")].style.display = "block";
  }
}


/*-------------------管理学生页面---------------------*/
//添加单独一个学生
document.getElementById("addNewStudent").onclick=function(){
  var name=$("#new_s_name").val();
  var sex=$("#new_s_sex").val();
  var id=$("#new_s_id").val();
  var college=$("#new_s_college").val();
  var grade=$("#new_s_grade").val();
  var s_class=$("#new_s_class").val();
  if(name==""||sex==""||id==""||college==""||grade==""||s_class==""){
    alert("信息需要补充完整");
  }
  else{
    if(confirm("确认将 "+name+" 同学的信息上传到考试系统吗？")==true){
      var form=new FormData();
      form.append("name",name);
      form.append("sex",sex);
      form.append("id",id);
      form.append("college",college);
      form.append("grade",grade);
      form.append("s_class",s_class);
      //由信息向数据库学生表插入一个新元组
      $.ajax({
        url:"/acdemic/addNewStudent",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        success:function(result){
          if(result.code=="success"){
            alert("上传成功！");
          }
          //用主键职工号判断是否已存在
          else if(result.code=="exist"){
            alert("该学号已存在！")
          }
          else{
            alert("上传失败！");
          }
        }
      });
    }
  }
}
//导入学生的excel文档
document.getElementById("addNewStudentFile").onclick=function(){
  var filename=$("#student_file").val();
  var point=filename.lastIndexOf(".");
  var filetype=filename.substr(point);
  if(filename==""){
    alert("未选择文件");
    return;
  }
  else if(filetype!=".xlsx"&&filetype!=".xls"){
    alert("请选择excel文件");
    return;
  }
  else{
    var form=new FormData();
    form.append("filename",filename);
    form.append("file",$("#student_file"[0].files[0]));
    $.ajax({
      url:"/acdemic/addNewStudentFile",
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

//弹出对应id的学生信息修改框，ajax根据id获取除id外的其他信息
var student_edit=document.getElementsByName("student_edit");
for (var i = 0; i < student_edit.length; i++) {
  student_edit[i].setAttribute("index",i);
}
for(var i=0;i<student_edit.length;i++){
  student_edit[i].onclick=function(){
    var j=this.getAttribute("index");
    var student_id=document.getElementsByName("student_id");
    var s_id=$(student_id[j]).text();
    $("#s_id").val(s_id);
    var form=new FormData();
    form.append("id",s_id);
    $.ajax({
      url:"/acdemic/studentinfo",
      type:"POST",
      data:form,
      processData : false,
      contentType : false,
      dataType:"json",
      success:function(data){
        if(data){
          $("#s_name").val(data.name);
          $("#s_sex").val(data.sex);
          $("#s_college").val(data.college);
          $("#s_grade").val(data.grade);
          $("#s_class").val(data.class);
          $("#s_address").val(data.address);
          $("#s_birthday").val(data.birthday);
          $("#s_phone").val(data.phone);
          $("#s_email").val(data.email);
        }
        else{
          alert("查询详细信息失败！");//一般不会出现
        }
      }
    });
  }
}
//初始化学生的密码
document.getElementById("default_student").onclick=function(){
  var name=$("#s_name").val();
  if(confirm("确认将 "+name+" 密码初始化吗?")==true){
    var id=$("#s_id").val();
    var form=new FormData();
    form.append("id",id);
    //根据id初始化对应学生的密码123456
    $.ajax({
        url:"/acdemic/defaultStudent",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        success:function(result){
          if(result.code=="success"){
            alert("初始化成功！");
          }
          else{
            alert("初始化失败！");
          }
        }
      });
  }
}
//保存学生信息的修改
document.getElementById("save_student").onclick=function(){
  if(confirm("确认保存修改")==true){
    var id=$("#s_id").val();
    var name=$("#s_name").val();
    var sex=$("#s_sex").val();
    var college=$("#s_college").val();
    var grade=$("#s_grade").val();
    var classname=$("#s_class").val();
    var address=$("#s_address").val();
    var birthday=$("#s_birthday").val();
    var phone=$("#s_phone").val();
    var email=$("#s_email").val();
    if(name==""||sex==""||college==""||grade==""||classname==""||address==""||birthday==""||phone==""||email==""){
      alert("保存失败！请提交完整的资料");
    }
    else{
      var form=new FormData();
      form.append("id",id);
      form.append("name",name);
      form.append("sex",sex);
      form.append("college",college);
      form.append("grade",grade);
      form.append("class",classname);
      form.append("address",address);
      form.append("birthday",birthday);
      form.append("phone",phone);
      form.append("email",email);
      //根据ID保存信息
      $.ajax({
        url:"/acdemic/saveStudent",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        success:function(result){
          if(result.code=="success"){
            alert("信息保存成功！");
          }
          else{
            alert("保存失败！");
          }
        }
      });
    }
  } 
}


/*-------------管理教师信息页面-----------------*/
//添加单独一个新教师
document.getElementById("addNewTeacher").onclick=function(){
  var name=$("#new_t_name").val();
  var sex=$("#new_t_sex").val();
  var id=$("#new_t_id").val();
  var college=$("#new_t_college").val();
  if(name==""||sex==""||id==""||college==""){
    alert("信息需要补充完整");
  }
  else{
    if(confirm("确认将 "+name+" 老师的信息上传到考试系统吗？")==true){
      var form=new FormData();
      form.append("name",name);
      form.append("sex",sex);
      form.append("id",id);
      form.append("college",college);
      //由信息向数据库教师表插入一个新元组
      $.ajax({
        url:"/acdemic/addNewTeacher",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        success:function(result){
          if(result.code=="success"){
            alert("上传成功！");
          }
          //用主键职工号判断是否已存在
          else if(result.code=="exist"){
            alert("该职工号已存在！")
          }
          else{
            alert("上传失败！");
          }
        }
      });
    }
  }
}
//导入教师信息excel文档
document.getElementById("addNewTeacherFile").onclick=function(){
  var filename=$("#teacher_file").val();
  var point=filename.lastIndexOf(".");
  var filetype=filename.substr(point);
  if(filename==""){
    alert("未选择文件");
    return;
  }
  else if(filetype!=".xlsx"&&filetype!=".xls"){
    alert("请选择excel文件");
    return;
  }
  else{
    var form=new FormData();
    form.append("filename",filename);
    form.append("file",$("#teacher_file"[0].files[0]));
    $.ajax({
      url:"/acdemic/addNewTeacherFile",
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

//弹出对应id的教师信息修改框，ajax根据id获取除id外的其他信息
var teacher_edit=document.getElementsByName("teacher_edit");
for (var i = 0; i < teacher_edit.length; i++) {
  teacher_edit[i].setAttribute("index",i);
}
for(var i=0;i<student_edit.length;i++){
  teacher_edit[i].onclick=function(){
    var j=this.getAttribute("index");
    var teacher_id=document.getElementsByName("teacher_id");
    var t_id=$(teacher_id[j]).text();
    $("#t_id").val(t_id);
    var form=new FormData();
    form.append("id",t_id);
    $.ajax({
      url:"/acdemic/teacherinfo",
      type:"POST",
      data:form,
      processData : false,
      contentType : false,
      dataType:"json",
      success:function(data){
        if(data){
          $("#t_name").val(data.name);
          $("#t_sex").val(data.sex);
          $("#t_college").val(data.college);
          $("#t_address").val(data.address);
          $("#t_birthday").val(data.birthday);
          $("#t_phone").val(data.phone);
          $("#t_email").val(data.email);
        }
        else{
          alert("查询详细信息失败！");//一般不会出现
        }
      }
    });
  }
}
//初始化教师的密码
document.getElementById("default_teacher").onclick=function(){
  var name=$("#t_name").val();
  if(confirm("确认将 "+name+" 密码初始化吗?")==true){
    var id=$("#t_id").val();
    var form=new FormData();
    form.append("id",id);
    //根据id初始化对应教师的密码123456
    $.ajax({
        url:"/acdemic/defaultTeacher",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        success:function(result){
          if(result.code=="success"){
            alert("初始化成功！");
          }
          else{
            alert("初始化失败！");
          }
        }
      });
  }
}
//保存教师信息的修改
document.getElementById("save_teacher").onclick=function(){
  if(confirm("确认保存修改")==true){
    var id=$("#t_id").val();
    var name=$("#t_name").val();
    var sex=$("#t_sex").val();
    var college=$("#t_college").val();
    var address=$("#t_address").val();
    var birthday=$("#t_birthday").val();
    var phone=$("#t_phone").val();
    var email=$("#t_email").val();
    if(name==""||sex==""||college==""||grade==""||classname==""||address==""||birthday==""||phone==""||email==""){
      alert("保存失败！请提交完整的资料");
    }
    else{
      var form=new FormData();
      form.append("id",id);
      form.append("name",name);
      form.append("sex",sex);
      form.append("college",college);
      form.append("address",address);
      form.append("birthday",birthday);
      form.append("phone",phone);
      form.append("email",email);
      //根据ID保存信息
      $.ajax({
        url:"/acdemic/saveTeacher",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        success:function(result){
          if(result.code=="success"){
            alert("信息保存成功！");
          }
          else{
            alert("保存失败！");
          }
        }
      });
    }
  } 
}



/*------------------列表更新函数-------------------------*/

//学生,根据年级和班级返回result为指定的学生(name、id、sex、class_grade、class_name、college)的数组
//如果收到的classgrade、classname都=="",那么返回全部的学生，也要考虑其中之一为""的情况
function getStudentList(){
  var classgrade=$("#grade option:selected").text();
  var classname=$("#class option:selected").text();
  if(classgrade=="年级"){classgrade="";}
  if(classname=="班级"){classname="";}
  var form=new FormData();
  form.append("classgrade",classgrade);
  form.append("classname",classname);
    var str='<div class="row"><p class="col s2">姓名</p><p class="col s2">学号</p><p class="col s1">性别</p><p class="col s1">年级</p><p class="col s2">班级</p><p class="col s3">学院</p><p class="col s1">操作</p></div>';
    console.log(form);
    $.ajax({
    url:"/acdemic/getStudentList",
    type:"POST",
    data:form,
    processData : false,
    contentType : false,
    dataType : "json",
    success:function(result){
        $("#student_list").empty();
        for(var i=0;i<result.length;i++){
          str+='<li class="row"><p class="col s2">'+result[i].name+'</p><p class="col s2">'+result[i].id+'</p><p class="col s1">'+result[i].sex+'</p><p class="col s1">'+result[i].class_grade+'</p><p class="col s2">'+result[i].class_name+'</p><p class="col s3">'+result[i].college+'</p><p class="col s1"><a href="#student_detail" name="student_edit">修改</a></p></li>';
        }
        $("#student_list").append(str);

    }
  });
}

//教师,result返回一个教师姓名、职工号、性别、学院元组作为一个元组组成的数组
//name、id、sex、college
function getTeacherList(){
  var str='<div class="row"><p class="col s2">姓名</p><p class="col s3">职工号</p><p class="col s2">性别</p><p class="col s3">学院</p><p class="col s2">操作</p></div>';
  $.ajax({
    url:"/acdemic/getTeacherList",
    type:"POST",
    processData : false,
    contentType : false,
    dataType:"json",
    success:function(result){
        $("#allteacher").empty();
        for(var i=0;i<result.length;i++){
          str+='<li class="row"><p class="col s2">'+result[i].name+'</p><p class="col s3" name="teacher_id">'+result[i].id+'</p><p class="col s2">'+result[i].sex+'</p><p class="col s3">'+result[i].college+'</p><p class="col s2"><a href="#teacher_detail" name="teacher_edit">修改</a></p></li>';
        }
        $("#allteacher").append(str);
    }
  });
}


document.getElementById("search_student").onclick=function(){
  getStudentList();
}



////dasdasdsad

var jsons = [
{
  "name": "对对对对1",
  "id" : "3123213123",
  "college" : "计算机科学与工程学院",
  "class" : "网络工程班",
  "grade" : "2016级",
},
{
  "name": "对对对对2",
  "id" : "3123213123",
  "college" : "计算机科学与工程学院",
  "class" : "网络工程班",
  "grade" : "2016级",
},{
  "name": "对对对对3",
  "id" : "3123213123",
  "college" : "计算机科学与工程学院",
  "class" : "网络工程班",
  "grade" : "2016级",
},{
  "name": "对对对对4",
  "id" : "3123213123",
  "college" : "计算机科学与工程学院",
  "class" : "网络工程班",
  "grade" : "2016级",
},{
  "name": "对对对对5",
  "id" : "3123213123",
  "college" : "计算机科学与工程学院",
  "class" : "网络工程班",
  "grade" : "2016级",
},{
  "name": "对对对对6",
  "id" : "3123213123",
  "college" : "计算机科学与工程学院",
  "class" : "网络工程班",
  "grade" : "2016级",
},{
  "name": "对对对对7",
  "id" : "3123213123",
  "college" : "计算机科学与工程学院",
  "class" : "网络工程班",
  "grade" : "2016级",
},{
  "name": "对对对对8",
  "id" : "3123213123",
  "college" : "计算机科学与工程学院",
  "class" : "网络工程班",
  "grade" : "2016级",
}];
function getTeacherClass(){
  var ul = document.getElementById("teacher-class");
  for (var i = 0; i < jsons.length; i++) {
    var name = document.createElement("span");
    name.innerHTML = jsons[i]["name"];
    name.className = "td";

    var id = document.createElement("span");
    id.innerHTML = jsons[i]["id"];
    id.className = "td";

    var college = document.createElement("span");
    college.innerHTML = jsons[i]["college"];
    college.className = "td";

    var class_name = document.createElement("span");
    class_name.innerHTML = jsons[i]["class"];
    class_name.className = "td";

    var grade = document.createElement("span");
    grade.innerHTML = jsons[i]["grade"];
    grade.className = "td";

    var button = document.createElement("button");
    button.innerHTML = "移除";
    button.className = "btn waves-effect waves-light";
    var li = document.createElement("li");
    li.className = "lis";
    li.appendChild(name);
    li.appendChild(id);
    li.appendChild(college);
    li.appendChild(class_name);
    li.appendChild(grade);
    li.appendChild(button);
    ul.appendChild(li);
  }
}