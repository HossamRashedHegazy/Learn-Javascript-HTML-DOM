/*global  document   */

/*
 * Element ClassList | Length, Item | contains
 *
 *  ClassList تقدار تحزاف كلاس او تضيف كلاس او تبادال بين الكلاسات و بيجيب كام كلاس فى العنصلر
 *
 *  ClassList غير مدعام فى فى انتارنتان الكسبلورال 9
 *
 *  contains يعنى العنصر يحتوى على الكلاس كذا
 *
 *  .item(2); الايتام بتتعامل معاملة الانداكس اف و بيخراجلك اسم الكلاس اللى انت بتحددو
 *  */



var maindiv = document.getElementById('main');

document.getElementById('test2').innerHTML = maindiv.classList;

console.log(maindiv.classList);

console.log(maindiv.classList.length); // بيجيب عدد الكلاسات اللى فى العنصار

/* الفاكراه انو انا اشيك على الكلاسات اللى فى العنصار لو فى من ضمناهم كلاس كذا اعمال حاجة و لو لا اعمال حاجة تانية  */

if (maindiv.classList.contains('coolr')) {

    document.getElementById('test3').innerHTML = "yes the div has class cool";

} else {

    document.getElementById('test3').innerHTML = "no the div don't have class cool";
}

/* .item(2); الايتام بتتعامل معاملة الانداكس اف و بيخراجلك اسم الكلاس اللى انت بتحددو */
document.getElementById('test4').innerHTML = maindiv.classList.item(2);

/**********************/




var myP = document.getElementById('main-p'),

    myButtons = document.getElementsByTagName('button'),

    myDiv = document.querySelector('.main');

for (var i = 0; i < myButtons.length; i++) {

    myButtons[i].onclick = function () {

        if (myP.classList.contains(this.textContent)) {

            myDiv.textContent = "yes your paragraf has " + this.textContent + " class";

        } else {

            myDiv.textContent = "no your paragraf has not " + this.textContent + " class";
        }
    }
}
