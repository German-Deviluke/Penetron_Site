const slogans = [
  "Не ссы пронесет,<br>  Защита бетона целый год.",
  "Природная мощь. Технологичная защита.",
  "Там, где стихия — там Пенетрон.",
  "Сила гор. Защита от воды. Надёжность навсегда.",
  "Пенетрон. Стойкость, проверенная природой."
];

let index = 0;
const sloganElement = document.getElementById("slogan");

function updateSlogan() {
  // Сначала скрываем слоган
  sloganElement.classList.remove("fade-in");
  sloganElement.style.opacity = 0;

  // Подождать, чтобы сбросить анимацию
  setTimeout(() => {
    index = (index + 1) % slogans.length;
    sloganElement.textContent = slogans[index];

    // Перезапустить анимацию
    sloganElement.classList.add("fade-in");
  }, 300);
}

// Запускать смену слогана каждые 5 секунд
setInterval(updateSlogan, 5000);