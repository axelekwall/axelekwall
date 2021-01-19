import { FC } from 'react';
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import store from '../store';
import theme from '../styles/theme';

import 'normalize.css';
import '../styles/index.css';
import components from '../components';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
