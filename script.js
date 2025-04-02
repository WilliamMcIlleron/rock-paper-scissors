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

function getHumanChoice(e) {
    let target = e.target;
    
    humanChoice = target.id.toUpperCase();
    playRound();
    return humanChoice;
    
}

choiceDiv.addEventListener("click", getHumanChoice)


let humanScore = 0;
let computerScore = 0;

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
        choiceDiv.removeEventListener('click', getHumanChoice);
    } 
    else if (computerScore < humanScore && (humanScore === 5 || computerScore === 5)) {
        resultDiv.innerText("You win!\nScore: " + humanScore + " - " + computerScore);
        choiceDiv.removeEventListener('click', getHumanChoice);
    }
    else if (humanScore === 5 || computerScore === 5){
        resultDiv.innerText("Good game! Its a draw.\nScore: " + computerScore + " - " + humanScore)
        choiceDiv.removeEventListener('click', getHumanChoice);
        
    }
}




   
    
    


