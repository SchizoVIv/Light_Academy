import {screenWidth} from './navigation.js';
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
const page = document.querySelector('.page');

function cursorChange() {
  if(screenWidth < 993) {
    // document.documentElement.style.cursor = page.style.cursor = 'none';
    if(!cursor.classList.contains('visually-hidden')) {
      cursor.classList.add('visually-hidden')
    }
    if(!cursor2.classList.contains('visually-hidden')) {
      cursor2.classList.add('visually-hidden')
    }

    document.removeEventListener('mousemove', (e) => {
      cursor.style.cssText = cursor2.style.cssText = 'left: ' + e.clientX + 'px; top:' + e.clientY + 'px;'
    })

  } else {
    // document.documentElement.style.cursor = page.style.cursor = 'none';
    if(cursor.classList.contains('visually-hidden')) {
      cursor.classList.remove('visually-hidden')
    }
    if(cursor2.classList.contains('visually-hidden')) {
      cursor2.classList.remove('visually-hidden')
    }
    document.addEventListener('mousemove', (e) => {
      cursor.style.cssText = cursor2.style.cssText = 'left: ' + e.clientX + 'px; top:' + e.clientY + 'px;'
      })
  }
}

cursorChange()

window.addEventListener("resize", cursorChange);


// document.removeEventListener('mousemove', (e) => {
//   if(screenWidth < 993) {
//     cursor.style.cssText = cursor2.style.cssText = 'left: ' + e.clientX + 'px; top:' + e.clientY + 'px;'
//     cursor.classList.add('visually-hidden')
//     cursor2.classList.add('visually-hidden')
//   } else {
//     document.addEventListener('mousemove', (e) => {
//       cursor.style.cssText = cursor2.style.cssText = 'left: ' + e.clientX + 'px; top:' + e.clientY + 'px;'
//       cursor.classList.remove('visually-hidden')
//       cursor2.classList.remove('visually-hidden')
//     })
//   }
// })
