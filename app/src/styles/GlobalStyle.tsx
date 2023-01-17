import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --color-white: #fff;
    --color-black: #000;
    --color-gray: #EEEEEE;
    --color-red: #BE4B4B;
    --color-blue: #6d8dbd;
    --color-dpblue: #3e5880;
    --color-beige: #fcf8ed;

    --font-base: 10px;
  }

  html {
    font-size: var(--font-base);
  }

  * {
    text-decoration: none;
    box-sizing: border-box;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: inherit;
  }
`
export default GlobalStyle