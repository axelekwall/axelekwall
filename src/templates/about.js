import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { FlexRow, TextContainer } from '../components/elements';
import Layout from '../components/Layout';
import Facts from '../components/Facts';
import BreakPoint from '../components/BreakPoint';

const AboutImg = styled(Img)`
  display: flex;
  width: 50%;
  align-self: center;
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
      <TextContainer dangerouslySetInnerHTML={{ __html: html }} />
    </FlexRow>
  </Layout>
);

export default About;

export const pageQuery = graphql`
  query AboutPage($slug: String!) {
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
