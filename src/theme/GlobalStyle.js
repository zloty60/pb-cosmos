import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: 'Inter', sans-serif;  
    background-color: ${({ theme }) => theme.bodyBg};
    color:#ffffff;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  #root {
    flex-basis:100%;
  }
`;
