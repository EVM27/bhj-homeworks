document.addEventListener("DOMContentLoaded", () => {
    const pollTitle = document.getElementById("poll__title"); 
    const pollAnswers = document.getElementById("poll__answers"); 
    fetch("https://students.netoservices.ru/nestjs-backend/poll")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        pollTitle.textContent = data.data.title;
        data.data.answers.forEach((answer) => {
          const button = document.createElement("button");
          button.classList.add("poll__answer");
          button.textContent = answer;
          button.addEventListener("click", () => {
            alert("Спасибо, ваш голос засчитан!");
          });
  
          pollAnswers.appendChild(button);
        });
      })
      .catch((error) => {
        console.error("Ошибка при загрузке опроса:", error);
        pollTitle.textContent = "Не удалось загрузить данные опроса.";
      });
  });
  