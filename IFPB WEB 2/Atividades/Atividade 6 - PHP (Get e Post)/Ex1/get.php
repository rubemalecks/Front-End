    <?php
    if (isset($_GET['nome'])) {
        $nome = $_GET['nome'];
        echo "Nome digitado: $nome";
    } else {
        echo "Nome não foi digitado.";
    }
    ?>

