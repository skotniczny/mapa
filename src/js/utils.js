/* global CSS */
import { addStripe, removeStripe } from './stripes'

function rgb2hex (rgb) {
  const match = rgb?.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\)/)
  if (!match) return
  return '#' + match.slice(1).map(x => (Number(x)).toString(16).padStart(2, '0')).join('')
}

function fillElements (state, fill = true) {
  for (const item of state.keys) {
    if (!item) continue
    const el = document.querySelector(`#${CSS.escape(item)}`)
    if (!el) continue
    const value = state.get(item)
    const [color, stripeColor] = Array.isArray(value) ? value : [value, null]
    if (fill) {
      el.style.fill = color ?? ''
      if (stripeColor) addStripe(el, stripeColor)
    } else {
      el.style.fill = ''
      removeStripe(el)
    }
  }
}

function clearElements (state) {
  fillElements(state, false)
}

export { rgb2hex, fillElements, clearElements }
