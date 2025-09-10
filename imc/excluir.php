<?php
include 'conexao.php';

$id = $_GET['id'];
$conn->query("DELETE FROM pessoas WHERE id = $id");

header("Location: listar.php");
exit();
?>
