const minutes = document.querySelector('.min');
const secEl =document.querySelector(".sec");
const hourEl = document.querySelector(".hour");

setInterval(() => {
    const date = new Date();
    const secDeg =date.getSeconds() / 60 * 360 - 90;
    const minDeg= date.getMinutes()/60*360-90;
    const hourDeg = date.getHours()/12*360-90;
    // secEl.style.transform= "rotate(${secDeg}deg)";
    secEl.setAttribute('style' , `transform:rotate(${secDeg}deg)`)
    minutes.setAttribute('style' , `transform:rotate(${minDeg}deg)`)
    hourEl.setAttribute('style' , `transform:rotate(${hourDeg}deg)`)
}, 1000);

