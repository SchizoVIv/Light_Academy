import {popupHandleClose, popupHandleOpen} from './popup.js'

const popupButtonCloseMsg = document.querySelector('.popup-msg__button-close')
const popupOverflowMsg = document.querySelector('.popup-msg__overflow')
const popupMsg = document.querySelector('.popup-msg')
const formButton = document.querySelector('.form__button')

popupButtonCloseMsg.addEventListener('click', () => {
  popupHandleClose(popupMsg, popupOverflowMsg)
})
popupOverflowMsg.addEventListener('click', () => {
  popupHandleClose(popupMsg, popupOverflowMsg)
})

const formElement = document.querySelector('.form');

const formInput = formElement.querySelector('.form__input');
// const formError = formElement.querySelector(`.${formInput.id}-error`);
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  console.log(inputElement.name)
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

function isErrorValid(inputElement) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else if(inputElement.validity.typeMismatch) {
    inputElement.setCustomValidity('Некорректный адрес электронной почты.');
  } else {
    inputElement.setCustomValidity("");
  }
}
const isValid = (formElement, inputElement) => {
  isErrorValid(inputElement)

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }

  if(inputElement.name === 'option') {
    const option = formElement.querySelector('.form__option_false');
    if(inputElement.value === option.value) {
      showInputError(formElement, inputElement, 'Выберите свою цель.');
    } else {
      hideInputError(formElement, inputElement);
    }
  }
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {

    if(inputElement.name === 'option') {
      const option = formElement.querySelector('.form__option_false');
      if(inputElement.value === option.value) {
        return true
      }
    }
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add('form__submit_inactive');
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('form__submit_inactive');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));

  const buttonElement = formElement.querySelector('.form__button');
  toggleButtonState(inputList, buttonElement);

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage(inputList);
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
      toggleButtonState(inputList, buttonElement);
    });
  });

};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));

  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

// Вызовем функцию
enableValidation();

const sendMessage = (inputList) => {
  let data = {
    name: inputList[0].value,
    tel: inputList[1].value,
    email: inputList[2].value,
    orientation: inputList[3].selectedOptions[0].textContent,
  }
  fetch('../mail.php', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
  .then(response => {
    if (response.ok) {
      console.log('Сообщение успешно отправлено');
      if(inputList[3].selectedOptions[0].value === 'present') {
        window.location.href = 'https://t.me/eoalight/376';
      }
      popupHandleOpen(popupMsg, popupOverflowMsg)
      formElement.reset();
    } else {
      console.error('Ошибка при отправке сообщения');
    }
  })
  .catch(error => console.error('Ошибка при отправке сообщения:', error));
};


