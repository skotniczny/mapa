function rgb2hex (c) {
  return '#' + c.match(/\d+/g).map(x => (+x).toString(16).padStart(2, 0)).join('')
}

export { rgb2hex }
