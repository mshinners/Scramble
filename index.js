'use strict';

var userNameList = [];

if (localStorage.nameArray) {
  userNameList = JSON.parse(localStorage.nameArray);
}

function showRules() {
  var show = document.getElementById('listOfRules');
  show.setAttribute('style', 'visibility:visible;');
  var rules = document.getElementById('rules');
  rules.setAttribute('style', 'visibility:hidden;');
}

var submitName = document.getElementById('nameEntry');
submitName.addEventListener('submit', logName);

function logName(event){
  event.preventDefault();
  var nameField = document.getElementById('GET-name');
  userNameList.push(nameField.value);
  console.log(JSON.stringify(userNameList));
  localStorage.nameArray = JSON.stringify(userNameList);
  window.location = 'game.html';
}
