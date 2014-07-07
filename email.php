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

		$e = (string)$email;	

		$emailTester = $mysqli->prepare("SELECT referal FROM Emails WHERE EmailAddress = ?");
		$emailTester->bind_param("s", $e);

		if($emailTester->execute()){
			$emailTester->bind_result($oldReferal);
			while($emailTester->fetch()){
			}	
		} else {
			$oldReferal = 0;
		}
		
		$emailTester->close();	
 

		if($oldReferal){
			$oldEmail = 1;
			$sendBackData = array(
				"message" => "Email exists",
				"referal" => $oldReferal
			);
			echo json_encode($sendBackData);
		} else {
			$oldEmail = 0;
			$sendBackData = array(
				"message" => "",
				"referal" => 0
			);
			echo json_encode($sendBackData);
		}

		if($oldEmail == 0){
			$stmt = $mysqli->prepare("INSERT INTO Emails VALUES(?, 0, ?, 0)");

			$stmt->bind_param("ss", $email, $refer);

			if($stmt->execute()){

			}
			
			$stmt->close();
		}
	}
	

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
	
