/*

** Rock Paper Scissors **

Rock > Scissors
Scissors > Paper
Paper > Rock

*/

// Random Number for the computer's choices
const randomNum = Math.floor(Math.random() * 3) + 1;

// Computer's choice each turn
function computerPlay() {
  if(randomNum === 1) {
    return 'Rock';
  } else if(randomNum === 2) {
    return 'Paper';
  } else if(randomNum === 3) {
    return 'Scissors';
  } else {
    return 'Error!';
  }
}

// ** Log the computer's choice
console.log(computerPlay());

// One round game with predetermined player choice
function playRound(playerSelection, computerSelection) {

  // If it's a tie (case-insensitive player input)
  if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return 'It\'s a tie! 😊';

    // Player loses
  } else if(computerSelection === 'Paper') {
    return 'You Lose! Paper beats Rock 😭';

    // Player wins
  } else if(computerSelection === 'Scissors') {
    return 'You Win! Rock beats Scissors 💃';
  }
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();

// ** Log the round
console.log(playRound(playerSelection, computerSelection));

