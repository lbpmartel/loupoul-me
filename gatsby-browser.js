import React from "react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./src/themes/theme";

const GlobalStyles = createGlobalStyle`
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   body, html {
      font-family: ${ props => props.theme.fonts.main };
      height: 100%;
   }
`

export const wrapRootElement = ({ element }) => (
   <ThemeProvider theme={ theme } >
      <GlobalStyles />
      { element }
   </ThemeProvider >
);