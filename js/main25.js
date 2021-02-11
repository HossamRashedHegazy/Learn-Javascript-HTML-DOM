/*global  document, console   */

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
 **************************************************
 *
 * scrollHeight | scrollWidth
 *
 * ALL Area Include Invisible Area
 *
 * ude Padding بتحساب البادنج بتاع العنصر
 *
 * No Border مبتحسابش البوردار
 *
 * No Margin
 * */

var myMainDiv = document.getElementById('main');

// انا كدا طباعت الهيات بتاع العنصار

console.log(myMainDiv.clientHeight);

console.log(myMainDiv.clientWidth);

// بيحساب مساحة العنصار حتى المساحة المختفية من الصفحة

console.log(myMainDiv.scrollHeight);

console.log(myMainDiv.scrollWidth);
