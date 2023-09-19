<?php
    $titulo = $_POST['titulo'];
    $conteudo = $_POST['conteudo'];

    //echo "Chamado o post no arquivo processar_criar_postagem.php <br><br>";
    //echo "Salvando a postagem com o titulo: $titulo e Conteudo: $conteudo";

    $novaPostagem = "$titulo\n$conteudo\n\n";
    file_put_contents('dados.txt', $novaPostagem, FILE_APPEND);
    header("Location: index.php");

?>