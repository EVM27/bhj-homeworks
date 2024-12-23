

document.addEventListener("DOMContentLoaded", () => {
    const signinForm = document.getElementById("signin__form");
    const signinBlock = document.getElementById("signin");
    const welcomeBlock = document.getElementById("welcome");
    const userIdSpan = document.getElementById("user_id");

    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
        displayWelcome(storedUserId);
    }
    signinForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(signinForm);
        const loginData = {
            login: formData.get("login"),
            password: formData.get("password"),
        };

        try {
            const response = await fetch(signinForm.action, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            const result = await response.json();

            if (result.success) {
                localStorage.setItem("user_id", result.user_id);
                displayWelcome(result.user_id);
            } else {
                alert("Неверный логин/пароль");
            }
        } catch (error) {
            console.error("Ошибка при авторизации:", error);
            alert("Произошла ошибка. Попробуйте снова.");
        }
    });
    function displayWelcome(userId) {
        signinBlock.classList.remove("signin_active");
        welcomeBlock.classList.add("welcome_active");
        userIdSpan.textContent = userId;
    }
});
