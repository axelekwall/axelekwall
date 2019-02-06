import React from 'react';
import { Link } from 'gatsby';

import { TitleRow } from '../components/elements';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout backgroundColor="main" title="hello,">
    <TitleRow>
      <p className={'front_page_bio'}>
        My name is{' '}
        <Link to="/about">
          <b>Axel Ekwall</b>
        </Link>
        . I am a media technology <b>student</b> at KTH Royal Institute of
        Technology in Stockholm, working as a <b>developer</b>. I am also doing{' '}
        <b>photography</b> and <b>experience design</b>.
      </p>
    </TitleRow>
  </Layout>
);

export default IndexPage;
