// Crie dois botões em HTML com os IDs "btn-show" e "btn-hide". Em JavaScript, adicione eventos de clique a cada botão. O botão "btn-show" deve exibir um parágrafo oculto com o ID "hidden-paragraph", enquanto o botão "btn-hide" deve ocultar o parágrafo novamente.

var paragrafo = document.getElementById('paragrafo');
var exibir = document.getElementById('btn-show');
var ocultar = document.getElementById('btn-hide');

exibir.addEventListener('click', function () {
    paragrafo.removeAttribute("hidden")
})
ocultar.addEventListener('click', function () {
    paragrafo.setAttribute("hidden", true)
})

