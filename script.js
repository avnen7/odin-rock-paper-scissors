/*

** Rock Paper Scissors **

Rock > Scissors
Scissors > Paper
Paper > Rock

*/

// Scores
let playerScore = 0;
let computerScore = 0;

// Round Number
let roundNum = 1;

// Write a function that defines the computer's choices
function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      // console.log('rock');
      return 'rock';
      break;
    case 1:
      // console.log('paper');
      return 'paper';
      break;
    case 2:
      // console.log('scissors');
      return 'scissors';
      break;
    default:
      return 'error';
      break;
  }
}

// Write a function that plays a single round.
function playRound(playerSelection, computerSelection) {
  // Player chooses ROCK (player wins)
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return `You Win! Rock beats Scissors. Score: You = ${playerScore} | Computer = ${computerScore}`;
  }

  // (player loses)
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return `You LOSE! Paper beats Rock. Score: You = ${playerScore} | Computer = ${computerScore}`;
  }

  // Player chooses PAPER (player wins)
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return `You Win! Paper beats Rock. Score: You = ${playerScore} | Computer = ${computerScore}`;
  }

  // (player loses)
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return `You LOSE! Scissors beats Paper. Score: You = ${playerScore} | Computer = ${computerScore}`;
  }

  // Player chooses SCISSORS (player wins)
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return `You Win! Scissors beats Paper. Score: You = ${playerScore} | Computer = ${computerScore}`;
  }

  // (player loses)
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return `You LOSE! Rock beats Scissors. Score: You = ${playerScore} | Computer = ${computerScore}`;
  }

  // both players tie
  else if (playerSelection === computerSelection) {
    return `Both players chose ${computerSelection}. No winner this round. Score: You = ${playerScore} | Computer = ${computerScore}`;
  }

  // Error Message
  else {
    return 'Error. Invalid Input';
  }
}

// Write a function that plays a 5 round game, keeps score and reports a winner or loser at the end
function game() {
  for (let i = 1; i <= 5; i++) {
    const computerSelection = computerPlay();
    let playerSelection = prompt('Rock, Paper, Scissors'); // user prompt

    if(playerSelection === null) {
      alert('You\'ve stopped the game. Refresh the page to start again 😊');
      return;
    } // alert message if the user clicks on cancel when prompted to answer

    playerSelection = playerSelection.toLowerCase(); // apply lower case to the user's answer
    
    console.log(`Round ${i}:`, playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    console.log(`You WIN! Final score: ${playerScore} to ${computerScore}!`);
  } else if (computerScore > playerScore) {
    console.log(
      `Computer wins. Final score: ${playerScore} to ${computerScore}.`
    );
  } else {
    console.log(`It's a TIE! Final score: ${playerScore} to ${computerScore}.`);
  }
}

game();
