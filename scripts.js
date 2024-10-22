const buttons = document.querySelectorAll(".choice");

buttons.forEach(button => {
    button.onclick = () => {
        const inp = button.value; 
        playRound(inp); 
        console.log("Pressed and launched, value:", inp);
    };
});

function getComputerChoice() { 
    let index = Math.random();
    if (index < 0.2) {
        return "rock";
    } else if (index < 0.4) {
        return "paper";
    } else if (index < 0.6) {
        return "scissors";
    } else if (index < 0.8) {
        return "lizard";
    } else {
        return "spock";
    }
}

const outcomes = {
    rock: { beats: ['scissors', 'lizard'], beaten: ['paper', 'spock'] },
    paper: { beats: ['rock', 'spock'], beaten: ['scissors', 'lizard'] },
    scissors: { beats: ['paper', 'lizard'], beaten: ['rock', 'spock'] },
    lizard: { beats: ['spock', 'paper'], beaten: ['scissors', 'rock'] },
    spock: { beats: ['scissors', 'rock'], beaten: ['lizard', 'paper'] }
};

let cScore = 0;
let hScore = 0;

const humanScore = document.querySelector("#playerCount");
const computerScore = document.querySelector("#computerCount");


function selectWinner(cChoice, hChoice) {
    if (hChoice === cChoice) {
        return 0;
    } 
    if (outcomes[hChoice].beats.includes(cChoice)) {
        return 1;
    } else {
        return 2;
    }
}

function playRound(humanInput) {
    let humanChoice = humanInput;
    let computerChoice = getComputerChoice();
    const result = selectWinner(computerChoice, humanChoice);
    
    if (result === 1) {
        hScore++;
    } else if (result === 2) {
        cScore++;
    }

    humanScore.innerText = hScore;
    computerScore.innerText = cScore;

    document.getElementById('playerChoice').innerText = humanChoice;
    document.getElementById('computerChoice').innerText = computerChoice;
    announceWinner(result);
}

function announceWinner(winner) {
    const winnerAnounce = document.getElementById('winnerAnounce');
    if (winner === 1 ) {
        winnerAnounce.innerText = "You Win!";
    } else if (winner === 2) {
        winnerAnounce.innerText = "The Computer Wins!";
    } else {
        winnerAnounce.innerText = "It's a tie!";
    }
}

