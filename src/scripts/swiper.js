const buttonPrev = document.querySelector('.swiper-button-prev')
const buttonNext = document.querySelector('.swiper-button-next')

function vinilAnimationRunPrev() {
  const imagesBlocks = document.querySelectorAll('.reviews__images');
  const sectionReviews = document.querySelector('.reviews');
  const slidesList = sectionReviews.querySelectorAll('.swiper-slide');

  slidesList.forEach((el) => {
    let img = el.querySelector('.reviews__images')
    if(img) {
      if(el.classList.contains('swiper-slide-prev')) {
        img.classList.remove('reviews__images_off');
        img.classList.add('reviews__images_on');
      } else {
        img.classList.remove('reviews__images_on');
        // img.classList.add('reviews__images_off');
      }
    }
  })
}

function vinilAnimationRunNext() {
  const imagesBlocks = document.querySelectorAll('.reviews__images');
  const sectionReviews = document.querySelector('.reviews');
  const slidesList = sectionReviews.querySelectorAll('.swiper-slide');

  slidesList.forEach((el) => {
    if(el.querySelector('.reviews__images')) {
      let img = el.querySelector('.reviews__images')
      if(el.classList.contains('swiper-slide-next')) {
        img.classList.remove('reviews__images_off');
        img.classList.add('reviews__images_on');
      } else {
        img.classList.remove('reviews__images_on');
        // img.classList.add('reviews__images_off');
      }
    }
  })
}

buttonPrev.addEventListener('click', vinilAnimationRunPrev)
buttonNext.addEventListener('click', vinilAnimationRunNext)

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

document.addEventListener('DOMContentLoaded', function() {
  let video = document.querySelector('.reviews__video');
  if (video) {
      video.style.maxWidth = '100vw';
      video.style.maxHeight = '550px';
  }
});
