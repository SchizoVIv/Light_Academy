import {cardColection} from './cardsListTeacher.js';

// const cardListUL = document.querySelector('.teachers__cards-list');
// const cardItem = document.createElement('li');
// cardItem.classList.add('teachers__card');
// const cardContent = document.createElement('div');
// cardItem.classList.add('teachers__content');
// const cardSubtitle = document.createElement('h4');
// cardItem.classList.add('teachers__subtitle subtitle');
// const cardText = document.createElement('p');
// cardItem.classList.add('teachers__text');
// const cardFoto = document.createElement('div');
// cardItem.classList.add('teachers__foto');

// cardListUL.appendChild()

const ulElement = document.querySelector('.teachers__cards-list');

// Перебираем коллекцию cardColection
cardColection.forEach((item, index) => {
    // Создаем новый элемент li
    const liElement = document.createElement('li');
    liElement.classList.add('teachers__card');
    liElement.style.backgroundImage = `url(${item.image})`;

    // Создаем div для контента
    const contentDiv = document.createElement('div');
    if((index + 1) % 2 === 0) {
      contentDiv.classList.add('teachers__content', 'teachers__content_rotate_right');
    } else {
      contentDiv.classList.add('teachers__content');
    }

    // Создаем заголовок h4
    const title = document.createElement('h4');
    title.classList.add('teachers__subtitle', 'subtitle');
    title.textContent = item.name;

    // Создаем параграф для описания
    const text = document.createElement('p');
    text.classList.add('teachers__text');
    text.textContent = item.about;

    // Вставляем заголовок и текст в div контента
    contentDiv.appendChild(title);
    contentDiv.appendChild(text);

    // const boxDiv = document.createElement('div');
    // boxDiv.classList.add('teachers__foto', 'teachers__foto-2');
    // Создаем div для фото и добавляем фото
    const fotoDiv = document.createElement('div');
    if((index + 1) % 4 === 2) {
      fotoDiv.classList.add('teachers__foto', 'teachers__foto-2');
    } else if((index + 1) % 4 === 3 ) {
      fotoDiv.classList.add('teachers__foto', 'teachers__foto-3');
    } else if((index + 1) % 4 === 0 ) {
      fotoDiv.classList.add('teachers__foto', 'teachers__foto-4');
    } else {
      fotoDiv.classList.add('teachers__foto');
    }
    // fotoDiv.style.backgroundImage = `url(${item.image})`;

    // Вставляем div с фото и div с контентом в li
    liElement.appendChild(contentDiv);
    liElement.appendChild(fotoDiv);

    // Вставляем li в ul
    ulElement.appendChild(liElement);
});
