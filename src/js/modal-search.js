import { createModalWithSearch, closeModal } from './modal.js'
import { FLAGS } from './data.js'

let modal = null

const pickFlag = event => {
  const target = event.target
  if (target.className === 'flag') {
    const picked = document.querySelector('#pickedFlag')
    picked.textContent = event.target.firstChild.textContent
    picked.title = event.target.title
    closeModal(modal)
  }
}

const sortedFlags = FLAGS.sort((a, b) => a.name.localeCompare(b.name))

const modalContent = () => {
  const elements = []
  for (const item of sortedFlags) {
    const a = document.createElement('a')
    a.className = 'flag'
    a.title = item.description
    a.tabIndex = 1
    const flag = document.createElement('span')
    flag.textContent = item.emoji
    flag.className = 'flag_emoji'
    const desc = document.createElement('span')
    desc.textContent = item.name
    desc.className = 'flag_description'
    a.appendChild(flag)
    a.appendChild(desc)
    elements.push(a)
  }
  return elements
}

const handleSearch = event => {
  const searchValue = event.target.value.toLowerCase()
  const modalItems = modal.querySelectorAll('.modal_items .flag')
  modalItems.forEach(item => {
    const itemText = item.querySelector('.flag_description').textContent.toLowerCase()
    if (itemText.includes(searchValue)) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
}

const create = el => {
  modal = el
  createModalWithSearch(el, modalContent, handleSearch)
  modal.addEventListener('click', pickFlag)
}

const modalSearch = {
  create
}

export default modalSearch
