const quest = document.getElementById("input-container");
const botaoEnviar = document.getElementById("send-button");
const OPENAI_API_KEY = ""


botaoEnviar.addEventListener("click", async(e) => {
    let pergunta = document.getElementById("user-input").value;
    console.log(pergunta);

    // Requisição para chatgpt

    await fetch("https://api.openai.com/v1/completions", {
        // Método de Envio
        method: "POST", 

        // Dados de Cabeçalho 
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + OPENAI_API_KEY,
        },

        body: JSON.stringify({
            model: "text-davinci-003", //Modelo
            prompt: pergunta, 
            max_tokens: 2048,
            temperature: 0.5
        })
    });
})
