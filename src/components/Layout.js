import React from 'react';
import Helmet from 'react-helmet';

import BigTitle from './BigTitle';
import { Page, ContentWrapper } from './elements';

const Layout = ({ children, title, backgroundColor }) => (
  <Page backgroundColor={backgroundColor || 'main'}>
    <Helmet title={title}>
      <html lang="en" />
    </Helmet>
    <ContentWrapper>
      <BigTitle title={title} />
      {children}
    </ContentWrapper>
  </Page>
);

export default Layout;
