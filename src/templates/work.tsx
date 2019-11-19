import React, { FunctionComponent, ReactElement } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Card from '../components/Card';
import FlexRow from '../components/elements/FlexRow';
import FlexContainer from '../components/elements/FlexContainer';

interface Props {
  data: any;
}

const Work: FunctionComponent<Props> = ({
  data: {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
    allMarkdownRemark: { edges: workArray },
  },
}): ReactElement => (
  <Layout title={title}>
    <FlexRow>
      <FlexContainer dangerouslySetInnerHTML={{ __html: html }} />
    </FlexRow>
    <FlexRow>
      {workArray.map(
        ({ node }: any): ReactElement => (
          <FlexContainer key={node.id} desktopWidth="50%" tabletWidth="50%">
            <Card {...node} />
          </FlexContainer>
        )
      )}
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
            slug
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
