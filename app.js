var min = 0;
var sec = 0;
var msec = 0;

var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");

function timer(){
    msec++;
    msecheading.innerHTML = msec;
    if(msec >= 100)
    {
        sec++;
        secheading.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60)
    {
        min++;
        sec = 0;
        minheading.innerHTML = min;
    }
}


function start(){
    interval = setInterval(timer,10);
    var strtbtn = document.getElementById("start");
    strtbtn.disabled = true;
    var pusebtn = document.getElementById("pause");
    pusebtn.disabled = false;

}

function pause(){

    clearInterval(interval);
    var pusebtn = document.getElementById("pause");
    pusebtn.disabled = true;
    var strtbtn = document.getElementById("start");
    strtbtn.disabled = false;
    
}

function reset(){

    min = 0;
    sec = 0;
    msec= 0;
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msecheading.innerHTML = msec;
    pause();
    var pusebtn = document.getElementById("pause");
    pusebtn.disabled = false;

}

function lap(){

    var name = prompt("Your Name");

    var lapas = document.getElementById("laps");
    lapas.innerHTML = name + "  " +min + "  :" +   "  "  + sec + "  : " +  "   "  + msec + "\n" ;
    
    

}
