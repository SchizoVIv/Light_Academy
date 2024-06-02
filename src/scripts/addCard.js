const imgPath = './images/'
const cardColection = [
  {
    name: 'Христина',
    about: 'Преподаватель и администратор Академии Light. Опыт работы более 2 лет в сфере переводов и преподавания. На уроках с ней ученики чувствуют поддержку, позитивные эмоции в момент обучения, что сразу помогает избавиться от страха и переживаний. На занятиях с Христиной вы сразу начинаете говорить на английском, практикуя его, и уходите с отличным настроением.',
    image: imgPath + 'Christina.jpg'
  },
  {
    name: 'Юлиана',
    about: 'Опыт преподавания 4 года, любит преподавать в легкости, объяснять новый материал через ассоциации, рассказывать разные факты о языке. Общительная, веселая, понимающая.',
    image: imgPath + 'Juliana.jpg'
  },
  {
    name: 'Софья',
    about: 'Софья, преподаватель английского и китайского с опытом работы более 3 лет. Делюсь своей энергией и страстью к языку и стараюсь делать так, что ученики смогут полюбить язык так же, как люблю его я. После занятия китайским дети подходят и говорят: “我爱中国”- wǒ  aì zhōngguó-  «я люблю Китай»',
    image: imgPath + 'Sofia.jpg'
  },
  {
    name: 'Наталья',
    about: 'Дипломированный специалист-переводчик. У нее 17 лет изучения и искренней любви к языку, 2 года работы переводчиком в министерстве иностранных дел, 4 года преподавания. Может найти подход и составить программу студентам 14-60 лет. Поддерживает регулярное общение с носителем, поэтому часто в курсе новых трендов или фраз в языке. Умеет привить любовь к погружению в интересующие сферы жизни через английский язык и помогаю найти качественные источники информации и контента.',
    image: imgPath + 'Natalya.jpg'
  },
]

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
