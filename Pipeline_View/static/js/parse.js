// 解析作业类型编号
function GetType(typeid){
    var type = '';
    if(typeid==1){
        type = '用火作业';
    }else if(typeid==2){
        type = '临时用电作业';
    }else if(typeid==3){
        type = '进入受限空间作业';
    }else if(typeid==4){
        type = '高处作业';
    }else if(typeid==5){
        type = '动土作业';
    }else if(typeid==6){
        type = '起重作业';
    }else if(typeid==7){
        type = '盲板抽堵作业';
    }else if(typeid==8){
        type = '管道清管及内检测作业';
    }
    return type;
}
// 解析作业类型编号
function ParseType(type) {
    var typeid = '';
    if(type == '用火作业'){
        typeid=1 ;
    }else if(type == '临时用电作业'){
        typeid=2;
    }else if(type == '进入受限空间作业'){
        typeid=3;
    }else if(type == '高处作业'){
        typeid=4;
    }else if(type == '动土作业'){
        typeid=5;
    }else if(type == '起重作业'){
        typeid=6;
    }else if(type == '盲板抽堵作业'){
        typeid=7;
    }else if(type == '管道清管及内检测作业'){
        typeid=8;
    }
    return typeid;
}
// 顶部导航栏显示用户信息
function GetUserInfo() {
    // sessionStorage读取  JSON
    var user_info = JSON.parse(sessionStorage.getItem("user_info"));
    var uname = user_info.user.uname;
    var htmlStr = '';
    htmlStr += ' <li id="un_info"><img src="../../static/img/head.jpg" alt=""><a href="';
    htmlStr +='#">'+uname+'</a><button id="loginout">注销</button></li>';
    $("#navTop").append(htmlStr);
}
// 注销账户

function UserLogout() {
    $('#navTop').on('click','#loginout',function () {
        sessionStorage.clear();
        window.location.replace("../../templates/login.html");
    })

}
//解析角色信息
function GetRole(data) {
    var role = '';
    if(data==1){
        role='基层工作人员';
    }else if(data==2){
        role='JAS安全分析人员';
    }else if(data==3){
        role='监督人员';
    }else if(data==4){
        role='上级领导';
    }
    return role;
}
// 解析作业状态信息
function GetStatus(statusId) {
    var status = '';
    if(statusId==0){
        status = '安全分析未通过';
    }else if(statusId==2){
        status = '安全分析未审核';
    }else if(statusId==3){
        status = '已开许可证';
    }else if(statusId==6){
        status = '作业监督中';
    }else if(statusId==8){
        status = '作业票不通过';
    }else if(statusId==10){
        status = '作业已完成';
    }else if(statusId==11){
        status = '作业非正常结束';
    }
    return status;
}

//作业编号解析
function GetStep(stepId) {
    var step = '';
    if(stepId==1){
        step = "作业前安全措施确认";
    }else if(stepId==2){
        step = "作业期间安全措施确认";
    }else if(stepId==3){
        step = "作业结束安全措施确认";
    }
    return step;
}

//作业编号加载
function ParseStepId(step) {
    var stepId = '';
    if(step == "作业前安全措施确认"){
        stepId=1;
    }else if(step == "作业期间安全措施确认"){
        stepId=2;
    }else if(step == "作业结束安全措施确认"){
        stepId=3;
    }
    return stepId;
}