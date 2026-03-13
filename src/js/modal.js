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
  el.addEventListener('click', (e) => {
    if (e.target === el) closeModal(el)
  })
}

function createModalWithSearch (el, callback, searchCallback) {
  createModal(el, callback)
  const searchInput = document.createElement('input')
  searchInput.type = 'text'
  searchInput.id = 'search'
  searchInput.classList.add('control', 'control-field', 'control-search')
  searchInput.addEventListener('input', searchCallback)
  el.querySelector('.modal_content').insertBefore(searchInput, el.querySelector('.modal_items'))
  el.addEventListener('close', () => resetSearch(searchInput))
}

function openModal (el) {
  el.showModal()
}

function closeModal (el) {
  el.close()
}

function resetSearch (searchInput) {
  searchInput.value = ''
  searchInput.dispatchEvent(new Event('input'))
}

export { createModal, createModalWithSearch, openModal, closeModal }
