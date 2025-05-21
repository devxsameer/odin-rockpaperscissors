const result = document.querySelector(".result");
const choices = document.querySelectorAll(".choices-container img");
const userScoreText = document.querySelector(".user-score span");
const computerScoreText = document.querySelector(".computer-score span");
let humanScore = 0,
  computerScore = 0;

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

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    result.innerHTML = "You Lose! Paper beats Rock";
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    result.innerHTML = "You Win! Rock beats Scissors";
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    result.innerHTML = "You Lose! Scissors beats Paper";
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    result.innerHTML = "You Win! Paper beats Rock";
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    result.innerHTML = "You Lose! Rock beats Scissors";
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    result.innerHTML = "You Win! Scissors beats Paper";
    humanScore++;
  } else {
    if (humanChoice == "rock") {
      result.innerHTML = "Its a Draw! Rock vs Rock";
    } else if (humanChoice == "scissors") {
      result.innerHTML = "Its a Draw! Scissors vs Scissors";
    } else {
      result.innerHTML = "Its a Draw! Paper vs Paper";
    }
  }
};
const triggerClick = (e) => {
  playRound(e.target.id, getComputerChoice());
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore) {
      window.alert(
        `You Won The Game! Score: ${humanScore} vs ${computerScore}`
      );
    } else if (humanScore < computerScore) {
      window.alert(
        `You Lost The Game! Score: ${humanScore} vs ${computerScore}`
      );
    }
    humanScore = computerScore = 0;
  }
  userScoreText.innerText = humanScore;
  computerScoreText.innerText = computerScore;
};
choices.forEach((choice) => choice.addEventListener("click", triggerClick));
