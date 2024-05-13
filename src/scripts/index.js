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

// const slider = document.querySelector(".items");
// 		const slides = document.querySelectorAll(".item");
// 		const button = document.querySelectorAll(".button");

// 		let current = 0;
// 		let prev = 4;
// 		let next = 1;

// 		for (let i = 0; i < button.length; i++) {
// 			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
// 		}

// 		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

// 		const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

// 		const gotoNum = number => {
// 			current = number;
// 			prev = current - 1;
// 			next = current + 1;

// 			for (let i = 0; i < slides.length; i++) {
// 				slides[i].classList.remove("active");
// 				slides[i].classList.remove("prev");
// 				slides[i].classList.remove("next");
// 			}

// 			if (next == 5) {
// 				next = 0;
// 			}

// 			if (prev == -1) {
// 				prev = 4;
// 			}

// 			slides[current].classList.add("active");
// 			slides[prev].classList.add("prev");
// 			slides[next].classList.add("next");
// 		}

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


