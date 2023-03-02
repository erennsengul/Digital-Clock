function digitalClock(){

const time = new Date();
    let hour = time.getHours(),
        minute = time.getMinutes(),
        second = time.getSeconds();

(hour<10) ? document.getElementById('hour').innerText="0"+hour :  document.getElementById('hour').innerText=hour;    
(minute<10) ? document.getElementById('minute').innerText="0"+minute : document.getElementById('minute').innerText=minute ;    
(second<10) ? document.getElementById('second').innerText="0"+second : document.getElementById('second').innerText=second; 


    }

const getTime = new Date();
let dayName = getTime.getDay(),
day = getTime.getDate(),
year = getTime.getFullYear();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];


(day<10) ? document.getElementById('date').innerText = `0${day} ${days[dayName]} ${year}`: document.getElementById('date').innerText = `${day} ${days[dayName]} ${year}`;   
setInterval(function(){digitalClock();}, 1000);






