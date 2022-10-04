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
let finalOutcome = '';





btnRock.addEventListener('click', function () {
    computerChoice = getComputerChoice();
    playerChoice = 'rock';
   
    console.log(playRound(playerChoice, computerChoice));
    console.log(playerChoice, playerScore);
    console.log(computerChoice, computerScore);
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("showOutcome").textContent = outcome;
    document.getElementById("finalOutcome").textContent = finalOutcome;
});

btnScissors.addEventListener('click', function () {
    computerChoice = getComputerChoice();
    playerChoice = 'scissors';
    
    console.log(playRound(playerChoice, computerChoice));
    console.log(playerChoice, playerScore);
    console.log(computerChoice, computerScore);
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("showOutcome").textContent = outcome;
    document.getElementById("finalOutcome").textContent = finalOutcome;
});

btnPaper.addEventListener('click', function () {
    computerChoice = getComputerChoice();
    playerChoice = 'paper';
    console.log(playRound(playerChoice, computerChoice));
    console.log(playerChoice, playerScore);
    console.log(computerChoice, computerScore);
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("showOutcome").textContent = outcome;
    document.getElementById("finalOutcome").textContent = finalOutcome;
});






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
        outcome = "You win! Rock beats Scissors.";
    } else if (playerChoice === 'rock' && computerChoice === 'Rock') {
        outcome = "It's a tie! You both picked Rock.";
    } else if (playerChoice === 'rock' && computerChoice === 'Paper') {
        computerScore++;
        outcome = "You lose! Paper beats Rock.";
    } else if (playerChoice === 'paper' && computerChoice === 'Scissors') {
        computerScore++;
        outcome = "You lose! Scissors beats Paper.";
    } else if (playerChoice === 'paper' && computerChoice === 'Rock') {
        playerScore++;
        outcome = "You win! Paper beats Rock.";
    } else if (playerChoice === 'paper' && computerChoice === 'Paper') {
        outcome = "It's a tie! you both picked Paper.";
    } else if (playerChoice === 'scissors' && computerChoice === 'Scissors') {
        outcome = "It's a tie! You both picked Scissors.";
    } else if (playerChoice === 'scissors' && computerChoice === 'Rock') {
        computerScore++;
        outcome = "You lose! Rock beats Scissors.";
    } else {
        playerScore++;
        outcome = "You win! Scissors beats Paper.";
    }

   if (playerScore == 5) {
        finalOutcome = "That's Five Points, You've Won the Game!"
    } else if (computerScore == 5) {
        finalOutcome = "That's Five Points for the Computer, You Lose!"
    }
}







