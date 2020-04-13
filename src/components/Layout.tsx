import React, { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import Main from './elements/Main';
import Page from './elements/Page';

interface LayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, title }) => (
  <Page>
    <Head>
      <title>{title ?? 'axel ekwall'}</title>
      <html lang="en" />
    </Head>
    <Main>{children}</Main>
  </Page>
);

export default Layout;
