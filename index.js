'use strict';

var userNameList = [];

if (localStorage.userNameList) {
  userNameList = JSON.parse(localStorage.userNameList);
}

function showRules() {
  var getRules = document.getElementById('rules');
  getRules.innerHTML = 'Enter your name and save. Click play to play. Click the letters to spell a word. You have one minute to make a word. If your word is valid it will be scored.';
}

var submitName = document.getElementById('nameEntry');
submitName.addEventListener('submit', logName);

function logName(event){
  event.preventDefault();

  var nameField = document.getElementById('GET-name');
  userNameList.push(nameField.value);
  console.log(JSON.stringify(userNameList));
  localStorage.nameArray = JSON.stringify(userNameList);

}
