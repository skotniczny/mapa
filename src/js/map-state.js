class MapState {
  #state = {}
  #localStorageKeyName

  constructor (localStorageKeyName) {
    this.#localStorageKeyName = localStorageKeyName
  }

  get keys () {
    return Object.keys(this.#state)
  }

  get (id) {
    return this.#state[id]
  }

  set (items) {
    if (items.length <= 0) return
    for (const element of items) {
      this.#state[element.pathId] = element.color
    }
  }

  remove (items) {
    if (items.length <= 0) return
    for (const id of items) {
      delete this.#state[id]
    }
  }

  reset () {
    this.#state = {}
  }

  load () {
    this.#state = JSON.parse(window.localStorage.getItem(this.#localStorageKeyName)) || {}
  }

  save () {
    window.localStorage.setItem(this.#localStorageKeyName, JSON.stringify(this.#state))
  }
}

export { MapState }
