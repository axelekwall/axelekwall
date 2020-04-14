import React, { FunctionComponent, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/theme';
import components from '../components';

// Global styles
import 'normalize.css';
import '../styles/index.css';

interface Props {
  element: ReactNode;
}

const AppWrapper: FunctionComponent<Props> = ({ element }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
);

export default AppWrapper;
