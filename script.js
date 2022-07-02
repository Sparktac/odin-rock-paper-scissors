const optionBtn = document.querySelectorAll('div.optionBtn button');
const finalResults = document.querySelector('#finalResults');
const playerPoints = document.querySelector('#playerScore');
const textResults = document.querySelector('.textResults');
const computerPoints = document.querySelector('#compScore');
const resetBtn = document.querySelector('#reset');


const choices = ['rock', 'paper', 'scissors'];
const winners = [];
let playerScore = 0;
let compScore = 0;


resetBtn.addEventListener('click',() => location.reload());


optionBtn.forEach(button => {
    button.addEventListener('click', getChoice);
});

function getChoice(e) {
    let playerId = e.currentTarget.id;
    let computerId = computerChoice();
    checkWinner(playerId, computerId);
    printChoices(playerId, computerId);
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; // Return 1 of 3 possible 'choices'. Could sub '3' for 'choices.length' since there are 3 array choices!
    
}

function printChoices(playerId, computerId) {
    //Todo: take parameter values, change to uppercase
    //something.innerText = 'Player chose' + playerId
    //something2.innerText = 'Computer chose' + computerId
}


function gameOver() {
    if (playerScore == 5 || compScore == 5) {
        //Todo: do something like remove eventlisteners, output logWins(), and display win message in textResults div
    }
}

function processRound(currentPs, currentCs) {
    playerScore += currentPs;
    compScore += currentCs;
    textResults.classList.remove('borderGreen', 'borderRed', 'borderYellow');
    let results;
    if (currentPs == 1) {
        results = 'Nice! You won!'
        textResults.classList.add('borderGreen');
    } else {
        results = 'The computer won :('
        textResults.classList.add('borderRed')
    }
    if (currentPs + currentCs == 0) {
        results = 'It\'s a tie!'
        textResults.classList.add('borderYellow')
    }
    textResults.innerText = results;
}


function outputScore() {
    playerPoints.innerText = playerScore;
    computerPoints.innerText = compScore;
}

function checkWinner(choiceP, choiceC) {

    if (choiceP === choiceC)
        processRound(0, 0); 
    else if (
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') || 
        (choiceP === 'scissors' && choiceC == 'paper')
        ) { 
        processRound(1, 0);
    } else {
        processRound(0, 1);  
    } 
    outputScore();
    gameOver();
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
