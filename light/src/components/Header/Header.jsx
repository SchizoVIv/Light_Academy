import './Header.css';
import { React, useState } from 'react';
import ImageLogoSVG from '../svg/ImageLogoSVG/ImageLogoSVG.jsx';
import IMG_TELEGRAM_B from '../../images/telegramBlack.png';

export default function Header() {

  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  let navLinksClass = 'header__nav-box';
  if(isChecked) {
    navLinksClass += ' header__nav-box_active'
  }

  let overflowClass = 'header__overflow';
  if(!isChecked) {
    overflowClass += ' header__overflow_hidden'
  }

  return(
    <header className='header'>
      <div className='conteiner'>
        <ImageLogoSVG
          baseColor= '#00b0b1'
          accentColor= '#2D2019'
        />
      <input
        id="menu-toggle"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label class='header__button-container' for="menu-toggle">
        <div class='header__button'></div>
      </label>
      <div className={overflowClass}></div>
      <nav className={navLinksClass}>
        <ul className='header__navigation'>
          <li className='header__nav-link'>
            <a
              className='header__link'
              to='#start'
            >
              Преимущества
            </a>
          </li>
          <li className='header__nav-link'>
            <a
              className='header__link'
              to='#start'
            >
              Коучинговый английский
            </a>
          </li>
          <li className='header__nav-link'>
            <a
              className='header__link'
              to='#start'
            >
              Наша команда
            </a>
          </li>
          <li className='header__nav-link'>
            <a
              className='header__link'
              to='#start'
            >
              Услуги
            </a>
          </li>
          <li className='header__nav-link'>
            <a
              className='header__link'
              to='#start'
            >
              Отзывы
            </a>
          </li>
          <li className='header__nav-link'>
            <a
              className='header__link'
              to='#start'
            >
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <ul className='header__contacts'>
          <li className='header__item'>
            <a className='header__telegram-link' to='#start'>
              <img src={IMG_TELEGRAM_B} alt="Ссылка на телеграм" />
            </a>
          </li>
          <li className='header__item'>
            <a className='header__whats-app-link' to='#start'>
              <img src={IMG_TELEGRAM_B} alt="Ссылка на вотсап" />
            </a>
          </li>
        </ul>

        {/*  */}
        {/* <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
        <nav>
          <ul className='menu header__navigation'>
            <li className='header__nav-link'>
              <a
                className='header__link'
                to='#start'
              >
                Преимущества
              </a>
            </li>
            <li className='header__nav-link'>
              <a
                className='header__link'
                to='#start'
              >
                Коучинговый английский
              </a>
            </li>
            <li className='header__nav-link'>
              <a
                className='header__link'
                to='#start'
              >
                Наша команда
              </a>
            </li>
            <li className='header__nav-link'>
              <a
                className='header__link'
                to='#start'
              >
                Формат работы
              </a>
            </li>
            <li className='header__nav-link'>
              <a
                className='header__link'
                to='#start'
              >
                Услуги
              </a>
            </li>
            <li className='header__nav-link'>
              <a
                className='header__link'
                to='#start'
              >
                Отзывы
              </a>
            </li>
            <li className='header__nav-link'>
              <a
                className='header__link'
                to='#start'
              >
                FAQ
              </a>
            </li>
            <li className='header__nav-link'>
              <a
                className='header__link'
                to='#start'
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <ul className='header__contacts'>
          <li className='header__item'>
            <a className='header__telegram-link' to='#start'>
              <img src={IMG_TELEGRAM_B} alt="Ссылка на телеграм" />
            </a>
          </li>
          <li className='header__item'>
            <a className='header__whats-app-link' to='#start'>
              <img src={IMG_TELEGRAM_B} alt="Ссылка на вотсап" />
            </a>
          </li>
        </ul> */}
      </div>
    </header>
  )
}
