
// Get HTML Elements

const gameForm = document.getElementById("gameForm");

const userNumber = document.getElementById("userNumber");

const scoreElement = document.getElementById("score");

const resultElement = document.getElementById("result");

const attemptsElement = document.getElementById("attempts");

const resetBtn = document.getElementById("resetBtn");


// Game Variables

let randomNumber;

let score = 0;

let attempts = 0;


// Generate Random Number

function generateRandomNumber() {

    randomNumber = Math.floor(Math.random() * 10) + 1;

}


// Start Game

generateRandomNumber();


// Check User Number

gameForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredNumber = Number(userNumber.value);


    // Validate Input

    if (
        !Number.isInteger(enteredNumber) ||
        enteredNumber < 1 ||
        enteredNumber > 10
    ) {

        showResult("Please enter a number between 1 and 10!");

        return;

    }


    // Increase Attempts

    attempts++;

    attemptsElement.textContent = attempts;


    // Compare Numbers

    if (enteredNumber === randomNumber) {

        score++;

        scoreElement.textContent = score;

        showResult("🎉 Congratulations! Your number matched!");

        // Generate New Number

        generateRandomNumber();

    }

    else if (enteredNumber < randomNumber) {

        showResult("📈 Too low! Try a bigger number.");

    }

    else {

        showResult("📉 Too high! Try a smaller number.");

    }


    // Clear Input

    userNumber.value = "";

});


// Display Result

function showResult(message) {

    resultElement.innerHTML = "";

    const messageElement = document.createElement("p");

    messageElement.textContent = message;

    resultElement.appendChild(messageElement);

}


// Reset Game

resetBtn.addEventListener("click", function() {

    score = 0;

    attempts = 0;

    scoreElement.textContent = score;

    attemptsElement.textContent = attempts;

    userNumber.value = "";

    showResult("Game restarted! Guess a new number.");

    generateRandomNumber();

});

