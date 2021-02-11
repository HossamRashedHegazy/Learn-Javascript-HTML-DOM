/*global console, document, mydiv, mydiv1  */

/*
 * getattribute('attribute name')    stattribute('attribute name', 'attribute value')
 * mydiv.id;                // get attribute
 * mydiv.id = 'id-hossam';  // set attribute
 * */

/*
 * .getAttribute("src"); بيجيب السرس  للعنصار
 * .setAttribute("name", "value"); بيغير العنصر اللى موجود الى عنصار تانى و لو مش موجود بينشاو و بيغيرو الى العنصر اللى انت عاوزه
 * */

mydiv1 = document.querySelector('img');

document.getElementById('test4').innerHTML = mydiv1.src;

console.log(mydiv1.src);

document.getElementById('test5').innerHTML = mydiv1.getAttribute("src");

console.log(mydiv1.getAttribute("src"));

document.getElementById('test6').innerHTML = mydiv1.setAttribute("src", "http://placehold.it/200/100");

document.getElementById('test6').innerHTML = mydiv1.setAttribute("alt", "alt from js");

document.getElementById('test6').innerHTML = mydiv1.setAttribute("title", "alt from js");
