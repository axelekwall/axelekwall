import React, { FunctionComponent, ReactNode } from 'react';
import Helmet from 'react-helmet';
import BigTitle from './BigTitle';
import { Page, ContentWrapper } from './elements';
import SubTitle, { SubTitleContent } from './SubTitle';
import Nav from './Nav';

interface LayoutProps {
  children?: ReactNode;
  title: string;
  backgroundColor?: string;
  subTitle?: SubTitleContent;
  hideNav?: boolean;
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  title,
  backgroundColor,
  subTitle,
  hideNav,
}) => (
  <Page backgroundColor={backgroundColor || 'main'}>
    <Helmet title={title}>
      <html lang="en" />
    </Helmet>
    <ContentWrapper>
      <BigTitle title={title} />
      {subTitle && <SubTitle subTitleContent={subTitle} />}
      {children}
    </ContentWrapper>
    {!hideNav && <Nav backgroundColor={backgroundColor || 'main'} />}
  </Page>
);

export default Layout;
