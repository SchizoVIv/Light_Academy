// scrol
(function(){
  let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  let scrollbarDiv = document.querySelector('.scrollbar');

  if (scrollbarDiv) { 
    if (!isChrome && !isSafari) {
      scrollbarDiv.innerHTML = 'You need Webkit browser to run this code';
    }
  } else {
    console.error('Element with class "scrollbar" not found');
  }
})();

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


// 2ой слайдер

const buttonPrev = document.querySelector('.swiper-button-prev')
const buttonNext = document.querySelector('.swiper-button-next')

function vinilAnimationRunPrev() {
  const imagesBlocks = document.querySelectorAll('.reviews__images');
  const slidesList = document.querySelectorAll('.swiper-slide');

  slidesList.forEach((elem, index) => {
    if(elem.classList.contains('swiper-slide-prev')) {
      imagesBlocks.forEach((el, i) => {
        if(index === i) {
          console.log(`index ${index} \ i ${i}`)
          el.classList.remove('reviews__images_off');
          el.classList.add('reviews__images_on');
        } else {
          el.classList.remove('reviews__images_on');
          // el.classList.add('reviews__images_off');
        }
      })
    }
  })
}

function vinilAnimationRunNext() {
  const imagesBlocks = document.querySelectorAll('.reviews__images');
  const slidesList = document.querySelectorAll('.swiper-slide');


  slidesList.forEach((elem, index) => {
    if(elem.classList.contains('swiper-slide-next')) {
      imagesBlocks.forEach((el, i) => {
        if(index === i) {
          console.log(`index ${index} \ i ${i}`)
          el.classList.remove('reviews__images_off');
          el.classList.add('reviews__images_on');
        } else {
          el.classList.remove('reviews__images_on');
          // el.classList.add('reviews__images_off');
        }
      })
    }
  })
}

buttonPrev.addEventListener('click', vinilAnimationRunPrev)
buttonNext.addEventListener('click', vinilAnimationRunNext)

// burger

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

//

const popupButtonClose = document.querySelector('.popup__button-close')
const popupOverflow = document.querySelector('.popup__overflow')
const popupBox = document.querySelector('.popup__box')
const popup = document.querySelector('.popup')
const popupTitle = document.querySelector('.popup__title')
const academyButton = document.querySelector('.academy__button')
const presentButton = document.querySelector('.advantages__button')
const coachingButton = document.querySelector('.coaching__button')
const coachButton = document.querySelector('.coach__button')

// липкое меню

const header = document.querySelector('.header')
const headerLogo = document.querySelector('.header__logo')
const requestsDisk = document.querySelector('.requests__disk')
const requestsCard = document.querySelector('.requests__card:last-child')
let lastScroll = 0;
const defaultOffset = 150;
const startAnim = 2000;
let screenWidth = 0;

const scrollPosition = () => window.pageXOffset || document.documentElement.scrollTop
const conteinHide = () => header.classList.contains('header_hide')
const conteinBorder = () => header.classList.contains('header_border')

let x = 0
let y = 0
let maxY = 80
let screenWidthOver = window.innerWidth;

document.addEventListener('mousemove', function(event) {
  x = event.clientX; // Координата X курсора
  y = event.clientY; // Координата Y курсора
  // console.log('X: ' + x + ', Y: ' + y);


// показать header после стандартной позиции при наведении мыши
  if(y < maxY && scrollPosition() > defaultOffset && conteinHide() && screenWidthOver > 991) {
    header.classList.remove('header_hide')
    header.classList.add('header_border')
    headerLogo.classList.add('header__logo_hide')
  }
// скрыть header после стандартной позиции при наведении мыши
  if(y > maxY && scrollPosition() > defaultOffset && !conteinHide() && screenWidthOver > 991) {
    header.classList.add('header_hide')
    headerLogo.classList.add('header__logo_hide')
    header.classList.remove('header_border')
  }
});



window.addEventListener('scroll', () => {

  // console.log(`скрол ${scrollPosition()}`)
  // console.log(`ширина ${screenWidthOver}`)


  // console.log(`lastScroll ${lastScroll}`)


// мобильная версия показывать header при скроле
  if(scrollPosition() < lastScroll
    && conteinHide()
    && screenWidthOver < 992
    && scrollPosition() > 301
    && lastScroll > 301
    ) {
    header.classList.remove('header_hide')
    header.classList.remove('header_border')
    headerLogo.classList.add('header__logo_hide')
  }
  if(scrollPosition() < lastScroll
    && !conteinHide()
    && screenWidthOver < 992
    && scrollPosition() < 301
    && lastScroll < 301
    ) {
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
    header.classList.remove('header_border')
  }

  // убрать header после базовой позиции при скроле
  if(scrollPosition() > lastScroll && !conteinHide() && scrollPosition() > defaultOffset) {
    header.classList.add('header_hide')
    headerLogo.classList.add('header__logo_hide')
    header.classList.remove('header_border')
  }

  // анимация диска промежутки

  if(screenWidthOver > 1700 && scrollPosition() > 2099 && scrollPosition() < 2700) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if(screenWidthOver < 1701 && scrollPosition() > 1920 && scrollPosition() < 2450) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if(screenWidthOver < 1500 && scrollPosition() > 1720 && scrollPosition() < 2120) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if(screenWidthOver < 1200 && scrollPosition() > 1600 && scrollPosition() < 1800) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if(screenWidthOver < 712 && scrollPosition() > 2200 && scrollPosition() < 2400) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  if(screenWidthOver < 500 && scrollPosition() > 2350 && scrollPosition() < 2500) {
    requestsDisk.classList.remove('requests__disk_anim')
    requestsCard.classList.remove('requests__card_anim')
  }

  lastScroll = scrollPosition()
})



