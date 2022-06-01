let playerScore = 0;
let computerScore = 0;

const controls = document.querySelector("#controls");
const buttons = controls.querySelectorAll(".gameButton");

buttons.forEach(btn => btn.addEventListener("click",
    function (e) {
        let result = playRound(computerPlay(), e.target.innerText);
        updateUI(result);
    }))

const resultsContainer = document.querySelector("#results");
const playerScoreField = document.querySelector("#playerScore");
const cpuScoreField = document.querySelector("#computerScore");

const resultText = document.createElement('p');
resultsContainer.appendChild(resultText);

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

function gameOverCheck(result) {

    if (playerScore == 5) {
        console.log("Player win detected");
        resultText.textContent = result + "\n Game over! You Win!";

    } else if (computerScore == 5) {
        console.log("computer win detected");
        resultText.textContent = result + "\n Game over! Computer Wins!";

    } else {
        resultText.textContent = result;
    }

}

function updateUI(result) {

    playerScoreField.textContent = `Player Score = ${playerScore}`;
    cpuScoreField.textContent = `Computer Score = ${computerScore}`;

    gameOverCheck(result);
    
}