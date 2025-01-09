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

function getHumanChoice() {
    return prompt("Chose from rock, paper, scissors").toLowerCase()
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        console.log(`${humanChoice} vs ${computerChoice} DRAW!`)
    }

    else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        return 1
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        return 0
        }
    }

    let humanScore = 0
    let computerScore = 0

function playGame() {
    
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice() 
    let result = playRound(humanSelection, computerSelection) 
    if (result == 1){
        humanScore++
    }
    else if (result == 0) {
        computerScore++
    }
    console.log(`Your score: ${humanScore}, Computer Score: ${computerScore}`)
    let playAgain = prompt("Would you like to play again? (y/n)").toLowerCase()
    
    if (playAgain == "y") {
        playGame()
    }
    else {
        if (humanScore > computerScore) {
            console.log("Game Over. You win!")
        }
        else if (humanScore == computerScore) {
            console.log("Game Over. Draw!")
        }
        else {
            console.log("Game Over. You lose!")
        }
        console.log("Thanks for playing!")
    }
}
playGame()

