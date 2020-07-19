$(document).ready(function () {
    GetUserInfo();
    // 查询所有作业申请
    $.ajax({
        url:"http://resource.natapp1.cc/role2/findApplies",
        type:'post',
        data:{

        },
        success:function (msg) {
            var htmlStr = '';
            var applies = msg.data;
            for(var i in applies){
                if(applies[i].status==3){
                    htmlStr += '<div class="list"><ul class="list_ul">';
                }else if(applies[i].status==2){
                    htmlStr += '<div class="list"><ul class="list_ul_unaudit">';
                }else if(applies[i].status==0){
                    htmlStr += '<div class="list"><ul class="list_ul_unpass">';
                }else{
                    htmlStr += '<div class="list"><ul class="list_ul_unpass">';
                }
                htmlStr += '<li>地点：<span>'+applies[i].position+'</span></li>';
                htmlStr += '<li>作业类型：<span>'+GetType(applies[i].typeId)+'</span></li>';
                htmlStr += '<li>作业开始时间：<span>'+applies[i].startTime+'</span></li>';
                htmlStr += '<li class="reqId">作业ID：<span>'+applies[i].reqId+'</span></li>';
                htmlStr += '<li class="status">作业状态：<span>'+GetStatus(applies[i].status)+'</span></li></ul></div>';
            }
            $(".div_body").html(htmlStr);
        }
    })

    // 显示安保分析已通过作业申请列表
    $("#pass").click(function () {
        $.ajax({
            url:" http://resource.natapp1.cc/role1/findApplyByStatus",
            data:{
                status:3
            },
            type:"post",
            success:function (msg) {
                var htmlStr = '';
                var applies = msg.data;
                for(var i in applies){
                    htmlStr += '<div class="list"><ul class="list_ul">';
                    htmlStr += '<li>地点：<span>'+applies[i].position+'</span></li>';
                    htmlStr += '<li>作业类型：<span>'+GetType(applies[i].typeId)+'</span></li>';
                    htmlStr += '<li>作业开始时间：<span>'+applies[i].startTime+'</span></li>';
                    htmlStr += '<li class="reqId">作业ID：<span>'+applies[i].reqId+'</span></li>';
                    htmlStr += '<li class="status">作业状态：<span>'+GetStatus(applies[i].status)+'</span></li></ul></div>';
                }
                $(".div_body").html(htmlStr);
            }
        })
    });

    // 显示安全分析没通过作业申请列表
    $("#unpass").click(function () {
        $.ajax({
            url:"http://resource.natapp1.cc/role1/findApplyByStatus",
            type:"post",
            data:{
                status: 0
            },
            success:function (msg) {
                var htmlStr = '';
                var applies = msg.data;
                for(var i in applies){
                    htmlStr += '<div class="list"><ul class="list_ul_unpass">';
                    htmlStr += '<li>地点：<span>'+applies[i].position+'</span></li>';
                    htmlStr += '<li>作业类型：<span>'+GetType(applies[i].typeId)+'</span></li>';
                    htmlStr += '<li>作业开始时间：<span>'+applies[i].startTime+'</span></li>';
                    htmlStr += '<li class="reqId">作业ID：<span>'+applies[i].reqId+'</span></li>';
                    htmlStr += '<li class="status">作业状态：<span>'+GetStatus(applies[i].status)+'</span></li></ul></div>';
                }
                $(".div_body").html(htmlStr);

            }
        })
    });

    // 显示没审核作业申请列表
    $("#unaudit").click(function () {
        $.ajax({
            url:"http://resource.natapp1.cc/role1/findApplyByStatus",
            type:"post",
            data:{
                status: 2
            },
            success:function (msg) {
                var htmlStr = '';
                var applies = msg.data;
                for(var i in applies){
                    htmlStr += '<div class="list"><ul class="list_ul_unaudit">';
                    htmlStr += '<li>地点：<span>'+applies[i].position+'</span></li>';
                    htmlStr += '<li>作业类型：<span>'+GetType(applies[i].typeId)+'</span></li>';
                    htmlStr += '<li>作业开始时间：<span>'+applies[i].startTime+'</span></li>';
                    htmlStr += '<li class="reqId">作业ID：<span>'+applies[i].reqId+'</span></li>';
                    htmlStr += '<li class="status">作业状态：<span>'+GetStatus(applies[i].status)+'</span></li></ul></div>';
                }
                $(".div_body").html(htmlStr);

            }
        })
    });

    // 动态元素绑定事件
    $(".div_body").on('click',".list",function () {
        // this元素下继续寻找子元素
        var reqId = $(this).find(".reqId").find("span").text();
        var status = $(this).find(".status").find("span").text();
        var apply_info = {
            reqId:reqId,
            status:status
        };
        //sessionStorage 存储
        sessionStorage.setItem("apply_info",JSON.stringify(apply_info));
        window.location.href = "../../templates/role2/apply_info.html";
    })



})