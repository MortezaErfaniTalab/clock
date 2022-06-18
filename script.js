const clock = document.createElement("p");
document.querySelector(".clock").appendChild(clock);

setInterval(show, 1000);

function show() {
  let nowTime = new Date();
  let h = nowTime.getHours();
  let m = nowTime.getMinutes();
  let s = nowTime.getSeconds();

  let session = h < 12 ? "AM" : "PM";

  if (h === 0) {
    h = 12
  } else if (h > 12) {
    h = h - 12
  }

  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  let showTime = `${h}:${m}:${s} ${session}`;
  clock.innerHTML = showTime;
}
