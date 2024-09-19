let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
let attempts = 0;
const maxAttempts = 5;

function checkGuess() {
    attempts++;
    let attemptsLeft = maxAttempts - attempts;
    if (attempts <= maxAttempts) {
        let guessedNumber = parseInt(userInput.value);
        if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
            gameResult.textContent = "Please provide a valid input between 1 and 100. Attempts left: " + attemptsLeft;
            gameResult.style.backgroundColor = "#1e217c";
        } else {
            if (guessedNumber > randomNumber) {
                gameResult.textContent = "Too High! Try Again. Attempts left: " + attemptsLeft;
                gameResult.style.backgroundColor = "#1e217c";
            } else if (guessedNumber < randomNumber) {
                gameResult.textContent = "Too Low! Try Again. Attempts left: " + attemptsLeft;
                gameResult.style.backgroundColor = "#1e217c";
            } else if (guessedNumber === randomNumber) {
                gameResult.textContent = "Congratulations! You got it right.";
                gameResult.style.backgroundColor = "green";
            }
        }
        if (attempts === maxAttempts && guessedNumber !== randomNumber) {
            gameResult.textContent = "You've exhausted all attempts! The correct answer was " + randomNumber + ".";
            gameResult.style.backgroundColor = "#1e217c";
        }
    } else {
        gameResult.textContent = "You've exhausted all attempts! The correct answer was " + randomNumber + ".";
        gameResult.style.backgroundColor = "#1e217c";
    }
}