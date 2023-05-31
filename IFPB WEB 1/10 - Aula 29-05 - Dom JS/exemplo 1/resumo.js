function getById() {
    const listaContatos = document.getElementById("lista-contatos")
    window.alert(listaContatos)
}

function getByTagName() {
    const liElementos = document.getElementsByTagName("li")
    window.alert(liElementos[2].textContent)
}

function getByClassName() {
    const contatoInputs = document.getElementsByClassName("contato-input")
    window.alert(contatoInputs[1].value)
}

function getQuerySelectorAll() {
    
}