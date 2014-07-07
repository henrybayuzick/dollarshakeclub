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

	$('#email-form').keypress(function(e){
		if(e.which == 13){
			e.preventDefault();
			$('#notify-me').click();
			return false;
		}
   });

	function formSubmit () {
		var email = $("#email-input").val();
		var refer = $("#refer").html();
		var ref = $("#referal_link").html();

		if(validateEmail(email)){

			$.ajax({
				type: "POST",
				data: {email : email,
						refer : refer,
						referal_link : ref},
				url: '../email.php',
				success: function(data) {
					
					data = $.parseJSON(data);

					if(data.message == "Email exists"){
						console.log("need to change modal");
					}
					$("#modal").addClass("md-show");
				}
			});

		} else {
			$("#notify-me").html("Invalid email");
		}	
	}
});
