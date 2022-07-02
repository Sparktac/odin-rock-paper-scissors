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
    playRound(playerId, computerId);
}

//finalResults.textContent = logWins();

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; // Return 1 of 3 possible 'choices'. Could sub '3' for 'choices.length' since there are 3 array choices!
    
}

function playRound(x, y) {
    const winner = checkWinner(x, y); // Assign the checkWinner function to it's own variable

}

function getCurrentScore () {

}


function addToCurrentScore(currentPs, currentCs) {
    playerScore += currentPs;
    compScore += currentCs;
    let results = (currentPs == 1 ? 'Nice! You won!' : 'The computer won :(')
    if (currentPs + currentCs == 0) {
        results = 'It\'s a tie!';
    }
    textResults.innerText = results;
}

function outputScore() {
    playerPoints.innerText = playerScore;
    computerPoints.innerText = compScore;
}

// Game logic to determine winning choice
function checkWinner(choiceP, choiceC) {

    if (choiceP === choiceC)
        addToCurrentScore(0, 0); 
    else if (
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') || 
        (choiceP === 'scissors' && choiceC == 'paper')
        ) { 
        addToCurrentScore(1, 0);
    } else {
        addToCurrentScore(0, 1);  
    } 
    outputScore();
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
