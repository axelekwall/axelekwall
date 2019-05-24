import React, { ReactElement, FunctionComponent, ReactNode } from 'react';
import Helmet from 'react-helmet';
import BigTitle from './BigTitle';
import { Page, ContentWrapper } from './elements';
import SubTitle from './SubTitle';
import Nav from './Nav';

interface Props {
  children: ReactNode;
  title: string;
  backgroundColor?: string;
  subTitle?: string;
  hideNav?: boolean;
}

const Layout: FunctionComponent<Props> = ({
  children,
  title,
  backgroundColor,
  subTitle,
  hideNav,
}): ReactElement => (
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
