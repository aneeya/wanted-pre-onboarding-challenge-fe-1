export function buttonWidth(size: string) {
  let width
  switch(size) {
    case 'small':
      width = '7rem'
      break
    case 'medium':
      width = '14rem'
      break
    case 'large':
      width = '26rem'
  }
  return width
}

export function buttonHeight(size: string) {
  let height
  switch(size) {
    case 'small':
      height = '4rem'
      break
    case 'medium':
      height = '5rem'
      break
    case 'large':
      height = '6rem'
  }
  return height
}