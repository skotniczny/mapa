import { svgPositionGet, svgPositionSet, svgScale } from './svg-utils.js'
import { rgb2hex, fillElements, clearElements } from './utils.js'
import { MapState } from './map-state.js'

const app = {
  map: null,
  canvas: null,
  colorPicker: null,
  colorPickMode: null,
  mapState: null
}

const tools = {
  menu: null,
  colorPicker: null,
  colorPickMode: null
}

const config = {
  minZoom: 0.25,
  maxZoom: 4,
  scale: 1,
  palette: ['#cfe7c6', '#eed2c8', '#f8f09b', '#f2bb94', '#a3b7da', '#eca2ca', '#99b6dd', '#db82c0', '#f3c271', '#decfaa', '#93c9c0', '#f0e7b5']
}

const isInvalidElement = target => target.id === 'ocean' || target.tagName !== 'path'

const handleMouseWheel = event => {
  event.preventDefault()

  // calc nextScale
  const delta = event.deltaY || event.deltaX
  const scaleStep = Math.abs(delta) < 50
    ? 0.05 // touchpad pitch
    : 0.25 // mouse wheel

  const scaleDelta = delta < 0 ? scaleStep : -scaleStep
  const nextScale = config.scale + scaleDelta // 'scale' is prev scale

  // calc fixedPoint
  const fixedPoint = { x: event.clientX, y: event.clientY }

  // scale
  // 'svgEl' is element to scale
  if (nextScale < config.minZoom || nextScale > config.maxZoom) return
  svgScale(app.canvas, fixedPoint, config.scale, nextScale)
  config.scale = nextScale
}

const handleMapClick = event => {
  const target = event.target
  const color = tools.colorPicker.value
  if (isInvalidElement(target)) return
  if (tools.colorPickMode.checked && target.tagName === 'path') {
    tools.colorPicker.value = rgb2hex(target.style.fill)
    tools.colorPickMode.click()
  } else if (target.style.fill && rgb2hex(target.style.fill) === color) {
    target.style.fill = ''
    app.mapState.remove([target.id])
  } else {
    target.style.fill = color
    app.mapState.set([{ pathId: target.id, color }])
  }
  app.mapState.save()
}

let handleMapDrag

const endMove = (event, cursor) => {
  if (event.button !== 0) return
  window.removeEventListener('mousemove', handleMapDrag)
  window.removeEventListener('mouseup', endMove)
  app.canvas.style.pointerEvents = ''
  app.map.style.cursor = cursor
}

const handleMapMousedown = event => {
  if (event.button !== 0) return
  const position = svgPositionGet(app.canvas)
  const currentCursor = app.map.style.cursor
  handleMapDrag = (() => {
    return (e) => {
      app.canvas.style.pointerEvents = 'none'
      app.map.style.cursor = 'move'
      const x = position.x + (e.clientX - event.x)
      const y = position.y + (e.clientY - event.y)
      svgPositionSet(app.canvas, { x, y })
    }
  })()

  window.addEventListener('mousemove', handleMapDrag)
  window.addEventListener('mouseup', event => endMove(event, currentCursor))
}

const handleMapContextmenu = event => {
  event.preventDefault()
  const target = event.target
  if (isInvalidElement(target) || tools.colorPickMode.checked) return

  const siblings = Array.from(target.parentNode.childNodes)
    .filter(element => !isInvalidElement(element) && !element.classList.contains('landxx'))
  if (target.style.fill) {
    const paths = []
    for (const item of siblings) {
      item.style.fill = ''
      paths.push(item.id)
    }
    app.mapState.remove(paths)
  } else {
    const color = tools.colorPicker.value
    const paths = []
    for (const item of siblings) {
      item.style.fill = color
      paths.push({ pathId: item.id, color })
    }
    app.mapState.set(paths)
  }
  app.mapState.save()
}

const readState = () => {
  app.mapState.load()
  fillElements(app.mapState)
}

const handleColorPickModeChange = () => {
  app.map.style.cursor = tools.colorPickMode.checked ? 'crosshair' : 'auto'
}

const init = conf => {
  if (!conf.el || !conf.elToolsMenu || !conf.localStorageKey) return
  app.map = conf.el
  app.canvas = conf.el.querySelector('#canvas')
  app.mapState = new MapState(conf.localStorageKey)
  tools.menu = conf.elToolsMenu
  tools.colorPicker = conf.elToolsMenu.querySelector('#colorpicker')
  tools.colorPickMode = conf.elToolsMenu.querySelector('#colorpickerMode')
  config.minZoom = conf.minZoom || config.minZoom
  config.maxZoom = conf.maxZoom || config.maxZoom
  config.scale = conf.scale || config.scale
  config.palette = conf.palette || config.palette

  app.map.addEventListener('wheel', handleMouseWheel)
  app.map.addEventListener('mousedown', handleMapMousedown)
  app.map.addEventListener('click', handleMapClick)
  app.map.addEventListener('contextmenu', handleMapContextmenu)
  tools.menu.addEventListener('click', event => {
    const targetId = event.target.id
    if (targetId === 'colorpicker' && tools.colorPickMode.checked) tools.colorPickMode.click()
  })
  tools.colorPickMode.addEventListener('change', handleColorPickModeChange)

  readState()
  handleColorPickModeChange()
}

const saveToSvgFile = () => {
  /* global XMLSerializer */
  const source = new XMLSerializer().serializeToString(app.map)
  // convert svg source to URI data scheme.
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<?xml version="1.0" standalone="no"?>\r\n${source}`)
  const downloadLink = document.createElement('a')
  downloadLink.href = url
  downloadLink.download = 'map.svg'
  downloadLink.click()
}

const saveToJsonFile = () => {
  const content = []
  for (const item of app.mapState.keys) {
    content.push({ pathId: item, color: app.mapState.get(item) })
  }
  const a = document.createElement('a')
  const file = new Blob([JSON.stringify(content)], { type: 'application/json' })
  a.href = URL.createObjectURL(file)
  a.download = 'map.json'
  a.click()
}

const resetMap = () => {
  clearElements(app.mapState)
  app.mapState.reset()
  app.mapState.save()
}

const colorMap = () => {
  const colors = config.palette
  const groups = Array.from(app.canvas.children)
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
  app.mapState.set(paths)
  app.mapState.save()
}

const moveMap = (direction) => {
  const position = svgPositionGet(app.canvas)
  if (direction === 'right') { svgPositionSet(app.canvas, { x: position.x - 50, y: position.y }) }
  if (direction === 'left') { svgPositionSet(app.canvas, { x: position.x + 50, y: position.y }) }
  if (direction === 'up') { svgPositionSet(app.canvas, { x: position.x, y: position.y + 50 }) }
  if (direction === 'down') { svgPositionSet(app.canvas, { x: position.x, y: position.y - 50 }) }
}

const setMap = (data) => {
  resetMap()
  app.mapState.set(data)
  fillElements(app.mapState)
  app.mapState.save()
}

const undoRecent = () => {
  clearElements(app.mapState)
  app.mapState.undo()
  fillElements(app.mapState)
  app.mapState.save()
}

const svgMap = {
  init,
  saveToSvgFile,
  saveToJsonFile,
  resetMap,
  colorMap,
  moveMap,
  setMap,
  undoRecent
}

export default svgMap
