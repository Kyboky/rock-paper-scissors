function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
    let possible_moves = ['Rock', 'Paper', 'Scissors'];
    return possible_moves[getRandomInt(3)];
}

function playerPlay(){
    if(playerSelection == "rock"){
        return "Rock";
    } else if (playerSelection == "paper"){
        return "Paper";
    } else if (playerSelection == "scissors"){
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log("Tie!")
    } else if ( playerSelection == "Rock"){
        if ( computerSelection == "Paper"){
            incrementResult(aiResult);
        } else {
            incrementResult(humanResult);
        }
    } else if ( playerSelection == "Paper"){
        if ( computerSelection == "Scissors"){
            incrementResult(aiResult);
        } else {
            incrementResult(humanResult);
        }
    } else if ( playerSelection == "Scissors"){
        if ( computerSelection == "Rock"){
            incrementResult(aiResult);
        } else {
            incrementResult(humanResult);
        }
    }
}

function gameStart(){
    playRound(this.attributes["data-rps"].value,computerPlay());
}

function incrementResult(resultObj){
    let result = parseInt(resultObj.innerHTML);
    resultObj.innerHTML = (result + 1).toString();
}

const aiResult = document.getElementById("ai-result");
const humanResult = document.getElementById("human-result");
const buttons = document.querySelectorAll(".player-picks button");

buttons.forEach(button => button.addEventListener('click', gameStart));



