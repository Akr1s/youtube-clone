import React from "react";
import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    body {
    font-family: ${(p) => p.theme.fonts.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a.activeLink {
    color: red;
    font-weight: 700;
  }
  
`;

function Global() {
  return <GlobalStyles />;
}

export default Global;
