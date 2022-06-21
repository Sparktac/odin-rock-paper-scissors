console.log('Hey there! Let\'s play Rock, Paper, Scissors!');

const choices = ['rock', 'paper', 'scissors'];
const winners = [];

// Get input from player
function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors'); // Prompt the player to select one from the list
    while (input == null) {                              // While nothing exists in the input section, continue to prompt with selection
        input = prompt('Type Rock, Paper, or Scissors'); 
    }
        input = input.toLowerCase(); // Take whole string and makes it lower case so it matches 'const = choices'
    let check = validateInput(input); // Create check variable and run validateInput function w/ 'input' parameter to check if users input is valid
    while (check == false) {         // If it doesn't match one of the ones from 'choices', prompt again with addendum
        input = prompt('Type Rock, Paper, or Scissors. Spelling matters but capitalization does not!');
        while (input == null) {      // If input space remains empty, continue to prompt with selection
            input = prompt('Type Rock, Paper, or Scissors');
        }
        input = input.toLowerCase(); // Checks input against input.lowercase to check if true
        check = validateInput(input); // Breaks an infinite false check loop
    }
    return (input);                  //Return the final result as the player choice
}


// Computer picks one from the choices array at random
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; // Return 1 of 3 possible 'choices'. Could sub '3' for 'choices.length' since there are 3 array choices!
    
}

function game() {
    for (let i = 1; i <= 5; i++) {    // Starts round # at 1 and continues until 5
        playRound(i);
    }
    logWins();
}

// Play round logic
function playRound(round) {
    const playerSelection = playerChoice();            // Assign playerChoice() function to it's own variable
    const computerSelection = computerChoice();        // Assign computerChoice() function to it's own variable
    const winner = checkWinner(playerSelection, computerSelection); // Assign the checkWinner function to it's own variable
    winners.push(winner);                              // 
    logRound(playerSelection, computerSelection,winner, round);
}

// Validate user input as one of the available choices
function validateInput(choice) {
    return (choices.includes(choice)); // Don't need if/else because if it's true it will run, if false it will stop
}

// Game logic to determine winning choice
function checkWinner(choiceP, choiceC) { // Function to check winner, use of 'OR' to clean up code
    if (choiceP === choiceC){
        return ('It was a tie!')
    } else if (
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') || 
        (choiceP === 'scissors' && choiceC == 'paper')
        ) {
        return 'Nice! You win this round!'
    } else {                                    // Don't need to specify the losing side, because if it's not a tie or a win, then it has to be a loss!
        return 'Aw shucks, the computer won this round.'
    }
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player chose:', playerChoice);
    console.log('Computer chose:', computerChoice);
    console.log(winner);
    console.log('-------------------------------');     // Creates a visual break line in console between rounds
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'Nice! You win this round!').length;  // Creates new arrays for each string, runs items against the max number
    let computerWins = winners.filter((item) => item == 'Aw shucks, the computer won this round.').length; // and checks the length
    let ties = winners.filter((item) => item == 'It was a tie!').length;
    console.log('Results:');                           // Displays current score for each array at the end
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}

