import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #5658DD;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #222;
    font-family: 'Montserrat', sans-serif;
  }
`;