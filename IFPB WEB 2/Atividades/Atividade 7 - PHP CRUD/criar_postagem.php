<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Criar Postagem</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
    <h2>Criação de Postagem</h2>

    <form method="POST" action="processar_criar_postagem.php">
        <label for="titulo">Titulo: </label>
        <input type="text" name="titulo" required /> <br>

        <label for="conteudo">Conteúdo: </label>
        <input type="text" name="conteudo" required /> <br>

        <input type="submit" value="Criar Postagem" />

    </form>
    
</body>
</html>