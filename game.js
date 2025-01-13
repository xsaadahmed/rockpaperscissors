function getComputerChoice() {
    let randomNum = Math.random()
    if (randomNum < 0.33) {
        return "rock"
    }
    else if(randomNum < 0.66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    displayHumanScore.textContent = `Your Score: ${humanScore}`;
    displayComputerScore.textContent = `Computer Score: ${computerScore}`;
    messageDisplay.textContent = ""    
    messageDisplayGameOver.textContent = ""    
}

function displayMessage(message) {
    messageDisplay.textContent = message;
}

function displayMessageGameOver(message) {
    messageDisplayGameOver.textContent = message;
}

function playAgain () {
    let playAgain = prompt("Would you like to play again? (y/n)").toLowerCase()
    
    if (playAgain == "y") {
        resetGame() }

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`${humanChoice} vs ${computerChoice} DRAW!`);
        displayMessage("")
        setTimeout(function() {displayMessage(`${humanChoice} vs ${computerChoice} DRAW!`)
    },100)
    return 0;  // Draw
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        displayMessage("")
        setTimeout(function(){ displayMessage(`You win! ${humanChoice} beats ${computerChoice}.`)
    },100)
    return 1;  // Win
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        displayMessage("")
        setTimeout(function() {displayMessage(`You lose! ${computerChoice} beats ${humanChoice}.`);
    },100)
    return -1; // Loss
    }
}


    let humanScore = 0
    let computerScore = 0

function playGame(humanChoice) {
    
    const humanSelection = humanChoice
    const computerSelection = getComputerChoice() 
    let result = playRound(humanSelection, computerSelection) 
    if (result == 1){
        humanScore++
    }
    else if (result == -1) {
        computerScore++
    }
    displayHumanScore.textContent = `Your Score: ${humanScore}`
    displayComputerScore.textContent = `Computer score: ${computerScore}`

    console.log(`Your score: ${humanScore}, Computer Score: ${computerScore}`)

        if (humanScore == 5) {
            console.log("Game Over. You win!")
            displayMessageGameOver("Game Over. You win!")
            setTimeout(function() {playAgain()}, 1200)
            
        }
        
        else if (computerScore == 5){
            console.log("Game Over. You lose!")
            displayMessageGameOver("Game Over. You lose!")
            setTimeout(function() {playAgain()}, 1200)
            
        }
        
        
 }
// }
const rockButton = document.createElement("button")
const paperButton = document.createElement("button")
const scissorsButton = document.createElement("button")

rockButton.textContent = "rock";
paperButton.textContent = "paper";
scissorsButton.textContent = "scissors";

const div = document.querySelector("div")

div.appendChild(rockButton)
div.appendChild(paperButton)
div.appendChild(scissorsButton)

rockButton.addEventListener("click", function() {
    playGame("rock");
});
paperButton.addEventListener("click", function() {
    playGame("paper");
});
scissorsButton.addEventListener("click", function() {
    playGame("scissors");
});

const displayComputerScore = document.createElement("h2")
const displayHumanScore = document.createElement("h2")
const messageDisplay = document.createElement("h3")
const messageDisplayGameOver = document.createElement("h1")

displayHumanScore.textContent = `Your Score: ${humanScore}`
displayComputerScore.textContent = `Computer score: ${computerScore}`
messageDisplay.textContent = ""
messageDisplayGameOver.textContent = ""

div.appendChild(displayHumanScore)
div.appendChild(displayComputerScore)
div.appendChild(messageDisplay)
div.appendChild(messageDisplayGameOver)


