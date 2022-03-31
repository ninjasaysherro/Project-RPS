//scoreboard
let playerScore = 0;
let computerScore = 0;

//function for computer to select option randomly
function computerPlay() {
   const computerChoice = ['Rock', 'Paper', 'Scissors'];
   return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

//playerSelection button event
const button = document.querySelectorAll("button");

button.forEach(button => {
   button.addEventListener('click', function() {
      const playerSelection = button.dataset.selection
      playRound(playerSelection, computerPlay);
   })
})

//disable the buttons after 5 points have been reached
button.forEach(button => {
   button.addEventListener('click', function() {
      if ((playerScore == 5 && playerScore > computerScore) || (computerScore == 5 && computerScore > playerScore)) {
         button.disabled = true;
      }
      else {
         button.disabled = false;
      }
   })
})

//function to play a single round
function playRound(playerSelection) {
   let computerSelection = computerPlay();
   let result = '';

   if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock') ||
      (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
      
      playerScore += 1;
      result += ('You win! ' + playerSelection + ' beats ' + computerSelection.toLowerCase() + '!');

      if (playerScore >= 5 && playerScore > computerScore) {
         result += (' You win the game!');
      }
   }
   else if (playerSelection === computerSelection) {
      result += ('It\'s a tie. You both chose ' + playerSelection.toLowerCase()+ '!');
   }

   else {
      computerScore += 1;
      result += ('You lose! ' + computerSelection + ' beats ' + playerSelection.toLowerCase()+ '!');

      if (computerScore >= 5 && computerScore > playerScore) {
         result += (' Computer won the game!');
      }
   }
   document.getElementById('playerScore').textContent = playerScore;
   document.getElementById('computerScore').textContent = computerScore;
   document.getElementById('result').textContent = result;
   return;
}