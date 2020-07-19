$(document).ready(function () {
    var isEmail = false;
    var isPwd = false;

    $("#un").on("input propertychange",function () {
        var email = $("#un").val();
        // console.log(email)
        var reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则表达式
        if(email=='') {
            $("#error_span").html('<p>邮箱输入不能为空</p>')
        }else if(!reg.test(email)){
            $("#error_span").html('<p>邮箱格式错误</p>')
        }else{
            isEmail = true;
        }
    })


    $("#pwd").on("input propertychange",function () {
        var pwd = $(this).val();
        // console.log(pwd)
        if(pwd=='') {
            $("#error_span").html('<p >密码不能为空</p>')
        }else if(pwd.length>=6 && pwd.length<=20){
            isPwd = true;
        }else{
            $("#error_span").html('<p >密码长度在6-20之间</p>')
        }
    });

    $(".code").click(function () {
        $.ajax({
            url:'http://resource.natapp1.cc/user/code',
            type:'post',
            async:true,
            data:{
                uId: $("#un").val()
            },
            success:function (msg) {
                if(msg.code==0){
                    $("#error_span").html('<p >验证码已发送</p>');
                }else{
                    $("#error_span").html('<p >验证码发送失败</p>');
                }
            }
        })
    })


    $(".logo-button").click(function () {
        if(!isEmail){
            $("#un").focus();
            $("#error_span").html('<p >邮箱格式错误</p>')
        }else if(!isPwd){
            $("#pwd").focus();
            $("#error_span").html('<p >密码格式错误</p>')
        }else{
            $.ajax({
                url:"http://resource.natapp1.cc/user/login",
                type:"post",
                async:false,
                // beforeSend: function (XMLHttpRequest) {
                //     XMLHttpRequest.setRequestHeader("token", localStorage.token);
                // },
                data:{
                    uId: $("#un").val(),
                   uPassword:$("#pwd").val(),
                    code:$("#code").val()
                },
                success:function (data) {
                    var state = data.code;
                    if(state!='0'){
                        $("#error_span").html('<p >登录失败</p>');
                    }else{
                        //sessionStorage 存储
                        sessionStorage.setItem("user_info",JSON.stringify(data.data));
                        var role = data.data.role;
                        if(role==1){
                            // window.location.replace("../templates/role1/apply.html");
                            // window.location.replace("../templates/role5/user_list.html");
                            window.location.replace("../templates/role1/list_apply.html");
                        }else if(role==2){
                            window.location.replace("../templates/role2/list_apply.html");
                        }else if(role==3){
                            window.location.replace("../templates/role3/list_apply.html");
                        }else if(role==4){
                            window.location.replace("../templates/role4/list_apply.html");
                        }else if(role==5){
                            window.location.replace("../templates/role5/user_list.html");
                        }

                    }
                },
                error:function (e) {
                    $("#error_span").html('<p >服务器出错，稍后再试</p>');
                    console.log(e.responseText);
                }
            })
        }
    });


});


