<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Editar Postagem</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>
    <h2>Editar Postagem</h2>
    <?php
        $id = $_GET['id'];
        $postagens = file_get_contents('dados.txt');
        $postagens = explode("\n\n", $postagens);
        
        $dados = explode("\n", $postagens[$id]);

        if (count($dados) >= 2) {
            $titulo = $dados[0];
            $conteudo = $dados[1];
            echo "
                <form method='POST' action='processar_editar_postagem.php?id=$id'>

                <label for='titulo'>Titulo: </label>
                <input type='text' name='titulo' value='$titulo' required /> <br>
        
                <label for='conteudo'>Conteúdo: </label>
                <input type='text' name='conteudo' value='$conteudo' required /> <br>
        
                <input type='submit' value='Editar Postagem' />
            
            ";
        }else{
            echo "ID de postagem inválido";
        }      

    ?>
    
</body>
</html>