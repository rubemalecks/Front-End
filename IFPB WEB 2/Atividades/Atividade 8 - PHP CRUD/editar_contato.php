<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Editar Contato</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>
    <h2>Editar Contato</h2>
    <?php
        $id = $_GET['id'];
        $contatos = file_get_contents('dados.txt');
        $contatos = explode("\n\n", $contatos);
        
        $dados = explode("\n", $contatos[$id]);

        if (count($dados) >= 3) {
            $nome = $dados[0];
            $tel = $dados[1];
            $email = $dados[2];
            echo "
                <form method='POST' action='processar_editar_contato.php?id=$id'>

                <label for='nome'>nome: </label>
                <input type='text' name='nome' value='$nome' required /> <br>
        
                <label for='tel'>Tel: </label>
                <input type='text' name='tel' value='$tel' required /> <br>

                <label for='tel'>E - mail: </label>
                <input type='text' name='email' value='$email' required /> <br>
        
                <input type='submit' value='Editar Contato' />
            
            ";
        }else{
            echo "ID de contato inválido";
        }      

    ?>
    
</body>
</html>