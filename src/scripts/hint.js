import {screenWidth} from './navigation.js';
const servicesTextList = document.querySelectorAll('.services__item-text')
// const servicesSection = document.querySelector('.services__item-service:nth-child(3)::after')


servicesTextList.forEach((textItem, index) => {
  if(screenWidth > 992) {
    textItem.addEventListener('mouseover', () => {
      const servicesTooltipList = document.querySelectorAll('.services__item-tooltip')
      servicesTooltipList.forEach((tooltipItem, i) => {
        if(i === index) {
          tooltipItem.classList.add('services__item-tooltip_active')
        }
      })
    })
    textItem.addEventListener('mouseout', () => {
      const servicesTooltipList = document.querySelectorAll('.services__item-tooltip')
      servicesTooltipList.forEach((tooltipItem, i) => {
        if(i === index) {
          tooltipItem.classList.remove('services__item-tooltip_active')
        }
      })
    })
  } else {
    textItem.addEventListener('click', () => {
      const servicesTooltipList = document.querySelectorAll('.services__item-tooltip')
      servicesTooltipList.forEach((tooltipItem, i) => {
        if(i === index && !tooltipItem.classList.contains('services__item-tooltip_active')) {
          tooltipItem.classList.add('services__item-tooltip_active')
        } else if(tooltipItem.classList.contains('services__item-tooltip_active')) {
          tooltipItem.classList.remove('services__item-tooltip_active')
        }
      })
    })
  }
})
