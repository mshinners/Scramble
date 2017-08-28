'use strict';

var vowels = ['A', 'E', 'I', 'O', 'U'];

var consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

var numberOfLettersSelected = 0;

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
      resetLetterTimer();
      upcomingBecomesCurrent();
      generateUpcomingLetters();
    }
  }
}

function resetLetterTimer() {
  letterCount = 4;
  startLetterTimer();
}

function startGameTimer() {

  var counter = setInterval(timer, 1000);

  function timer() {
    gameCount --;
    var gameCountDisplay = document.getElementById('gameTimer');
    gameCountDisplay.innerHTML = gameCount;
    if (gameCount <= 0) {
      clearInterval(counter);
      //endGame();
    }
  }
}

function addListeners () {
  for (var i = 1; i < 6; i ++) {
    var cell = document.getElementById('current ' + i);
    cell.addEventListener('click', lockIn);
  }
}

function lockIn(event) {
  var which = event.target.getAttribute('currentColumn');
  var lock = document.getElementById('lockedIn ' + which);
  var upcomingPartner = document.getElementById('upcoming ' + which);
  lock.innerHTML = event.target.innerHTML;
  event.target.removeEventListener('click', lockIn);
  upcomingPartner.setAttribute('style', 'visibility: hidden;');
  event.target.setAttribute('style', 'visibility: hidden;');
  numberOfLettersSelected ++;
  if (numberOfLettersSelected === 5) {
    // endGame();
  } else {
    upcomingBecomesCurrent();
    generateUpcomingLetters();
    letterCount = 4;
  }
}

function upcomingBecomesCurrent() {
  for (var i = 1; i < 6; i++) {
    var upcoming = document.getElementById('upcoming ' + i).innerHTML;
    var current = document.getElementById('current ' + i);
    current.innerHTML = upcoming;
  }
}

function generateUpcomingLetters() {
  for (var i = 1; i < 6; i++) {
    var cell = document.getElementById('upcoming ' + i);
    cell.innerHTML = generateRandomLetter();
  }
}

function generateRandomLetter() {
  var vowelOrConsonant = Math.floor(Math.random() * 5);
  if (vowelOrConsonant <= 1) {
    var randomVowel = Math.floor(Math.random() * vowels.length);
    return vowels[randomVowel];
  }
  else {
    var randomConsonant = Math.floor(Math.random() * consonants.length);
    return consonants[randomConsonant];
  }
}

generateUpcomingLetters();

addListeners();

startLetterTimer();

startGameTimer();
