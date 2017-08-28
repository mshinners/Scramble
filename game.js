'use strict';

var letterCount = 4;

var gameCount = 61;

function startLetterTimer() {

  var counter = setInterval(timer, 1000);

  function timer() {
    letterCount --;
    var letterCountDisplay = document.getElementById('letterTimer');
    letterCountDisplay.innerHTML = letterCount;
    if (letterCount <= 0) {
      clearInterval(counter);
       //counter ended; generate new letters and remove old letters
      resetLetterTimer();
    }
  }
}

startLetterTimer();

function resetLetterTimer() {
  letterCount = 4;
  startLetterTimer();
}

//letter timer above, game timer below

function startGameTimer() {

  var counter = setInterval(timer, 1000);

  function timer() {
    gameCount --;
    var gameCountDisplay = document.getElementById('gameTimer');
    gameCountDisplay.innerHTML = gameCount;
    if (gameCount <= 0) {
      clearInterval(counter);
       //counter ended; end game: store the user's score in localStorage, redirect to high score page
    }
  }
}

startGameTimer();
