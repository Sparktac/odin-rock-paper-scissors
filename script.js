console.log('Welcome friend. Let\'s play Rock, Paper, Scissors!');

// Set global variables
const userInput = prompt('Choose your weapon!');
console. log(`You have chosen ${userInput}!`);

let playerScore = 0;
let computerScore = 0;

// Computer picks one from the array at random
function computerPlay() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    let result = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return result;
}

function game() {
    for (let i = 0; i <5; i++); {
        function playRound(playerSelection, computerSelection) {
            if (playerSelection == computerSelection) {
                tie++;
                return console.log('It\'s a tie!');
            } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                player++;
                return console.log('Nice! Rock beats scissors!');
            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                computer++;
                return console.log('Dang...paper beats rock :(');
            } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                player++;
                return console.log('Nice! Paper beats rock!');
            } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                computer++;
                return console.log('Dang...scissors beats paper :(');
            }else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                player++;
                return console.log('Nice! Scissors beats paper!');
            } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                computer++;
                return console.log('Dang...rock beats scissors :(');
            } else 
                console.log('Please enter a valid selection!'); 
            }
    } playRound();
}

// Helper functions

function capitalize(string) {
    return (
      string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    );
  }