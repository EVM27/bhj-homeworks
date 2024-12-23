
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

const modal = document.getElementById("subscribe-modal");
const closeModalButton = modal.querySelector(".modal__close");

if (!getCookie("modalClosed")) {
    modal.classList.add("modal_active");
}

closeModalButton.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    setCookie("modalClosed", "true", 365); 
});
