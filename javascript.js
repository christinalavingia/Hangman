var wordOptions = ["giants", "cubs", "dodgers", "rockies", "mets", "mariners", "braves", "phillies", "astros", "nationals", "tigers", "indians", "rays", "rangers", "pirates", "orioles", "angels", "yankees", "padres", "brewers"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);

    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    console.log(blanksAndSuccesses);

    // Change HTML to reflect game conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

}

function checkLetters(letter) {
    // Checks if letter exists in code at all
    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    // Check where in the word the letter exists and populate blanksAndSuccesses array
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
    console.log(blanksAndSuccesses);

    // Check if user won
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;

        // Update win counter in the DOM
        document.getElementById("winCounter").innerHTML == winCount;
        startGame();

        // Check is user lost 
    } else if (guessesLeft == 0) {
        lossCount++;

        // Update win counter in the DOM
        document.getElementById("lossCounter").innerHTML == lossCount;
        startGame();
    }
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

    // Updates HTML to reflect guesses
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
}

// Initiates game code and reset
startGame();

// Registers key clicks
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
};
