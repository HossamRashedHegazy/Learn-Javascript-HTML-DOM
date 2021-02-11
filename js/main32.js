/*global  document   */

/* createAttribute
 *
 * عاوز اضيف التربيوت على العنصار اللى هى وصف كلاس او ايداى او ايى حاجة انا عوزها
 *
 *
 * */

var myMainDiv = document.getElementById('main');

// create The Attribute
var myAttr = document.createAttribute('class');

// Change Attribute Value
myAttr.value = 'custom';

// Add This Attribute tO Element
myMainDiv.setAttributeNode(myAttr);
