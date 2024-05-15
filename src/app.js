import { svgPositionGet, svgPositionSet } from './js/svg-utils.js'

const map = document.querySelector('svg')
const canvas = map.querySelector('#canvas')

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

document.addEventListener('keydown', handleKeyboard)
