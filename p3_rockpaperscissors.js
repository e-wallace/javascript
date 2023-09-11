const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("That is not a valid input");
  }
};

const getComputerChoice = () => {
  let computerNum = Math.floor(Math.random() * 3);
  if (computerNum === 0) {
    return "rock";
  } else if (computerNum === 1) {
    return "scissors";
  } else if (computerNum === 2) {
    return "paper";
  } else {
    return "error";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lost. The computer won.";
    } else {
      return "Congratulations User, you won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lost. The computer won.";
    } else {
      return "Congratulations User, you won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lost. The computer won.";
    } else {
      return "Congratulations User, you won!";
    }
    return "You lost :(";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
