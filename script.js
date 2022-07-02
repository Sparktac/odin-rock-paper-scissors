const optionBtn = document.querySelectorAll('div.optionBtn button');
const finalResults = document.querySelector('#finalResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#compScore');
const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click',() => location.reload());

//xyz.addEventListener('click', userChoice(e));

optionBtn.forEach(button => {
    button.addEventListener('click', getChoice)
});

function getChoice(e) {
    let playerId = e.target.id;
    let computerId = computerChoice();
    playRound(playerId, computerId);
}

finalResults.textContent = logWins();

const choices = ['rock', 'paper', 'scissors'];
const winners = [];



// Computer picks one from the choices array at random
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; // Return 1 of 3 possible 'choices'. Could sub '3' for 'choices.length' since there are 3 array choices!
    
}

// Play round logic
function playRound(x, y) {
    const winner = checkWinner(x, y); // Assign the checkWinner function to it's own variable
    //winners.push(winner);                              
    logRound(playerSelection, computerSelection, winner, round); // Calls the logRound function inside the playRound function
}



// Game logic to determine winning choice
function checkWinner(choiceP, choiceC) { // Function to check winner, use of 'OR' to clean up code
    if (choiceP === choiceC)
        return ('It was a tie!')    
    if (
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') || 
        (choiceP === 'scissors' && choiceC == 'paper')
        ) {
        return 'Nice! You win this round!' 
    }

    return 'Aw shucks, the computer won this round. '
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
