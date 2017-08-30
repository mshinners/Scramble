'use strict';
var target;
//each create an object with our name, favorite word, & blurb about us?
var michelle = {dev:'Michelle', faveWord: 'Three', blurb: 'Coding is fun!'};
var michael = {dev:'Michael', faveWord: 'Acrid', blurb: 'Dad Jokes Rule!'};
var nathan = {dev:'Nathan', faveWord: 'Szygy', blurb: 'Hi Momma!'};
var shannon = {dev:'Shannon', faveWord: 'Their', blurb: 'Thanks for playing!'};
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
  var paragraph = document.getElementById('learnMoreWindow');
  // paragraph.setAttribute('class', 'displayInline');
  var faveWord = document.createElement('p');
  faveWord.innerText = target.faveWord;
  paragraph.appendChild(faveWord);
  var blurb = document.createElement('p');
  blurb.innerText = target.blurb;
  paragraph.appendChild(blurb);
  devProfile.appendChild(paragraph);
};
function removeProfile(event) {
  var devProfile = document.getElementById(event.target.id);
  for (var i = 0; i < people.length; i++){
    if (event.target.id === people[i].dev.toLowerCase()){
      devProfile.removeChild(paragraph);
    }
  }
      // cutProfile.removeChild(faveWord);
      // cutProfile.removeChild(blurb);
  // var cutProfile = document.getElementById(event.target.id);
  var paragraph = document.getElementById('learnMoreWindow');
  // paragraph.setAttribute('class', 'displayInline');
  var faveWord = document.createElement('p');
  faveWord.innerText = target.faveWord;
  paragraph.appendChild(faveWord);
  var blurb = document.createElement('p');
  blurb.innerText = target.blurb;//get the correct Person object
}

  // var cutProfile = document.getElementById('learnMoreWindow');
  // var devProfile = document.getElementById(event.target.id);
  // //get the correct Person object
  // for (var i = 0; i < people.length; i++){
  //   if (event.target.id === people[i].dev.toLowerCase()){
  //     target = people[i];
  //     // console.log(removeProfile);
    // }
  // }
//
// function changeText() {
//   event.target.innerText = 'Learn more';
// }

// function originalText() {
//   event.target.innerText = event.target.id;
// };
