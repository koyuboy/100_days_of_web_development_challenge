//todo calculator
const calculatorButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const numberInputElement = document.getElementById("user-number");
  const enteredNumber = numberInputElement.value;

  let sum = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sum += i;
  }

  const outputSumElement = document.getElementById("calculated-sum");

  outputSumElement.textContent = sum;
  outputSumElement.style.display = "block";
}

calculatorButtonElement.addEventListener("click", calculateSum);

//todo Highlight links

const highlightedLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}
highlightedLinksButtonElement.addEventListener("click", highlightLinks);

//todo Display user data

const user = {
  firstName: "Ahmet",
  lastName: "Demir",
  age: 23,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = ""; //to avoid duplicate

  for (const u in user) {
    const newListItemElement = document.createElement("li");
    const outputText = u.toUpperCase() + ": " + user[u];
    newListItemElement.textContent = outputText;

    outputDataElement.append(newListItemElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

//todo Statistics

const statisticsButtonElement = document.querySelector("#statistics button");

const numberInputElement = document.getElementById("user-target-number");
const rollsListElement = document.getElementById("dice-rolls");

function rollRandom(limit) {
  return Math.floor(Math.random() * limit) + 1; // math.floor()  5.64 => 5
}

function rollDice() {
  const inputElement = document.getElementById("user-target-number");
  const target = inputElement.value;

  rollsListElement.innerHTML = "";

  isMatched = false;
  numberOfRolls = 0;
  while (!isMatched) {
    numberOfRolls++;
    const diceNumber = rollRandom(inputElement.max);
    const output = "Roll " + numberOfRolls + ': ' + diceNumber;
    const newRollListElement = document.createElement("li");
    newRollListElement.textContent = output;
    console.log(output);
    rollsListElement.append(newRollListElement);
    isMatched = diceNumber == target;
  }
  
  document.getElementById('output-total-rolls').textContent = numberOfRolls; 
  document.getElementById('output-target-number').textContent = target;
}

statisticsButtonElement.addEventListener("click", rollDice);
