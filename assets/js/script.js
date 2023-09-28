// what do we need to track?
// wins losses and ties
// what do we need to do?
// gather users input with a prompt
// play game
// confirm play again
// generate a comp choice
// display stats
var wins = 0;
var ties = 0;
var losses = 0;
var userChoice;
var computerChoices =["R", "P", "S"];
var computerSelection;

function playGame(){
    userChoice = promptUser();
    generateCompChoice();
    checkWhoWins();
    confrimPlayAgain();

}

function promptUser(){
    userChoice = prompt("Please enter R, P, or S");
    console.log(userChoice);
    console.log(userChoice.toUpperCase());
    if(userChoice.toUpperCase() === "R" || userChoice.toUpperCase() === "P" || userChoice.toUpperCase() === "S"){
        return userChoice.toUpperCase();
    } else {
        alert("PLEASE ENTER R P OR S, NO OTHER CHARACTER VALUES WILL BE PERMITTED")
        return promptUser();
    }
}


function generateCompChoice(){
    var index = Math.floor(Math.random() * computerChoices.length);
    computerSelection = computerChoices[index];
}


function checkWhoWins(){
    if (userChoice === computerSelection){
        ties++
        alert("You tied!");
    } else if ((userChoice === "R" && computerSelection === "S") ||
              (userChoice === "P" && computerSelection === "R") ||
              (userChoice === "S" && computerSelection === "P")) {
        wins++;
        alert("You win!");
    }       else {
        losses++;
        alert("You lose!");
    }
        showStats();
}

function confrimPlayAgain(){
    var playAgain = confirm("Do you want to play again?")
    if(playAgain){
        playGame();
    } else{
        alert("Thanks for playing")
    }
}

function showStats() {
    alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses);
}

playGame();

