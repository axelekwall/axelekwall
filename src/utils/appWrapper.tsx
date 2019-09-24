import React, { ReactElement, FunctionComponent, ReactNode } from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';

interface Props {
  element: ReactNode;
}

const AppWrapper: FunctionComponent<Props> = ({ element }): ReactElement => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export default AppWrapper;
