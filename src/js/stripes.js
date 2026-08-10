import { rgb2hex } from './utils'

export function getOriginal (el) {
  if (el.dataset.stripeFor) {
    return document.getElementById(el.dataset.stripeFor)
  }
  return el
}

export function addStripe (el, color) {
  const original = getOriginal(el)
  const existing = original.nextElementSibling

  if (existing && existing.dataset.stripeFor === original.id) {
    existing.remove()
  }
  if (original.style.fill && rgb2hex(original.style.fill) === color) return

  const patternId = getOrCreatePattern(color)
  const clone = original.cloneNode(false)
  clone.removeAttribute('id')
  clone.dataset.stripeFor = original.id
  clone.dataset.stripeColor = color
  clone.setAttribute('style', `fill: url(#${patternId})`)
  original.insertAdjacentElement('afterend', clone)
}

export function removeStripe (el) {
  if (el.nextElementSibling?.dataset.stripeFor === el.id) {
    el.nextElementSibling.remove()
  }
}

function getOrCreatePattern (color) {
  const patternId = `stripes_${color.replace('#', '')}`
  if (document.getElementById(patternId)) return patternId

  const defs = document.getElementById('defs4915')
  const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern')
  pattern.setAttribute('id', patternId)
  pattern.setAttribute('patternUnits', 'userSpaceOnUse')
  pattern.setAttribute('width', '20')
  pattern.setAttribute('height', '20')
  pattern.setAttribute('patternTransform', 'rotate(45)')

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  line.setAttribute('x1', '10')
  line.setAttribute('y1', '0')
  line.setAttribute('x2', '10')
  line.setAttribute('y2', '20')
  line.style.stroke = color
  line.style.strokeWidth = '10px'

  pattern.appendChild(line)
  defs.appendChild(pattern)
  return patternId
}
