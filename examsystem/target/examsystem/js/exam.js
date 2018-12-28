
//jsons数组前端测试用，后台传数据后写完后可以删除
var jsons = new Array();
jsons[0] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "选择",
	"options0" : "A选项内容",
	"options1" : "B选项内容",
	"options2" : "C选项内容",
	"options3" : "D选项内容",
	"id" : "111",
}
jsons[1] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈2",
	"type" : "选择",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"id" : "112",
}
jsons[2] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈3",
	"type" : "选择",
	"options0" : "正确",
	"options1" : "错误",
	"options2" : "错误",
	"options3" : "错误",
	"id" : "113",
}
jsons[3] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈4",
	"type" : "选择",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"id" : "114",
}
jsons[4] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈5",
	"type" : "选择",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"id" : "115",
}
jsons[5] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈6",
	"type" : "选择",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"id" : "116",
}
jsons[6] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "选择",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"id" : "117",
}
jsons[7] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "选择",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"id" : "118",
}
jsons[8] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "选择",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"id" : "119",
}
jsons[9] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "选择",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
	"id" : "120",
}
jsons[10] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "判断",
	"options0" : "正确",
	"options1" : "错误",
	"id" : "121",
}
jsons[11] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "判断",
	"options0" : "正确",
	"options1" : "错误",
	"id" : "122",
}
jsons[12] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "判断",
	"options0" : "正确",
	"options1" : "错误",
	"id" : "123",
}
jsons[13] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "判断",
	"options0" : "正确",
	"options1" : "错误",
	"id" : "124",
}
jsons[14] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"type" : "判断",
	"options0" : "正确",
	"options1" : "错误",
	"id" : "125",
}
var a = new Array();
a[0] = {
	"question":"少时诵诗1_____",
	"id" : "1123",
};
a[1] = {
	"question":"少时诵诗1_____",
	"id" : "1124",
};
a[2] = {
	"question":"少时诵诗1_____",
	"id" : "1125",
};
a[3] = {
	"question":"少时诵诗1_____",
	"id" : "1126",
};
a[4] = {
	"question":"少时诵诗1_____",
	"id" : "1127",
};
var b = new Array();
b[0] = {
	"question":"你快乐吗？",
	"id" : "1223",
};
b[1] = {
	"question":"你快乐吗？",
	"id" : "1224",
};
b[2] = {
	"question":"你快乐吗？",
	"id" : "1225",
};
b[3] = {
	"question":"你快乐吗？",
	"id" : "1226",
};
b[4] = {
	"question":"你快乐吗？",
	"id" : "1227",
};
function datas (){
	this.title = "编译原理测试";
	this.chooseAndTF = [];  //选择和判断题放一起
	this.fill = [];
	this.ask = [];
}
var data = new datas();
for (var i = 0; i < jsons.length; i++) {
	data.chooseAndTF[i] = jsons[i];
}
for (var i = 0; i < a.length; i++) {
	data.fill[i] = a[i];
}
for (var i = 0; i < b.length; i++) {
	data.ask[i] = b[i]
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
	var cAndTf = document.createElement
	var jsons = new Array();
	jsons = data.chooseAndTF;
	for (var i = 0; i < jsons.length; i++) {
		//创建试题最外的div
		var dv = document.createElement("div");
		dv.className = "question";
		dv.setAttribute("questionid",jsons[i]["id"]);
	
		//创建题干p
		var p = document.createElement("p");
		p.className = "pan";
		p.innerHTML = (i+1).toString() + "、" + jsons[i]["title"];
	
		//创建选项ul
		var ul = document.createElement("ul");
		ul.className = "collection";
		ul.id = "u" + (i+1);
		ul.setAttribute("index",i+1);
		if(jsons[i]["type"] == "选择"){
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


	//填空题
	var a = new Array();
	a = data.fill;
	var contain2 = document.getElementById("contain2");
	for (var i = 0; i < a.length; i++) {
		var dv = document.createElement("div");
		dv.className = "question";
		dv.setAttribute("questionid",a[i]["id"]);
		var p = document.createElement("p");
		p.innerHTML = (i+16).toString() + "、" + a[i]["question"];
		p.className = "pan";
		dv.appendChild(p);
		var divi = document.createElement("div");
		divi.className = "divider";
		dv.appendChild(divi);
		var input = document.createElement("input");
		input.placeholder = "请在这里作答";
		input.id = i + 16;
		input.style.backgroundColor = "#fff";
		input.style.marginLeft = "20%";
		input.style.width = "40%";
		input.name = 'fill';

		input.setAttribute("index",i+16);
		input.onblur = changeBGC2;

		// input.name = 
		dv.appendChild(input);

		//定位锚点
		var division = document.createElement("div");
		division.id = "d" + (i+16);
		division.className = "divi";
		contain2.appendChild(division);
		contain2.appendChild(dv);
	}

	//问答题
	var b = new Array();
	b = data.ask;
	var contain3 = document.getElementById('contain3');
	for (var i = 0; i < b.length; i++) {
		var dv = document.createElement("div");
		dv.className = "question";
		dv.setAttribute("questionid",b[i]["id"]);
		var p = document.createElement("p");
		p.innerHTML = (i+21).toString() + "、" + b[i]["question"];
		p.className = "pan";
		dv.appendChild(p);
		var divi = document.createElement("div");
		divi.className = "divider";
		dv.appendChild(divi);
		var textarea = document.createElement("textarea");
		textarea.placeholder = "请在这里作答";
		textarea.id = i + 21;
		textarea.style.backgroundColor = "#fff";
		textarea.style.marginTop = "15px";
		textarea.style.marginBottom = "25px";
		textarea.style.width = "80%";
		textarea.style.height = "160px";
		textarea.style.marginLeft = "10%";
		textarea.name = 'ask';

		textarea.setAttribute("index",i+21);
		textarea.onblur = changeBGC2;

		// input.name = 
		dv.appendChild(textarea);

		//定位锚点
		var division = document.createElement("div");
		division.id = "d" + (i+21);
		division.className = "divi";
		contain3.appendChild(division);
		contain3.appendChild(dv);
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

function changeBGC2(){
	var id = "c" + this.getAttribute("index");
	console.log(id);
	if(this.value)
		document.getElementById(id).style.backgroundColor = "orange";
	else
		document.getElementById(id).style.backgroundColor = "";
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



var submitCount = 0;
//获取作答答案
function getAnswers(isTimeRunOut){
	function result () {
		this.id = [];
		this.answers = [];
	}
	var result = new result();
	var id = new Array();
	var answers = new Array();
	var num = 0;
	//选择判断部分
	for (var i = 0; i < 25; i++) {
		answers[i] = 0;
	}
	for (var i = 0; i < 25; i++) {
		id[i] = 0;
	}
	console.log(id);
	var inputs = document.getElementById("contain").getElementsByTagName("input");
	console.log(inputs.length);
	var index = -1;
	for (var i = 0; i < inputs.length; i++) {
		if(i<=39){
			if(i % 4 == 0 ){
				id[++index] = inputs[i].parentNode.parentNode.parentNode.getAttribute("questionid");
			}
		}
		else if(i <= 49){
			if(i % 2 == 0){
				id[++index] = inputs[i].parentNode.parentNode.parentNode.getAttribute("questionid");
			}
		}
	}
	for (var i = 0; i < inputs.length; i++) {
		if(inputs[i].checked == true){
			var index = inputs[i].id;
			if(index.length == 6){
				answers[index.charAt(4)-1] = index.charAt(5);
			}
			else{
				answers[index.substring(4,6)-1] = index.charAt(6);
				
			}
			//统计作答题目数量
			num++;

		}
	}
	//填空答案
	var fills = document.getElementsByName("fill");
	for (var i = 0; i < fills.length; i++) {
		answers[i+15] = fills[i].value;
		id[i+15] = fills[i].parentNode.getAttribute("questionid");
		if(fills[i].value)
			num++;
	}

	//问答题
	var asks = document.getElementsByName("ask");
	console.log(asks);
	for (var i = 0; i < asks.length; i++) {
			answers[i+20] = asks[i].value;
			id[i+20] = asks[i].parentNode.getAttribute("questionid");
			console.log(asks[i].value);
		if(asks[i].value){
			num++;
		}
	}
	console.log(answers);
	console.log(id);
	for (var i = 0; i < id.length; i++) {
		result.id[i] = id[i];
		result.answers[i] = answers[i];
	}
	// if(!isTimeRunOut){
	// 	if(num != 25)
	// 		return null;
	// 	else
	// 		return result;
	// }else
	// 	return result;
	return result;
}

//上传考试答案
function uploadAnswers(answers){
	$.ajax({
		url : "/uploadAnswers",
		type : "POST",
		data : answers,
		//上传的答案是一个object，如下
		//answers = {
		//	this.chooseAndTF = [];  数组长度为15，对应1-15题，数组元素赋值为0-4，0为未选，1-4代表ABCD
		//	this.fill = [];	数组长度为5，元素是字符串，""代表未作答
		//	this.ask = [];	数组长度为5，元素是字符串，""代表未作答
		//}
        processData : false,
        contentType : false,
        success : function(result){
        	if (result == "success") {
        		alert("试卷提交成功，离开时请记得带齐所有物品。");
				window.location.href = "/student";
        	}
        	else
        		alert("提交失败，请重新提交一次");
        },
        error : function() {
        	alert("网络原因提交失败，请重新提交一次");
        	submitCount--;
        }
	});
}

//提交试卷时记录答案
document.getElementById("submit").onclick = function() {
	if(submitCount){
		alert("你已经提交过一次，无法重复提交！");
		return false;
	}
	var answers = getAnswers(false);
	submitCount++;
	if(!answers){
		alert("试卷还没写完，请写完后再提交！");
		submitCount--;
		return false;
	}
	uploadAnswers(answers);
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
// var end = getExamTime();
var end = "2016-03-28 11:27:00";
var d2 =  end.replace(/\-/g, "/");
var t1 = "2016-03-28 10:27:00";
var d1 = t1.replace(/\-/g, "/");

var date1 = new Date(d1);//目前网络时间

var date2  = new Date(d2);//截止提交时间

var maxtime = (date2-date1)/1000;
// var maxtime = getExamTime(); 
function CountDown() {
    if (maxtime >= 0) {
        minutes = Math.floor(maxtime / 60);
        seconds = Math.floor(maxtime % 60);
        var msg = minutes + "分" + seconds + "秒";
        document.getElementById("timer").innerHTML = msg;
        if (maxtime == 10 * 60)
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