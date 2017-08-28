'use strict';


var highScoreList = [];

function NewScore(userName, score) {
  this.userName = userName;
  this.score = score;
  highScoreList.push(this);
}



// X create an object that is the score & userName
//     ordered list = no need for position number (automatic)
//
// store obj in array
//
// sort the array by score value
//
// if array has more than 10, pop last item
//store in local storage
