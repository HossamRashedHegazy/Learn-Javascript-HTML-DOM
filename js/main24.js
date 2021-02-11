/*global  document, window   */

/*
 * Contains هو انو انت تداور على عنصار هال هو موجود فى العناصر داى ولال لا
 * */

/* ممكن تكتاب الفانكشان هنا و تستخدمه تحت من خلال اسمها بس  */

var myMainDiv = document.getElementById('main');

var myChild = document.getElementById('myChild');

console.log(myMainDiv.contains(myChild)); // بشياك على الاداف الاصلى على عنصار جواه و لو تراو معناه انو العنصار موجود

/* بشياك لو العنصار موجود غيارلى محتو الكلام اللى جواه الى حاجة تانى  */

if (myMainDiv.contains(myChild)) {

    myChild.textContent = 'none';
}
