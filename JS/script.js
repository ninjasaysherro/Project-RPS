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

//function to play a single round + affix results to scoreboard + disables buttons
function playRound(playerSelection) {
   let computerSelection = computerPlay();
   let result = '';

   if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock') ||
      (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
      
      playerScore++;
      result += ('You win! ' + playerSelection + ' beats ' + computerSelection.toLowerCase() + '!');

      if (playerScore >= 5 && playerScore > computerScore) {
         result += (' You win the game!');
         document.getElementById('submit1').disabled = true;
         document.getElementById('submit2').disabled = true;
         document.getElementById('submit3').disabled = true;
      }
   } else if (playerSelection === computerSelection) {
      result += ('It\'s a tie. You both chose ' + playerSelection.toLowerCase()+ '!');
   } else {
      computerScore++;
      result += ('You lose! ' + computerSelection + ' beats ' + playerSelection.toLowerCase()+ '!');

      if (computerScore >= 5 && computerScore > playerScore) {
         result += (' Computer won the game!');
         document.getElementById('submit1').disabled = true;
         document.getElementById('submit2').disabled = true;
         document.getElementById('submit3').disabled = true;
      }
   }
   document.getElementById('playerScore').textContent = playerScore;
   document.getElementById('computerScore').textContent = computerScore;
   document.getElementById('result').textContent = result;
   return;
}