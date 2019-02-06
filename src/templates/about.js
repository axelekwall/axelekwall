import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { FlexRow } from '../components/elements';
import Layout from '../components/Layout';
import Facts from '../components/Facts';

const AboutImg = styled(Img)`
  display: flex;
  min-width: 400px;
  width: 50%;
`;

const FactsContainer = styled.div`
  display: flex;
  min-width: 400px;
  width: 50%;
  align-self: center;
`;

const AboutText = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
`;

const About = ({
  data: {
    markdownRemark: {
      frontmatter: { title, image },
      html,
    },
  },
}) => (
  <Layout backgroundColor="main" title={title}>
    <FlexRow>
      <AboutImg
        imgStyle={{
          objectPosition: 'center right',
        }}
        fixed={image.childImageSharp.fixed}
      />
      <FactsContainer>
        <Facts />
      </FactsContainer>
    </FlexRow>
    <FlexRow>
      <AboutText>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </AboutText>
    </FlexRow>
  </Layout>
);

export default About;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
      html
    }
  }
`;
