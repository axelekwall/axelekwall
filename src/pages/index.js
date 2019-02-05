import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import { Page,  TitleRow, ContentWrapper } from '../components/elements';

const IndexPage = () => (
  <Page backgroundColor="main">
    <Helmet title="hello">
      <html lang="en" />
    </Helmet>
    <ContentWrapper>
      <TitleRow>
        <h1 className={'big_title'}>hello,</h1>
      </TitleRow>
      <TitleRow>
        <p className={'front_page_bio'}>
          My name is{' '}
          <Link to="/about">
            <b>Axel Ekwall</b>
          </Link>
          . I am a media technology <b>student</b> at KTH Royal Institute of
          Technology in Stockholm, working as a <b>developer</b>. I am also
          doing <b>photography</b> and <b>experience design</b>.
        </p>
      </TitleRow>
    </ContentWrapper>
  </Page>
);

export default IndexPage;
