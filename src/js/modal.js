function createModal (el, callback) {
  const modalBody = el.querySelector('.modal_body')
  const modalContent = document.createElement('div')
  modalContent.className = 'modal_content'
  callback().forEach(el => modalContent.appendChild(el))
  modalBody.appendChild(modalContent)
  const closeBtn = el.querySelector('.modal_close')
  closeBtn.addEventListener('click', () => closeModal(el))
}

function openModal (el) {
  el.classList.add('modal-active')
}

function closeModal (el) {
  el.classList.remove('modal-active')
}

export { createModal, openModal, closeModal }
