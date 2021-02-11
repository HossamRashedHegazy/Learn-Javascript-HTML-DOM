/*global  document,   window*/

/* Events | onkeyDown, onkeypress, onkeyUp
 *
 *
 *
 * */
var myForm = document.getElementById('myForm');

var myInput = document.getElementById('myInput');

var myResult = document.getElementById('result');

myInput.onkeyup = function () {

    "use strict";
    myResult.textContent = this.value;

};
