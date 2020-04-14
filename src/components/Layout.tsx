import React, { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Main from './elements/Main';
import Page from './elements/Page';

interface LayoutProps {
  pageContext?: { frontmatter?: { title?: string } };
  children?: ReactNode;
  title?: string;
  description?: string;
}

const Layout: FunctionComponent<LayoutProps> = ({
  pageContext,
  title = 'axelekwall.se',
  children,
}) => (
  <Page>
    <Helmet>
      <title>{pageContext?.frontmatter?.title ?? title}</title>
      <html lang="en" />
    </Helmet>
    <Main>{children}</Main>
  </Page>
);

export default Layout;
