'use strict';
var target;
//each create an object with our name, favorite word, & blurb about us?
var michelle = {dev:'Michelle', faveWord: 'Merge', blurb: 'Coding is fun!'};
var michael = {dev:'Michael', faveWord: 'Hodor', blurb: 'Mike enjoys hiking, camping and generally being outdoors. Father of two sons, foster-father to nine more and counting! He looks forward to a rewarding career in Development.'};
var nathan = {dev:'Nathan', faveWord: 'Volta', blurb: 'Nathan is a Seattle native, an opera fan, and a giant nerd. His favorite food is pickles, he prefers dogs to cats, and he idolizes Jean-Luc Picard.'};
var shannon = {dev:'Shannon', faveWord: 'Varve', blurb: 'Shannon loves to learn new things and help others learn as well; it’s how she ended up working in elementary education for two years. Shannon is excited to be a part of the Code Fellows community and feed her love of coding alongside amazing people.'};
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
