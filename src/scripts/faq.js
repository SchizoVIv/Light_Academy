const questionList = document.querySelectorAll('.faq__question')

questionList.forEach((question, i) => {
  question.addEventListener('click', () => {
    const answerList = document.querySelectorAll('.faq__answer-text')
    const questionAfterList = document.querySelectorAll('.faq__question-text')
    answerList.forEach((answer, index) => {
      if(i === index) {
          answer.classList.toggle('faq__answer-text_active')
      }
    })

    questionAfterList.forEach((after, index) => {
      if(i === index) {
        after.classList.toggle('hidden-after')
      }
    })
  })
})
