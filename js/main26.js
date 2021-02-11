/*global  document, window   */

/* 17px مساحة الاسكرال فى المتصفح   */

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
 *
 * ******************************
 *
 * offsetHeight, offsettWidth
 *
 * viewable Area المكان اللى انت هتشوفو
 *
 * Include Padding بتحساب البادنج بتاع العنصر
 *
 * Include Border بتحساب البوردار
 *
 * No Margin مبتحسابش المارجان
 *
 * Include Scroll بتحساب الاسكراوال
 *
 * */

var myMainDiv = document.getElementById('main');

// انا كدا طباعت الهيات بتاع العنصار

console.log(myMainDiv.ClientHeight);

console.log(myMainDiv.ClientWidth);

//

console.log(myMainDiv.scrollHeight);

console.log(myMainDiv.scrollWidth);

// بيحساب مساحة العنصار حتى المساحة المختفية من الصفحة

console.log(myMainDiv.offsetHeight);

console.log(myMainDiv.offsetWidth);
