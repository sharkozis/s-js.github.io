// function firstFunction(){
//     var ask = prompt('select your number between 1 to 10');
//     if (ask>5){
//         document.getElementById('p').innerHTML='সেজুতি আপু তুমি জোস';
//     }
//     else if(ask == 5){
//         document.getElementById('p').innerHTML='সেজুতি আপু তুমি কিছু না';
//     }
//     else{
//         document.getElementById('p').innerHTML='সেজুতি আপু তুমি অনেক পচা';
//     }
// }


function guessFunc(){
    let user1 = parseInt(prompt('যে কোনো একটি পূর্ন সংখ্যা নিন'));
    let user2 = parseInt(prompt('সংখ্যাটি আবারো নিন এবং মনে মনে যোগ করুন'));
    alert('এখন আমরা আপনাকে অতিরিক্ত ১০০ দিচ্ছি। এটি আপনার মনে লুকানো সংখ্যাগুলির সাথে যোগ করুন এবং মনে রাখুন। ভুলবেন না প্লিজ। মেজাজ খারাপ আছে');
    let user3 = 100;
    let userTotal = user1+user2+user3;
    let division = parseInt(prompt('এখন আমাদের দেয়া সংখ্যার সাথে আপনার সংখ্যাগুলির যোগের পরে মোট সংখ্যাকে দুই দিয়ে ভাগ করুন এবং এখানে ইনপুটে দিন।'));
    let minus = parseInt(prompt("এইবার গেমের শুরুতে সংখ্যাটি দুইবার নেয়ার অপরাধে একবার বিয়োগ করে ফেলুন। আরে করেন ভাই নাইলে কোড মিলবো না।"));
    let remainResult = division-minus;
    document.getElementById('p').innerHTML = remainResult;
}

