function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
    let possible_moves = ['Rock', 'Paper', 'Scissors'];
    return possible_moves[getRandomInt(3)];
}

function playerPlay(){
    let playerSelection = prompt("Choose (Rock/Paper/Scissors)");
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == "rock"){
        return "Rock";
    } else if (playerSelection == "paper"){
        return "Paper";
    } else if (playerSelection == "scissors"){
        return "Scissors";
    } else {
        console.log(playerSelection + " is not a valid option. Choose again!");
        return playerPlay();
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log("Tie!")
    } else if ( playerSelection == "Rock"){
        if ( computerSelection == "Paper"){
            console.log("You lose! Paper beats Rock");
        } else {
            console.log("You won! Rock beats Scissors");
        }
    } else if ( playerSelection == "Paper"){
        if ( computerSelection == "Scissors"){
            console.log("You lose! Scissors beats Paper");
        } else {
            console.log("You won! Paper beats Rock");
        }
    } else if ( playerSelection == "Scissors"){
        if ( computerSelection == "Rock"){
            console.log("You lose! Rock beats Scissors");
        } else {
            console.log("You won! Scissors beats Paper");
        }
    }
}

function gameStart(){
    for(let i = 0; i < 5; i++){
        playRound(playerPlay(),computerPlay())
    }
}

gameStart()

