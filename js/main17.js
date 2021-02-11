/*global  document   */

/*
 *  CloneNode هو الاستنساخ العنصر الى مكان تانى
 *
 *
 * */

var mymaindiv = document.getElementById('main');

var mydiv = document.getElementById('test1');

var mycopy = mymaindiv.firstElementChild;

console.log(mycopy); // fبشياك فى الكانسال انو هيجبالى العنصر بالى جواه

mydiv.appendChild(mycopy.cloneNode(false)); //cloneNode(false) الفالس ده الدفالت فاليو و بياخد العنصار بى الصفات بتاعتو اللى هى زاى الكلاس و الايدى و جميع الارتربيوتس

var mydiv2 = document.getElementById('test2');

mydiv2.appendChild(mycopy.cloneNode(true)); // cloneNode(true) بياخد العنصار بى صفاتو بى العناصر اللى جواه
