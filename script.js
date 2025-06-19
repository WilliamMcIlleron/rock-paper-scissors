const choiceDiv = document.querySelector("#choices");
const resultDiv = document.querySelector("#result");

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
let humanChoice;
let humanScore = 0;
let computerScore = 0;
function getHumanChoice(e) {
    if(computerScore === 5 || humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
    }
    let target = e.target;
    
    humanChoice = target.id.toUpperCase();
    playRound();
    return humanChoice;
    
}

choiceDiv.addEventListener("click", getHumanChoice)




function playRound() {

    

    let computerChoice = getComputerChoice();

    if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER" || humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore++;
        resultDiv.innerText = "You win! " + humanChoice + " beats " +  computerChoice + "." + `\nScore: ${humanScore} - ${computerScore}`;
        
        
    }
    else if (humanChoice === computerChoice) {
        resultDiv.innerText= "It's a draw!" + `\nScore: ${humanScore} - ${computerScore}`;
      
    }
    else if (humanChoice === undefined) {
        console.log('error')
    }
    else {
        computerScore++;
        resultDiv.innerText= "You lose. " + computerChoice + " beats " + humanChoice + "." + `\nScore: ${humanScore} - ${computerScore}`;
    }


    if (computerScore > humanScore && (humanScore === 5 || computerScore === 5)) {
        resultDiv.innerText = "Game  over. Better luck next time\nScore: " + computerScore + " - " + humanScore;
        
    } 
    else if (computerScore < humanScore && (humanScore === 5 || computerScore === 5)) {
        resultDiv.innerText = "Congrats you win!\nScore: " + humanScore + " - " + computerScore;
        ;
    }
    else if (humanScore === 5 && computerScore === 5){
        resultDiv.innerText = "Good game! Its a draw.\nScore: " + computerScore + " - " + humanScore
        
        
    }
}




   
    
    


