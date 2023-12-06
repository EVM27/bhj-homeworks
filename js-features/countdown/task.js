
let timeLeft = 59;
const timerDisplay = document.getElementById("timer");
function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}
timerDisplay.textContent = formatTime(timeLeft);
const countdown = setInterval(() => {
    timerDisplay.textContent = formatTime(timeLeft);
    if (timeLeft <= 0) {
        clearInterval(countdown);
        alert("Вы победили в конкурсе!");
    }
    timeLeft--;
}, 1000);

