var inquirer = require('inquirer');
var prompt = require('prompt');

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
			var letterArray = new Letter(lettersInChosenWord[i]);
			this.letters.push(letter);
		};



		console.log(this.letters);
	};

	this.checkLetterGuess = function(letter) {
// loops through letters array of word and match value
// if matched return true,  else return false	



	}

	this.displayLetters = function() {
// for loop
//if hide is true, show underscore.. if not, display letter value



	}
};





// just used for testing purpose
//var chosenWord = new Word("Top");


//chosenWord.chop();

module.exports = Word;