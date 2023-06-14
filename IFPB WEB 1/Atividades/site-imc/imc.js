

function imc() {
    var nomeInput = document.getElementById("nome").value
    var alturaInput = document.getElementById("altura").value
    var pesoInput = document.getElementById("peso").value
    var resultado = (pesoInput / (alturaInput * alturaInput))


    document.getElementById("resultado").textContent = "Nome: " + nomeInput + "\nIMC: " + resultado.toFixed(2);


}

