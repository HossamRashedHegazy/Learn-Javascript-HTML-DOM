/*global  document   */

/*
 *  ParentNone
 *
 *  parentElement
 *
 *
 * */

var mymaindiv = document.getElementById('main');


console.log(mymaindiv.childNodes); // طباعت الابناء اللى فى العنصار

console.log(mymaindiv.childNodes[1]); //طريقة اختيار عنصر بعينو من الابنا

console.log(mymaindiv.childNodes[3].nextSibling); // انا كدا جبت الااخ اللى بعدة بس جبت التكاست اللى جواه

console.log(mymaindiv.childNodes[2].nextElementSibling); // كاد انا جبت العنصار اللى بعدة

console.log(mymaindiv.childNodes[2].nextElementSibling.textContent = 'changed by javescript'); // ممكن اغاير الكلام اللى جواه

console.log(mymaindiv.childNodes[3].previousSibling); //البرافياس اللى هو العنصر اللى قبلو
