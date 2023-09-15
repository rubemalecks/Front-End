<?php
if (isset($_POST['nome'])) {
    $nome = $_POST['nome'];
    echo "Nome digitado: $nome";
} else {
    echo "Nome não foi digitado.";
}
?>
