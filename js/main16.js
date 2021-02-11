/*global  document   */

/*
 *  Node[Name, Value, Type]
 *
 * */

var mymaindiv = document.getElementById('main');

console.log(mymaindiv.childNodes); //بطباع الاطفال اللى جوة العنصر بى المسفات علشان احدد انهو عنصار انا عوزة

console.log(mymaindiv.childNodes[1]); //بطباع اوال عنصر فى النواد و بيجبلى نوعو و المحتو اللى جواه

document.getElementById('test1').innerHTML = mymaindiv.childNodes[1].nodeName; //nodeName بيطباع اسم العنصار اللى رقم واحد

console.log(mymaindiv.childNodes[1].nodeName); //nodeName بيطباع اسم العنصار اللى رقم واحد

document.getElementById('test2').innerHTML = mymaindiv.childNodes[3].tagName; //tagName بيطباع اسم العنصار اللى رقم واحد

console.log(mymaindiv.childNodes[3].tagName); //tagName بيطباع اسم العنصار اللى رقم واحد

document.getElementById('test3').innerHTML = mymaindiv.childNodes[2].nodeValue; //nodeValue بيطباع قيمة العنصار الاب

console.log(mymaindiv.childNodes[2].nodeValue); //nodeValue  بيطباع قيمة العنصار الاب

document.getElementById('test4').innerHTML = mymaindiv.childNodes[3].firstChild.nodeValue; // علشان اطباع عنصر من الابنا بزواد عن اللى فوق فراست اتشيالد

console.log(mymaindiv.childNodes[3].firstChild.nodeValue); // علشان اطباع عنصر من الابنا بزواد عن اللى فوق فراست اتشيالد

/*
 * nodeType بيرجاع رقام
 * 1 معنى رقم 1 انو هو عنصار
 * 3 معنى رقم 3 انو تكاست
 * 8 معنر رقم 8 انو هو كمانت
 * */

document.getElementById('test5').innerHTML = mymaindiv.childNodes[3].nodeType;

console.log(mymaindiv.childNodes[3].firstChild.nodeType);
