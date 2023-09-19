<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Criar Contato</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
    <h2>Meus Contatos</h2>

    <form method="POST" action="processar_criar_contato.php">
        <label for="nome">Nome: </label>
        <input type="text" name="nome" required /> <br>

        <label for="tel">Telefone: </label>
        <input type="text" name="tel" required /> <br>

        <label for="email">E - mail: </label>
        <input type="email" name="email" required /> <br>

        <input type="submit" value="Criar Contato" />

    </form>
    
</body>
</html>