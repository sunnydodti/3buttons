function getClassName(type, color) {
  return `${type}-${color}`
}

export function getButtonClass(color) {
  return getClassName('button', color)
}

export function getBarClassColored(color) {
  return getClassName('color-bar', color)
}

export function getBarClassSize(emptySpace) {
  return getClassName('color-bar', emptySpace)
}