/*global  document   */

/*
 * Element children اللى هو الاطفال للعنصر
 *
 * */

var mydiv = document.getElementById('main');

document.getElementById('test1').innerHTML = mydiv.childElementCount; // بيحساب عدد الابنا للعناصر و بيحساب عدد العناصر بساللى هو عنصر مش تكاست جوة الاب

document.getElementById('test2').innerHTML = mydiv.children.length; //بيجيب عدد الابنا اللى فى العنصر

document.getElementById('test3').innerHTML = mydiv.children;

console.log(mydiv.children); // هيطباع جميع الابنا

console.log(mydiv.children[0]); // هيطباع الابن الاوال

console.log(mydiv.children[1]); // هيطباع الابن الثاى

console.log(mydiv.children[0].textContent); // هجيب الابن الاوال للعنصار الاب و بعدين اطبع اكلام اللى جواه

document.getElementById('test4').innerHTML = mydiv.childNodes.length; //بيعدالك كام ابن فى العنصر و بيحساب الانتار على انو عنصار و كمان الكمانت على انو عنصار

document.getElementById('test5').innerHTML = mydiv.childNodes;

console.log(mydiv.childNodes);
