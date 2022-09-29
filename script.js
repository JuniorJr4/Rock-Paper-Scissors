const weapons = ['Rock', 'Paper', 'Scissors']


function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'Scissors') {
        playerScore++;
        return "You win! Rock beats Scissors.";
    } else if (playerChoice === 'rock' && computerChoice === 'Rock') {
        return "It's a tie! You both picked Rock.";
    } else if (playerChoice === 'rock' && computerChoice === 'Paper') {
        computerScore++;
        return "You lose! Paper beats Rock.";
    } else if (playerChoice === 'paper' && computerChoice === 'Scissors') {
        computerScore++;
        return "You lose! Scissors beats Paper."
    } else if (playerChoice === 'paper' && computerChoice === 'Rock') {
        playerScore++;
        return "You win! Paper beats Rock.";
    } else if (playerChoice === 'paper' && computerChoice === 'Paper') {
        return "It's a tie! you both picked Paper.";
    } else if (playerChoice === 'scissors' && computerChoice === 'Scissors') {
        return "It's a tie! You both picked Scissors.";
    } else if (playerChoice === 'scissors' && computerChoice === 'Rock') {
        computerScore++;
        return "You lose! Rock beats Scissors."
    } else {
        playerScore++;
        return "You win! Scissors beats Paper.";
    }
}

function getComputerChoice() {
    return weapons[Math.floor(Math.random() * 3)];
}

let computerScore = 0;
let playerScore = 0;

function game() {
    //game loop for 5 rounds of play
    for (let i = 0; i < 5; i++) {

        
        let computerChoice = getComputerChoice();
        console.log(computerChoice); //Test log

        
        let playerChoice = prompt("Rock, Paper or Scissors?");
        playerChoice.toLowerCase();
        console.log(playerChoice);

        
        console.log(playRound(playerChoice, computerChoice));
    }

    if (playerScore > computerScore) {
        console.log(`You won by a score of ${playerScore} to ${computerScore}!`);
    } else if (playerScore == computerScore) {
        console.log(`It's a tie, ${playerScore} to ${computerScore}!`)
    } else {
        console.log(`You lost by a score of ${playerScore} to ${computerScore}!`)
    }
}
game();
