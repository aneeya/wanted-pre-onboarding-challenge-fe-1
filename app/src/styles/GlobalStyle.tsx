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
    
    --color-purple0: #f4e9ff;
    --color-purple1: #e7d2ff;
    --color-purple2: #c2a4ed;
    --color-purple3: #0a0523;

    --color-gray-purple0: #bab0c6;
    --color-gray-purple1: #8b7e9e;

    --color-green0: #10437a;
    --color-green1: #0a3760;

    --color-red-orange: #f76559;
    --color-orange: #d86d55;
    --color-gray-orange: #e2998d; 
    --color-yellow: #f9c758;

    --font-base: 10px;

    --font-korea: 'Gothic A1', sans-serif;
    --font-english: 'Unbounded', cursive;
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