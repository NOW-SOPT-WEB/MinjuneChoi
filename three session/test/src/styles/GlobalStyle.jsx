import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0;
    font-family: 'Comic Sans MS', 'Arial', sans-serif;
    background: #EED1D1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
