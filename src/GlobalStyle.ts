// styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    font-family: sans-serif;
  }

  body {
    background: linear-gradient(135deg, #003f88, #0077b6);
    overflow: hidden; /* impede scroll */
  }
`;
