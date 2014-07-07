$(function() {

	$("#grab").addClass("drop-in");
	$("#grab").addClass("fade-in");
	$("#email-form").addClass("fade-in");

	function validateEmail(email) { 
		var test = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return test.test(email);
	} 


	$('#notify-me').click(function() {
		formSubmit();
	});

	$("#email-input").keypress(function (){
		$("#notify-me").html("Notify me");
	});

	$("#email-input").click(function () {
		$("#notify-me").html("Notify me");
	});

	$('#email-form').bind("keyup keypress", function(e) {
		var code = e.keyCode || e.which; 
		if (code  == 13) {               
			e.preventDefault();
			formSubmit();
			return false;
		}
	});

	function formSubmit () {
		var email = $("#email-input").val();
		var refer = $("#refer").html();
		var ref = $("#referal_link").html();

		console.log(ref);

		if(validateEmail(email)){

			$.ajax({
				type: "POST",
				data: {email : email,
						refer : refer,
						referal_link : ref},
				url: '../email.php',
				success: function(data) {
					$("#modal").addClass("md-show");
					console.log (data);
				}
			});

		} else {
			$("#notify-me").html("Invalid email");
		}	
	}
});

$(function(){function a(a){var b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test(a)}function b(){var b=$("#email-input").val(),c=$("#refer").html(),d=$("#referal_link").html();console.log(d),a(b)?$.ajax({type:"POST",data:{email:b,refer:c,referal_link:d},url:"../email.php",success:function(a){$("#modal").addClass("md-show"),console.log(a)}}):$("#notify-me").html("Invalid email")}$("#grab").addClass("drop-in"),$("#grab").addClass("fade-in"),$("#email-form").addClass("fade-in"),$("#notify-me").click(function(){b()}),$("#email-input").keypress(function(){$("#notify-me").html("Notify me")}),$("#email-input").click(function(){$("#notify-me").html("Notify me")}),$("#email-form").bind("keyup keypress",function(a){var c=a.keyCode||a.which;return 13==c?(a.preventDefault(),b(),!1):void 0})});
$(function() {

	$("#grab").addClass("drop-in");
	$("#grab").addClass("fade-in");
	$("#email-form").addClass("fade-in");

	function validateEmail(email) { 
		var test = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return test.test(email);
	} 


	$('#notify-me').click(function() {
		formSubmit();
	});

	$("#email-input").keypress(function (){
		$("#notify-me").html("Notify me");
	});

	$("#email-input").click(function () {
		$("#notify-me").html("Notify me");
	});

	$('#email-form').bind("keyup keypress", function(e) {
		var code = e.keyCode || e.which; 
		if (code  == 13) {               
			e.preventDefault();
			formSubmit();
			return false;
		}
	});

	function formSubmit () {
		var email = $("#email-input").val();
		var refer = $("#refer").html();
		var ref = $("#referal_link").html();

		console.log(ref);

		if(validateEmail(email)){

			$.ajax({
				type: "POST",
				data: {email : email,
						refer : refer,
						referal_link : ref},
				url: '../email.php',
				success: function(data) {
					$("#modal").addClass("md-show");
					console.log (data);
				}
			});

		} else {
			$("#notify-me").html("Invalid email");
		}	
	}
});

$(function(){function a(a){var b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test(a)}function b(){var b=$("#email-input").val(),c=$("#refer").html(),d=$("#referal_link").html();console.log(d),a(b)?$.ajax({type:"POST",data:{email:b,refer:c,referal_link:d},url:"../email.php",success:function(a){$("#modal").addClass("md-show"),console.log(a)}}):$("#notify-me").html("Invalid email")}$("#grab").addClass("drop-in"),$("#grab").addClass("fade-in"),$("#email-form").addClass("fade-in"),$("#notify-me").click(function(){b()}),$("#email-input").keypress(function(){$("#notify-me").html("Notify me")}),$("#email-input").click(function(){$("#notify-me").html("Notify me")}),$("#email-form").bind("keyup keypress",function(a){var c=a.keyCode||a.which;return 13==c?(a.preventDefault(),b(),!1):void 0})}),$(function(){function a(a){var b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test(a)}function b(){var b=$("#email-input").val(),c=$("#refer").html(),d=$("#referal_link").html();console.log(d),a(b)?$.ajax({type:"POST",data:{email:b,refer:c,referal_link:d},url:"../email.php",success:function(a){$("#modal").addClass("md-show"),console.log(a)}}):$("#notify-me").html("Invalid email")}$("#grab").addClass("drop-in"),$("#grab").addClass("fade-in"),$("#email-form").addClass("fade-in"),$("#notify-me").click(function(){b()}),$("#email-input").keypress(function(){$("#notify-me").html("Notify me")}),$("#email-input").click(function(){$("#notify-me").html("Notify me")}),$("#email-form").bind("keyup keypress",function(a){var c=a.keyCode||a.which;return 13==c?(a.preventDefault(),b(),!1):void 0})}),$(function(){function a(a){var b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test(a)}function b(){var b=$("#email-input").val(),c=$("#refer").html(),d=$("#referal_link").html();console.log(d),a(b)?$.ajax({type:"POST",data:{email:b,refer:c,referal_link:d},url:"../email.php",success:function(a){$("#modal").addClass("md-show"),console.log(a)}}):$("#notify-me").html("Invalid email")}$("#grab").addClass("drop-in"),$("#grab").addClass("fade-in"),$("#email-form").addClass("fade-in"),$("#notify-me").click(function(){b()}),$("#email-input").keypress(function(){$("#notify-me").html("Notify me")}),$("#email-input").click(function(){$("#notify-me").html("Notify me")}),$("#email-form").bind("keyup keypress",function(a){var c=a.keyCode||a.which;return 13==c?(a.preventDefault(),b(),!1):void 0})});
$(function() {

	$("#grab").addClass("drop-in");
	$("#grab").addClass("fade-in");
	$("#email-form").addClass("fade-in");

	function validateEmail(email) { 
		var test = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return test.test(email);
	} 


	$('#notify-me').click(function() {
		formSubmit();
	});

	$("#email-input").keypress(function (){
		$("#notify-me").html("Notify me");
	});

	$("#email-input").click(function () {
		$("#notify-me").html("Notify me");
	});

	$('#email-form').bind("keyup keypress", function(e) {
		var code = e.keyCode || e.which; 
		if (code  == 13) {               
			e.preventDefault();
			formSubmit();
			return false;
		}
	});

	function formSubmit () {
		var email = $("#email-input").val();
		var refer = $("#refer").html();
		var ref = $("#referal_link").html();

		console.log(ref);

		if(validateEmail(email)){

			$.ajax({
				type: "POST",
				data: {email : email,
						refer : refer,
						referal_link : ref},
				url: '../email.php',
				success: function(data) {
					$("#modal").addClass("md-show");
					console.log (data);
				}
			});

		} else {
			$("#notify-me").html("Invalid email");
		}	
	}

