function validateForm() {
  // Получаем ссылки на поля формы
  const nameInput = document.querySelector("#name");
  const phoneInput = document.querySelector("#phone");
  const emailInput = document.querySelector("#email");
  const submitButton = document.querySelector(".form__button");
  const optionSelect = document.querySelector("#option");

  // Проверяем, пустые ли поля
  if (nameInput.value.trim() === '' || phoneInput.value.trim() === '' || emailInput.value.trim() === '' || optionSelect.value.trim() === '') {
      // Если хотя бы одно поле пусто, блокируем кнопку отправки формы
      submitButton.disabled = true;
  } else {
      // Если все поля заполнены, разблокируем кнопку отправки формы
      submitButton.disabled = false;
  }
}

// Находим все поля формы
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const optionSelect = document.querySelector("#option");

// Навешиваем обработчик события input на каждое поле формы
nameInput.addEventListener("input", validateForm);
phoneInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
optionSelect.addEventListener("input", validateForm);
// Вызываем функцию проверки формы при загрузке страницы
validateForm();
