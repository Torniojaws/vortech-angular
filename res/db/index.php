<?php
	header('Content-type: application/json');

	/**
	 * Database resource
	 * 
	 * @echo	Test data from database in JSON form
	 */
	
	require_once('class-dbconnect.php');
	
	$params = array(
		'server' => 	'localhost', 
		'database' => 	'test_vortech', 
		'user' => 		'root', 
		'pass' => 		'zahram616'
	);
	$db = new DatabaseConnection($params);
	$table = 'releases';
	$results = $db->getRows($table);
	
	foreach($results as $row) {
		$jsonArray[] = $row;
	}
	echo json_encode($jsonArray);

	/* TODO:
	
		API (idempotent):
		- GET (read data)
		- PUT (add new data)
		- DELETE (remove data)
		- UPDATE (edit data)
	*/
?>