export function backgroundColor(style: string) {
  let color: string;
  switch(style) {
    case 'ok':
      color = 'var(--color-black);'
      break
    default:
      color = 'var(--color-gray);'
  }
  return color
}

export function fontColor(style: string) {
  let color: string;
  switch(style) {
    case 'ok':
      color = 'var(--color-white);'
      break
    case 'var(--color-gray-purple0)':
      color = 'var(--color-purple3)'
      break
    case 'var(--color-gray-purple1)':
      color = 'var(--color-pruple3)'
      break
    case 'var(--color-purple0)':
      color = 'var(--color-pruple3)'
      break
    default:
      color = 'var(--color-white)'
  }
  return color
}

export function hoverColor(style: string) {
  const color = style === 'var(--color-purple2)' ?
        'var(--color-purple3)' : 
        'var(--color-gray-purple1)'
  return color
}

export function buttonWidth(size: string) {
  const width = size === 'small' ? '8rem' : '14rem'
  return width
}

export function buttonHeight(size: string) {
  const height = size === 'small' ? '4rem' : '5rem'
  return height
}