console.log('Hey there! Let\'s play Rock, Paper, Scissors!\n-------------------------------'); //Backslash n begins a new line

const choices = ['rock', 'paper', 'scissors'];
const winners = [];

// resetBtn.addEventListener('click',() => location.reload());
// optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });


function getUserInput(addendum){
    let instruction = ('Type Rock, Paper, or Scissors');
    let input = prompt(instruction + addendum); // Prompt the player to select one from the list
    if (input != null) {
        input = input.toLowerCase();
    }    
    return input
}

// Get input from player
function playerChoice() {
    let addendum = ('. Spelling matters but capitalization does not!');
    let input = getUserInput('');    // Pass empty string as an argument into getUserInput function
    let check = validateInput(input);// Create check variable and run validateInput function w/ 'input' parameter to check if users input is valid
    while (check === false) {         // If it doesn't match one of the ones from 'choices', prompt again with addendum
        input = getUserInput(addendum); //Addendum variable passed as an argument into getUserInput parameter
        check = validateInput(input);
    }
    if (check === null) {
        return null
    }
    return input;                  //Return the final result as the player choice
}


// Computer picks one from the choices array at random
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; // Return 1 of 3 possible 'choices'. Could sub '3' for 'choices.length' since there are 3 array choices!
    
}

function game() {
    let roundSuccessful = true;
    for (let i = 1; i <= 5; i++) {  
        if (roundSuccessful == true) {
            roundSuccessful = playRound(i);       
        }     
    }
    if (roundSuccessful == true)
    logWins();                     
}

// Play round logic
function playRound(round) {
    const playerSelection = playerChoice();            // Assign playerChoice() function to it's own variable
    if (playerSelection != null) {
        const computerSelection = computerChoice();        // Assign computerChoice() function to it's own variable
        const winner = checkWinner(playerSelection, computerSelection); // Assign the checkWinner function to it's own variable
        winners.push(winner);                              
        logRound(playerSelection, computerSelection, winner, round); // Calls the logRound function inside the playRound function
        return true;
    } else {
         return false;
    }
}

// Validate user input as one of the available choices
function validateInput(choice) {
    if (choice == null) {
        return null
    } 
    return (choices.includes(choice)); // Don't need if/else because if it's true it will run, if false it will stop
}

// Game logic to determine winning choice
function checkWinner(choiceP, choiceC) { // Function to check winner, use of 'OR' to clean up code
    const emoji = String.fromCodePoint(0x1F625); // Sad face emoji variable (NOTE: Capitalization matters on String)
    if (choiceP === choiceC)
        return ('It was a tie!')    
    if (
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') || 
        (choiceP === 'scissors' && choiceC == 'paper')
        ) {
        return 'Nice! You win this round!' 
    }

    return 'Aw shucks, the computer won this round. ' + emoji
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player chose:', playerChoice);
    console.log('Computer chose:', computerChoice);
    console.log(winner);
    console.log('-------------------------------');
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
