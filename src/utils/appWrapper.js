import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';

const AppWrapper = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export default AppWrapper;
