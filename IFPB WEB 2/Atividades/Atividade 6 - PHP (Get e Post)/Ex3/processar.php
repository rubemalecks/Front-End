<?php
if (isset($_POST['nome']) && isset($_POST['cor'])) {
    $nome = $_POST['nome'];
    $cor = $_POST['cor'];
    echo "Nome digitado: $nome<br>";
    echo "Cor escolhida: $cor";
} else {
    echo "Nome ou cor não foram especificados.";
}
?>
