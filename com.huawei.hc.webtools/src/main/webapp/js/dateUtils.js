window.onload = function () {
    //定时器每秒调用一次fnDate()
    setInterval(function () {
        var beijingTime = document.getElementById("currentBeijingTime");
        var milliTime = document.getElementById("currentTimeMillis");
        var date = new Date();
        var milli = date.valueOf();
        milliTime.value = milli;
        beijingTime.value = unix2Date(milli);
    }, 1000);
}

// 将unix时间戳格式化
function unix2Date(milli) {
    var time = new Date(milli);
    var str = (time.getFullYear()) + "-" 
            + leadingZero(time.getMonth() + 1) + "-"
            + leadingZero(time.getDate()) + "T"
            + leadingZero(time.getHours()) + ":"
            + leadingZero(time.getMinutes()) + ":"
            + leadingZero(time.getSeconds());
    return str;
}

// 补位 当某个字段不是两位数时补0
function leadingZero(str) {
    var num;
    str >= 10 ? num = str : num = "0" + str;
    return num;
}

// 将当前时间转换成unix时间戳
function date2Unix(time) {
    var val = Date.parse(new Date(time));
    return val;
}

$(document).ready(function () {
    //将unix时间戳格式化
    $("#toDateBtn").click(function () {
        var time = $("#toDateText").val();
        $("#toDateResult").val(unix2Date(time*1));
    });

    $("#toUnixBtn").click(function () {
        var time = $("#toUnixText").val();
        $("#toUnixResult").val(date2Unix(time));
    });
});