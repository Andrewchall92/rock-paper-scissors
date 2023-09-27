// what do we need to track?
// wins losses and ties
console.log("meow meow")
// what do we need to do?
// gather users input with a prompt
// play game
// confirm play again
// generate a comp choice
// display stats
var wins = 0;
var ties = 0;
var losses = 0;

function playGame(){
    var userChoice = promptUser();
    confrimPlayAgain();



function promptUser(){
    var userChoice = prompt("Please enter R, P, or S");
    console.log(userChoice);
    console.log(userChoice.toUpperCase);
    if(userChoice.toUpperCase() === "R" || userChoice.toUpperCase() === "P" || userChoice.toUpperCase() === "S"){
        return userChoice
    } else {
        alert("PLEASE ENTER R P OR S, NO OTHER CHARACTER VALUES WILL BE PERMITTED")
        promptUser();
    }
}

} 

function generateCompChoice(){
    var computerChoices =["R", "P", "S"];
}
var index = Math.floor(Math.random)() * computerChoices.length;
var computerChoices = 








function confrimPlayAgain(){
    var playAgain = confirm("Do you want to play again?")
    if(playAgain){
        playGame();
    }
    else{
        alert("Thanks for playing")
    }
}

playGame();

