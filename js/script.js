const countDownDate = new Date("sep 20, 2024 00:00:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const duration = countDownDate - now;
  
  if (duration < 00) {
    clearInterval(interval);
    updateDuration(0);
    return;
  }
  
  updateDuration(duration);
  }, 1000);

function updateDuration(duration)  {
  days = Math.floor(duration / (1000 * 60 * 60 * 24));
  hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((duration % (1000 * 60)) / 1000);
  
  
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
