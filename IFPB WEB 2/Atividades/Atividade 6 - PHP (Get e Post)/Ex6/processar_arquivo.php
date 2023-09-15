<?php
$nomeArquivo = $_FILES['file']['name'];
$caminhoTemporario = $_FILES['file']['tmp_name'];


$diretorioDestino = 'uploads/';
$caminhoDestino = $diretorioDestino . $nomeArquivo;

move_uploaded_file($caminhoTemporario, $caminhoDestino);

echo "Arquivo enviado com sucesso!<br>";
echo "Nome do arquivo: $nomeArquivo<br>";

// Exibe 
echo "<img src='$caminhoDestino' alt='Arquivo Enviado'>";
?>
