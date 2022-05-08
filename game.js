let playerScore;
let computerScore;

game();

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        
        let result = playRound(computerPlay(), playerPlay());
        console.log(result);
    }
    console.log(`Final result is player: ${playerScore} and computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Player wins!")
    } else if (computerScore > playerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!");
    }
}

function computerPlay() {
    
    let r = Math.random();
    if (r <= 1 / 3.0) {
        return "Rock";
    } else if (r <= 2 / 3.0) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playerPlay() {
    let choice = prompt("Type rock, paper, or scissors.");
    return choice;
}

function playRound(computerChoice, playerChoice) {
    
    if (playerChoice.toLowerCase() == "rock") {
        if (computerChoice == "Rock") {
            //tie
            return "It's a tie! Rock and Rock";
            
        } else if (computerChoice == "Scissors") {
            //player win
            playerScore++;
            return "You win! Rock beats scissors."

        } else {
            //computer win
            computerScore++;
            return "You lose! Paper beats rock."
        }
    } else if (playerChoice.toLowerCase() == "paper") {

        if (computerChoice == "Rock") {
            //player win
            playerScore++;
            return "You win! Paper beats rock."

        } else if (computerChoice == "Scissors") {
            //computer win
            computerScore++;
            return "You lose! Scissors beats paper."

        } else {
            //tie
            return "It's a tie! Paper and Paper";
        }
    } else {
        //player chose scissors
        if (computerChoice == "Rock") {
            //computer win
            computerScore++;
            return "You lose! Rock beats scissors."
            
        } else if (computerChoice == "Scissors") {
            //tie
            return "It's a tie! Scissors and Scissors";

        } else {
            //player win
            playerScore++;
            return "You win! Scissors beats paper."
        }
    }
}