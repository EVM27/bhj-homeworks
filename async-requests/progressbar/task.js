document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const progress = document.getElementById("progress");
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
  
      const fileInput = document.getElementById("file"); 
      const file = fileInput.files[0]; 
      if (!file) {
        alert("Пожалуйста, выберите файл для загрузки.");
        return;
      }
  
      const formData = new FormData();
      formData.append("file", file); 
  
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentage = (event.loaded / event.total).toFixed(2);
          progress.value = percentage; 
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          alert("Файл успешно загружен!");
        } else {
          alert("Ошибка при загрузке файла.");
        }
      };
      xhr.onerror = () => {
        alert("Произошла ошибка при отправке запроса.");
      };
      xhr.send(formData);
    });
  });
  