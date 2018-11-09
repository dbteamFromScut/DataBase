$(function(){
			$('#login').dialog({
				title : '登录',
				width : 360,
				height : 250,
				modal : true,
				buttons : '#btn',
				
			});

			//用户名验证
			$('#userName').validatebox({
				required : true,
				missingMessage : '用户名不能为空',
			});

			//密码验证
			$('#passWord').validatebox({
				required : true,
				validType : 'length[6,30]',
				missingMessage : '密码不能为空',
			});
			if(!$('#userName').validatebox('isValid')){
				$('#userName').focus();
			}else if(!$('#passWord').validatebox('isValid')){
				$('#passWord').focus();
			}
			//登录按钮
			$('#btn').click(function(){
				if(!$('#userName').validatebox('isValid')){
					$('#userName').focus();
				}else if(!$('#passWord').validatebox('isValid')){
					$('#passWord').focus();
				}else{
					//提交账号密码
				}
			});
		});