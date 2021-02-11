/*global  document   */

/*
 * Element children اللى هو الاطفال للعنصر
 *
 * */

var mydiv = document.getElementById('main');

console.log(mydiv.firstChild); //هيجيب اوال عنصر اللى هو الانتار لانو بيعتبار السطر عنصر

console.log(mydiv.firstElementChild); //هيجيب اوال عنصر ابن

console.log(mydiv.lastChild); //بيجيب اخر عنصر فى الاب و لو كان كمانت او مسافة

console.log(mydiv.lastElementChild); // بيجيب اخار عنصر فى الاب
