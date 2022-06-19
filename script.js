console.log('Welcome friend. Let\'s play Rock, Paper, Scissors!');

// Set global variables
const userInput = prompt('Choose your weapon!');
console. log(`You have chosen ${userInput}!`);



const choices = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

// Get input from player
function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors');
    input = input.toLocaleLowerCase(); // Takes whole string and makes it lower case
    console.log(input);
}

// Computer picks one from the choices array at random
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; // Could sub '3' for 'choices.length' since there are 3 array choices!
    
}

function game() {
    playRound();
}

// Play round logic
function playRound(playerSelection, computerSelection) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();

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

game();


// Helper functions

function capitalize(string) {
    return (
      string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    );
  }