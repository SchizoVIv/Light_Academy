import {
  LAST_SCROLL,
  DEFAULT_OFFSET,
  HEIGHT_START_ANIM,
  SCREEN_WIDTH,
  X,
  Y,
  MAX_Y
} from "../utils/constants.js"
const header = document.querySelector('.header')
const headerLogo = document.querySelector('.header__logo')
const requestsDisk = document.querySelector('.requests__disk')
const requestsCard = document.querySelector('.requests__card:last-child')

const scrollPosition = () => window.pageXOffset || document.documentElement.scrollTop
const conteinHide = () => header.classList.contains('header_hide')
const conteinBorder = () => header.classList.contains('header_border')

function handleResize() {
  SCREEN_WIDTH = window.innerWidth;
}
handleResize();

document.addEventListener('mousemove', function (event) {
  X = event.clientX;
  Y = event.clientY;

  // показать header после стандартной позиции при наведении мыши
  if (Y < MAX_Y && scrollPosition() > DEFAULT_OFFSET && conteinHide() && SCREEN_WIDTH > 991) {
    header.classList.remove('header_hide')
    header.classList.add('header_border')
    headerLogo.classList.add('header__logo_size')
  }
  // скрыть header после стандартной позиции при наведении мыши
  if (Y > MAX_Y && scrollPosition() > DEFAULT_OFFSET && !conteinHide() && SCREEN_WIDTH > 991) {
    header.classList.add('header_hide')
    headerLogo.classList.add('header__logo_size')
    header.classList.remove('header_border')
  }
});



window.addEventListener('scroll', () => {
  // мобильная версия показывать header при скроле
  if (scrollPosition() < LAST_SCROLL
    && conteinHide()
    && SCREEN_WIDTH < 992
    && scrollPosition() > 301
    && LAST_SCROLL > 301
  ) {
    header.classList.remove('header_hide')
    header.classList.remove('header_border')
    headerLogo.classList.add('header__logo_hide')
  }
  if (scrollPosition() < LAST_SCROLL
    && !conteinHide()
    && SCREEN_WIDTH < 992
    && scrollPosition() < 301
    && LAST_SCROLL < 301
  ) {
    headerLogo.classList.remove('header__logo_size')
    header.classList.remove('header_hide')
    header.classList.remove('header_border')
    headerLogo.classList.remove('header__logo_hide')
  }


  // показать header в базовой позиции при скроле
  if (scrollPosition() < LAST_SCROLL
    && scrollPosition() < DEFAULT_OFFSET
    && LAST_SCROLL < 201
    && conteinHide()) {
    header.classList.remove('header_hide')
    headerLogo.classList.remove('header__logo_hide')
    headerLogo.classList.remove('header__logo_size')
    header.classList.remove('header_border')
  }

  // убрать header после базовой позиции при скроле
  if (scrollPosition() > LAST_SCROLL && !conteinHide() && scrollPosition() > DEFAULT_OFFSET) {
    header.classList.add('header_hide')
    header.classList.remove('header_border')
  }

  // анимация диска промежутки

  if (SCREEN_WIDTH > 1700 && scrollPosition() > 2099 && scrollPosition() < 2700) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if (SCREEN_WIDTH < 1701 && scrollPosition() > 1920 && scrollPosition() < 2450) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if (SCREEN_WIDTH < 1500 && scrollPosition() > 1720 && scrollPosition() < 2120) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if (SCREEN_WIDTH < 1200 && scrollPosition() > 1600 && scrollPosition() < 1800) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if (SCREEN_WIDTH < 712 && scrollPosition() > 2200 && scrollPosition() < 2400) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if (SCREEN_WIDTH < 500 && scrollPosition() > 2350 && scrollPosition() < 2500) {
    requestsDisk.classList.remove('requests__disk_anim')
    requestsCard.classList.remove('requests__card_anim')
  }

  LAST_SCROLL = scrollPosition()
})

window.addEventListener("resize", handleResize);

