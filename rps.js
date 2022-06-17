console.log('Welcome friend. Let\'s play Rock, Paper, Scissors!');

function computerPlay() {
    return play[Math.floor(Math.random()*play.length)];
}

let play = ['rock', 'paper', 'scissors'];
console.log(computerPlay(play));

function singleRound(playerSelection, computerSelection) {
    return 
}