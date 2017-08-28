'use strict';

var a = {letter: 'A', letterScore: 1};
var b = {letter: 'B', letterScore: 3};
var c = {letter: 'C', letterScore: 3};
var d = {letter: 'D', letterScore: 2};
var e = {letter: 'E', letterScore: 1};
var f = {letter: 'F', letterScore: 4};
var g = {letter: 'G', letterScore: 2};
var h = {letter: 'H', letterScore: 4};
var i = {letter: 'I', letterScore: 1};
var j = {letter: 'J', letterScore: 8};
var k = {letter: 'K', letterScore: 5};
var l = {letter: 'L', letterScore: 1};
var m = {letter: 'M', letterScore: 3};
var n = {letter: 'N', letterScore: 1};
var o = {letter: 'O', letterScore: 1};
var p = {letter: 'P', letterScore: 3};
var q = {letter: 'Q', letterScore: 10};
var r = {letter: 'R', letterScore: 1};
var s = {letter: 'S', letterScore: 1};
var t = {letter: 'T', letterScore: 1};
var u = {letter: 'U', letterScore: 1};
var v = {letter: 'V', letterScore: 4};
var w = {letter: 'W', letterScore: 4};
var x = {letter: 'X', letterScore: 8};
var y = {letter: 'Y', letterScore: 4};
var z = {letter: 'Z', letterScore: 10};

var vowels = [a, e, i, o, u];

var consonants = [b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z];

var numberOfLettersSelected = 0;

var letterCount = 4;

var gameCount = 61;

var score = 0;

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

function calculateFinalScore() {
  score += gameCount;
  for (var i = 1; i < 6; i++) {
    var ithLetter = document.getElementById('lockedIn ' + i);
    score += ith;
  }
}

function endGame() {
  //add to the if condition that the word must be legal
  if (numberOfLettersSelected === 5) {
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
    return vowels[randomVowel].letter;
  } else {
    var randomConsonant = Math.floor(Math.random() * consonants.length);
    return consonants[randomConsonant].letter;
  }
}

generateUpcomingLetters();

addListeners();

startLetterTimer();

startGameTimer();
