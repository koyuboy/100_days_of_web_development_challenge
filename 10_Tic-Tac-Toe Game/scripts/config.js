function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // +'1' => 1
  changeEditAndBackdropElemen(true);
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.classList.remove("error");
  formElement.reset();
}

function closePlayerConfig() {
  changeEditAndBackdropElemen(false);
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("username").trim();
  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  changeEditAndBackdropElemen(false);

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer-1].name = enteredPlayerName;
}

function changeEditAndBackdropElemen(isEnable) {
  if (isEnable) {
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
  } else {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
  }
}

