import React from 'react';
import Helmet from 'react-helmet';

// import Layout from '../components/layout';
// import Image from '../components/image';
import Navigation from '../components/Navigation';
import { root, content, titleRow, bioRow } from './index.module.css';

const IndexPage = () => (
  <div className={root}>
    <Helmet title="axel_ekwall">
      <html lang="en" />
    </Helmet>
    <Navigation />
    <div className={content}>
      <div className={titleRow}>
        <h1 className={'big_title'}>Hello,</h1>
      </div>
      <div className={bioRow}>
        <p className={'front_page_bio'}>
          My name is <b>Axel Ekwall</b>. I am a media technology <b>student</b>{' '}
          at KTH Royal Institute of Technology in Stockholm, working as a{' '}
          <b>developer</b>. I am also doing <b>photography</b> and{' '}
          <b>experience design</b>.
        </p>
      </div>
    </div>
  </div>
);

export default IndexPage;
