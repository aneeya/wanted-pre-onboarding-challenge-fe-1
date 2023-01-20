import { keyframes } from "styled-components";

export const longinMove = keyframes`
  0% {
    margin-left: 0.3rem;
    background-color: var(--color-red-orange);
    transform: rotate(0);
  }
  100% {
    margin-left: 5.3rem;
    background-color: var(--color-gray-purple0);
    transform: rotate(180deg);
  }
`

export const gotojoinText = keyframes`
  100% {
    font-size: 2.4rem;
  }
`
