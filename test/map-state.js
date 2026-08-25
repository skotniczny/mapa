import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { MapState } from '../src/js/map-state.js'

const oneChange = () => {
  const mapState = new MapState()
  mapState.set([
    { pathId: 'path1', color: '#123456', stripeColor: '#654321' },
    { pathId: 'path2', color: '#123456', stripeColor: '#654321' },
    { pathId: 'path3', color: '#000000' }
  ])
  return mapState
}

const twoChanges = () => {
  const mapState = new MapState()
  mapState.set([{ pathId: 'path1', color: '#111111' }])
  mapState.set([{ pathId: 'path2', color: '#222222' }])
  return mapState
}

const manyChanges = (count) => {
  const mapState = new MapState()
  if (count <= 0) return mapState
  for (let i = 0; i < count; i += 1) {
    const c = (i % 255).toString(16).padStart(2, '0')
    const color = `#${c}${c}${c}`
    mapState.set([{ pathId: `path${i}`, color }])
  }
  return mapState
}

describe('get / keys', () => {
  it('zwraca id ścieżek', () => {
    const mapState = oneChange()
    assert.deepEqual(mapState.keys, ['path1', 'path2', 'path3'])
  })

  it('zwraca kolor ścieżki', () => {
    const mapState = oneChange()
    assert.equal(mapState.get('path3'), '#000000')
  })

  it('zwraca parę [kolor, kolor kreskowania] dla ścieżki z kreskowaniem', () => {
    const mapState = oneChange()
    assert.deepEqual(mapState.get('path1'), ['#123456', '#654321'])
  })
})

describe('set', () => {
  it('dodaje kreskowanie do ścieżki', () => {
    const mapState = oneChange()
    mapState.set([{ pathId: 'path3', color: '#000000', stripeColor: '#ff0000' }])
    assert.deepEqual(mapState.get('path3'), ['#000000', '#ff0000'])
  })

  it('nadpisuje istniejącą ścieżkę', () => {
    const mapState = oneChange()
    mapState.set([{ pathId: 'path3', color: '#222222' }])
    assert.equal(mapState.get('path3'), '#222222')
  })

  it('tylko ścieżki w tablicach są dodawane', () => {
    const mapState = new MapState()
    mapState.set({ pathId: 'path1', color: '#123456' })
    assert.deepEqual(mapState.keys, [])
  })
})

describe('remove', () => {
  it('usuwa wskazane ścieżki, zostawiając pozostałe', () => {
    const mapState = oneChange()
    mapState.remove(['path1', 'path2'])
    assert.deepEqual(mapState.keys, ['path3'])
  })
})

describe('reset', () => {
  it('czyści wszystkie ścieżki', () => {
    const mapState = oneChange()
    mapState.reset()
    assert.deepEqual(mapState.keys, [])
  })
})

describe('undo / redo', () => {
  it('nowa instancja nie ma czego cofać ani ponawiać', () => {
    const mapState = new MapState()
    assert.equal(mapState.canUndo, false)
    assert.equal(mapState.canRedo, false)
  })

  it('po zmianie można cofnąć, ale nie ponowić', () => {
    const mapState = twoChanges()
    assert.equal(mapState.canUndo, true)
    assert.equal(mapState.canRedo, false)
  })

  it('cofa do poprzedniego stanu', () => {
    const mapState = twoChanges()
    mapState.undo()
    assert.deepEqual(mapState.keys, ['path1'])
    assert.equal(mapState.canRedo, true)
  })

  it('ponawia cofniętą zmianę', () => {
    const mapState = twoChanges()
    mapState.undo()
    mapState.redo()
    assert.deepEqual(mapState.keys, ['path1', 'path2'])
    assert.equal(mapState.canRedo, false)
  })

  it('cofa do stanu pustego i wraca', () => {
    const mapState = twoChanges()
    mapState.undo()
    mapState.undo()
    assert.deepEqual(mapState.keys, [])
    assert.equal(mapState.canUndo, false)

    mapState.redo()
    mapState.redo()
    assert.deepEqual(mapState.keys, ['path1', 'path2'])
  })

  it('nowa zmiana czyści stos ponawiania', () => {
    const mapState = twoChanges()
    mapState.undo()
    mapState.set([{ pathId: 'path3', color: '#333333' }])
    assert.equal(mapState.canRedo, false)
    assert.deepEqual(mapState.keys, ['path1', 'path3'])
  })

  it('cofanie i ponawianie przy pustym stosie nic nie robi', () => {
    const mapState = new MapState()
    mapState.undo()
    mapState.redo()
    assert.deepEqual(mapState.keys, [])
  })

  it('historia przechowuje maksymalnie 25 kroków', () => {
    const mapState = manyChanges(30)
    let steps = 0
    while (mapState.canUndo) {
      mapState.undo()
      steps += 1
    }
    assert.equal(steps, 25)
    assert.equal(mapState.keys.length, 5)
  })
})

describe('zapis do historii', () => {
  it('pusta lista nie tworzy wpisu', () => {
    const mapState = new MapState()
    mapState.set([])
    mapState.remove([])
    assert.equal(mapState.canUndo, false)
  })

  it('argument inny niż tablica nie tworzy wpisu', () => {
    const mapState = oneChange()
    mapState.remove('path1')
    assert.deepEqual(mapState.keys, ['path1', 'path2', 'path3'])
    mapState.undo()
    assert.deepEqual(mapState.keys, [])
  })

  it('pomija nieistniejące ścieżki, a usunięcie pozostałych da się cofnąć', () => {
    const mapState = oneChange()
    mapState.remove(['path1', 'nieistnieje'])
    assert.deepEqual(mapState.keys, ['path2', 'path3'])
    mapState.undo()
    assert.deepEqual(mapState.keys, ['path1', 'path2', 'path3'])
  })
})
