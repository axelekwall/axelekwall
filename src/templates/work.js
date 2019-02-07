import React from 'react';

import Layout from '../components/Layout';

const Work = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout title={'work'}>
    <p>{frontmatter.title}</p>
    <p dangerouslySetInnerHTML={{ __html: html }} />
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
