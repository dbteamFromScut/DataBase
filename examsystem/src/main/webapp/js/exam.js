var jsons = new Array();
jsons[0] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
}
jsons[1] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈2",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
}
jsons[2] = {
	"title" : "哈哈哈哈哈哈哈或哈哈哈3",
	"options0" : "A",
	"options1" : "B",
	"options2" : "C",
	"options3" : "D",
}
for (var i = 0; i < jsons.length; i++) {
	//创建试题最外的div
	var dv = document.createElement("div");
	dv.className = "question";

	//创建题干p
	var p = document.createElement("p");
	p.className = "pan";
	p.innerHTML = jsons[i]["title"];

	//创建选项ul
	var ul = document.createElement("ul");
	ul.className = "collection";
	ul.id = "u" + (i+1);
	ul.setAttribute("index",i+1);
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
		label.innerHTML = jsons[0]["options" + j];
		li.appendChild(input);
		li.appendChild(label);
		ul.appendChild(li);
	}
	dv.appendChild(p);
	dv.appendChild(ul);
	document.getElementById("contain").appendChild(dv);
}



function f1() {
	this.children[0].checked = true; 
	var id = 'c' + this.parentNode.getAttribute("index");
	document.getElementById(id).style.backgroundColor = "orange";
}

var lis = document.getElementsByClassName("collection-item");
for (var i = 0; i < lis.length; i++) {
	lis[i].onclick = f1;
}