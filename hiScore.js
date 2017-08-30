'use strict';

var fillerHighScores = [
  {userName: 'Jon', score: 85, word:'party'},
  {userName: 'Daenerys', score: 74, word:'dance'},
  {userName: 'Tyrion', score: 99, word:'happy'},
  {userName: 'Sandor', score: 64, word:'smile'},
  {userName: 'Cersei', score: 57, word:'grins'},
  {userName: 'Arya', score: 58, word:'beers'},
  {userName: 'Tormund', score: 63, word:'laugh'},
  {userName: 'Jaime', score: 56, word:'wines'},
  {userName: 'Sansa', score: 57, word:'music'},
  {userName: 'Petyr', score: 50, word:'shout'}
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
