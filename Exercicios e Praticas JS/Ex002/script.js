const entradaInput = document.querySelector("#input-text");
const saidaInput = document.querySelector("#output-paragraph");

entradaInput.addEventListener("input", function () {
    saidaInput.textContent = entradaInput.value;
})