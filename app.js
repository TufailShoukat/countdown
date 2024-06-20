
//gethtml!!!
var getDays = document.getElementById("days")
var getHours = document.getElementById("hours")
var getMinutes = document.getElementById("minutes")
var getSeconds = document.getElementById("seconds")
///

var interval = setInterval(function () {
    var now = new Date();
    var YearDate = new Date("12/31/2024")
    
    // console.log("now==>", now)
    // console.log("yeardate==> ", YearDate);
     var diff = YearDate.getTime() - now.getTime();
    //simpleFinddate!!!

    var seconds = diff / 1000
    var minutes = diff / 1000 / 60
    var hours = diff / 1000 / 60 / 60
    var days = diff / 1000 / 60 / 60 / 24

    getDays.innerText = Math.round(days)
    getHours.innerText = Math.round(hours)
    getMinutes.innerText = Math.round(minutes)
    getSeconds.innerText = Math.round(seconds)
    //moretimefind & fuction
}, 1000)




