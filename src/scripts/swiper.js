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


// ???
// const inputs = document.querySelectorAll('.slider__nav');

// inputs.forEach(function(input, index) {
//   input.addEventListener('click', function() {
//       // Находим соответствующий блок .reviews__images
//       const imagesBlocks = document.querySelectorAll('.reviews__images');

//       // Проходим по всем блокам .reviews__images
//       imagesBlocks.forEach(function(imagesBlock, i) {
//           // Проверяем, соответствует ли индекс блока индексу кликнутого инпута
//           if (i === index) {
//               // Добавляем классы CSS для запуска анимации только для соответствующего блока
//               imagesBlock.classList.add('reviews__images_on');
//               imagesBlock.classList.remove('reviews__images_off');
//           } else {
//               // Удаляем классы CSS анимации для всех остальных блоков
//               imagesBlock.classList.add('reviews__images_off');

//               imagesBlock.classList.remove('reviews__images_on');
//           }
//       });
//   });
// });

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
