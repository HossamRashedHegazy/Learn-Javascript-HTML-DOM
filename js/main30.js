/*global  document, console   */

/* Document| InputEncoding, lastModified, Url
 *
 * InputEncoding بيعرافك الترميز بتاع الصفحة اللى انت فيها
 *
 * lastModified بيجبلاك اخار تعديل انت عملتو فى الصفحة امتى
 *
 *
 * */

var myMainDiv = document.getElementById('main');

/* بعراف الترميز بتاع الصفحة اللى هو الميتا يوتى اف 8 */

console.log(document.inputEncoding);

/* lastModified بيجبلاك اخار تعديل انت عملتو فى الصفحة امتى  */

console.log(document.lastModified);

/* بيجبلاك مسار الملافاللى انت شغال علية مكانو فين على الكمبيوتار او على الموقاع اللى انت فية */

console.log(document.URL);
