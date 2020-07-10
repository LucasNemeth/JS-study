

function currentTime(){
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    day= updateTime(day);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
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