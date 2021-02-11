/*global  document   */

/* Events | OnLoad, OnScroll, OnResize
 *
 *
 *
 * */

var myForm = document.getElementById('myForm');

var myInput = document.getElementById('myInput');

var myMainDiv = document.getElementById('main');

var myResult = document.getElementById('result');

myInput.onfocus = function () {

    "use strict";

    myMainDiv.style.color = 'red';

};

myInput.onblur = function () {

    "use strict";

    myMainDiv.style.color = '#00f';

};

myInput.onblur = function () {

    "use strict";

    // كدا انا بطالع النتيجة بتاعت حقل الادخال فى داف فاضى
    myResult.textContent = myInput.value;

};

/*  */

myForm.onsubmit = function (e) {

    "use strict";

    e.preventDefault();

};
