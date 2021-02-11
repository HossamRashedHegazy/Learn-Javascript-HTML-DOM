/*global  document   */

/*
 *  appendChild بيضيف العنصر فى اخر المحتو للعنصار
 *
 * */

var mymaindiv = document.getElementById('main');

var mynewelment = document.createElement('div'); //كريت عنصر جديد مش موجود و كريتو بى الجافا اسكربت

// بكريت تكاست و عرفو بى متغيار

var mytext = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor");

// بضيف الاستارنج اللى انا كريتو الى عنصار انا كريتو برضو بى الجافا اسكربت

mynewelment.appendChild(mytext);

// بضيف العنصر اللى انا كريتو بى الجافا اسكرابت بى العنصار اللى فى صفحة الاتش تى ال ام

mymaindiv.appendChild(mynewelment);
