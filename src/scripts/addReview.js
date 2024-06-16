// import {reviewsCollection} from './cardsListReview.js';

// // Получаем ссылку на элемент .swiper-wrapper
// const swiperWrapper = document.querySelector('.swiper-wrapper');

// // Создаем блоки для каждого элемента коллекции
// reviewsCollection.forEach((item) => {
//   // Создаем новый элемент <div> с классом "swiper-slide"
//   const swiperSlide = document.createElement('div');
//   swiperSlide.classList.add('swiper-slide');

//   // Создаем блок с содержимым из элемента коллекции
//   const sliderContents = document.createElement('div');
//   sliderContents.classList.add('reviews__card', 'slider__contents');

//   if (item.video) {
//     const videoElement = document.createElement('video');
//     videoElement.classList.add('reviews__video')
//     // Устанавливаем атрибуты
//     videoElement.src = item.video; // Путь к вашему видеофайлу
//     videoElement.controls = true; // Добавляем элементы управления

//     // Создаем элемент source и указываем путь к видеофайлу и его тип
//     const sourceElement = document.createElement('source');
//     sourceElement.src = item.video; // Путь к вашему видеофайлу
//     sourceElement.type = 'video/mp4'; // MIME-тип видео и его формат

//     // Добавляем элемент source внутрь элемента video
//     videoElement.appendChild(sourceElement);
//     // sliderContents.appendChild(videoElement);
//     // Добавляем блок sliderContents в блок swiperSlide
//     swiperSlide.appendChild(videoElement);
//   } else {
//     // Создаем блок с информацией о пользователе
//     const reviewsAbout = document.createElement('div');
//     reviewsAbout.classList.add('reviews__about');

//     const userName = document.createElement('p');
//     userName.classList.add('reviews__name');
//     userName.textContent = item.name;

//     const userAge = document.createElement('p');
//     userAge.classList.add('reviews__age');
//     userAge.textContent = item.age;

//     reviewsAbout.appendChild(userName);
//     reviewsAbout.appendChild(userAge);

//     // Создаем блок с звездами
//     const reviewsStars = document.createElement('div');
//     reviewsStars.classList.add('reviews__stars');

//     // Создаем и добавляем звезды
//     for (let i = 0; i < 5; i++) {
//       const star = document.createElement('img');
//       star.classList.add('reviews__star-item');
//       star.src = './images/star-1.png';
//       star.alt = 'оценочная звезда';
//       reviewsStars.appendChild(star);
//     }

//     // Создаем блоки с этапами обучения
//     for (let i = 1; i <= 3; i++) {
//       const stageBlock = document.createElement('div');
//       stageBlock.classList.add('reviews__box-text');

//       const stageTitle = document.createElement('h5');
//       stageTitle.classList.add('reviews__subtitle');
//       stageTitle.textContent = item[`subtitleStage${i}`];

//       const stageText = document.createElement('p');
//       stageText.classList.add('reviews__text');
//       stageText.textContent = item[`textStage${i}`];

//       stageBlock.appendChild(stageTitle);
//       stageBlock.appendChild(stageText);

//       sliderContents.appendChild(stageBlock);
//     }

//     // Добавляем изображение
//     const reviewImage = document.createElement('img');
//     reviewImage.classList.add('reviews__images');
//     reviewImage.src = './images/record-2.png';
//     reviewImage.alt = 'Виниловая пластинка';

//     // Добавляем все созданные элементы в блок sliderContents
//     sliderContents.appendChild(reviewsAbout);
//     sliderContents.appendChild(reviewsStars);
//     sliderContents.appendChild(reviewImage);
//     // Добавляем блок sliderContents в блок swiperSlide
//     swiperSlide.appendChild(sliderContents);

//   }

//   // Добавляем блок swiperSlide в блок .swiper-wrapper
//   swiperWrapper.appendChild(swiperSlide);

// });
