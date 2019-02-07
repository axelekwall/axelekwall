import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';

import { TitleRow } from '../components/elements';

const Paragraph = styled.p`
  text-align: center;
  width: 100%;
`;

const NotFoundPage = () => (
  <Layout title="404">
    <TitleRow>
      <Paragraph>
        You just hit a route that does not exist... the sadness.
      </Paragraph>
    </TitleRow>
  </Layout>
);

export default NotFoundPage;
