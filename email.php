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
	

	if ($email) {
		$stmt = $mysqli->prepare("INSERT INTO Emails VALUES(?, 0)");

		$stmt->bind_param("s", $email);

		if($stmt->execute()){
			echo "Success";	
		} else {
			echo "Query failed";
		} 
} else {
	echo "No email";
}
?>
	









