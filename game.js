let playerScore = 0;
let computerScore = 0;

const controls = document.querySelector("#controls");
const buttons = controls.querySelectorAll(".gameButton");

buttons.forEach(btn => btn.addEventListener("click", playRound))

const resultsContainer = document.querySelector("#results");
const playerScoreField = document.querySelector("#playerScore");
const cpuScoreField = document.querySelector("#computerScore");

const resultText = document.createElement('p');
resultsContainer.appendChild(resultText);

const rstButton = document.createElement('button');
rstButton.textContent = "Restart";
rstButton.addEventListener('click', () => resetGame());




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

function playRound(event) {
    
    const computerChoice = computerPlay();
    const playerChoice = event.target.innerText;
        
    if (playerChoice.toLowerCase() == "rock") {
        if (computerChoice == "Rock") {
            //tie
            updateUI("It's a tie! Rock and Rock");
            return;
            
        } else if (computerChoice == "Scissors") {
            //player win
            playerScore++;
            updateUI("You win! Rock beats scissors.");
            return;

        } else {
            //computer win
            computerScore++;
            updateUI("You lose! Paper beats rock.")
            return;
        }
    } else if (playerChoice.toLowerCase() == "paper") {

        if (computerChoice == "Rock") {
            //player win
            playerScore++;
            updateUI("You win! Paper beats rock.");
            return;

        } else if (computerChoice == "Scissors") {
            //computer win
            computerScore++;
            updateUI("You lose! Scissors beats paper.");
            return;

        } else {
            //tie
            updateUI("It's a tie! Paper and Paper");
            return;
        }
    } else {
        //player chose scissors
        if (computerChoice == "Rock") {
            //computer win
            computerScore++;
            updateUI("You lose! Rock beats scissors.");
            return;
            
        } else if (computerChoice == "Scissors") {
            //tie
            updateUI("It's a tie! Scissors and Scissors");
            return;

        } else {
            //player win
            playerScore++;
            updateUI("You win! Scissors beats paper.");
            return;
        }
    }
}

function gameOverCheck(result) {

    if (playerScore == 5) {

        resultText.textContent = result + "\n Game over! You Win!";
        createRestartButton();
        makeButtonsInactive();

    } else if (computerScore == 5) {

        resultText.textContent = result + "\n Game over! Computer Wins!";
        createRestartButton();
        makeButtonsInactive();

    } else {
        resultText.textContent = result;
    }

}

function updateUI(result) {

    playerScoreField.textContent = `Player Score = ${playerScore}`;
    cpuScoreField.textContent = `Computer Score = ${computerScore}`;

    gameOverCheck(result);
    
}

function createRestartButton() {
    
    controls.appendChild(rstButton);

}

function resetGame() {

    playerScore = 0;
    computerScore = 0;
    updateUI("");
    controls.removeChild(rstButton);

    buttons.forEach(btn => btn.addEventListener("click",
    function (e) {
        let result = playRound(computerPlay(), e.target.innerText);
        updateUI(result);
    }))

}

function makeButtonsInactive() {
    
    buttons.forEach(btn => btn.removeEventListener("click", playRound));
}