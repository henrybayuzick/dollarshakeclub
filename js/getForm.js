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
						$(".md-content h1").html('Slow down there!');
						$(".md-content p").html('We love your enthusiasm, but you\'ve already signed up! We\'ll update you soon. In the meantime, share the link below with your friends and family!');
						$(".md-content .referral-link").attr('href','http://dollarshake.club/?refer='+data.referal);
						$(".md-content .referral-link").html("http://dollarshake.club/?refer=<span id='refer'>"+data.referal+"</span>");
						$(".md-content .share-buttons .twitter").attr("href", "https://twitter.com/intent/tweet?via=dollarshakeclub&url=http://dollarshake.club/?refer="+data.referal+"&text=Protein shakes for just a $1/day! Find out more at:&hashtags=dollarshakeclub");
						$(".md-content .share-buttons .fb").attr("href","https://www.facebook.com/sharer/sharer.php?u=http://dollarshake.club/?refer="+data.referal);

					}
					$("#modal").addClass("md-show");
				}
			});

		} else {
			$("#notify-me").html("Invalid email");
		}	
	}
});
