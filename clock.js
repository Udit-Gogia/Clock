function setDate(){

    var date = new Date();
    var Seconds = date.getSeconds();
    var Minutes = date.getMinutes();
    var Hours = date.getHours();
    var DATE = date.getDate();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const SecondsDegree = 6 * Seconds + 90;
    const MinuteDegree = 6 * Minutes + 90;
    const HourDegree = 30 * Hours + Minutes/2 + 90;

    Hours = Hours<10? '0'+Hours : Hours;
    Minutes = Minutes<10? '0'+Minutes : Minutes;
    Seconds = Seconds<10? '0'+Seconds : Seconds;

document.getElementById('hour').innerHTML = Hours;
document.getElementById('minute').innerHTML = Minutes;
document.getElementById('second').innerHTML = Seconds;
document.getElementById('day').innerHTML = days[day-1];
document.getElementById('date').innerHTML = DATE;
document.getElementById('month').innerHTML = months[month];
document.getElementById('year').innerHTML = year;
document.getElementById('second-hand').style.transform = `rotate(${SecondsDegree}deg)`;
document.getElementById('minute-hand').style.transform = `rotate(${MinuteDegree}deg)`;
document.getElementById('hour-hand').style.transform = `rotate(${HourDegree}deg)`;

console.log(SecondsDegree);



}

setInterval(setDate,1000);

