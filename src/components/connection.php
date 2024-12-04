<?php
class Database {
    private $host = 'localhost';
    private $port = '3306';
    private $dbname = 'nazov_databazy'; // Nahraď názvom svojej databázy
    private $username = 'root';
    private $password = 'root';
    private $conn;

    // Vytvorenie spojenia
    public function connect() {
        $this->conn = null;
        
        try {
            // PDO string na pripojenie
            $dsn = "mysql:host={$this->host};port={$this->port};dbname={$this->dbname}";
            $this->conn = new PDO($dsn, $this->username, $this->password);
            
            // Nastavenie atribútov
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

            echo "Pripojenie bolo úspešné!";
        } catch (PDOException $e) {
            echo "Chyba pripojenia: " . $e->getMessage();
        }

        return $this->conn;
    }
}

// Test pripojenia
$database = new Database();
$database->connect();
?>
