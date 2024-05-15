import { svgPositionGet, svgPositionSet, svgScale } from './js/svg-utils.js'
import { rgb2hex } from './js/utils.js'

const map = document.querySelector('svg')
const canvas = map.querySelector('#canvas')
const colorPicker = document.querySelector('#colorpicker')
const btnsMenu = document.querySelector('.menu-v')

const minZoom = 0.25
const maxZoom = 4
let scale = 1
let state = {}

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

const handleMapClick = event => {
  const target = event.target
  const color = colorPicker.value
  if (target.style.fill && rgb2hex(target.style.fill) === color) {
    target.style.fill = ''
  } else {
    target.style.fill = colorPicker.value
  }
  state[target.id] = color
  window.localStorage.setItem('mapState', JSON.stringify(state))
}

const downloadMap = () => {
  /* global XMLSerializer */
  const source = new XMLSerializer().serializeToString(map)
  // convert svg source to URI data scheme.
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<?xml version="1.0" standalone="no"?>\r\n${source}`)
  const downloadLink = document.createElement('a')
  downloadLink.href = url
  downloadLink.download = 'map.svg'
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}

const resetMap = () => {
  for (const item of Object.keys(state)) {
    const el = document.querySelector(`#${item}`)
    if (el) el.style.fill = ''
  }
  state = {}
  window.localStorage.setItem('mapState', JSON.stringify({}))
}

const readState = () => {
  state = JSON.parse(window.localStorage.getItem('mapState')) || {}
  for (const item of Object.keys(state)) {
    const el = document.querySelector(`#${item}`)
    if (el) el.style.fill = state[item]
  }
}

document.addEventListener('DOMContentLoaded', readState)
document.addEventListener('keydown', handleKeyboard)
map.addEventListener('wheel', handleMouseWheel)
map.addEventListener('click', handleMapClick)
btnsMenu.addEventListener('click', event => {
  const targetId = event.target.id
  if (targetId === 'menuBtn') {
    window.alert('Kliknięcie przycisku')
  }
  if (targetId === 'downloadBtn') {
    downloadMap()
  }
  if (targetId === 'resetBtn') {
    resetMap()
  }
})
