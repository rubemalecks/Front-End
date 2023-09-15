<?php
// Credenciais de usuário e senha (armazenadas em um array)
$usuarios = [
    'usuario1' => 'senha1',
    'usuario2' => 'senha2',
    'usuario3' => 'senha3'
];

// Verifique se o formulário foi submetido
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Verifique se o nome de usuário existe no array e se a senha corresponde
    if (array_key_exists($username, $usuarios) && $usuarios[$username] === $password) {
        echo "Login bem-sucedido! Bem-vindo, $username.";
    } else {
        echo "Credenciais inválidas. Por favor, tente novamente.";
    }
}
?>
