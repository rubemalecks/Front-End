<?php

    $id = $_GET['id'];
    $contatos = file_get_contents('dados.txt');
    $contatos = explode("\n\n", $contatos);

    unset($contatos[$id]);
  
    file_put_contents('dados.txt', implode("\n\n", $contatos));
    header("Location: index.php");   

?>