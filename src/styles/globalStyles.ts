import { createGlobalStyle } from 'styled-components';
import { styleGuide } from './style-guide';

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
      height: 100%;
      scroll-behavior: smooth;
  }

  @media (max-width: ${styleGuide.breakpoints.medium}) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: ${styleGuide.breakpoints.small}) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    overflow-x: hidden;
    background: ${styleGuide.colors.backgroundLight};
    color: ${styleGuide.colors.gray.color90};
    -webkit-font-smoothing: antialiased !important;
  }
  
  body, input, textarea, select, button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  strong, h1, h2, h3, h4, h5, h6 {
      font-weight: 700;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 1.875rem white inset !important;
  }


  .container {
    width: 100%;
    max-width: 1216px;
    margin: 0 auto;
    padding: 0 0.9375rem;
  }
`;
