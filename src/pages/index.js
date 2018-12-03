import React from 'react';
import Helmet from 'react-helmet';

import styles from './index.module.css';

const IndexPage = () => (
  <div className={styles.root}>
    <Helmet title="axel_ekwall">
      <html lang="en" />
    </Helmet>
    <div className={styles.content}>
      <div className={styles.textRow}>
        <h1 className={'big_title'}>Hello,</h1>
      </div>
      <div className={styles.textRow}>
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
