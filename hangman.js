var inquirer = require('inquirer');
var prompt = require('prompt');
var Word = require("./word.js");

var wordsList = ["Top Gun", "Schindlers List", "Rocky", "One Flew Over the Cuckoos Nest", "Batman", "Groundhog Day"];
var chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
var newWord = new Word(chosenWord);

var wrongGruesses = [];

//counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startGame () {
	
	inquirer.prompt([
	  {
	    type: "confirm",
	    name: "wantToPlay",
	    message: "Do you want to play Hangman?"
	  },
	]).then(function(result) {

		console.log("result...");
		console.log(result);

	  // If the result guesses the password...
	  if (result.wantToPlay) {
	    console.log("starting round...");
	    roundStart();
	  } else {
	    console.log("Thank you for visiting");
	  }
	});


  	// console.log("Guesses left: " + numGuesses);
  	// console.log("Wrong Guesses: " + wrongGuesses);

};

function roundStart () {
	
	inquirer.prompt([
	  {
	    type: "input",
	    name: "letter",
	    message: "Guess a letter and click it???"
	  },  
	]).then(function(result) {
		console.log("guessed letter...");
		console.log(result);

		var guessed = newWord.checkLetterGuess(result.letter)

	  // If the result guesses the password...
	  if (guessed             ) {
	  	
	  	
	    console.log("guessed letter correctly...");
	  }
	  else {
	    console.log("didn't guess");
	  }
	});


}
// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  
  // If we have gotten all the letters to match the solution...
  // if 
    
  //   winCounter++;
  //   alert("You win!");
  // }

  // // If we've run out of guesses..
  // else if 

    
    // Restart the game.
    //startGame();
  //}

}


startGame();


  // Runs the code to check for correctness.
  //checkLetters(letterGuessed);
  // Runs the code after each round is done.
  //roundComplete();





//module.exports = functions;
//module.exports
