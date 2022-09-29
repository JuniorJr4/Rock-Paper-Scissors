const weapons = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    return weapons[Math.floor(Math.random()*3)];
}
console.log(getComputerChoice());