import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';

const NotFoundPage: FunctionComponent = () => (
  <Layout
    hideNav
    title="404"
    subTitle="You just hit a route that does not exist... the sadness."
  />
);

export default NotFoundPage;
