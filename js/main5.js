/*global console, document  */

/*
 * innerText  مبيدعمواش متصفحات كتير زاى الفاير فوكس
 * outerText مبيدعمواش متصفحات كتير زاى الفاير فوكس
 *
 * الحجات اللى ممكن تشتغال بيها حالياً
 * innerHTML
 * outerHTML
 * textcontent
 *
 *
 * console.log(mydiv.innerHTML);
 * console.log(mydiv.textContent);
 * الفارق بين الانار اتش تى الا ام و الاكونمتانت انو الانار اتش تى ال ام بيجيب الكلام بى العنصر اللى جواه و التكاس كونتانت بيجيب الكلام بس
 *
 * */

var mydiv = document.getElementById('test5');

console.log(mydiv.innerHTML);

document.getElementById('test6').innerHTML = mydiv.innerHTML;

console.log(mydiv.textContent);
