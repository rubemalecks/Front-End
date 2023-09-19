<?php
    $id = $_GET['id'];
    $nome = $_POST['nome'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];

    $contatos = file_get_contents('dados.txt');
    $contatos = explode("\n\n", $contatos);

    $dados = explode("\n", $contatos[$id]);

    if (count($dados) >= 2) {
        $contatos[$id] = "$nome\n$tel\n$email\n\n";
        file_put_contents('dados.txt', implode("\n\n", $contatos));
        header("Location: index.php");
    }else{
        echo "ID de contato inválido";
    }
       

?>