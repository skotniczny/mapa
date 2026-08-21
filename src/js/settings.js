const storageKey = 'mapSettings'
const state = {
  'map-theme': 'default',
  'map-bg': 'light'
}
const showClass = 'settings-panel_show'

let panel = null
let handleChange = null
let lastFocused = null

const open = () => {
  lastFocused = document.activeElement
  panel.classList.add(showClass)
  panel.focus()
}

const close = () => {
  const hadFocus = panel.contains(document.activeElement)
  panel.classList.remove(showClass)
  if (hadFocus && lastFocused) lastFocused.focus()
}

const toggle = () => {
  if (panel.classList.contains(showClass)) close()
  else open()
}

const save = () => {
  window.localStorage.setItem(storageKey, JSON.stringify(state))
}

const restore = () => {
  const stored = JSON.parse(window.localStorage.getItem(storageKey)) || {}
  for (const name of Object.keys(state)) {
    const value = stored[name]
    const input = value && panel.querySelector(`input[name="${name}"][value="${value}"]`)
    if (!input) continue
    input.checked = true
    state[name] = value
  }
}

const handlePanelClick = event => {
  if (event.target.id === 'settingsClose') close()
}

const handlePanelChange = event => {
  const { name, value } = event.target
  if (!(name in state)) return
  state[name] = value
  save()
  handleChange(name, value)
}

const handleKeydown = event => {
  if (event.key !== 'Escape' || !panel.classList.contains(showClass) || document.querySelector('dialog[open]')) return
  close()
}

const create = (el, conf) => {
  panel = el
  handleChange = conf.onChange
  panel.addEventListener('click', handlePanelClick)
  panel.addEventListener('change', handlePanelChange)
  document.addEventListener('keydown', handleKeydown)
  restore()
  for (const [name, value] of Object.entries(state)) {
    handleChange(name, value)
  }
}

const settings = {
  create,
  toggle
}

export default settings
