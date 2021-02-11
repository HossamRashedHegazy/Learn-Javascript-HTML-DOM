/*global console, document, mydiv, mydiv1  */

/*
 * element.attribute = direct method
 * mydiv.id;                // get attribute
 * mydiv.id = 'id-hossam';  // set attribute
 * */
/* الفاكراه انو انا مخالى فى صفحة الاتش تى ال ام الايدى فاضى و ضفتو من الجاف اسكرابت طوال مانت فى الصفحة  */

mydiv = document.querySelector('div');

mydiv.id = 'id-hossam';

mydiv.className = "class-hossam rashed";

mydiv1 = document.querySelector('img');

mydiv1.src = "http://placehold.it/200/100";

mydiv1.alt = "my-images";

/* الطيطال مش موجود فى صفحة الاتش تى ال ام و انا ضافتو  */

mydiv1.title = "my-images";
