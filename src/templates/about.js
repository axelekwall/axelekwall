import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { FlexRow } from '../components/elements';
import Layout from '../components/Layout';
import Facts from '../components/Facts';
import BreakPoint from '../components/BreakPoint';

const AboutImg = styled(Img)`
  display: flex;
  width: 50%;
`;

const FactsContainer = styled.div`
  display: flex;
  padding: 24px;
  width: 50%;
  align-self: center;
  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    padding: 0px;
  }
`;

const AboutText = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  ${({ theme }) => theme.media.tablet} {
    padding: 0px;
  }
`;

const About = ({
  data: {
    markdownRemark: {
      frontmatter: { title, image },
      html,
    },
  },
}) => (
  <Layout title={title}>
    <FlexRow>
      <BreakPoint show={false} breakPoint={'tablet'}>
        <AboutImg
          imgStyle={{
            objectPosition: 'center right',
          }}
          fixed={image.childImageSharp.fixed}
        />
      </BreakPoint>

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
            fixed(width: 350) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
      html
    }
  }
`;
