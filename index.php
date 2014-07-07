<html>
	<head>
		<title>Dollar Shake Club</title>
		<link rel="stylesheet" href="css/style.css">

		<script type="text/javascript" src="//use.typekit.net/pal2bhq.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="js/getForm.js"></script>

		<meta property="og:site_name" content="Dollar Shake Club"/>
		<meta property="og:description" content="Protein shakes for just a $1/day. Click here to find out more!"/>
		<meta property="og:image" content="http://dollarshake.club/images/facebook.jpg"/>
		
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

		$referral = randString(10);
		?>

		<?php
		$referal_link = $_GET['refer'];
		if($referal_link){
		?>
			<div id="referal_link"><?php echo $referal_link;?></div>
		<?php
		} else {
		?>	
			<div id="referal_link"></div>
		<?php
		}
		?>
		<div id="modal" class="modal md-effect-1" id="modal-1">
			<div class="md-content">
				<h1>Thank you!</h1>
				<p>Thanks for signing up for Dollar Shake Club. You'll be the first to know when we launch. To save an <b>additional 10%</b> simply share this link with your friends and family!</p>
				<a class="referral-link" href='http://dollarshake.club/?refer=<?php echo $referral; ?>'>http://dollarshake.club/?refer=<span id='refer'><?php echo $referral; ?></span></a>
				<div class="share-buttons">
					<a href="https://twitter.com/intent/tweet?via=dollarshakeclub&url=http://dollarshake.club/?refer=<?php echo $referral; ?>&text=Protein shakes for just a $1/day! Find out more at:&hashtags=dollarshakeclub" class="share-button twitter">Tweet</a>
					<a href="https://www.facebook.com/sharer/sharer.php?u=http://dollarshake.club/?refer=<?php echo $referral; ?>" class="share-button fb">Share</a>
				</div>
			</div>
		</div>
		<div id="page">
			<header>
				<img src="images/logo.png" width="342" height="35" />
			</header>
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
