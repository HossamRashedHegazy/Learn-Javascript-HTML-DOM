/*global  document, window   */

/*
 * AddEventListener
 *
 * اضافه حداس مستامع
 *
 * اضافة ايفانت على الايفانت اللى موجود بدون تاسير على الايفانت اللى موجودة
 *
 * addEventListener غير مدعام فى انتارنات اكسبلورال 8
 * */

/* ممكن تكتاب الفانكشان هنا و تستخدمه تحت من خلال اسمها بس  */


function makPower() {

    "use strict";

    document.getElementById('monster2').style.display = 'none';

}

var myMainButton = document.getElementById('main');

var myPower = document.getElementById('power');

/* الفكرة انو انوال ما ادوس على الزورار يخفى عنصار  */

myMainButton.onclick = function () {

    "use strict";

    document.getElementById('monster1').style.display = 'none';

};

myPower.onclick = function () {

    "use strict";

    myMainButton.addEventListener('click', makPower); // هنا انا هماشت الفانكشان اللى تحت لانو انا كتابت الفانكشان فوق و استدعيته من خلال اسمها
};

/* getElementById الفكراه انو اخالىالعنصار يطابق الايفانت اللى هو بيعمله على اكتار من عنصار  */

/*
myPower.onclick = function () {

    "use strict";

    myMainButton.addEventListener('click', function () {

        document.getElementById('monster2').style.display = 'none';

    });
};
*/
