import './Coaching.css';
import WING_IMJ from '../../images/wing.png';
import PERSONS_IMJ from '../../images/persons.png';
import ROMAN_WS_IMJ from '../../images/RomaWidthSister.png';
import AL_IMJ from '../../images/AlexandraFirecracker.png';

export default function Coaching() {
  return(
    <section className='coaching'>
      <div className='coaching__conteiner conteiner'>
        <h3 className='coaching__title title'>“коучинговый английский” что это?</h3>
        <div className='coaching__grid-box'>
          <p className='coaching__text'>        Часто многие люди учат английский годами, понимают всю теорию, знают слова, но когда нужно заговорить с кем-то - ступор, страх, слова вылетают из головы, мыслей нет. Поэтому столько лет не понимают, в чем же сложность заговорить.</p>
          <img
            className='coaching__wing-img'
            src={WING_IMJ}
            alt="Стрелка, указывающая на следующий текст"
          />
          <p className='coaching__text'>        Именно для этого коучинг и нужен. В нашей академии есть коуч, который благодаря правильно заданным вопросам, помогает вам найти причину страха, научиться им управлять и с легкостью двигаться к цели.</p>
          <img
            className='coaching__wing-img'
            src={WING_IMJ}
            alt="Стрелка, указывающая на следующий текст"
          />
          <div className='coaching__image-box'>
            <img
              className='coaching__image'
              src={PERSONS_IMJ}
              alt="Картина художника Луи Леопольд Буальи гримасы"
            />
          </div>
          <div className='coaching__image-box'>
            <img
              className='coaching__image'
              src={ROMAN_WS_IMJ}
              alt="Картина художника Луи Леопольд Буальи гримасы"
            />
          </div>
          <div className='coaching__image-box'>
            <img
              className='coaching__image'
              src={AL_IMJ}
              alt="Картина художника Луи Леопольд Буальи гримасы"
            />
          </div>
          <div className='coacing__box'>
            <p className='coaching__text'>        Коуч также работает с нашими преподавателями, поэтому на наших занятиях легкая атмосфера, мы подаем английский комфортно и понятно, ищем причину ступора в языке, чтобы вы заговорили легко.</p>
            <p className='coaching__text'>        Сессия с коучем Академии входит в обучение. </p>
            <p className='coaching__text'>*У вас есть возможность взять личную работу с коучем помимо обучения.</p>
          </div>
        </div>
        <button className='coaching__button'>Записаться на бесплатную ознакомительную встречу</button>
      </div>
    </section>
  )
}


