var inquirer = require('inquirer');
var prompt = require('prompt');
//var letterArray = require("./hangman.js");

var Letter = require("./letter.js");

function Word(word) {
	console.log("creating word........");
	this.word = word;
	this.hide = "_'";
	this.letters = [];

	this.chop = function(){
	
		var lettersInChosenWord = this.word.split("");
		console.log(lettersInChosenWord);

		for (var i = 0; i < lettersInChosenWord.length; i++) {
			var currentLetter = new Letter(lettersInChosenWord[i]);
			this.letters.push(currentLetter);
		};

		console.log(this.letters);
	};

	this.checkLetterGuess = function(letter) {
// loops through letters array of word and match value
// if matched return true,  else return false	
		console.log("what is this.....")
		console.log(this)

		for (var i = 0; i < this.letters.length; i++) {
			if(letter === this.letters[i].letter) {
				return true;
			} 
		};
		return false;
	};

	this.displayLetters = function() {
// for loop
// if hide is true, show underscore.. if not, display letter value
		for (var i = 0; i < Things.length; i++) {
			Things[i]
		}


	}
};

//letterArray = [{letter:T, hide:true}....]



// just used for testing purpose
//var chosenWord = new Word("Top");


//chosenWord.chop();

module.exports = Word;