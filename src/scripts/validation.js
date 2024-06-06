const justValidate = require("./just-validate.min");
// const Inputmask = require("./inputmask.min");
// const submitButton = document.querySelector(".form__button");

let selector = document.querySelector('#phone')
let im = new Inputmask('+373 99999999')

im.mask(selector)

let validation = new justValidate('form')
validation.addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Введите имя!'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум 2 символа!'
  },
])
  .addField('#phone', [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length > 0)
      },
      errorMessage: 'Введите телефон'
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length === 8)
      },
      errorMessage: 'Введите телефон полностью'
    }
  ])
  .addField('#select', [
    {
      validator: (value) => {
        const option = document.querySelector('#option-false');
        console.log(option.value)
        return Boolean(value !== option.value)
      },
      errorMessage: 'Выберите цель'
    }
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Введите почту!'
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный адрес почты!'
    },
  ]).onSuccess(async function () {
    let data = {
      name: document.getElementById("name").value,
      tel: selector.inputmask.unmaskedvalue(),
      email: document.getElementById("email").value,

    }

    let response = await fetch("../mail.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })

    let result = await response.text()

    alert(result)
  })

  const nameInput = document.querySelector("#name");
  const phoneInput = document.querySelector("#phone");
  const emailInput = document.querySelector("#email");
  const submitButton = document.querySelector(".form__button");
  const optionSelect = document.querySelector("#option");

  function validateForm() {
    // Получаем ссылки на поля формы
    console.log('valid')
    // Проверяем, пустые ли поля
    if (nameInput.value.trim() === '' ||
    phoneInput.value.trim() === '' ||
    emailInput.value.trim() === '' ||
    optionSelect.value.trim() === '') {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
  }
  nameInput.addEventListener("input", validateForm);
  phoneInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  optionSelect.addEventListener("input", validateForm);
  // Вызываем функцию проверки формы при загрузке страницы
  validateForm();
