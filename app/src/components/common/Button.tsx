import styled from "styled-components";
import { buttonHeight, buttonWidth, fontColor, hoverColor } from "../../styles/styleUtils";
import { BTCustom } from "../../types/buttonCustom";

export default function Button(props: BTCustom) {
  const { text, type, size, onClick, styler, disabled, color } = props

  switch(styler) {
    case 'noborder':
      return <BT.St2
              type={type} 
              disabled={disabled}
              color={color}
              onClick={onClick}>{text}</BT.St2>
    case 'loginstate' :
      return <BT.LoginState
              type={type}
              color={color} 
              onClick={onClick}>{text}</BT.LoginState>
    default:
      return <BT.Default
              type={type} 
              disabled={disabled}
              color={color}
              theme={size}
              onClick={onClick}>{text}</BT.Default>
  }
  
}

//style
const BT: any = {};


BT.Default = styled.button`
  width: ${(prop) => buttonWidth(prop.theme)};
  height: ${(prop) => buttonHeight(prop.theme)};
  background: ${(prop) => prop.color!};
  border: ${(prop) => {
    return prop.color === 'var(--color-purple2)' 
           ? 'none' 
           : '2px solid var(--color-purple2)'
  }};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 800; 
  color: ${(prop) => fontColor(prop.color!)};
  &:hover,
  &:focus {
    border: 1px solid ${(prop) => hoverColor(prop.color!)};
    box-shadow: 3px 3px inset ${(prop) => hoverColor(prop.color!)};
  }
  &:disabled {
    &:hover,
    &:focus {
      border: 2px solid var(--color-red-orange);
      box-shadow: none;
      cursor: not-allowed;
    }
  }
`


BT.St2 = styled(BT.Default)`
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

BT.LoginState = styled.button`
  width: 7rem;
  height: 4rem;
  background: ${(prop) => prop.color!};
  color: var(--color-purple3);
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: var(--font-english);
  font-weight: 700;
  &:hover,
  &:focus {
    background: ${(prop) => {
        return prop.color === 'var(--color-yellow)' ? 
        'var(--color-orange)' :
        'var(--color-gray-purple1)'
      }
    }};
  }
`