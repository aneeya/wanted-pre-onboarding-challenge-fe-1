import styled from "styled-components";
import { backgroundColor, fontColor } from "../../styles/styleUtils";
import { BTCustom } from "../../types/buttonCustom";

export default function Button(props: BTCustom) {
  const { text, type, size, onClick, styler, disabled, color } = props

  switch(styler) {
    case 'noborder':
      return <BT.St2
              type={type} 
              style={size}
              disabled={disabled}
              color={color}
              onClick={onClick}>{text}</BT.St2>
    case 'loginstate' :
      return <BT.LoginState
              type={type} 
              style={size}
              disabled={disabled}
              color={color}
              onClick={onClick}>{text}</BT.LoginState>
    default:
      return <BT.St1
              type={type} 
              style={size}
              disabled={disabled}
              color={color}
              onClick={onClick}>{text}</BT.St1>
  }
  
}

//style
const BT: any = {};


BT.St1 = styled.button`
  background: ${(prop) => backgroundColor(prop.color!)}
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${(prop) => fontColor(prop.color!)}
  &:hover,
  &:focus {
    color: var(--color-red);
    border: 2px solid var(--color-red);
    background: var(--color-black);
  }
`
BT.St2 = styled(BT.St1)`
  background: none;
  font-size: 1.4rem;
  color: var(--color-blue);
  &:hover,
  &:focus {
    color: var(--color-dpblue);
    border: none;
    background: none;
  }
`

BT.LoginState = styled(BT.St1)`
  background: var(--color-black);
  color: var(--color-white);
  border-radius: 2rem;
  &:hover,
  &:focus {
    color: var(--color-blue);
    border: 2px solid var(--color-blue);
  }
`