let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function singleRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    console.log(`The computer got ${computerSelection}`);
    
    if (playerSelection === computerSelection) {
        return "tie!";
    }
    else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                playerScore++;
                return "You Win! Paper beats Rock";
                break;
            case "scissors":
                computerScore++;
                return "You Lose! Scissors beat Paper";
                break;
        }
    }
    else if (playerSelection === "rock") {
        switch (computerSelection) {
            case "paper": 
                computerScore++;
                return "You Lose! Paper beats Rock";
                break;
            case "scissors":
                playerScore++;
                return "You Win! Rock beats Scissors";
                break;
        }
    }
    else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "paper":
                playerScore++;
                return "You Win! Scissors beat Paper";
                break;
            case "rock":
                computerScore++;
                return "You Lose! Rock beat Scissors";
                break;
        }
    }
    else {
        return "Please input a valid choice!";
    }
}

function game(rounds) {
    for(let i = 0; i <= rounds; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        console.log(singleRound(playerChoice, getComputerChoice()));
    }
    
    console.log(`The player score is ${playerScore}`);
    console.log(`The computer score is ${computerScore}`);
}

const buttons = document.querySelectorAll("button");
const resultsContainer = document.querySelector("#results-container");
const newResults = document.createElement("h1");
newResults.classList.add("results-header");

const playerScoreElement = document.createElement("h3");
const computerScoreElement = document.createElement("h3");
playerScoreElement.classList.add("player-running-score");
computerScoreElement.classList.add("computer-running-score");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        newResults.textContent = singleRound(button.className, getComputerChoice());
        if (playerScore == 5) {
            newResults.textContent = "The player reached 5 points and won the game!";
        }
        else if (computerScore == 5) {
            newResults.textContent = "The computer reached 5 points and won the game!";
        }
  
        playerScoreElement.textContent = `The player score is ${playerScore}`;
        computerScoreElement.textContent = `The computer score is ${computerScore}`;
    });
});

resultsContainer.appendChild(newResults);
resultsContainer.appendChild(playerScoreElement);
resultsContainer.appendChild(computerScoreElement);