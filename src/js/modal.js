function createModal (el, callback) {
  const modalBody = el.querySelector('.modal_body')
  const modalContent = document.createElement('div')
  const modalContentItems = document.createElement('div')
  modalContent.className = 'modal_content'
  modalContentItems.className = 'modal_items'
  callback().forEach(el => modalContentItems.appendChild(el))
  modalContent.appendChild(modalContentItems)
  modalBody.appendChild(modalContent)
  const closeBtn = el.querySelector('.modal_close')
  closeBtn.addEventListener('click', () => closeModal(el))
}

function createModalWithSearch (el, callback, searchCallback) {
  createModal(el, callback)
  const searchInput = document.createElement('input')
  searchInput.type = 'text'
  searchInput.id = 'search'
  searchInput.classList.add('control', 'control-field', 'control-search')
  searchInput.addEventListener('input', searchCallback)
  el.querySelector('.modal_content').insertBefore(searchInput, el.querySelector('.modal_items'))
}

function openModal (el) {
  el.classList.add('modal-active')
}

function closeModal (el) {
  el.classList.remove('modal-active')
}

export { createModal, createModalWithSearch, openModal, closeModal }
