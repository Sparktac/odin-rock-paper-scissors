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

imgListener();

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
    return choices[Math.floor(Math.random() * choices.length)];
    
}

function printChoices(playerId, computerId) {
    playerRound.innerText = 'You chose ' + playerId + '!'
    compRound.innerText = 'The computer chose ' + computerId + '!'
}


function gameOver() {
    optionBtn.forEach(button => {
        button.removeEventListener('click', getChoice)});
    logWins();
    if (playerScore == 5) {
        roundResults.innerText ='Congrats! You win!!!';
        roundResults.classList.add('borderGreen');
    } else {
        roundResults.innerText = 'Aww...better luck next time.'
        roundResults.classList.add('borderRed');
    }
}


function processRound(currentPs, currentCs, playerSel, compSel) {
    playerScore += currentPs;
    compScore += currentCs; 
    let results;
    if (currentPs == 1) {
        results = 'Nice! You won! ' + capitalizeText(playerSel) + ' beats ' + compSel + '!'; // NOT CORRECT
    } else {
        results = 'Dang...the computer won, ' + compSel + ' beats ' + playerSel + '.'; // NOT CORRECT
    }
    if (currentPs + currentCs == 0) {
        results = 'It\'s a tie! You chose ' + playerSel + ' and the computer chose ' + compSel + '!'; // NOT CORRECT
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
        processRound(0, 0, choiceP, choiceC); 
    else if (
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') || 
        (choiceP === 'scissors' && choiceC == 'paper')
        ) { 
        processRound(1, 0, choiceP, choiceC);
    } else {
        processRound(0, 1, choiceP, choiceC);  
    } 
    outputScore();
}

function logWins() {
    let playerWins = playerScore;
    let computerWins = compScore;
    finalResults.innerText = ('Results: \nPlayer wins: ' + playerWins + '\nComputer wins: ' + computerWins);
    finalResults.classList.add('rainbow-border'); // Not adding? (ID vs class?)
}

function capitalizeText(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return (str);
}

// Audio functions

function imgListener() {
    const imgs = document.querySelectorAll('.optionBtn img');
    imgs.forEach(img => img.addEventListener('click', playSound));
}

function playSound(e) {
    let clickedButton = e.target;
    let dataAudio = clickedButton.getAttribute('data-audio');
    const audio = document.querySelector('audio[data-audio="'+ dataAudio +'"]');
    audio.currentTime = 0.5;
    audio.play();
}
