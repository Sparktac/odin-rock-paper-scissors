console.log('Welcome friend. Let\'s play Rock, Paper, Scissors!');
// Set global variables
const play = ['rock', 'paper', 'scissors'];

let tie = 0;
let player = 0;
let computer = 0;

// Computer picks one from the array at random
function computerPlay() {
    return play[Math.floor(Math.random()*play.length)];
}
// Single round logic
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === play.toLowerCase());
    if (playerSelection === computerSelection) {
        tie++;
        return console.log('Tie!');
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

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));