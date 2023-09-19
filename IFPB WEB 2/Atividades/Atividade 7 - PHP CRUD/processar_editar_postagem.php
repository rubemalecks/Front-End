<?php
    $id = $_GET['id'];
    $titulo = $_POST['titulo'];
    $conteudo = $_POST['conteudo'];

    $postagens = file_get_contents('dados.txt');
    $postagens = explode("\n\n", $postagens);

    $dados = explode("\n", $postagens[$id]);

    if (count($dados) >= 2) {
        $postagens[$id] = "$titulo\n$conteudo\n\n";
        file_put_contents('dados.txt', implode("\n\n", $postagens));
        header("Location: index.php");
    }else{
        echo "ID de postagem inválido";
    }
       

?>