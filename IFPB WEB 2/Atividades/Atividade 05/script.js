const chatContainer = document.querySelector('.chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const message = userInput.value;
    if (message.trim() !== '') {
        const userMessageElement = createMessageElement(`Você: ${message}`);
        chatContainer.appendChild(userMessageElement);
        userInput.value = '';

        // Substitua 'SUA_CHAVE_DE_API_DA_OPENAI_AQUI' pela sua chave de API real
        const apiKey = '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';
        const apiUrl = 'https://api.openai.com/v1/chat/completions';
        
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: message,
                    },
                ],
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data && data.choices && data.choices.length > 0) {
                const gptResponse = data.choices[0].message.content;
                const gptMessageElement = createMessageElement(`ChatGPT: ${gptResponse}`);
                chatContainer.appendChild(gptMessageElement);
            } else {
                console.error('Resposta inválida da API do ChatGPT:', data);
            }
        })
        .catch(error => console.error('Erro ao enviar mensagem para o ChatGPT:', error));
    }
}

function createMessageElement(text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = text;
    return messageElement;
}
