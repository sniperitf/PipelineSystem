$(document).ready(function () {
    $("#list").slideDown("slow")

    $.fn.datetimepicker.dates['zh-CN'] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        today: "今天",
        suffix: [],
        meridiem: ["上午", "下午"],

    };

    $(".form_datetime").datetimepicker({
        format:'yyyy-mm-dd',
        startView:'year',
        maxView:'year',
        minView:'month',
        autoclose:true,
        pickerPosition: "bottom-left",
        language:'zh-CN',
    });

    $(".type_span").click(function () {
        var htmlStr = '<li>用火作业<li>'+
                        '<li>临时用电作业<li>'+
                        '<li>进入受限空间作业<li>'+
                        '<li>高处作业<li>'+
                        '<li>动土作业<li>'+
                        '<li>起重作业<li>'+
                        '<li>盲板抽堵作业<li>'+
                        '<li>管道清管及内检测作业<li>'
        $("#type_list").html(htmlStr);
        $("#type_list").slideDown("slow");
        $("#type_list").css("display","block");
    });

    $("#type_list").on("click",'li',function () {
        var type = $(this).text();
        $("#type").val(type);
        $("#type_list").slideUp("slow");
        // $("#type_list").css("display","none");
    });



})