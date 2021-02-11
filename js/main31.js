/*global  document, console   */

/* createElement, createTextNode, createComment
 *
 * createElement بنشا عنصار
 *
 * createTextNode بنشاى استرانج و بضيفو فى العنصار اللى انا انشاتو
 *
 * createComment بضيف الكمانت للعنصار
 * */

var myMainDiv = document.getElementById('main');

// Create Element
var myElement = document.createElement('div');

// Append To Body
document.body.appendChild(myElement);

// create Tex Node
var myText = document.createTextNode('This Div Create By Javescript');

// Create Comment
var myComment = document.createComment('This Text Create By Javescript');

// add The Comment To Element
myElement.appendChild(myComment);

// Add The Text To my Element
myElement.appendChild(myText);
