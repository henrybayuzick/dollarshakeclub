<html>
	<head>
		<title>Dollar Shake Club</title>
		<link rel="stylesheet" href="css/style.css">

		<script type="text/javascript" src="//use.typekit.net/pal2bhq.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="js/getForm.js"></script>

	</head>
	<body>
		<?php
		function randString($length, $chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789'){
			$str = '';
			$count = strlen($chars);
			while ($length--) {
				$str .= $chars[rand(0, $count-1)];
			}
			return $str;
		}

		$referral = 'http://dollarshake.club?refer='.randString(10);
		?>
		<div id="modal" class="modal md-effect-1" id="modal-1">
			<div class="md-content">
				<h1>Thank you!</h1>
				<p>Thanks for signing up for Dollar Shake Club. You'll be the first to know when we launch. To save an <b>additional 10%</b> simply share this link with your friends and family!</p>
				<span><?php echo "<a href='$referral'>$referral</a>"; ?></span>
			</div>
		</div>
		<div id="page">
			<header></header>
			<section id="grab" class="grab">
				<h1>We put muscles<br/>on your body</h1>
				<h2>Protein shakes delivered<br/>to your door for $1/day.</h2>
			</section>
			<section id="email-form" class="email-form">
				<form class="cf">
					<input id="email-input" class="text-field" type="text" placeholder="yoked@dollarshake.club">
					<div id="notify-me" class="button">Notify Me</div>
				</form>
				<p>Sign up to be notified when we launch and save 20% on your first month.</p>
			</section>
		</div>
		<div class="md-overlay"></div>
	</body>
</html>