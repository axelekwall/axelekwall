import React from 'react';

import { FlexRow, TextContainer } from '../components/elements';
import Layout from '../components/Layout';

const Work = ({
  data: {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  },
}) => (
  <Layout title={title}>
    <FlexRow>
      <TextContainer dangerouslySetInnerHTML={{ __html: html }} />
    </FlexRow>
  </Layout>
);

export default Work;

export const pageQuery = graphql`
  query WorkPage($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
