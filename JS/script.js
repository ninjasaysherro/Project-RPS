let choice = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    return choice[Math.floor(Math.random() * choice.length)];
}