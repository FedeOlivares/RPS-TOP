/* function getHumanChoice
return valid options, case insensitive */




function getHumanChoice () {
    let choice = undefined;
    let input = prompt("Rock / Paper / Scissors? :"); 
    input = input.toLowerCase();                           // converts all input into lowercase 
    while (true) {                                         // compares the first letter of input, if r / p / s, then continues, else prompts again for a valid choice
        if (validChoices.includes(input[0])) { 
            break
        } else {
        input = prompt("Not a valid choice, choose Rock,  Paper or Scissors? :"); 
        input = input.toLowerCase();
        }
    } 
    if (input[0] == "r") {                                 // following code convers the single letter r, s or p into correctly typed choice
        choice = "Rock";
    } else if (input[0] == "p"){
        choice = "Paper";
    } else { 
        choice = "Scissors";
    }
    return choice;
    
}


function getComputerChoice() {                             // Gets a random index from 0 to 1 (ex: 0.646755), assigns a value with equal chance for all.
    let computerChoice = undefined;
    let index = Math.random();
    if (index < 0.3334) {
        return computerChoice = "Rock";
    } else if ((index > 0.3334) && (index < 0.6667)){
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Scissors";
    }
}


function selectWinner(cChoice, hChoice) {                  // Takes human and computer choice and compares it to whether who wins or looses, updates scores and rounds
    if (cChoice == "Rock"){
        if (hChoice == "Rock") {
            alert("It was a tie! Computer Chose Rock too! Your Score is " + humanScore + ", the computer's is " + computerScore);
        } else if (hChoice == "Paper"){
            humanScore++;
            alert("Computer Chose Rock, you win! Your Score is " + humanScore + ", the computer's is " + computerScore);
        } else if (hChoice == "Scissors"){
            computerScore++;
            alert("Computer Chose Rock, you lose! Your Score is " + humanScore + ", the computer's is " + computerScore);
        }
    } 

    if (cChoice == "Paper"){
        if (hChoice == "Rock") {
            computerScore++;
            alert("Computer Chose Paper, you lose! Your Score is " + humanScore + ", the computer's is " + computerScore);
        } else if (hChoice == "Paper"){
            alert("It was a tie! Computer Chose Paper too! Your Score is " + humanScore + ", the computer's is " + computerScore);
        } else if (hChoice == "Scissors"){
            humanScore++;
            alert("Computer Chose Paper, you win! Your Score is " + humanScore + ", the computer's is " + computerScore);
        }
    }

    if (cChoice == "Scissors"){
        if (hChoice == "Rock") {
            humanScore++;
            alert("Computer Chose Scissors, you win! Your Score is " + humanScore + ", the computer's is " + computerScore);
        } else if (hChoice == "Paper"){
            humanScore++;
            alert("Computer Chose Paper, you win! Your Score is " + humanScore + ", the computer's is " + computerScore);
        } else if (hChoice == "Scissors"){
            alert("It was a tie! Computer Chose Scissors too! Your Score is " + humanScore + ", the computer's is " + computerScore);
        }
    }
}




let computerScore = 0;
let humanScore = 0;
let roundsRemaining = 5;


function playRound() {
    const validChoices = ["r", "s", "p"];                      // establishes valid choices as r, s or p for Rock, paper, scissors
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    roundsRemaining -= 1;
    selectWinner(computerChoice, humanChoice);
}

function playGame () {
    while (roundsRemaining < 5) {
        playRound()
    }
    if (computerScore > humanScore) {
        alert("Computer Wins! Final score Computer:", computerScore, "Your Score:", humanScore);
    } else {
        alert("You Win! Final score Computer:", computerScore, "Your Score:", humanScore);
    }
}

playGame()

/*
computerScore update based on wins

function playRound variables human and computer choice
 select winner
 update score
 print winner

function playGame
 itterate 5 rounds
 check score after rounds determine winner. 

*/
