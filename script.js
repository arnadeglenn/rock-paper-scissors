console.log("hello,world!");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3)

    if (compChoice === 0) {
    return "rock";
    } else if (compChoice === 1) {
        return "paper";
    } else if (compChoice === 2) {
        return "scissors";
    }
    }  

function getHumanChoice() {
  const humanType = prompt('Type Rock, Paper, or Scissors',);
  const lowercaseType = humanType.toLowerCase();

  if (lowercaseType !== "rock" && lowercaseType !== "paper" && lowercaseType !== "scissors") {
      console.log("You suck at typing");
  } else {
      return lowercaseType;
  }
}

function playRound(){
    let compChoice = getComputerChoice(); 
    let humanChoice =  getHumanChoice();
switch (compChoice) {
    case "rock":
      if (humanChoice === "rock") {
        return "It's a Tie!";
      } else if (humanChoice === "paper") {
        return "You Lose!";
      } else if (humanChoice === "scissors") {
        return "You Win!";
      }
      break;
  
    case "paper":
      if (humanChoice === "rock") {
        return "You Win!";
      } else if (humanChoice === "paper") {
        return "It's a Tie!";
      } else if (humanChoice === "scissors") {
        return "You Lose!";
      }
      break;
  
    case "scissors":
      if (humanChoice === "rock") {
        return "You Lose!";
      } else if (humanChoice === "paper") {
        return "You Win!";
      } else if (humanChoice === "scissors") {
        return "It's a Tie!";
      }
      break;
  
    default:
      console.log("Invalid choice.");
  }
}  

function game() {
  for (let i=0; i<6; i++) {
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

}

function announceWinner() {
  if (humanScore === 5) {
    console.log("YESSUH BLESSUH YOU BEAT THAT BITCH!")
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    console.log("BROOOO THE COMPUTER MAULED YOU!")
    humanScore = 0;
    computerScore = 0;
  }
};

game();




