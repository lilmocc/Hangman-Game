// _____________________________
//  **** GLOBAL VARIABLES ****
// _____________________________

// array of hangman words
var teamList = ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", "mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", "lakers", "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", "thunder", "magic", "sixers", "suns", "trailblazers", "kings", "spurs", "raptors", "jazz", "wizards"];

var userGuess = []; // holds userGuess which is the letter typed for each onkey event
var numBlanks = 0; // number of blanks for each word
var lettersGuessed = []; // hold all letters that were guessed
var correctLetters = []; // holds correct letters
var wrongLetters = []; // holds incorrect letters

// game counters
var winCount = 0; // track total wins
var lossCount = 0; // track total losses
var numGuesses = 10;

// set of letters to validate that a letter is chosen from A-Z
var letterInput = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// random word for each round
var bballTeam = teamList[Math.floor(Math.random() * teamList.length)].toUpperCase();
  console.log(bballTeam);

// arrays to hold letters and spaces
var bballTeamArray = [];
var blankSpacesArray = [];


// _____________________
//  **** FUNCTIONS ****
// _____________________

// display starting HTML & choose word on start up / reload
window.onload = function() {

document.getElementById("wins").innerHTML = winCount;
document.getElementById("losses").innerHTML = lossCount;
document.getElementById("guesses-left").innerHTML = numGuesses;
document.getElementById("letters-played").innerHTML = wrongLetters.join(" ");

// push letters in word to bballTeamArray
for (var i = 0; i < bballTeam.length; i++) {
  bballTeamArray.push(bballTeam.charAt(i));
  }
  console.log(bballTeamArray);


// push _ for each letter in the array
for(var i = 0; i < bballTeamArray.length; i++) {
  blankSpacesArray.push("_");
  };


// push _'s to HTML
for(var j = 0; j < blankSpacesArray.length; j++){
  var n = j.toString();
  document.getElementById(n).innerHTML = blankSpacesArray[j];
  };
  console.log(blankSpacesArray);

}

document.onkeyup = function(event) { // type a letter
  userGuess = event.key.toUpperCase(); // letter changed to uppercase
  // console.log(userGuess);
  document.getElementById("message").innerHTML = " "; // clears message if needed
  document.getElementById("win-image").innerHTML = "Guess the team!"; // clears message if needed

    if (letterInput.includes(userGuess)) { // validate if it's A to Z
      if (lettersGuessed.includes(userGuess) === false) { // if letter has already been guessed, message on screen
        if (bballTeamArray.includes(userGuess)) { // validate if letter is in the word you're guessing
          for (var i = 0; i < bballTeamArray.length; i++){
            if (userGuess === bballTeamArray[i]){
                correctLetters.push(userGuess);
                lettersGuessed.push(userGuess);
                document.getElementById(i).innerHTML = userGuess;
                console.log(correctLetters);
            }
          }
        }
        else {
          wrongLetters.push(userGuess);
          lettersGuessed.push(userGuess);
          document.getElementById("letters-played").innerHTML = wrongLetters.join(" ");
          if (numGuesses > 0){
                numGuesses--;
                document.getElementById("guesses-left").innerHTML = numGuesses;
              }
        }


        }
      else {
        document.getElementById("message").innerHTML = "You already picked that letter ¯\_(ツ)_/¯";
      }

      }
    else {
      document.getElementById("message").innerHTML = "Pick a letter from A to Z!"
    }

    if (correctLetters.length === bballTeamArray.length) {
      winCount++;
      document.getElementById("wins").innerHTML = winCount;
      document.getElementById("win-image").innerHTML = "You win! Next word, GO!";

    }

    if (numGuesses === 0) {
      lossCount++;
      document.getElementById("losses").innerHTML = lossCount;
      document.getElementById("win-image").innerHTML = "You lose! Try again.";
    }

//RESET
    if (numGuesses === 0 || correctLetters.length === bballTeamArray.length) {

        numGuesses = 10;
        correctLetters = [];
        wrongLetters = [];
        lettersGuessed = [];
        bballTeamArray = [];
        blankSpacesArray = [];

        document.getElementById("guesses-left").innerHTML = numGuesses;
        document.getElementById("letters-played").innerHTML = wrongLetters.join(" ");



        var bballTeam = teamList[Math.floor(Math.random() * teamList.length)].toUpperCase();
          console.log(bballTeam); // random word for each round
          for (var i = 0; i < bballTeam.length; i++) {
            bballTeamArray.push(bballTeam.charAt(i));
          }
          console.log(bballTeamArray);

          // push _ for each letter in the array
          for(var i = 0; i < bballTeamArray.length; i++) {
            blankSpacesArray.push("_");
          };
          for(var i = bballTeamArray.length; i < 13; i++){
            document.getElementById(i).innerHTML = " ";
          }

          // push _'s to HTML
          for(var j = 0; j < blankSpacesArray.length; j++){
            console.log(blankSpacesArray[j]);
            var n = j.toString();
            document.getElementById(n).innerHTML = blankSpacesArray[j];
          };
          console.log(blankSpacesArray);
        }



}








// __________________________________________
//  **** FUNCTIONS / JS I NEED HELP WITH ****
// __________________________________________

// (1) game starts when page opens OR reloads OR "reset" button is hit
// (2) round starts when: page opens OR page reloads OR when user guesses word OR or when numGuesses is 0
// (3) during each round:
//   - onkey event occurs ***
//       - validate key is A-Z
//       - if so, check it against bballTeamArray
//         - if part of bballTeamArray, (add letter to currentProgress, replace "__" in html)
//         - if not part of bballTeamArray, push letter to wrongLetters array AND print to HTML... AND subtract 1 from numGuesses
//   REPEAT onkey event until:
//       - guessesLeft = 0
//         - add "1" to lossCount
//         - start new round
//       - all letters in bballTeamArray have been chosen
//         - show image or text in "win-image" div
//         - add "1" to winCount
//         - start new round

// ______________________
//  **** SCRATCHPAD ****
// ______________________
