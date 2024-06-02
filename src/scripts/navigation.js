const header = document.querySelector('.header')
const headerLogo = document.querySelector('.header__logo')
const requestsDisk = document.querySelector('.requests__disk')
const requestsCard = document.querySelector('.requests__card:last-child')
let lastScroll = 0;
const defaultOffset = 150;
const startAnim = 2000;
export let screenWidth = 0;

const scrollPosition = () => window.pageXOffset || document.documentElement.scrollTop
const conteinHide = () => header.classList.contains('header_hide')
const conteinBorder = () => header.classList.contains('header_border')

let x = 0
let y = 0
let maxY = 80


function handleResize() {
  screenWidth = window.innerWidth;
}
handleResize();

document.addEventListener('mousemove', function(event) {
  x = event.clientX; // Координата X курсора
  y = event.clientY; // Координата Y курсора
  // console.log('X: ' + x + ', Y: ' + y);


// показать header после стандартной позиции при наведении мыши
  if(y < maxY && scrollPosition() > defaultOffset && conteinHide() && screenWidth > 991) {
    header.classList.remove('header_hide')
    header.classList.add('header_border')
    headerLogo.classList.add('header__logo_size')
  }
// скрыть header после стандартной позиции при наведении мыши
  if(y > maxY && scrollPosition() > defaultOffset && !conteinHide() && screenWidth > 991) {
    header.classList.add('header_hide')
    headerLogo.classList.add('header__logo_size')
    header.classList.remove('header_border')
  }
});



window.addEventListener('scroll', () => {

  // console.log(`скрол ${scrollPosition()}`)
  // console.log(`ширина ${screenWidth}`)


  // console.log(`lastScroll ${lastScroll}`)


// мобильная версия показывать header при скроле
  if(scrollPosition() < lastScroll
    && conteinHide()
    && screenWidth < 992
    && scrollPosition() > 301
    && lastScroll > 301
    ) {
    header.classList.remove('header_hide')
    header.classList.remove('header_border')
    headerLogo.classList.add('header__logo_hide')
  }
  if(scrollPosition() < lastScroll
    && !conteinHide()
    && screenWidth < 992
    && scrollPosition() < 301
    && lastScroll < 301
    ) {
    headerLogo.classList.remove('header__logo_size')
    header.classList.remove('header_hide')
    header.classList.remove('header_border')
    headerLogo.classList.remove('header__logo_hide')
  }


  // показать header в базовой позиции при скроле
  if(scrollPosition() < lastScroll
  && scrollPosition() < defaultOffset
  && lastScroll < 201
  && conteinHide()) {
    header.classList.remove('header_hide')
    headerLogo.classList.remove('header__logo_hide')
    headerLogo.classList.remove('header__logo_size')
    header.classList.remove('header_border')
  }

  // убрать header после базовой позиции при скроле
  if(scrollPosition() > lastScroll && !conteinHide() && scrollPosition() > defaultOffset) {
    header.classList.add('header_hide')
    // headerLogo.classList.add('header__logo_hide')
    header.classList.remove('header_border')
  }

  // анимация диска промежутки

  if(screenWidth > 1700 && scrollPosition() > 2099 && scrollPosition() < 2700) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if(screenWidth < 1701 && scrollPosition() > 1920 && scrollPosition() < 2450) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if(screenWidth < 1500 && scrollPosition() > 1720 && scrollPosition() < 2120) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if(screenWidth < 1200 && scrollPosition() > 1600 && scrollPosition() < 1800) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if(screenWidth < 712 && scrollPosition() > 2200 && scrollPosition() < 2400) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if(screenWidth < 500 && scrollPosition() > 2350 && scrollPosition() < 2500) {
    requestsDisk.classList.remove('requests__disk_anim')
    requestsCard.classList.remove('requests__card_anim')
  }

  lastScroll = scrollPosition()
})

window.addEventListener("resize", handleResize);

