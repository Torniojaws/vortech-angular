<?php

	class DatabaseConnection {
		private $server;
		private $user;
		private $pass;
		private $db;
		private $conn;
		
		public function __construct($params) {
			$this->server = $params['server'];
			$this->user = $params['user'];
			$this->pass = $params['pass'];
			$this->db = $params['database'];
			$this->validate();
		}
		
		private function validate() {
			$this->conn = new mysqli($this->server, $this->user, $this->pass);
			if($this->conn->connect_error) {
				die("Connection failed: " . $this->conn->connect_error);
			}
			mysqli_set_charset($this->conn, "utf8");
		}
		
		public function getRows($table) {
			mysqli_select_db($this->conn, $this->db) or die(mysqli_error($this->conn));
			$sql = "SELECT * FROM ";
			$sql .= $table;
			return mysqli_query($this->conn, $sql);
		}
		
		public function close() {
			mysqli_close($this->conn);
		}
	}

?>