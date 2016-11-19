$(document).ready(function() {
	$("#native2ascii_btn").click(function() {
		var nativecode = $("#native_text").val().split("");
        var ascii = "";
        for (var i = 0; i < nativecode.length; i++) {
            var code = Number(nativecode[i].charCodeAt(0));
            if (code > 127) {
                var charAscii = code.toString(16);
                charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
                ascii += "\\u" + charAscii;
            } else {
                ascii += nativecode[i];
            }
        }
        $("#ascii_text").val(ascii);
        if ($("#ascii_text").val()) {
        	$("#ascii_text").siblings().hide();	
        }
	});

	$("#ascii2native_btn").click(function() {
		var asciicode = $("#ascii_text").val().split("\\u");
        var nativeValue = asciicode[0];
        for (var i = 1; i < asciicode.length; i++) {
            var code = asciicode[i];
            nativeValue += String.fromCharCode(parseInt("0x" + code.substring(0, 4)));
            if (code.length > 4) {
                nativeValue += code.substring(4, code.length);
            }
        }
        $("#native_text").val(nativeValue);
        if ($("#native_text").val()) {
        	$("#native_text").siblings().hide();
        }
	});

	// 清空所有内容
	$("#cleartext_btn").click(function() { 
		$("#native_text").val("cmp.jvm.author=胡诚"); 
		$("#ascii_text").val("cmp.jvm.author=\\u80e1\\u8bda"); 
	});
});

