
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
function datas (){
	this.title = "编译原理测试";
	this.jsons = [];
	this.examTime = "2018-12-23";
}
var data = new datas();
for (var i = 0; i < jsons.length; i++) {
	data.jsons[i] = jsons[i];
}
data.title = "编译原理测试";

console.log(data);
//以上内容是前端测试写的数据，写后台时注释掉，输出的data是所需要的数据类型

//请求获得试卷的数据json数组（jsons）加载试卷
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
            	//返回的数据可以查看控制台的data
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
		document.getElementById("title").innerHTML = "考试详情";
	}else {
		document.getElementById("title").innerHTML = data.title;
	}
	if(!data.examTime){
		alert("考试时间加载出错");
	}else{
		document.getElementById("timer").innerHTML = data.examTime;
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
				var label = document.createElement("label");
				label.innerHTML = String.fromCharCode(65+j) + "、" + jsons[i]["options" + j];
				li.appendChild(label);
				ul.appendChild(li);
			}
		}else {
			for (var j = 0; j < 2; j++) {
				//创建每个选项li
				var li = document.createElement("li");
				li.className = "collection-item";
				var label = document.createElement("label");
				label.innerHTML = jsons[i]["options" + j];
				li.appendChild(label);
				ul.appendChild(li);
			}
		}
		var answer = String.fromCharCode(64+parseInt(jsons[i]["right-key"]));
		var percen = document.createElement("li");
		percen.className = "info collection-item";
		percen.innerHTML = "本题正确答案：" + answer + ";" + "<br/>"+"正确率为：" + jsons[i]["accuracy"];
		ul.appendChild(percen);
		dv.appendChild(p);
		dv.appendChild(ul);
		var ID = "c" + (i + 1);
		document.getElementById(ID).style.backgroundColor = "orange";

		//创建定位的锚点
		var division = document.createElement("div");
		division.id = "d" + (i+1);
		division.className = "divi";
		document.getElementById("contain").appendChild(division);
		document.getElementById("contain").appendChild(dv);
	}
}

initExam(data);  //前端写代码时测试用，后台写完可删除，改为body标签调用onloadExam()

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
	for (var i = 0; i < lis.length; i++) {
		lis[i].onmouseover = f2;
		lis[i].style.marginTop = "15px";
	}
}
setCursor();

//