
/* createElement بيكريات عنصر بى الجافا اسكرابت */
/* createTextNode  بيكاريت استرانج  */
/* appendChild  ضفت عنصر جوة عنصر */

var myp= document.createElement('p');

var myptext = document.createTextNode('Thei paragraph created with javascript');

myp.appendChild(myptext);

document.body.appendChild(myp);
