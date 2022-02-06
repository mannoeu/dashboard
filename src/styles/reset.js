import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Roboto", sans-serif;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    height: 100%;
    font-size: 1em;

  }

  button {
    cursor: pointer;
  }

  input, textarea, button, *::placeholder {
    font-family: "Roboto", sans-serif;
  }

  @media (max-width: 499px) {
    html {
      font-size: 75%;
    }
  }

  @media (min-width: 500px) {
    html {
      font-size: 80%;
    }
  }

  @media (min-width: 700px) {
    html {
      font-size: 85%;
    }
  }

  @media (min-width: 1200px) {
    html {
      font-size: 90%;
    }
  }
  @media (min-width: 1500px) {
    html {
      font-size: 95%;
    }
  }

  @media (min-width: 1700px) {
    html {
      font-size: 100%;
    }
  }

  @media (min-width: 1900px) {
    html {
      font-size: 110%;
    }
  }

`;
