/*global  document,   window*/

/* Events | onclick, onmouseEnter
 *
 *
 *
 * */
var myButton = document.getElementById('main');

var myResult = document.getElementById('result');


myButton.onclick = function () {

    "use strict";

    myResult.textContent = "You Are Click Button";

};

myButton.ondblclick = function () {

    "use strict";

    myResult.textContent = "You Are Double Click Button";

};

/* اللى هى الكلاك يمين على العنصار يعنى بى الطريقة دى انا مناعت انو انا ادوس كلاك يمين خالص   */
window.oncontextmenu = function (e) {

    "use strict";

    e.preventDefault();

    myResult.textContent = "You Are Double Click Button";

};

myButton.onmouseenter = function () {

    "use strict";

    myResult.textContent = "The Mouse Enter";

};

myButton.onmouseleave = function () {

    "use strict";

    myResult.textContent = "The Mouse Leave";

};
