import React from 'react';

import { TitleRow } from '../components/elements';
import Layout from '../components/Layout';
import Link from '../components/Link';

const IndexPage = () => (
  <Layout title="hello,">
    <TitleRow>
      <p className={'front_page_bio'}>
        My name is{' '}
        <Link to="/about">
          <b>Axel Ekwall</b>
        </Link>
        . I am a media technology{' '}
        <Link to="/education">
          <b>student</b>
        </Link>{' '}
        at KTH Royal Institute of Technology in Stockholm, working as a{' '}
        <Link to="/work">
          <b>developer</b>
        </Link>
        . I am also doing{' '}
        <Link to="/photography">
          <b>photography</b>
        </Link>{' '}
        and{' '}
        <Link to="/work">
          <b>experience design</b>
        </Link>
        .
      </p>
    </TitleRow>
  </Layout>
);

export default IndexPage;
