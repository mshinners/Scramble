'use strict';

var highScoreList = [];

if (localStorage.winners) {
  highScoreList = JSON.parse(localStorage.winners);
}

function printHiScores() {
  highScoreList.sort(function(a,b) {
    return b.score - a.score;
  });
  for (var i = 0; i < highScoreList.length; i++) {
    var table = document.getElementById('hiScoreTable');
    var tr = document.createElement('tr');
    var rank = document.createElement('td');
    rank.innerText = i + 1;
    tr.appendChild(rank);
    var userName = document.createElement('td');
    userName.innerText = highScoreList[i].userName;
    tr.appendChild(userName);
    var score = document.createElement('td');
    score.innerText = highScoreList[i].score;
    tr.appendChild(score);
    table.appendChild(tr);
    if (highScoreList.length >= 11) {
      highScoreList.pop();
    };
  };
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
