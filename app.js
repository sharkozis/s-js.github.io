function firstFunction(){
    var ask = prompt('select your number between 1 to 10');
    if (ask>5){
        document.getElementById('p').innerHTML='সেজুতি আপু তুমি জোস';
    }
    else if(ask == 5){
        document.getElementById('p').innerHTML='সেজুতি আপু তুমি কিছু না';
    }
    else{
        document.getElementById('p').innerHTML='সেজুতি আপু তুমি অনেক পচা';
    }
}
