import {screenWidth} from './navigation.js';
const cardsList = document.querySelectorAll('.teachers__card')

function handleClick(el, i, index, classL, classR) {
    if((index + 1) % 4 === 2){
      return el.classList.add(classR)
    } else if((index + 1) % 4 === 0){
      return el.classList.add(classR)
    } else if((index + 1) % 4 === 1){
      return el.classList.add(classL)
    } else if((index + 1) % 4 === 3){
      return el.classList.add(classL)
    }
}

function changeOpen(el, i, index) {
    if (i === index && !el.classList.contains('teachers__card_open-left') && !el.classList.contains('teachers__card_open-right')) {
      handleClick(el, i, index, 'teachers__card_open-left', 'teachers__card_open-right')
    } else if (el.classList.contains('teachers__card_open-left')) {
      return el.classList.remove('teachers__card_open-left')
    } else if (el.classList.contains('teachers__card_open-right')) {
      return el.classList.remove('teachers__card_open-right')
    }
}

if(screenWidth < 993) {
  cardsList.forEach((card, index) => {
    card.addEventListener('click', () => {
      const fotoList = document.querySelectorAll('.teachers__foto')
      const contentList = document.querySelectorAll('.teachers__content')

      // changeOpen(fotoList, index)
      // changeOpen(contentList, index)
      fotoList.forEach((el, i) => {
        changeOpen(el, i, index)
        // if (i === index && !el.classList.contains('teachers__card_open-left') && !el.classList.contains('teachers__card_open-right')) {
        //   handleClick(el, i, index, 'teachers__card_open-left', 'teachers__card_open-right')
        // } else if (el.classList.contains('teachers__card_open-left')) {
        //   return el.classList.remove('teachers__card_open-left')
        // } else if (el.classList.contains('teachers__card_open-right')) {
        //   return el.classList.remove('teachers__card_open-right')
        // }
      })

      contentList.forEach((el, i) => {
        changeOpen(el, i, index)
        // if (i === index && !el.classList.contains('teachers__card_open-left') && !el.classList.contains('teachers__card_open-right')) {
        //   handleClick(el, i, index, 'teachers__card_open-left', 'teachers__card_open-right')
        // } else if (el.classList.contains('teachers__card_open-left')) {
        //   return el.classList.remove('teachers__card_open-left')
        // } else if (el.classList.contains('teachers__card_open-right')) {
        //   return el.classList.remove('teachers__card_open-right')
        // }
      })

      // fotoList.forEach((el, i) => {
      //   if(!el.classList.contains('teachers__card_open-left') && !el.classList.contains('teachers__card_open-right')){
      //     handleClick(el, i, index, 'teachers__card_open-left', 'teachers__card_open-right')
      //   } else if(el.classList.contains('teachers__card_open-left') || el.classList.contains('teachers__card_open-right')) {
      //     if(el.classList.contains('teachers__card_open-left')){
      //       return el.classList.remove('teachers__card_open-left')
      //     }
      //     if(el.classList.contains('teachers__card_open-right')){
      //       return el.classList.remove('teachers__card_open-right')
      //     }
      //   }


      // })

      // contentList.forEach((el, i) => {
      //   if(!el.classList.contains('teachers__card_open-left') && !el.classList.contains('teachers__card_open-right')){
      //     handleClick(el, i, index, 'teachers__card_open-left', 'teachers__card_open-right')
      //   } else if(el.classList.contains('teachers__card_open-left') || el.classList.contains('teachers__card_open-right')) {
      //     if(el.classList.contains('teachers__card_open-left')){
      //       return el.classList.remove('teachers__card_open-left')
      //     }
      //     if(el.classList.contains('teachers__card_open-right')){
      //       return el.classList.remove('teachers__card_open-right')
      //     }
      //   }
      // })


    })
  })
}
