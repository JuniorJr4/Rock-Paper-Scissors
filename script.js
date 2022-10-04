//divs
const body = document.querySelector('body');
const btns = document.querySelector('.btns');
const scores = document.querySelector('.scores');

//elements
const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const showPlayerScore = document.querySelector('.playerScore');
const showComputerScore = document.querySelector('.computerScore');
const showOutcome = document.querySelector('.showOutcome');

btns.appendChild(btnRock);
btns.appendChild(btnPaper);
btns.appendChild(btnScissors);

const weapons = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return weapons[Math.floor(Math.random() * 3)];
}


let computerScore = 0;
let playerScore = 0;

let playerChoice = '';
let computerChoice = '';
let outcome = '';





btnRock.addEventListener('click', function () {
    computerChoice = getComputerChoice();
    playerChoice = 'rock';
    playerChoice.toLowerCase();
    console.log(playRound(playerChoice, computerChoice));
    console.log(playerChoice, playerScore);
    console.log(computerChoice, computerScore);
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("showOutcome").textContent = outcome;
});

btnScissors.addEventListener('click', function () {
    computerChoice = getComputerChoice();
    playerChoice = 'scissors';
    playerChoice.toLowerCase();
    console.log(playRound(playerChoice, computerChoice));
    console.log(playerChoice, playerScore);
    console.log(computerChoice, computerScore);
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("showOutcome").textContent = outcome;
});

btnPaper.addEventListener('click', function () {
    computerChoice = getComputerChoice();
    playerChoice = 'paper';
    playerChoice.toLowerCase();
    console.log(playerChoice, playerScore);
    console.log(computerChoice, computerScore);
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("showOutcome").textContent = outcome;
});





playerChoice.toLowerCase();
console.log(playerChoice);




/*
    if (playerScore > computerScore) {
        console.log(`You won by a score of ${playerScore} to ${computerScore}!`);
    } else if (playerScore == computerScore) {
        console.log(`It's a tie, ${playerScore} to ${computerScore}!`)
    } else {
        console.log(`You lost by a score of ${playerScore} to ${computerScore}!`)
    }
    */





function playRound(playerChoice, ComputerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'Scissors') {
        playerScore++;
        if (playerScore > 4) {
            outcome = "That's 5 points, You've Won the Game!"
        } else if (computerScore > 4) {
            outcome = "That's 5 points for the Computer, You Lose!"
        } else {
            outcome = "You win! Rock beats Scissors.";
        }
    } else if (playerChoice === 'rock' && computerChoice === 'Rock') {
        outcome = "It's a tie! You both picked Rock.";
    } else if (playerChoice === 'rock' && computerChoice === 'Paper') {
        computerScore++;
        if (playerScore > 4) {
            outcome = "That's 5 points, You've Won the Game!"
        } else if (computerScore > 4) {
            outcome = "That's 5 points for the Computer, You Lose!"
        } else {
            outcome = "You win! Rock beats Scissors.";
        }
        outcome = "You lose! Paper beats Rock.";
    } else if (playerChoice === 'paper' && computerChoice === 'Scissors') {
        computerScore++;
        if (playerScore > 4) {
            outcome = "That's 5 points, You've Won the Game!"
        } else if (computerScore > 4) {
            outcome = "That's 5 points for the Computer, You Lose!"
        } else {
            outcome = "You win! Rock beats Scissors.";
        }
        outcome = "You lose! Scissors beats Paper."
    } else if (playerChoice === 'paper' && computerChoice === 'Rock') {
        playerScore++;
        if (playerScore > 4) {
            outcome = "That's 5 points, You've Won the Game!"
        } else if (computerScore > 4) {
            outcome = "That's 5 points for the Computer, You Lose!"
        } else {
            outcome = "You win! Rock beats Scissors.";
        }
        outcome = "You win! Paper beats Rock.";
    } else if (playerChoice === 'paper' && computerChoice === 'Paper') {
        outcome = "It's a tie! you both picked Paper.";
    } else if (playerChoice === 'scissors' && computerChoice === 'Scissors') {
        outcome = "It's a tie! You both picked Scissors.";
    } else if (playerChoice === 'scissors' && computerChoice === 'Rock') {
        computerScore++;
        if (playerScore > 4) {
            outcome = "That's 5 points, You've Won the Game!"
        } else if (computerScore > 4) {
            outcome = "That's 5 points for the Computer, You Lose!"
        } else {
            outcome = "You win! Rock beats Scissors.";
        }
        outcome = "You lose! Rock beats Scissors."
    } else {
        playerScore++;
        if (playerScore > 4) {
            outcome = "That's 5 points, You've Won the Game!"
        } else if (computerScore > 4) {
            outcome = "That's 5 points for the Computer, You Lose!"
        } else {
            outcome = "You win! Rock beats Scissors.";
        }
        outcome = "You win! Scissors beats Paper.";
    }
}







