const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      return console.log("Error!");
    }
  };
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let choices = ['rock', 'paper', 'scissors']
    return choices[randomNumber]
  };
    
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return console.log("It's a tie!");
    } else {
      if (userChoice === "rock") {
        if (computerChoice === "paper") {
          return console.log("Computer Won!");
        } else {
          return console.log("User won!");
        }
      }
      
      if (userChoice === "paper") {
        if (computerChoice === "scissors") {
          return console.log("Computer Won!");
        } else {
          return console.log("User won!");
        }
      }
  
      if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          return console.log("Computer Won!");
        } else {
          return console.log("User won!");
        }
      }
  
      if (userChoice === "bomb") {
        return console.log("User won!");
      }
    }
  };
  
  const playGame = () => {
    const userInput = document.getElementById("game").value;
    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();
    console.log("You threw " + userChoice);
    console.log("The Computer threw " + computerChoice);
    determineWinner(userChoice, computerChoice);
  };
  
  // window.addEventListener('load', ()=>{
  //   playGame();
  // })