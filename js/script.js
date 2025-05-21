const slogans = [
  "Пенетрон — гидроизоляция с характером.",
  "С нами бетон живёт дольше.",
  "Пенетрон. Укрепляем бетон. Поддерживаем долговечность.",
  "С Пенетроном — сухо, где угодно.",
  "Пенетрон. Стойкость, проверенная природой."
];

let index = 0;
const sloganElement = document.getElementById("slogan");

function updateSlogan() {
  sloganElement.classList.remove("fade-in");
  sloganElement.style.opacity = 1;

  setTimeout(() => {
    index = (index + 1) % slogans.length;
    sloganElement.innerHTML = slogans[index];
    sloganElement.classList.add("fade-in");
    sloganElement.style.opacity = 2;
  }, 300);
}

setInterval(updateSlogan, 5000);
