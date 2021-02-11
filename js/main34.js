/*global  document , window  */

/* Events | OnLoad, OnScroll, OnResize
 *
 *
 *
 * */

var myMainDiv = document.getElementById('main');

var myForm = document.getElementById('myForm');

window.onload = function () {

    "use strict";

    console.log("windo is ready");

    myMainDiv.style.backgroundColor = "#ebff00";

    myForm.style.backgroundColor = "red";
};

/*  */

window.onscroll = function () {

    "use strict";

    console.log("windo is scroll");

    myMainDiv.style.backgroundColor = "#00ffeb";

    myForm.style.backgroundColor = "#00a7ff";
};

/**/

window.onresize = function () {

    "use strict";

    console.log("windo is Resize");

    myMainDiv.style.backgroundColor = "#8000ff";

    myForm.style.backgroundColor = "#00ff89";
};
