class MapState {
  #state = {}
  #maxSnapshotHistory = 25
  #redoStack = []
  #undoStack = []
  #localStorageKeyName

  constructor (localStorageKeyName) {
    this.#localStorageKeyName = localStorageKeyName
  }

  get keys () {
    return Object.keys(this.#state)
  }

  get canUndo () {
    return this.#undoStack.length > 0
  }

  get canRedo () {
    return this.#redoStack.length > 0
  }

  get (id) {
    return this.#state[id]
  }

  set (items) {
    if (!Array.isArray(items) || items.length <= 0) return
    this.#saveSnapshot()
    for (const { pathId, color, stripeColor } of items) {
      this.#state[pathId] = stripeColor ? [color, stripeColor] : color
    }
  }

  remove (items) {
    if (!Array.isArray(items) || items.length <= 0) return
    this.#saveSnapshot()
    for (const id of items) {
      delete this.#state[id]
    }
  }

  reset () {
    this.#saveSnapshot()
    this.#state = {}
  }

  undo () {
    if (this.#undoStack.length === 0) return
    this.#redoStack.push({ ...this.#state })
    this.#state = this.#undoStack.pop()
  }

  redo () {
    if (this.#redoStack.length === 0) return
    this.#undoStack.push({ ...this.#state })
    this.#state = this.#redoStack.pop()
  }

  load () {
    this.#state = JSON.parse(window.localStorage.getItem(this.#localStorageKeyName)) || {}
  }

  save () {
    window.localStorage.setItem(this.#localStorageKeyName, JSON.stringify(this.#state))
  }

  #saveSnapshot () {
    this.#undoStack.push({ ...this.#state })
    if (this.#undoStack.length > this.#maxSnapshotHistory) {
      this.#undoStack.shift()
    }
    this.#redoStack.length = 0
  }
}

export { MapState }
