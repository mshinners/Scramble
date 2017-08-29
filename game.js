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

var allLetters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

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

function startGameTimer() {
  var counter = setInterval(timer, 1000);

  function timer() {
    gameCount --;
    var gameCountDisplay = document.getElementById('gameTimer');
    gameCountDisplay.innerHTML = gameCount;
    if (gameCount <= 0) {
      clearInterval(counter);
      endGame();
    }
  }
}

function endGame() {
  //get the div where the letterTime is & make it invisible
  var lett = document.getElementById('letterTimer');
  lett.setAttribute('style', 'visibility: hidden;');
  //get the div where the gameTime is & make it invisible
  var game = document.getElementById('gameTimer');
  game.setAttribute('style', 'visibility: hidden;');
  //add to the if condition that the word must be legal
  if (numberOfLettersSelected === 5) {
    calculateFinalScore();
  }
  //set both timers to 1000 (& continue counting down by 1- will go for 1000 seconds)
  //start here?
  letterCount = 1000;
  gameCount = 1000;
}

function calculateFinalScore() {
  score += gameCount;
  for (var i = 1; i < 6; i++) {
    //iterate through lockedIn tiles and get the letter in each td
    var ithLetter = document.getElementById('lockedIn ' + i).innerHTML;
    for (var j = 0; j < 26; j++) {
      //iterate through array of letter objects & find which letter value matches letter of lockedIn td
      if (allLetters[j].letter === ithLetter) {
        //add the points for that letter to the score
        score += allLetters[j].letterScore;
      }
    }
  }
}

//add click event listener to the five letter choice tds by their id
//assign lockIn event handler
function addListeners () {
  for (var i = 1; i < 6; i ++) {
    var cell = document.getElementById('current ' + i);
    cell.addEventListener('click', lockIn);
  }
}

//target = the td (tile) that was clicked on
function lockIn(event) {
  //get the currentColumn attribute (unique to each td) of the target
  var which = event.target.getAttribute('currentColumn');
  //get element by lockedIn id (lockedIn# matches currentColumn#)- td in first row of second table
  var lock = document.getElementById('lockedIn ' + which);
  //get element by upcoming id (upcoming# matches lockedIn#)- td in first row of first table
  var upcomingPartner = document.getElementById('upcoming ' + which);
  //set innerHTML of lockedIn td to innerHTML of td that was clicked
  lock.innerHTML = event.target.innerHTML;
  //remove the eventListener from the td that was clicked
  event.target.removeEventListener('click', lockIn);
  //make the upcomingPartner td invisible
  upcomingPartner.setAttribute('style', 'visibility: hidden;');
  //make the no-longer-clickable td invisible
  event.target.setAttribute('style', 'visibility: hidden;');
  numberOfLettersSelected ++;
  if (numberOfLettersSelected === 5) {
    endGame();
  } else {
    upcomingBecomesCurrent();
    generateUpcomingLetters();
    letterCount = 4;
  }
}

generateUpcomingLetters();

addListeners();

startLetterTimer();

startGameTimer();
