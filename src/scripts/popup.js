import {enableScroll, disableScroll} from './scroll.js';

const popupButtonClose = document.querySelector('.popup__button-close')
const popupOverflow = document.querySelector('.popup__overflow')
const popupBox = document.querySelector('.popup__box')
const popup = document.querySelector('.popup')
const popupTitle = document.querySelector('.popup__title')
const academyButton = document.querySelector('.academy__button')
const presentButton = document.querySelector('.advantages__button')
const coachingButton = document.querySelector('.coaching__button')
const coachButton = document.querySelector('.coach__button')


function popupHandleClose(pop, overflow) {
  enableScroll()
  pop.classList.add('popup__hidden')
  overflow.classList.remove('overflow-active')
}

function popupHandleOpen(pop, overflow, e) {
  disableScroll()
  pop.classList.remove('popup__hidden')
  overflow.classList.add('overflow-active')
  if(e.classList.contains('advantages__wheel') || e.classList.contains('advantages__button') || e.classList.contains('advantages__wheel-content') || e.classList.contains('advantages__wheel-inner')) {
    popupTitle.textContent = 'Заполни форму и получи подарок!';
  } else {
    popupTitle.textContent = 'Запишитесь на консультацию';
  }
}

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

// сертификаты

const popupButtonCloseImg1 = document.querySelector('.popup-img1__button-close')
const popupOverflowImg1 = document.querySelector('.popup-img1__overflow')
const popupBoxImg1 = document.querySelector('.popup-img1__box')
const popupImg1 = document.querySelector('.popup-img1')
const founderLink = document.querySelector('.founder__link')

popupButtonCloseImg1.addEventListener('click', () => {
  popupHandleClose(popupImg1, popupOverflowImg1)
})
popupOverflowImg1.addEventListener('click', () => {
  popupHandleClose(popupImg1, popupOverflowImg1)
})
founderLink.addEventListener('click',  () => {
  popupHandleOpen(popupImg1, popupOverflowImg1)
})

const popupButtonCloseImg2 = document.querySelector('.popup-img2__button-close')
const popupOverflowImg2 = document.querySelector('.popup-img2__overflow')
const popupBoxImg2 = document.querySelector('.popup-img2__box')
const popupImg2 = document.querySelector('.popup-img2')
const formatLink = document.querySelector('.format__certificate')

popupButtonCloseImg2.addEventListener('click', () => {
  popupHandleClose(popupImg2, popupOverflowImg2)
})
popupOverflowImg2.addEventListener('click', () => {
  popupHandleClose(popupImg2, popupOverflowImg2)
})
formatLink.addEventListener('click',  () => {
  popupHandleOpen(popupImg2, popupOverflowImg2)
})
