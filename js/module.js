import { futureDay, times } from "./variable.js";
const svgContainer = document.querySelector("#svg");
const svgContainer1 = document.querySelector("#svg1");
const svgContainer2 = document.querySelector("#svg2")
const newYear = document.querySelector(".newyear");
const audioPlay = document.querySelector("audio");
console.log(audioPlay)
function remainingTime() {
  const today = new Date().getTime();
  const timeleft = futureDay - today;
  const oneSecond = 1000;
  const oneMinute = 1000 * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  let days = Math.floor(timeleft / oneDay); // caculate the days
  let hours = Math.floor((timeleft % oneDay) / oneHour); // caculate the hours
  let minutes = Math.floor((timeleft % oneHour) / oneMinute); // caculate the minutes
  let seconds = Math.floor((timeleft % oneMinute) / oneSecond); // caculate the seconds
  const values = [days, hours, minutes, seconds];
  function format(time) {
    if (time < 10) {
      return (time = `0${time}`);
    }
    return time;
  }
  times.forEach((time, index) => {
    time.innerHTML = format(values[index]);
  });
  if (timeleft < 0) {
    times.forEach(time => {
        time.innerHTML = "00";
    })
    audioPlay.play();
    clearInterval(countDown);
    const countDownTitle = document.createElement("h2");
    const textNode = document.createTextNode("Happy New Year");
    countDownTitle.appendChild(textNode)
    countDownTitle.classList.add("countdown-title");
    newYear.appendChild(countDownTitle)
    setInterval(animItem.goToAndPlay(0, true), 2350);
    setInterval(newAnimeItem.goToAndPlay(0, true), 2950);
    setInterval(fireworkAnimation.goToAndPlay(0,true),2500);
    setInterval(() => {
      svgContainer.style.top = `${Math.floor(Math.random() * 10)}%`;
      svgContainer.style.left = `${Math.floor(Math.random() * 30)}%`;
      svgContainer1.style.top = `${Math.floor(Math.random() * 15)}%`;
      svgContainer1.style.right = `${Math.floor(Math.random() * 30)}%`;
      svgContainer2.style.left = `${Math.floor(Math.random() * 80)}%`;
      svgContainer2.style.top = `${Math.floor(Math.random() * 50)}%`;
    }, 2500);
  }
}
const countDown = setInterval(remainingTime, 1000);

const animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: "svg",
  loop: true,
  autoplay: false,
  path: "https://assets10.lottiefiles.com/private_files/lf30_rjuv1b.json",
});
const newAnimeItem = bodymovin.loadAnimation({
  wrapper: svgContainer1,
  animType: "svg",
  loop: true,
  autoplay: false,
  path: "https://assets4.lottiefiles.com/datafiles/Tj3Hd1X74Once2j/data.json",
});
const fireworkAnimation = bodymovin.loadAnimation({
  wrapper:svgContainer2,
  animType: "svg",
  loop: true,
  autoplay: false,
  path:"https://assets7.lottiefiles.com/datafiles/068H91NVUJLGN4p/data.json",
})

