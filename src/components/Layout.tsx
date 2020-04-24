import React, { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Main from './elements/Main';
import Page from './elements/Page';
import Menu from './Menu';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { State } from '../store';

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
}) => {
  const menuOpen = useSelector<State, boolean>((state) => state.ui.menuOpen);
  return (
    <Page>
      <Helmet>
        <title>{pageContext?.frontmatter?.title ?? title}</title>
        <html lang="en" />
      </Helmet>
      {!menuOpen && <Main>{children}</Main>}
      <Menu />
      <Footer />
    </Page>
  );
};
export default Layout;
