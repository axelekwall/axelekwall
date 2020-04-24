import React, { FunctionComponent, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/theme';
import components from '../components';
import store from '../store';
import { Provider } from 'react-redux';

// Global styles
import 'normalize.css';
import '../styles/index.css';

interface Props {
  element: ReactNode;
}

const AppWrapper: FunctionComponent<Props> = ({ element }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeProvider>
  </Provider>
);

export default AppWrapper;
