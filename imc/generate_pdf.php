<?php
require('tcpdf/tcpdf.php');
include 'conexao.php';

$pdf = new tcpdf();
$pdf->AddPage();
$pdf->SetFont('times','B',16);
$pdf->Cell(190,10,'Relatorio de IMC',0,1,'C');
$pdf->Ln(10);

$pdf->SetFont('times','B',12);
$pdf->Cell(30,10,'ID',1);
$pdf->Cell(50,10,'Nome',1);
$pdf->Cell(30,10,'Peso',1);
$pdf->Cell(30,10,'Altura',1);
$pdf->Cell(30,10,'IMC',1);
$pdf->Cell(30,10,'classificacao',1);
$pdf->Ln();

$pdf->SetFont('times','',12);

$result = $conn->query("SELECT * FROM pessoas");

while ($row = $result->fetch_assoc()) {
    $pdf->Cell(30,10,$row['id'],1);
    $pdf->Cell(50,10,$row['nome'],1);
    $pdf->Cell(30,10,$row['peso'],1);
    $pdf->Cell(30,10,$row['altura'],1);
    $pdf->Cell(30,10,number_format($row['imc'], 2),1);
    $pdf->Cell(30,10,$row['classificacao'],1);
    $pdf->Ln();
}

$pdf->Output();
?>
