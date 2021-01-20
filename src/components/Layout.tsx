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
    title?: string;
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
        <title key="title">{title}</title>
        <link rel="shortcut icon" href="/media/a_e_logo.png" />
        <meta name="description" content={description} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:title" property="og:title" content={og?.title || title} />
        <meta
          key="og:description"
          property="og:description"
          content={og?.description || description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={`${
            process.env.VERCEL_URL
              ? `https://${process.env.VERCEL_URL}`
              : 'http://localhost:3000'
          }${og?.image || '/media/a_e_logo.png'}`}
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
