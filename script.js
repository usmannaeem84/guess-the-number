const RandomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector(".Input");
const button = document.querySelector(".btn");
const PreviousValue = document.querySelector(".Gno");
const AttemptsLeft = document.querySelector(".Attleft");
const startOver = document.querySelector(".result")
const LowHigh = document.querySelector(".lowORhigh")
const p = document.createElement("p");

let prevGuess = [];
let GuessNo = 1;
let playgames = true

if (playgames) {
    userInput.focus();
    userInput.select();
    button.addEventListener("click", function (e) {
        e.preventDefault()
        userInput.focus();
        userInput.select();
        const guess = parseInt(userInput.value)
        Validate(guess)
    })
}
function Validate(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number")
    }
    else if (guess < 1) {
        alert("please enter a number between 1-100")

    }
    else if (guess > 100) {
        alert("please enter a number between 1-100")

    }
    else {
        prevGuess.push(guess)
        if (GuessNo === 10) {
            displayMessage(guess)
            displayMessage(`Game Over! Random number was ${RandomNumber}`)
            endGame(guess)

        }
        else {
            checkGuess(guess);
            displayGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === RandomNumber) {

        displayMessage("You guessed it right").style.color = "green";
        endGame(guess)
    } else if (guess > RandomNumber) {

        displayMessage("your Guess is too high")

    }
    else if (guess < RandomNumber) {

        displayMessage("your Guess is too low")
    }
}

function displayGuess(guess) {

    userInput.value = '';
    GuessNo++;
    PreviousValue.innerHTML += `${guess} `
    AttemptsLeft.innerHTML = `${10 - GuessNo}`
}
function displayMessage(message) {
    LowHigh.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
    userInput.disabled = true;
   let playgames=false
    button.disabled = true;
    startOver.appendChild(p)
    p.innerHTML = "<h3 class='start'>Start New Game<h3>"
    p.addEventListener("click", function (e) {
        PreviousValue.innerHTML = ""
        newGame()
        
    })
}
function newGame() {
const RandomNumber = parseInt(Math.random() * 100 + 1)
    
    AttemptsLeft.innerHTML = ""
    userInput.value = ""
    LowHigh.innerHTML = ""
    prevGuess=[]
    GuessNo=1
    AttemptsLeft.innerHTML = `${11 - GuessNo}`
    PreviousValue.innerHTML = ""
    button.disabled = false
    userInput.disabled = false
startOver.removeChild(p)

   playgames=true;
}


