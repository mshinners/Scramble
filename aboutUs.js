'use strict';
var target;
//each create an object with our name, favorite word, & blurb about us?
var michelle = {name:'Michelle', blurb: 'This is what Michelle says'};
var michael = {name:'Michael', blurb: 'This is what Michael says'};
var nathan = {name:'Nathan', blurb: 'This is what Nathan says'};
var shannon = {name:'Shannon', blurb: 'This is what Shannon says'};
//Store objects in an array
var people = [michelle, michael, nathan, shannon];


//get all of the elements with a class name of profile & add an eventListener
var learnMore = document.getElementsByClassName('learnMore');
for (var i = 0; i < people.length; i++){
  learnMore[i].addEventListener('click', createProfile);
  learnMore[i].addEventListener('mouseover', changeText);
  learnMore[i].addEventListener('mouseout', originalText);
}

//target = the 'learn more' link
function createProfile(event) {
  var profile = document.getElementsByClassName(event.target.id)[0];
  event.target.removeEventListener('click', createProfile);
  //get the correct Person object
  for (var i = 0; i < people.length; i++){
    if (event.target.id === people[i].name.toLowerCase()){
      target = people[i];
    }
  }
  var theName = document.createElement('p');
  theName.innerText = target.name;
  theName.setAttribute('class', 'displayInline');
  var blurb = document.createElement('p');
  blurb.innerText = target.blurb;
  blurb.setAttribute('class', 'displayInline');
  profile.appendChild(theName);
  profile.appendChild(blurb);
}

function changeText() {
  event.target.innerText = 'Learn more';
}

function originalText() {
  event.target.innerText = event.target.id;
}
