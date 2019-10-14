import React, { FunctionComponent, ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import BigTitle from './BigTitle'
import SubTitle, { SubTitleContent } from './SubTitle'
import Nav from './Nav'
import '../styles/index.css'
import Page from './elements/Page'
import ContentWrapper from './elements/ContentWrapper'

interface LayoutProps {
  children?: ReactNode
  title: string
  backgroundColor?: string
  subTitle?: SubTitleContent
  hideNav?: boolean
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
)

export default Layout
