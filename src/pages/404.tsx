import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import P from '../components/elements/P';

const NotFoundPage: FunctionComponent = () => (
  <Layout title="404">
    <P>You just hit a route that does not exist... the sadness.</P>
  </Layout>
);

export default NotFoundPage;
