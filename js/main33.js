/*global  document   */

/* Events
 *
 *
 *
 * */

var myMainDiv = document.getElementById('main');

/* هاعمال الفانكشان انو هى تغاير لون الكلام */

/* عمالت الزورار انو يشاغال الفانكشان  */

function changeMe() {

    "use strict";

    myMainDiv.style.color = 'red';

}

/* الطريق التانية انو انا اشاغال الفانكشان من غير ماكتاب ان كلاك فى الاتش تى ام ال اكتبها فى الجافا اسكربت */

var myButton = document.getElementById('myButton');

myButton.onclick = function () {

    "use strict";

    myMainDiv.style.color = 'red';
};

/* ممكن اعمال الفانكشان فوة و استدعيها فى كود مختصر تحت */

var myButtonSomleFun = document.getElementById('myButtonSomleFun');

myButtonSomleFun.onclick = changeMe;
