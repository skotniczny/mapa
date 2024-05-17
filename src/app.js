import { svgPositionGet, svgPositionSet, svgScale } from './js/svg-utils.js'
import { rgb2hex } from './js/utils.js'
import { createModal, openModal, closeModal } from './js/modal.js'
import { FLAGS } from './js/data.js'

const map = document.querySelector('svg')
const canvas = map.querySelector('#canvas')
const colorPicker = document.querySelector('#colorpicker')
const btnsMenu = document.querySelector('.menu-v')
const modal = document.querySelector('.modal')

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

const setState = (item) => {
  if (item) {
    const [key, value] = item
    state[key] = value
  }
  window.localStorage.setItem('mapState', JSON.stringify(state))
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
    delete state[target.id]
    setState()
  } else {
    target.style.fill = color
    setState([target.id, color])
  }
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
  setState()
}

const readState = () => {
  state = JSON.parse(window.localStorage.getItem('mapState')) || {}
  for (const item of Object.keys(state)) {
    const el = document.querySelector(`#${item}`)
    if (el) el.style.fill = state[item]
  }
}

const pickFlag = event => {
  const target = event.target
  if (target.className === 'flag') {
    const picked = document.querySelector('#pickedFlag')
    picked.textContent = event.target.firstChild.textContent
    picked.title = event.target.title
    closeModal(modal)
  }
}

const sortedFlags = FLAGS.sort((a, b) => a.name.localeCompare(b.name))

const modalContent = () => {
  const elements = []
  for (const item of sortedFlags) {
    const a = document.createElement('a')
    a.className = 'flag'
    a.title = item.description
    a.tabIndex = 1
    const flag = document.createElement('span')
    flag.textContent = item.emoji
    flag.className = 'flag_emoji'
    const desc = document.createElement('span')
    desc.textContent = item.name
    desc.className = 'flag_description'
    a.appendChild(flag)
    a.appendChild(desc)
    elements.push(a)
  }
  return elements
}

createModal(modal, modalContent)

document.addEventListener('DOMContentLoaded', readState)
document.addEventListener('keydown', handleKeyboard)
map.addEventListener('wheel', handleMouseWheel)
map.addEventListener('click', handleMapClick)
modal.addEventListener('click', pickFlag)
btnsMenu.addEventListener('click', event => {
  const targetId = event.target.id
  if (targetId === 'menuBtn') openModal(modal)
  if (targetId === 'downloadBtn') downloadMap()
  if (targetId === 'resetBtn') resetMap()
})
