/*global console, document, mydiv, myimg  */

/*
 * hasattribute('attribute name')    removeattribute('attribute name', 'attribute value')
 *
 * .hasAttribute('alt') التشيك على العنصار يحتو على التربيوات انت عاوز تتاكد هل هو موجود فى العنصار او لا
 *
 *
 *  */



var myimg = document.querySelector('img');

if (myimg.hasAttribute('alt')) {

    document.getElementById('test4').innerHTML = "yes";

    if (myimg.alt === '') {
        // بيضيف الارتربيوت الجديد
        //myimg.setAttribute('alt', "alt from javascript");
        // بشيال الالتريوت نهاى من العنصر
        myimg.removeAttribute('alt');
    } else {


    }
} else {

    document.getElementById('test5').innerHTML = "no";
}
