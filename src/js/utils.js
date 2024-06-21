function rgb2hex (c) {
  return '#' + c.match(/\d+/g).map(x => (+x).toString(16).padStart(2, 0)).join('')
}

function fillElements (state, fill = true) {
  for (const item of state.keys) {
    try {
      const el = document.querySelector(`#${item}`)
      if (el) el.style.fill = fill ? state.get(item) : ''
    } catch (e) {
      console.error('Błąd:', e.message)
    }
  }
}

function clearElements (state) {
  fillElements(state, false)
}

export { rgb2hex, fillElements, clearElements }
