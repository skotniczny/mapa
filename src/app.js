import modalSearch from './js/modal-search.js'
import svgMap from './js/svg-map.js'
import settings from './js/settings.js'

const btnsMenu = document.querySelector('.menu-v')
const filePicker = document.querySelector('#filePicker')
const presets = document.querySelector('#presets')
const pickedFlag = document.querySelector('#pickedFlag')
const mapName = document.querySelector('#mapName')

svgMap.init({
  el: document.querySelector('svg'),
  elToolsMenu: document.querySelector('.menu-tools'),
  localStorageKey: 'mapState'
})
modalSearch.create(document.querySelector('.modal'))
settings.create(document.querySelector('#settingsPanel'), {
  onChange: (name, value) => {
    if (name === 'map-theme') svgMap.setTheme(value)
    if (name === 'map-bg') svgMap.setBg(value)
  }
})

const handleKeyboard = event => {
  if (!event.target.matches('input')) {
    const key = event.key.toLowerCase()
    if (key === 'arrowright' || key === 'd') { svgMap.moveMap('right') }
    if (key === 'arrowleft' || key === 'a') { svgMap.moveMap('left') }
    if (key === 'arrowup' || key === 'w') { svgMap.moveMap('up') }
    if (key === 'arrowdown' || key === 's') { svgMap.moveMap('down') }
    if (key === 'z' && event.ctrlKey) { svgMap.stepHistory('prev') }
    if (key === 'y' && event.ctrlKey) { svgMap.stepHistory('next') }
  }
}

const dataLoaders = {
  0: () => import('./json/map-zones.json'),
  1: () => import('./json/map-spqr.json'),
  2: () => import('./json/map-1444.json'),
  3: () => import('./json/map-1619.json'),
  4: () => import('./json/map-1806.json'),
  5: () => import('./json/map-1912.json'),
  6: () => import('./json/map-1939.json'),
  7: () => import('./json/map-current.json')
}

const handlePresetChange = async event => {
  const loader = dataLoaders[event.target.value]
  if (!loader) return
  const data = await loader()
  document.activeElement.blur()
  svgMap.setMap(data)
}

const pickCustomFlag = event => {
  const file = event.target.files[0]
  filePicker.value = ''
  const img = document.createElement('img')
  const revoke = () => URL.revokeObjectURL(img.src)
  img.alt = file.name
  img.classList.add('flag_file')
  img.addEventListener('load', revoke, { once: true })
  img.addEventListener('error', () => {
    revoke()
    pickedFlag.replaceChildren()
    pickedFlag.title = ''
  }, { once: true })
  img.src = URL.createObjectURL(file)
  pickedFlag.replaceChildren(img)
  pickedFlag.title = file.name
}

document.addEventListener('keydown', handleKeyboard)
filePicker.addEventListener('change', pickCustomFlag)
presets.addEventListener('change', handlePresetChange)
btnsMenu.addEventListener('click', event => {
  const btn = event.target.closest('.control-btn')
  if (!btn) return
  const targetId = btn.id
  if (targetId === 'menuBtn') modalSearch.open()
  if (targetId === 'downloadBtn') svgMap.saveToSvgFile(mapName.value)
  if (targetId === 'resetBtn') {
    svgMap.resetMap()
    presets.value = ''
  }
  if (targetId === 'colorBtn') svgMap.colorMap()
  if (targetId === 'saveBtn') svgMap.saveToJsonFile(mapName.value)
  if (targetId === 'settingsBtn') settings.toggle()
})
