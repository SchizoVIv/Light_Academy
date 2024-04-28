import './Academy.css';
import IMAGE_PEOPLE from '../../images/firstImagePeople.png'

export default function Academy() {
  return(
    <section className='academy'>
      <div className='conteiner'>
        <div className='academy__box'>
          <h1 className='academy__title-first'>
            АКАДЕМИЯ
          </h1>
          <h2 className='academy__title-second'>
            Light
          </h2>
        </div>
        <div className='academy__box-images'>
          <img className='academy__image' src={IMAGE_PEOPLE} alt="Собрание студентов за бранчем" />
          <button className='academy__button btn2'>
            <span className='academy__button-line'></span>
            <span className='academy__text-button'>
              Записаться
            </span>
          </button>
        </div>
      </div>
    </ section>
  )
}

