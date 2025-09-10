<?php include 'conexao.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
    <title>Cadastro IMC</title>
</head>
<body>
    <h2>Cadastrar Pessoa e Calcular IMC</h2>
    <form action="processa.php" method="post">
        <label>Nome:</label>
        <input type="text" name="nome" required>
        
        <label>Peso (kg):</label>
        <input type="number" step="0.01" name="peso" required>
        
        <label>Altura (m):</label>
        <input type="number" step="0.01" name="altura" required>
        
        <button type="submit">Cadastrar</button>
    </form>

    <br><a href="listar.php">Ver Cadastros</a>

    <a href="generate_pdf.php" target="_blank"><center>Gerar PDF</center></a>
</body>
</html>
