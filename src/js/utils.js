/* global CSS */
function rgb2hex (rgb) {
  const match = rgb?.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\)/)
  if (!match) return
  return '#' + match.slice(1).map(x => (Number(x)).toString(16).padStart(2, '0')).join('')
}

function fillElements (state, fill = true) {
  for (const item of state.keys) {
    if (!item) continue
    const el = document.querySelector(`#${CSS.escape(item)}`)
    if (el) el.style.fill = fill ? state.get(item) : ''
  }
}

function clearElements (state) {
  fillElements(state, false)
}

export { rgb2hex, fillElements, clearElements }
