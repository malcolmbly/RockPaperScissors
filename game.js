console.log(computerPlay());

function computerPlay() {
    const r = Math.random();
    if (r <= 1 / 3) {
        return "Rock";
    } else if (r <= 2 / 3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}