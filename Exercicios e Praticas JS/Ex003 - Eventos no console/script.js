
const listaDeItens = document.getElementsByTagName('li');
var itemF;

for (let i = 0; i < listaDeItens.length; ++i) {
    itemF = listaDeItens[i]; // a cada execução ele recebe o valor do item na lista
    itemF.addEventListener('click', function () {
        // se clicado
        console.log(listaDeItens[i].textContent) // exibe o texto de <li>
    })
}