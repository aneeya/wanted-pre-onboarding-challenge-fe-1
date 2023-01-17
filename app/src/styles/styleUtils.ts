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
    default:
      color = 'var(--color-black);'
  }
  return color
}

