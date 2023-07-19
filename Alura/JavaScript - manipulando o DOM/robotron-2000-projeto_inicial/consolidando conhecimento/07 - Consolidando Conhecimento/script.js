

const botao = document.querySelector("#calcular");
const result = document.querySelector(".resultado")

botao.addEventListener("click", () => {
    result.innerText = 'Fui clicado!'
})
