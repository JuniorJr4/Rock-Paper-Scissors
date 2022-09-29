//Initialize choice of weapons
const weapons = ['Rock', 'Paper', 'Scissors']

//Create function to play single round
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

//Create random computer choice
function getComputerChoice() {
    return weapons[Math.floor(Math.random() * 3)];
}

//Player and computer scores
let computerScore = 0;
let playerScore = 0;

//Create game function
function game() {
    //game loop for 5 rounds of play
    for (let i = 0; i < 5; i++) {

        //Assign Compter Choice
        let computerChoice = getComputerChoice();
        console.log(computerChoice); //Test log

        //Player move prompt
        let playerChoice = prompt("Rock, Paper or Scissors?");
        playerChoice.toLowerCase();
        console.log(playerChoice);

        //Intialize round
        console.log(playRound(playerChoice, computerChoice));
    }

    //display score and who won
    if (playerScore > computerScore) {
        console.log(`You won by a score of ${playerScore} to ${computerScore}!`);
    } else if (playerScore == computerScore) {
        console.log(`It's a tie, ${playerScore} to ${computerScore}!`)
    } else {
        console.log(`You lost by a score of ${playerScore} to ${computerScore}!`)
    }
}
game();
