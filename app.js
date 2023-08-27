const dayEl = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondeEl = document.getElementById('secondes');

const date = new Date();

const dataPased = new Date("Jan 1, 2024 00:00:00").getTime();

getTime();

function getTime() {
    const timeNow = new Date().getTime();
    // console.log(timeNow, dataPased);
    const difference = dataPased - timeNow;
    // console.log(difference);

    let seconde = 1000;
    let minute = seconde * 60;
    let hour = minute * 60;
    let day = hour * 24;
    // console.log(seconde, minute, hour, day);

    let d = Math.floor(difference / day);
    let h = Math.floor((difference % day) / hour);
    let m = Math.floor((difference % hour) / minute);
    let s = Math.floor((difference % minute) / seconde);
    console.log(d, h, m, s);

    dayEl.innerText = d < 10 ? "0" + d : d;
    hourEl.innerText = h < 10 ? "0" + h : h;
    minuteEl.innerText = m < 10 ? "0" + m : m;
    secondeEl.innerText = s < 10 ? "0" + s : s;

    setTimeout(getTime, 1000);
}



