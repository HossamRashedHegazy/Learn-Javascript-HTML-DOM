/*global console, document*/
/*
طرق اختيار العنصر
[ 1 ] document.getElementById(); طريقة اختيار العنصر بى الايدى و الايدى لا يتكرار فى الصفحة
document.getElementsByTagName(); بيجيب جميع العناصر اللى فى الصفحة المتشبها مع العنصر
document.getElementsByClassName(); بيغير العناصر عن طريق الكلاس حت لو الكلاس متكارار بس بيكون تعريفو بى رقم العنصر فى الصفحة
document.querySelectorAll('div#testv25'); ممكن تختار العنصر عن طريق الايدى او الكلاس و كمان ممكن تحدد نوعة داف او برجراف
*/
var mydiv = document.getElementById('test2');

mydiv.innerHTML = 'changed by javescript';

var myelement = document.getElementsByTagName('div');

console.log(myelement.length);

/* document.getElementsByTagName('div'); بيعدالى كام عنصر من الداف فى الصفحة  */

document.getElementById('testv22').innerHTML = myelement.length;

/* myelement[8] getElementsByTagName طريقة تغيار محتو العنصر برقم فى الصفحة عن طريق   */

myelement[2].innerHTML = ("Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor");

/**************************************/

var myelement3 = document.getElementsByClassName('testv25');

myelement3[3].innerHTML = ("Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor");

/**************************************/

var myelement3 = document.querySelectorAll('div#testv25');

myelement3[0].innerHTML = ("LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT SED DO EIUSMOD TEMPOR");
