import {enableScroll, disableScroll} from './scroll.js';

const burgerToggle = document.querySelector('#menu-toggle')
const burgerButton = document.querySelector('.header__button-container')
const burgerOverflow = document.querySelector('.header__overflow')
const navigation = document.querySelector('.header__nav-box')
const contacts = document.querySelector('.header__contacts')

function hendleOpenMenu() {
  if(!burgerToggle.checked) {
    burgerOverflow.classList.remove('overflow_hidden')
    navigation.classList.add('header__nav-box_active')
    contacts.classList.add('header__contacts_active')
    disableScroll();
  } else {
    enableScroll()
    burgerOverflow.classList.add('overflow_hidden')
    navigation.classList.remove('header__nav-box_active')
    contacts.classList.remove('header__contacts_active')
  }
}

const anchorMenu = document.querySelector('.header__nav-box');

anchorMenu.addEventListener('click', function(event) {
  // Проверяем, что клик был на ссылке
  if (event.target.tagName === 'A') {
    // Получаем атрибут href и проверяем, что это якорная ссылка
    const href = event.target.getAttribute('href');
    if (href.charAt(0) === '#') {
      // Получаем элемент на который ссылается якорь
      const targetElement = document.querySelector(href);
      if (targetElement) {
        // Прокручиваем страницу к этому элементу
        enableScroll()
        targetElement.scrollIntoView({
          behavior: 'smooth' // Плавная прокрутка
        });
        // Закрываем бургерное меню, если оно открыто
        burgerToggle.checked = false;
        burgerOverflow.classList.add('overflow_hidden')
        navigation.classList.remove('header__nav-box_active')
        contacts.classList.remove('header__contacts_active')
        // Предотвращаем стандартное действие якорной ссылки
        event.preventDefault();
      }
    }
  }
});

burgerButton.addEventListener('click', hendleOpenMenu)
