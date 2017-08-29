'use strict';
var target;
//each create an object with our name, favorite word, & blurb about us?
var michelle = {dev:'Michelle', faveWord: 'word', blurb: 'This is what Michelle says'};
var michael = {dev:'Michael', faveWord: 'word', blurb: 'This is what Michael says'};
var nathan = {dev:'Nathan', faveWord: 'word', blurb: 'This is what Nathan says'};
var shannon = {dev:'Shannon', faveWord: 'word', blurb: 'This is what Shannon says'};
//Store objects in an array
var people = [michelle, michael, nathan, shannon];

//get all of the elements with a class name of profile & add an eventListener
var aboutUs = document.getElementsByTagName('img');
for (var i = 0; i < people.length; i++){
  aboutUs[i].addEventListener('mouseover', createProfile);
  aboutUs[i].addEventListener('mouseout', removeProfile);
}
function createProfile(event) {
  var devProfile = document.getElementById(event.target.id);
  //get the correct Person object
  for (var i = 0; i < people.length; i++){
    if (event.target.id === people[i].dev.toLowerCase()){
      target = people[i];
    }
  }
  var paragraph = document.createElement('div');
  paragraph.setAttribute('class', 'displayInline');
  var faveWord = document.createElement('p');
  faveWord.innerText = target.faveWord;
  paragraph.appendChild(faveWord);
  var blurb = document.createElement('p');
  blurb.innerText = target.blurb;
  paragraph.appendChild(blurb);
  profile.appendChild(paragraph);
}
function removeProfile(event) {
  var devProfile = document.getElementById(event.target.id);
  //get the correct Person object
  for (var i = 0; i < people.length; i++){
    if (event.target.id === people[i].dev.toLowerCase()){
      target = people[i];
      console.log(removeProfile);
    }
  }
};
// function changeText() {
//   event.target.innerText = 'Learn more';
// }

function originalText() {
  event.target.innerText = event.target.id;
};
