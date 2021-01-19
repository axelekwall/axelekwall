import { FC } from 'react';
import Head from 'next/head';
import Main from './elements/Main';
import Page from './elements/Page';
import Menu from './Menu';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { State } from '../store';

export interface Meta {
  title?: string;
  description?: string;
}

interface LayoutProps {
  meta: Meta;
}

const Layout: FC<LayoutProps> = ({
  meta: { title = 'axelekwall.se', description = '' },
  children,
}) => {
  const menuOpen = useSelector<State, boolean>((state) => state.ui.menuOpen);
  return (
    <Page>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/media/a_e_logo.png" />
      </Head>
      {!menuOpen && <Main>{children}</Main>}
      <Menu />
      <Footer />
    </Page>
  );
};
export default Layout;
