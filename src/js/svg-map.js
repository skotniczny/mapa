import { svgPositionGet, svgPositionSet, svgScale } from './svg-utils.js'
import { rgb2hex, fillElements, clearElements } from './utils.js'
import { addStripe, getOriginal, removeStripe } from './stripes.js'
import { MapState } from './map-state.js'

const app = {
  map: null,
  canvas: null,
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
  if (isInvalidElement(target)) return
  const color = tools.colorPicker.value
  const isStripeClone = !!target.dataset.stripeColor
  const isColorPickMode = tools.colorPickMode.checked
  const isStripesMode = tools.stripesMode.checked

  if (isColorPickMode && target.tagName === 'path') {
    tools.colorPicker.value = isStripeClone ? target.dataset.stripeColor : rgb2hex(target.style.fill)
    tools.colorPickMode.click()
    return
  }

  if (isStripeClone) {
    const og = getOriginal(target)
    if (!isStripesMode) {
      target.remove()
      og.style.fill = color
      app.mapState.set([{ pathId: og.id, color }])
    } else if (rgb2hex(og.style.fill) === color || target.dataset.stripeColor === color) {
      target.remove()
      og.style.fill ? app.mapState.set([{ pathId: og.id, color: og.style.fill }]) : app.mapState.remove([og.id])
    } else {
      addStripe(target, color)
      app.mapState.set([{ pathId: og.id, color: og.style.fill, stripeColor: color }])
    }
  } else if (rgb2hex(target.style.fill) === color) {
    target.style.fill = ''
    app.mapState.remove([target.id])
  } else {
    if (isStripesMode) {
      addStripe(target, color)
      app.mapState.set([{ pathId: target.id, color: target.style.fill, stripeColor: color }])
    } else {
      target.style.fill = color
      app.mapState.set([{ pathId: target.id, color }])
    }
  }
  app.mapState.save()
}

const handleMapMousedown = event => {
  if (event.button !== 0) return
  let moved = false
  const position = svgPositionGet(app.canvas)
  const currentCursor = app.map.style.cursor
  app.map.style.cursor = 'move'
  app.map.setPointerCapture(event.pointerId)
  const handleMapDrag = (e) => {
    const dx = e.clientX - event.clientX
    const dy = e.clientY - event.clientY
    if (!moved && (Math.abs(dx) < 3 && Math.abs(dy) < 3)) return
    moved = true
    app.canvas.style.pointerEvents = 'none'
    svgPositionSet(app.canvas, { x: position.x + dx, y: position.y + dy })
  }
  app.map.addEventListener('pointermove', handleMapDrag)
  app.map.addEventListener('pointerup', (e) => {
    app.map.releasePointerCapture(e.pointerId)
    app.map.removeEventListener('pointermove', handleMapDrag)
    app.canvas.style.pointerEvents = ''
    app.map.style.cursor = currentCursor
    if (!moved) handleMapClick(event)
  }, { once: true })
}

const handleMapContextmenu = event => {
  event.preventDefault()
  const target = event.target
  if (isInvalidElement(target) || tools.colorPickMode.checked) return

  const original = getOriginal(target)
  const siblings = Array.from(target.parentNode.childNodes)
    .filter(el => !isInvalidElement(el) && !el.classList.contains('landxx') && !el.dataset.stripeFor)

  if (original.style.fill) {
    const paths = []
    for (const item of siblings) {
      item.style.fill = ''
      removeStripe(item)
      paths.push(item.id)
    }
    app.mapState.remove(paths)
  } else {
    const color = tools.colorPicker.value
    const paths = []
    for (const item of siblings) {
      item.style.fill = color
      removeStripe(item)
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
  tools.stripesMode = conf.elToolsMenu.querySelector('#stripesMode')
  config.minZoom = conf.minZoom || config.minZoom
  config.maxZoom = conf.maxZoom || config.maxZoom
  config.scale = conf.scale || config.scale
  config.palette = conf.palette || config.palette

  app.map.addEventListener('wheel', handleMouseWheel)
  app.map.addEventListener('pointerdown', handleMapMousedown)
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
  const offset = 50
  const pos = { x: position.x, y: position.y }
  switch (direction) {
    case 'right':
      pos.x -= offset
      break
    case 'left':
      pos.x += offset
      break
    case 'up':
      pos.y += offset
      break
    case 'down':
      pos.y -= offset
      break
    default:
      break
  }
  svgPositionSet(app.canvas, pos)
}

const setMap = (data) => {
  resetMap()
  app.mapState.set(data)
  fillElements(app.mapState)
  app.mapState.save()
}

const stepHistory = (direction) => {
  if (direction === 'prev' && !app.mapState.canUndo) return
  if (direction === 'next' && !app.mapState.canRedo) return
  clearElements(app.mapState)
  if (direction === 'prev') app.mapState.undo()
  if (direction === 'next') app.mapState.redo()
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
  stepHistory
}

export default svgMap
