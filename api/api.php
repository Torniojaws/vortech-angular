<?php
	header('Content-type: application/json; charset=utf-8');
	require_once('class-dbconnect.php');
	$dbparams = array(
		'server' => 	'localhost', 
		'database' => 	'test_vortech', 
		'user' => 		'root', 
		'pass' => 		'zahram616'
	);
	
	$method = $_SERVER['REQUEST_METHOD'];
	$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
	
	// Simple validation
	if(!$_SERVER['QUERY_STRING']) die('Missing token!');
	// Get correct query string
	$query = explode('&', $_SERVER['QUERY_STRING']);
	$params = array();
	foreach($query as $param) {
		list($k, $v) = explode('=', $param, 2);
		$params[urldecode($k)][] = urldecode($v);
	}
	$key = "test"; // In testing, this key is used
	$value = $params[$key][0];
	$userToken = $key . $value;
	$salt = '$2a$07$usesomadasdsadsadsadasdasdasdsadesillystringfors';
	$digest = crypt('testtesting123', $salt);
	
	$is_auth = false;
	if(crypt($userToken, $digest) == $digest) {
		$is_auth = true;
	} else {
		http_response_code(403);
		die('An incorrect token was provided. Please use the correct one!');   
	}
	
	if($is_auth) {
		$db = new DatabaseConnection($dbparams);
		$table = $request[0];
		if(isset($request[1])) {
			$id = $request[1];
		} else {
			$id = null;
		}
		switch($method) {
			case 'PUT':
				rest_put($table, $id, $db);  
				break;
			case 'POST':
				rest_post($table, $id, $db);  
				break;
			case 'GET':
				rest_get($table, $id, $db, $params);  
				break;
			case 'HEAD':
				rest_head($table, $id, $db);  
				break;
			case 'DELETE':
				rest_delete($table, $id, $db);  
				break;
			case 'OPTIONS':
				rest_options($table, $id, $db);    
				break;
			default:
				rest_error();  
				break;
		}
	}

	function rest_put($table, $id=null, $db, $data) {
		/*
			PUT /shows/123		Updates data of show "123"
			PUT /shows			Updates data of all shows
		*/
		
		// Visitor counter has special method
		if($table == 'visitors') {
			$update = $db->updateVisitorCount();
			if($update == 0) {
				// All is well
			}
		}
		
		if(isset($id)) {
			$db->updateRow($id, $table, $data);
		} else {
			$db->updateRows($table, $data);
		}		
	}
	function rest_post($table, $id=null, $db) {
		/*
			POST /news/123		Creates new News item "123"
			POST /news			Error
		*/
		echo $r;
	}
	function rest_get($table, $id=null, $db, $params=null) {
		/*
			GET /releases/123	Reads data of release "123"
			GET /releases		List of all releases
		*/
		if(isset($params['filter'])) {
			$filter = $params['filter'][0];
			$results = $db->getFilteredRow($id, $table, $filter);
		} else {
			if(isset($id)) {
				$results = $db->getRow($id, $table);
			} else {
				$results = $db->getRows($table);
			}
		}
		
		// Return results in JSON format
		if(empty($results)) {
			$resultArray = null;
		} else {
			foreach($results as $result) {
				$resultArray[] = $result;
			}
		}
		// If nothing is found on DB, return null:
		echo json_encode($resultArray);
	}
	function rest_delete($table, $id=null, $db) {
		/*
			DELETE /guestPosts/123	Deletes guestbook post "123"
			DELETE /guestPosts		Deletes all guestbook posts
		*/
		echo $r;
	}
	function rest_options($table, $id=null, $db) {
		/*
			Will show what methods are allowed for given resource
			OPTIONS /videos/123		Shows what requesting user is allowed to do with video "123"
			OPTIONS /videos			Shows what requesting user can do with all videos
		*/
		echo $r;
	}
	function rest_head($table, $id=null, $db) {
		/*
			Will show whether a given resource exists on server, upon which GET can be used
			HEAD /users/123			Shows if user 123 exists in resources
			HEAD /users				Shows if any users exist in resources
		*/
		echo $r;
	}
	function rest_error() {
		echo 'Unknown method!';
	}
	
	$db->close();
?>