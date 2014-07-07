<?php
	$dbHost = 'localhost';
	$dbName = 'dollarshakeclub';
	$dbUser = 'dollarshakeclub';
	$dbPass = 'Whey2go!';
 
	$mysqli = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
	
	if ($mysqli->connect_errno) {
    	echo "Connection failed";
	}

	$email = $_POST['email'];
	$refer = $_POST['refer'];
	$referal_link = $_POST['referal_link'];

	if($referal_link){
		echo "There is a referal";

		$getReferalCount = $mysqli->prepare("SELECT referal_count FROM Emails WHERE referal = ?");
		$getReferalCount->bind_param("s", $referal_link);

		if($getReferalCount->execute()){
				$getReferalCount->bind_result($referalCount);
				echo "got Referal count";
				echo "<br> referal count:".$referalCount;
		}
		
		$referalCount++;

		$addToReferalCount = $mysqli->prepare("UPDATE Emails SET referal_count = ? WHERE referal = ?");
		$addToReferalCount->bind_param("ds", $referalCount, $referal_link);

		$addToReferalCount->execute();
		echo "set referalCount";
	}


	if ($email) {
		$stmt = $mysqli->prepare("INSERT INTO Emails VALUES(?, 0, ?, 0)");

		$stmt->bind_param("ss", $email, $refer);

		if($stmt->execute()){
			echo "Success";	
		} else {
			echo "Query failed";
		} 
	} else {
		echo "No email";
	}
?>
	









