/*global  document, window   */

/*
 * Focus
 *
 * blur
 *
 *
 *
 *
 *
 * */

//var mymaindiv = document.getElementById('main');

/* الفاكراه انو اوال ما الصفحة تحامال يعمال فوكاس على حاقل الادخال */

window.onload = function () {

    "use strict";

    document.getElementById('myInput').focus();

};

// عمالت زورار يشيل الفواكاس اللى على الاحقال

document.querySelector('button').onclick = function () {

    "use strict";

    document.getElementById('myInput').blur();

};
