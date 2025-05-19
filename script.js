function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return window.prompt("Enter Your Choice!");
}

let humanScore = 0,
  computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You Lose! Paper beats Rock");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You Win! Rock beats Scissors");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You Lose! Scissors beats Paper");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You Win! Paper beats Rock");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You Lose! Rock beats Scissors");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You Win! Scissors beats Paper");
  } else {
    if (humanChoice == "rock") {
      console.log("Its a Draw! Rock vs Rock");
    } else if (humanChoice == "scissors") {
      console.log("Its a Draw! Scissors vs Scissors");
    } else {
      console.log("Its a Draw! Paper vs Paper");
    }
    return;
  }
  humanScore++;
  computerScore++;
};
const playGame = () => {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
};
playGame();
if (humanScore > computerScore) {
  console.log(`You Won The Game! Score: ${humanScore} vs ${computerScore}`);
} else if (humanScore < computerScore) {
  console.log(`You Lost The Game! Score: ${humanScore} vs ${computerScore}`);
}
if (humanScore == computerScore) {
  console.log(`The Game is A Draw! Score: ${humanScore} vs ${computerScore}`);
}