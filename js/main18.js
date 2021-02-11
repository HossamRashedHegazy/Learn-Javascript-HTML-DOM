/*global  document   */

/*
 *  ParentNone
 *
 *  parentElement
 *
 *
 * */

var mymaindiv = document.getElementById('main');

var mybutton = mymaindiv.firstElementChild;

console.log(mybutton); // طباعت اوال عنصر من الابن

console.log(mybutton.parentNode); // بطبع الاب للعنصار

/* الفانكشان داى بتاعمال اوال ما ادوس على الزورار تخفى الزورار بى الاب اللى هو فية زاى  */

mybutton.onclick = function () {

    "use strict";

    this.parentNode.style.display = 'none'; // هى نفاس اللى بتعمالو اللى بيانت نود و البيرانت الامانت انو يجيب الاب بتاع العنصار

    this.parentElement.style.display = 'none';

};
