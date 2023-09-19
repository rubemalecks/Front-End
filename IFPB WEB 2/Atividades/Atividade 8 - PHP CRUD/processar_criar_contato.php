<?php
    $nome = $_POST['nome'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];


    $novoContato = "$nome\n$tel\n$email\n\n";
    file_put_contents('dados.txt', $novoContato, FILE_APPEND);
    header("Location: index.php");
