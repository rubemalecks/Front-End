function mostrar() {
    let input = document.querySelector("#entrada")
    if (input.getAttribute('type')=== 'password') {
        input.setAttribute('type', 'text')
        document.querySelector('#btMostra').innerHTML = 'Ocultar senha'
    }
    else {
        input.setAttribute('type', 'password')
        document.querySelector('#btMostra').innerHTML = 'Mostrar senha'
    }
    
}

function mudaPlaceholder() {
    let placeHolder = document.querySelector('#entrada')
    placeHolder.setAttribute('placeholder', 'Informe a senha')
    btPlace = document.querySelector('#btPlace')
    btPlace.setAttribute('disabled', '')
}