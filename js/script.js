
  const slogans = [
    "Не ссы пронесет,<br>Защита бетона целый год.",
    "Природная мощь. Технологичная защита.",
    "Там, где стихия — там Пенетрон.",
    "Сила гор. Защита от воды. Надёжность навсегда.",
    "Пенетрон. Стойкость, проверенная природой."
  ];

  let index = 0;
  const sloganElement = document.getElementById("slogan");

  function updateSlogan() {
    sloganElement.classList.remove("fade-in");
    sloganElement.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % slogans.length;
      sloganElement.innerHTML = slogans[index];
      sloganElement.classList.add("fade-in");
      sloganElement.style.opacity = 1;
    }, 300);
  }

  setInterval(updateSlogan, 5000);
