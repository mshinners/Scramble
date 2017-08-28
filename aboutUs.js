'use strict';
var target;
//each create an object with our name, favorite word, & blurb about us?
var michelle = {name:'Michelle', blurb: 'This is what Michelle says'};
var michael = {name:'Michael', blurb: 'This is what Michael says'};
var nathan = {name:'Nathan', blurb: 'This is what Nathan says'};
var shannon = {name:'Shannon', blurb: 'This is what Shannon says'};
//Store objects in an array
var people = [michelle, michael, nathan, shannon];

//target = the 'learn more' link
function createProfile(event) {
  var profile = document.getElementsByClassName(event.target.id);
  //get the correct Person object
  for (var i = 0; i < people.length; i++){
    if (event.target.id === people[i].name.toLowerCase()){
      target = people[i];
      console.log(target);
    }
  }
  var theName = document.createElement('p');
  theName.innerText = target.name;
  var blurb = document.createElement('p');
  blurb.innerText = target.blurb;
  profile.appendChild(theName);
  profile.appendChild(blurb);
}

//get all of the elements with a class name of profile & add an eventListener
var learnMore = document.getElementsByClassName('learnMore');
for (var i = 0; i < people.length; i++){
  learnMore[i].addEventListener('click', createProfile);
}
