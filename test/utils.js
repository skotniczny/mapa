import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rgb2hex } from '../src/js/utils.js'

test('nie zwraca koloru jeśli wejście nie jest w formacie rgb(r, g, b)', () => {
  assert.equal(rgb2hex(undefined), undefined)
  assert.equal(rgb2hex(''), undefined)
  assert.equal(rgb2hex('(255, 255, 255, 255)'), undefined)
  assert.equal(rgb2hex('r(255, 255, 255)'), undefined)
  assert.equal(rgb2hex('rg(255, 255, 255)'), undefined)
  assert.equal(rgb2hex('rgb(255, 255, 255, 255)'), undefined)
  assert.equal(rgb2hex('rgba(255, 255, 255, 0.5)'), undefined)
  assert.equal(rgb2hex('url(#stripes_ff0000)'), undefined)
})

test('konwertuje kolory rgb na hex', () => {
  assert.equal(rgb2hex('rgb(255, 255, 255)'), '#ffffff')
  assert.equal(rgb2hex('rgb(0, 0, 0)'), '#000000')
  assert.equal(rgb2hex('rgb(255, 0, 0)'), '#ff0000')
})
