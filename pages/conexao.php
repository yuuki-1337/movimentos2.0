<?php
$host = 'localhost';
$db   = 'calorias_db';
$user = 'root';  
$pass = '';      

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Erro: " . $conn->connect_error);
}
?>
