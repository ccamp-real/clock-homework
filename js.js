const currentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let midday = "AM";
    midday = (hour <= 12) ? "AM" : "PM";
    hour = updateTime(hour);
    min =  updateTime(min);

    hour = hour % 12;
    hour = hour ? hour : 12;
    min = min < 10 ? min : min;

    document.getElementById("hour1").innerHTML = hour;
    document.getElementById("minutes1").innerHTML = min;
    document.getElementById("day").innerHTML = midday;
    setTimeout(currentTime,1000);

}
console.log(currentTime);

const updateTime =(i) => {
    if (i < 10){
        return "0" + i;
    }
    else{
        return i;
    }
}

currentTime();