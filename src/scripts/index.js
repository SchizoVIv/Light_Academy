// scrol
(function(){
  let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  let scrollbarDiv = document.querySelector('.scrollbar');
    if (!isChrome && !isSafari) {
      scrollbarDiv.innerHTML = 'You need Webkit browser to run this code';
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

document.addEventListener('mousemove', function(event) {
  x = event.clientX; // Координата X курсора
  y = event.clientY; // Координата Y курсора
  // console.log('X: ' + x + ', Y: ' + y);



  if(y < maxY && scrollPosition() > defaultOffset) {
    header.classList.remove('header_hide')
    header.classList.add('header_border')
    headerLogo.classList.remove('header__logo_hide')
  }

  if(y > maxY && scrollPosition() > defaultOffset) {
    header.classList.add('header_hide')
    headerLogo.classList.add('header__logo_hide')
    header.classList.remove('header_border')
  }
});



window.addEventListener('scroll', () => {
  // console.log(`${scrollPosition()} \ ${lastScroll}`)


  // if(scrollPosition() < lastScroll && conteinBorder() && scrollPosition() < defaultOffset) {
  //   header.classList.remove('header_hide')
  //   header.classList.remove('header_border')
  //   headerLogo.classList.remove('header__logo_hide')

  // }

  // if(scrollPosition() < lastScroll && conteinHide()) {
  //   header.classList.remove('header_hide')
  //   header.classList.add('header_border')
  //   headerLogo.classList.add('header__logo_hide')
  // }

  console.log(`${scrollPosition()} \ ${defaultOffset} \ ${lastScroll} \ ${!conteinHide()}`)

  if(scrollPosition() < lastScroll && scrollPosition() < defaultOffset) {
    header.classList.remove('header_hide')
    headerLogo.classList.remove('header__logo_hide')
    header.classList.remove('header_border')
  }

  if(scrollPosition() > lastScroll && !conteinHide() && scrollPosition() > defaultOffset) {
    header.classList.add('header_hide')
    headerLogo.classList.add('header__logo_hide')
    header.classList.remove('header_border')
  }


  if(screenWidth < 860 && scrollPosition() > 2745 && scrollPosition() < 2750) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }
  // анимация диска
  if(screenWidth < 1300 && scrollPosition() > 2155 && scrollPosition() < 2160) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }

  if(screenWidth < 1240 && scrollPosition() > 1930 && scrollPosition() < 1940) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
  }

  if(screenWidth > 1000 && scrollPosition() > 2500 && scrollPosition() < 2510) {
    requestsDisk.classList.add('requests__disk_anim')
    requestsCard.classList.add('requests__card_anim')
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
}

function popupHandleOpen() {
  popup.classList.remove('popup__hidden')
}

popupButtonClose.addEventListener('click', popupHandleClose)
academyButton.addEventListener('click', popupHandleOpen)
presentButton.addEventListener('click', popupHandleOpen)
coachingButton.addEventListener('click', popupHandleOpen)
coachButton.addEventListener('click', popupHandleOpen)


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
  const submitButton = document.querySelector(".appointment__button");
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
