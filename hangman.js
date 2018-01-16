var inquirer = require('inquirer');
var prompt = require('prompt');
var Word = require("./word.js");

var wordsList = ["Top Gun", "Schindlers List", "Rocky", "One Flew Over the Cuckoos Nest", "Batman", "Groundhog Day"];
var chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

var newWord = new Word(chosenWord);
//console.log("new word.......");
//console.log(newWord);
var wrongGruesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startGame () {
	
	inquirer.prompt([
	  {
	    type: "confirm",
	    name: "wantToPlay",
	    message: "Do you want to play Hangman?"
	  }
	]).then(function(confirm) {

		//onsole.log("confirm...");
		//console.log(confirm);

	  if (confirm.wantToPlay) {
		console.log(newWord);
	    newWord.chop();

	    var showWord = newWord.displayLetters();
	   	console.log(showWord);
	    
	    console.log("starting round...");
	    console.log("new word chop.......");
	    
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

		var guessedLetter = newWord.checkLetterGuess(result.letter)
	  
	  if (guessedLetter === true) {
	    console.log("guessed letter correctly...");
	  }
	  else {
	    console.log("wrong guess");
	  }
	  numGuesses--;
	  console.log(numGuesses);

	  if(numGuesses === 0) {
	  	lossCounter++;
	  	console.log("Sorry, Loser");
	  	roundComplete();
	  } else {
	  	roundStart();
	  }

	  if (word is complete) { 
		winCounter++
		console.log("Congratulations.. You win")
		roundComplete()
		}
	});
}

function roundComplete() {
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter);
  startGame();
}


startGame();


  // Runs the code to check for correctness.
  //checkLetters(letterGuessed);
  // Runs the code after each round is done.
  //roundComplete();






