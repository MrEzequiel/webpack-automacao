export default function Modal(el, button) {
  const toggleModal = ({ target }) => {
    if (el.classList.contains('active')) {
      el.classList.remove('active')
      target.innerText = 'Abrir meu perfil!'
    } else {
      el.classList.add('active')
      target.innerText = 'Fechar meu perfil!'
    }
  }

  button.addEventListener('click', toggleModal)
}
