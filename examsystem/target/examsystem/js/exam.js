
//jsons数组前端测试用，后台传数据后写完后可以删除
var jsons = new Array();
jsons[0] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "choice",
	"options0" : "A选项内容",
	"options1" : "B选项内容",
	"options2" : "C选项内容",
	"options3" : "D选项内容",
	"accuracy" : "50%",
	"right-key" : "1", //1-4表示ABCD，判断题则是1、2表示正确错误
	"id" : "111"
}
jsons[1] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈2",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1",
}
jsons[2] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈3",
	"type" : "judge",
	"options0" : "正确",
	"options1" : "错误",
	"accuracy" : "80%",
	"right-key" : "1",
}
jsons[3] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈4",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1",
}
jsons[4] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈5",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1",
}
jsons[5] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈6",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1",
}
jsons[6] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1",
}
jsons[7] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1",
}
jsons[8] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1",
}
jsons[9] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1",
}
jsons[10] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1",
}
jsons[11] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1", 
}
jsons[12] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1", 
}
jsons[13] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1", 
}
jsons[14] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "choice",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"accuracy" : "50%",
	"right-key" : "1", 
}

function datas (){
	this.title = "编译原理测试";
	this.jsons = [];
}
var data = new datas();
for (var i = 0; i < jsons.length; i++) {
	data.jsons[i] = jsons[i];
}
data.title = "编译原理测试1";

console.log(data);
//以上内容是前端测试写的数据，写后台时注释掉，输出的data是所需要的数据类型


//请求获得试卷的数据data加载试卷
function onloadExam(){
	//请求试卷信息
	$.ajax({
        url : "/getExamInfo",
        type : "POST",
        processData : false,
        contentType : false,
        dataType : "json",
        success: function(data,result){
            if (result.code=="success")
                initExam(data);
            else
				alert("试卷加载失败！请重新加载");
        }
    });
}


//初始化试卷
function initExam(data){
	if(!data){
		alert("试卷加载失败！请重新加载");
		return false;
	}
	if(!data.title){
		alert("试卷标题加载出错");
		document.getElementById("title").innerHTML = "考试开始";
	}else {
		document.getElementById("title").innerHTML = data.title;
	}
	var jsons = new Array();
	jsons = data.jsons;
	for (var i = 0; i < jsons.length; i++) {
		//创建试题最外的div
		var dv = document.createElement("div");
		dv.className = "question";
	
		//创建题干p
		var p = document.createElement("p");
		p.className = "pan";
		p.innerHTML = (i+1).toString() + "、" + jsons[i]["title"];
	
		//创建选项ul
		var ul = document.createElement("ul");
		ul.className = "collection";
		ul.id = "u" + (i+1);
		ul.setAttribute("index",i+1);
		if(jsons[i]["type"] == "choice"){
			for (var j = 0; j < 4; j++) {
				//创建每个选项li
				var li = document.createElement("li");
				li.className = "collection-item";
				var input = document.createElement("input");
				input.name = "group" + (i+1);
				input.type = "radio";
				input.id = "text" + (i+1) + (j+1);
				var label = document.createElement("label");
				label.setAttribute("for",input.id);
				label.innerHTML = String.fromCharCode(65+j) + "、" + jsons[i]["options" + j];
				li.appendChild(input);
				li.appendChild(label);
				ul.appendChild(li);
			}
		}else {
			for (var j = 0; j < 2; j++) {
				//创建每个选项li
				var li = document.createElement("li");
				li.className = "collection-item";
				var input = document.createElement("input");
				input.name = "group" + (i+1);
				input.type = "radio";
				input.id = "text" + (i+1) + (j+1);
				var label = document.createElement("label");
				label.setAttribute("for",input.id);
				label.innerHTML = jsons[i]["options" + j];
				li.appendChild(input);
				li.appendChild(label);
				ul.appendChild(li);
			}
		}
		dv.appendChild(p);
		dv.appendChild(ul);

		//创建定位的锚点
		var division = document.createElement("div");
		division.id = "d" + (i+1);
		division.className = "divi";
		document.getElementById("contain").appendChild(division);
		document.getElementById("contain").appendChild(dv);
	}
}
initExam(data);  //前端写代码时测试用，后台写完可删除，改为body标签调用onloadExam()






