'use strict';


var highScoreList = [];

function NewScore(userName, score) {
  this.userName = userName;
  this.score = score;
  highScoreList.push(this);
}

var test1 = new NewScore('bob', 23);
var test2 = new NewScore('Al', 2);
var test3 = new NewScore('Jane', 45);
var test4 = new NewScore('Sara', 5);
var test5 = new NewScore('Vince', 15);

highScoreList.sort(function(a,b) {
  return a.score - b.score;
});


//
// function compare(a,b) {
//   if (a.score)
// }

// var highScoreList = [];

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
