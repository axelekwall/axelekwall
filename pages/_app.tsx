import React from 'react';
import { AppProps } from 'next/app';
import { C } from '../src/types/utils';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import store from '../src/store';
import theme from '../src/styles/theme';

import 'normalize.css';
import '../src/styles/index.css';

const App: C<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

export default App;
