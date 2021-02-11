/*global  document   */

var mydiv = document.getElementById('main');

var mydiv1 = document.getElementById('ourText');

mydiv.className += ' test'; // الطريقة داى اانا ضافت على الكلاسات الموجودة كلاس تانى

var buttonadd = document.getElementById('buttonadd');

buttonadd.onclick = function () {

    "use strict";

    mydiv.classList.add('javescript', 'css'); // بيضيف كلاس على اللى موجود

    mydiv1.classList.add('hidden', 'css');
};

var buttonremove = document.getElementById('buttonremove');

buttonremove.onclick = function () {

    "use strict";

    mydiv.classList.remove('javescript', 'css'); // بيشيال الكلاس من العنصار

    mydiv1.classList.remove('hidden', 'css');
};

var buttontoggle = document.getElementById('buttontoggle');

buttontoggle.onclick = function () {

    "use strict";

    mydiv.classList.toggle('hidden'); // التاجال كلاس بتبادال بين الكلاس لو موجود تشيلو و لو مش موجود تضيفو

    mydiv1.classList.toggle('hidden');
};
