import './Advantages.css';

export default function Advantages() {
  return(
    <section className='advantages'>
      <div className='advantages__conteiner conteiner'>
        <h3 className='advantages__title title'>Обучаясь у нас вы получаете:</h3>
        <button className='advantages__button'>Получить подарок</button>
        <div className='advantages__card card'>
          <h4 className='advantages__card-title subtitle'>Гибкий график</h4>
          <p className='advantages__card-text'>Мы готовы предложить гибкий график занятий, который будет индивидуально адаптирован под ваши потребности и расписание.</p>
        </div>
        <div className='advantages__card card'>
          <h4 className='advantages__card-title subtitle'>Коучинговый подход</h4>
          <p className='advantages__card-text'>Мы не учим языку, мы объясняем как его понять. Зачем нужны времена и предлоги, что американцы используют в языке каждый день и что зачем нужно. Только так можно понять язык и заговорить на нем</p>
          <a className='advantages__card-link' href="#">Подробнее</a>
        </div>
        <div className='advantages__card card'>
          <h4 className='advantages__card-title subtitle'>Не просто учителя</h4>
          <p className='advantages__card-text'>Наши преподаватели - профессиональные переводчики. С опытом работы в разных сферах</p>
          <a className='advantages__card-link' href="#">Подробнее</a>
        </div>
        <div className='advantages__card card'>
          <h4 className='advantages__card-title subtitle'>Эффективное обучение</h4>
          <p className='advantages__card-text'>Мы не обещаем нереальные результаты за короткий срок, а выстраиваем обучение таким образом, чтобы ваши знания были качественными и полными, а вам было интересно обучаться</p>
        </div>
      </div>
    </section>
  )
}


