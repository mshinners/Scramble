'use strict';

var michael = document.getElementById('michael');
var p = document.createElement('p');
p.innerText = 'This is what Michael wants to say';
p.setAttribute('class', 'displayInline');
michael.appendChild(p);
