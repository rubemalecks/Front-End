
const listaDeItens = document.getElementsByTagName('li');
var itemF;

for (let i = 0; i < listaDeItens.length; ++i) {
    itemF = listaDeItens[i];
    itemF.addEventListener('click', function () {
        console.log(listaDeItens[i])
    })
}