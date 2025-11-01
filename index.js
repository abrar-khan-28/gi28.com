// Countdown Timer for Nov 7, 2025 12:00 PM
const launchDate = new Date("2025-11-07T12:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const gap = launchDate - now;

  let d = 0, h = 0, m = 0, s = 0;
  if (gap > 0) {
    d = Math.floor(gap / (1000 * 60 * 60 * 24));
    h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    s = Math.floor((gap % (1000 * 60)) / 1000);
  }

  document.getElementById('days').textContent = String(d).padStart(2, '0');
  document.getElementById('hours').textContent = String(h).padStart(2, '0');
  document.getElementById('minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);