let currentPlayer = "X";
let gameOver = false;

let cells = document.querySelectorAll(".cell");
let message = document.getElementById("message");

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {

        if (cell.innerText !== "" || gameOver) {
            return;
        }

        cell.innerText = currentPlayer;

        checkWinner();

        if (!gameOver) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";

            message.innerText = "Player " + currentPlayer + "'s Turn";
        }
    });
});

function checkWinner() {

    for (let combination of winningCombinations) {

        let [a, b, c] = combination;

        if (
            cells[a].innerText !== "" &&
            cells[a].innerText === cells[b].innerText &&
            cells[b].innerText === cells[c].innerText
        ) {
            message.innerText = "Player " + currentPlayer + " Wins!";
            gameOver = true;
            return;
        }
    }

    let draw = true;

    cells.forEach(function(cell) {
        if (cell.innerText === "") {
            draw = false;
        }
    });

    if (draw) {
        message.innerText = "It's a Draw!";
        gameOver = true;
    }
}

function resetGame() {

    cells.forEach(function(cell) {
        cell.innerText = "";
    });

    currentPlayer = "X";
    gameOver = false;

    message.innerText = "Player X's Turn";
}
