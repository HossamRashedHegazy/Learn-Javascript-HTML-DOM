/*global  document*/

/*  */

/*
 * document.title; بيطباع عنوان الصفحة
 * document.images.length; بيجيب عدد الصور اللى فى الصفحة
 * document.images[1].src; ممكن اجيب مسار الصورة بى رقمها فى الصفحة
 * document.forms.length; بيجيب عدد الفوارم اللى فى الصفحة
 *
 *
 * */

var mydiv = document.getElementById('testv3');

mydiv.innerHTML = document.title;

/****************/

var mydiv1 = document.getElementById('testv31');

mydiv1.innerHTML = document.images.length;

var mydiv1 = document.getElementById('testv32');

mydiv1.innerHTML = document.images[1].src;

/* الفكرة انو انا عاوز اجيب مسار جميع الصور جوة داف واحد */

var i = 0;

for (; i < document.images.length; i++) {

    document.write(document.images[i].src + "<br>");
}

/*********************************************/

var mydiv2 = document.getElementById('testv33');

mydiv2.innerHTML = document.forms.length + " عدد الفوارم فى الصفحة ";

/* name="z2" علشان اجيب الخواص بتاعت الحقل  */

/* عاوز ادخال على فورم بعينها و بعدين عاوز انبوت جوة الفورم و عاوز اجيب القيمة بتاعتو */

var mydiv3 = document.getElementById('testv34');

mydiv3.innerHTML = document.forms[0].x2.value;

var mydiv4 = document.getElementById('testv35');

mydiv4.innerHTML = document.forms[1].z2.type;
