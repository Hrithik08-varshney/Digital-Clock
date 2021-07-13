const date=document.querySelector('.date');
const month=document.querySelector('.month');
const year=document.querySelector('.year');
const hrs=document.querySelector('.hrs');
const min=document.querySelector('.min');
const sec=document.querySelector('.sec');
const day=document.querySelector('.day');

const start_time=()=>{
    const today=new Date;
    date.innerHTML=`${today.getDate()}`;
    month.innerHTML=`${today.getMonth()}`;
    year.innerHTML=`${today.getFullYear()}`;
    hrs.innerHTML=`${today.getHours()}`;
    min.innerHTML=`${today.getMinutes()}`;
    sec.innerHTML=`${today.getSeconds()}`;
    var d=today.getDay();
    var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
    day.innerHTML=`${weekday[d]}`;
    setTimeout(start_time,1000);
}
window.addEventListener("load",start_time);