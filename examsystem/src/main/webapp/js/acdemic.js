function getAllList(){
  getStudentList();
  getTeacherList();
  getQuestionList();
  getAllClass();
}

function getAllClass(){
  //result返回数据库中学生所在的所有年级class_grade和班级class_name
  var str1='<option value="" disabled selected>年级</option>';
  var str2='<option value="" disabled selected>班级</option>';
  $.ajax({
    url:"/getAllClass",
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

/*管理试题页面*/
//弹出对应id的试题修改框，ajax根据id获取除id外的题目、选项、以及答案
var question_edit=document.getElementsByName("question_edit");
for (var i = 0; i < question_edit.length; i++) {
  question_edit[i].setAttribute("index",i);
}
for(var i=0;i<question_edit.length;i++){
  question_edit[i].onclick=function(){
    var j=this.getAttribute("index");
    var type=document.getElementsByName("type");
    var question_id=document.getElementsByName("question_id");
    var q_id=$(question_id[j]).text();
    type=$(type[j]).text();
    var form=new FormData();
    form.append("id",q_id);//题目ID
    if(type=="判断题"){
      question_edit[j].setAttribute("href","#tf_detail");
      $("#tf_id").text(q_id);
      $.ajax({
        url:"/getTFinfo",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        dataType:"json",
        success:function(data){
          if(data){
            $("#TorF").val(data.question);
            if(data.answer=="对"){
              $("#_T").prop("checked",true);
            }
            else if(data.answer=="错"){
              $("#_F").prop("checked",true);
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
    if(type=="选择题"){
      question_edit[j].setAttribute("href","#choose_detail");
      $("#choose_id").text(q_id);
      //返回的answer为A/B/C/D
      $.ajax({
        url:"/getChooseinfo",
        type:"POST",
        data:form,
        processData : false,
        contentType : false,
        dataType:"json",
        success:function(data){
          if(data){
            $("#choose_q").val(data.question);
            $("#A").val(data.A);
            $("#B").val(data.B);
            $("#C").val(data.C);
            $("#D").val(data.D);
            if(data.answer=="A"){
              $("#_A").prop("checked",true);
            }
            else if(data.answer=="B"){
              $("#_B").prop("checked",true);
            }
            else if(data.answer=="C"){
              $("#_C").prop("checked",true);
            }
            else if(data.answer=="D"){
              $("#_D").prop("checked",true);
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
document.getElementById("save_tf").onclick=function(){
  if(confirm("确认保存修改")==true){
    var id=$("#tf_id").text();
    var tf_question=$("#TorF").val();
    var answer=$('#TF input:radio:checked').val();//值为“对”或“错”
    if(tf_question==""||answer==""){
      alert("保存失败！请提交完整的题目");
    }
    else{
      form=new FormData();
      form.append("question",tf_question);
      form.append("answer",answer);
      //根据ID保存信息
      $.ajax({
        url:"/saveStudent",
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
document.getElementById("save_choose").onclick=function(){
  if(confirm("确认保存修改")==true){
    var id=$("#choose_id").text();
    var choose_question=$("#choose_q").val();
    var A=$("#A").val();
    var B=$("#B").val();
    var C=$("#C").val();
    var D=$("#D").val();
    var choose=$('#choose input:radio:checked').val();//值为A/B/C/D
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
      $.ajax({
        url:"/saveStudent",
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



/*管理学生页面*/
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
    form=new FormData();
    form.append("id",s_id);
    $.ajax({
      url:"/studentinfo",
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
      form=new FormData();
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
        url:"/saveStudent",
        type:"POST",
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


/*管理教师信息页面*/
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
    form=new FormData();
    form.append("id",t_id);
    $.ajax({
      url:"/teacherinfo",
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
      form=new FormData();
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
        url:"/saveStudent",
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



/*列表更新函数*/

//学生,根据年级和班级返回result为指定的学生(name、id、sex、class_grade、class_name、college)的数组
//如果收到的classgrade、classname都=="",那么返回全部的学生，也要考虑其中之一为""的情况
function getStudentList(){
  var classgrade=$("#grade").text();
  var classname=$("#class").text();
  if(classgrade=="年级"){classgrade="";}
  if(classname=="班级"){classname="";}
  var form=new FormData();
  form.append("classgrade",classgrade);
  form.append("classname",classname);
  $.ajax({
    url:"/getStudentList",
    type:"POST",
    data:form,
    processData : false,
    contentType : false,
    dataType : "json",
    success:function(result){
      if (result){
        var str='<p class="col s2">姓名</p><p class="col s2">学号</p><p class="col s1">性别</p><p class="col s1">年级</p><p class="col s2">班级</p><p class="col s3">学院</p><p class="col s1">操作</p>';
        $("#student_list").empty();
        for(var i=0;i<result.length;i++){
          str+='<li><p class="col s2">'+result[i].name+'</p><p class="col s2">'+result[i].id+'</p><p class="col s1">'+result[i].sex+'</p><p class="col s1">'+result[i].class_grade+'</p><p class="col s2">'+result[i].class_name+'</p><p class="col s3">'+result[i].college+'</p><p class="col s1"><a href="#student_detail" name="student_edit">修改</a></p></li>';
        }
        $("#student_list").append(str);
      }
      else{
        alert("列表载入失败！");
      }
    }
  });
}

//教师,result返回一个教师姓名、职工号、性别、学院元组作为一个元组组成的数组
//name、id、sex、college
function getTeacherList(){
  var str='<p class="col s2">姓名</p><p class="col s3">职工号</p><p class="col s2">性别</p><p class="col s3">学院</p><p class="col s2">操作</p>';
  $.ajax({
    url:"/getTeacherList",
    type:"POST",
    processData : false,
    contentType : false,
    dataType:"json",
    success:function(result){
      if(result){
        $("#allteacher").empty();
        for(var i=0;i<result.length;i++){
          str+='<li><p class="col s2">'+result[i].name+'</p><p class="col s3" name="teacher_id">'+result[i].id+'</p><p class="col s2">'+result[i].sex+'</p><p class="col s3">'+result[i].college+'</p><p class="col s2"><a href="#teacher_detail" name="teacher_edit">修改</a></p></li>';
        }
        $("#allteacher").append(str);
      }
      else{
        alert("列表载入失败！");
      }
    }
  });
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
        str='<p class="col s2">试题id</p><p class="col s5">题目</p><p class="col s2">章节</p><p class="col s2">题型</p><p class="col s1">操作</p>';
        $("#question_list").empty();
        for(var i=0;i<result.length;i++){
          str+='<p class="col s2" name="question_id">'+result[i].id+'</p><p class="col s5">'+result[i].question.substr(0,20)+'...</p><p class="col s2">'+result[i].section+'</p><p class="col s2" name="type">'+result[i].question_type+'</p><p class="col s1"><a href="#!" name="question_edit">修改</a></p></li>';
        }
        $("#question_list").append(str);
      }
      else{
        alert("列表载入失败！");
      }
    }
  });
}

document.getElementById("search_student").onclick=function(){
  getStudentList();
}
document.getElementById("search_question").onclick=function(){
  getQuestionList();
}