<?php
include 'conexao.php';

$id = $_GET['id'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $peso = floatval($_POST['peso']);
    $altura = floatval($_POST['altura']);
    $imc = $peso / ($altura * $altura);

    if ($imc < 18.5) $class = "Abaixo do peso";
    elseif ($imc < 25) $class = "Peso normal";
    elseif ($imc < 30) $class = "Sobrepeso";
    else $class = "Obesidade";

    $sql = "UPDATE pessoas SET nome='$nome', peso=$peso, altura=$altura, imc=$imc, classificacao='$class' WHERE id=$id";
    $conn->query($sql);
    header("Location: listar.php");
    exit();
}

$result = $conn->query("SELECT * FROM pessoas WHERE id = $id");
$pessoa = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
    <title>Editar</title>
</head>
<body>
    <h2>Editar Cadastro</h2>
    <form method="post">
        <label>Nome:</label>
        <input type="text" name="nome" value="<?= $pessoa['nome'] ?>" required>

        <label>Peso:</label>
        <input type="number" name="peso" step="0.01" value="<?= $pessoa['peso'] ?>" required>

        <label>Altura:</label>
        <input type="number" name="altura" step="0.01" value="<?= $pessoa['altura'] ?>" required>

        <button type="submit">Atualizar</button>
    </form>
</body>
</html>
