import { enableScroll, disableScroll } from './scroll.js';

const popupButtonClose = document.querySelector('.popup__button-close')
const popupOverflow = document.querySelector('.popup__overflow')
const popup = document.querySelector('.popup')
const popupTitle = document.querySelector('.popup__title')
const academyButton = document.querySelector('.academy__button')
const presentButton = document.querySelector('.advantages__button')
const coachingButton = document.querySelector('.coaching__button')
const coachButton = document.querySelector('.coach__button')


export function popupHandleClose(pop, overflow) {
  enableScroll()
  pop.classList.add('popup-hidden')
  overflow.classList.remove('overflow-active')
}

export function popupHandleOpen(pop, overflow, e) {
  disableScroll()
  pop.classList.remove('popup-hidden')
  overflow.classList.add('overflow-active')
  if (!e.classList.contains('founder__link') && !e.classList.contains('format__certificate')) {
    if (e.classList.contains('advantages__wheel') || e.classList.contains('advantages__button') || e.classList.contains('advantages__wheel-content') || e.classList.contains('advantages__wheel-inner')) {
      popupTitle.textContent = 'Заполни форму и получи подарок!';
      pop.querySelector('.form__option_present').selected = true;
    } else {
      popupTitle.textContent = 'Запишитесь на консультацию';
      pop.querySelector('.form__option_false').selected = true;
    }
  }
}



// сертификаты

const popupImg1 = document.querySelector('.popup-img1')
const popupButtonCloseImg1List = popupImg1.querySelectorAll('.popup-img1__button-close')
const popupOverflowImg1 = document.querySelector('.popup-img1__overflow')
const founderLink = document.querySelector('.founder__link')

const popupButtonCloseImg2 = document.querySelector('.popup-img2__button-close')
const popupOverflowImg2 = document.querySelector('.popup-img2__overflow')
const popupImg2 = document.querySelector('.popup-img2')
const formatLink = document.querySelector('.format__certificate')

popupButtonCloseImg1List.forEach((el) => {
  el.addEventListener('click', () => {
    popupHandleClose(popupImg1, popupOverflowImg1)
  })
})
popupOverflowImg1.addEventListener('click', () => {
  popupHandleClose(popupImg1, popupOverflowImg1)
})
founderLink.addEventListener('click', (e) => {
  popupHandleOpen(popupImg1, popupOverflowImg1, e.target)
})

popupButtonCloseImg2.addEventListener('click', () => {
  popupHandleClose(popupImg2, popupOverflowImg2)
})
popupOverflowImg2.addEventListener('click', () => {
  popupHandleClose(popupImg2, popupOverflowImg2)
})
formatLink.addEventListener('click', (e) => {
  popupHandleOpen(popupImg2, popupOverflowImg2, e.target)
})

popupButtonClose.addEventListener('click', () => {
  popupHandleClose(popup, popupOverflow,)
})
popupOverflow.addEventListener('click', () => {
  popupHandleClose(popup, popupOverflow)
})
academyButton.addEventListener('click', (e) => {
  popupHandleOpen(popup, popupOverflow, e.target)
})
presentButton.addEventListener('click', (e) => {
  popupHandleOpen(popup, popupOverflow, e.target)
})
coachingButton.addEventListener('click', (e) => {
  popupHandleOpen(popup, popupOverflow, e.target)
})
coachButton.addEventListener('click', (e) => {
  popupHandleOpen(popup, popupOverflow, e.target)
})

