/*global  document, window   */

/*
 * ClientHeight, CleintWidth
 *
 * viewable Area المكان اللى انت هتشوفو
 *
 * Include Padding بتحساب البادنج بتاع العنصر
 *
 * No Border مبتحسابش البوردار
 *
 * No Margin مبتحسابش المارجان
 *
 * no Scroll مبتحسابش الاسكراول
 *
 *
 * */


var toKnow = document.getElementById('know');

console.log(toKnow.clientHeight);

console.log(toKnow.clientWidth);

var myMainDiv = document.getElementById('main');

// انا كدا طباعت الهيات بتاع العنصار

console.log(myMainDiv.clientHeight);


console.log(myMainDiv.clientWidth);
