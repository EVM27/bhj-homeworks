document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader"); 
    const itemsContainer = document.getElementById("items"); 
    fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const valutes = data.response.Valute;
        loader.classList.remove("loader_active");
        for (const key in valutes) {
          const valute = valutes[key];
          const item = document.createElement("div");
          item.classList.add("item");
  
          item.innerHTML = `
            <div class="item__code">${valute.CharCode}</div>
            <div class="item__value">${valute.Value.toFixed(2)}</div>
            <div class="item__currency">руб.</div>
          `;
  
          itemsContainer.appendChild(item);
        }
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
        loader.classList.remove("loader_active");
        itemsContainer.innerHTML = "<p>Не удалось загрузить данные о валютах.</p>";
      });
  });
  