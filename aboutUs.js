'use strict';
var target;
//each create an object with our name, favorite word, & blurb about us?
var michelle = {dev:'Michelle', faveWord: 'Merge', blurb: 'Coding is fun!'};
var michael = {dev:'Michael', faveWord: 'Pithy', blurb: 'Dad Jokes Rule!'};
var nathan = {dev:'Nathan', faveWord: 'Djinn', blurb: 'Hi Momma!'};
var shannon = {dev:'Shannon', faveWord: 'Amuck', blurb: 'Thanks for playing!'};
//Store objects in an array
var people = [michelle, michael, nathan, shannon];

//get all of the elements with a class name of profile & add an eventListener
var aboutUs = document.getElementsByTagName('img');
for (var i = 0; i < people.length; i++){
  aboutUs[i].addEventListener('mouseover', createProfile);
  aboutUs[i].addEventListener('mouseout', removeProfile);
}
//get the correct Person object
function createProfile(event) {
  var devProfile = document.getElementById(event.target.id);
  for (var i = 0; i < people.length; i++){
    if (event.target.id === people[i].dev.toLowerCase()){
      target = people[i];
    }
  }
  //to populate the Learn more text field
  var paragraph = document.getElementById('learnMoreWindow');
  paragraph.setAttribute('style', 'visibility: visible');
  var faveWord = document.createElement('p');
  faveWord.innerText = 'My Favorite Five-letter Word: ';
  var favWordWord = document.createElement('span');
  favWordWord.setAttribute('id', 'favWordWord');
  favWordWord.innerText = target.faveWord;
  faveWord.appendChild(favWordWord);
  faveWord.setAttribute('id', 'faveWord');
  paragraph.appendChild(faveWord);
  var blurb = document.createElement('p');
  blurb.innerText = target.blurb;
  blurb.setAttribute('id', 'blurb');
  paragraph.appendChild(blurb);
};
//Removes info from text
function removeProfile(event) {
  var cutProfile = document.getElementById('learnMoreWindow');
  var faveWord = document.getElementById('faveWord');
  var blurb = document.getElementById('blurb');
  cutProfile.setAttribute('style', 'visibility: hidden');
  cutProfile.removeChild(faveWord);
  cutProfile.removeChild(blurb);
};
