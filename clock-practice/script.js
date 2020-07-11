

function currentTime(){
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";

    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    day= updateTime(day);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday;
    let timeOut = setTimeout(function(){
        currentTime()
    }, 1000) ;

 
}       

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime();