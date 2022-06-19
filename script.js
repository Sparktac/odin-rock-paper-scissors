console.log('Welcome friend. Let\'s play Rock, Paper, Scissors!');

// Set global variables
//const userInput = prompt('Choose your weapon!');
//console. log(`You have chosen ${userInput}!`);



const choices = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

// Get input from player
function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('Type Rock, Paper, or Scissors');
    }
        input = input.toLowerCase(); // Takes whole string and makes it lower case
    let check = validateInput(input); // Assign validateInput function to check variable, if true -> output user input (need input parameter)
    while (check == false) {
        input= prompt('Type Rock, Paper, or Scissors. Spelling matters but capitalization does not!');
        while (input == null) {
            input = prompt('Type Rock, Paper, or Scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input); // Breaks an infinite false check loop
    }
    //console.log(input);
}

// Computer picks one from the choices array at random
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; // Could sub '3' for 'choices.length' since there are 3 array choices!
    
}

function game() {
    playRound();
}

// Play round logic
function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

// Validate user input as one of the available choices
function validateInput(choice) {
    return (choices.includes(choice)); // Don't need if/else because if it's true it will run, if false it will stop
}

game();