//设置右侧题目导航每个题号随着做题进度而修改背景颜色
function changeBGC() {
	this.children[0].checked = true; 
	var id = 'c' + this.parentNode.getAttribute("index");
	document.getElementById(id).style.backgroundColor = "orange";
}

var lis = document.getElementsByClassName("collection-item");
for (var i = 0; i < lis.length; i++) {
	lis[i].onclick = changeBGC;
}

//点击右侧题目导航栏跳转至对应题目
function f1() {
	var index = this.id;
	var id;
	if(index.length == 2)
		index = index.charAt(1);
	else
		index = index.substring(1,3);
	id = "#" + "d" + index;
	console.log(id);
	window.location.href = id;
}

function located() {
	var dvs = document.getElementsByClassName("dd");
	for (var i = 0; i < dvs.length; i++) {
		dvs[i].onclick = f1;
	}
}
located();

//设定每个li的mouseover事件以及上边距
function f2() {
	this.style.cursor = "pointer";
}
function setCursor() {
	var lis = document.getElementsByTagName("li");
	for (var i = 1; i < lis.length; i++) {
		lis[i].onmouseover = f2;
		lis[i].style.marginTop = "15px";
	}
}
setCursor();




//获取作答答案
function getAnswers(isTimeRunOut){
	var answers = {};
	var num = 0;
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		if(inputs[i].checked == true){
			var index = inputs[i].id;
			if(index.length == 6)
				answers[index.charAt(4)] = index.charAt(5);
			else
				answers[index.substring(4,6)] = index.charAt(6);
			//统计作答题目数量
			num++;

		}
	}
	if(!isTimeRunOut){
		if(num != 15)
			return null;
		else
			return answers;
	}else
		return answers;
	
}

//上传考试答案
function uploadAnswers(answers){
	$.ajax({
		url : "/uploadAnswers",
		type : "POST",
		data : answers,
        processData : false,
        contentType : false,
        success : function(result){
        	if (result == "success") {
        		alert("试卷提交成功，离开时请记得带齐所有物品。");
        	}
        	else
        		alert("提交失败，请重新提交一次");
        }
	});
}

//提交试卷时记录答案
document.getElementById("submit").onclick = function() {
	var answers = getAnswers(false);
	if(!answers){
		// console.log(answers);
		// console.log("11");
		alert("试卷还没写完，请写完后再提交！");
		return false;
	}
	uploadAnswers(answers);
	window.location.href = "./student.jsp";
}



//时间还剩十分钟提示
function warning(){
	Materialize.toast('离考试结束还有十分钟！', 5000);
}
//获得考试时间
function getExamTime(){
	$.ajax({
		url : "/getExamTime",
		type : "POST",
		processData : false,
		contentType : false,
		success : function(result){
			if(result.code == "success"){
				return result.time;
			}
			else{
				return null;
			}
		}
	});
}
var maxtime = 303;
// var maxtime = getExamTime(); 
function CountDown() {
    if (maxtime >= 0) {
        minutes = Math.floor(maxtime / 60);
        seconds = Math.floor(maxtime % 60);
        var msg = minutes + "分" + seconds + "秒";
        document.getElementById("timer").innerHTML = msg;
        if (maxtime == 5 * 60)
        	warning();
        --maxtime;
    }else{
        clearInterval(timer);
        var answers = getAnswers(true);
        uploadAnswers(answers);
        alert("考试时间到，系统将自动上传答题情况!");
    }
}
timer = setInterval("CountDown()", 1000);