document.addEventListener('DOMContentLoaded', function () {
let germanPidor = document.getElementById('button');

germanPidor.addEventListener('click', function(event) {
  let question = prompt('Герман, ты Пидор?');
  console.log('Ответ:', question);
  question = question ? question.trim().toLowerCase() : "";
  if (question === "да") {
    alert('Я и не сомневался');
    return
  }
  if (question === "нет" || question === "не") {
    alert('Ответ неверный, попробуй еще раз');
    return
  }
  else {
    alert('Скажи да или нет')
    return
  }
})
})