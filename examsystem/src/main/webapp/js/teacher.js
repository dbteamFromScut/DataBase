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
var cover = document.getElementById("cover");
for (var i = 0; i < 4; i++) {
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
	console.log("d");
}


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
		$.ajax({
			type:"POST",
			url:"",
			data:{choose_q:choose_q, A:A, B:B, C:C, D:D,}
		})
		alert("题目提交成功！");
		$('#choose_q').val("");
		$('#A').val("");
		$('#B').val("");
		$('#C').val("");
		$('#D').val("");
	}
}

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
		alert("题目提交成功！");
		$('#TorF').val("");
	}
}

document.getElementById("file_confirm").onclick=function(){

}