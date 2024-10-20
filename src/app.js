import { svgPositionGet, svgPositionSet, svgScale } from './js/svg-utils.js'
import { rgb2hex, fillElements, clearElements } from './js/utils.js'
import { createModalWithSearch, openModal, closeModal } from './js/modal.js'
import { FLAGS } from './js/data.js'
import { MapState } from './js/map-state.js'

const map = document.querySelector('svg')
const canvas = map.querySelector('#canvas')
const colorPicker = document.querySelector('#colorpicker')
const btnsMenu = document.querySelector('.menu-v')
const modal = document.querySelector('.modal')
const filePicker = document.querySelector('#filePicker')
const presets = document.querySelector('#presets')

const minZoom = 0.25
const maxZoom = 4
let scale = 1
const mapState = new MapState('mapState')

const undoRecent = () => {
  clearElements(mapState)
  mapState.undo()
  fillElements(mapState)
  mapState.save()
}

const handleKeyboard = event => {
  if (event.target.tagName.toLowerCase() !== 'input') {
    const position = svgPositionGet(canvas)
    const key = event.key.toLowerCase()
    if (key === 'arrowright' || key === 'd') { svgPositionSet(canvas, { x: position.x - 50, y: position.y }) }
    if (key === 'arrowleft' || key === 'a') { svgPositionSet(canvas, { x: position.x + 50, y: position.y }) }
    if (key === 'arrowup' || key === 'w') { svgPositionSet(canvas, { x: position.x, y: position.y + 50 }) }
    if (key === 'arrowdown' || key === 's') { svgPositionSet(canvas, { x: position.x, y: position.y - 50 }) }
    if (key === 'z' && event.ctrlKey) { undoRecent() }
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

const isInvalidElement = target => target.id === 'ocean' || target.tagName !== 'path'

const handleMapClick = event => {
  const target = event.target
  const color = colorPicker.value
  if (isInvalidElement(target)) return
  if (target.style.fill && rgb2hex(target.style.fill) === color) {
    target.style.fill = ''
    mapState.remove([target.id])
  } else {
    target.style.fill = color
    mapState.set([{ pathId: target.id, color }])
  }
  mapState.save()
}

let handleMapDrag

const handleMapMousedown = event => {
  const position = svgPositionGet(canvas)
  handleMapDrag = (() => {
    return (e) => {
      canvas.style.pointerEvents = 'none'
      const x = position.x + (e.clientX - event.x)
      const y = position.y + (e.clientY - event.y)
      svgPositionSet(canvas, { x, y })
    }
  })()

  map.addEventListener('mousemove', handleMapDrag)
  map.addEventListener('mouseup', endMove)
}

const endMove = () => {
  map.removeEventListener('mousemove', handleMapDrag)
  map.removeEventListener('mousup', endMove)
  canvas.style.pointerEvents = ''
}

const handleMapContextmenu = event => {
  event.preventDefault()
  const target = event.target
  if (isInvalidElement(target)) return

  const siblings = Array.from(target.parentNode.childNodes)
    .filter(element => !isInvalidElement(element) && !element.classList.contains('landxx'))
  if (target.style.fill) {
    const paths = []
    for (const item of siblings) {
      item.style.fill = ''
      paths.push(item.id)
    }
    mapState.remove(paths)
  } else {
    const color = colorPicker.value
    const paths = []
    for (const item of siblings) {
      item.style.fill = color
      paths.push({ pathId: item.id, color })
    }
    mapState.set(paths)
  }
  mapState.save()
}

const downloadMap = () => {
  /* global XMLSerializer */
  const source = new XMLSerializer().serializeToString(map)
  // convert svg source to URI data scheme.
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<?xml version="1.0" standalone="no"?>\r\n${source}`)
  const downloadLink = document.createElement('a')
  downloadLink.href = url
  downloadLink.download = 'map.svg'
  downloadLink.click()
}

const saveToJsonFile = () => {
  const content = []
  for (const item of mapState.keys) {
    content.push({ pathId: item, color: mapState.get(item) })
  }
  const a = document.createElement('a')
  const file = new Blob([JSON.stringify(content)], { type: 'application/json' })
  a.href = URL.createObjectURL(file)
  a.download = 'map.json'
  a.click()
}

const resetMap = () => {
  clearElements(mapState)
  mapState.reset()
  mapState.save()
}

const readState = () => {
  mapState.load()
  fillElements(mapState)
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

const colorMap = () => {
  const colors = ['#cfe7c6', '#eed2c8', '#f8f09b', '#f2bb94', '#a3b7da', '#eca2ca', '#99b6dd', '#db82c0', '#f3c271', '#decfaa', '#93c9c0', '#f0e7b5']
  const groups = Array.from(canvas.children)
    .filter(element => element.tagName === 'g')
    .map(element => element.querySelectorAll('path'))
  let index = Math.floor(Math.random() * colors.length)
  const paths = []
  for (const group of groups) {
    if (index > colors.length - 1) index = 0
    if (group.length <= 1) continue
    const color = colors[index]
    for (const path of group) {
      if (path.classList.contains('landxx') || path.style.fill) continue
      path.style.fill = color
      paths.push({ pathId: path.id, color })
    }
    index += 1
  }
  mapState.set(paths)
  mapState.save()
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

const handleSearch = event => {
  const searchValue = event.target.value.toLowerCase()
  const modalItems = modal.querySelectorAll('.modal_items .flag')
  modalItems.forEach(item => {
    const itemText = item.querySelector('.flag_description').textContent.toLowerCase()
    if (itemText.includes(searchValue)) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
}

const pickCustomFlag = event => {
  const file = event.target.files[0]
  const container = document.querySelector('#pickedFlag')
  container.innerHTML = ''
  const img = document.createElement('img')
  img.classList.add('flag_file')
  img.src = URL.createObjectURL(file)
  container.appendChild(img)
}

const handlePresetChange = async event => {
  let data = []
  if (event.target.value === '') return
  if (event.target.value === '0') {
    data = await import('./json/map-zones.json')
  }
  if (event.target.value === '1') {
    data = await import('./json/map-spqr.json')
  }
  if (event.target.value === '2') {
    data = await import('./json/map-1444.json')
  }
  if (event.target.value === '3') {
    data = await import('./json/map-1619.json')
  }
  if (event.target.value === '4') {
    data = await import('./json/map-1806.json')
  }
  if (event.target.value === '5') {
    data = await import('./json/map-1912.json')
  }
  if (event.target.value === '6') {
    data = await import('./json/map-1939.json')
  }
  if (event.target.value === '7') {
    data = await import('./json/map-2024.json')
  }

  document.activeElement.blur()
  resetMap()
  mapState.set(data)
  fillElements(mapState)
  mapState.save()
}

createModalWithSearch(modal, modalContent, handleSearch)

document.addEventListener('DOMContentLoaded', readState)
document.addEventListener('keydown', handleKeyboard)
map.addEventListener('wheel', handleMouseWheel)
map.addEventListener('mousedown', handleMapMousedown)
map.addEventListener('click', handleMapClick)
map.addEventListener('contextmenu', handleMapContextmenu)
modal.addEventListener('click', pickFlag)
filePicker.addEventListener('change', pickCustomFlag)
presets.addEventListener('change', handlePresetChange)
btnsMenu.addEventListener('click', event => {
  const targetId = event.target.id
  if (targetId === 'menuBtn') openModal(modal)
  if (targetId === 'downloadBtn') downloadMap()
  if (targetId === 'resetBtn') resetMap()
  if (targetId === 'colorBtn') colorMap()
  if (targetId === 'saveBtn') saveToJsonFile()
})
