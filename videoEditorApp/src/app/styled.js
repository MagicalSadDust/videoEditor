import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  html {
    font-size: 30px;
  }

  body {
    position: relative;
    display: flex;   
    justify-content: center; 
    background-color: #202432;
    font-family: 'Roboto', sans-serif;
    color: #393939;
    font-size: 1rem;
  }
`;

export const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202432;
`