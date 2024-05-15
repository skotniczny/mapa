import { svgPositionGet, svgPositionSet, svgScale } from './js/svg-utils.js'

const map = document.querySelector('svg')
const canvas = map.querySelector('#canvas')

const minZoom = 0.25
const maxZoom = 4
let scale = 1

const handleKeyboard = event => {
  if (event.target.tagName.toLowerCase() !== 'input') {
    const position = svgPositionGet(canvas)
    const key = event.key.toLowerCase()
    if (key === 'arrowright' || key === 'd') { svgPositionSet(canvas, { x: position.x - 50, y: position.y }) }
    if (key === 'arrowleft' || key === 'a') { svgPositionSet(canvas, { x: position.x + 50, y: position.y }) }
    if (key === 'arrowup' || key === 'w') { svgPositionSet(canvas, { x: position.x, y: position.y + 50 }) }
    if (key === 'arrowdown' || key === 's') { svgPositionSet(canvas, { x: position.x, y: position.y - 50 }) }
  }
}

const handleMouseWheel = event => {
  event.preventDefault()

  // calc nextScale
  const delta = event.deltaY || event.deltaX
  const scaleStep = Math.abs(delta) < 50
    ? 0.05 // touchpad pitch
    : 0.25 // mouse wheel

  const scaleDelta = delta < 0 ? scaleStep : -scaleStep
  const nextScale = scale + scaleDelta // 'scale' is prev scale

  // calc fixedPoint
  const fixedPoint = { x: event.clientX, y: event.clientY }

  // scale
  // 'svgEl' is element to scale
  if (nextScale < minZoom || nextScale > maxZoom) return
  svgScale(canvas, fixedPoint, scale, nextScale)
  scale = nextScale
}

document.addEventListener('keydown', handleKeyboard)
map.addEventListener('wheel', handleMouseWheel)
