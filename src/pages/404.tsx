import React, { ReactElement } from 'react';
import Layout from '../components/Layout';

const NotFoundPage = (): ReactElement => (
  <Layout
    title="404"
    subTitle="You just hit a route that does not exist... the sadness."
  />
);

export default NotFoundPage;
