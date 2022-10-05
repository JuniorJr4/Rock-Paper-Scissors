//divs
const body = document.querySelector('body');
const btns = document.querySelector('.btns');
const scores = document.querySelector('.scores');
const player = document.querySelector('.player');
const computerList = document.getElementById('computer');



//elements
const allBtns = document.querySelectorAll(".btns > *");
const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const showPlayerScore = document.querySelector('.playerScore');
const showComputerScore = document.querySelector('.computerScore');
const showOutcome = document.querySelector('.showOutcome');
const playerList = document.getElementById('player');


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
    displayComputerChoice();
    playerChoice = 'rock';
    playRound(playerChoice, computerChoice);
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("showOutcome").textContent = outcome;
    document.getElementById("finalOutcome").textContent = finalOutcome;

    playerList.removeChild(playerList.firstElementChild);
    const rockIcon = document.createElement('i');
    rockIcon.classList.add("fa-solid", "fa-hand-back-fist", "fa-10x");
    player.appendChild(rockIcon);
});

btnScissors.addEventListener('click', function () {
    computerChoice = getComputerChoice();
    displayComputerChoice();
    playerChoice = 'scissors';
    playRound(playerChoice, computerChoice);
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("showOutcome").textContent = outcome;
    document.getElementById("finalOutcome").textContent = finalOutcome;

    playerList.removeChild(playerList.firstElementChild);
    const scissorsIcon = document.createElement('i');
    scissorsIcon.classList.add("fa-solid", "fa-hand-scissors", "fa-10x");
    player.appendChild(scissorsIcon);

});

btnPaper.addEventListener('click', function () {
    computerChoice = getComputerChoice();
    displayComputerChoice();
    playerChoice = 'paper';
    playRound(playerChoice, computerChoice);
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("showOutcome").textContent = outcome;
    document.getElementById("finalOutcome").textContent = finalOutcome;

    playerList.removeChild(playerList.firstElementChild);
    const paperIcon = document.createElement('i');
    paperIcon.classList.add("fa-solid", "fa-hand", "fa-10x");
    player.appendChild(paperIcon);
});

function displayComputerChoice() {
    if (computerChoice == 'Paper') {
        computerList.removeChild(computerList.firstElementChild);
        const paperIcon = document.createElement('i');
        paperIcon.classList.add("fa-solid", "fa-hand", "fa-10x");
        computer.appendChild(paperIcon);
    } else if (computerChoice == 'Rock') {
        computerList.removeChild(computerList.firstElementChild);
        const rockIcon = document.createElement('i');
        rockIcon.classList.add("fa-solid", "fa-hand-back-fist", "fa-10x");
        computer.appendChild(rockIcon);
    } else {
        computerList.removeChild(computerList.firstElementChild);
        const scissorsIcon = document.createElement('i');
        scissorsIcon.classList.add("fa-solid", "fa-hand-scissors", "fa-10x");
        computer.appendChild(scissorsIcon);
    }
}


function disableButtons() {
    allBtns.forEach(el => {
        el.disabled = true;
    });
}


function newGame() {
    const playAgain = document.createElement('button');
    playAgain.textContent = 'Play Again?';
    scores.appendChild(playAgain);
    playAgain.classList.add('playAgainBtn')
    playAgain.addEventListener("click", function () {
        window.location.reload();
    });
}

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
        disableButtons();
        newGame();

    } else if (computerScore == 5) {
        finalOutcome = "That's Five Points for the Computer, You Lose!"
        disableButtons();
        newGame();
    }
}







