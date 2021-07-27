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

  ul{
    list-style-type: none;
  }

  a.activeLink {
    color: red;
    font-weight: 700;
  }
  .icon{
    margin-right: 5px;
  }

  .paginationItemSelected {
    background-color: rgba(0, 0, 0, 0.08);
  }
  
  .paginationItemDisabled {
    pointer-events: none;
  }
  
  .paginationItemDisabled:hover {
    background-color: transparent;
    cursor: default;
  }
`;

function Global() {
  return <GlobalStyles />;
}

export default Global;
