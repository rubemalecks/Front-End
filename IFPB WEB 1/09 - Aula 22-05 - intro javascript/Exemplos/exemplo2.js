/* Criando elementos no DOM com Java Script
let body = document.body
let h2 = document.createElement('h2')
h2.textContent = "Manipulando o DOM"
body.append(h2)
//body.appendChild(h2)*/

let pessoas=["Ana", "Maria", "Joao", "Jose"];
let lista = document.querySelector('#lista');
for (let i=0; i<pessoas.length; i++){
    let li = document.createElement('li')
    li.textContent = pessoas[i]
    lista.append(li)
}

let li2 = document.createElement('li')
li2.textContent = "Joana"
lista.append(li2)

//outra forma
document.getElementsByTagName('li')[2].textContent="Jonathas"

function clicou(){
    let lista = document.querySelector('#lista');
    lista.innerHTML += "<li>Marina</li>"
    //document.querySelector('#lista').innerHTML += "<li>Marina</li>"
    //document.querySelector('ul').innerHTML += "<li>Marina</li>"
}
/*1a forma de associar evento de clique com o botao
botao = document.querySelector('#botao')
botao.addEventListener("click", clicou);
//document.querySelector('#botao').addEventListener("click", clicou);*/

//outra forma
//botao = document.querySelector('#botao')
//botao.addEventListener("click", function() {clicou()});
//botao.addEventListener("click", () => {clicou()});






