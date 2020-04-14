import React, { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Main from './elements/Main';
import Page from './elements/Page';

interface LayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, title }) => (
  <Page>
    <Helmet>
      <title>{title ?? 'axel ekwall'}</title>
      <html lang="en" />
    </Helmet>
    <Main>{children}</Main>
  </Page>
);

export default Layout;
