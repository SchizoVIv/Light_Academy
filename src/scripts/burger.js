import { enableScroll, disableScroll } from './scroll.js';

const burgerToggle = document.querySelector('#menu-toggle')
const burgerButton = document.querySelector('.header__button-container')
const burgerOverflow = document.querySelector('.header__overflow')
const navigation = document.querySelector('.header__nav-box')
const contacts = document.querySelector('.header__contacts')
const anchorMenu = document.querySelector('.header__nav-box');

function hendleOpenMenu() {
  if (!burgerToggle.checked) {
    burgerOverflow.classList.remove('overflow-hidden')
    navigation.classList.add('header__nav-box_active')
    contacts.classList.add('header__contacts_active')
    disableScroll();
  } else {
    enableScroll()
    burgerOverflow.classList.add('overflow-hidden')
    navigation.classList.remove('header__nav-box_active')
    contacts.classList.remove('header__contacts_active')
  }
}

anchorMenu.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    const href = event.target.getAttribute('href');
    if (href.charAt(0) === '#') {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        enableScroll()
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        burgerToggle.checked = false;
        burgerOverflow.classList.add('overflow-hidden')
        navigation.classList.remove('header__nav-box_active')
        contacts.classList.remove('header__contacts_active')
        event.preventDefault();
      }
    }
  }
});

burgerButton.addEventListener('click', hendleOpenMenu)
