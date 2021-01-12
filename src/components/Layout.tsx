import { FC } from 'react';
import Head from 'next/head';
import Main from './elements/Main';
import Page from './elements/Page';
import Menu from './Menu';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { State } from '../store';

interface LayoutProps {
  title?: string;
  description?: string;
}

const Layout: FC<LayoutProps> = ({ title = 'axelekwall.se', children }) => {
  const menuOpen = useSelector<State, boolean>((state) => state.ui.menuOpen);
  return (
    <Page>
      <Head>
        <title>{title}</title>
        <html lang="en" />
      </Head>
      {!menuOpen && <Main>{children}</Main>}
      <Menu />
      <Footer />
    </Page>
  );
};
export default Layout;
