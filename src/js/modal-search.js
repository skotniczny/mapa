import { createModalWithSearch, closeModal, openModal } from './modal.js'
import { FLAGS } from './data.js'

let modal = null

const pickFlag = event => {
  const flag = event.target.closest('.flag')
  if (flag) {
    const picked = document.querySelector('#pickedFlag')
    picked.textContent = flag.firstChild.textContent
    picked.title = flag.title
    closeModal(modal)
  }
}

const sortedFlags = [...FLAGS].sort((a, b) => a.name.localeCompare(b.name))

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
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}

const create = el => {
  modal = el
  createModalWithSearch(el, modalContent, handleSearch)
  modal.addEventListener('click', pickFlag)
}

const open = () => {
  openModal(modal)
}

const modalSearch = {
  create,
  open
}

export default modalSearch
