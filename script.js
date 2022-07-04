const optionBtn = document.querySelectorAll('div.optionBtn button');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#compScore');
const playerRound = document.querySelector('#playerRound');
const compRound = document.querySelector('#compRound');
const roundResults = document.querySelector('.roundResults');
const finalResults = document.querySelector('#finalResults');
const resetBtn = document.querySelector('#reset');


const choices = ['rock', 'paper', 'scissors'];
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
    playerRound.innerText = 'You chose ' + playerId + '!'
    compRound.innerText = 'The computer chose ' + computerId + '!'
}


function gameOver() {
    let party = String.fromCharCode(0x1F389); // NOT WORKING
    optionBtn.forEach(button => {
        button.removeEventListener('click', getChoice)});
    logWins();
    if (playerScore == 5) {
        roundResults.innerText = party + 'Congrats! You win!!!' + party;
        roundResults.classList.add('borderGreen');
    } else {
        roundResults.innerText = 'Aww...better luck next time.'
        roundResults.classList.add('borderRed');
    }
}


function processRound(currentPs, currentCs) {
    playerScore += currentPs;
    compScore += currentCs;
    let emoji = String.fromCharCode(0x1F625)
    let results;
    if (currentPs == 1) {
        results = 'Nice! You won!'
    } else {
        results = 'Dang...the computer won ' + emoji; // How come this isn't working???
    }
    if (currentPs + currentCs == 0) {
        results = 'It\'s a tie!'
    }
    roundResults.innerText = results;
}


function outputScore() {
    playerPoints.innerText = playerScore;
    computerPoints.innerText = compScore;
    if (playerScore == 5 || compScore == 5) 
        gameOver();
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
}

function logWins() {
    let playerWins = playerScore;
    let computerWins = compScore;
    finalResults.innerText = ('Player Wins: ', playerWins, '\nComputer Wins: ' + computerWins); // NOT CORRECT NEEDS FIXING
}
