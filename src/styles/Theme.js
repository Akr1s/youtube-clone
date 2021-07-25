import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes/default";
import Global from "./Global";

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
