/* function getHumanChoice
return valid options, case insensitive */


function getHumanChoice () {
    const validChoices = ["r", "s", "p"]                    // establishes valid choices as r, s or p for Rock, paper, scissors
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

let choice = getHumanChoice();



/* function getComputerChoice

humanScore update based on wins
initialize in zero

computerScore update based on wins

function playRound variables human and computer choice
 select winner
 update score
 print winner

function playGame
 itterate 5 rounds
 check score after rounds determine winner. 

*/
