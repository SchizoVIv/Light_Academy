import './Founders.css';
import ImageRoman from '../../images/founderRoman.jpg';
import ImageAlex from '../../images/founderAlex.jpg';
import ImageCanyon from '../../images/canyon.jpg';
import ImageLogoSVG from '../svg/ImageLogoSVG/ImageLogoSVG.jsx';

export default function Founders() {
  return(
    <section className='founders'>
      <div className='founders__conteiner conteiner'>
        <h3 className='founders__title title'>Основатели Академии</h3>
        <ImageLogoSVG
          class = 'founders__logo'
          baseColor= '#F9F3EF'
          accentColor= '#F9F3EF'
        />
        <div className='founders__box-grid'>
          <div className='founder__block-text'>
            <div >
              <h4 className='founder__text-name'>Роман Торони</h4>
              <p className='founder__text-role'>Директор-коуч Академии</p>
              <a className='founder__link' href="#">Сертификат</a>
            </div>
            <p className='founder__text'>Коуч ICF, основатель академии, более 8 лет опыта работы в продажах. Главное направление деятельности Романа коммуникация и понимание. Именно это создает ту атмосферу комфорта и стабильности в вашем обучении и нашей работе Академии</p>
          </div>
          <img className='founder__image' src={ImageRoman} alt="Фотография директора академии, Романа" />
          <div className='founder__block-text'>
            <div>
              <h4 className='founder__text-name'>Александра Маврова</h4>
              <p className='founder__text'>Дипломированный специалист-переводчик</p>
            </div>
            <p className='founder__text'>Наш вдохновляющий лидер с богатым опытом в образовании и страстью к языку. Опыт работы переводчиком и опыт преподавания более 8 лет. Работала в международной компании KVINT, а также проходила стажировку в американской компании Linguatrip, работала переводчиком в разных сферах. Команда Академии работает по методике обучения Александры, мы вместе составляем программу и корректируем её в процессе. Она - та, кто помогает чтобы английский язык стал вашим лучшим другом.</p>
          </div>
          <img className='founder__image' src={ImageAlex} alt="Фотография Александры" />
          <img className='founder__image-canyon' src={ImageCanyon} alt="Пейзаж Каньона маслом" />
        </div>
      </div>
    </section>
  )
}


