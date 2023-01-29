import styled from "styled-components";
import imgIcon from "./imgSource";
import { buttonHeight, buttonWidth } from "./styleUtils";

export const ContainBT = styled.button`
  width: ${(prop) => buttonWidth(prop.theme)};
  height: ${(prop) => buttonHeight(prop.theme)};
  background:var(--color-purple2);
  border: 2px solid var(--color-purple2);
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: 100%;
  font-weight: 800; 
  color: var(--color-white);
  &:hover,
  &:focus {
    border: 1.2px solid var(--color-purple3);
    box-shadow: 3px 3px inset var(--color-purple3);
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

export const OutlineBT = styled(ContainBT)`
  background: var(--color-purple0);
  color: var(--color-purple2);
  &:hover,
  &:focus {
    border: 1.2px solid var(--color-gray-purple1);
    box-shadow: 3px 3px inset var(--color-gray-purple1);
  }
`

export const PremiumBT = styled(ContainBT)`
  position: relative;
  z-index: 1;
  background: var(--color-purple1) url(${imgIcon.paper}) top left / 20rem; 
  color: var(--color-purple2);
  padding-bottom: 1rem;
  &::after {
    content: '';
    position: absolute;
    top: -15%;
    right: 2%;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: var(--color-purple0);
    border: 2px solid var(--color-purple2);
    border-radius: 0.8rem;
  }
  &:hover,
  &:focus {
    border: 2px solid var(--color-purple2);
    background: var(--color-purple2);
    box-shadow: none;
  }
  
`