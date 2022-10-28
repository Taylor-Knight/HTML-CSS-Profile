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
      appendResult(" It's a tie!")
      // return console.log("It's a tie!");
    } else {
      
      if (userChoice === "bomb") {
        // return console.log("User won!");
        appendResult(" User won!");
      }


      if(((computerChoice === "rock") && (userChoice === "paper")) ||
       ((computerChoice === "paper") && (userChoice === "scissors")) ||
        ((computerChoice === "scissors") && (userChoice === "rock"))) {
          // return console.log("Computer Won!");
          appendResult(" Computer Won!");
        } else {
          
          //return console.log(" User won!");
          appendResult(" User won!");
        }
      }
  };
  
  const playGame = () => {
    const userInput = document.getElementById("game").value;
    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();

    var game_result = document.getElementById('game_result');
    // game_result.innerHTML('');

    appendResult("You threw " + userChoice +". ")
    appendResult("The Computer threw " + computerChoice +".")
    // console.log("You threw " + userChoice);
    // console.log("The Computer threw " + computerChoice);
    determineWinner(userChoice, computerChoice);
  };

  const appendResult = (data) => {

    var html = '';
    html += data ;
    var game_result = document.getElementById('game_result');
    game_result.append(html);
    
  };

// </script>
  
  // window.addEventListener('load', ()=>{
  //   playGame();
  // })