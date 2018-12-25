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
    }
}



//确定注销按钮
document.getElementById("logout").onclick = function(){
    //退出登录，跳转到登录界面
    $.ajax({
        url : "/student/logout",
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
    out[3].style.display = "block";
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
        url : "/student/changePassword",
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
        },
        error : function() {
            alert("提交失败，请重试");
        }
    });
}
//取消修改
document.getElementById('cancel').onclick = function() {
    document.getElementById('changePassword').style.display = "none";
}



//修改信息按钮
var inputs = document.getElementById('oout1').getElementsByTagName("input");


function initInfo(json) {
    $("#first_name").val(json.first_name);
    $("#StudentNumber").val(json.StudentNumber);
    $("#sex").val(json.sex);
    $("#college").val(json.college);
    $("#grade").val(json.grade);
    $("#class").val(json.class);
    $("#address").val(json.address);
    $("#birthday").val(json.birthday);
    $("#phoneNumbr").val(json.phoneNumbr);
    $("#email").val(json.email);

    //菜单栏个人信息设置
    $("#Smail").val(json.email);
    $("#Sname").val(json.first_name);
    $("#college2").val(json.college);
    $("#class2").val(json.class);

    //导航栏加载名字
    $("#Sname1").val(json.first_name);
}

//获取学生信息,返回一个json格式的数据，里面的各项信息按顺序排列
function getStudentInfo() {
    $.ajax({
        url : "/student/getInfo",
        type : "POST",
        processData : false,
        contentType : false,
        dataType : "json",
        success: function(data){
            if (data.code=="success")
            {
                initInfo(data);
                for (var i = 0; i < inputs.length; i++) {
                    inputs[i].disabled = true;
                }
            }
        },
        error : function(){
            // alert("加载信息失败，请刷新页面");
        }
    });
}

var ExamList = [
    {
        "Type" : "done",
        "title" : "数据库测试1",
        "start" : "2018-09-01 22:08",
        "end" : "2018-09-01 23:08",
        "id" : "123",
        "grade" : "85",
},
{
        "Type" : "do",
        "title" : "数据库测试2",
        "start" : "2018-09-01 22:08",
        "end" : "2018-09-01 23:08",
        "id" : "456",
}];


function initExamList(ExamList) {
    console.log(ExamList.length);
    console.log(typeof(ExamList));
    var containerDone = document.getElementById("oout3").children[0];
    var containerDo = document.getElementById("oout2").children[0];
    for (var i = 0; i < ExamList.length; i++) {

        var dv1 = document.createElement("div");
        dv1.className = "col s12 m6 l4 hoverable";
        dv1.setAttribute("examId",ExamList[i]["id"]);
        var dv2 = document.createElement("div");
        dv2.className = "card";
        dv1.appendChild(dv2);

        var dv3 = document.createElement("div");
        var span = document.createElement("span");
        span.innerHTML = ExamList[i]["title"];
        span.className = "card-title";
        dv3.appendChild(span);
        var br = document.createElement("br");
        dv3.appendChild(br);

        var p1 = document.createElement("span");
        p1.innerHTML = "开始时间：";
        dv3.appendChild(p1);
        var p2 = document.createElement("span");
        p2.innerHTML = ExamList[i]["start"];
        dv3.appendChild(p2);
        var br1 = document.createElement("br");
        dv3.appendChild(br1);

        var p3 = document.createElement("span");
        p3.innerHTML = "结束时间：";
        dv3.appendChild(p3);
        var p4 = document.createElement("span");
        p4.innerHTML = ExamList[i]["end"];
        dv3.appendChild(p4);
        var br2 = document.createElement("br");
        dv3.appendChild(br2);

        dv2.appendChild(dv3);
    
        var dv4 = document.createElement("div");
        dv4.className = "card-action blue-grey darken-1";
        dv2.appendChild(dv4);
    
        var a = document.createElement("a");
        a.href = "#";
        dv4.appendChild(a);


        if(ExamList[i]["Type"] == "done"){
            a.innerHTML = "查看考试";
            dv3.className = "card-content white-text amber darken-4";
            var grade = document.createElement("span");
            grade.innerHTML = "成绩：";
            var grade2 = document.createElement("span");
            grade2.innerHTML = ExamList[i]["grade"];
            dv3.appendChild(grade);
            dv3.appendChild(grade2);
            a.onclick = function() {
                var id = dv1.getAttribute("examId");
                console.log(id);
                $.ajax({
                    url : "/student/beginExam",
                    //开始考试，需计时
                    type : "POST",
                    data : {"examId" : id },
                    processData : false,
                    contentType : false,
                    dataType : "json",
                    success : function() {
                        //成功则在新页面加载试卷。需要根据试卷ID返回试卷信息给考试页面。
                        window.open("./exam-detail.html");
                    },
                    error : function() {
                        alert("进入失败，请重试");
                    }
                });
                window.open("./exam-detail.html");
            }
            containerDone.appendChild(dv1);
        }else if(ExamList[i]["Type"] == "do"){
            a.innerHTML = "进入考试";
           dv3.className = "card-content white-text cyan";
            containerDo.appendChild(dv1);
            a.onclick = function() {
                var id = dv1.getAttribute("examId");
                $.ajax({
                    url : "/student/getExam",
                    type : "POST",
                    data : {"examId" : id },
                    processData : false,
                    contentType : false,
                    dataType : "json",
                    success : function() {
                        //成功则在新页面加载试卷。需要根据试卷ID返回试卷信息给考试页面。
                        window.open("./exam.html");
                    },
                    error : function() {
                        alert("进入失败，请重试");
                    }
                });
                window.open("./exam.html");
            }
        }
    }
}

initExamList(ExamList);//前端测试用，后台写完可以删除，包括上面的数据ExamList

//获取试卷列表
function getExamList(){
    $.ajax({
        url : "/student/getExamList",
        type : "POST",
        processData : false,
        contentType : false,
        dataType : "json",
        success : function(data){
            if(data.code == "success"){
                initExamList(data);
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
    document.getElementById('StudentNumber').disabled=true;
    document.getElementById('first_name').disabled=true;
    document.getElementById('class').disabled=true;
    document.getElementById('college').disabled=true;
    document.getElementById('grade').disabled=true;


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
    //发送请求附带数据json
    $.ajax({
        url : "/student/changeInfo",
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
                alert("修改成功！");
                this.style.display = "none";
                document.getElementById('cancelChange').style.display = "none";
                document.getElementById('changeInfo').parentNode.style.display = "inline-block";
            }else {
                alert("修改失败！");
            }
        }
    });
}
