//scoreboard
let playerScore = 0;
let computerScore = 0;

//function for computer to select option randomly
function computerPlay() {
   const computerChoice = ['Rock', 'Paper', 'Scissors'];
   return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

//function to play a single round
function playRound(playerSelection, computerSelection) {
   let result = '';
   
   if (playerSelection === 'rock' && computerSelection === 'Paper') {
      computerScore++;
      return result = `Computer wins! ${computerSelection} beats Rock!`;
   }
   if (playerSelection === 'rock' && computerSelection === 'Scissors') {
      playerScore++;
      return result = `You win! Rock beats ${computerSelection}!`;
   }
   if (playerSelection === 'paper' && computerSelection === 'Scissors') {
      computerScore++;
      return result = `Computer wins! ${computerSelection} beats Paper!`;
   }
   if (playerSelection === 'paper' && computerSelection === 'Rock') {
      playerScore++;
      return result = `You win! Paper beats ${computerSelection}!`;
   }
   if (playerSelection === 'scissors' && computerSelection === 'Rock') {
      computerScore++;
      return result = `Computer wins! ${computerSelection} beats Scissors!`;
   }
   if (playerSelection === 'scissors' && computerSelection === 'Paper'){
      playerScore++;
      return result = `You win! Scissors beats ${computerSelection}!`;
   }
   else {
      return result = 'It\'s a tie!'
   }
}

//function to playRound five times
function game() {
   playRound();
   for (let i = 0; i < 5; i++) {
      playerSelection = prompt('Type in one of the following: Rock, Paper, or Scissors?');
      computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
      console.log(playerScore);
      console.log(computerScore);
      if (playerScore >= 3) {
         console.log('You win the game!');
      }
      if (computerScore >= 3) {
         console.log('You lose! Computer wins!');
      }
   }
}
//game function call
game();