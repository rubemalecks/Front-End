<?php

    $id = $_GET['id'];
    $postagens = file_get_contents('dados.txt');
    $postagens = explode("\n\n", $postagens);

    unset($postagens[$id]);
  
    file_put_contents('dados.txt', implode("\n\n", $postagens));
    header("Location: index.php");   

?>