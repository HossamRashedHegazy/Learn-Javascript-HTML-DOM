/*global  document, console   */

/* scrolltop | scrollLet */

var myMainDiv = document.getElementById('main');

/* الفكرة انو اوال ما ادوس على الزورار ينزال بى الاسكرال 100 باكسال
 *
 * و ساعت ما الاسكرال يوصال انو يكون 1000 بيكسال يضيف كلاس على العنصار
 *
 * */

myMainDiv.onclick = function () {

    "use strict";

    document.body.scrollTop += 100;

    console.log(document.body.scrollTop);

    if (document.body.scrollTop >= 1000) {

        this.clessList.add('active');

    }
};
