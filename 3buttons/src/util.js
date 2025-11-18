function getClassName(type, color) {
  return `${type}-${color}`
}

export function getButtonClass(color) {
  return getClassName('button', color)
}

export function getColorClass(color) {
  return getClassName('color', color)
}

export function getVerticalBarClassSize(emptySpace) {
  return getClassName('color-bar-vertical', emptySpace)
}