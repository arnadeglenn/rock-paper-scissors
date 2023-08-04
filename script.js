document.addEventListener('DOMContentLoaded', function() {

console.log("hello,world!");
let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const startOver = document.querySelector('#startOver');
const textDisplay = document.querySelector('#textDisplay');

function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3)

    if (compChoice === 0) {
    return "rock";
    } else if (compChoice === 1) {
        return "paper";
    } else if (compChoice === 2) {
        return "scissors";
    }
    };  


rockButton.addEventListener('click', function() {
  playRound('rock');
  });
  
paperButton.addEventListener('click', function() {
  playRound('paper');
 });
  
scissorsButton.addEventListener('click', function() {
    playRound('scissors');
   });

startOver.addEventListener('click', function() {
  humanScore = 0;
  computerScore = 0;
  winnerText.textContent = "New Game Started!";
  scoreText.textContent = "0-0";
  resultText.textContent = "Let's Try That Again!"
})

const resultText = document.createElement('div');
  resultText.classList.add('resultText');
  textDisplay.appendChild(resultText);
  resultText.style.cssText = "display: flex; justify-content: center; background-color: purple; margin-left: 200px; margin-right: 200px; color: white;";
const scoreText = document.createElement('div');
  scoreText.classList.add('scoreText');
  textDisplay.appendChild(scoreText);
  scoreText.style.cssText = "display: flex; justify-content: center; background-color: purple; margin-left: 200px; margin-right: 200px; color: white;";

const winnerText = document.createElement('div');
  winnerText.classList.add('winnerText');
  textDisplay.appendChild(winnerText);
  winnerText.style.cssText = "display: flex; justify-content: center; background-color: purple; margin-left: 200px; margin-right: 200px; color: white;";
function playRound(humanChoice){
    let compChoice = getComputerChoice(); 
    let result;
switch (compChoice) {
    case "rock":
      if (humanChoice === "rock") {
        result = "It's a Tie!";
      } else if (humanChoice === "paper") {
        result = "You Lose!";
      } else if (humanChoice === "scissors") {
        result = "You Win!";
      }
      break;
  
    case "paper":
      if (humanChoice === "rock") {
        result = "You Win!";
      } else if (humanChoice === "paper") {
        result = "It's a Tie!";
      } else if (humanChoice === "scissors") {
        result = "You Lose!";
      }
      break;
  
    case "scissors":
      if (humanChoice === "rock") {
        result = "You Lose!";
      } else if (humanChoice === "paper") {
        result = "You Win!";
      } else if (humanChoice === "scissors") {
        result = "It's a Tie!";
      }
      break;
  
    default:
      console.log("Invalid choice.");
  }
  resultText.textContent = result;
  scoreboard(result);
  scoreText.textContent = (humanScore + "-" + computerScore);
  announceWinnerRestart();
}  

function scoreboard(result) {
    if (result === "You Win!") {
      humanScore++;
    } else if (result === "You Lose!") {
      computerScore++;
    };
  };

function announceWinnerRestart() {
  if (humanScore === 5) {
    winnerText.textContent = "YESSUH BLESSUH YOU BEAT THAT BITCH!";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    winnerText.textContent = "BROOOO THE COMPUTER MAULED YOU!";
    humanScore = 0;
    computerScore = 0;
  }
};









});



