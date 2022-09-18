function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "Rock";
    if (choice === 1) return "Paper";
    if (choice === 2) return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) return "It's Draw!";
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") return "You Win! Rock beats Scissors";
        if (computerSelection === "paper") return "You Lose! Paper beats Rock";
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") return "You Win! Paper beats Rock";
        if (computerSelection === "scissors") return "You Lose! Scissors beats Paper";
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") return "You Win! Scissors beats Paper";
        if (computerSelection === "rock") return "You Lose! Rock beats Scissors";
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const roundResult = playRound(playerSelection, getComputerChoice());
        if (roundResult.includes("Win")) playerScore++;
        if (roundResult.includes("Lose")) computerScore++;
        // If it's a draw, no one gets a point
        console.log(roundResult);
    }
    console.log(
        `The score is ${playerScore}-${computerScore}. ${playerScore > computerScore ? "Player" : "Computer"} wins!`
    );
}

game();
