import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/theme';

// Global styles
import '../styles/index.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps}></Component>
  </ThemeProvider>
);

export default App;
