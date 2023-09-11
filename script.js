const d = new Date();
let hour = d.getHours().toString();
let min = d.getMinutes().toString();

console.log(hour)

console.log(min)

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = fixHour(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML =  h + ":" + m;
    document.getElementById("second").innerHTML =  s;

    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function fixHour(i){
    if(i > 12){
        return i - 12;
    }
    else {
        return i;
    }
}

startTime();
