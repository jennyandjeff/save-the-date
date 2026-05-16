const countdown = document.querySelector("[data-countdown]");

if (countdown) {
  const targetDate = new Date(countdown.dataset.countdown).getTime();
  const daysNode = countdown.querySelector("[data-days]");
  const hoursNode = countdown.querySelector("[data-hours]");
  const minutesNode = countdown.querySelector("[data-minutes]");
  const secondsNode = countdown.querySelector("[data-seconds]");

  const pad = (value) => String(value).padStart(2, "0");

  const updateCountdown = () => {
    const distance = Math.max(targetDate - Date.now(), 0);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    daysNode.textContent = days;
    hoursNode.textContent = pad(hours);
    minutesNode.textContent = pad(minutes);
    secondsNode.textContent = pad(seconds);
  };

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}
