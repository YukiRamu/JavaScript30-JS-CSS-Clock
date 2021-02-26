const timer = setInterval(clockTick, 10);

function clockTick() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const min = now.getMinutes();
  const second = now.getSeconds();

  const clockHour = document.querySelector(".hour");
  const clockMin = document.querySelector(".min")
  const clockSecond = document.querySelector(".second")

  const degH = hour * (360 / 12) + min * (360 / 12 / 60) + 90;
  const degM = min * (360 / 60) + 90;
  const degS = second * (360 / 60) + 90;

  clockHour.style.transform = `rotate(${degH}deg)`;
  clockMin.style.transform = `rotate(${degM}deg)`;
  clockSecond.style.transform = `rotate(${degS}deg)`;
}
clockTick();
