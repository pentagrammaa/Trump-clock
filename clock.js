/*jslint browser:true */
/*jslint esnext: true */

function updateClock() {
    const month_array = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const day_array = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var now_time = new Date();

    /****************/
    /*   TIME NOW   */
    /****************/
    
    let my_hours = now_time.getHours();
    let my_minutes = now_time.getMinutes();
    let my_seconds = now_time.getSeconds();
    
    if (my_seconds < 10) {
        my_seconds = "0" + my_seconds;
    }
    
    if (my_minutes < 10) {
        my_minutes = "0" + my_minutes;
    }
    
    let am_pm = "a.m.";
    if (my_hours>12) {
        am_pm = "p.m.";
        my_hours -= 12;
    }
    
    let my_time = my_hours+":"+my_minutes+":"+my_seconds+" "+am_pm;
    document.getElementById("time_of_day").innerHTML = my_time;

    /**************/
    /*  DATE NOW  */
    /**************/
    
    document.getElementById("day_of_the_week").innerHTML = day_array[now_time.getDay()]; 
    document.getElementById("month_right_now").innerHTML = month_array[now_time.getMonth()]+" "+now_time.getDate();    
    document.getElementById("year_now").innerHTML = now_time.getFullYear();

    /*******************************/
    /*  TRUMP TIME AND DATE LEFT   */
    /*******************************/
    
    let inauguration_time = new Date("January 20, 2021 9:00:00");
    let inauguration_time_msec = inauguration_time.getTime();
    let now_time_msec = now_time.getTime();
    let msec_difference = inauguration_time_msec - now_time_msec;

    let Trump_days_left = parseInt(msec_difference/(1000*60*60*24));
    let Trump_hours_left = parseInt((msec_difference-Trump_days_left*24*60*60*1000)/(1000*60*60));
    let Trump_minutes_left = parseInt((msec_difference-Trump_days_left*24*60*60*1000-Trump_hours_left*60*60*1000)/(60*1000));
    let Trump_seconds_left = parseInt((msec_difference-Trump_days_left*24*60*60*1000-Trump_hours_left*60*60*1000-Trump_minutes_left*60*1000)/(1000));
        
    document.getElementById("Trump_days").innerHTML=Trump_days_left + " days";
    document.getElementById("Trump_hours").innerHTML=Trump_hours_left + " hours"; 
    document.getElementById("Trump_minutes").innerHTML=Trump_minutes_left + " minutes";     
    document.getElementById("Trump_seconds").innerHTML=Trump_seconds_left + " seconds";  
    
    setTimeout(updateClock, 1000);
}

updateClock();