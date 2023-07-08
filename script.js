console.log("hello,world!");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3)

    if (compChoice === 0) {
    return "Rock";
    } else if (compChoice === 1) {
        return "Paper";
    } else if (compChoice === 2) {
        return "Scissors";
    }
    }  

document.addEventListener("DOMContentLoaded", function() {
    let humanChoice = "";

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

rockButton.addEventListener("click", function() {
    humanChoice = "Rock";
    game();
});
paperButton.addEventListener("click", function() {
    humanChoice = "Paper";
    game();
});
scissorsButton.addEventListener("click", function() {
    humanChoice = "Scissors";
    game();
});

function playRound(){
    let compChoice = getComputerChoice();  
switch (compChoice) {
    case "Rock":
      if (humanChoice === "Rock") {
        return "It's a Tie!";
      } else if (humanChoice === "Paper") {
        return "You Lose!";
      } else if (humanChoice === "Scissors") {
        return "You Win!";
      }
      break;
  
    case "Paper":
      if (humanChoice === "Rock") {
        return "You Win!";
      } else if (humanChoice === "Paper") {
        return "It's a Tie!";
      } else if (humanChoice === "Scissors") {
        return "You Lose!";
      }
      break;
  
    case "Scissors":
      if (humanChoice === "Rock") {
        return "You Lose!";
      } else if (humanChoice === "Paper") {
        return "You Win!";
      } else if (humanChoice === "Scissors") {
        return "It's a Tie!";
      }
      break;
  
    default:
      console.log("Invalid choice.");
  }
}  
function game() {
  let result = playRound();
  if (result === "You Win!") {
    humanScore++;
  } else if (result === "You Lose!") {
    computerScore++;
  } else if (result === "It's a Tie!") {
  } 

  console.log(result);
  console.log(humanScore + "-" + computerScore);
  announceWinner();
}

function announceWinner() {
  if (humanScore === 5) {
    console.log("YESSUH BLESSUH YOU BEAT THAT BITCH!")
  } else if (computerScore === 5) {
    console.log("BROOOO THE COMPUTER MAULED YOU!")
  }
}
});






