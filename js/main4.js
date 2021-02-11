/*global  document*/

/*  */

/*
 * document.title; بيطباع عنوان الصفحة
 *
 * document.images.length; بيجيب عدد الصور اللى فى الصفحة
 *
 * document.images[1].src; ممكن اجيب مسار الصورة بى رقمها فى الصفحة
 *
 * document.forms.length; بيجيب عدد الفوارم اللى فى الصفحة
 *
 * document.body
 *
 * mydiv.innerText = document.body.innerHTML; طبع جميع الاشيا اللى فى الصفحة الاتش تى الاام زتى ما هية فى الاتاش تى ال ام
 *
 * mydiv.innerText = document.body.innerText; بيجيب التاكاست بس اللى فى العناصر
 *
 *
 *
 *
 * */

var mydiv = document.getElementById('test1');
var mydiv2 = document.getElementById('test2');

mydiv.innerText = document.body.innerHTML;

mydiv2.innerText = document.body.innerText;

if (document.body.innerText.indexOf('Lorem') > 1) {

    console.log('yes');
}

/*******************************/

var mydiv3 = document.getElementById('test3');

mydiv3.innerText = document.anchors.length + "عدد الانكار اللى فى الصفحة و الفراق بين الانكار و الانك انو الانكار المقصود بية الاي من غير اتش راف";

var mydiv4 = document.getElementById('test4');

mydiv4.innerText = document.links.length + "عدد اللنكات اللى فى الصفحة";
