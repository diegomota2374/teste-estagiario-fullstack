import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset de CSS básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Configurações para html e body */
  html, body {
    height: 100%;
  }

  /* Configurações padrão para o body */
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #1e1e1e; /* Cor de fundo escura */
    color: #f5f5f5; /* Cor de texto clara */
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
  }

  /* Estilo padrão para títulos */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 600;
  }

  /* Estilo padrão para links */
  a {
    color: #1e90ff; /* Azul claro */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Estilo padrão para botões */
  button {
    font-family: inherit;
    font-size: 1rem;
    padding: 10px 20px;
    background-color: #282828; /* Fundo escuro */
    color: #f5f5f5; /* Texto claro */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
      background-color: #3c3c3c; /* Fundo um pouco mais claro ao hover */
    }

    &:disabled {
      background-color: #555; /* Cor para botões desativados */
      cursor: not-allowed;
    }
  }

  /* Ajuste de imagens */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Configurações para inputs */
  input, textarea {
    font-family: inherit;
    font-size: 1rem;
    padding: 10px;
    border: 1px solid #3c3c3c;
    border-radius: 5px;
    background-color: #282828;
    color: #f5f5f5;
    
    &:focus {
      outline: none;
      border-color: #1e90ff; /* Azul claro */
    }
  }
`;

export default GlobalStyles;
