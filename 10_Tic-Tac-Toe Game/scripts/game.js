function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOverElement.firstElementChild.innerHTML =
    "You won <span id='winner-name'></span>!";
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const currentListElement = gameFieldElements[gameBoardIndex];
      currentListElement.textContent = "";
      currentListElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter player names for both players!");
    return;
  }

  resetGameStatus();

  activePlayerElement.textContent = players[activePlayer].name;
  gameArea.style.display = "block";
}

function selectGameField(event) {
  if (gameIsOver) {
    return;
  }
  const selectedFild = event.target;

  const selectedRow = selectedFild.dataset.row - 1;
  const selectedColumn = selectedFild.dataset.col - 1;

  if (gameData[selectedRow][selectedColumn] === 0) {
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add("disabled");
    gameData[selectedRow][selectedColumn] += activePlayer + 1;

    const winnerId = checkWinnerCondition();

    if (winnerId !== 0) {
      endGame(winnerId);
      return;
    }

    switchActivePlayer();
  } else {
    alert("Please select an empty field!");
    return;
  }
}

function switchActivePlayer() {
  if (activePlayer === 1) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }

  currentRound++;

  activePlayerElement.textContent = players[activePlayer].name;
}

function checkWinnerCondition() {
  //row check
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  //column check
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //cross cehck
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9) {
    //draw
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
