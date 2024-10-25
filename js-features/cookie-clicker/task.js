
document.addEventListener("DOMContentLoaded", function() {
    const clickCounter = document.getElementById("clicker__counter");
    const cookie = document.getElementById("cookie");
    let count = 0;
    cookie.onclick = function() {
        count++;
        clickCounter.textContent = count;
        if (cookie.width === 200) {
            cookie.width = 250;
        } else {
            cookie.width = 200;
        }
    };
});
.

