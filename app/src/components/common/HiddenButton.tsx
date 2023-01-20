import { forwardRef } from "react"
import styled from "styled-components"

const HiddenButton = forwardRef( (prop: {a: 'hidden'},
ref: React.ForwardedRef<HTMLButtonElement>) => {
  return <Button type="submit" ref={ref}>{prop.a}</Button>
})

//style

const Button = styled.button`
  position: absolute;
  top: -99999px;
  left: -99999px;
  width: 0;
  height: 0;
  clip-path: polygon(0 0, 0 0, 0 0);
`
export default HiddenButton