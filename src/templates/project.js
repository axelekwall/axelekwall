import React from 'react';
import { graphql } from 'gatsby';

import { FlexRow, TextContainer } from '../components/elements';
import Layout from '../components/Layout';

const Project = ({
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

export default Project;

export const pageQuery = graphql`
  query ProjectPage($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
