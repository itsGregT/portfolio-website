addEvent(window, "load", setupGame, false);

var fromInput = null;
var toInput = null;
var randomNum = null;
var attempts = 0;


function addEvent(object, evName, fnName, cap) {
	if(object.attachEvent){
		object.attachEvent("on"+ evName, fnName);
	}
	else if(object.addEventListener){
		object.addEventListener(evName, fnName, cap);
	}
}

function setupGame() {
	document.getElementById("fromInput").focus();
	document.getElementById("startButton").onclick = startGame;
	document.getElementById("guessButton").onclick = verifyGuess;
}

function generateNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min) ;
}

function startGame() {
	document.getElementById("guessInput").focus();
	document.getElementById("gameDirections").value = "Please guess a number, enter it, and press Guess.";
	fromInput = parseInt(document.getElementById("fromInput").value);
	toInput = parseInt(document.getElementById("toInput").value);
	randomNum = generateNum(fromInput, toInput);
	return false;	
}

function verifyGuess() {
	var guess = parseInt(document.getElementById("guessInput").value);

	if(document.getElementById("numbersGuessed").value == ""){
		document.getElementById("numbersGuessed").value = "Number(s) Guessed: ";
	}

	if(guess < fromInput || guess > toInput) {
		alert("The number you entered is not in the From-To range. Please enter a valid number.");
		document.getElementById("numbersGuessed").value += guess + " ";
		attempts ++;
		document.getElementById("guessInput").value = "";
		document.getElementById("guessInput").focus();
	}
	else if(guess < randomNum) {
		document.getElementById("gameDirections").value = "My number is greater than " + guess;
		attempts ++;
		document.getElementById("numbersGuessed").value += guess + " ";
		document.getElementById("guessInput").value = "";
		document.getElementById("guessInput").focus();
	}
	else if(guess > randomNum) {
		document.getElementById("gameDirections").value = "My number is less than " + guess;
		attempts++;
		document.getElementById("numbersGuessed").value += guess + " ";
		document.getElementById("guessInput").value = "";
		document.getElementById("guessInput").focus();
	}
	else if(guess == randomNum) {
		attempts ++;
		alert("Correct! It took you " + attempts + " attempts to guess this number.");
		location.reset();
	}
	return false;
}