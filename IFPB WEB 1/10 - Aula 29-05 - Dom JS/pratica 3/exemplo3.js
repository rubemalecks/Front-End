let  cont = 0

function addContato() {
    let listaContatos = document.getElementById("lista-contatos")
    h3 = document.createElement('h3')
    h3.innerText = "Contato " + (++cont)
    listaContatos.appendChild(h3)

    ul = document.createElement("ul")


    nomeLi = document.createElement("li")
    nomeLi.innerText = "Nome: "
    nomeInput = document.createElement("input")
    nomeInput.type = 'text'
    nomeInput.name = "nomeCompleto" // não é obrigatório
    nomeLi.appendChild(nomeInput)
    ul.appendChild(nomeLi)



    foneLi = document.createElement("li")
    foneLi.innerText = "Tel: "
    foneInput = document.createElement("input")
    foneInput.type = 'text'
    foneInput.name = "Telefone" // não é obrigatório
    foneLi.appendChild(foneInput)
    ul.appendChild(foneLi)


    enderecoLi = document.createElement("li")
    enderecoLi.innerText = "Endereço: "
    enderecoInput = document.createElement("input")
    enderecoInput.type = 'text'
    enderecoInput.name = "Endereço" // não é obrigatório
    enderecoLi.appendChild(enderecoInput)
    ul.appendChild(enderecoLi)


    listaContatos.appendChild(ul)
}