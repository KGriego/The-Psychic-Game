// Creates a string that then splits them so it gives the computer options to chooce from, in this case, the alphabet
var computerOptions = 'abcdefghijklmnopqrstuvwxyz'.split('');

// calculates the length of the computerOptions array
var computerOptionsLength = computerOptions.length;

// Creates variables to store wether the user has won, lost, how many guesses are left, and what has already been gussed
var wins = 0;
var loss = 0;
var guesses = 9;
var GuessedArr = [];

var guessesDiv = document.getElementById("Guesses");

// Chooses a random letter from the array computerOptions

function guessComputer(){ 
    var computerGuess = computerOptions[Math.floor(Math.random() * computerOptionsLength)];
    return computerGuess;
}

var randomLetter = guessComputer();

//logs the computer's guess
console.log(randomLetter);

//This makes a function so when a key is pressed the game starts
document.onkeyup = function (startGame) {
    
    //Stores what key the user pressed
    var userGuess = startGame.key;
    
    GuessedArr.push(" " + userGuess);

    if (userGuess === randomLetter) {
        wins++;
        guesses = 9;
        randomLetter = guessComputer();
        GuessedArr = [];
        console.log(randomLetter);

    } else { 
        guesses-- ;
    }
    
    if(guesses === -1) {
        guesses = 9;
        loss++;
        randomLetter = guessComputer();
        GuessedArr = [];
        console.log(randomLetter);
    };


    var html =
        "<p> You chose: " + userGuess + "</p>" +
        "<p id=&quotscore&quot>wins: " + wins + "</p>" +
        "<p>losses: " + loss + "</p>" +
        "<p>You have " + guesses + " guesses left</p>" +
        "<p>Your guesses so far: " + GuessedArr + "</p>";

    document.getElementById("PsychicGame").innerHTML = html;
};