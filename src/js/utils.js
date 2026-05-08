/* global CSS */
function rgb2hex (rgb) {
  return '#' + rgb.match(/\d+/g).map(x => (+x).toString(16).padStart(2, '0')).join('')
}

function fillElements (state, fill = true) {
  for (const item of state.keys) {
    const el = document.querySelector(`#${CSS.escape(item)}`)
    if (el) el.style.fill = fill ? state.get(item) : ''
  }
}

function clearElements (state) {
  fillElements(state, false)
}

export { rgb2hex, fillElements, clearElements }
