function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
    let possible_moves = ['Rock', 'Paper', 'Scissor'];
    return possible_moves[getRandomInt(3)]
}

function playRound(playerSelection, computerSelection)

function playerSelection(){
    let playerSelection = prompt("Type Rock, Paper or a Scissor");
    playerSelection.toLowerCase();
    console.log("Player : " + playerSelection)
}

console.log(computerPlay());
