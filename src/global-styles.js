
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Defina estilos globais aqui */
  #root,body {
    font-family: Arial, sans-serif;
    background-color: rgb(48 2 25);
    height: 100vh;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  /* Outros estilos globais */

  #no-game{
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin:2rem 15%;
  }
`;
