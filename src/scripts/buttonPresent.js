const rotateBetweenWords = (value) => {
  const words = document.querySelectorAll('.advantages__wheel-inner')
  let deg = -60

  for (let word of words) {
      word.style.transform = `rotate(${ deg }deg)`
      deg += value
  }
}

const rotateBetweenLetters = (value) => {
  const letters = document.querySelectorAll('.advantages__wheel-content')
  let deg = 0

  for (let letter of letters) {
      letter.style.transform = `rotate(${ deg }deg)`
      deg += value
  }
}

rotateBetweenWords(10)
rotateBetweenLetters(5)
