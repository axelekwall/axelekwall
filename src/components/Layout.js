import React from 'react';
import Helmet from 'react-helmet';

import BigTitle from './BigTitle';
import { Page, ContentWrapper } from './elements';
import SubTitle from './SubTitle';
import Nav from './Nav';

const Layout = ({ children, title, backgroundColor, subTitle, hideNav }) => (
  <Page backgroundColor={backgroundColor || 'main'}>
    <Helmet title={title}>
      <html lang="en" />
    </Helmet>
    <ContentWrapper>
      <BigTitle title={title} />
      {subTitle && <SubTitle text={subTitle} />}
      {children}
    </ContentWrapper>
    {!hideNav && <Nav backgroundColor={backgroundColor || 'main'} />}
  </Page>
);

export default Layout;
