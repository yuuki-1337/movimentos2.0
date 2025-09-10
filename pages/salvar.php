<?php
require_once('conexao.php');
require_once('tcpdf/tcpdf.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome  = $_POST['nome'];
    $peso  = (float)$_POST['peso'];
    $tempo = (int)$_POST['tempo'];
    $tipo  = $_POST['tipo'];

    
    $fator = ($tipo == 'esteira') ? 0.12 : 0.08;

    
    $calorias = $tempo * $peso * $fator;

    
    $stmt = $conn->prepare("INSERT INTO atividades (nome, peso, tempo, tipo, calorias_gastas) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sdiss", $nome, $peso, $tempo, $tipo, $calorias);
    $stmt->execute();
    $stmt->close();

    
    $pdf = new TCPDF();
    $pdf->AddPage();

    $pdf->SetFont('helvetica', '', 14);
    $pdf->Write(0, "Relatório de Calorias Gastas\n\n");
    $pdf->Write(0, "Nome: $nome\n");
    $pdf->Write(0, "Peso: $peso kg\n");
    $pdf->Write(0, "Tempo: $tempo minutos\n");
    $pdf->Write(0, "Atividade: " . ucfirst($tipo) . "\n");
    $pdf->Write(0, "Calorias Gastas: " . number_format($calorias, 2) . " kcal\n");

    $pdfFileName = "relatorio_" . preg_replace('/\s+/', '_', strtolower($nome)) . ".pdf";

    
    $pdf->Output($pdfFileName, 'D');  
}
?>
