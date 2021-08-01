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
    let user2 = parseInt(prompt('সংখ্যাটি আবারো নিন এবং মনে মনে সংখ্যা দুটি যোগ করুন'));
   
    if(user2 == user1){
        alert('এখন আমরা আপনাকে অতিরিক্ত ১০০ দিচ্ছি। এটি আপনার মনে লুকানো সংখ্যাগুলির সাথে যোগ করুন এবং মনে রাখুন। ভুলবেন না প্লিজ। মেজাজ খারাপ আছে');
        let user3 = 100;
        let userTotal = user1+user2+user3;
        let division = alert('এখন আমাদের দেয়া ১০০ এর সাথে আপনার সংখ্যাগুলির যোগের পরে মোট সংখ্যাকে দুই দিয়ে ভাগ করুন এবং ভাগফল মনে রাখুন।');
        let minus = alert("এইবার গেমের শুরুতে একই সংখ্যা দুইবার নেয়ার অপরাধে সেই সংখ্যাটা বিয়োগ করুন মনে মনে। এটার কোনো দরকার নাই। আরে করেন ভাই নাইলে কোড মিলবো না।");
        document.getElementById('p').innerHTML = 'লন মামা আপনের উত্তর হইলো ' + 50;

    }else{
        document.getElementById('p').innerHTML = 'অই মিয়া ভুল সংখ্যা দিসেন কেন হ্যা? ঠিক কইরা দেন।';
    }
    
 
}


