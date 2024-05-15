console.log('it"s works');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

//

const sliderList = document.querySelectorAll('.slider__nav');
const cardList = document.querySelectorAll('.reviews__images');

// sliderList.forEach(function(element) {
//   element.addEventListener('click', function() {
//     cardList.forEach(function(el) {
//       console.log(el.style.animationPlayState)
//       el.style.animationPlayState = 'initial';
//   });
//   });
// });

const inputs = document.querySelectorAll('.slider__nav');

inputs.forEach(function(input, index) {
  input.addEventListener('click', function() {
      // Находим соответствующий блок .reviews__images
      const imagesBlocks = document.querySelectorAll('.reviews__images');

      // Проходим по всем блокам .reviews__images
      imagesBlocks.forEach(function(imagesBlock, i) {
          // Проверяем, соответствует ли индекс блока индексу кликнутого инпута
          if (i === index) {
              // Добавляем классы CSS для запуска анимации только для соответствующего блока
              imagesBlock.classList.add('reviews__images_on');
              imagesBlock.classList.remove('reviews__images_off');
          } else {
              // Удаляем классы CSS анимации для всех остальных блоков
              imagesBlock.classList.add('reviews__images_off');

              imagesBlock.classList.remove('reviews__images_on');
          }
      });
  });
});


// faq

// const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute('aria-expanded');
//   console.log(itemToggle)

//   for (i = 0; i < items.length; i++) {
//     items[i].setAttribute('aria-expanded', 'false');
//   }

//   if (itemToggle == 'false') {
//     this.setAttribute('aria-expanded', 'true');
//   }
// }

// items.forEach(item => item.addEventListener('click', toggleAccordion));

// const items = document.querySelectorAll('.slider__nav')
// const slider = document.querySelector('.slider__inner')
// const wingLeft = document.querySelector('.reviews__wing-left')
// const wingRight = document.querySelector('.reviews__wing-right')

// function handleChangeCardLeft() {

//   console.log(slider.style.left)
// }

// wingRight.addEventListener('click', handleChangeCardLeft)


// burger

const burgerToggle = document.querySelector('#menu-toggle')
const burgerButton = document.querySelector('.header__button-container')
const burgerOverflow = document.querySelector('.header__overflow')
const navigation = document.querySelector('.header__nav-box')
const contacts = document.querySelector('.header__contacts')

function hendleOpenMenu() {
  console.log(burgerOverflow)
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

function disableScroll() {
  // Сохраняем текущую позицию скролла
  const scrollY = window.scrollY;
  // Добавляем стили для блокировки скролла
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}

function enableScroll() {
  // Восстанавливаем позицию скролла
  const scrollY = parseInt(document.body.style.top, 10);
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, Math.abs(scrollY));
}

// липкое меню

const header = document.querySelector('.header')
const headerLogo = document.querySelector('.header__logo')
let lastScroll = 0;
const defaultOffset = 150;

const scrollPosition = () => window.pageXOffset || document.documentElement.scrollTop
const conteinHide = () => header.classList.contains('header_hide')
const conteinBorder = () => header.classList.contains('header_border')

window.addEventListener('scroll', () => {
  console.log(`${scrollPosition()} \ ${lastScroll}`)

  if(scrollPosition() < lastScroll && conteinBorder() && scrollPosition() < defaultOffset) {
    console.log('+')
    header.classList.remove('header_hide')
    header.classList.remove('header_border')
    headerLogo.classList.remove('header__logo_hide')

  }

  if(scrollPosition() < lastScroll && conteinHide()) {
    console.log('+')
    header.classList.remove('header_hide')
    header.classList.add('header_border')
    headerLogo.classList.add('header__logo_hide')
  }

  if(scrollPosition() > lastScroll && !conteinHide() && scrollPosition() > defaultOffset) {
    console.log('-')
    header.classList.add('header_hide')
    headerLogo.classList.add('header__logo_hide')
  }

  lastScroll = scrollPosition()
})




burgerButton.addEventListener('click', hendleOpenMenu)

// window

const popupButtonClose = document.querySelector('.popup__button-close')
const popupOverflow = document.querySelector('.popup__overflow')
const popupBox = document.querySelector('.popup__box')
const popup = document.querySelector('.popup')
const academyButton = document.querySelector('.academy__button')
const presentButton = document.querySelector('.advantages__button')
const coachingButton = document.querySelector('.coaching__button')
const coachButton = document.querySelector('.coach__button')

function popupHandleClose() {
  popup.classList.add('popup__hidden')
  console.log('hi')
}

function popupHandleOpen() {
  popup.classList.remove('popup__hidden')
}

popupButtonClose.addEventListener('click', popupHandleClose)
academyButton.addEventListener('click', popupHandleOpen)
presentButton.addEventListener('click', popupHandleOpen)
coachingButton.addEventListener('click', popupHandleOpen)
coachButton.addEventListener('click', popupHandleOpen)
