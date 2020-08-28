import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../src/themes/bcom'

const GlobalStyles = createGlobalStyle`
  ${theme.cssVars};
`;

const ThemeDecorator = storyFn => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  );
};

export default ThemeDecorator;
