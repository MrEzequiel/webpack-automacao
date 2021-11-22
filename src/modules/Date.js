import { format } from 'date-fns'

export default function DateForModal() {
  const getToday = () => format(new Date(), 'HH:mm : dd/MM/yy')
  const button = document.querySelector('.start button')
  const cardIsActive = () => document.querySelector('.card.active')

  const date = {
    counter: null,

    init() {
      const dateElement = document.querySelector('.date')
      this.counter = setInterval(() => {
        dateElement.innerHTML = `
          <p>${getToday()}<p>
        `
      }, 1000)
    },

    stop() {
      clearInterval(this.counter)
    },
  }

  button.addEventListener('click', () => {
    if (cardIsActive()) {
      date.init()
    } else {
      date.stop()
    }
  })
}
