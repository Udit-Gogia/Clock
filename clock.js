function setDate(){

    var date = new Date();
    var Seconds = date.getSeconds();
    var Minutes = date.getMinutes();
    var Hours = date.getHours();
    var DATE = date.getDate();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();

    console.log(day);
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

document.getElementById('hour').innerHTML = Hours;
document.getElementById('minute').innerHTML = Minutes;
document.getElementById('second').innerHTML = Seconds;
document.getElementById('day').innerHTML = days[day-1];
document.getElementById('date').innerHTML = DATE;
document.getElementById('month').innerHTML = months[month];
document.getElementById('year').innerHTML = year;

    // console.log(datee);
    // console.log(month);
    // console.log(year);
    // console.log(Hours);
    // console.log(Minutes);
    // console.log(Seconds);

}

setInterval(setDate,1000);