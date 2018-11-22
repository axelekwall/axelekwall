import React from 'react';
import Helmet from 'react-helmet';

// import Layout from '../components/layout';
// import Image from '../components/image';

const IndexPage = () => (
  <div style={{
    backgroundColor: '#e9e3e6',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }}>
    <Helmet title="axel_ekwall">
      <html lang="en" />
    </Helmet>
    <h1 style={{
      color: '#1e2d24',
    }}>under_construction</h1>
  </div>
);

export default IndexPage;
