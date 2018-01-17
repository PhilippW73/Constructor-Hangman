# Constructor-Hangman with Node.js

Files:	(1) - hangman.js
		(2) - letter.js
		(3) - word.js
		
Json:	(1) - package-lock.json
		(2) - package.json


Technologies used: 
	- npm inquirer

Design used: 
	- Constructor
	- Object oriented programming

Start the game: enter "node hangmang.js"

Rules: 
(1) User has to guess a word. Topic is movies

(2) In order to guess the whole word, user is able to guess one letter per round

(2) 9 Guesses possible

(3) If one letter is chosen correctly: 
		- Letter will show up 	
		- Guesses --> remains the same
		- Game continues

(4) If one letter is chosen incorrectly: 
		- underlines will stay 	
		- Guesses -1
		- Game continues

(4) If no more guesses are possible
		- game stops and user loses
		- loss counter +1
		- New Game will start if user wants to play again

(5) If user guessed all letters correctly
		- User wins
		- Win counter +1
		- New Game will start if user wants to play again

