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
  og?: {
    image?: string;
    description?: string;
  };
}

interface LayoutProps {
  meta: Meta;
  disableTracking?: boolean;
}

const defaultDescription =
  'This is my personal site where I share my work with the world.';

const Layout: FC<LayoutProps> = ({
  meta: { title = 'axelekwall.se', description = defaultDescription, og },
  disableTracking = false,
  ...props
}) => {
  const menuOpen = useSelector<State, boolean>((state) => state.ui.menuOpen);
  return (
    <Page>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/media/a_e_logo.png" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={og?.description || description}
        />
        <meta
          property="og:image"
          content={og?.image || '/media/me_image.jpg'}
        />
        {process.env.NODE_ENV === 'production' && !disableTracking && (
          <script
            async
            defer
            data-domain="axelekwall.se"
            src="https://plausible.io/js/plausible.js"
          ></script>
        )}
      </Head>
      {!menuOpen && <Main {...props} />}
      <Menu />
      <Footer />
    </Page>
  );
};
export default Layout;
