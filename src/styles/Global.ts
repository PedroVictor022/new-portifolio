import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #5658DD;
    --secondary-color:#222222;
    --footer-color:#17171C;
    --black-2: #1b1b1b;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* background-color: var(--secondary-color); */
    font-family: 'Montserrat', sans-serif;
  }
`;

// Contains all components of application
export const Container = styled.div`
  background-color: var(--secondary-color);
`;
// Default template components
export const Layout = styled.div`
  /* CONFIG WIDTH AND HEIGHT */
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 700px) {
    height: 60vh;
  }
`;
