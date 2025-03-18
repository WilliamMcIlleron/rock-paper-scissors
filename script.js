function getComputerChoice() {
    let random = Math.floor(Math.random()*3);
    if (random === 0) {
        return "ROCK";
    }
    else if (random === 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function getHumanChoice(choice) {
    choice = "";
    choice = prompt("Rock, paper or scissors?");
    console.log(choice);
    return choice.toUpperCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER" || humanChoice === "PAPER" && computerChoice === "ROCK") {
        console.log("You win! " + humanChoice + " beats " +  computerChoice + ".");
        humanScore++;
        
    }
    else if (humanChoice === computerChoice) {
        console.log("It's a draw!");
      
    }
    else {
        console.log("You lose. " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
      
    }
}


function playGame() {
   

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

}

    playGame();


    if (computerScore > humanScore) {
        console.log("Game  over. Better luck next time\nScore: " + computerScore + " - " + humanScore);
    } 
    else if (computerScore < humanScore) {
        console.log("You win!\nScore: " + humanScore + " - " + computerScore);
    }
    else {
        console.log("Good game! Its a draw.\nScore: " + computerScore + " - " + humanScore)
    }
