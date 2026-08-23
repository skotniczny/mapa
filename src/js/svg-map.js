import { svgPositionGet, svgPositionSet, svgScale } from './svg-utils.js'
import { rgb2hex } from './utils.js'
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

const pickColorFromMap = target => {
  const color = target.dataset.stripeColor || rgb2hex(target.style.fill)
  if (!color) return
  tools.colorPicker.value = color
  tools.colorPickMode.click()
}

const handleMapClick = event => {
  const target = event.target
  if (isInvalidElement(target)) return
  if (tools.colorPickMode.checked) {
    pickColorFromMap(target)
    return
  }

  const pickedColor = tools.colorPicker.value
  const isStripesMode = tools.stripesMode.checked
  const path = getOriginal(target)
  const currentStripe = target.dataset.stripeColor || null
  const hasPickedColor = rgb2hex(path.style.fill) === pickedColor || currentStripe === pickedColor
  const isErasing = currentStripe ? isStripesMode && hasPickedColor : hasPickedColor

  if (isErasing) {
    if (currentStripe) {
      removeStripe(path)
      if (path.style.fill) {
        app.mapState.set([{ pathId: path.id, color: path.style.fill }])
      } else {
        app.mapState.remove([path.id])
      }
    } else {
      path.style.fill = ''
      app.mapState.remove([path.id])
    }
  } else if (isStripesMode) {
    addStripe(path, pickedColor)
    app.mapState.set([{ pathId: path.id, color: path.style.fill, stripeColor: pickedColor }])
  } else {
    if (currentStripe) removeStripe(path)
    path.style.fill = pickedColor
    app.mapState.set([{ pathId: path.id, color: pickedColor }])
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

const fillElements = (state, fill = true) => {
  for (const item of state.keys) {
    if (!item) continue
    /* global CSS */
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

const clearElements = (state) => {
  fillElements(state, false)
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

const setTheme = value => {
  app.map.dataset.mapTheme = value
}

const setBg = value => {
  app.map.dataset.mapBg = value
}

const toFileName = (name, ext) => {
  const clean = name?.trim().replace(/[\\/:*?"<>|]/g, '').slice(0, 30)
  const fileName = clean || 'map'
  return `${fileName}.${ext}`
}

const downloadFile = (data, fileName) => {
  const link = document.createElement('a')
  const url = URL.createObjectURL(new Blob([data]))
  link.href = url
  link.download = fileName
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 0)
}

const saveToSvgFile = (name) => {
  /* global XMLSerializer */
  const source = new XMLSerializer().serializeToString(app.map)
  downloadFile(`<?xml version="1.0" standalone="no"?>\r\n${source}`, toFileName(name, 'svg'))
}

const saveToJsonFile = (name) => {
  const content = []
  for (const item of app.mapState.keys) {
    content.push({ pathId: item, color: app.mapState.get(item) })
  }
  downloadFile(JSON.stringify(content), toFileName(name, 'json'))
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
  setTheme,
  setBg,
  saveToSvgFile,
  saveToJsonFile,
  resetMap,
  colorMap,
  moveMap,
  setMap,
  stepHistory
}

export default svgMap
