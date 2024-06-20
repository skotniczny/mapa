class MapState {
  #state = {}
  #prevState = {}
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
    this.#prevState = Object.assign({}, this.#state)
    for (const element of items) {
      this.#state[element.pathId] = element.color
    }
  }

  remove (items) {
    if (items.length <= 0) return
    this.#prevState = Object.assign({}, this.#state)
    for (const id of items) {
      delete this.#state[id]
    }
  }

  reset () {
    this.#prevState = this.#state
    this.#state = {}
  }

  undo () {
    const temp = this.#state
    this.#state = this.#prevState
    this.#prevState = temp
  }

  load () {
    this.#state = JSON.parse(window.localStorage.getItem(this.#localStorageKeyName)) || {}
  }

  save () {
    window.localStorage.setItem(this.#localStorageKeyName, JSON.stringify(this.#state))
  }
}

export { MapState }
