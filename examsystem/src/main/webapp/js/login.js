document.getElementById("login").onclick = function(){
	var form = new FormData();
	var uname = document.getElementById('userName').value;
	var pword = document.getElementById('passWord').value;
	var role = null;
	var radios = document.getElementById("radio").children;
	for (var i = 0; i < radios.length; i++) {
		// console.log(radios[i].id);
		if(radios[i].checked == true)
			role = radios[i].id;
	}
	// console.log(uname);
	// console.log(pword);
	// console.log(role);
	form.append("username",uname);
	form.append("password",pword);
	form.append("role",role);
	$.ajax({
		url : "/login",
		type : "POST",
		data : form,
		processData : false,
        contentType : false,
	});
}
