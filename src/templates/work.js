import React from 'react';
import { graphql } from 'gatsby';

import { FlexRow, FlexContainer } from '../components/elements';
import Layout from '../components/Layout';
import Card from '../components/Card';

const Work = ({
  data: {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
    allMarkdownRemark: { edges: workArray },
  },
}) => (
  <Layout title={title}>
    <FlexRow>
      <FlexContainer dangerouslySetInnerHTML={{ __html: html }} />
    </FlexRow>
    <FlexRow>
      {workArray.map(({ node }) => (
        <FlexContainer key={node.id} desktopWidth="50%" tabletWidth="50%">
          <Card {...node} />
        </FlexContainer>
      ))}
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
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "work" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
