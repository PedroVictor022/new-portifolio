import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #5658DD;
    --secondary-color:#222222;
    --footer-color:#17171C;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* background-color: var(--secondary-color); */
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
  background-color: var(--secondary-color);
`