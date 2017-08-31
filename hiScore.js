'use strict';

//checks to make sure there is at least one player name stored in local memory
// if there isn't, changes the "play again" to redirect the user to the home page instead of the game page.
if (!localStorage.nameArray) {
  var button = document.getElementById('playAgainButton');
  button.setAttribute('href', 'index.html');
  button = document.getElementById('playButton');
  button.innerText = 'Play Game!';
}
var fillerHighScores = [
  {userName: 'Jon', score: 75, word:'PARTY'},
  {userName: 'Daenerys', score: 64, word:'DANCE'},
  {userName: 'Tyrion', score: 89, word:'HAPPY'},
  {userName: 'Sandor', score: 64, word:'SMILE'},
  {userName: 'Cersei', score: 57, word:'GRINS'},
  {userName: 'Arya', score: 78, word:'BEERS'},
  {userName: 'Tormund', score: 63, word:'LAUGH'},
  {userName: 'Jaime', score: 56, word:'WINES'},
  {userName: 'Sansa', score: 57, word:'MUSIC'},
  {userName: 'Petyr', score: 50, word:'SHOUT'}
];

var highScoreList = [];

if (localStorage.winners) {
  highScoreList = JSON.parse(localStorage.winners);
}

for (var i = 0; i < fillerHighScores.length; i++) {
  highScoreList.push(fillerHighScores[i]);
}

function printHiScores() {
  highScoreList.sort(function(a,b) {
    return b.score - a.score;
  });
  while (highScoreList.length > 10) {
    highScoreList.pop();
  }
  for (var i = 0; i < highScoreList.length; i++) {
    var table = document.getElementById('hiScoreTable');
    var tr = document.createElement('tr');
    var rank = document.createElement('td');
    rank.innerText = i + 1;
    tr.appendChild(rank);
    var userName = document.createElement('td');
    userName.innerText = highScoreList[i].userName;
    tr.appendChild(userName);
    var word = document.createElement('td');
    word.innerText = highScoreList[i].word;
    tr.appendChild(word);
    var score = document.createElement('td');
    score.innerText = highScoreList[i].score;
    tr.appendChild(score);
    table.appendChild(tr);
  }
}

printHiScores();

//
// [i].score

// X create an object that is the score & userName
//     ordered list = no need for position number (automatic)
//
// store obj in array (in localStorage)
//
// sort the array by score value
//
// if array has more than 10, pop last item
//store in local storage
