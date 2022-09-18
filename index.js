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
        if (computerSelection === "Paper") return "You Lose! Paper beats Rock";
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
