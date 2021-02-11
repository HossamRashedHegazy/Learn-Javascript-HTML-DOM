/*global  document   */

/*
 *  InsertBefore بيضيف العنصر فى اوال المحتو للعنصار
 *
 * */

var mymaindiv = document.getElementById('main');

var mynewelment = document.createElement('div'); //كريت عنصر جديد مش موجود و كريتو بى الجافا اسكربت

// بكريت تكاست و عرفو بى متغيار

var mytext = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor");

// بضيف الاستارنج اللى انا كريتو الى عنصار انا كريتو برضو بى الجافا اسكربت

mynewelment.appendChild(mytext);

// بضيف العنصر اللى انا كريتو بى الجافا اسكرابت بى العنصار اللى فى صفحة الاتش تى ال ام فى اوال الابنا للعنصار

mymaindiv.insertBefore(mynewelment, mymaindiv.firstElementChild);

// بحدادا مكان انا عاوز اضيف فية العنصار بين الابناء

mymaindiv.insertBefore(mynewelment, mymaindiv.childNodes[3]);

console.log(mymaindiv.childNodes.length); // بيعداللى عدد الابنا للعنصر حت المسفات

console.log(mymaindiv.childNodes[4]); // بعراف المكان اللى انا عاوز حط فية العنصار
