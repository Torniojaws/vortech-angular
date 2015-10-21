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
		
		public function getRow($id, $table) {
			mysqli_select_db($this->conn, $this->db) or die(mysqli_error($this->conn));
			$sql = "SELECT * FROM ";
			$sql .= $table;
			$sql .= " WHERE id = " . $id;
			$sql .= " LIMIT 1";
			return mysqli_query($this->conn, $sql);
		}
		
		public function getFilteredRow($id, $table, $filter) {
			mysqli_select_db($this->conn, $this->db) or die(mysqli_error($this->conn));
			$sql = "SELECT * FROM ";
			switch($filter) {
				case "mostDownloaded":
					$sql .= "album_statistics";
					$sql .= " ORDER BY downloads DESC LIMIT 1";
					break;
				case "bestRating":
					$sql .= "album_statistics";
					$sql .= "";
					break;
				default:
					break;
			}
			return mysqli_query($this->conn, $sql);
		}
		
		public function updateVisitorCount() {
			mysqli_select_db($this->conn, $this->db) or die(mysqli_error($this->conn));
			$sql = "UPDATE visitors SET count = count + 1";
			$result = mysqli_query($this->conn, $sql);
			if($result) {
				return 0;
			} else {
				die("Could not update!");
			}
		}
		
		public function close() {
			mysqli_close($this->conn);
		}
	}

?>