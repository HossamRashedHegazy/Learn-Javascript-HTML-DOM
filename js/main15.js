/*global  document   */

/*
 *  removeChild بيشيل العنصار
 * */

var mymaindiv = document.getElementById('main');

mymaindiv.removeChild(mymaindiv.firstElementChild); //شالت اوال عنصار

mymaindiv.removeChild(mymaindiv.childNodes[2]); // بختار انا اشيل انهو عنصار

console.log(mymaindiv.childNodes); //بطباع الاطفال اللى جوة العنصر بى المسفات علشان احدد انهو عنصار انا عوزة
