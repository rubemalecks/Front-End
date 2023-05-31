let  cont = 0

function addContato() {
    let listaContatos = document.getElementById("lista-contatos")
    h3 = document.createElement('h3')
    h3.innerText = "Contato " + (++cont)
    listaContatos.appendChild(h3)

    ul = document.createElement("ul")
    ul.appendChild(document.createElement('br'))


    nomeLi = document.createElement("li")
    nomeLi.innerText = "Nome: "
    nomeInput = document.createElement("input")
    nomeInput.type = 'text'
    nomeInput.name = "nomeCompleto" // não é obrigatório
    nomeLi.appendChild(nomeInput)
    ul.appendChild(nomeLi)
    ul.appendChild(document.createElement('br'))



    foneLi = document.createElement("li")
    foneLi.innerText = "Tel: "
    foneInput = document.createElement("input")
    foneInput.type = 'text'
    foneInput.name = "Telefone" // não é obrigatório
    foneLi.appendChild(foneInput)
    ul.appendChild(foneLi)
    ul.appendChild(document.createElement('br'))


    enderecoLi = document.createElement("li")
    enderecoLi.innerText = "Endereço: "
    enderecoInput = document.createElement("input")
    enderecoInput.type = 'text'
    enderecoInput.name = "Endereço" // não é obrigatório
    enderecoLi.appendChild(enderecoInput)
    ul.appendChild(enderecoLi)
    ul.appendChild(document.createElement('br'))

    listaContatos.appendChild(ul)
}


function removeContato() {
    let listaContatos = document.getElementById("lista-contatos")
    titulos = document.getElementsByTagName('h3')
    contatos = document.getElementsByTagName('ul')
    posicao = titulos.length;
    listaContatos.removeChild(titulos[posicao-1])
    listaContatos.removeChild(contatos[posicao-1])
    cont--;
}