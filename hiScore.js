'use strict';

var winners = [{userName:'Sara', score: 19}, {userName:'Bob', score:53}];
var highScoreList = [];
//score constructor
function NewScore(userName, score) {
  this.userName = userName;
  this.score = score;
  highScoreList.push(this);
}
//function sorts the high scores
if (localStorage.highScoreList) {
  highScoreList = JSON.parse(localStorage.highScoreList);
}
new NewScore(winners[winners.length - 1].userName, winners[winners.length - 1].score);
highScoreList.sort(function(a,b) {
  return b.score - a.score;
});
//creates the high score table
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
};
if (highScoreList.length >= 10) {
  highScoreList.pop();
};
var highScoreData = JSON.stringify(highScoreList);
localStorage.highScoreList = highScoreData;

//
var test1 = new NewScore('bob', 23);
var test2 = new NewScore('Al', 2);
var test3 = new NewScore('Jane', 45);
var test4 = new NewScore('Sara', 5);
var test5 = new NewScore('Vince', 15);
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
