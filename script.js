console.log("hello,world!");

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
    compareChoice();
});
paperButton.addEventListener("click", function() {
    humanChoice = "Paper";
    compareChoice();
});
scissorsButton.addEventListener("click", function() {
    humanChoice = "Scissors";
    compareChoice();
});

function compareChoice(){
    let compChoice = getComputerChoice();  
switch (compChoice) {
    case "Rock":
      if (humanChoice === "Rock") {
        console.log("It's a Tie!");
      } else if (humanChoice === "Paper") {
        console.log("You Lose!");
      } else if (humanChoice === "Scissors") {
        console.log("You Win!");
      }
      break;
  
    case "Paper":
      if (humanChoice === "Rock") {
        console.log("You Win!");
      } else if (humanChoice === "Paper") {
        console.log("It's a Tie!");
      } else if (humanChoice === "Scissors") {
        console.log("You Lose!");
      }
      break;
  
    case "Scissors":
      if (humanChoice === "Rock") {
        console.log("You Lose!");
      } else if (humanChoice === "Paper") {
        console.log("You Win!");
      } else if (humanChoice === "Scissors") {
        console.log("It's a Tie!");
      }
      break;
  
    default:
      console.log("Invalid choice.");
  }
}  
});





