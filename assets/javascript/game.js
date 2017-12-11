
// **** GLOBAL VARIABLES ****

var winCount = 0;
var lossCount = 0;
var guessesThisRound = [];
var guessesLeft = 12;

// set of letters to choose from for onkey event
var letterInput = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// list of hangman words
var movieList = ["space jam",
  "coach carter",
  "air bud",
  "he got game",
  "love and basketball",
  "hoosiers",
  "semi pro",
  "hoop dreams",
  "sunset park",
  "the basketball diaries",
  "glory road",
  "juwanna mann",
  "the sixth man", "like mike",
  "glory road",
  "blue chips",
  "white men can't jump"];

// random word for current round
var bballMovie = movieList[Math.floor(Math.random() * movieList.length)].toUpperCase();
console.log(bballMovie);

// array of letters that are in the current round
var bballMovieArray = [];

// tracking guesses
var correctLetter = [];
var incorrectLetter = [];
var blankSpaces = "";


// **** FUNCTIONS ****

window.onload = function() {
document.getElementById("wins").innerHTML = winCount;
document.getElementById("losses").innerHTML = lossCount;
document.getElementById("letters-played").innerHTML = guessesThisRound;
document.getElementById("guesses-left").innerHTML = guessesLeft;
}

// push letters in word to bballMovieArray
for (var i = 0; i < bballMovie.length; i++) {
  bballMovieArray.push(bballMovie.charAt(i));
}
console.log(bballMovieArray);

// set blank spaces on screen
for (i = 0; i < bballMovieArray.length; i++) {
       bballMovieArray.push("__");
   }

  function blankSpaces() {
    document.getElementById("blank-letters").innerHTML = wordInProgress.join(" ");
  }


   // function letterInWord(correctLetter) {
   //
   //     var positions = new Array();
   //     for (i = 0 ; i < wordInProgress.length; i++) {
   //         if (wordInProgress[i] === letter)
   //             positions.push(i);
   //     }
   //     return positions





// function setBlanks() {
//   for (var i = 0; i < bballMovieArray.length; i++) {}
//       if (bballMovieArray.charAt(i) == " ") {
//         var blankSpaces = "&nbsp;&nbsp;";
//       } else {
//         var blankSpaces = "_&nbsp;";
//       }
//       blankSpaces.push(blankSpaces)
//
//     document.getElementById('#blank-letters').innerHTML = "<p>new content</p>";
//      console.log(blankSpaces);
//   }





function startGuess() {

    if (bballMovieArray.includes(letter)){
    correctLetter.push(letter);
    guessesThisRound.push(letter);
    }
    else if (bballMovieArray.includes(letter) === false) {
    incorrectLetter.push(letter);
    guessesThisRound.push(letter);
    }
    else {
      alert("choose a letter!");
    }


  // console.log(letter);
  console.log(guessesThisRound);
  console.log(correctLetter);
  console.log(incorrectLetter);
}


//THIS STARTS THE ROUND
document.onkeyup = function(event) {
letter = String.fromCharCode(event.keyCode).toLowerCase();
  if (letterInput.includes(letter)) {
  startGuess();
  }
  else {
    alert("pick a letter from A to Z please")
  }

}


function startRound() {
  for (var i = 0; i < bballMovie.length; i++) {
    bballMovieArray[i] = correctLetter ;
    bballMovieArray = document.getElementById("blank_letters");
  }
}
