

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function playerSelection() {
    let playerPlay = prompt ("Enter rock, paper or scissors");
    playerPlay.toLowerCase();
    return playerPlay;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay;
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats paper";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper!";
    } else {
        return "You win! Scissors beats paper!"
    }
}