// Функция для обработки изменения размера экрана
function handleResize() {
  // Получаем текущую ширину экрана
  screenWidth = window.innerWidth;

  // Ваш код здесь для обработки изменений ширины экрана
  // console.log("Ширина экрана: " + screenWidth + "px");
}

// Добавляем обработчик события resize
window.addEventListener("resize", handleResize);

// Вызываем функцию handleResize() при загрузке страницы для отображения начальной ширины экрана
handleResize();




burgerButton.addEventListener('click', hendleOpenMenu)




// window

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


// faq

const questionList = document.querySelectorAll('.faq__question')

questionList.forEach((question, i) => {
  question.addEventListener('click', () => {
    const answerList = document.querySelectorAll('.faq__answer-text')
    const questionAfterList = document.querySelectorAll('.faq__question-text')
    answerList.forEach((answer, index) => {
      if(i === index) {
          answer.classList.toggle('faq__answer-text_active')
      }
    })

    questionAfterList.forEach((after, index) => {
      if(i === index) {
        after.classList.toggle('hidden-after')
      }
    })
  })
})


// form

// Функция для проверки заполнения полей формы
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

// подсказка

const servicesTextList = document.querySelectorAll('.services__item-text')


servicesTextList.forEach((textItem, index) => {
  if(screenWidthOver > 992) {
    textItem.addEventListener('mouseover', () => {
      const servicesTooltipList = document.querySelectorAll('.services__item-tooltip')
      servicesTooltipList.forEach((tooltipItem, i) => {
        if(i === index) {
          tooltipItem.classList.add('services__item-tooltip_active')
        }
      })
    })
    textItem.addEventListener('mouseout', () => {
      const servicesTooltipList = document.querySelectorAll('.services__item-tooltip')
      servicesTooltipList.forEach((tooltipItem, i) => {
        if(i === index) {
          tooltipItem.classList.remove('services__item-tooltip_active')
        }
      })
    })
  } else {
    textItem.addEventListener('click', () => {
      const servicesTooltipList = document.querySelectorAll('.services__item-tooltip')
      servicesTooltipList.forEach((tooltipItem, i) => {
        if(i === index && !tooltipItem.classList.contains('services__item-tooltip_active')) {
          tooltipItem.classList.add('services__item-tooltip_active')
        } else if(tooltipItem.classList.contains('services__item-tooltip_active')) {
          tooltipItem.classList.remove('services__item-tooltip_active')
        }
      })
    })
  }
})

// кнопка круг
const rotateBetweenWords = (value) => {
  const words = document.querySelectorAll('.advantages__wheel-inner')

  let deg = -60

  for (let word of words) {
      word.style.transform = `rotate(${ deg }deg)`
      deg += value
  }
}

// расстояние между буквами
const rotateBetweenLetters = (value) => {
  console.log('tyt')
  const letters = document.querySelectorAll('.advantages__wheel-content')
  let deg = 0

  for (let letter of letters) {
      letter.style.transform = `rotate(${ deg }deg)`
      deg += value
  }

}

// rotateBetweenWords(9)
// rotateBetweenLetters(9)

rotateBetweenWords(10)
rotateBetweenLetters(5)


// открытие карточки при нажатии

const cardsList = document.querySelectorAll('.teachers__card')

function handleClick(el, i, index, classL, classR) {
    if(index === i && index === 0){
      return el.classList.add(classL)
    }
    if(index === i && index === 2){
      return el.classList.add(classL)
    }
    if(index === i && index === 1){
      return el.classList.add(classR)
    }
    if(index === i && index === 3){
      return el.classList.add(classR)
    }
}

if(screenWidthOver < 993) {
  cardsList.forEach((card, index) => {
    card.addEventListener('click', () => {
      const fotoList = document.querySelectorAll('.teachers__foto')
      const contentList = document.querySelectorAll('.teachers__content')

      fotoList.forEach((el, i) => {
        if(!el.classList.contains('teachers__card_open-left') && !el.classList.contains('teachers__card_open-right')){
          handleClick(el, i, index, 'teachers__card_open-left', 'teachers__card_open-right')
        } else if(el.classList.contains('teachers__card_open-left') || el.classList.contains('teachers__card_open-right')) {
          if(el.classList.contains('teachers__card_open-left')){
            return el.classList.remove('teachers__card_open-left')
          }
          if(el.classList.contains('teachers__card_open-right')){
            return el.classList.remove('teachers__card_open-right')
          }
        }


      })

      contentList.forEach((el, i) => {
        if(!el.classList.contains('teachers__card_open-left') && !el.classList.contains('teachers__card_open-right')){
          handleClick(el, i, index, 'teachers__card_open-left', 'teachers__card_open-right')
        } else if(el.classList.contains('teachers__card_open-left') || el.classList.contains('teachers__card_open-right')) {
          if(el.classList.contains('teachers__card_open-left')){
            return el.classList.remove('teachers__card_open-left')
          }
          if(el.classList.contains('teachers__card_open-right')){
            return el.classList.remove('teachers__card_open-right')
          }
        }
      })


    })
  })
}

//

const swiper = new Swiper('.sample-slider', {
  loop: true,
  spaceBetween: 40,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
  freeMode: true,
  slidesPerView: 1,
  freeModeSticky: true,
})

