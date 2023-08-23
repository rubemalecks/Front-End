const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");


const guessField = document.querySelector("#guessField");
const guessSubmit = document.querySelector(".guessSubmit");


let resetButton;
let guessCount = 1;
let randomNumber = Math.floor(Math.random() * 100 + 1);


function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Palpites Anteriores: ";
    }
    guesses.textContent += userGuess + '';
    if (userGuess === randomNumber) {
        lastResult.textContent = "Você acertou!!";
        lastResult.style.setBackgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    }
    else if (guessCount === 5) {
        lastResult.textContent = "Game Over!!";
        lastResult.style.setBackgroundColor = 'red';
        lowOrHigh.textContent = '';
        setGameOver();
    }
    else {
        lastResult.textContent = "ERROU";
        lastResult.style.setBackgroundColor = 'yellow';
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = "Palpite baixo! Eleve o chute!"
        } else if (userGuess > randomNumber) {
            lowOrHigh.textContent = "Palpite Alto! Diminua o valor"
        }

    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}
    
    

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessSubmit.disable = true;
    guessField.disable = true;
    resetButton.document.createElement("button");
    resetButton.textContent = "Novo Jogo";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;

    guesses.textContent = "";
    lastResult = "";
    lowOrHigh.textContent = "";

    guessSubmit.disable = false;
    guessField.disable = false;
    resetButton.parentNode.removeChild(resetButton);
    guessField.value = 0;
    guessField.focus();
    lastResult.style.setBackgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100 + 1);
}