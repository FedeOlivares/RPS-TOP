const button = document.querySelectorAll(".choice")



function getHumanChoice () {
    const validChoices = ["r", "s", "p"];                   // establishes valid choices as r, s or p for Rock, paper, scissors
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


function getComputerChoice() { 
    let index = Math.random();
    if (index < 0.3334) {
        return "Rock";
    } else if ((index > 0.3334) && (index < 0.6667)){
        return "Paper";
    } else {
        return "Scissors";
    }
}


function selectWinner(cChoice, hChoice) {                  // Takes human and computer choice and compares it to whether who wins or looses, updates scores and rounds
    if (cChoice == "Rock"){
        if (hChoice == "Rock") {
            alert("It was a tie! Computer Chose Rock too! Your Score is " + humanScore + 
                ", the computer's is " + computerScore + ". There are " + roundsRemaining + " rounds remaining.");
        } else if (hChoice == "Paper"){
            humanScore++;
            alert("Computer Chose Rock, you win! Your Score is " + humanScore + ", the computer's is "
                 + computerScore + ". There are " + roundsRemaining + " rounds remaining.");
        } else if (hChoice == "Scissors"){
            computerScore++;
            alert("Computer Chose Rock, you lose! Your Score is " + humanScore + ", the computer's is " 
                + computerScore + ". There are " + roundsRemaining + " rounds remaining.");
        }
    } 

    if (cChoice == "Paper"){
        if (hChoice == "Rock") {
            computerScore++;
            alert("Computer Chose Paper, you lose! Your Score is " + humanScore + 
                ", the computer's is " + computerScore + ". There are " + roundsRemaining + " rounds remaining.");
        } else if (hChoice == "Paper"){
            alert("It was a tie! Computer Chose Paper too! Your Score is " + humanScore + 
                ", the computer's is " + computerScore + ". There are " + roundsRemaining + " rounds remaining.");
        } else if (hChoice == "Scissors"){
            humanScore++;
            alert("Computer Chose Paper, you win! Your Score is " + humanScore + 
                ", the computer's is " + computerScore + ". There are " + roundsRemaining + " rounds remaining.");
        }
    }

    if (cChoice == "Scissors"){
        if (hChoice == "Rock") {
            humanScore++;
            alert("Computer Chose Scissors, you win! Your Score is " + humanScore + ", the computer's is " 
                + computerScore + ". There are " + roundsRemaining + " rounds remaining.");
        } else if (hChoice == "Paper"){
            computerScore++;
            alert("Computer Chose Scissors, you Lose! Your Score is " + humanScore + ", the computer's is " 
                + computerScore + ". There are " + roundsRemaining + " rounds remaining.");
        } else if (hChoice == "Scissors"){
            alert("It was a tie! Computer Chose Scissors too! Your Score is " + humanScore + 
                ", the computer's is " + computerScore + ". There are " + roundsRemaining + " rounds remaining.");
        }
    }
}


let computerScore = 0;
let humanScore = 0;
let roundsRemaining = 5;


function playRound() {                                     // Plays each round, decrements round count before showing it.
    let humanChoice = getHumanChoice();                    // gets user hand, then computer's hand, decrements and shows winner.
    let computerChoice = getComputerChoice();
    roundsRemaining -= 1;
    selectWinner(computerChoice, humanChoice);
}

function playGame () {                                     // loops 5 rounds, after all 5, evaluates score and proclaims win, lose or tie.
    while (roundsRemaining > 0) {
        playRound();
    }
    if (computerScore > humanScore) {
        alert("Computer Wins! Final score Computer: " + computerScore + "Your Score:" + humanScore);
    } else if (computerScore < humanScore) {
        alert("You Win! Final score Computer: " + computerScore + ". Your Score: " + humanScore);
    } else {
        alert("It was a tie, very well played!");
    }
}

playGame();

