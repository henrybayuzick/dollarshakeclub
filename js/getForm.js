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
		var refer = $("#refer").val();

		if(validateEmail(email)){

			$.ajax({
				type: "POST",
				data: {email : email,
						refer : refer},
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