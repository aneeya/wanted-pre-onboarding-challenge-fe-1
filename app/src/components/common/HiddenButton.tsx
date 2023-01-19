import { forwardRef } from "react"
import styled from "styled-components"
import { HiddenBTCustom } from "../../types/buttonCustom"

const HiddenButton = forwardRef( (prop: HiddenBTCustom, ref: React.ForwardedRef<HTMLButtonElement>) => {
  return <Button type={prop.type} ref={ref}></Button>
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