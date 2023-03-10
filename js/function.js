
function count() {
  let now = new Date();
  let target = new Date(now.getFullYear(), now.getMonth() + 1, 0, '23', '59', '59');
  let gap = target - now;

  let gapDate = Math.floor((gap / (1000 * 60 * 60 * 24)))
  let gapHour = Math.floor((gap / (1000 * 60 * 60)) % 24)
  let gapMinute = Math.floor(gap / (1000 * 60) % 60)
  let gapSecond = Math.floor(gap / (1000) % 60)

  document.getElementById('date').textContent = gapDate;
  document.getElementById('hour').textContent = gapHour;
  document.getElementById('minute').textContent = gapMinute;
  document.getElementById('second').textContent = gapSecond;
}

setInterval(() => {
  count();
}, 1000);

