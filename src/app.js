import { openModal } from './js/modal.js'
import modalSearch from './js/modal-search.js'
import svgMap from './js/svg-map.js'

const btnsMenu = document.querySelector('.menu-v')
const modal = document.querySelector('.modal')
const filePicker = document.querySelector('#filePicker')
const presets = document.querySelector('#presets')

svgMap.init({
  el: document.querySelector('svg'),
  elToolsMenu: document.querySelector('.menu-tools'),
  localStorageKey: 'mapState'
})
modalSearch.create(modal)

const handleKeyboard = event => {
  if (event.target.tagName.toLowerCase() !== 'input') {
    const key = event.key.toLowerCase()
    if (key === 'arrowright' || key === 'd') { svgMap.moveMap('right') }
    if (key === 'arrowleft' || key === 'a') { svgMap.moveMap('left') }
    if (key === 'arrowup' || key === 'w') { svgMap.moveMap('up') }
    if (key === 'arrowdown' || key === 's') { svgMap.moveMap('down') }
    if (key === 'z' && event.ctrlKey) { svgMap.undoRecent() }
  }
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
  svgMap.setMap(data)
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

document.addEventListener('keydown', handleKeyboard)
filePicker.addEventListener('change', pickCustomFlag)
presets.addEventListener('change', handlePresetChange)
btnsMenu.addEventListener('click', event => {
  const targetId = event.target.id
  if (targetId === 'menuBtn') openModal(modal)
  if (targetId === 'downloadBtn') svgMap.saveToSvgFile()
  if (targetId === 'resetBtn') {
    svgMap.resetMap()
    presets.value = ''
  }
  if (targetId === 'colorBtn') svgMap.colorMap()
  if (targetId === 'saveBtn') svgMap.saveToJsonFile()
})
