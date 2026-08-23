function rgb2hex (rgb) {
  const match = rgb?.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\)/)
  if (!match) return
  return '#' + match.slice(1).map(x => (Number(x)).toString(16).padStart(2, '0')).join('')
}

export { rgb2hex }
