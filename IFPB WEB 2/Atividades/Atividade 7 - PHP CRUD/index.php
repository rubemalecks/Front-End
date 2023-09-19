<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Lista de Postagem</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
<h2>Postagens Recentes</h2>
    <ul>
        <?php
        $postagens = file_get_contents('dados.txt');
        $postagens = explode("\n\n", $postagens);

        foreach ($postagens as $id => $postagem) {
            $dados = explode("\n", $postagem);
            if (count($dados) >= 2) {
                $titulo = $dados[0];
                $conteudo = $dados[1];
                echo "<li>\n<strong>$titulo</strong><br>$conteudo</li>";
                echo "<a href='editar_postagem.php?id=$id'>Editar</a> |" ;
                echo "<a href='excluir_postagem.php?id=$id'>Excluir</a>";
                
            }           
        }
        ?>
    </ul>
    <a href="criar_postagem.php">Criar Postagem</a>
    
</body>
</html>