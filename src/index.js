// STYLE IMPORT
import '../scss/style.scss'

// MODULES IMPORTS
import Modal from './modules/Modal'
import DateForModal from './modules/Date'

const button = document.querySelector('.start button')
const element = document.querySelector('.card')

Modal(element, button)

DateForModal()
