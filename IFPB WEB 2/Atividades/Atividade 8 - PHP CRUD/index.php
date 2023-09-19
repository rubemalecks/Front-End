<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Lista de contato</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
<h2>Contatos</h2>
    <ul>
        <?php
        $contatos = file_get_contents('dados.txt');
        $contatos = explode("\n\n", $contatos);

        foreach ($contatos as $id => $contato) {
            $dados = explode("\n", $contato);
            if (count($dados) >= 3) {
                $nome = $dados[0];
                $tel = $dados[1];
                $email = $dados[2]; 
                echo "<li><strong>$nome</strong><br>$tel<strong><br>$email</strong></li>";
                echo "<a href='editar_contato.php?id=$id'>Editar</a> |" ;
                echo "<a href='excluir_contato.php?id=$id'>Excluir</a>";
                
            }           
        }
        ?>
    </ul>
    <a href="criar_contato.php">Novo Contato</a>
    
</body>
</html>