import { FC } from 'react';
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import store from '../src/store';
import theme from '../src/styles/theme';
import 'normalize.css';
import '../src/styles/index.css';
import components from '../src/components';

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
