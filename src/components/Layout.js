import React from 'react';
import Helmet from 'react-helmet';

import BigTitle from './BigTitle';
import { Page, ContentWrapper } from './elements';
import SubTitle from './SubTitle';

const Layout = ({ children, title, backgroundColor, subTitle }) => (
  <Page backgroundColor={backgroundColor || 'main'}>
    <Helmet title={title}>
      <html lang="en" />
    </Helmet>
    <ContentWrapper>
      <BigTitle title={title} />
      {subTitle ? <SubTitle text={subTitle} /> : null}
      {children}
    </ContentWrapper>
  </Page>
);

export default Layout;
