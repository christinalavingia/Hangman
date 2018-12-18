var wordOptions = ["giants", "dodgers", "rockies", "mariners", "angels", "yankees", "padres", "brewers"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

// Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

// Populate blanks and successes with right number of blanks
    for (var i = 0; i < numBlanks.length; i++) {
        blanksAndSuccesses.push("_");
    }

// Change HTML to reflect game conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

// Testing variables
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {

    var isLetterInWord = false;
// Checks if letter exists in code at all
    for (var i = 0; i < numBlanks; i++) {
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }

// Checks where in the word letter exists, then populated out blanksAndSuccesses array
    if(letterIsInWord); 
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }
    }
}
            else {
                wrongLetters.push(letter);
                numGuesses--
    }

function roundComplete() {
    console.log("Win count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + numGuesses);

document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You won!");

        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }

    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lost!");

        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }


}




// Initiates game code and reset
    startGame();

// Registers key clicks
    document.onkeyup = function(event) {
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(letterGuessed);
        roundComplete();

        console.log(letterGuessed);
    }