/*global  document, console   */

/* scrolltop | scrollLet */

var myMainDiv = document.getElementById('main');



myMainDiv.onclick = function () {

    "use strict";

    document.body.scrollTop += 100;

    console.log(document.body.scrollTop);

    if (document.body.scrollTop >= 1000) {

        this.clessList.add('active');

    }
};
