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

	if ($email) {
		$stmt = $mysqli->prepare("INSERT INTO Emails VALUES(?, 0, ?, 0)");

		$stmt->bind_param("ss", $email, $refer);

		if($stmt->execute()){

		}

	}
	

	$stmt->close();

	if($referal_link){

		$ref = (string)$referal_link;

		$getReferalCount = $mysqli->prepare("SELECT referal_count FROM Emails WHERE referal = ?");
		$getReferalCount->bind_param("s", $ref);

		if($getReferalCount->execute()){
			$getReferalCount->bind_result($referalCount);
			while($getReferalCount->fetch()){
			}	
		}
		
		$referalCount++;	

		$getReferalCount->close();

		$setRefCount = $mysqli->prepare("UPDATE Emails SET referal_count = ? WHERE referal = ?");
		$setRefCount->bind_param("ds", $referalCount, $ref);
		
		if($setRefCount->execute()){
		}				

 	}

?>
	
