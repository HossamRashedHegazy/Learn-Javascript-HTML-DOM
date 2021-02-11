/*global  document, window   */

/*
 * Click
 *
 *
 *
 *
 *
 *
 *
 * */

var mymaindiv = document.getElementById('main');

var myButton = mymaindiv.firstElementChild;

console.log(myButton);

/* الفاكراه او انا اعمال الفانكشان تدوس على الزورار من غي ما انا ادوس علية  */

myButton.onclick = function () {

    "use strict";

    this.parentElement.style.display = 'none'; // عمالت انو اوال ما ادوس على الزورار الزورار و الاب بتاعو يختفو
};

/* كدا الفانكشان دى هتشتغال ساعت ما الصفحة تحامال تلقاى
window.onload = function () {

    "use strict";

    myButton.click();

};
*/

window.onload = function () {

    "use strict";

    /* setTimeout دى هتستنا ثنيتين و بعدين تنافز الفانكشان */

    setTimeout(function () {

        myButton.click();

    }, 2000);

};
