const countdownElement = document.getElementById('countdwn');
const releaseInfo = document.getElementById('releaseInfo');

// Set the release date/time in the local timezone (CEST).
// July 30, 2026 at 18:00 CEST
const releaseDateLocal = new Date('2026-07-30T17:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = releaseDateLocal - now;

  if (diff <= 0) {
    countdownElement.textContent = 'RELEASED!';
    releaseInfo.textContent = `Released on local time: ${releaseDateLocal.toLocaleString()}`;
    clearInterval(countdownTimer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.textContent = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  releaseInfo.textContent = `Countdown to local release: ${releaseDateLocal.toLocaleString()}`;
}

updateCountdown();
const countdownTimer = setInterval(updateCountdown, 1000);
